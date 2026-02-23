#!/usr/bin/env python3
from PIL import Image
import os

def check_image(filepath):
    try:
        img = Image.open(filepath)
        return f"{os.path.basename(filepath)}: {img.format}, {img.mode}, {img.size}"
    except Exception as e:
        return f"{os.path.basename(filepath)}: ERROR - {str(e)}"

# 检查主创团队和艺术指导的头像图片
image_files = [
    '/home/ubuntu/upload/wuzhen.png',
    '/home/ubuntu/upload/jialing.png',
    '/home/ubuntu/upload/fanyiming.png',
    '/home/ubuntu/upload/wangyin.png',
    '/home/ubuntu/upload/tony.png',
    '/home/ubuntu/upload/gaopeng.png'
]

for image_path in image_files:
    print(check_image(image_path))
