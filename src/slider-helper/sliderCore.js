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
      o("setTransition", (_r, e) => {
        a.params.effect === "panorama" &&
          a.slides.forEach((t) => {
            t.style.transition = `${e}ms`;
          });
      });
  }

  export {b as my}
