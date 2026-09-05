import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

function loadDOM(relativePath) {
  const filePath = path.resolve(__dirname, '..', relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${relativePath}`);
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const isStarter = html.includes('TODO Instructions');
  return { dom: new JSDOM(html), raw: html, isStarter };
}

describe('Exercise 1: HTML5 Document Boilerplate', () => {
  it('should include <!DOCTYPE html> declaration', () => {
    const { raw, isStarter } = loadDOM('exercises/exercise-1-boilerplate/index.html');
    if (isStarter && !raw.includes('<h1>Welcome to High Q Solid Academy</h1>')) {
      console.log('ℹ️ Exercise 1: Starter template active. Ready for student implementation.');
      return;
    }
    expect(raw.trim().toLowerCase()).toMatch(/^<!doctype html>/i);
  });

  it('should have <html lang="en"> root element', () => {
    const { dom, isStarter, raw } = loadDOM('exercises/exercise-1-boilerplate/index.html');
    if (isStarter && !raw.includes('<h1>Welcome to High Q Solid Academy</h1>')) return;
    const htmlEl = dom.window.document.documentElement;
    expect(htmlEl.getAttribute('lang')).toBe('en');
  });

  it('should include required meta charset and viewport tags', () => {
    const { dom, isStarter, raw } = loadDOM('exercises/exercise-1-boilerplate/index.html');
    if (isStarter && !raw.includes('<h1>Welcome to High Q Solid Academy</h1>')) return;
    const charset = dom.window.document.querySelector('meta[charset="UTF-8"], meta[charset="utf-8"]');
    const viewport = dom.window.document.querySelector('meta[name="viewport"]');
    expect(charset).toBeTruthy();
    expect(viewport).toBeTruthy();
    expect(viewport.getAttribute('content')).toContain('width=device-width');
  });

  it('should set an appropriate title', () => {
    const { dom, isStarter, raw } = loadDOM('exercises/exercise-1-boilerplate/index.html');
    if (isStarter && !raw.includes('<h1>Welcome to High Q Solid Academy</h1>')) return;
    const title = dom.window.document.querySelector('title');
    expect(title).toBeTruthy();
    expect(title.textContent.trim().length).toBeGreaterThan(5);
  });

  it('should include an h1 heading and paragraph in the body', () => {
    const { dom, isStarter, raw } = loadDOM('exercises/exercise-1-boilerplate/index.html');
    if (isStarter && !raw.includes('<h1>Welcome to High Q Solid Academy</h1>')) return;
    const h1 = dom.window.document.querySelector('body h1');
    const p = dom.window.document.querySelector('body p');
    expect(h1).toBeTruthy();
    expect(p).toBeTruthy();
  });
});

describe('Exercise 2: Semantic Structure', () => {
  it('should contain <header>, <nav>, <main>, and <footer> tags', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-2-semantics/index.html');
    if (isStarter) {
      console.log('ℹ️ Exercise 2: Starter template active. Ready for student implementation.');
      return;
    }
    const doc = dom.window.document;
    expect(doc.querySelector('header')).toBeTruthy();
    expect(doc.querySelector('nav')).toBeTruthy();
    expect(doc.querySelector('main')).toBeTruthy();
    expect(doc.querySelector('footer')).toBeTruthy();
  });

  it('should have navigation menu with list of links', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-2-semantics/index.html');
    if (isStarter) return;
    const navLinks = dom.window.document.querySelectorAll('nav ul li a');
    expect(navLinks.length).toBeGreaterThanOrEqual(3);
  });

  it('should contain an <article> with heading and text inside <main>', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-2-semantics/index.html');
    if (isStarter) return;
    const article = dom.window.document.querySelector('main article');
    expect(article).toBeTruthy();
    expect(article.querySelector('h2, h3')).toBeTruthy();
    expect(article.querySelector('p')).toBeTruthy();
  });
});

describe('Exercise 3: Accessible Student Registration Form', () => {
  it('should have a <form> element with action and method', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-3-forms/index.html');
    if (isStarter) {
      console.log('ℹ️ Exercise 3: Starter template active. Ready for student implementation.');
      return;
    }
    const form = dom.window.document.querySelector('form');
    expect(form).toBeTruthy();
    expect(form.getAttribute('method')).toBeTruthy();
  });

  it('should have inputs properly paired with <label> elements via for/id attributes', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-3-forms/index.html');
    if (isStarter) return;
    const doc = dom.window.document;
    
    const fullnameInput = doc.querySelector('input#fullname');
    const fullnameLabel = doc.querySelector('label[for="fullname"]');
    expect(fullnameInput).toBeTruthy();
    expect(fullnameLabel).toBeTruthy();

    const emailInput = doc.querySelector('input#email[type="email"]');
    const emailLabel = doc.querySelector('label[for="email"]');
    expect(emailInput).toBeTruthy();
    expect(emailLabel).toBeTruthy();
  });

  it('should require fullname and email fields', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-3-forms/index.html');
    if (isStarter) return;
    const doc = dom.window.document;
    expect(doc.querySelector('input#fullname').hasAttribute('required')).toBe(true);
    expect(doc.querySelector('input#email').hasAttribute('required')).toBe(true);
  });

  it('should have a submit button', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-3-forms/index.html');
    if (isStarter) return;
    const btn = dom.window.document.querySelector('button[type="submit"], input[type="submit"]');
    expect(btn).toBeTruthy();
  });
});

describe('Exercise 4: Capstone Landing Page', () => {
  it('should contain a complete landing page structure with sections and table', () => {
    const { dom, isStarter } = loadDOM('exercises/exercise-4-capstone/index.html');
    if (isStarter) {
      console.log('ℹ️ Exercise 4: Starter template active. Ready for student implementation.');
      return;
    }
    const doc = dom.window.document;
    expect(doc.querySelector('header')).toBeTruthy();
    expect(doc.querySelector('main')).toBeTruthy();
    expect(doc.querySelector('footer')).toBeTruthy();
    expect(doc.querySelectorAll('section').length).toBeGreaterThanOrEqual(2);
    expect(doc.querySelector('table')).toBeTruthy();
  });
});
