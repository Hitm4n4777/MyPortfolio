import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import "./MoltenMetal.css";

const hexToRgb = (hex) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!result) return [1, 1, 1];
	return [1, 2, 3].map((index) => parseInt(result[index], 16) / 255);
};

const colorModeToFloat = (mode) => (mode === "ember" ? 1 : mode === "frost" ? 2 : 0);

const vertex = `#version 300 es
in vec2 position;
void main() {
	gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;
uniform float uColorMode;
uniform float uGrain;
uniform float uGrainIntensity;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform bool uEnableMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

float hash(vec2 p) {
	return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
	float time = iTime * uSpeed;
	vec2 p = uScale * ((gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y) - 0.5;
	if (uEnableMouse) p += (uMouse - 0.5) * uMouseStrength * 2.0;
	vec2 i = p;
	float c = 0.0;
	float r = length(p + vec2(sin(time), sin(time * 0.3 + 5.0)) * 0.5);
	float d = length(p);
	float rot = d + time + p.x * uSwirl;
	float cosRot = cos(rot);
	mat2 warp = mat2(cos(rot - sin(time / 5.0)), sin(rot), -sin(cosRot - time), cosRot) * uFold;
	float glowCore = uGlow * uCoreSize;
	for (float n = 0.0; n < 8.0; n++) {
		if (n >= uDetail) break;
		p *= warp;
		float t = r - time / (n + 3.0);
		i -= p + vec2(cos(t - i.x - r) + sin(t + i.y), sin(t - i.y) + cos(t + i.x) + r);
		c += glowCore / length(vec2(sin(i.x + t), cos(i.y + t)));
	}
	c /= 6.0;
	float g = max(c - uBlackPoint, 0.0) * uBrightness;
	float mid = uColorMode > 1.5 ? 0.65 : uColorMode > 0.5 ? 0.35 : 0.5;
	vec3 col = mix(uColor1, uColor2, smoothstep(0.0, mid, g));
	col = mix(col, uColor3, smoothstep(mid, 1.0, g));
	float a = clamp(g + (uGrain > 0.5 ? (hash(gl_FragCoord.xy + iTime) - 0.5) * uGrainIntensity : 0.0), 0.0, 1.0) * uOpacity;
	fragColor = vec4(col * a, a);
}`;

const ctxMap = new WeakMap();

const MoltenMetal = ({
	color1 = "#5227FF", color2 = "#FF9FFC", color3 = "#FFFFFF", speed = 0.35,
	scale = 4, detail = 3, glow = 1.6, coreSize = 0.1, swirl = 1, fold = -0.2,
	blackPoint = 0.05, brightness = 1.3, colorMode = "molten", grain = true,
	grainIntensity = 0.05, mouseInteraction = true, mouseStrength = 0.3,
	opacity = 1.0, className = "",
}) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const renderer = new Renderer({ webgl: 2, alpha: true, premultipliedAlpha: true, antialias: false, dpr: Math.min(window.devicePixelRatio || 1, 2) });
		const gl = renderer.gl;
		gl.clearColor(0, 0, 0, 0);
		const canvas = gl.canvas;
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.display = "block";
		container.appendChild(canvas);
		const geometry = new Triangle(gl);
		const program = new Program(gl, {
			vertex, fragment,
			uniforms: {
				iTime: { value: 0 }, iResolution: { value: new Float32Array([1, 1]) },
				uSpeed: { value: speed }, uScale: { value: scale }, uDetail: { value: detail },
				uGlow: { value: glow }, uCoreSize: { value: coreSize }, uSwirl: { value: swirl },
				uFold: { value: fold }, uBlackPoint: { value: blackPoint }, uBrightness: { value: brightness },
				uColorMode: { value: colorModeToFloat(colorMode) }, uGrain: { value: grain ? 1 : 0 },
				uGrainIntensity: { value: grainIntensity }, uOpacity: { value: opacity },
				uMouse: { value: new Float32Array([0.5, 0.5]) }, uMouseStrength: { value: mouseStrength },
				uEnableMouse: { value: mouseInteraction }, uColor1: { value: hexToRgb(color1) },
				uColor2: { value: hexToRgb(color2) }, uColor3: { value: hexToRgb(color3) },
			},
		});
		const mesh = new Mesh(gl, { geometry, program });
		ctxMap.set(container, { renderer, program, mesh });
		const setSize = () => {
			const rect = container.getBoundingClientRect();
			renderer.setSize(Math.max(1, Math.floor(rect.width)), Math.max(1, Math.floor(rect.height)));
			program.uniforms.iResolution.value[0] = gl.drawingBufferWidth;
			program.uniforms.iResolution.value[1] = gl.drawingBufferHeight;
			renderer.render({ scene: mesh });
		};
		const ro = new ResizeObserver(setSize);
		ro.observe(container);
		setSize();
		const targetMouse = [0.5, 0.5];
		const currentMouse = [0.5, 0.5];
		const handleMouseMove = (event) => {
			const rect = canvas.getBoundingClientRect();
			targetMouse[0] = (event.clientX - rect.left) / rect.width;
			targetMouse[1] = 1 - (event.clientY - rect.top) / rect.height;
		};
		const handleMouseLeave = () => { targetMouse[0] = 0.5; targetMouse[1] = 0.5; };
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseleave", handleMouseLeave);
		let raf = 0;
		let isVisible = true;
		let isPageVisible = !document.hidden;
		const t0 = performance.now();
		const loop = (time) => {
			program.uniforms.iTime.value = (time - t0) * 0.001;
			currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
			currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
			program.uniforms.uMouse.value[0] = currentMouse[0];
			program.uniforms.uMouse.value[1] = currentMouse[1];
			renderer.render({ scene: mesh });
			raf = requestAnimationFrame(loop);
		};
		const tryStart = () => { if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop); };
		const tryStop = () => { if (raf !== 0) { cancelAnimationFrame(raf); raf = 0; } };
		const io = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; isVisible ? tryStart() : tryStop(); }, { threshold: 0 });
		io.observe(container);
		const onVisibility = () => { isPageVisible = !document.hidden; isPageVisible ? tryStart() : tryStop(); };
		document.addEventListener("visibilitychange", onVisibility);
		tryStart();
		return () => {
			tryStop(); ro.disconnect(); io.disconnect(); document.removeEventListener("visibilitychange", onVisibility);
			canvas.removeEventListener("mousemove", handleMouseMove); canvas.removeEventListener("mouseleave", handleMouseLeave);
			ctxMap.delete(container); container.removeChild(canvas); gl.getExtension("WEBGL_lose_context")?.loseContext();
		};
	}, []);

	useEffect(() => {
		const ctx = ctxMap.get(containerRef.current);
		if (!ctx) return;
		const u = ctx.program.uniforms;
		u.uSpeed.value = speed; u.uScale.value = scale; u.uDetail.value = detail; u.uGlow.value = glow;
		u.uCoreSize.value = Math.max(coreSize, 0.001); u.uSwirl.value = swirl; u.uFold.value = fold;
		u.uBlackPoint.value = blackPoint; u.uBrightness.value = brightness; u.uColorMode.value = colorModeToFloat(colorMode);
		u.uGrain.value = grain ? 1 : 0; u.uGrainIntensity.value = grainIntensity; u.uOpacity.value = opacity;
		u.uMouseStrength.value = mouseStrength; u.uEnableMouse.value = mouseInteraction;
		[u.uColor1.value, u.uColor2.value, u.uColor3.value].forEach((target, index) => {
			const color = hexToRgb([color1, color2, color3][index]);
			target[0] = color[0];
			target[1] = color[1];
			target[2] = color[2];
		});
	}, [color1, color2, color3, speed, scale, detail, glow, coreSize, swirl, fold, blackPoint, brightness, colorMode, grain, grainIntensity, mouseInteraction, mouseStrength, opacity]);

	return <div ref={containerRef} className={`molten-metal-container ${className}`.trim()} />;
};

export default MoltenMetal;
