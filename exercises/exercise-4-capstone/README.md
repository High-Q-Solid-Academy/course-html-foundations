# Exercise 4: Capstone — High Q Academy Course Landing Page & Portal Skeleton

<div align="center">

### High Q Solid Academy &bull; HTML Foundations Lab 04 (Capstone)
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: Full Document Architecture & Tabular Data

*Reference: HTML Tutorial & Specifications (html.pdf, Chapters 10 & 11: Tables & Semantic Architecture)*

### 1. The Structure of Accessible HTML Tables
Tables in HTML are meant strictly for **tabular data** (rows and columns of interconnected information), never for visual layout design.
- `<table>`: The table wrapper.
- `<thead>`: Encloses the header row (`<tr>`), defining column titles with `<th>` (table header cells) and `scope="col"`.
- `<tbody>`: Contains the data rows with `<td>` (table data cells).
- `<tfoot>`: Summary or total calculations.
- `colspan` & `rowspan`: Attributes to merge cells horizontally or vertically across dimensions.

```html
<table border="1">
  <thead>
    <tr>
      <th scope="col">Course Track</th>
      <th scope="col">Duration</th>
      <th scope="col">Prerequisites</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Web Development Track</td>
      <td>12 Weeks</td>
      <td>Basic Computer Literacy</td>
    </tr>
  </tbody>
</table>
```

### 2. Capstone Architecture: The High Q Student Portal Wireframe
In this capstone, you bring together all facets of HTML5:
1. Complete document metadata in `<head>`.
2. Semantic branding `<header>` with logo and navigation links.
3. Hero `<section>` with official High Q motto: *"Always Ahead of Others"*.
4. Curriculum comparison `<section>` with an accessible `<table>`.
5. Student admission `<section>` featuring the registration `<form>`.
6. Legal & Campus Contact `<footer>` with links to academy social platforms and Ikorodu campus addresses.

```text
+------------------------------------------------------------------------+
| [LOGO] HIGH Q SOLID ACADEMY        [Home]  [Courses]  [Enroll] [Login] |
+------------------------------------------------------------------------+
|                                                                        |
|                EMPOWERING THE NEXT GENERATION OF CODERS                |
|                    "Always Ahead of Others"                            |
|                                                                        |
+------------------------------------------------------------------------+
| OUR CURRICULUM COMPARISON TABLE:                                       |
| +-------------------------+--------------------+---------------------+ |
| | Track                   | Duration           | Prerequisites       | |
| +-------------------------+--------------------+---------------------+ |
| | Git & Version Control   | 2 Weeks            | None                | |
| | HTML5 Foundations       | 3 Weeks            | Git Basics          | |
| | CSS Mastery             | 4 Weeks            | HTML5               | |
| | JavaScript Core         | 6 Weeks            | HTML5 & CSS         | |
| +-------------------------+--------------------+---------------------+ |
+------------------------------------------------------------------------+
| ADMISSION & REGISTRATION FORM:                                         |
| [ Full Name: ____________ ]   [ Email: _______________________ ]       |
| [ Select Track: [v]       ]   [ [ ENROLL IN ACADEMY NOW ]      ]       |
+------------------------------------------------------------------------+
| (c) 2026 High Q Solid Academy - Ikorodu, Lagos &bull; NYSC Accredited   |
+------------------------------------------------------------------------+
```

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-4-capstone/index.html`:
1. Include a complete HTML5 boilerplate (`<!DOCTYPE html>`, `html`, `head`, charset, viewport, and title).
2. Create a `<header>` containing:
   - An `<img>` logo (`alt="High Q Solid Academy Logo"`).
   - An `<h1>` title: `"High Q Solid Academy"`.
   - A `<nav>` menu linking to page sections.
3. Create a `<main>` container featuring:
   - A hero `<section>` with an `<h2>` heading and the motto `"Always Ahead of Others"`.
   - A programs `<section>` featuring a `<table>` comparing at least 4 tracks (Course Name, Duration, Prerequisites).
   - An admission `<section>` containing the complete enrollment form.
4. Create a `<footer>` with contact details:
   - Campus: Ikorodu, Lagos, Nigeria.
   - Phone: +234 807 208 8794.
   - Social links: Website, Telegram, TikTok, X.

---

## 🧪 Verification
Run the automated test suite to verify:
```bash
npm test -- -t "Exercise 4"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
