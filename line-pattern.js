registerPaint(
  "line-pattern",
  class {
    static get inputProperties() {
      return ["--line-color", "--line-mode"];
    }
    paint(ctx, geom, properties) {
      const color = properties.get("--line-color").toString();
      const lineType = properties.get("--line-mode").toString();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      if (lineType === "wave") {
        const spacing = 8;
        const context = ctx;
        for (let y = 0; y < geom.height; y += spacing) {
          context.beginPath();
          for (let x = 0; x <= geom.width; x += 10) {
            const wave = Math.sin((x + y) / 10) * 5;
            context.lineTo(x, y + wave);
          }
          context.stroke();
        }
      } else {
        const spacing = 30;
        for (let y = 0; y < geom.height; y += spacing) {
          ctx.beginPath();
          for (let x = 0; x <= geom.width; x += 10) {
            const wave = 2;
            ctx.lineTo(x, y + wave);
          }
          ctx.stroke();
        }
      }
    }
  }
);
