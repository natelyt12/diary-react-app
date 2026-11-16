#!/usr/bin/env python3
"""
🌳 TREE - Tool hiển thị cây thư mục đầy đủ các cấp
Sử dụng: python tree.py [đường_dẫn] [độ_sâu_tối_đa]
"""

import os
from pathlib import Path
import sys

def show_tree(path=".", max_depth=10, show_hidden=False):
    """Hiển thị cây thư mục với tất cả các cấp"""
    
    def _show(folder, prefix="", depth=0):
        # Kiểm tra độ sâu
        if depth >= max_depth:
            return
        
        try:
            # Lấy danh sách items
            items = list(Path(folder).iterdir())
            
            # Lọc file ẩn và thư mục không cần thiết
            ignore = {'.git', 'node_modules', '__pycache__', '.vscode', '.idea', 'build', 'dist', '.next', 'venv', 'env'}
            
            if show_hidden:
                # Chỉ lọc ignore list
                items = [item for item in items if item.name not in ignore]
            else:
                # Lọc cả file ẩn
                items = [item for item in items if not item.name.startswith('.') and item.name not in ignore]
            
            # Sắp xếp: thư mục trước, file sau
            items = sorted(items, key=lambda x: (x.is_file(), x.name.lower()))
            
            # Nếu thư mục rỗng sau khi lọc
            if not items:
                return
            
            # Duyệt qua từng item
            for i, item in enumerate(items):
                is_last = i == len(items) - 1
                
                # Ký tự vẽ cây
                current = "└── " if is_last else "├── "
                next_prefix = prefix + ("    " if is_last else "│   ")
                
                # Xử lý thư mục
                if item.is_dir():
                    icon = "📁"
                    print(f"{prefix}{current}{icon} {item.name}/")
                    # ĐỆ QUY: Hiển thị nội dung thư mục con
                    _show(item, next_prefix, depth + 1)
                # Xử lý file
                else:
                    ext = item.suffix.lower()
                    # Icon theo loại file
                    if ext in ['.py', '.js', '.jsx', '.ts', '.tsx', '.java', '.cpp', '.c', '.cs', '.go', '.rs']:
                        icon = "📄"
                    elif ext in ['.json', '.yml', '.yaml', '.xml', '.toml', '.ini', '.config']:
                        icon = "⚙️"
                    elif ext in ['.md', '.txt', '.rst', '.log']:
                        icon = "📝"
                    elif ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp']:
                        icon = "🖼️"
                    elif ext in ['.html', '.css', '.scss', '.sass', '.less']:
                        icon = "🌐"
                    elif ext in ['.pdf', '.doc', '.docx', '.xls', '.xlsx']:
                        icon = "📋"
                    elif ext in ['.zip', '.rar', '.tar', '.gz', '.7z']:
                        icon = "📦"
                    elif ext in ['.mp4', '.avi', '.mov', '.mkv']:
                        icon = "🎬"
                    elif ext in ['.mp3', '.wav', '.flac', '.ogg']:
                        icon = "🎵"
                    elif ext in ['.env', '.gitignore', '.dockerignore']:
                        icon = "🔧"
                    else:
                        icon = "📄"
                    
                    print(f"{prefix}{current}{icon} {item.name}")
                    
        except PermissionError:
            print(f"{prefix}❌ Không có quyền truy cập")
        except Exception as e:
            print(f"{prefix}⚠️ Lỗi: {str(e)}")
    
    # Bắt đầu hiển thị
    folder_path = Path(path).resolve()
    if not folder_path.exists():
        print(f"❌ Đường dẫn không tồn tại: {path}")
        return
    
    print(f"📁 {folder_path.name}/")
    _show(folder_path, "", 0)

def main():
    print("🌳 TREE - Hiển thị cây thư mục")
    print("=" * 50)
    
    # Lấy đường dẫn từ tham số hoặc nhập tay
    if len(sys.argv) > 1:
        path = sys.argv[1]
        max_depth = int(sys.argv[2]) if len(sys.argv) > 2 else 10
        show_hidden = '-a' in sys.argv or '--all' in sys.argv
    else:
        path = input("Nhập đường dẫn (Enter = thư mục hiện tại): ").strip()
        if not path:
            path = "."
        depth_input = input("Độ sâu tối đa (Enter = 10): ").strip()
        max_depth = int(depth_input) if depth_input else 10
        show_hidden_input = input("Hiển thị file ẩn? (y/n, Enter = n): ").strip().lower()
        show_hidden = show_hidden_input == 'y'
    
    print(f"📊 Hiển thị cây thư mục (độ sâu: {max_depth}, file ẩn: {'có' if show_hidden else 'không'})")
    print("=" * 50)
    show_tree(path, max_depth, show_hidden)
    print("=" * 50)
    print(f"✅ Hoàn tất!")

if __name__ == "__main__":
    main()