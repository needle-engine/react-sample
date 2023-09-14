import "./register_types.ts"

export const needle_exported_files = new Array();
globalThis["needle:codegen_files"] = needle_exported_files;
needle_exported_files.push("assets/ReactSample.glb?v=1694716553828");
document.addEventListener("DOMContentLoaded", () =>
{
	const needleEngine = document.querySelector("needle-engine");
	if(needleEngine && needleEngine.getAttribute("src") === null)
	{
		needleEngine.setAttribute("hash", "1694716553828");
		needleEngine.setAttribute("src", JSON.stringify(needle_exported_files));
	}
});
