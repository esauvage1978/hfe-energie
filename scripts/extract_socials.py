import re
import sys


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: extract_socials.py <file>")
        return 2

    path = sys.argv[1]
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        s = f.read()

    urls = set(re.findall(r"https?://[^\s\"'>)]+", s, flags=re.IGNORECASE))
    social = sorted(
        u
        for u in urls
        if any(x in u.lower() for x in ("facebook.com", "instagram.com", "linkedin.com"))
    )
    for u in social:
        print(u)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

