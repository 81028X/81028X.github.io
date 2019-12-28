#!/bin/sh
## Example of a broken script.
QUALITY=90
for f in *.jpg *.png
do
  cwebp -q $QUALITY "$f" -o "${f%%.*}.webp"
done

