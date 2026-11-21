
import { defineConfig } from 'vite';
import ejs from 'ejs';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/rule-of-two-website-/',

  plugins: [
    {
      name: 'rule-of-two-ejs',

      transformIndexHtml: {
        order: 'pre',

        handler(html, ctx) {
          return ejs.render(html, {}, {
            filename: ctx.filename
          });
        }
      }
    }
  ],

  build: {
    rolldownOptions: {
      input: {
        home: resolve('index.html'),
        services: resolve('services.html'),
        cases: resolve('cases.html'),
        contact: resolve('contact.html')
      }
    }
  }
});
