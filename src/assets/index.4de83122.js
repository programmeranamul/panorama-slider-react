import { S as M, P as S } from "./vendor.9c14883d.js";


const $ = function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && r(n);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function o(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }

  function r(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = o(e);
    fetch(e.href, t);
  }
};
$();

function b({ swiper: a, extendParams: s, on: o }) {
  s({
    panorama: {
      depth: 200,
      rotate: 30,
    },
  }),
    o("beforeInit", () => {
      if (a.params.effect !== "panorama") return;
      a.classNames.push(`${a.params.containerModifierClass}panorama`),
        a.classNames.push(`${a.params.containerModifierClass}3d`);
      const r = {
        watchSlidesProgress: !0,
      };
      Object.assign(a.params, r), Object.assign(a.originalParams, r);
    }),
    o("progress", () => {
      if (a.params.effect !== "panorama") return;
      const r = a.slidesSizesGrid,
        { depth: e = 200, rotate: t = 30 } = a.params.panorama,
        f = (t * Math.PI) / 180 / 2,
        p = 1 / (180 / t);
      for (let i = 0; i < a.slides.length; i += 1) {
        const d = a.slides[i],
          u = d.progress,
          c = r[i],
          g = a.params.centeredSlides ? 0 : (a.params.slidesPerView - 1) * 0.5,
          l = u + g,
          m = 1 - Math.cos(l * p * Math.PI),
          h = `${l * (c / 3) * m}px`,
          P = l * t,
          y = `${((c * 0.5) / Math.sin(f)) * m - e}px`;
        d.style.transform = `translateX(${h}) translateZ(${y}) rotateY(${P}deg)`;
      }
    }),
    o("setTransition", (r, e) => {
      a.params.effect === "panorama" &&
        a.slides.forEach((t) => {
          t.style.transition = `${e}ms`;
        });
    });
}
const v = new M(".panorama-slider .swiper", {
  modules: [S, b],
  effect: "panorama",
  slidesPerView: 1.5,
  loop: !0,
  loopedSlides: 10,
  centeredSlides: !0,
  grabCursor: !0,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: !0,
    dynamicMainBullets: 3,
  },
  panorama: {
    depth: 150,
    rotate: 45,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      panorama: {
        rotate: 35,
        depth: 150,
      },
    },
    640: {
      slidesPerView: 3,
      panorama: {
        rotate: 30,
        depth: 150,
      },
    },
    1024: {
      slidesPerView: 4,
      panorama: {
        rotate: 30,
        depth: 200,
      },
    },
    1200: {
      slidesPerView: 5,
      panorama: {
        rotate: 25,
        depth: 250,
      },
    },
  },
});
console.log(v);


