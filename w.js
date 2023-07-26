init()

async function init() {
    let canvas = document.createElement('canvas')

    var gl = canvas.getContext('webgl')

    document.body.appendChild(canvas)

    let vertices = [-1, -1, -1, 1, 1, -1, 1, 1]

    let buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

    gl.vertexAttribPointer(0, 2, gl,FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(0)

    var vshader = `
        attribute vec2 pos;
        varying vec2 vpos;
        void main() {
            vpos = pos*-0.5 + vec2(0.5);
            gl_Position = vec4(pos, 0.0, 1.0);
        }
    `

    var vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vshader);
    gl.compileShader(vs)
    
}