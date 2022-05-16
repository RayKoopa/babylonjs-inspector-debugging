import "./styles/main.css";
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector"; // if uncommented, stepping through code slows and variable tooltips don't show
import { Camera, Engine, Scene, Vector3 } from "@babylonjs/core";

const canvas = document.createElement("canvas");
canvas.id = "gameCanvas";
document.body.appendChild(canvas);

const engine = new Engine(canvas);
const scene = new Scene(engine);
const camera = new Camera("camera", Vector3.Zero(), scene);

window.addEventListener("keydown", (e) =>
{
    if (e.key === 'q') // this only works if the inspector is imported above, otherwise throws exception
    {
        if (scene.debugLayer.isVisible())
            scene.debugLayer.hide();
        else
            scene.debugLayer.show();
    }
});

engine.runRenderLoop(() => scene.render());

const message = "Hello!"; // set a breakpoint here and check how fast it steps to next line.
alert(message); // also hover over "message" above and check if it shows the value tooltip
