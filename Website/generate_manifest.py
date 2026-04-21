#!/usr/bin/env python3
"""
generate_manifest.py
====================
Scans every gallery folder for thumbnail images and writes a sorted
``manifest.json`` next to the thumbnails.  Run this locally whenever
you add or remove images, then re-upload the affected folder(s) to
Columbia's CUNIX static-hosting space.

Usage
-----
    python generate_manifest.py            # scans all known gallery folders
    python generate_manifest.py adultbrain # scans one specific folder

Directory convention (must match your HTML files):
    <gallery>/           ← full-size images   (e.g. adultbrain/foo.jpg)
    <gallery>/_thumb/    ← thumbnail images   (e.g. adultbrain/_thumb/foo.jpg)
    <gallery>/manifest.json  ← GENERATED — list of thumbnail filenames

The gallery HTML files read manifest.json at load time.  PHP is NOT needed.
"""

import json
import os
import sys

# ── Configuration ────────────────────────────────────────────────────────────
GALLERY_FOLDERS = ["adultbrain", "adultvnc", "larval"]
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp"}
# ─────────────────────────────────────────────────────────────────────────────


def build_manifest(gallery: str) -> None:
    thumb_dir = os.path.join(gallery, "_thumb")

    if not os.path.isdir(thumb_dir):
        print(f"  [SKIP] {gallery}/_thumb/ not found — skipping.")
        return

    filenames = sorted(
        f for f in os.listdir(thumb_dir)
        if os.path.splitext(f)[1].lower() in IMAGE_EXTENSIONS
    )

    manifest_path = os.path.join(gallery, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as fh:
        json.dump(filenames, fh, indent=2)

    print(f"  [OK]   {manifest_path}  ({len(filenames)} images)")


def main() -> None:
    # Allow the user to pass specific folder names on the command line.
    targets = sys.argv[1:] if len(sys.argv) > 1 else GALLERY_FOLDERS

    print("Generating gallery manifests…")
    for gallery in targets:
        build_manifest(gallery)
    print("Done.  Re-upload the changed folder(s) to CUNIX.")


if __name__ == "__main__":
    main()
