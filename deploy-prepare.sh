#!/bin/bash

# SwiftCart Deployment Script
# This script will prepare your project for deployment

echo "🚀 SwiftCart Deployment Preparation Script"
echo "==========================================="
echo ""

# Check if in correct directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found!"
    echo "Please run this script from the project directory."
    exit 1
fi

echo "✅ Project directory confirmed"
echo ""

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "📂 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

echo ""
echo "📝 Creating commits..."
echo ""

# Check if there are any commits
if ! git rev-parse HEAD > /dev/null 2>&1; then
    # No commits yet, make initial commit
    git add README.md .gitignore netlify.toml vercel.json
    git commit -m "docs: Initialize project with configuration files"
    echo "✅ Commit 1: Project initialization"
    
    git add Assets/
    git commit -m "assets: Add banner image and design references"
    echo "✅ Commit 2: Assets added"
    
    git add index.html
    git commit -m "feat: Create responsive HTML structure with navbar, hero, products, and footer sections"
    echo "✅ Commit 3: HTML structure"
    
    git add styles.css
    git commit -m "style: Implement custom CSS with Tailwind, animations, and mobile responsive design"
    echo "✅ Commit 4: Styling complete"
    
    git add script.js
    git commit -m "feat: Add API integration, cart functionality, modal, and localStorage persistence"
    echo "✅ Commit 5: JavaScript functionality"
    
    git add QUESTIONS.md PROJECT_README.md DEPLOYMENT_GUIDE.md COMMIT_GUIDE.md QUICK_START.md
    git commit -m "docs: Add project documentation and JavaScript questions in Bangla"
    echo "✅ Commit 6: Documentation"
    
    echo ""
    echo "🎉 All commits created successfully!"
else
    echo "ℹ️  Commits already exist. Adding any new files..."
    if git add . && git diff --staged --quiet; then
        echo "✅ No new changes to commit"
    else
        git commit -m "chore: Update project files for deployment"
        echo "✅ New changes committed"
    fi
fi

echo ""
echo "📊 Commit History:"
git log --oneline
echo ""

echo "✅ Git preparation complete!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Next Steps:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎯 OPTION 1: Netlify Drop (সবচেয়ে সহজ - Recommended)"
echo "   1. Visit: https://app.netlify.com/drop"
echo "   2. Drag & drop this entire project folder"
echo "   3. Get instant live link!"
echo ""
echo "🎯 OPTION 2: Vercel/GitHub Pages (Git required)"
echo "   1. Create GitHub repository at: https://github.com/new"
echo "   2. Repository name: swiftcart-ecommerce"
echo "   3. Make it PUBLIC"
echo "   4. Run these commands:"
echo ""
echo "      git remote add origin https://github.com/YOUR_USERNAME/swiftcart-ecommerce.git"
echo "      git branch -M main"
echo "      git push -u origin main"
echo ""
echo "   5. Then deploy:"
echo "      - Vercel: https://vercel.com → Import repository"
echo "      - GitHub Pages: Repository Settings → Pages → Enable"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📖 For detailed guide, see: DEPLOYMENT_GUIDE.md"
echo ""
echo "✨ Good luck with your deployment!"
