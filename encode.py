#!/usr/bin/env python3

import sys
import base64

def main():
    """_summary_
    """
    if len(sys.argv) < 2:
        print("Usage: python3 encode.py <filename>")
        sys.exit(1)   
    filename = sys.argv[1]
    print(base64encode(filename))
    
def base64encode(file_path):
    """_summary_
    """
    with open(file_path, "rb") as f:
        data = f.read()
    encoded = base64.urlsafe_b64encode(data).decode("utf-8")
    encoded = encoded.replace("=", "")
    return encoded

if __name__ == "__main__":
    main()
