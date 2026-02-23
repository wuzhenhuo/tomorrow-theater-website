#!/usr/bin/env python3
from PIL import Image
import os

def convert_png_to_jpg(png_path, jpg_path):
    try:
        # 打开PNG图片
        img = Image.open(png_path)
        
        # 如果是RGBA模式，需要转换为RGB（去除透明通道）
        if img.mode == 'RGBA':
            # 创建白色背景
            background = Image.new('RGB', img.size, (255, 255, 255))
            # 将PNG图片与白色背景合成
            background.paste(img, mask=img.split()[3])  # 使用alpha通道作为mask
            # 保存为JPG
            background.save(jpg_path, 'JPEG', quality=95)
            return f"转换成功: {os.path.basename(png_path)} -> {os.path.basename(jpg_path)}"
        else:
            # 如果已经是RGB模式，直接保存为JPG
            img.convert('RGB').save(jpg_path, 'JPEG', quality=95)
            return f"转换成功: {os.path.basename(png_path)} -> {os.path.basename(jpg_path)}"
    except Exception as e:
        return f"转换失败: {os.path.basename(png_path)} - {str(e)}"

# 要转换的图片列表
image_files = [
    ('wuzhen.png', 'wuzhen.jpg'),
    ('jialing.png', 'jialing.jpg'),
    ('fanyiming.png', 'fanyiming.jpg'),
    ('wangyin.png', 'wangyin.jpg'),
    ('tony.png', 'tony.jpg'),
    ('gaopeng.png', 'gaopeng.jpg')
]

# 转换所有图片
for png_name, jpg_name in image_files:
    png_path = f'/home/ubuntu/upload/{png_name}'
    jpg_path = f'/home/ubuntu/tomorrow_theater_website/public/team/{jpg_name}'
    print(convert_png_to_jpg(png_path, jpg_path))
