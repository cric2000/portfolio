"""Regenerate the portfolio's vector favicon, raster icons, and sharing card.

Run from any directory with Python 3 and Pillow installed. The generated files
are committed, so neither Python nor Pillow is needed to build the website.
"""

from pathlib import Path
import json
import shutil

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "app"
ICONS = ROOT / "public" / "icons"
FONT = APP / "fonts" / "Manrope.ttf"
GREEN = "#27634b"
INK = "#25252b"
MUTED = "#686872"
WHITE = "#ffffff"
NAME = "Anmol Lamba"
ROLE = "Full-Stack Software Engineer"
TAGLINE = "Web · Mobile · Backend"

# Custom outlines remain crisp without depending on fonts at favicon sizes.
A_OUTLINE = [(4.5, 24), (10.25, 8), (13.75, 8), (19.5, 24),
             (15.7, 24), (14.55, 20.4), (9.35, 20.4), (8.2, 24)]
A_COUNTER = [(10.35, 17.1), (13.55, 17.1), (11.95, 12.2)]
L_OUTLINE = [(21, 8), (24.6, 8), (24.6, 20.4), (29, 20.4), (29, 24), (21, 24)]


def monogram(size, *, inset=1.0, rounded=True):
    scale = size * 4 / 32
    canvas = Image.new("RGBA", (size * 4, size * 4), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    bounds = (0, 0, size * 4 - 1, size * 4 - 1)
    if rounded:
        draw.rounded_rectangle(bounds, radius=6 * scale, fill=GREEN)
    else:
        draw.rectangle(bounds, fill=GREEN)

    def points(outline):
        return [((16 + (x - 16) * inset) * scale,
                 (16 + (y - 16) * inset) * scale) for x, y in outline]

    draw.polygon(points(A_OUTLINE), fill=WHITE)
    draw.polygon(points(A_COUNTER), fill=GREEN)
    draw.polygon(points(L_OUTLINE), fill=WHITE)
    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def sharing_card():
    scale = 2
    canvas = Image.new("RGB", (1200 * scale, 630 * scale), WHITE)
    draw = ImageDraw.Draw(canvas)

    def font(size, weight):
        result = ImageFont.truetype(str(FONT), size * scale)
        result.set_variation_by_axes([weight])
        return result

    def text(position, value, size, weight, color):
        draw.text(tuple(v * scale for v in position), value,
                  font=font(size, weight), fill=color, anchor="lt")

    logo = monogram(72 * scale)
    canvas.paste(logo, (72 * scale, 64 * scale), logo)
    text((168, 86), "SOFTWARE / ENGINEERING", 18, 550, MUTED)
    text((70, 238), NAME, 88, 650, INK)
    text((73, 352), ROLE, 35, 450, MUTED)
    draw.line((72 * scale, 462 * scale, 1128 * scale, 462 * scale),
              fill="#dedee5", width=scale)
    text((73, 501), TAGLINE, 24, 550, GREEN)
    # The same simple outward arrow used beside links on the website.
    draw.line((1090 * scale, 527 * scale, 1112 * scale, 505 * scale),
              fill=GREEN, width=3 * scale)
    draw.line((1090 * scale, 505 * scale, 1112 * scale, 505 * scale,
               1112 * scale, 527 * scale), fill=GREEN, width=3 * scale)
    return canvas.resize((1200, 630), Image.Resampling.LANCZOS)


def main():
    ICONS.mkdir(parents=True, exist_ok=True)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <title>Anmol Lamba</title>
  <rect width="32" height="32" rx="6" fill="{GREEN}"/>
  <path fill="{WHITE}" fill-rule="evenodd" d="M4.5 24 10.25 8h3.5l5.75 16h-3.8l-1.15-3.6h-5.2L8.2 24Zm5.85-6.9h3.2l-1.6-4.9Z"/>
  <path fill="{WHITE}" d="M21 8h3.6v12.4H29V24h-8Z"/>
</svg>
'''
    (APP / "icon.svg").write_text(svg)
    monogram(256).save(APP / "favicon.ico", format="ICO",
                       sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    # An inset mark also stays within mobile home-screen masking safe areas.
    monogram(180, inset=0.8, rounded=False).save(APP / "apple-icon.png", optimize=True)
    for size in (192, 512):
        monogram(size, inset=0.8, rounded=False).save(
            ICONS / f"icon-{size}.png", optimize=True)

    preview = sharing_card()
    preview.save(APP / "opengraph-image.png", optimize=True)
    shutil.copyfile(APP / "opengraph-image.png", APP / "twitter-image.png")
    alt = f"{NAME} — {ROLE}. {TAGLINE}."
    for image in ("opengraph-image", "twitter-image"):
        (APP / f"{image}.alt.txt").write_text(alt + "\n")

    manifest = {
        "name": NAME,
        "short_name": "Anmol",
        "description": f"{NAME} — {ROLE}",
        "start_url": "/",
        "icons": [
            {"src": f"/icons/icon-{size}.png", "sizes": f"{size}x{size}",
             "type": "image/png", "purpose": "any maskable"}
            for size in (192, 512)
        ],
        "theme_color": GREEN,
        "background_color": WHITE,
        "display": "standalone",
    }
    (ROOT / "public" / "site.webmanifest").write_text(json.dumps(manifest, indent=2) + "\n")
    print("Generated AL icons and 1200×630 Manrope sharing previews.")


if __name__ == "__main__":
    main()
