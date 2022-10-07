// yuan
import { camera } from "./camera.js";
import { draw } from "./draw.js";
import { screen, ctx } from "./main.js";
import { Thing, player} from "./thing.js";

const Query = Matter.Query,
      Vector = Matter.Vector;

export const clip_visibility_polygon = () => {

  ctx.save();
  
  const w = screen.w;
  const h = screen.h;
  const radius = Math.sqrt(w * w + h * h) * 1.5; // multiplied by 1.5, just in case

  // get points from all things

  const points = [ ];
  const relevant_things = [ ];
  const bodies = [ ];

  for (const t of Thing.things) {
    if (t.body == null || t == player) continue;
    if (!t.roughly_on_screen()) continue;
    let points_on_screen = 0;
    for (const point of t.get_points()) {
      const draw_point = camera.object_position(point);
      if (draw_point.x < 0 || draw_point.x > w) continue;
      if (draw_point.y < 0 || draw_point.y > h) continue;
      points_on_screen++;
      points.push(point);
    }
    if (points_on_screen > 0) {
      relevant_things.push(t);
      bodies.push(t.body);
    }
  }

  const start = player.position;
  console.log(points.length);

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const diff = Vector.sub(point, start);
    const end = Vector.add(start, Vector.mult(diff, radius / Vector.magnitude(diff)));
    const query = Query.ray(bodies, start, end, 1); // ray width = 1
    //console.log(query);

    ctx.strokeStyle = "red";
    const s = camera.object_position(start);
    const e = camera.object_position(end);
    draw.line(ctx, s.x, s.y, e.x, e.y);
  }

}

export const unclip_visibility_polygon = () => {

  ctx.restore();

}

window.clip_visibility_polygon = clip_visibility_polygon;