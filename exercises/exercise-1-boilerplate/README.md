# Exercise 1: HTML5 Document Boilerplate & Architecture

<div align="center">

### High Q Solid Academy &bull; HTML Foundations Lab 01
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: Document Anatomy & Rendering Modes

*Reference: HTML Tutorial & Specifications (html.pdf, Chapters 1-4)*

### 1. Document Type Declaration (`<!DOCTYPE html>`)
The `<!DOCTYPE html>` declaration is **not** an HTML tag; it is an instruction to the web browser about what version of the markup language the page is written in.
- In HTML 4.01, DOCTYPEs required complex DTD (Document Type Definition) URI references (e.g. `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"...>`).
- HTML5 simplified this to `<!DOCTYPE html>`, which instructs modern browser rendering engines (Blink, Gecko, WebKit) to operate in **Full Standards Mode** instead of **Quirks Mode** or **Almost Standards Mode**.
- Without a valid DOCTYPE, browsers emulate legacy 1990s rendering behaviors, causing box model calculation errors and inconsistent CSS layouts.

### 2. The `<head>` Container and Metadata Architecture
The `<head>` element acts as a container for metadata (data about data). Information inside the head is not directly rendered onto the graphical viewport:
1. **`<meta charset="UTF-8">`**:
   - Declares the character encoding for the HTML document.
   - **UTF-8 (8-bit Unicode Transformation Format)** is the universal standard covering virtually all characters, symbols, and emojis across all human languages, preventing text corruption (*mojibake*).
2. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**:
   - Essential for **Responsive Web Design (RWD)**.
   - `width=device-width` sets the width of the virtual viewport to follow the physical screen width of the device in device-independent pixels (DIPs).
   - `initial-scale=1.0` establishes a 1:1 relationship between CSS pixels and device-independent pixels when the page is first loaded.
3. **`<title>`**:
   - Defines the document title displayed in the browser tab, in search engine results (SERP title), and when bookmarking the page.

```
Document Object Model (DOM) Hierarchy:
  Document
     └── <html> (lang="en")
          ├── <head>
          │    ├── <meta charset="UTF-8">
          │    ├── <meta name="viewport" content="...">
          │    └── <title>High Q Solid Academy - Welcome</title>
          └── <body>
               ├── <h1>Welcome to High Q Solid Academy</h1>
               └── <p>Always Ahead of Others</p>
```

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-1-boilerplate/index.html`:
1. Declare the modern HTML5 document type at the very first line: `<!DOCTYPE html>`.
2. Wrap the document in `<html lang="en">` to specify English language semantics for screen readers and search engines.
3. Build the `<head>` section containing:
   - `<meta charset="UTF-8">`
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
   - `<title>High Q Solid Academy - Welcome</title>`
4. Build the `<body>` element containing:
   - An `<h1>` heading with text: `"Welcome to High Q Solid Academy"`
   - A `<p>` paragraph with the academy motto: `"Always Ahead of Others"`

---

## 🧪 Verification
Run the automated test suite to verify:
```bash
npm test -- -t "Exercise 1"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
