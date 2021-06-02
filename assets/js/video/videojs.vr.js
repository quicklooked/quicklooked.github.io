! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("global/document"), require("video.js"), require("global/window")) : "function" == typeof define && define.amd ? define(["global/document", "video.js", "global/window"], e) : t.videojsVr = e(t.document, t.videojs, t.window)
}(this, function(n, xt, N) {
  "use strict";

  function i(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
  }

  function f(t) {
    if(void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function i(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
  }

  function t() {}

  function tt(t, e) {
    this.x = t || 0, this.y = e || 0
  }

  function At() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  }

  function W(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
  }

  function wt(t, e, i) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0
  }

  function I() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
  }

  function d(t, e, i, n, r, a, s, o, c, h) {
    Object.defineProperty(this, "id", {
      value: cc++
    }), this.uuid = So.generateUUID(), this.name = "", this.image = void 0 !== t ? t : d.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : d.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : ws, this.wrapT = void 0 !== n ? n : ws, this.magFilter = void 0 !== r ? r : Es, this.minFilter = void 0 !== a ? a : _s, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== s ? s : Ys, this.type = void 0 !== o ? o : bs, this.offset = new tt(0, 0), this.repeat = new tt(1, 1), this.center = new tt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new I, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : wo, this.version = 0, this.onUpdate = null
  }

  function Nt(t, e, i, n) {
    this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
  }

  function z(t, e, i) {
    this.width = t, this.height = e, this.scissor = new Nt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Nt(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = Es), this.texture = new d(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.generateMipmaps = void 0 === i.generateMipmaps || i.generateMipmaps, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
  }

  function u(t, e, i) {
    z.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
  }

  function Dt(t, e, i, n, r, a, s, o, c, h, u, l) {
    d.call(this, null, a, s, o, c, h, n, r, u, l), this.image = {
      data: t,
      width: e,
      height: i
    }, this.magFilter = void 0 !== c ? c : Ds, this.minFilter = void 0 !== h ? h : Ds, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
  }

  function e(t, e) {
    this.min = void 0 !== t ? t : new wt(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new wt(-1 / 0, -1 / 0, -1 / 0)
  }

  function p(t, e) {
    this.center = void 0 !== t ? t : new wt, this.radius = void 0 !== e ? e : 0
  }

  function s(t, e) {
    this.normal = void 0 !== t ? t : new wt(1, 0, 0), this.constant = void 0 !== e ? e : 0
  }

  function Tt(t, e, i, n, r, a) {
    this.planes = [void 0 !== t ? t : new s, void 0 !== e ? e : new s, void 0 !== i ? i : new s, void 0 !== n ? n : new s, void 0 !== r ? r : new s, void 0 !== a ? a : new s]
  }

  function O(t, e, i) {
    return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
  }

  function Lt() {
    function i(t, e) {
      !1 !== r && (a(t, e), n.requestAnimationFrame(i))
    }
    var n = null,
      r = !1,
      a = null;
    return {
      start: function() {
        !0 !== r && null !== a && (n.requestAnimationFrame(i), r = !0)
      },
      stop: function() {
        r = !1
      },
      setAnimationLoop: function(t) {
        a = t
      },
      setContext: function(t) {
        n = t
      }
    }
  }

  function Et(s) {
    var n = new WeakMap;
    return {
      get: function(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), n.get(t)
      },
      remove: function(t) {
        t.isInterleavedBufferAttribute && (t = t.data);
        var e = n.get(t);
        e && (s.deleteBuffer(e.buffer), n.delete(t))
      },
      update: function(t, e) {
        t.isInterleavedBufferAttribute && (t = t.data);
        var i = n.get(t);
        void 0 === i ? n.set(t, function(t, e) {
          var i = t.array,
            n = t.dynamic ? s.DYNAMIC_DRAW : s.STATIC_DRAW,
            r = s.createBuffer();
          s.bindBuffer(e, r), s.bufferData(e, i, n), t.onUploadCallback();
          var a = s.FLOAT;
          return i instanceof Float32Array ? a = s.FLOAT : i instanceof Float64Array || (i instanceof Uint16Array ? a = s.UNSIGNED_SHORT : i instanceof Int16Array ? a = s.SHORT : i instanceof Uint32Array ? a = s.UNSIGNED_INT : i instanceof Int32Array ? a = s.INT : i instanceof Int8Array ? a = s.BYTE : i instanceof Uint8Array && (a = s.UNSIGNED_BYTE)), {
            buffer: r,
            type: a,
            bytesPerElement: i.BYTES_PER_ELEMENT,
            version: t.version
          }
        }(t, e)) : i.version < t.version && (function(t, e, i) {
          var n = e.array,
            r = e.updateRange;
          s.bindBuffer(i, t), !1 === e.dynamic ? s.bufferData(i, n, s.STATIC_DRAW) : -1 === r.count ? s.bufferSubData(i, 0, n) : 0 === r.count || (s.bufferSubData(i, r.offset * n.BYTES_PER_ELEMENT, n.subarray(r.offset, r.offset + r.count)), r.count = -1)
        }(i.buffer, t, e), i.version = t.version)
      }
    }
  }

  function r(t, e, i, n) {
    this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || r.DefaultOrder
  }

  function a() {
    this.mask = 1
  }

  function g() {
    Object.defineProperty(this, "id", {
      value: Bc++
    }), this.uuid = So.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = g.DefaultUp.clone();
    var t = new wt,
      e = new r,
      i = new W,
      n = new wt(1, 1, 1);
    e.onChange(function() {
      i.setFromEuler(e, !1)
    }), i.onChange(function() {
      e.setFromQuaternion(i, void 0, !1)
    }), Object.defineProperties(this, {
      position: {
        enumerable: !0,
        value: t
      },
      rotation: {
        enumerable: !0,
        value: e
      },
      quaternion: {
        enumerable: !0,
        value: i
      },
      scale: {
        enumerable: !0,
        value: n
      },
      modelViewMatrix: {
        value: new At
      },
      normalMatrix: {
        value: new I
      }
    }), this.matrix = new At, this.matrixWorld = new At, this.matrixAutoUpdate = g.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new a, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
  }

  function o() {
    g.call(this), this.type = "Camera", this.matrixWorldInverse = new At, this.projectionMatrix = new At
  }

  function m(t, e, i, n, r, a) {
    o.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
  }

  function P(t, e, i, n, r, a) {
    this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new wt, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new O, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
  }

  function y() {
    Object.defineProperty(this, "id", {
      value: Wc += 2
    }), this.uuid = So.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
      []
    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
  }

  function x(t, e, i) {
    if(Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function c(t, e, i) {
    x.call(this, new Int8Array(t), e, i)
  }

  function h(t, e, i) {
    x.call(this, new Uint8Array(t), e, i)
  }

  function l(t, e, i) {
    x.call(this, new Uint8ClampedArray(t), e, i)
  }

  function M(t, e, i) {
    x.call(this, new Int16Array(t), e, i)
  }

  function v(t, e, i) {
    x.call(this, new Uint16Array(t), e, i)
  }

  function A(t, e, i) {
    x.call(this, new Int32Array(t), e, i)
  }

  function w(t, e, i) {
    x.call(this, new Uint32Array(t), e, i)
  }

  function U(t, e, i) {
    x.call(this, new Float32Array(t), e, i)
  }

  function D(t, e, i) {
    x.call(this, new Float64Array(t), e, i)
  }

  function T() {
    this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
  }

  function L(t) {
    if(0 === t.length) return -1 / 0;
    for(var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
    return e
  }

  function B() {
    Object.defineProperty(this, "id", {
      value: nh += 2
    }), this.uuid = So.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}
  }

  function _(t, e, i, n, r, a) {
    y.call(this), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: n,
      heightSegments: r,
      depthSegments: a
    }, this.fromBufferGeometry(new E(t, e, i, n, r, a)), this.mergeVertices()
  }

  function E(t, e, i, n, r, a) {
    function s(t, e, i, n, r, a, s, o, c, h, u) {
      var l, d, p = a / c,
        f = s / h,
        g = a / 2,
        m = s / 2,
        M = o / 2,
        v = c + 1,
        y = h + 1,
        A = 0,
        x = 0,
        w = new wt;
      for(d = 0; d < y; d++) {
        var N = d * f - m;
        for(l = 0; l < v; l++) {
          var D = l * p - g;
          w[t] = D * n, w[e] = N * r, w[i] = M, S.push(w.x, w.y, w.z), w[t] = 0, w[e] = 0, w[i] = 0 < o ? 1 : -1, j.push(w.x, w.y, w.z), C.push(l / c), C.push(1 - d / h), A += 1
        }
      }
      for(d = 0; d < h; d++)
        for(l = 0; l < c; l++) {
          var T = O + l + v * d,
            L = O + l + v * (d + 1),
            E = O + (l + 1) + v * (d + 1),
            I = O + (l + 1) + v * d;
          b.push(T, L, I), b.push(L, E, I), x += 6
        }
      _.addGroup(z, x, u), z += x, O += A
    }
    B.call(this), this.type = "BoxBufferGeometry", this.parameters = {
      width: t,
      height: e,
      depth: i,
      widthSegments: n,
      heightSegments: r,
      depthSegments: a
    };
    var _ = this;
    t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
    var b = [],
      S = [],
      j = [],
      C = [],
      O = 0,
      z = 0;
    s("z", "y", "x", -1, -1, i, e, t, a, r, 0), s("z", "y", "x", 1, -1, i, e, -t, a, r, 1), s("x", "z", "y", 1, 1, t, i, e, n, a, 2), s("x", "z", "y", 1, -1, t, i, -e, n, a, 3), s("x", "y", "z", 1, -1, t, e, i, n, r, 4), s("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(b), this.addAttribute("position", new U(S, 3)), this.addAttribute("normal", new U(j, 3)), this.addAttribute("uv", new U(C, 2))
  }

  function b(t, e, i, n) {
    y.call(this), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: n
    }, this.fromBufferGeometry(new S(t, e, i, n)), this.mergeVertices()
  }

  function S(t, e, i, n) {
    B.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: i,
      heightSegments: n
    };
    var r, a, s = (t = t || 1) / 2,
      o = (e = e || 1) / 2,
      c = Math.floor(i) || 1,
      h = Math.floor(n) || 1,
      u = c + 1,
      l = h + 1,
      d = t / c,
      p = e / h,
      f = [],
      g = [],
      m = [],
      M = [];
    for(a = 0; a < l; a++) {
      var v = a * p - o;
      for(r = 0; r < u; r++) {
        var y = r * d - s;
        g.push(y, -v, 0), m.push(0, 0, 1), M.push(r / c), M.push(1 - a / h)
      }
    }
    for(a = 0; a < h; a++)
      for(r = 0; r < c; r++) {
        var A = r + u * a,
          x = r + u * (a + 1),
          w = r + 1 + u * (a + 1),
          N = r + 1 + u * a;
        f.push(A, x, N), f.push(x, w, N)
      }
    this.setIndex(f), this.addAttribute("position", new U(g, 3)), this.addAttribute("normal", new U(m, 3)), this.addAttribute("uv", new U(M, 2))
  }

  function j() {
    Object.defineProperty(this, "id", {
      value: Gh++
    }), this.uuid = So.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = Sa, this.side = La, this.flatShading = !1, this.vertexColors = _a, this.opacity = 1, this.transparent = !1, this.blendSrc = Va, this.blendDst = Wa, this.blendEquation = Pa, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = es, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
  }

  function C(t) {
    j.call(this), this.type = "MeshBasicMaterial", this.color = new O(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ss, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
  }

  function k(t) {
    j.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (t.attributes, this.setValues(t))
  }

  function R(t, e) {
    this.origin = void 0 !== t ? t : new wt, this.direction = void 0 !== e ? e : new wt
  }

  function F(t, e) {
    this.start = void 0 !== t ? t : new wt, this.end = void 0 !== e ? e : new wt
  }

  function Q(t, e, i) {
    this.a = void 0 !== t ? t : new wt, this.b = void 0 !== e ? e : new wt, this.c = void 0 !== i ? i : new wt
  }

  function G(t, e) {
    g.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new B, this.material = void 0 !== e ? e : new C({
      color: 16777215 * Math.random()
    }), this.drawMode = xo, this.updateMorphTargets()
  }

  function It(a, i, s, n) {
    function o(t, e) {
      i.buffers.color.setClear(t.r, t.g, t.b, e, n)
    }
    var c, h, u, l = new O(0),
      d = 0;
    return {
      getClearColor: function() {
        return l
      },
      setClearColor: function(t, e) {
        l.set(t), o(l, d = void 0 !== e ? e : 1)
      },
      getClearAlpha: function() {
        return d
      },
      setClearAlpha: function(t) {
        o(l, d = t)
      },
      render: function(t, e, i, n) {
        var r = e.background;
        null === r ? o(l, d) : r && r.isColor && (o(r, 1), n = !0), (a.autoClear || n) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), r && r.isCubeTexture ? (void 0 === u && ((u = new G(new E(1, 1, 1), new k({
          uniforms: yc.cube.uniforms,
          vertexShader: yc.cube.vertexShader,
          fragmentShader: yc.cube.fragmentShader,
          side: Ea,
          depthTest: !0,
          depthWrite: !1,
          fog: !1
        }))).geometry.removeAttribute("normal"), u.geometry.removeAttribute("uv"), u.onBeforeRender = function(t, e, i) {
          this.matrixWorld.copyPosition(i.matrixWorld)
        }, s.update(u)), u.material.uniforms.tCube.value = r, t.push(u, u.geometry, u.material, 0, null)) : r && r.isTexture && (void 0 === c && (c = new m(-1, 1, 1, -1, 0, 1), h = new G(new S(2, 2), new C({
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), s.update(h)), h.material.map = r, a.renderBufferDirect(c, null, h.geometry, h.material, h, null))
      }
    }
  }

  function _t(i, r, a) {
    var s;
    this.setMode = function(t) {
      s = t
    }, this.render = function(t, e) {
      i.drawArrays(s, t, e), a.update(e, s)
    }, this.renderInstances = function(t, e, i) {
      var n = r.get("ANGLE_instanced_arrays");
      null !== n && (n.drawArraysInstancedANGLE(s, e, i, t.maxInstancedCount), a.update(i, s, t.maxInstancedCount))
    }
  }

  function bt(e, i, t) {
    function n(t) {
      if("highp" === t) {
        if(0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision) return "highp";
        t = "mediump"
      }
      return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
    }
    var r, a = void 0 !== t.precision ? t.precision : "highp",
      s = n(a);
    s !== a && (a = s);
    var o = !0 === t.logarithmicDepthBuffer,
      c = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
      h = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      u = e.getParameter(e.MAX_TEXTURE_SIZE),
      l = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
      d = e.getParameter(e.MAX_VERTEX_ATTRIBS),
      p = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
      f = e.getParameter(e.MAX_VARYING_VECTORS),
      g = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
      m = 0 < h,
      M = !!i.get("OES_texture_float");
    return {
      getMaxAnisotropy: function() {
        if(void 0 !== r) return r;
        var t = i.get("EXT_texture_filter_anisotropic");
        return r = null !== t ? e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
      },
      getMaxPrecision: n,
      precision: a,
      logarithmicDepthBuffer: o,
      maxTextures: c,
      maxVertexTextures: h,
      maxTextureSize: u,
      maxCubemapSize: l,
      maxAttributes: d,
      maxVertexUniforms: p,
      maxVaryings: f,
      maxFragmentUniforms: g,
      vertexTextures: m,
      floatFragmentTextures: M,
      floatVertexTextures: m && M
    }
  }

  function St() {
    function u() {
      y.value !== p && (y.value = p, y.needsUpdate = 0 < f), d.numPlanes = f, d.numIntersection = 0
    }

    function l(t, e, i, n) {
      var r = null !== t ? t.length : 0,
        a = null;
      if(0 !== r) {
        if(a = y.value, !0 !== n || null === a) {
          var s = i + 4 * r,
            o = e.matrixWorldInverse;
          v.getNormalMatrix(o), (null === a || a.length < s) && (a = new Float32Array(s));
          for(var c = 0, h = i; c !== r; ++c, h += 4) M.copy(t[c]).applyMatrix4(o, v), M.normal.toArray(a, h), a[h + 3] = M.constant
        }
        y.value = a, y.needsUpdate = !0
      }
      return d.numPlanes = r, a
    }
    var d = this,
      p = null,
      f = 0,
      g = !1,
      m = !1,
      M = new s,
      v = new I,
      y = {
        value: null,
        needsUpdate: !1
      };
    this.uniform = y, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, i) {
      var n = 0 !== t.length || e || 0 !== f || g;
      return g = e, p = l(t, i, 0), f = t.length, n
    }, this.beginShadows = function() {
      m = !0, l(null)
    }, this.endShadows = function() {
      m = !1, u()
    }, this.setState = function(t, e, i, n, r, a) {
      if(!g || null === t || 0 === t.length || m && !i) m ? l(null) : u();
      else {
        var s = m ? 0 : f,
          o = 4 * s,
          c = r.clippingState || null;
        y.value = c, c = l(t, n, o, a);
        for(var h = 0; h !== o; ++h) c[h] = p[h];
        r.clippingState = c, this.numIntersection = e ? this.numPlanes : 0, this.numPlanes += s
      }
    }
  }

  function jt(i) {
    var n = {};
    return {
      get: function(t) {
        if(void 0 !== n[t]) return n[t];
        var e;
        switch(t) {
          case "WEBGL_depth_texture":
            e = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            e = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            e = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            e = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            e = i.getExtension(t)
        }
        return n[t] = e
      }
    }
  }

  function Ct(l, d, a) {
    function s(t) {
      var e = t.target,
        i = o[e.id];
      for(var n in null !== i.index && d.remove(i.index), i.attributes) d.remove(i.attributes[n]);
      e.removeEventListener("dispose", s), delete o[e.id];
      var r = p[e.id];
      r && (d.remove(r), delete p[e.id]), (r = p[i.id]) && (d.remove(r), delete p[i.id]), a.memory.geometries--
    }
    var o = {},
      p = {};
    return {
      get: function(t, e) {
        var i = o[e.id];
        return i || (e.addEventListener("dispose", s), e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new B).setFromObject(t)), i = e._bufferGeometry), o[e.id] = i, a.memory.geometries++, i)
      },
      update: function(t) {
        var e = t.index,
          i = t.attributes;
        for(var n in null !== e && d.update(e, l.ELEMENT_ARRAY_BUFFER), i) d.update(i[n], l.ARRAY_BUFFER);
        var r = t.morphAttributes;
        for(var n in r)
          for(var a = r[n], s = 0, o = a.length; s < o; s++) d.update(a[s], l.ARRAY_BUFFER)
      },
      getWireframeAttribute: function(t) {
        var e = p[t.id];
        if(e) return e;
        var i, n = [],
          r = t.index,
          a = t.attributes;
        if(null !== r)
          for(var s = 0, o = (i = r.array).length; s < o; s += 3) {
            var c = i[s + 0],
              h = i[s + 1],
              u = i[s + 2];
            n.push(c, h, h, u, u, c)
          } else
            for(s = 0, o = (i = a.position.array).length / 3 - 1; s < o; s += 3) {
              c = s + 0, h = s + 1, u = s + 2;
              n.push(c, h, h, u, u, c)
            }
        return e = new(65535 < L(n) ? w : v)(n, 1), d.update(e, l.ELEMENT_ARRAY_BUFFER), p[t.id] = e
      }
    }
  }

  function Ot(i, r, a) {
    var s, o, c;
    this.setMode = function(t) {
      s = t
    }, this.setIndex = function(t) {
      o = t.type, c = t.bytesPerElement
    }, this.render = function(t, e) {
      i.drawElements(s, e, o, t * c), a.update(e, s)
    }, this.renderInstances = function(t, e, i) {
      var n = r.get("ANGLE_instanced_arrays");
      null !== n && (n.drawElementsInstancedANGLE(s, i, o, e * c, t.maxInstancedCount), a.update(i, s, t.maxInstancedCount))
    }
  }

  function zt(n) {
    var r = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: r,
      programs: null,
      autoReset: !0,
      reset: function() {
        r.frame++, r.calls = 0, r.triangles = 0, r.points = 0, r.lines = 0
      },
      update: function(t, e, i) {
        switch(i = i || 1, r.calls++, e) {
          case n.TRIANGLES:
            r.triangles += i * (t / 3);
            break;
          case n.TRIANGLE_STRIP:
          case n.TRIANGLE_FAN:
            r.triangles += i * (t - 2);
            break;
          case n.LINES:
            r.lines += i * (t / 2);
            break;
          case n.LINE_STRIP:
            r.lines += i * (t - 1);
            break;
          case n.LINE_LOOP:
            r.lines += i * t;
            break;
          case n.POINTS:
            r.points += i * t
        }
      }
    }
  }

  function Y(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1])
  }

  function Pt(p) {
    var f = {},
      g = new Float32Array(8);
    return {
      update: function(t, e, i, n) {
        var r = t.morphTargetInfluences,
          a = r.length,
          s = f[e.id];
        if(void 0 === s) {
          s = [];
          for(var o = 0; o < a; o++) s[o] = [o, 0];
          f[e.id] = s
        }
        var c = i.morphTargets && e.morphAttributes.position,
          h = i.morphNormals && e.morphAttributes.normal;
        for(o = 0; o < a; o++) {
          0 !== (u = s[o])[1] && (c && e.removeAttribute("morphTarget" + o), h && e.removeAttribute("morphNormal" + o))
        }
        for(o = 0; o < a; o++) {
          (u = s[o])[0] = o, u[1] = r[o]
        }
        for(s.sort(Y), o = 0; o < 8; o++) {
          var u;
          if(u = s[o]) {
            var l = u[0],
              d = u[1];
            if(d) {
              c && e.addAttribute("morphTarget" + o, c[l]), h && e.addAttribute("morphNormal" + o, h[l]), g[o] = d;
              continue
            }
          }
          g[o] = 0
        }
        n.getUniforms().setValue(p, "morphTargetInfluences", g)
      }
    }
  }

  function Ut(r, a) {
    var s = {};
    return {
      update: function(t) {
        var e = a.render.frame,
          i = t.geometry,
          n = r.get(t, i);
        return s[n.id] !== e && (i.isGeometry && n.updateFromObject(t), r.update(n), s[n.id] = e), n
      },
      dispose: function() {
        s = {}
      }
    }
  }

  function V(t, e, i, n, r, a, s, o, c, h) {
    d.call(this, t = void 0 !== t ? t : [], e = void 0 !== e ? e : fs, i, n, r, a, s, o, c, h), this.flipY = !1
  }

  function H() {
    this.seq = [], this.map = {}
  }

  function X(t, e, i) {
    var n = t[0];
    if(n <= 0 || 0 < n) return t;
    var r = e * i,
      a = Zh[r];
    if(void 0 === a && (a = new Float32Array(r), Zh[r] = a), 0 !== e) {
      n.toArray(a, 0);
      for(var s = 1, o = 0; s !== e; ++s) o += i, t[s].toArray(a, o)
    }
    return a
  }

  function Z(t, e) {
    if(t.length !== e.length) return !1;
    for(var i = 0, n = t.length; i < n; i++)
      if(t[i] !== e[i]) return !1;
    return !0
  }

  function q(t, e) {
    for(var i = 0, n = e.length; i < n; i++) t[i] = e[i]
  }

  function J(t, e) {
    var i = qh[e];
    void 0 === i && (i = new Int32Array(e), qh[e] = i);
    for(var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
    return i
  }

  function K(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
  }

  function $(t, e) {
    var i = this.cache;
    i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
  }

  function et(t, e) {
    var i = this.cache;
    if(void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
    else {
      if(Z(i, e)) return;
      t.uniform2fv(this.addr, e), q(i, e)
    }
  }

  function it(t, e) {
    var i = this.cache;
    if(void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
    else if(void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
    else {
      if(Z(i, e)) return;
      t.uniform3fv(this.addr, e), q(i, e)
    }
  }

  function nt(t, e) {
    var i = this.cache;
    if(void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
    else {
      if(Z(i, e)) return;
      t.uniform4fv(this.addr, e), q(i, e)
    }
  }

  function rt(t, e) {
    var i = this.cache,
      n = e.elements;
    if(void 0 === n) {
      if(Z(i, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), q(i, e)
    } else {
      if(Z(i, n)) return;
      $h.set(n), t.uniformMatrix2fv(this.addr, !1, $h), q(i, n)
    }
  }

  function at(t, e) {
    var i = this.cache,
      n = e.elements;
    if(void 0 === n) {
      if(Z(i, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), q(i, e)
    } else {
      if(Z(i, n)) return;
      Kh.set(n), t.uniformMatrix3fv(this.addr, !1, Kh), q(i, n)
    }
  }

  function st(t, e) {
    var i = this.cache,
      n = e.elements;
    if(void 0 === n) {
      if(Z(i, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), q(i, e)
    } else {
      if(Z(i, n)) return;
      Jh.set(n), t.uniformMatrix4fv(this.addr, !1, Jh), q(i, n)
    }
  }

  function ot(t, e, i) {
    var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || Hh, r)
  }

  function ct(t, e, i) {
    var n = this.cache,
      r = i.allocTextureUnit();
    n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || Xh, r)
  }

  function ht(t, e) {
    var i = this.cache;
    Z(i, e) || (t.uniform2iv(this.addr, e), q(i, e))
  }

  function ut(t, e) {
    var i = this.cache;
    Z(i, e) || (t.uniform3iv(this.addr, e), q(i, e))
  }

  function lt(t, e) {
    var i = this.cache;
    Z(i, e) || (t.uniform4iv(this.addr, e), q(i, e))
  }

  function dt(t, e) {
    var i = this.cache;
    Z(i, e) || (t.uniform1fv(this.addr, e), q(i, e))
  }

  function pt(t, e) {
    var i = this.cache;
    Z(i, e) || (t.uniform1iv(this.addr, e), q(i, e))
  }

  function ft(t, e) {
    var i = this.cache,
      n = X(e, this.size, 2);
    Z(i, n) || (t.uniform2fv(this.addr, n), this.updateCache(n))
  }

  function gt(t, e) {
    var i = this.cache,
      n = X(e, this.size, 3);
    Z(i, n) || (t.uniform3fv(this.addr, n), this.updateCache(n))
  }

  function mt(t, e) {
    var i = this.cache,
      n = X(e, this.size, 4);
    Z(i, n) || (t.uniform4fv(this.addr, n), this.updateCache(n))
  }

  function Mt(t, e) {
    var i = this.cache,
      n = X(e, this.size, 4);
    Z(i, n) || (t.uniformMatrix2fv(this.addr, !1, n), this.updateCache(n))
  }

  function vt(t, e) {
    var i = this.cache,
      n = X(e, this.size, 9);
    Z(i, n) || (t.uniformMatrix3fv(this.addr, !1, n), this.updateCache(n))
  }

  function yt(t, e) {
    var i = this.cache,
      n = X(e, this.size, 16);
    Z(i, n) || (t.uniformMatrix4fv(this.addr, !1, n), this.updateCache(n))
  }

  function Bt(t, e, i) {
    var n = this.cache,
      r = e.length,
      a = J(i, r);
    !1 === Z(n, a) && (t.uniform1iv(this.addr, a), q(n, a));
    for(var s = 0; s !== r; ++s) i.setTexture2D(e[s] || Hh, a[s])
  }

  function kt(t, e, i) {
    var n = this.cache,
      r = e.length,
      a = J(i, r);
    !1 === Z(n, a) && (t.uniform1iv(this.addr, a), q(n, a));
    for(var s = 0; s !== r; ++s) i.setTextureCube(e[s] || Xh, a[s])
  }

  function Rt(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) {
      switch(t) {
        case 5126:
          return K;
        case 35664:
          return et;
        case 35665:
          return it;
        case 35666:
          return nt;
        case 35674:
          return rt;
        case 35675:
          return at;
        case 35676:
          return st;
        case 35678:
        case 36198:
          return ot;
        case 35680:
          return ct;
        case 5124:
        case 35670:
          return $;
        case 35667:
        case 35671:
          return ht;
        case 35668:
        case 35672:
          return ut;
        case 35669:
        case 35673:
          return lt
      }
    }(e.type)
  }

  function Ft(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
      switch(t) {
        case 5126:
          return dt;
        case 35664:
          return ft;
        case 35665:
          return gt;
        case 35666:
          return mt;
        case 35674:
          return Mt;
        case 35675:
          return vt;
        case 35676:
          return yt;
        case 35678:
          return Bt;
        case 35680:
          return kt;
        case 5124:
        case 35670:
          return pt;
        case 35667:
        case 35671:
          return ht;
        case 35668:
        case 35672:
          return ut;
        case 35669:
        case 35673:
          return lt
      }
    }(e.type)
  }

  function Qt(t) {
    this.id = t, H.call(this)
  }

  function Gt(t, e) {
    t.seq.push(e), t.map[e.id] = e
  }

  function Yt(t, e, i) {
    var n = t.name,
      r = n.length;
    for(tu.lastIndex = 0;;) {
      var a = tu.exec(n),
        s = tu.lastIndex,
        o = a[1],
        c = "]" === a[2],
        h = a[3];
      if(c && (o |= 0), void 0 === h || "[" === h && s + 2 === r) {
        Gt(i, void 0 === h ? new Rt(o, t, e) : new Ft(o, t, e));
        break
      }
      var u = i.map[o];
      void 0 === u && Gt(i, u = new Qt(o)), i = u
    }
  }

  function Vt(t, e, i) {
    H.call(this), this.renderer = i;
    for(var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < n; ++r) {
      var a = t.getActiveUniform(e, r);
      Yt(a, t.getUniformLocation(e, a.name), this)
    }
  }

  function Wt(t, e, i) {
    var n = t.createShader(e);
    return t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS), t.getShaderInfoLog(n), n
  }

  function Ht(t) {
    switch(t) {
      case wo:
        return ["Linear", "( value )"];
      case No:
        return ["sRGB", "( value )"];
      case To:
        return ["RGBE", "( value )"];
      case Lo:
        return ["RGBM", "( value, 7.0 )"];
      case Eo:
        return ["RGBM", "( value, 16.0 )"];
      case Io:
        return ["RGBD", "( value, 256.0 )"];
      case Do:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      default:
        throw new Error("unsupported encoding: " + t)
    }
  }

  function Xt(t, e) {
    var i = Ht(e);
    return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
  }

  function Zt(t) {
    return "" !== t
  }

  function qt(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
  }

  function Jt(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
  }

  function Kt(t) {
    return t.replace(/^[ \t]*#include +<([\w\d.]+)>/gm, function(t, e) {
      var i = dc[e];
      if(void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
      return Kt(i)
    })
  }

  function $t(t) {
    return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, i, n) {
      for(var r = "", a = parseInt(e); a < parseInt(i); a++) r += n.replace(/\[ i \]/g, "[ " + a + " ]");
      return r
    })
  }

  function te(t, e, i, n, r, a) {
    var s = t.context,
      o = n.defines,
      c = r.vertexShader,
      h = r.fragmentShader,
      u = "SHADOWMAP_TYPE_BASIC";
    a.shadowMapType === Da ? u = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === Ta && (u = "SHADOWMAP_TYPE_PCF_SOFT");
    var l = "ENVMAP_TYPE_CUBE",
      d = "ENVMAP_MODE_REFLECTION",
      p = "ENVMAP_BLENDING_MULTIPLY";
    if(a.envMap) {
      switch(n.envMap.mapping) {
        case fs:
        case gs:
          l = "ENVMAP_TYPE_CUBE";
          break;
        case ys:
        case As:
          l = "ENVMAP_TYPE_CUBE_UV";
          break;
        case ms:
        case Ms:
          l = "ENVMAP_TYPE_EQUIREC";
          break;
        case vs:
          l = "ENVMAP_TYPE_SPHERE"
      }
      switch(n.envMap.mapping) {
        case gs:
        case Ms:
          d = "ENVMAP_MODE_REFRACTION"
      }
      switch(n.combine) {
        case ss:
          p = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case os:
          p = "ENVMAP_BLENDING_MIX";
          break;
        case cs:
          p = "ENVMAP_BLENDING_ADD"
      }
    }
    var f, g, m = 0 < t.gammaFactor ? t.gammaFactor : 1,
      M = function(t, e, i) {
        return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Zt).join("\n")
      }(n.extensions, a, e),
      v = function(t) {
        var e = [];
        for(var i in t) {
          var n = t[i];
          !1 !== n && e.push("#define " + i + " " + n)
        }
        return e.join("\n")
      }(o),
      y = s.createProgram();
    n.isRawShaderMaterial ? (0 < (f = [v].filter(Zt).join("\n")).length && (f += "\n"), 0 < (g = [M, v].filter(Zt).join("\n")).length && (g += "\n")) : (f = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, v, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + m, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Zt).join("\n"), g = [M, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, v, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + m, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + l : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + p : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && e.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== hs ? "#define TONE_MAPPING" : "", a.toneMapping !== hs ? dc.tonemapping_pars_fragment : "", a.toneMapping !== hs ? function(t, e) {
      var i;
      switch(e) {
        case us:
          i = "Linear";
          break;
        case ls:
          i = "Reinhard";
          break;
        case ds:
          i = "Uncharted2";
          break;
        case ps:
          i = "OptimizedCineon";
          break;
        default:
          throw new Error("unsupported toneMapping: " + e)
      }
      return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
    }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? dc.encodings_pars_fragment : "", a.mapEncoding ? Xt("mapTexelToLinear", a.mapEncoding) : "", a.envMapEncoding ? Xt("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Xt("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? function(t, e) {
      var i = Ht(e);
      return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
    }("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Zt).join("\n")), c = Jt(c = qt(c = Kt(c), a), a), h = Jt(h = qt(h = Kt(h), a), a);
    var A = f + (c = $t(c)),
      x = g + (h = $t(h)),
      w = Wt(s, s.VERTEX_SHADER, A),
      N = Wt(s, s.FRAGMENT_SHADER, x);
    s.attachShader(y, w), s.attachShader(y, N), void 0 !== n.index0AttributeName ? s.bindAttribLocation(y, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(y, 0, "position"), s.linkProgram(y);
    var D, T, L = s.getProgramInfoLog(y).trim(),
      E = s.getShaderInfoLog(w).trim(),
      I = s.getShaderInfoLog(N).trim(),
      _ = !0,
      b = !0;
    return !1 === s.getProgramParameter(y, s.LINK_STATUS) ? _ = !1 : "" !== L || "" !== E && "" !== I || (b = !1), b && (this.diagnostics = {
      runnable: _,
      material: n,
      programLog: L,
      vertexShader: {
        log: E,
        prefix: f
      },
      fragmentShader: {
        log: I,
        prefix: g
      }
    }), s.deleteShader(w), s.deleteShader(N), this.getUniforms = function() {
      return void 0 === D && (D = new Vt(s, y, t)), D
    }, this.getAttributes = function() {
      return void 0 === T && (T = function(t, e) {
        for(var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++) {
          var a = t.getActiveAttrib(e, r).name;
          i[a] = t.getAttribLocation(e, a)
        }
        return i
      }(s, y)), T
    }, this.destroy = function() {
      s.deleteProgram(y), this.program = void 0
    }, Object.defineProperties(this, {
      uniforms: {
        get: function() {
          return this.getUniforms()
        }
      },
      attributes: {
        get: function() {
          return this.getAttributes()
        }
      }
    }), this.name = r.name, this.id = yu++, this.code = i, this.usedTimes = 1, this.program = y, this.vertexShader = w, this.fragmentShader = N, this
  }

  function ee(l, c, d) {
    function p(t, e) {
      var i;
      return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (i = t.texture.encoding) : i = wo, i === wo && e && (i = Do), i
    }
    var h = [],
      f = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "phong",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow"
      },
      a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
    this.getParameters = function(t, e, i, n, r, a, s) {
      var o = f[t.type],
        c = s.isSkinnedMesh ? function(t) {
          var e = t.skeleton.bones;
          if(d.floatVertexTextures) return 1024;
          var i = d.maxVertexUniforms,
            n = Math.floor((i - 20) / 4),
            r = Math.min(n, e.length);
          return r < e.length ? 0 : r
        }(s) : 0,
        h = d.precision;
      null !== t.precision && (h = d.getMaxPrecision(t.precision), t.precision);
      var u = l.getRenderTarget();
      return {
        shaderID: o,
        precision: h,
        supportsVertexTextures: d.vertexTextures,
        outputEncoding: p(u ? u.texture : null, l.gammaOutput),
        map: !!t.map,
        mapEncoding: p(t.map, l.gammaInput),
        envMap: !!t.envMap,
        envMapMode: t.envMap && t.envMap.mapping,
        envMapEncoding: p(t.envMap, l.gammaInput),
        envMapCubeUV: !!t.envMap && (t.envMap.mapping === ys || t.envMap.mapping === As),
        lightMap: !!t.lightMap,
        aoMap: !!t.aoMap,
        emissiveMap: !!t.emissiveMap,
        emissiveMapEncoding: p(t.emissiveMap, l.gammaInput),
        bumpMap: !!t.bumpMap,
        normalMap: !!t.normalMap,
        displacementMap: !!t.displacementMap,
        roughnessMap: !!t.roughnessMap,
        metalnessMap: !!t.metalnessMap,
        specularMap: !!t.specularMap,
        alphaMap: !!t.alphaMap,
        gradientMap: !!t.gradientMap,
        combine: t.combine,
        vertexColors: t.vertexColors,
        fog: !!n,
        useFog: t.fog,
        fogExp: n && n.isFogExp2,
        flatShading: t.flatShading,
        sizeAttenuation: t.sizeAttenuation,
        logarithmicDepthBuffer: d.logarithmicDepthBuffer,
        skinning: t.skinning && 0 < c,
        maxBones: c,
        useVertexTexture: d.floatVertexTextures,
        morphTargets: t.morphTargets,
        morphNormals: t.morphNormals,
        maxMorphTargets: l.maxMorphTargets,
        maxMorphNormals: l.maxMorphNormals,
        numDirLights: e.directional.length,
        numPointLights: e.point.length,
        numSpotLights: e.spot.length,
        numRectAreaLights: e.rectArea.length,
        numHemiLights: e.hemi.length,
        numClippingPlanes: r,
        numClipIntersection: a,
        dithering: t.dithering,
        shadowMapEnabled: l.shadowMap.enabled && s.receiveShadow && 0 < i.length,
        shadowMapType: l.shadowMap.type,
        toneMapping: l.toneMapping,
        physicallyCorrectLights: l.physicallyCorrectLights,
        premultipliedAlpha: t.premultipliedAlpha,
        alphaTest: t.alphaTest,
        doubleSided: t.side === Ia,
        flipSided: t.side === Ea,
        depthPacking: void 0 !== t.depthPacking && t.depthPacking
      }
    }, this.getProgramCode = function(t, e) {
      var i = [];
      if(e.shaderID ? i.push(e.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
        for(var n in t.defines) i.push(n), i.push(t.defines[n]);
      for(var r = 0; r < a.length; r++) i.push(e[a[r]]);
      return i.push(t.onBeforeCompile.toString()), i.push(l.gammaOutput), i.join()
    }, this.acquireProgram = function(t, e, i, n) {
      for(var r, a = 0, s = h.length; a < s; a++) {
        var o = h[a];
        if(o.code === n) {
          ++(r = o).usedTimes;
          break
        }
      }
      return void 0 === r && (r = new te(l, c, n, t, e, i), h.push(r)), r
    }, this.releaseProgram = function(t) {
      if(0 == --t.usedTimes) {
        var e = h.indexOf(t);
        h[e] = h[h.length - 1], h.pop(), t.destroy()
      }
    }, this.programs = h
  }

  function ie() {
    var n = new WeakMap;
    return {
      get: function(t) {
        var e = n.get(t);
        return void 0 === e && (e = {}, n.set(t, e)), e
      },
      remove: function(t) {
        n.delete(t)
      },
      update: function(t, e, i) {
        n.get(t)[e] = i
      },
      dispose: function() {
        n = new WeakMap
      }
    }
  }

  function ne(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
  }

  function re(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
  }

  function ae() {
    var s = [],
      o = 0,
      c = [],
      h = [];
    return {
      opaque: c,
      transparent: h,
      init: function() {
        o = 0, c.length = 0, h.length = 0
      },
      push: function(t, e, i, n, r) {
        var a = s[o];
        void 0 === a ? (a = {
          id: t.id,
          object: t,
          geometry: e,
          material: i,
          program: i.program,
          renderOrder: t.renderOrder,
          z: n,
          group: r
        }, s[o] = a) : (a.id = t.id, a.object = t, a.geometry = e, a.material = i, a.program = i.program, a.renderOrder = t.renderOrder, a.z = n, a.group = r), (!0 === i.transparent ? h : c).push(a), o++
      },
      sort: function() {
        1 < c.length && c.sort(ne), 1 < h.length && h.sort(re)
      }
    }
  }

  function se() {
    var r = {};
    return {
      get: function(t, e) {
        var i = t.id + "," + e.id,
          n = r[i];
        return void 0 === n && (n = new ae, r[i] = n), n
      },
      dispose: function() {
        r = {}
      }
    }
  }

  function oe() {
    var i = {};
    return {
      get: function(t) {
        if(void 0 !== i[t.id]) return i[t.id];
        var e;
        switch(t.type) {
          case "DirectionalLight":
            e = {
              direction: new wt,
              color: new O,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new tt
            };
            break;
          case "SpotLight":
            e = {
              position: new wt,
              direction: new wt,
              color: new O,
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new tt
            };
            break;
          case "PointLight":
            e = {
              position: new wt,
              color: new O,
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new tt,
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
          case "HemisphereLight":
            e = {
              direction: new wt,
              skyColor: new O,
              groundColor: new O
            };
            break;
          case "RectAreaLight":
            e = {
              color: new O,
              position: new wt,
              halfWidth: new wt,
              halfHeight: new wt
            }
        }
        return i[t.id] = e
      }
    }
  }

  function ce() {
    var x = new oe,
      w = {
        id: Au++,
        hash: "",
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
      },
      N = new wt,
      D = new At,
      T = new At;
    return {
      setup: function(t, e, i) {
        for(var n = 0, r = 0, a = 0, s = 0, o = 0, c = 0, h = 0, u = 0, l = i.matrixWorldInverse, d = 0, p = t.length; d < p; d++) {
          var f = t[d],
            g = f.color,
            m = f.intensity,
            M = f.distance,
            v = f.shadow && f.shadow.map ? f.shadow.map.texture : null;
          if(f.isAmbientLight) n += g.r * m, r += g.g * m, a += g.b * m;
          else if(f.isDirectionalLight) {
            if((A = x.get(f)).color.copy(f.color).multiplyScalar(f.intensity), A.direction.setFromMatrixPosition(f.matrixWorld), N.setFromMatrixPosition(f.target.matrixWorld), A.direction.sub(N), A.direction.transformDirection(l), A.shadow = f.castShadow, f.castShadow) {
              var y = f.shadow;
              A.shadowBias = y.bias, A.shadowRadius = y.radius, A.shadowMapSize = y.mapSize
            }
            w.directionalShadowMap[s] = v, w.directionalShadowMatrix[s] = f.shadow.matrix, w.directional[s] = A, s++
          } else if(f.isSpotLight) {
            if((A = x.get(f)).position.setFromMatrixPosition(f.matrixWorld), A.position.applyMatrix4(l), A.color.copy(g).multiplyScalar(m), A.distance = M, A.direction.setFromMatrixPosition(f.matrixWorld), N.setFromMatrixPosition(f.target.matrixWorld), A.direction.sub(N), A.direction.transformDirection(l), A.coneCos = Math.cos(f.angle), A.penumbraCos = Math.cos(f.angle * (1 - f.penumbra)), A.decay = 0 === f.distance ? 0 : f.decay, A.shadow = f.castShadow, f.castShadow) {
              y = f.shadow;
              A.shadowBias = y.bias, A.shadowRadius = y.radius, A.shadowMapSize = y.mapSize
            }
            w.spotShadowMap[c] = v, w.spotShadowMatrix[c] = f.shadow.matrix, w.spot[c] = A, c++
          } else if(f.isRectAreaLight) {
            (A = x.get(f)).color.copy(g).multiplyScalar(m), A.position.setFromMatrixPosition(f.matrixWorld), A.position.applyMatrix4(l), T.identity(), D.copy(f.matrixWorld), D.premultiply(l), T.extractRotation(D), A.halfWidth.set(.5 * f.width, 0, 0), A.halfHeight.set(0, .5 * f.height, 0), A.halfWidth.applyMatrix4(T), A.halfHeight.applyMatrix4(T), w.rectArea[h] = A, h++
          } else if(f.isPointLight) {
            if((A = x.get(f)).position.setFromMatrixPosition(f.matrixWorld), A.position.applyMatrix4(l), A.color.copy(f.color).multiplyScalar(f.intensity), A.distance = f.distance, A.decay = 0 === f.distance ? 0 : f.decay, A.shadow = f.castShadow, f.castShadow) {
              y = f.shadow;
              A.shadowBias = y.bias, A.shadowRadius = y.radius, A.shadowMapSize = y.mapSize, A.shadowCameraNear = y.camera.near, A.shadowCameraFar = y.camera.far
            }
            w.pointShadowMap[o] = v, w.pointShadowMatrix[o] = f.shadow.matrix, w.point[o] = A, o++
          } else if(f.isHemisphereLight) {
            var A;
            (A = x.get(f)).direction.setFromMatrixPosition(f.matrixWorld), A.direction.transformDirection(l), A.direction.normalize(), A.skyColor.copy(f.color).multiplyScalar(m), A.groundColor.copy(f.groundColor).multiplyScalar(m), w.hemi[u] = A, u++
          }
        }
        w.ambient[0] = n, w.ambient[1] = r, w.ambient[2] = a, w.directional.length = s, w.spot.length = c, w.rectArea.length = h, w.point.length = o, w.hemi.length = u, w.hash = w.id + "," + s + "," + o + "," + c + "," + h + "," + u + "," + e.length
      },
      state: w
    }
  }

  function he() {
    var e = new ce,
      i = [],
      n = [],
      r = [];
    return {
      init: function() {
        i.length = 0, n.length = 0, r.length = 0
      },
      state: {
        lightsArray: i,
        shadowsArray: n,
        spritesArray: r,
        lights: e
      },
      setupLights: function(t) {
        e.setup(i, n, t)
      },
      pushLight: function(t) {
        i.push(t)
      },
      pushShadow: function(t) {
        n.push(t)
      },
      pushSprite: function(t) {
        r.push(t)
      }
    }
  }

  function ue() {
    var r = {};
    return {
      get: function(t, e) {
        var i = t.id + "," + e.id,
          n = r[i];
        return void 0 === n && (n = new he, r[i] = n), n
      },
      dispose: function() {
        r = {}
      }
    }
  }

  function le(t) {
    j.call(this), this.type = "MeshDepthMaterial", this.depthPacking = _o, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
  }

  function de(t) {
    j.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new wt, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
  }

  function pe(y, g, t) {
    function m(t, e, i, n, r, a) {
      var s = t.geometry,
        o = null,
        c = E,
        h = t.customDepthMaterial;
      if(i && (c = I, h = t.customDistanceMaterial), h) o = h;
      else {
        var u = !1;
        e.morphTargets && (s && s.isBufferGeometry ? u = s.morphAttributes && s.morphAttributes.position && 0 < s.morphAttributes.position.length : s && s.isGeometry && (u = s.morphTargets && 0 < s.morphTargets.length)), t.isSkinnedMesh && e.skinning;
        var l = t.isSkinnedMesh && e.skinning,
          d = 0;
        u && (d |= M), l && (d |= v), o = c[d]
      }
      if(y.localClippingEnabled && !0 === e.clipShadows && 0 !== e.clippingPlanes.length) {
        var p = o.uuid,
          f = e.uuid,
          g = _[p];
        void 0 === g && (g = {}, _[p] = g);
        var m = g[f];
        void 0 === m && (m = o.clone(), g[f] = m), o = m
      }
      return o.visible = e.visible, o.wireframe = e.wireframe, o.side = null != e.shadowSide ? e.shadowSide : b[e.side], o.clipShadows = e.clipShadows, o.clippingPlanes = e.clippingPlanes, o.clipIntersection = e.clipIntersection, o.wireframeLinewidth = e.wireframeLinewidth, o.linewidth = e.linewidth, i && o.isMeshDistanceMaterial && (o.referencePosition.copy(n), o.nearDistance = r, o.farDistance = a), o
    }

    function A(t, e, i, n) {
      if(!1 !== t.visible) {
        if(t.layers.test(e.layers) && (t.isMesh || t.isLine || t.isPoints) && t.castShadow && (!t.frustumCulled || x.intersectsObject(t))) {
          t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld);
          var r = g.update(t),
            a = t.material;
          if(Array.isArray(a))
            for(var s = r.groups, o = 0, c = s.length; o < c; o++) {
              var h = s[o],
                u = a[h.materialIndex];
              if(u && u.visible) {
                var l = m(t, u, n, L, i.near, i.far);
                y.renderBufferDirect(i, null, r, l, t, h)
              }
            } else if(a.visible) {
              l = m(t, a, n, L, i.near, i.far);
              y.renderBufferDirect(i, null, r, l, t, null)
            }
        }
        for(var d = t.children, p = 0, f = d.length; p < f; p++) A(d[p], e, i, n)
      }
    }
    for(var x = new Tt, w = new At, N = new tt, D = new tt(t, t), T = new wt, L = new wt, M = 1, v = 2, e = 1 + (M | v), E = new Array(e), I = new Array(e), _ = {}, b = {
        0: Ea,
        1: La,
        2: Ia
      }, S = [new wt(1, 0, 0), new wt(-1, 0, 0), new wt(0, 0, 1), new wt(0, 0, -1), new wt(0, 1, 0), new wt(0, -1, 0)], j = [new wt(0, 1, 0), new wt(0, 1, 0), new wt(0, 1, 0), new wt(0, 1, 0), new wt(0, 0, 1), new wt(0, 0, -1)], C = [new Nt, new Nt, new Nt, new Nt, new Nt, new Nt], i = 0; i !== e; ++i) {
      var n = 0 != (i & M),
        r = 0 != (i & v),
        a = new le({
          depthPacking: bo,
          morphTargets: n,
          skinning: r
        });
      E[i] = a;
      var s = new de({
        morphTargets: n,
        skinning: r
      });
      I[i] = s
    }
    var O = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Da, this.render = function(t, e, i) {
      if(!1 !== O.enabled && (!1 !== O.autoUpdate || !1 !== O.needsUpdate) && 0 !== t.length) {
        var n, r = y.context,
          a = y.state;
        a.disable(r.BLEND), a.buffers.color.setClear(1, 1, 1, 1), a.buffers.depth.setTest(!0), a.setScissorTest(!1);
        for(var s = 0, o = t.length; s < o; s++) {
          var c = t[s],
            h = c.shadow,
            u = c && c.isPointLight;
          if(void 0 !== h) {
            var l = h.camera;
            if(N.copy(h.mapSize), N.min(D), u) {
              var d = N.x,
                p = N.y;
              C[0].set(2 * d, p, d, p), C[1].set(0, p, d, p), C[2].set(3 * d, p, d, p), C[3].set(d, p, d, p), C[4].set(3 * d, 0, d, p), C[5].set(d, 0, d, p), N.x *= 4, N.y *= 2
            }
            if(null === h.map) {
              var f = {
                minFilter: Ds,
                magFilter: Ds,
                format: Ys
              };
              h.map = new z(N.x, N.y, f), h.map.texture.name = c.name + ".shadowMap", l.updateProjectionMatrix()
            }
            h.isSpotLightShadow && h.update(c);
            var g = h.map,
              m = h.matrix;
            L.setFromMatrixPosition(c.matrixWorld), l.position.copy(L), u ? (n = 6, m.makeTranslation(-L.x, -L.y, -L.z)) : (n = 1, T.setFromMatrixPosition(c.target.matrixWorld), l.lookAt(T), l.updateMatrixWorld(), m.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), m.multiply(l.projectionMatrix), m.multiply(l.matrixWorldInverse)), y.setRenderTarget(g), y.clear();
            for(var M = 0; M < n; M++) {
              if(u) {
                T.copy(l.position), T.add(S[M]), l.up.copy(j[M]), l.lookAt(T), l.updateMatrixWorld();
                var v = C[M];
                a.viewport(v)
              }
              w.multiplyMatrices(l.projectionMatrix, l.matrixWorldInverse), x.setFromMatrix(w), A(e, i, l, u)
            }
          }
        }
        O.needsUpdate = !1
      }
    }
  }

  function fe(t, e, i, n, r, a, s, o, c) {
    d.call(this, t, e, i, n, r, a, s, o, c), this.needsUpdate = !0
  }

  function ge(p, f, g, m, r) {
    function M() {
      var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
        e = new Uint16Array([0, 1, 2, 0, 2, 3]);
      y = f.createBuffer(), A = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, y), f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, A), f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW), x = function() {
        var t = f.createProgram(),
          e = f.createShader(f.VERTEX_SHADER),
          i = f.createShader(f.FRAGMENT_SHADER);
        return f.shaderSource(e, ["precision " + r.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 center;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvUV = uvOffset + uv * uvScale;", "\tvec2 alignedPosition = ( position - center ) * scale;", "\tvec2 rotatedPosition;", "\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "\tvec4 mvPosition;", "\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "\tmvPosition.xy += rotatedPosition;", "\tgl_Position = projectionMatrix * mvPosition;", "\tfogDepth = - mvPosition.z;", "}"].join("\n")), f.shaderSource(i, ["precision " + r.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "\tvec4 texture = texture2D( map, vUV );", "\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "\tif ( gl_FragColor.a < alphaTest ) discard;", "\tif ( fogType > 0 ) {", "\t\tfloat fogFactor = 0.0;", "\t\tif ( fogType == 1 ) {", "\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );", "\t\t} else {", "\t\t\tconst float LOG2 = 1.442695;", "\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );", "\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "\t\t}", "\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );", "\t}", "}"].join("\n")), f.compileShader(e), f.compileShader(i), f.attachShader(t, e), f.attachShader(t, i), f.linkProgram(t), t
      }(), w = {
        position: f.getAttribLocation(x, "position"),
        uv: f.getAttribLocation(x, "uv")
      }, N = {
        uvOffset: f.getUniformLocation(x, "uvOffset"),
        uvScale: f.getUniformLocation(x, "uvScale"),
        rotation: f.getUniformLocation(x, "rotation"),
        center: f.getUniformLocation(x, "center"),
        scale: f.getUniformLocation(x, "scale"),
        color: f.getUniformLocation(x, "color"),
        map: f.getUniformLocation(x, "map"),
        opacity: f.getUniformLocation(x, "opacity"),
        modelViewMatrix: f.getUniformLocation(x, "modelViewMatrix"),
        projectionMatrix: f.getUniformLocation(x, "projectionMatrix"),
        fogType: f.getUniformLocation(x, "fogType"),
        fogDensity: f.getUniformLocation(x, "fogDensity"),
        fogNear: f.getUniformLocation(x, "fogNear"),
        fogFar: f.getUniformLocation(x, "fogFar"),
        fogColor: f.getUniformLocation(x, "fogColor"),
        fogDepth: f.getUniformLocation(x, "fogDepth"),
        alphaTest: f.getUniformLocation(x, "alphaTest")
      };
      var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      i.width = 8, i.height = 8;
      var n = i.getContext("2d");
      n.fillStyle = "white", n.fillRect(0, 0, 8, 8), D = new fe(i)
    }

    function v(t, e) {
      return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
    }
    var y, A, x, w, N, D, T = new wt,
      L = new W,
      E = new wt;
    this.render = function(t, e, i) {
      if(0 !== t.length) {
        void 0 === x && M(), g.useProgram(x), g.initAttributes(), g.enableAttribute(w.position), g.enableAttribute(w.uv), g.disableUnusedAttributes(), g.disable(f.CULL_FACE), g.enable(f.BLEND), f.bindBuffer(f.ARRAY_BUFFER, y), f.vertexAttribPointer(w.position, 2, f.FLOAT, !1, 16, 0), f.vertexAttribPointer(w.uv, 2, f.FLOAT, !1, 16, 8), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, A), f.uniformMatrix4fv(N.projectionMatrix, !1, i.projectionMatrix.elements), g.activeTexture(f.TEXTURE0), f.uniform1i(N.map, 0);
        var n = 0,
          r = 0,
          a = e.fog;
        a ? (f.uniform3f(N.fogColor, a.color.r, a.color.g, a.color.b), a.isFog ? (f.uniform1f(N.fogNear, a.near), f.uniform1f(N.fogFar, a.far), f.uniform1i(N.fogType, 1), r = n = 1) : a.isFogExp2 && (f.uniform1f(N.fogDensity, a.density), f.uniform1i(N.fogType, 2), r = n = 2)) : (f.uniform1i(N.fogType, 0), r = n = 0);
        for(var s = 0, o = t.length; s < o; s++) {
          (u = t[s]).modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, u.matrixWorld), u.z = -u.modelViewMatrix.elements[14]
        }
        t.sort(v);
        var c = [],
          h = [];
        for(s = 0, o = t.length; s < o; s++) {
          var u, l = (u = t[s]).material;
          if(!1 !== l.visible) {
            u.onBeforeRender(p, e, i, void 0, l, void 0), f.uniform1f(N.alphaTest, l.alphaTest), f.uniformMatrix4fv(N.modelViewMatrix, !1, u.modelViewMatrix.elements), u.matrixWorld.decompose(T, L, E), c[0] = E.x, c[1] = E.y, h[0] = u.center.x - .5, h[1] = u.center.y - .5;
            var d = 0;
            e.fog && l.fog && (d = r), n !== d && (f.uniform1i(N.fogType, d), n = d), null !== l.map ? (f.uniform2f(N.uvOffset, l.map.offset.x, l.map.offset.y), f.uniform2f(N.uvScale, l.map.repeat.x, l.map.repeat.y)) : (f.uniform2f(N.uvOffset, 0, 0), f.uniform2f(N.uvScale, 1, 1)), f.uniform1f(N.opacity, l.opacity), f.uniform3f(N.color, l.color.r, l.color.g, l.color.b), f.uniform1f(N.rotation, l.rotation), f.uniform2fv(N.center, h), f.uniform2fv(N.scale, c), g.setBlending(l.blending, l.blendEquation, l.blendSrc, l.blendDst, l.blendEquationAlpha, l.blendSrcAlpha, l.blendDstAlpha, l.premultipliedAlpha), g.buffers.depth.setTest(l.depthTest), g.buffers.depth.setMask(l.depthWrite), g.buffers.color.setMask(l.colorWrite), m.setTexture2D(l.map || D, 0), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0), u.onAfterRender(p, e, i, void 0, l, void 0)
          }
        }
        g.enable(f.CULL_FACE), g.reset()
      }
    }
  }

  function me(u, i, c) {
    function t(t, e, i) {
      var n = new Uint8Array(4),
        r = u.createTexture();
      u.bindTexture(t, r), u.texParameteri(t, u.TEXTURE_MIN_FILTER, u.NEAREST), u.texParameteri(t, u.TEXTURE_MAG_FILTER, u.NEAREST);
      for(var a = 0; a < i; a++) u.texImage2D(e + a, 0, u.RGBA, 1, 1, 0, u.RGBA, u.UNSIGNED_BYTE, n);
      return r
    }

    function e(t, e) {
      m[t] = 1, 0 === M[t] && (u.enableVertexAttribArray(t), M[t] = 1), v[t] !== e && (i.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(t, e), v[t] = e)
    }

    function l(t) {
      !0 !== y[t] && (u.enable(t), y[t] = !0)
    }

    function d(t) {
      !1 !== y[t] && (u.disable(t), y[t] = !1)
    }

    function n(t, e, i, n, r, a, s, o) {
      if(t !== ba ? l(u.BLEND) : d(u.BLEND), t !== za) {
        if(t !== w || o !== _) switch(t) {
          case ja:
            o ? (u.blendEquationSeparate(u.FUNC_ADD, u.FUNC_ADD), u.blendFuncSeparate(u.ONE, u.ONE, u.ONE, u.ONE)) : (u.blendEquation(u.FUNC_ADD), u.blendFunc(u.SRC_ALPHA, u.ONE));
            break;
          case Ca:
            o ? (u.blendEquationSeparate(u.FUNC_ADD, u.FUNC_ADD), u.blendFuncSeparate(u.ZERO, u.ZERO, u.ONE_MINUS_SRC_COLOR, u.ONE_MINUS_SRC_ALPHA)) : (u.blendEquation(u.FUNC_ADD), u.blendFunc(u.ZERO, u.ONE_MINUS_SRC_COLOR));
            break;
          case Oa:
            o ? (u.blendEquationSeparate(u.FUNC_ADD, u.FUNC_ADD), u.blendFuncSeparate(u.ZERO, u.SRC_COLOR, u.ZERO, u.SRC_ALPHA)) : (u.blendEquation(u.FUNC_ADD), u.blendFunc(u.ZERO, u.SRC_COLOR));
            break;
          default:
            o ? (u.blendEquationSeparate(u.FUNC_ADD, u.FUNC_ADD), u.blendFuncSeparate(u.ONE, u.ONE_MINUS_SRC_ALPHA, u.ONE, u.ONE_MINUS_SRC_ALPHA)) : (u.blendEquationSeparate(u.FUNC_ADD, u.FUNC_ADD), u.blendFuncSeparate(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA, u.ONE, u.ONE_MINUS_SRC_ALPHA))
        }
        I = E = L = T = D = N = null
      } else r = r || e, a = a || i, s = s || n, e === N && r === L || (u.blendEquationSeparate(c.convert(e), c.convert(r)), N = e, L = r), i === D && n === T && a === E && s === I || (u.blendFuncSeparate(c.convert(i), c.convert(n), c.convert(a), c.convert(s)), D = i, T = n, E = a, I = s);
      w = t, _ = o
    }

    function r(t) {
      b !== t && (t ? u.frontFace(u.CW) : u.frontFace(u.CCW), b = t)
    }

    function a(t) {
      t !== xa ? (l(u.CULL_FACE), t !== S && (t === wa ? u.cullFace(u.BACK) : t === Na ? u.cullFace(u.FRONT) : u.cullFace(u.FRONT_AND_BACK))) : d(u.CULL_FACE), S = t
    }

    function s(t, e, i) {
      t ? (l(u.POLYGON_OFFSET_FILL), C === e && O === i || (u.polygonOffset(e, i), C = e, O = i)) : d(u.POLYGON_OFFSET_FILL)
    }

    function o(t) {
      void 0 === t && (t = u.TEXTURE0 + z - 1), k !== t && (u.activeTexture(t), k = t)
    }
    var h = new function() {
        var e = !1,
          a = new Nt,
          i = null,
          s = new Nt(0, 0, 0, 0);
        return {
          setMask: function(t) {
            i === t || e || (u.colorMask(t, t, t, t), i = t)
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(t, e, i, n, r) {
            !0 === r && (t *= n, e *= n, i *= n), a.set(t, e, i, n), !1 === s.equals(a) && (u.clearColor(t, e, i, n), s.copy(a))
          },
          reset: function() {
            e = !1, i = null, s.set(-1, 0, 0, 0)
          }
        }
      },
      p = new function() {
        var e = !1,
          i = null,
          n = null,
          r = null;
        return {
          setTest: function(t) {
            t ? l(u.DEPTH_TEST) : d(u.DEPTH_TEST)
          },
          setMask: function(t) {
            i === t || e || (u.depthMask(t), i = t)
          },
          setFunc: function(t) {
            if(n !== t) {
              if(t) switch(t) {
                case Ka:
                  u.depthFunc(u.NEVER);
                  break;
                case $a:
                  u.depthFunc(u.ALWAYS);
                  break;
                case ts:
                  u.depthFunc(u.LESS);
                  break;
                case es:
                  u.depthFunc(u.LEQUAL);
                  break;
                case is:
                  u.depthFunc(u.EQUAL);
                  break;
                case ns:
                  u.depthFunc(u.GEQUAL);
                  break;
                case rs:
                  u.depthFunc(u.GREATER);
                  break;
                case as:
                  u.depthFunc(u.NOTEQUAL);
                  break;
                default:
                  u.depthFunc(u.LEQUAL)
              } else u.depthFunc(u.LEQUAL);
              n = t
            }
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(t) {
            r !== t && (u.clearDepth(t), r = t)
          },
          reset: function() {
            e = !1, r = n = i = null
          }
        }
      },
      f = new function() {
        var e = !1,
          i = null,
          n = null,
          r = null,
          a = null,
          s = null,
          o = null,
          c = null,
          h = null;
        return {
          setTest: function(t) {
            t ? l(u.STENCIL_TEST) : d(u.STENCIL_TEST)
          },
          setMask: function(t) {
            i === t || e || (u.stencilMask(t), i = t)
          },
          setFunc: function(t, e, i) {
            n === t && r === e && a === i || (u.stencilFunc(t, e, i), n = t, r = e, a = i)
          },
          setOp: function(t, e, i) {
            s === t && o === e && c === i || (u.stencilOp(t, e, i), s = t, o = e, c = i)
          },
          setLocked: function(t) {
            e = t
          },
          setClear: function(t) {
            h !== t && (u.clearStencil(t), h = t)
          },
          reset: function() {
            e = !1, h = c = o = s = a = r = n = i = null
          }
        }
      },
      g = u.getParameter(u.MAX_VERTEX_ATTRIBS),
      m = new Uint8Array(g),
      M = new Uint8Array(g),
      v = new Uint8Array(g),
      y = {},
      A = null,
      x = null,
      w = null,
      N = null,
      D = null,
      T = null,
      L = null,
      E = null,
      I = null,
      _ = !1,
      b = null,
      S = null,
      j = null,
      C = null,
      O = null,
      z = u.getParameter(u.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
      P = !1,
      U = 0,
      B = u.getParameter(u.VERSION); - 1 !== B.indexOf("WebGL") ? (U = parseFloat(/^WebGL\ ([0-9])/.exec(B)[1]), P = 1 <= U) : -1 !== B.indexOf("OpenGL ES") && (U = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(B)[1]), P = 2 <= U);
    var k = null,
      R = {},
      F = new Nt,
      Q = new Nt,
      G = {};
    return G[u.TEXTURE_2D] = t(u.TEXTURE_2D, u.TEXTURE_2D, 1), G[u.TEXTURE_CUBE_MAP] = t(u.TEXTURE_CUBE_MAP, u.TEXTURE_CUBE_MAP_POSITIVE_X, 6), h.setClear(0, 0, 0, 1), p.setClear(1), f.setClear(0), l(u.DEPTH_TEST), p.setFunc(es), r(!1), a(wa), l(u.CULL_FACE), l(u.BLEND), n(Sa), {
      buffers: {
        color: h,
        depth: p,
        stencil: f
      },
      initAttributes: function() {
        for(var t = 0, e = m.length; t < e; t++) m[t] = 0
      },
      enableAttribute: function(t) {
        e(t, 0)
      },
      enableAttributeAndDivisor: e,
      disableUnusedAttributes: function() {
        for(var t = 0, e = M.length; t !== e; ++t) M[t] !== m[t] && (u.disableVertexAttribArray(t), M[t] = 0)
      },
      enable: l,
      disable: d,
      getCompressedTextureFormats: function() {
        if(null === A && (A = [], i.get("WEBGL_compressed_texture_pvrtc") || i.get("WEBGL_compressed_texture_s3tc") || i.get("WEBGL_compressed_texture_etc1") || i.get("WEBGL_compressed_texture_astc")))
          for(var t = u.getParameter(u.COMPRESSED_TEXTURE_FORMATS), e = 0; e < t.length; e++) A.push(t[e]);
        return A
      },
      useProgram: function(t) {
        return x !== t && (u.useProgram(t), x = t, !0)
      },
      setBlending: n,
      setMaterial: function(t, e) {
        t.side === Ia ? d(u.CULL_FACE) : l(u.CULL_FACE);
        var i = t.side === Ea;
        e && (i = !i), r(i), !0 === t.transparent ? n(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : n(ba), p.setFunc(t.depthFunc), p.setTest(t.depthTest), p.setMask(t.depthWrite), h.setMask(t.colorWrite), s(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
      },
      setFlipSided: r,
      setCullFace: a,
      setLineWidth: function(t) {
        t !== j && (P && u.lineWidth(t), j = t)
      },
      setPolygonOffset: s,
      setScissorTest: function(t) {
        t ? l(u.SCISSOR_TEST) : d(u.SCISSOR_TEST)
      },
      activeTexture: o,
      bindTexture: function(t, e) {
        null === k && o();
        var i = R[k];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, R[k] = i), i.type === t && i.texture === e || (u.bindTexture(t, e || G[t]), i.type = t, i.texture = e)
      },
      compressedTexImage2D: function() {
        try {
          u.compressedTexImage2D.apply(u, arguments)
        } catch (t) {}
      },
      texImage2D: function() {
        try {
          u.texImage2D.apply(u, arguments)
        } catch (t) {}
      },
      scissor: function(t) {
        !1 === F.equals(t) && (u.scissor(t.x, t.y, t.z, t.w), F.copy(t))
      },
      viewport: function(t) {
        !1 === Q.equals(t) && (u.viewport(t.x, t.y, t.z, t.w), Q.copy(t))
      },
      reset: function() {
        for(var t = 0; t < M.length; t++) 1 === M[t] && (u.disableVertexAttribArray(t), M[t] = 0);
        y = {}, R = {}, S = b = w = x = k = A = null, h.reset(), p.reset(), f.reset()
      }
    }
  }

  function Me(g, r, m, M, v, y, A) {
    function x(t, e) {
      if(t.width > e || t.height > e) {
        if("data" in t) return;
        var i = e / Math.max(t.width, t.height),
          n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        return n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i), n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), n
      }
      return t
    }

    function w(t) {
      return So.isPowerOfTwo(t.width) && So.isPowerOfTwo(t.height)
    }

    function N(t, e) {
      return t.generateMipmaps && e && t.minFilter !== Ds && t.minFilter !== Es
    }

    function D(t, e, i, n) {
      g.generateMipmap(t), M.get(e).__maxMipLevel = Math.log(Math.max(i, n)) * Math.LOG2E
    }

    function a(t) {
      return t === Ds || t === Ts || t === Ls ? g.NEAREST : g.LINEAR
    }

    function T(t) {
      var e = t.target;
      e.removeEventListener("dispose", T),
        function(t) {
          var e = M.get(t);
          if(t.image && e.__image__webglTextureCube) g.deleteTexture(e.__image__webglTextureCube);
          else {
            if(void 0 === e.__webglInit) return;
            g.deleteTexture(e.__webglTexture)
          }
          M.remove(t)
        }(e), e.isVideoTexture && delete l[e.id], A.memory.textures--
    }

    function s(t) {
      var e = t.target;
      e.removeEventListener("dispose", s),
        function(t) {
          var e = M.get(t),
            i = M.get(t.texture);
          if(!t) return;
          void 0 !== i.__webglTexture && g.deleteTexture(i.__webglTexture);
          t.depthTexture && t.depthTexture.dispose();
          if(t.isWebGLRenderTargetCube)
            for(var n = 0; n < 6; n++) g.deleteFramebuffer(e.__webglFramebuffer[n]), e.__webglDepthbuffer && g.deleteRenderbuffer(e.__webglDepthbuffer[n]);
          else g.deleteFramebuffer(e.__webglFramebuffer), e.__webglDepthbuffer && g.deleteRenderbuffer(e.__webglDepthbuffer);
          M.remove(t.texture), M.remove(t)
        }(e), A.memory.textures--
    }

    function o(t, e) {
      var i = M.get(t);
      if(t.isVideoTexture && function(t) {
          var e = t.id,
            i = A.render.frame;
          l[e] !== i && (l[e] = i, t.update())
        }(t), 0 < t.version && i.__version !== t.version) {
        var n = t.image;
        if(void 0 === n);
        else if(!1 !== n.complete) return void
        function(t, e, i) {
          void 0 === t.__webglInit && (t.__webglInit = !0, e.addEventListener("dispose", T), t.__webglTexture = g.createTexture(), A.memory.textures++);
          m.activeTexture(g.TEXTURE0 + i), m.bindTexture(g.TEXTURE_2D, t.__webglTexture), g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, e.flipY), g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), g.pixelStorei(g.UNPACK_ALIGNMENT, e.unpackAlignment);
          var n = x(e.image, v.maxTextureSize);
          ! function(t) {
            return t.wrapS !== ws || t.wrapT !== ws || t.minFilter !== Ds && t.minFilter !== Es
          }(e) || !1 !== w(n) || (n = function(t) {
            return t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap ? (void 0 === d && (d = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), d.width = So.floorPowerOfTwo(t.width), d.height = So.floorPowerOfTwo(t.height), d.getContext("2d").drawImage(t, 0, 0, d.width, d.height), d) : t
          }(n));
          var r = w(n),
            a = y.convert(e.format),
            s = y.convert(e.type);
          L(g.TEXTURE_2D, e, r);
          var o, c = e.mipmaps;
          if(e.isDepthTexture) {
            var h = g.DEPTH_COMPONENT;
            if(e.type === Ps) {
              if(!p) throw new Error("Float Depth Texture only supported in WebGL2.0");
              h = g.DEPTH_COMPONENT32F
            } else p && (h = g.DEPTH_COMPONENT16);
            e.format === Hs && h === g.DEPTH_COMPONENT && e.type !== Cs && e.type !== zs && (e.type = Cs, s = y.convert(e.type)), e.format === Xs && (h = g.DEPTH_STENCIL, e.type !== Fs && (e.type = Fs, s = y.convert(e.type))), m.texImage2D(g.TEXTURE_2D, 0, h, n.width, n.height, 0, a, s, null)
          } else if(e.isDataTexture)
            if(0 < c.length && r) {
              for(var u = 0, l = c.length; u < l; u++) o = c[u], m.texImage2D(g.TEXTURE_2D, u, a, o.width, o.height, 0, a, s, o.data);
              e.generateMipmaps = !1, t.__maxMipLevel = c.length - 1
            } else m.texImage2D(g.TEXTURE_2D, 0, a, n.width, n.height, 0, a, s, n.data), t.__maxMipLevel = 0;
          else if(e.isCompressedTexture) {
            for(u = 0, l = c.length; u < l; u++) o = c[u], e.format !== Ys && e.format !== Gs ? -1 < m.getCompressedTextureFormats().indexOf(a) && m.compressedTexImage2D(g.TEXTURE_2D, u, a, o.width, o.height, 0, o.data) : m.texImage2D(g.TEXTURE_2D, u, a, o.width, o.height, 0, a, s, o.data);
            t.__maxMipLevel = c.length - 1
          } else if(0 < c.length && r) {
            for(u = 0, l = c.length; u < l; u++) o = c[u], m.texImage2D(g.TEXTURE_2D, u, a, a, s, o);
            e.generateMipmaps = !1, t.__maxMipLevel = c.length - 1
          } else m.texImage2D(g.TEXTURE_2D, 0, a, a, s, n), t.__maxMipLevel = 0;
          N(e, r) && D(g.TEXTURE_2D, e, n.width, n.height);
          t.__version = e.version, e.onUpdate && e.onUpdate(e)
        }(i, t, e)
      }
      m.activeTexture(g.TEXTURE0 + e), m.bindTexture(g.TEXTURE_2D, i.__webglTexture)
    }

    function L(t, e, i) {
      var n;
      if(i ? (g.texParameteri(t, g.TEXTURE_WRAP_S, y.convert(e.wrapS)), g.texParameteri(t, g.TEXTURE_WRAP_T, y.convert(e.wrapT)), g.texParameteri(t, g.TEXTURE_MAG_FILTER, y.convert(e.magFilter)), g.texParameteri(t, g.TEXTURE_MIN_FILTER, y.convert(e.minFilter))) : (g.texParameteri(t, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(t, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), e.wrapS !== ws || e.wrapT, g.texParameteri(t, g.TEXTURE_MAG_FILTER, a(e.magFilter)), g.texParameteri(t, g.TEXTURE_MIN_FILTER, a(e.minFilter)), e.minFilter !== Ds && e.minFilter), n = r.get("EXT_texture_filter_anisotropic")) {
        if(e.type === Ps && null === r.get("OES_texture_float_linear")) return;
        if(e.type === Us && null === r.get("OES_texture_half_float_linear")) return;
        (1 < e.anisotropy || M.get(e).__currentAnisotropy) && (g.texParameterf(t, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropy, v.getMaxAnisotropy())), M.get(e).__currentAnisotropy = e.anisotropy)
      }
    }

    function c(t, e, i, n) {
      var r = y.convert(e.texture.format),
        a = y.convert(e.texture.type);
      m.texImage2D(n, 0, r, e.width, e.height, 0, r, a, null), g.bindFramebuffer(g.FRAMEBUFFER, t), g.framebufferTexture2D(g.FRAMEBUFFER, i, n, M.get(e.texture).__webglTexture, 0), g.bindFramebuffer(g.FRAMEBUFFER, null)
    }

    function h(t, e) {
      g.bindRenderbuffer(g.RENDERBUFFER, t), e.depthBuffer && !e.stencilBuffer ? (g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_COMPONENT16, e.width, e.height), g.framebufferRenderbuffer(g.FRAMEBUFFER, g.DEPTH_ATTACHMENT, g.RENDERBUFFER, t)) : e.depthBuffer && e.stencilBuffer ? (g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_STENCIL, e.width, e.height), g.framebufferRenderbuffer(g.FRAMEBUFFER, g.DEPTH_STENCIL_ATTACHMENT, g.RENDERBUFFER, t)) : g.renderbufferStorage(g.RENDERBUFFER, g.RGBA4, e.width, e.height), g.bindRenderbuffer(g.RENDERBUFFER, null)
    }

    function u(t) {
      var e = M.get(t),
        i = !0 === t.isWebGLRenderTargetCube;
      if(t.depthTexture) {
        if(i) throw new Error("target.depthTexture not supported in Cube render targets");
        ! function(t, e) {
          if(e && e.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
          if(g.bindFramebuffer(g.FRAMEBUFFER, t), !e.depthTexture || !e.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          M.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0), o(e.depthTexture, 0);
          var i = M.get(e.depthTexture).__webglTexture;
          if(e.depthTexture.format === Hs) g.framebufferTexture2D(g.FRAMEBUFFER, g.DEPTH_ATTACHMENT, g.TEXTURE_2D, i, 0);
          else {
            if(e.depthTexture.format !== Xs) throw new Error("Unknown depthTexture format");
            g.framebufferTexture2D(g.FRAMEBUFFER, g.DEPTH_STENCIL_ATTACHMENT, g.TEXTURE_2D, i, 0)
          }
        }(e.__webglFramebuffer, t)
      } else if(i) {
        e.__webglDepthbuffer = [];
        for(var n = 0; n < 6; n++) g.bindFramebuffer(g.FRAMEBUFFER, e.__webglFramebuffer[n]), e.__webglDepthbuffer[n] = g.createRenderbuffer(), h(e.__webglDepthbuffer[n], t)
      } else g.bindFramebuffer(g.FRAMEBUFFER, e.__webglFramebuffer), e.__webglDepthbuffer = g.createRenderbuffer(), h(e.__webglDepthbuffer, t);
      g.bindFramebuffer(g.FRAMEBUFFER, null)
    }
    var d, p = "undefined" != typeof WebGL2RenderingContext && g instanceof WebGL2RenderingContext,
      l = {};
    this.setTexture2D = o, this.setTextureCube = function(t, e) {
      var i = M.get(t);
      if(6 === t.image.length)
        if(0 < t.version && i.__version !== t.version) {
          i.__image__webglTextureCube || (t.addEventListener("dispose", T), i.__image__webglTextureCube = g.createTexture(), A.memory.textures++), m.activeTexture(g.TEXTURE0 + e), m.bindTexture(g.TEXTURE_CUBE_MAP, i.__image__webglTextureCube), g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, t.flipY);
          for(var n = t && t.isCompressedTexture, r = t.image[0] && t.image[0].isDataTexture, a = [], s = 0; s < 6; s++) a[s] = n || r ? r ? t.image[s].image : t.image[s] : x(t.image[s], v.maxCubemapSize);
          var o = a[0],
            c = w(o),
            h = y.convert(t.format),
            u = y.convert(t.type);
          L(g.TEXTURE_CUBE_MAP, t, c);
          for(s = 0; s < 6; s++)
            if(n)
              for(var l, d = a[s].mipmaps, p = 0, f = d.length; p < f; p++) l = d[p], t.format !== Ys && t.format !== Gs ? -1 < m.getCompressedTextureFormats().indexOf(h) && m.compressedTexImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + s, p, h, l.width, l.height, 0, l.data) : m.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + s, p, h, l.width, l.height, 0, h, u, l.data);
            else r ? m.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, h, a[s].width, a[s].height, 0, h, u, a[s].data) : m.texImage2D(g.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, h, h, u, a[s]);
          i.__maxMipLevel = n ? d.length - 1 : 0, N(t, c) && D(g.TEXTURE_CUBE_MAP, t, o.width, o.height), i.__version = t.version, t.onUpdate && t.onUpdate(t)
        } else m.activeTexture(g.TEXTURE0 + e), m.bindTexture(g.TEXTURE_CUBE_MAP, i.__image__webglTextureCube)
    }, this.setTextureCubeDynamic = function(t, e) {
      m.activeTexture(g.TEXTURE0 + e), m.bindTexture(g.TEXTURE_CUBE_MAP, M.get(t).__webglTexture)
    }, this.setupRenderTarget = function(t) {
      var e = M.get(t),
        i = M.get(t.texture);
      t.addEventListener("dispose", s), i.__webglTexture = g.createTexture(), A.memory.textures++;
      var n = !0 === t.isWebGLRenderTargetCube,
        r = w(t);
      if(n) {
        e.__webglFramebuffer = [];
        for(var a = 0; a < 6; a++) e.__webglFramebuffer[a] = g.createFramebuffer()
      } else e.__webglFramebuffer = g.createFramebuffer();
      if(n) {
        m.bindTexture(g.TEXTURE_CUBE_MAP, i.__webglTexture), L(g.TEXTURE_CUBE_MAP, t.texture, r);
        for(a = 0; a < 6; a++) c(e.__webglFramebuffer[a], t, g.COLOR_ATTACHMENT0, g.TEXTURE_CUBE_MAP_POSITIVE_X + a);
        N(t.texture, r) && D(g.TEXTURE_CUBE_MAP, t.texture, t.width, t.height), m.bindTexture(g.TEXTURE_CUBE_MAP, null)
      } else m.bindTexture(g.TEXTURE_2D, i.__webglTexture), L(g.TEXTURE_2D, t.texture, r), c(e.__webglFramebuffer, t, g.COLOR_ATTACHMENT0, g.TEXTURE_2D), N(t.texture, r) && D(g.TEXTURE_2D, t.texture, t.width, t.height), m.bindTexture(g.TEXTURE_2D, null);
      t.depthBuffer && u(t)
    }, this.updateRenderTargetMipmap = function(t) {
      var e = t.texture;
      if(N(e, w(t))) {
        var i = t.isWebGLRenderTargetCube ? g.TEXTURE_CUBE_MAP : g.TEXTURE_2D,
          n = M.get(e).__webglTexture;
        m.bindTexture(i, n), D(i, e, t.width, t.height), m.bindTexture(i, null)
      }
    }
  }

  function ve(i, n) {
    return {
      convert: function(t) {
        var e;
        if(t === xs) return i.REPEAT;
        if(t === ws) return i.CLAMP_TO_EDGE;
        if(t === Ns) return i.MIRRORED_REPEAT;
        if(t === Ds) return i.NEAREST;
        if(t === Ts) return i.NEAREST_MIPMAP_NEAREST;
        if(t === Ls) return i.NEAREST_MIPMAP_LINEAR;
        if(t === Es) return i.LINEAR;
        if(t === Is) return i.LINEAR_MIPMAP_NEAREST;
        if(t === _s) return i.LINEAR_MIPMAP_LINEAR;
        if(t === bs) return i.UNSIGNED_BYTE;
        if(t === Bs) return i.UNSIGNED_SHORT_4_4_4_4;
        if(t === ks) return i.UNSIGNED_SHORT_5_5_5_1;
        if(t === Rs) return i.UNSIGNED_SHORT_5_6_5;
        if(t === Ss) return i.BYTE;
        if(t === js) return i.SHORT;
        if(t === Cs) return i.UNSIGNED_SHORT;
        if(t === Os) return i.INT;
        if(t === zs) return i.UNSIGNED_INT;
        if(t === Ps) return i.FLOAT;
        if(t === Us && null !== (e = n.get("OES_texture_half_float"))) return e.HALF_FLOAT_OES;
        if(t === Qs) return i.ALPHA;
        if(t === Gs) return i.RGB;
        if(t === Ys) return i.RGBA;
        if(t === Vs) return i.LUMINANCE;
        if(t === Ws) return i.LUMINANCE_ALPHA;
        if(t === Hs) return i.DEPTH_COMPONENT;
        if(t === Xs) return i.DEPTH_STENCIL;
        if(t === Pa) return i.FUNC_ADD;
        if(t === Ua) return i.FUNC_SUBTRACT;
        if(t === Ba) return i.FUNC_REVERSE_SUBTRACT;
        if(t === Fa) return i.ZERO;
        if(t === Qa) return i.ONE;
        if(t === Ga) return i.SRC_COLOR;
        if(t === Ya) return i.ONE_MINUS_SRC_COLOR;
        if(t === Va) return i.SRC_ALPHA;
        if(t === Wa) return i.ONE_MINUS_SRC_ALPHA;
        if(t === Ha) return i.DST_ALPHA;
        if(t === Xa) return i.ONE_MINUS_DST_ALPHA;
        if(t === Za) return i.DST_COLOR;
        if(t === qa) return i.ONE_MINUS_DST_COLOR;
        if(t === Ja) return i.SRC_ALPHA_SATURATE;
        if((t === Zs || t === qs || t === Js || t === Ks) && null !== (e = n.get("WEBGL_compressed_texture_s3tc"))) {
          if(t === Zs) return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if(t === qs) return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if(t === Js) return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if(t === Ks) return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if((t === $s || t === to || t === eo || t === io) && null !== (e = n.get("WEBGL_compressed_texture_pvrtc"))) {
          if(t === $s) return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if(t === to) return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if(t === eo) return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if(t === io) return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if(t === no && null !== (e = n.get("WEBGL_compressed_texture_etc1"))) return e.COMPRESSED_RGB_ETC1_WEBGL;
        if((t === ro || t === ao || t === so || t === oo || t === co || t === ho || t === uo || t === lo || t === po || t === fo || t === go || t === mo || t === Mo || t === vo) && null !== (e = n.get("WEBGL_compressed_texture_astc"))) return t;
        if((t === ka || t === Ra) && null !== (e = n.get("EXT_blend_minmax"))) {
          if(t === ka) return e.MIN_EXT;
          if(t === Ra) return e.MAX_EXT
        }
        return t === Fs && null !== (e = n.get("WEBGL_depth_texture")) ? e.UNSIGNED_INT_24_8_WEBGL : 0
      }
    }
  }

  function ye(t, e, i, n) {
    o.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
  }

  function Ae(t) {
    ye.call(this), this.cameras = t || []
  }

  function xe(n) {
    function r() {
      return null !== c && !0 === c.isPresenting
    }

    function t() {
      if(r()) {
        var t = c.getEyeParameters("left"),
          e = t.renderWidth,
          i = t.renderHeight;
        s = n.getPixelRatio(), a = n.getSize(), n.setDrawingBufferSize(2 * e, i, 1), y.start()
      } else o.enabled && (n.setDrawingBufferSize(a.width, a.height, s), y.stop())
    }
    var o = this,
      c = null,
      h = null,
      u = null,
      l = new At,
      d = new At;
    "undefined" != typeof window && "VRFrameData" in window && (h = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", t, !1));
    var p = new At,
      f = new W,
      g = new wt,
      m = new ye;
    m.bounds = new Nt(0, 0, .5, 1), m.layers.enable(1);
    var M = new ye;
    M.bounds = new Nt(.5, 0, .5, 1), M.layers.enable(2);
    var a, s, v = new Ae([m, M]);
    v.layers.enable(1), v.layers.enable(2), this.enabled = !1, this.userHeight = 1.6, this.getDevice = function() {
      return c
    }, this.setDevice = function(t) {
      void 0 !== t && (c = t), y.setContext(t)
    }, this.setPoseTarget = function(t) {
      void 0 !== t && (u = t)
    }, this.getCamera = function(t) {
      if(null === c) return t;
      c.depthNear = t.near, c.depthFar = t.far, c.getFrameData(h);
      var e = c.stageParameters;
      e ? l.fromArray(e.sittingToStandingTransform) : l.makeTranslation(0, o.userHeight, 0);
      var i = h.pose,
        n = null !== u ? u : t;
      if(n.matrix.copy(l), n.matrix.decompose(n.position, n.quaternion, n.scale), null !== i.orientation && (f.fromArray(i.orientation), n.quaternion.multiply(f)), null !== i.position && (f.setFromRotationMatrix(l), g.fromArray(i.position), g.applyQuaternion(f), n.position.add(g)), n.updateMatrixWorld(), !1 === c.isPresenting) return t;
      m.near = t.near, M.near = t.near, m.far = t.far, M.far = t.far, v.matrixWorld.copy(t.matrixWorld), v.matrixWorldInverse.copy(t.matrixWorldInverse), m.matrixWorldInverse.fromArray(h.leftViewMatrix), M.matrixWorldInverse.fromArray(h.rightViewMatrix), d.getInverse(l), m.matrixWorldInverse.multiply(d), M.matrixWorldInverse.multiply(d);
      var r = n.parent;
      null !== r && (p.getInverse(r.matrixWorld), m.matrixWorldInverse.multiply(p), M.matrixWorldInverse.multiply(p)), m.matrixWorld.getInverse(m.matrixWorldInverse), M.matrixWorld.getInverse(M.matrixWorldInverse), m.projectionMatrix.fromArray(h.leftProjectionMatrix), M.projectionMatrix.fromArray(h.rightProjectionMatrix), v.projectionMatrix.copy(m.projectionMatrix);
      var a = c.getLayers();
      if(a.length) {
        var s = a[0];
        null !== s.leftBounds && 4 === s.leftBounds.length && m.bounds.fromArray(s.leftBounds), null !== s.rightBounds && 4 === s.rightBounds.length && M.bounds.fromArray(s.rightBounds)
      }
      return v
    }, this.getStandingMatrix = function() {
      return l
    }, this.isPresenting = r;
    var y = new Lt;
    this.setAnimationLoop = function(t) {
      y.setAnimationLoop(t)
    }, this.submitFrame = function() {
      r() && c.submitFrame()
    }, this.dispose = function() {
      "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", t)
    }
  }

  function we(i) {
    function s() {
      return null !== h && null !== u
    }

    function o(t, e) {
      null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
    }
    var n = i.context,
      e = null,
      h = null,
      u = null,
      l = null,
      t = new ye;
    t.layers.enable(1), t.viewport = new Nt;
    var r = new ye;
    r.layers.enable(2), r.viewport = new Nt;
    var d = new Ae([t, r]);
    d.layers.enable(1), d.layers.enable(2), this.enabled = !1, this.getDevice = function() {
      return e
    }, this.setDevice = function(t) {
      void 0 !== t && (e = t), n.setCompatibleXRDevice(t)
    }, this.setSession = function(t, e) {
      null !== (h = t) && (h.addEventListener("end", function() {
        i.setFramebuffer(null), a.stop()
      }), h.baseLayer = new XRWebGLLayer(h, n), h.requestFrameOfReference(e.frameOfReferenceType).then(function(t) {
        u = t, i.setFramebuffer(h.baseLayer.framebuffer), a.setContext(h), a.start()
      }))
    }, this.getCamera = function(t) {
      if(s()) {
        var e = t.parent,
          i = d.cameras;
        o(d, e);
        for(var n = 0; n < i.length; n++) o(i[n], e);
        t.matrixWorld.copy(d.matrixWorld);
        for(var r = t.children, a = (n = 0, r.length); n < a; n++) r[n].updateMatrixWorld(!0);
        return d
      }
      return t
    }, this.isPresenting = s;
    var p = null,
      a = new Lt;
    a.setAnimationLoop(function(t, e) {
      l = e.getDevicePose(u);
      for(var i = h.baseLayer, n = e.views, r = 0; r < n.length; r++) {
        var a = n[r],
          s = i.getViewport(a),
          o = l.getViewMatrix(a),
          c = d.cameras[r];
        c.matrix.fromArray(o).getInverse(c.matrix), c.projectionMatrix.fromArray(a.projectionMatrix), c.viewport.set(s.x, s.y, s.width, s.height), 0 === r && (d.matrix.copy(c.matrix), d.projectionMatrix.copy(c.projectionMatrix))
      }
      p && p()
    }), this.setAnimationLoop = function(t) {
      p = t
    }, this.getStandingMatrix = function() {
      return new THREE.Matrix4
    }, this.submitFrame = function() {}
  }

  function Ne(t) {
    function D() {
      return null === H ? at : 1
    }

    function e() {
      (I = new jt(E)).get("WEBGL_depth_texture"), I.get("OES_texture_float"), I.get("OES_texture_float_linear"), I.get("OES_texture_half_float"), I.get("OES_texture_half_float_linear"), I.get("OES_standard_derivatives"), I.get("OES_element_index_uint"), I.get("ANGLE_instanced_arrays"), G = new ve(E, I), _ = new bt(E, I, t), (b = new me(E, I, G)).scissor(tt.copy(ot).multiplyScalar(at)), b.viewport($.copy(st).multiplyScalar(at)), g = new zt(E), S = new ie, v = new Me(E, I, b, S, _, G, g), j = new Et(E), C = new Ct(E, j, g), O = new Ut(C, g), k = new Pt(E), z = new ee(Y, I, _), P = new se, U = new ue, B = new It(Y, b, O, l), R = new _t(E, I, g), F = new Ot(E, I, g), Q = new ge(Y, E, b, v, _), g.programs = z.programs, Y.context = E, Y.capabilities = _, Y.extensions = I, Y.properties = S, Y.renderLists = P, Y.state = b, Y.info = g
    }

    function i(t) {
      t.preventDefault(), V = !0
    }

    function n() {
      V = !1, e()
    }

    function m(t) {
      var e = t.target;
      e.removeEventListener("dispose", m),
        function(t) {
          M(t), S.remove(t)
        }(e)
    }

    function M(t) {
      var e = S.get(t).program;
      (t.program = void 0) !== e && z.releaseProgram(e)
    }

    function h(t, e, i, n) {
      for(var r = 0, a = t.length; r < a; r++) {
        var s = t[r],
          o = s.object,
          c = s.geometry,
          h = void 0 === n ? s.material : n,
          u = s.group;
        if(i.isArrayCamera)
          for(var l = (K = i).cameras, d = 0, p = l.length; d < p; d++) {
            var f = l[d];
            if(o.layers.test(f.layers)) {
              if("viewport" in f) b.viewport($.copy(f.viewport));
              else {
                var g = f.bounds,
                  m = g.x * nt,
                  M = g.y * rt,
                  v = g.z * nt,
                  y = g.w * rt;
                b.viewport($.set(m, M, v, y).multiplyScalar(at))
              }
              A(o, e, f, c, h, u)
            }
          } else K = null, A(o, e, i, c, h, u)
      }
    }

    function A(t, e, i, n, r, a) {
      if(t.onBeforeRender(Y, e, i, n, r, a), L = U.get(e, K || i), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        var s = t.isMesh && t.matrixWorld.determinant() < 0;
        b.setMaterial(r, s);
        var o = T(i, e.fog, r, t);
        q = "",
          function(t, e, i) {
            t.render(function(t) {
              Y.renderBufferImmediate(t, e, i)
            })
          }(t, o, r)
      } else Y.renderBufferDirect(i, e.fog, n, r, t, a);
      t.onAfterRender(Y, e, i, n, r, a), L = U.get(e, K || i)
    }

    function y(t, e, i) {
      var n = S.get(t),
        r = L.state.lights,
        a = L.state.shadowsArray,
        s = z.getParameters(t, r.state, a, e, ut.numPlanes, ut.numIntersection, i),
        o = z.getProgramCode(t, s),
        c = n.program,
        h = !0;
      if(void 0 === c) t.addEventListener("dispose", m);
      else if(c.code !== o) M(t);
      else if(n.lightsHash !== r.state.hash) S.update(t, "lightsHash", r.state.hash), h = !1;
      else {
        if(void 0 !== s.shaderID) return;
        h = !1
      }
      if(h) {
        if(s.shaderID) {
          var u = yc[s.shaderID];
          n.shader = {
            name: t.type,
            uniforms: pc.clone(u.uniforms),
            vertexShader: u.vertexShader,
            fragmentShader: u.fragmentShader
          }
        } else n.shader = {
          name: t.type,
          uniforms: t.uniforms,
          vertexShader: t.vertexShader,
          fragmentShader: t.fragmentShader
        };
        t.onBeforeCompile(n.shader, Y), c = z.acquireProgram(t, n.shader, s, o), n.program = c, t.program = c
      }
      var l = c.getAttributes();
      if(t.morphTargets)
        for(var d = t.numSupportedMorphTargets = 0; d < Y.maxMorphTargets; d++) 0 <= l["morphTarget" + d] && t.numSupportedMorphTargets++;
      if(t.morphNormals)
        for(d = t.numSupportedMorphNormals = 0; d < Y.maxMorphNormals; d++) 0 <= l["morphNormal" + d] && t.numSupportedMorphNormals++;
      var p = n.shader.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = ut.numPlanes, n.numIntersection = ut.numIntersection, p.clippingPlanes = ut.uniform), n.fog = e, n.lightsHash = r.state.hash, t.lights && (p.ambientLightColor.value = r.state.ambient, p.directionalLights.value = r.state.directional, p.spotLights.value = r.state.spot, p.rectAreaLights.value = r.state.rectArea, p.pointLights.value = r.state.point, p.hemisphereLights.value = r.state.hemi, p.directionalShadowMap.value = r.state.directionalShadowMap, p.directionalShadowMatrix.value = r.state.directionalShadowMatrix, p.spotShadowMap.value = r.state.spotShadowMap, p.spotShadowMatrix.value = r.state.spotShadowMatrix, p.pointShadowMap.value = r.state.pointShadowMap, p.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var f = n.program.getUniforms(),
        g = Vt.seqWithValue(f.seq, p);
      n.uniformsList = g
    }

    function T(t, e, i, n) {
      it = 0;
      var r = S.get(i),
        a = L.state.lights;
      if(lt && (dt || t !== J)) {
        var s = t === J && i.id === Z;
        ut.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, s)
      }!1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : i.lights && r.lightsHash !== a.state.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === ut.numPlanes && r.numIntersection === ut.numIntersection || (i.needsUpdate = !0)), i.needsUpdate && (y(i, e, n), i.needsUpdate = !1);
      var o = !1,
        c = !1,
        h = !1,
        u = r.program,
        l = u.getUniforms(),
        d = r.shader.uniforms;
      if(b.useProgram(u.program) && (h = c = o = !0), i.id !== Z && (Z = i.id, c = !0), o || t !== J) {
        if(l.setValue(E, "projectionMatrix", t.projectionMatrix), _.logarithmicDepthBuffer && l.setValue(E, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), J !== (K || t) && (J = K || t, h = c = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
          var p = l.map.cameraPosition;
          void 0 !== p && p.setValue(E, ft.setFromMatrixPosition(t.matrixWorld))
        }(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && l.setValue(E, "viewMatrix", t.matrixWorldInverse)
      }
      if(i.skinning) {
        l.setOptional(E, n, "bindMatrix"), l.setOptional(E, n, "bindMatrixInverse");
        var f = n.skeleton;
        if(f) {
          var g = f.bones;
          if(_.floatVertexTextures) {
            if(void 0 === f.boneTexture) {
              var m = Math.sqrt(4 * g.length);
              m = So.ceilPowerOfTwo(m), m = Math.max(m, 4);
              var M = new Float32Array(m * m * 4);
              M.set(f.boneMatrices);
              var v = new Dt(M, m, m, Ys, Ps);
              v.needsUpdate = !0, f.boneMatrices = M, f.boneTexture = v, f.boneTextureSize = m
            }
            l.setValue(E, "boneTexture", f.boneTexture), l.setValue(E, "boneTextureSize", f.boneTextureSize)
          } else l.setOptional(E, f, "boneMatrices")
        }
      }
      return c && (l.setValue(E, "toneMappingExposure", Y.toneMappingExposure), l.setValue(E, "toneMappingWhitePoint", Y.toneMappingWhitePoint), i.lights && function(t, e) {
        t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
      }(d, h), e && i.fog && function(t, e) {
        t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
      }(d, e), i.isMeshBasicMaterial ? x(d, i) : i.isMeshLambertMaterial ? (x(d, i), function(t, e) {
        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
      }(d, i)) : i.isMeshPhongMaterial ? (x(d, i), i.isMeshToonMaterial ? function(t, e) {
        w(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
      }(d, i) : w(d, i)) : i.isMeshStandardMaterial ? (x(d, i), i.isMeshPhysicalMaterial ? function(t, e) {
        t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, N(t, e)
      }(d, i) : N(d, i)) : i.isMeshDepthMaterial ? (x(d, i), function(t, e) {
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(d, i)) : i.isMeshDistanceMaterial ? (x(d, i), function(t, e) {
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
      }(d, i)) : i.isMeshNormalMaterial ? (x(d, i), function(t, e) {
        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === Ea && (t.bumpScale.value *= -1));
        e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === Ea && t.normalScale.value.negate());
        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
      }(d, i)) : i.isLineBasicMaterial ? (function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity
      }(d, i), i.isLineDashedMaterial && function(t, e) {
        t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
      }(d, i)) : i.isPointsMaterial ? function(t, e) {
        t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * at, t.scale.value = .5 * rt, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
      }(d, i) : i.isShadowMaterial && (d.color.value = i.color, d.opacity.value = i.opacity), void 0 !== d.ltc_1 && (d.ltc_1.value = vc.LTC_1), void 0 !== d.ltc_2 && (d.ltc_2.value = vc.LTC_2), Vt.upload(E, r.uniformsList, d, Y)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Vt.upload(E, r.uniformsList, d, Y), i.uniformsNeedUpdate = !1), l.setValue(E, "modelViewMatrix", n.modelViewMatrix), l.setValue(E, "normalMatrix", n.normalMatrix), l.setValue(E, "modelMatrix", n.matrixWorld), u
    }

    function x(t, e) {
      var i;
      t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = S.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
    }

    function w(t, e) {
      t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === Ea && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === Ea && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
    }

    function N(t, e) {
      t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === Ea && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === Ea && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
    }
    var r = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      a = void 0 !== t.context ? t.context : null,
      s = void 0 !== t.alpha && t.alpha,
      o = void 0 === t.depth || t.depth,
      c = void 0 === t.stencil || t.stencil,
      u = void 0 !== t.antialias && t.antialias,
      l = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      d = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      p = void 0 !== t.powerPreference ? t.powerPreference : "default",
      f = null,
      L = null;
    this.domElement = r, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = us, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
    var E, I, _, b, g, S, v, j, C, O, z, P, U, B, k, R, F, Q, G, Y = this,
      V = !1,
      W = null,
      H = null,
      X = null,
      Z = -1,
      q = "",
      J = null,
      K = null,
      $ = new Nt,
      tt = new Nt,
      et = null,
      it = 0,
      nt = r.width,
      rt = r.height,
      at = 1,
      st = new Nt(0, 0, nt, rt),
      ot = new Nt(0, 0, nt, rt),
      ct = !1,
      ht = new Tt,
      ut = new St,
      lt = !1,
      dt = !1,
      pt = new At,
      ft = new wt;
    try {
      var gt = {
        alpha: s,
        depth: o,
        stencil: c,
        antialias: u,
        premultipliedAlpha: l,
        preserveDrawingBuffer: d,
        powerPreference: p
      };
      if(r.addEventListener("webglcontextlost", i, !1), r.addEventListener("webglcontextrestored", n, !1), null === (E = a || r.getContext("webgl", gt) || r.getContext("experimental-webgl", gt))) throw null !== r.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      void 0 === E.getShaderPrecisionFormat && (E.getShaderPrecisionFormat = function() {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        }
      })
    } catch (t) {}
    e();
    var mt = "xr" in navigator ? new we(Y) : new xe(Y);
    this.vr = mt;
    var Mt = new pe(Y, O, _.maxTextureSize);
    this.shadowMap = Mt, this.getContext = function() {
      return E
    }, this.getContextAttributes = function() {
      return E.getContextAttributes()
    }, this.forceContextLoss = function() {
      var t = I.get("WEBGL_lose_context");
      t && t.loseContext()
    }, this.forceContextRestore = function() {
      var t = I.get("WEBGL_lose_context");
      t && t.restoreContext()
    }, this.getPixelRatio = function() {
      return at
    }, this.setPixelRatio = function(t) {
      void 0 !== t && (at = t, this.setSize(nt, rt, !1))
    }, this.getSize = function() {
      return {
        width: nt,
        height: rt
      }
    }, this.setSize = function(t, e, i) {
      mt.isPresenting() || (nt = t, rt = e, r.width = t * at, r.height = e * at, !1 !== i && (r.style.width = t + "px", r.style.height = e + "px"), this.setViewport(0, 0, t, e))
    }, this.getDrawingBufferSize = function() {
      return {
        width: nt * at,
        height: rt * at
      }
    }, this.setDrawingBufferSize = function(t, e, i) {
      nt = t, rt = e, at = i, r.width = t * i, r.height = e * i, this.setViewport(0, 0, t, e)
    }, this.getCurrentViewport = function() {
      return $
    }, this.setViewport = function(t, e, i, n) {
      st.set(t, rt - e - n, i, n), b.viewport($.copy(st).multiplyScalar(at))
    }, this.setScissor = function(t, e, i, n) {
      ot.set(t, rt - e - n, i, n), b.scissor(tt.copy(ot).multiplyScalar(at))
    }, this.setScissorTest = function(t) {
      b.setScissorTest(ct = t)
    }, this.getClearColor = function() {
      return B.getClearColor()
    }, this.setClearColor = function() {
      B.setClearColor.apply(B, arguments)
    }, this.getClearAlpha = function() {
      return B.getClearAlpha()
    }, this.setClearAlpha = function() {
      B.setClearAlpha.apply(B, arguments)
    }, this.clear = function(t, e, i) {
      var n = 0;
      void 0 !== t && !t || (n |= E.COLOR_BUFFER_BIT), void 0 !== e && !e || (n |= E.DEPTH_BUFFER_BIT), void 0 !== i && !i || (n |= E.STENCIL_BUFFER_BIT), E.clear(n)
    }, this.clearColor = function() {
      this.clear(!0, !1, !1)
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1)
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0)
    }, this.clearTarget = function(t, e, i, n) {
      this.setRenderTarget(t), this.clear(e, i, n)
    }, this.dispose = function() {
      r.removeEventListener("webglcontextlost", i, !1), r.removeEventListener("webglcontextrestored", n, !1), P.dispose(), U.dispose(), S.dispose(), O.dispose(), mt.dispose(), yt.stop()
    }, this.renderBufferImmediate = function(t, e, i) {
      b.initAttributes();
      var n = S.get(t);
      t.hasPositions && !n.position && (n.position = E.createBuffer()), t.hasNormals && !n.normal && (n.normal = E.createBuffer()), t.hasUvs && !n.uv && (n.uv = E.createBuffer()), t.hasColors && !n.color && (n.color = E.createBuffer());
      var r = e.getAttributes();
      if(t.hasPositions && (E.bindBuffer(E.ARRAY_BUFFER, n.position), E.bufferData(E.ARRAY_BUFFER, t.positionArray, E.DYNAMIC_DRAW), b.enableAttribute(r.position), E.vertexAttribPointer(r.position, 3, E.FLOAT, !1, 0, 0)), t.hasNormals) {
        if(E.bindBuffer(E.ARRAY_BUFFER, n.normal), !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && !0 === i.flatShading)
          for(var a = 0, s = 3 * t.count; a < s; a += 9) {
            var o = t.normalArray,
              c = (o[a + 0] + o[a + 3] + o[a + 6]) / 3,
              h = (o[a + 1] + o[a + 4] + o[a + 7]) / 3,
              u = (o[a + 2] + o[a + 5] + o[a + 8]) / 3;
            o[a + 0] = c, o[a + 1] = h, o[a + 2] = u, o[a + 3] = c, o[a + 4] = h, o[a + 5] = u, o[a + 6] = c, o[a + 7] = h, o[a + 8] = u
          }
        E.bufferData(E.ARRAY_BUFFER, t.normalArray, E.DYNAMIC_DRAW), b.enableAttribute(r.normal), E.vertexAttribPointer(r.normal, 3, E.FLOAT, !1, 0, 0)
      }
      t.hasUvs && i.map && (E.bindBuffer(E.ARRAY_BUFFER, n.uv), E.bufferData(E.ARRAY_BUFFER, t.uvArray, E.DYNAMIC_DRAW), b.enableAttribute(r.uv), E.vertexAttribPointer(r.uv, 2, E.FLOAT, !1, 0, 0)), t.hasColors && i.vertexColors !== _a && (E.bindBuffer(E.ARRAY_BUFFER, n.color), E.bufferData(E.ARRAY_BUFFER, t.colorArray, E.DYNAMIC_DRAW), b.enableAttribute(r.color), E.vertexAttribPointer(r.color, 3, E.FLOAT, !1, 0, 0)), b.disableUnusedAttributes(), E.drawArrays(E.TRIANGLES, 0, t.count), t.count = 0
    }, this.renderBufferDirect = function(t, e, i, n, r, a) {
      var s = r.isMesh && r.matrixWorld.determinant() < 0;
      b.setMaterial(n, s);
      var o = T(t, e, n, r),
        c = i.id + "_" + o.id + "_" + (!0 === n.wireframe),
        h = !1;
      c !== q && (q = c, h = !0), r.morphTargetInfluences && (k.update(r, i, n, o), h = !0);
      var u, l = i.index,
        d = i.attributes.position,
        p = 1;
      !0 === n.wireframe && (l = C.getWireframeAttribute(i), p = 2);
      var f = R;
      null !== l && (u = j.get(l), (f = F).setIndex(u)), h && (function(t, e, i) {
        if(!i || !i.isInstancedBufferGeometry || null !== I.get("ANGLE_instanced_arrays")) {
          b.initAttributes();
          var n = i.attributes,
            r = e.getAttributes(),
            a = t.defaultAttributeValues;
          for(var s in r) {
            var o = r[s];
            if(0 <= o) {
              var c = n[s];
              if(void 0 !== c) {
                var h = c.normalized,
                  u = c.itemSize,
                  l = j.get(c);
                if(void 0 === l) continue;
                var d = l.buffer,
                  p = l.type,
                  f = l.bytesPerElement;
                if(c.isInterleavedBufferAttribute) {
                  var g = c.data,
                    m = g.stride,
                    M = c.offset;
                  g && g.isInstancedInterleavedBuffer ? (b.enableAttributeAndDivisor(o, g.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = g.meshPerAttribute * g.count)) : b.enableAttribute(o), E.bindBuffer(E.ARRAY_BUFFER, d), E.vertexAttribPointer(o, u, p, h, m * f, M * f)
                } else c.isInstancedBufferAttribute ? (b.enableAttributeAndDivisor(o, c.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = c.meshPerAttribute * c.count)) : b.enableAttribute(o), E.bindBuffer(E.ARRAY_BUFFER, d), E.vertexAttribPointer(o, u, p, h, 0, 0)
              } else if(void 0 !== a) {
                var v = a[s];
                if(void 0 !== v) switch(v.length) {
                  case 2:
                    E.vertexAttrib2fv(o, v);
                    break;
                  case 3:
                    E.vertexAttrib3fv(o, v);
                    break;
                  case 4:
                    E.vertexAttrib4fv(o, v);
                    break;
                  default:
                    E.vertexAttrib1fv(o, v)
                }
              }
            }
          }
          b.disableUnusedAttributes()
        }
      }(n, o, i), null !== l && E.bindBuffer(E.ELEMENT_ARRAY_BUFFER, u.buffer));
      var g = 1 / 0;
      null !== l ? g = l.count : void 0 !== d && (g = d.count);
      var m = i.drawRange.start * p,
        M = i.drawRange.count * p,
        v = null !== a ? a.start * p : 0,
        y = null !== a ? a.count * p : 1 / 0,
        A = Math.max(m, v),
        x = Math.min(g, m + M, v + y) - 1,
        w = Math.max(0, x - A + 1);
      if(0 !== w) {
        if(r.isMesh)
          if(!0 === n.wireframe) b.setLineWidth(n.wireframeLinewidth * D()), f.setMode(E.LINES);
          else switch(r.drawMode) {
            case xo:
              f.setMode(E.TRIANGLES);
              break;
            case 1:
              f.setMode(E.TRIANGLE_STRIP);
              break;
            case 2:
              f.setMode(E.TRIANGLE_FAN)
          } else if(r.isLine) {
            var N = n.linewidth;
            void 0 === N && (N = 1), b.setLineWidth(N * D()), r.isLineSegments ? f.setMode(E.LINES) : r.isLineLoop ? f.setMode(E.LINE_LOOP) : f.setMode(E.LINE_STRIP)
          } else r.isPoints && f.setMode(E.POINTS);
        i && i.isInstancedBufferGeometry ? 0 < i.maxInstancedCount && f.renderInstances(i, A, w) : f.render(A, w)
      }
    }, this.compile = function(i, t) {
      (L = U.get(i, t)).init(), i.traverse(function(t) {
        t.isLight && (L.pushLight(t), t.castShadow && L.pushShadow(t))
      }), L.setupLights(t), i.traverse(function(t) {
        if(t.material)
          if(Array.isArray(t.material))
            for(var e = 0; e < t.material.length; e++) y(t.material[e], i.fog, t);
          else y(t.material, i.fog, t)
      })
    };
    var vt = null,
      yt = new Lt;
    yt.setAnimationLoop(function() {
      mt.isPresenting() || vt && vt()
    }), yt.setContext(window), this.setAnimationLoop = function(t) {
      vt = t, mt.setAnimationLoop(t), yt.start()
    }, this.render = function(t, e, i, n) {
      if(e && e.isCamera && !V) {
        q = "", Z = -1, !(J = null) === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), mt.enabled && (e = mt.getCamera(e)), (L = U.get(t, e)).init(), t.onBeforeRender(Y, t, e, i), pt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), ht.setFromMatrix(pt), dt = this.localClippingEnabled, lt = ut.init(this.clippingPlanes, dt, e), (f = P.get(t, e)).init(),
          function t(e, i, n) {
            if(!1 !== e.visible) {
              if(e.layers.test(i.layers))
                if(e.isLight) L.pushLight(e), e.castShadow && L.pushShadow(e);
                else if(e.isSprite) e.frustumCulled && !ht.intersectsSprite(e) || L.pushSprite(e);
              else if(e.isImmediateRenderObject) n && ft.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pt), f.push(e, null, e.material, ft.z, null);
              else if((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || ht.intersectsObject(e))) {
                n && ft.setFromMatrixPosition(e.matrixWorld).applyMatrix4(pt);
                var r = O.update(e),
                  a = e.material;
                if(Array.isArray(a))
                  for(var s = r.groups, o = 0, c = s.length; o < c; o++) {
                    var h = s[o],
                      u = a[h.materialIndex];
                    u && u.visible && f.push(e, r, u, ft.z, h)
                  } else a.visible && f.push(e, r, a, ft.z, null)
              }
              var l = e.children;
              for(o = 0, c = l.length; o < c; o++) t(l[o], i, n)
            }
          }(t, e, Y.sortObjects), !0 === Y.sortObjects && f.sort(), lt && ut.beginShadows();
        var r = L.state.shadowsArray;
        Mt.render(r, t, e), L.setupLights(e), lt && ut.endShadows(), this.info.autoReset && this.info.reset(), void 0 === i && (i = null), this.setRenderTarget(i), B.render(f, t, e, n);
        var a = f.opaque,
          s = f.transparent;
        if(t.overrideMaterial) {
          var o = t.overrideMaterial;
          a.length && h(a, t, e, o), s.length && h(s, t, e, o)
        } else a.length && h(a, t, e), s.length && h(s, t, e);
        var c = L.state.spritesArray;
        Q.render(c, t, e), i && v.updateRenderTargetMipmap(i), b.buffers.depth.setTest(!0), b.buffers.depth.setMask(!0), b.buffers.color.setMask(!0), b.setPolygonOffset(!1), t.onAfterRender(Y, t, e), mt.enabled && mt.submitFrame(), L = f = null
      }
    }, this.allocTextureUnit = function() {
      var t = it;
      return _.maxTextures, it += 1, t
    }, this.setTexture2D = function(t, e) {
      t && t.isWebGLRenderTarget && (t = t.texture), v.setTexture2D(t, e)
    }, this.setTexture = function(t, e) {
      v.setTexture2D(t, e)
    }, this.setTextureCube = function(t, e) {
      t && t.isWebGLRenderTargetCube && (t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? v.setTextureCube(t, e) : v.setTextureCubeDynamic(t, e)
    }, this.setFramebuffer = function(t) {
      W = t
    }, this.getRenderTarget = function() {
      return H
    }, this.setRenderTarget = function(t) {
      (H = t) && void 0 === S.get(t).__webglFramebuffer && v.setupRenderTarget(t);
      var e = W,
        i = !1;
      if(t) {
        var n = S.get(t).__webglFramebuffer;
        t.isWebGLRenderTargetCube ? (e = n[t.activeCubeFace], i = !0) : e = n, $.copy(t.viewport), tt.copy(t.scissor), et = t.scissorTest
      } else $.copy(st).multiplyScalar(at), tt.copy(ot).multiplyScalar(at), et = ct;
      if(X !== e && (E.bindFramebuffer(E.FRAMEBUFFER, e), X = e), b.viewport($), b.scissor(tt), b.setScissorTest(et), i) {
        var r = S.get(t.texture);
        E.framebufferTexture2D(E.FRAMEBUFFER, E.COLOR_ATTACHMENT0, E.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
      }
    }, this.readRenderTargetPixels = function(t, e, i, n, r, a) {
      if(t && t.isWebGLRenderTarget) {
        var s = S.get(t).__webglFramebuffer;
        if(s) {
          var o = !1;
          s !== X && (E.bindFramebuffer(E.FRAMEBUFFER, s), o = !0);
          try {
            var c = t.texture,
              h = c.format,
              u = c.type;
            if(h !== Ys && G.convert(h) !== E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)) return;
            if(!(u === bs || G.convert(u) === E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE) || u === Ps && (I.get("OES_texture_float") || I.get("WEBGL_color_buffer_float")) || u === Us && I.get("EXT_color_buffer_half_float"))) return;
            E.checkFramebufferStatus(E.FRAMEBUFFER) === E.FRAMEBUFFER_COMPLETE && 0 <= e && e <= t.width - n && 0 <= i && i <= t.height - r && E.readPixels(e, i, n, r, G.convert(h), G.convert(u), a)
          } finally {
            o && E.bindFramebuffer(E.FRAMEBUFFER, X)
          }
        }
      }
    }, this.copyFramebufferToTexture = function(t, e, i) {
      var n = e.image.width,
        r = e.image.height,
        a = G.convert(e.format);
      this.setTexture2D(e, 0), E.copyTexImage2D(E.TEXTURE_2D, i || 0, a, t.x, t.y, n, r, 0)
    }, this.copyTextureToTexture = function(t, e, i, n) {
      var r = e.image.width,
        a = e.image.height,
        s = G.convert(i.format),
        o = G.convert(i.type);
      this.setTexture2D(i, 0), e.isDataTexture ? E.texSubImage2D(E.TEXTURE_2D, n || 0, t.x, t.y, r, a, s, o, e.image.data) : E.texSubImage2D(E.TEXTURE_2D, n || 0, t.x, t.y, s, o, e.image)
    }
  }

  function De(t, e) {
    this.name = "", this.color = new O(t), this.density = void 0 !== e ? e : 25e-5
  }

  function Te(t, e, i) {
    this.name = "", this.color = new O(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
  }

  function Le() {
    g.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
  }

  function Ee(t) {
    j.call(this), this.type = "SpriteMaterial", this.color = new O(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(t)
  }

  function Ie(t) {
    g.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new Ee, this.center = new tt(.5, .5)
  }

  function _e() {
    g.call(this), this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      }
    })
  }

  function be(t, e) {
    if(t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
    else if(this.bones.length === e.length) this.boneInverses = e.slice(0);
    else {
      this.boneInverses = [];
      for(var i = 0, n = this.bones.length; i < n; i++) this.boneInverses.push(new At)
    }
  }

  function Se() {
    g.call(this), this.type = "Bone"
  }

  function je(t, e) {
    G.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new At, this.bindMatrixInverse = new At;
    var i = new be(this.initBones());
    this.bind(i, this.matrixWorld), this.normalizeSkinWeights()
  }

  function Ce(t) {
    j.call(this), this.type = "LineBasicMaterial", this.color = new O(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
  }

  function Oe(t, e, i) {
    if(1 === i) return new ze(t, e);
    g.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new B, this.material = void 0 !== e ? e : new Ce({
      color: 16777215 * Math.random()
    })
  }

  function ze(t, e) {
    Oe.call(this, t, e), this.type = "LineSegments"
  }

  function Pe(t, e) {
    Oe.call(this, t, e), this.type = "LineLoop"
  }

  function Ue(t) {
    j.call(this), this.type = "PointsMaterial", this.color = new O(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t)
  }

  function Be(t, e) {
    g.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new B, this.material = void 0 !== e ? e : new Ue({
      color: 16777215 * Math.random()
    })
  }

  function ke() {
    g.call(this), this.type = "Group"
  }

  function Re(t, e, i, n, r, a, s, o, c) {
    d.call(this, t, e, i, n, r, a, s, o, c), this.generateMipmaps = !1
  }

  function Fe(t, e, i, n, r, a, s, o, c, h, u, l) {
    d.call(this, null, a, s, o, c, h, n, r, u, l), this.image = {
      width: e,
      height: i
    }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
  }

  function Qe(t, e, i, n, r, a, s, o, c, h) {
    if((h = void 0 !== h ? h : Hs) !== Hs && h !== Xs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === i && h === Hs && (i = Cs), void 0 === i && h === Xs && (i = Fs), d.call(this, null, n, r, a, s, o, h, i, c), this.image = {
      width: t,
      height: e
    }, this.magFilter = void 0 !== s ? s : Ds, this.minFilter = void 0 !== o ? o : Ds, this.flipY = !1, this.generateMipmaps = !1
  }

  function Ge(t) {
    B.call(this), this.type = "WireframeGeometry";
    var e, i, n, r, a, s, o, c, h, u, l = [],
      d = [0, 0],
      p = {},
      f = ["a", "b", "c"];
    if(t && t.isGeometry) {
      var g = t.faces;
      for(e = 0, n = g.length; e < n; e++) {
        var m = g[e];
        for(i = 0; i < 3; i++) o = m[f[i]], c = m[f[(i + 1) % 3]], d[0] = Math.min(o, c), d[1] = Math.max(o, c), void 0 === p[h = d[0] + "," + d[1]] && (p[h] = {
          index1: d[0],
          index2: d[1]
        })
      }
      for(h in p) s = p[h], u = t.vertices[s.index1], l.push(u.x, u.y, u.z), u = t.vertices[s.index2], l.push(u.x, u.y, u.z)
    } else if(t && t.isBufferGeometry) {
      var M, v, y, A, x, w;
      if(u = new wt, null !== t.index) {
        for(M = t.attributes.position, v = t.index, 0 === (y = t.groups).length && (y = [{
            start: 0,
            count: v.count,
            materialIndex: 0
          }]), r = 0, a = y.length; r < a; ++r)
          for(n = (e = (A = y[r]).start) + A.count; e < n; e += 3)
            for(i = 0; i < 3; i++) o = v.getX(e + i), c = v.getX(e + (i + 1) % 3), d[0] = Math.min(o, c), d[1] = Math.max(o, c), void 0 === p[h = d[0] + "," + d[1]] && (p[h] = {
              index1: d[0],
              index2: d[1]
            });
        for(h in p) s = p[h], u.fromBufferAttribute(M, s.index1), l.push(u.x, u.y, u.z), u.fromBufferAttribute(M, s.index2), l.push(u.x, u.y, u.z)
      } else
        for(e = 0, n = (M = t.attributes.position).count / 3; e < n; e++)
          for(i = 0; i < 3; i++) x = 3 * e + i, u.fromBufferAttribute(M, x), l.push(u.x, u.y, u.z), w = 3 * e + (i + 1) % 3, u.fromBufferAttribute(M, w), l.push(u.x, u.y, u.z)
    }
    this.addAttribute("position", new U(l, 3))
  }

  function Ye(t, e, i) {
    y.call(this), this.type = "ParametricGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: i
    }, this.fromBufferGeometry(new Ve(t, e, i)), this.mergeVertices()
  }

  function Ve(t, e, i) {
    B.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
      func: t,
      slices: e,
      stacks: i
    };
    var n, r, a = [],
      s = [],
      o = [],
      c = [],
      h = new wt,
      u = new wt,
      l = new wt,
      d = new wt,
      p = new wt;
    t.length;
    var f = e + 1;
    for(n = 0; n <= i; n++) {
      var g = n / i;
      for(r = 0; r <= e; r++) {
        var m = r / e;
        t(m, g, u), s.push(u.x, u.y, u.z), 0 <= m - 1e-5 ? (t(m - 1e-5, g, l), d.subVectors(u, l)) : (t(1e-5 + m, g, l), d.subVectors(l, u)), 0 <= g - 1e-5 ? (t(m, g - 1e-5, l), p.subVectors(u, l)) : (t(m, 1e-5 + g, l), p.subVectors(l, u)), h.crossVectors(d, p).normalize(), o.push(h.x, h.y, h.z), c.push(m, g)
      }
    }
    for(n = 0; n < i; n++)
      for(r = 0; r < e; r++) {
        var M = n * f + r,
          v = n * f + r + 1,
          y = (n + 1) * f + r + 1,
          A = (n + 1) * f + r;
        a.push(M, v, A), a.push(v, y, A)
      }
    this.setIndex(a), this.addAttribute("position", new U(s, 3)), this.addAttribute("normal", new U(o, 3)), this.addAttribute("uv", new U(c, 2))
  }

  function We(t, e, i, n) {
    y.call(this), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: i,
      detail: n
    }, this.fromBufferGeometry(new He(t, e, i, n)), this.mergeVertices()
  }

  function He(n, a, t, e) {
    function s(t, e, i, n) {
      var r, a, s = Math.pow(2, n),
        o = [];
      for(r = 0; r <= s; r++) {
        o[r] = [];
        var c = t.clone().lerp(i, r / s),
          h = e.clone().lerp(i, r / s),
          u = s - r;
        for(a = 0; a <= u; a++) o[r][a] = 0 === a && r === s ? c : c.clone().lerp(h, a / u)
      }
      for(r = 0; r < s; r++)
        for(a = 0; a < 2 * (s - r) - 1; a++) {
          var l = Math.floor(a / 2);
          a % 2 == 0 ? (d(o[r][l + 1]), d(o[r + 1][l]), d(o[r][l])) : (d(o[r][l + 1]), d(o[r + 1][l + 1]), d(o[r + 1][l]))
        }
    }

    function d(t) {
      p.push(t.x, t.y, t.z)
    }

    function o(t, e) {
      var i = 3 * t;
      e.x = n[0 + i], e.y = n[1 + i], e.z = n[2 + i]
    }

    function u(t, e, i, n) {
      n < 0 && 1 === t.x && (f[e] = t.x - 1), 0 === i.x && 0 === i.z && (f[e] = n / 2 / Math.PI + .5)
    }

    function l(t) {
      return Math.atan2(t.z, -t.x)
    }
    B.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
      vertices: n,
      indices: a,
      radius: t,
      detail: e
    }, t = t || 1;
    var p = [],
      f = [];
    ! function(t) {
      for(var e = new wt, i = new wt, n = new wt, r = 0; r < a.length; r += 3) o(a[r + 0], e), o(a[r + 1], i), o(a[r + 2], n), s(e, i, n, t)
    }(e = e || 0),
    function(t) {
      for(var e = new wt, i = 0; i < p.length; i += 3) e.x = p[i + 0], e.y = p[i + 1], e.z = p[i + 2], e.normalize().multiplyScalar(t), p[i + 0] = e.x, p[i + 1] = e.y, p[i + 2] = e.z
    }(t),
    function() {
      for(var t, e = new wt, i = 0; i < p.length; i += 3) {
        e.x = p[i + 0], e.y = p[i + 1], e.z = p[i + 2];
        var n = l(e) / 2 / Math.PI + .5,
          r = (t = e, Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + .5);
        f.push(n, 1 - r)
      }! function() {
        for(var t = new wt, e = new wt, i = new wt, n = new wt, r = new tt, a = new tt, s = new tt, o = 0, c = 0; o < p.length; o += 9, c += 6) {
          t.set(p[o + 0], p[o + 1], p[o + 2]), e.set(p[o + 3], p[o + 4], p[o + 5]), i.set(p[o + 6], p[o + 7], p[o + 8]), r.set(f[c + 0], f[c + 1]), a.set(f[c + 2], f[c + 3]), s.set(f[c + 4], f[c + 5]), n.copy(t).add(e).add(i).divideScalar(3);
          var h = l(n);
          u(r, c + 0, t, h), u(a, c + 2, e, h), u(s, c + 4, i, h)
        }
      }(),
      function() {
        for(var t = 0; t < f.length; t += 6) {
          var e = f[t + 0],
            i = f[t + 2],
            n = f[t + 4],
            r = Math.max(e, i, n),
            a = Math.min(e, i, n);
          .9 < r && a < .1 && (e < .2 && (f[t + 0] += 1), i < .2 && (f[t + 2] += 1), n < .2 && (f[t + 4] += 1))
        }
      }()
    }(), this.addAttribute("position", new U(p, 3)), this.addAttribute("normal", new U(p.slice(), 3)), this.addAttribute("uv", new U(f, 2)), 0 === e ? this.computeVertexNormals() : this.normalizeNormals()
  }

  function Xe(t, e) {
    y.call(this), this.type = "TetrahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new Ze(t, e)), this.mergeVertices()
  }

  function Ze(t, e) {
    He.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function qe(t, e) {
    y.call(this), this.type = "OctahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new Je(t, e)), this.mergeVertices()
  }

  function Je(t, e) {
    He.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function Ke(t, e) {
    y.call(this), this.type = "IcosahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new $e(t, e)), this.mergeVertices()
  }

  function $e(t, e) {
    var i = (1 + Math.sqrt(5)) / 2;
    He.call(this, [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function ti(t, e) {
    y.call(this), this.type = "DodecahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    }, this.fromBufferGeometry(new ei(t, e)), this.mergeVertices()
  }

  function ei(t, e) {
    var i = (1 + Math.sqrt(5)) / 2,
      n = 1 / i;
    He.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
      radius: t,
      detail: e
    }
  }

  function ii(t, e, i, n, r, a) {
    y.call(this), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: i,
      radialSegments: n,
      closed: r
    };
    var s = new ni(t, e, i, n, r);
    this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals, this.fromBufferGeometry(s), this.mergeVertices()
  }

  function ni(s, o, c, h, t) {
    function e(t) {
      f = s.getPointAt(t / o, f);
      var e = u.normals[t],
        i = u.binormals[t];
      for(l = 0; l <= h; l++) {
        var n = l / h * Math.PI * 2,
          r = Math.sin(n),
          a = -Math.cos(n);
        p.x = a * e.x + r * i.x, p.y = a * e.y + r * i.y, p.z = a * e.z + r * i.z, p.normalize(), m.push(p.x, p.y, p.z), d.x = f.x + c * p.x, d.y = f.y + c * p.y, d.z = f.z + c * p.z, g.push(d.x, d.y, d.z)
      }
    }
    B.call(this), this.type = "TubeBufferGeometry", this.parameters = {
      path: s,
      tubularSegments: o,
      radius: c,
      radialSegments: h,
      closed: t
    }, o = o || 64, c = c || 1, h = h || 8, t = t || !1;
    var u = s.computeFrenetFrames(o, t);
    this.tangents = u.tangents, this.normals = u.normals, this.binormals = u.binormals;
    var r, l, d = new wt,
      p = new wt,
      i = new tt,
      f = new wt,
      g = [],
      m = [],
      n = [],
      a = [];
    ! function() {
      for(r = 0; r < o; r++) e(r);
      e(!1 === t ? o : 0),
        function() {
          for(r = 0; r <= o; r++)
            for(l = 0; l <= h; l++) i.x = r / o, i.y = l / h, n.push(i.x, i.y)
        }(),
        function() {
          for(l = 1; l <= o; l++)
            for(r = 1; r <= h; r++) {
              var t = (h + 1) * (l - 1) + (r - 1),
                e = (h + 1) * l + (r - 1),
                i = (h + 1) * l + r,
                n = (h + 1) * (l - 1) + r;
              a.push(t, e, n), a.push(e, i, n)
            }
        }()
    }(), this.setIndex(a), this.addAttribute("position", new U(g, 3)), this.addAttribute("normal", new U(m, 3)), this.addAttribute("uv", new U(n, 2))
  }

  function ri(t, e, i, n, r, a, s) {
    y.call(this), this.type = "TorusKnotGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: i,
      radialSegments: n,
      p: r,
      q: a
    }, this.fromBufferGeometry(new ai(t, e, i, n, r, a)), this.mergeVertices()
  }

  function ai(t, e, i, n, r, a) {
    function s(t, e, i, n, r) {
      var a = Math.cos(t),
        s = Math.sin(t),
        o = i / e * t,
        c = Math.cos(o);
      r.x = n * (2 + c) * .5 * a, r.y = n * (2 + c) * s * .5, r.z = n * Math.sin(o) * .5
    }
    B.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: i,
      radialSegments: n,
      p: r,
      q: a
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
    var o, c, h = [],
      u = [],
      l = [],
      d = [],
      p = new wt,
      f = new wt,
      g = new wt,
      m = new wt,
      M = new wt,
      v = new wt,
      y = new wt;
    for(o = 0; o <= i; ++o) {
      var A = o / i * r * Math.PI * 2;
      for(s(A, r, a, t, g), s(.01 + A, r, a, t, m), v.subVectors(m, g), y.addVectors(m, g), M.crossVectors(v, y), y.crossVectors(M, v), M.normalize(), y.normalize(), c = 0; c <= n; ++c) {
        var x = c / n * Math.PI * 2,
          w = -e * Math.cos(x),
          N = e * Math.sin(x);
        p.x = g.x + (w * y.x + N * M.x), p.y = g.y + (w * y.y + N * M.y), p.z = g.z + (w * y.z + N * M.z), u.push(p.x, p.y, p.z), f.subVectors(p, g).normalize(), l.push(f.x, f.y, f.z), d.push(o / i), d.push(c / n)
      }
    }
    for(c = 1; c <= i; c++)
      for(o = 1; o <= n; o++) {
        var D = (n + 1) * (c - 1) + (o - 1),
          T = (n + 1) * c + (o - 1),
          L = (n + 1) * c + o,
          E = (n + 1) * (c - 1) + o;
        h.push(D, T, E), h.push(T, L, E)
      }
    this.setIndex(h), this.addAttribute("position", new U(u, 3)), this.addAttribute("normal", new U(l, 3)), this.addAttribute("uv", new U(d, 2))
  }

  function si(t, e, i, n, r) {
    y.call(this), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: i,
      tubularSegments: n,
      arc: r
    }, this.fromBufferGeometry(new oi(t, e, i, n, r)), this.mergeVertices()
  }

  function oi(t, e, i, n, r) {
    B.call(this), this.type = "TorusBufferGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: i,
      tubularSegments: n,
      arc: r
    }, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
    var a, s, o = [],
      c = [],
      h = [],
      u = [],
      l = new wt,
      d = new wt,
      p = new wt;
    for(a = 0; a <= i; a++)
      for(s = 0; s <= n; s++) {
        var f = s / n * r,
          g = a / i * Math.PI * 2;
        d.x = (t + e * Math.cos(g)) * Math.cos(f), d.y = (t + e * Math.cos(g)) * Math.sin(f), d.z = e * Math.sin(g), c.push(d.x, d.y, d.z), l.x = t * Math.cos(f), l.y = t * Math.sin(f), p.subVectors(d, l).normalize(), h.push(p.x, p.y, p.z), u.push(s / n), u.push(a / i)
      }
    for(a = 1; a <= i; a++)
      for(s = 1; s <= n; s++) {
        var m = (n + 1) * a + s - 1,
          M = (n + 1) * (a - 1) + s - 1,
          v = (n + 1) * (a - 1) + s,
          y = (n + 1) * a + s;
        o.push(m, M, y), o.push(M, v, y)
      }
    this.setIndex(o), this.addAttribute("position", new U(c, 3)), this.addAttribute("normal", new U(h, 3)), this.addAttribute("uv", new U(u, 2))
  }

  function ci(t, e, i, n, r) {
    var a, s;
    if(r === 0 < function(t, e, i, n) {
        for(var r = 0, a = e, s = i - n; a < i; a += n) r += (t[s] - t[a]) * (t[a + 1] + t[s + 1]), s = a;
        return r
      }(t, e, i, n))
      for(a = e; a < i; a += n) s = Ti(a, t[a], t[a + 1], s);
    else
      for(a = i - n; e <= a; a -= n) s = Ti(a, t[a], t[a + 1], s);
    return s && xi(s, s.next) && (Li(s), s = s.next), s
  }

  function hi(t, e) {
    if(!t) return t;
    e = e || t;
    var i, n = t;
    do {
      if(i = !1, n.steiner || !xi(n, n.next) && 0 !== Ai(n.prev, n, n.next)) n = n.next;
      else {
        if(Li(n), (n = e = n.prev) === n.next) break;
        i = !0
      }
    } while(i || n !== e);
    return e
  }

  function ui(t, e, i, n, r, a, s) {
    if(t) {
      !s && a && function(t, e, i, n) {
        var r = t;
        for(; null === r.z && (r.z = Mi(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next, r !== t;);
        r.prevZ.nextZ = null, r.prevZ = null,
          function(t) {
            var e, i, n, r, a, s, o, c, h = 1;
            do {
              for(i = t, a = t = null, s = 0; i;) {
                for(s++, n = i, e = o = 0; e < h && (o++, n = n.nextZ); e++);
                for(c = h; 0 < o || 0 < c && n;) 0 !== o && (0 === c || !n || i.z <= n.z) ? (i = (r = i).nextZ, o--) : (n = (r = n).nextZ, c--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
                i = n
              }
              a.nextZ = null, h *= 2
            } while(1 < s)
          }(r)
      }(t, n, r, a);
      for(var o, c, h = t; t.prev !== t.next;)
        if(o = t.prev, c = t.next, a ? di(t, n, r, a) : li(t)) e.push(o.i / i), e.push(t.i / i), e.push(c.i / i), Li(t), t = c.next, h = c.next;
        else if((t = c) === h) {
        s ? 1 === s ? ui(t = pi(t, e, i), e, i, n, r, a, 2) : 2 === s && fi(t, e, i, n, r, a) : ui(hi(t), e, i, n, r, a, 1);
        break
      }
    }
  }

  function li(t) {
    var e = t.prev,
      i = t,
      n = t.next;
    if(0 <= Ai(e, i, n)) return !1;
    for(var r = t.next.next; r !== t.prev;) {
      if(yi(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && 0 <= Ai(r.prev, r, r.next)) return !1;
      r = r.next
    }
    return !0
  }

  function di(t, e, i, n) {
    var r = t.prev,
      a = t,
      s = t.next;
    if(0 <= Ai(r, a, s)) return !1;
    for(var o = r.x < a.x ? r.x < s.x ? r.x : s.x : a.x < s.x ? a.x : s.x, c = r.y < a.y ? r.y < s.y ? r.y : s.y : a.y < s.y ? a.y : s.y, h = r.x > a.x ? r.x > s.x ? r.x : s.x : a.x > s.x ? a.x : s.x, u = r.y > a.y ? r.y > s.y ? r.y : s.y : a.y > s.y ? a.y : s.y, l = Mi(o, c, e, i, n), d = Mi(h, u, e, i, n), p = t.nextZ; p && p.z <= d;) {
      if(p !== t.prev && p !== t.next && yi(r.x, r.y, a.x, a.y, s.x, s.y, p.x, p.y) && 0 <= Ai(p.prev, p, p.next)) return !1;
      p = p.nextZ
    }
    for(p = t.prevZ; p && p.z >= l;) {
      if(p !== t.prev && p !== t.next && yi(r.x, r.y, a.x, a.y, s.x, s.y, p.x, p.y) && 0 <= Ai(p.prev, p, p.next)) return !1;
      p = p.prevZ
    }
    return !0
  }

  function pi(t, e, i) {
    var n = t;
    do {
      var r = n.prev,
        a = n.next.next;
      !xi(r, a) && wi(r, n, n.next, a) && Ni(r, a) && Ni(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), Li(n), Li(n.next), n = t = a), n = n.next
    } while(n !== t);
    return n
  }

  function fi(t, e, i, n, r, a) {
    var s, o, c = t;
    do {
      for(var h = c.next.next; h !== c.prev;) {
        if(c.i !== h.i && (o = h, (s = c).next.i !== o.i && s.prev.i !== o.i && ! function(t, e) {
            var i = t;
            do {
              if(i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && wi(i, i.next, t, e)) return !0;
              i = i.next
            } while(i !== t);
            return !1
          }(s, o) && Ni(s, o) && Ni(o, s) && function(t, e) {
            var i = t,
              n = !1,
              r = (t.x + e.x) / 2,
              a = (t.y + e.y) / 2;
            for(; i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next, i !== t;);
            return n
          }(s, o))) {
          var u = Di(c, h);
          return c = hi(c, c.next), u = hi(u, u.next), ui(c, e, i, n, r, a), void ui(u, e, i, n, r, a)
        }
        h = h.next
      }
      c = c.next
    } while(c !== t)
  }

  function gi(t, e) {
    return t.x - e.x
  }

  function mi(t, e) {
    if(e = function(t, e) {
        var i, n = e,
          r = t.x,
          a = t.y,
          s = -1 / 0;
        do {
          if(a <= n.y && a >= n.next.y && n.next.y !== n.y) {
            var o = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if(o <= r && s < o) {
              if((s = o) === r) {
                if(a === n.y) return n;
                if(a === n.next.y) return n.next
              }
              i = n.x < n.next.x ? n : n.next
            }
          }
          n = n.next
        } while(n !== e);
        if(!i) return null;
        if(r === s) return i.prev;
        var c, h = i,
          u = i.x,
          l = i.y,
          d = 1 / 0;
        n = i.next;
        for(; n !== h;) r >= n.x && n.x >= u && r !== n.x && yi(a < l ? r : s, a, u, l, a < l ? s : r, a, n.x, n.y) && ((c = Math.abs(a - n.y) / (r - n.x)) < d || c === d && n.x > i.x) && Ni(n, t) && (i = n, d = c), n = n.next;
        return i
      }(t, e)) {
      var i = Di(e, t);
      hi(i, i.next)
    }
  }

  function Mi(t, e, i, n, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
  }

  function vi(t) {
    for(var e = t, i = t; e.x < i.x && (i = e), (e = e.next) !== t;);
    return i
  }

  function yi(t, e, i, n, r, a, s, o) {
    return 0 <= (r - s) * (e - o) - (t - s) * (a - o) && 0 <= (t - s) * (n - o) - (i - s) * (e - o) && 0 <= (i - s) * (a - o) - (r - s) * (n - o)
  }

  function Ai(t, e, i) {
    return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
  }

  function xi(t, e) {
    return t.x === e.x && t.y === e.y
  }

  function wi(t, e, i, n) {
    return !!(xi(t, e) && xi(i, n) || xi(t, n) && xi(i, e)) || 0 < Ai(t, e, i) != 0 < Ai(t, e, n) && 0 < Ai(i, n, t) != 0 < Ai(i, n, e)
  }

  function Ni(t, e) {
    return Ai(t.prev, t, t.next) < 0 ? 0 <= Ai(t, e, t.next) && 0 <= Ai(t, t.prev, e) : Ai(t, e, t.prev) < 0 || Ai(t, t.next, e) < 0
  }

  function Di(t, e) {
    var i = new Ei(t.i, t.x, t.y),
      n = new Ei(e.i, e.x, e.y),
      r = t.next,
      a = e.prev;
    return (t.next = e).prev = t, (i.next = r).prev = i, (n.next = i).prev = n, (a.next = n).prev = a, n
  }

  function Ti(t, e, i, n) {
    var r = new Ei(t, e, i);
    return n ? (r.next = n.next, (r.prev = n).next.prev = r, n.next = r) : (r.prev = r).next = r, r
  }

  function Li(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
  }

  function Ei(t, e, i) {
    this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }

  function Ii(t) {
    var e = t.length;
    2 < e && t[e - 1].equals(t[0]) && t.pop()
  }

  function _i(t, e) {
    for(var i = 0; i < e.length; i++) t.push(e[i].x), t.push(e[i].y)
  }

  function bi(t, e) {
    y.call(this), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, this.fromBufferGeometry(new Si(t, e)), this.mergeVertices()
  }

  function Si(t, q) {
    function e(t) {
      function e(t, e, i) {
        return e.clone().multiplyScalar(i).add(t)
      }

      function i(t, e, i) {
        var n, r, a, s = t.x - e.x,
          o = t.y - e.y,
          c = i.x - t.x,
          h = i.y - t.y,
          u = s * s + o * o,
          l = s * h - o * c;
        if(Math.abs(l) > Number.EPSILON) {
          var d = Math.sqrt(u),
            p = Math.sqrt(c * c + h * h),
            f = e.x - o / d,
            g = e.y + s / d,
            m = ((i.x - h / p - f) * h - (i.y + c / p - g) * c) / (s * h - o * c),
            M = (n = f + s * m - t.x) * n + (r = g + o * m - t.y) * r;
          if(M <= 2) return new tt(n, r);
          a = Math.sqrt(M / 2)
        } else {
          var v = !1;
          s > Number.EPSILON ? c > Number.EPSILON && (v = !0) : s < -Number.EPSILON ? c < -Number.EPSILON && (v = !0) : Math.sign(o) === Math.sign(h) && (v = !0), a = v ? (n = -o, r = s, Math.sqrt(u)) : (n = s, r = o, Math.sqrt(u / 2))
        }
        return new tt(n / a, r / a)
      }

      function n(t, e) {
        var i, n;
        for(Q = t.length; 0 <= --Q;) {
          (n = (i = Q) - 1) < 0 && (n = t.length - 1);
          var r = 0,
            a = l + 2 * m;
          for(r = 0; r < a; r++) {
            var s = k * r,
              o = k * (r + 1);
            c(e + i + s, e + n + s, e + n + o, e + i + o)
          }
        }
      }

      function r(t, e, i) {
        h.push(t), h.push(e), h.push(i)
      }

      function a(t, e, i) {
        s(t), s(e), s(i);
        var n = K.length / 3,
          r = v.generateTopUV(J, K, n - 3, n - 2, n - 1);
        o(r[0]), o(r[1]), o(r[2])
      }

      function c(t, e, i, n) {
        s(t), s(e), s(n), s(e), s(i), s(n);
        var r = K.length / 3,
          a = v.generateSideWallUV(J, K, r - 6, r - 3, r - 2, r - 1);
        o(a[0]), o(a[1]), o(a[3]), o(a[1]), o(a[2]), o(a[3])
      }

      function s(t) {
        K.push(h[3 * t + 0]), K.push(h[3 * t + 1]), K.push(h[3 * t + 2])
      }

      function o(t) {
        $.push(t.x), $.push(t.y)
      }
      var h = [],
        u = void 0 !== q.curveSegments ? q.curveSegments : 12,
        l = void 0 !== q.steps ? q.steps : 1,
        d = void 0 !== q.depth ? q.depth : 100,
        p = void 0 === q.bevelEnabled || q.bevelEnabled,
        f = void 0 !== q.bevelThickness ? q.bevelThickness : 6,
        g = void 0 !== q.bevelSize ? q.bevelSize : f - 2,
        m = void 0 !== q.bevelSegments ? q.bevelSegments : 3,
        M = q.extrudePath,
        v = void 0 !== q.UVGenerator ? q.UVGenerator : Nu;
      void 0 !== q.amount && (d = q.amount);
      var y, A, x, w, N, D, T, L, E = !1;
      M && (y = M.getSpacedPoints(l), p = !(E = !0), A = M.computeFrenetFrames(l, !1), x = new wt, w = new wt, N = new wt), p || (g = f = m = 0);
      var I = t.extractPoints(u),
        _ = I.shape,
        b = I.holes;
      if(!wu.isClockWise(_))
        for(_ = _.reverse(), T = 0, L = b.length; T < L; T++) D = b[T], wu.isClockWise(D) && (b[T] = D.reverse());
      var S = wu.triangulateShape(_, b),
        j = _;
      for(T = 0, L = b.length; T < L; T++) D = b[T], _ = _.concat(D);
      for(var C, O, z, P, U, B, k = _.length, R = S.length, F = [], Q = 0, G = j.length, Y = G - 1, V = Q + 1; Q < G; Q++, Y++, V++) Y === G && (Y = 0), V === G && (V = 0), F[Q] = i(j[Q], j[Y], j[V]);
      var W, H, X = [],
        Z = F.concat();
      for(T = 0, L = b.length; T < L; T++) {
        for(D = b[T], W = [], Q = 0, Y = (G = D.length) - 1, V = Q + 1; Q < G; Q++, Y++, V++) Y === G && (Y = 0), V === G && (V = 0), W[Q] = i(D[Q], D[Y], D[V]);
        X.push(W), Z = Z.concat(W)
      }
      for(C = 0; C < m; C++) {
        for(z = C / m, P = f * Math.cos(z * Math.PI / 2), O = g * Math.sin(z * Math.PI / 2), Q = 0, G = j.length; Q < G; Q++) r((U = e(j[Q], F[Q], O)).x, U.y, -P);
        for(T = 0, L = b.length; T < L; T++)
          for(D = b[T], W = X[T], Q = 0, G = D.length; Q < G; Q++) r((U = e(D[Q], W[Q], O)).x, U.y, -P)
      }
      for(O = g, Q = 0; Q < k; Q++) U = p ? e(_[Q], Z[Q], O) : _[Q], E ? (w.copy(A.normals[0]).multiplyScalar(U.x), x.copy(A.binormals[0]).multiplyScalar(U.y), N.copy(y[0]).add(w).add(x), r(N.x, N.y, N.z)) : r(U.x, U.y, 0);
      for(H = 1; H <= l; H++)
        for(Q = 0; Q < k; Q++) U = p ? e(_[Q], Z[Q], O) : _[Q], E ? (w.copy(A.normals[H]).multiplyScalar(U.x), x.copy(A.binormals[H]).multiplyScalar(U.y), N.copy(y[H]).add(w).add(x), r(N.x, N.y, N.z)) : r(U.x, U.y, d / l * H);
      for(C = m - 1; 0 <= C; C--) {
        for(z = C / m, P = f * Math.cos(z * Math.PI / 2), O = g * Math.sin(z * Math.PI / 2), Q = 0, G = j.length; Q < G; Q++) r((U = e(j[Q], F[Q], O)).x, U.y, d + P);
        for(T = 0, L = b.length; T < L; T++)
          for(D = b[T], W = X[T], Q = 0, G = D.length; Q < G; Q++) U = e(D[Q], W[Q], O), E ? r(U.x, U.y + y[l - 1].y, y[l - 1].x + P) : r(U.x, U.y, d + P)
      }! function() {
        var t = K.length / 3;
        if(p) {
          var e = 0,
            i = k * e;
          for(Q = 0; Q < R; Q++) a((B = S[Q])[2] + i, B[1] + i, B[0] + i);
          for(i = k * (e = l + 2 * m), Q = 0; Q < R; Q++) a((B = S[Q])[0] + i, B[1] + i, B[2] + i)
        } else {
          for(Q = 0; Q < R; Q++) a((B = S[Q])[2], B[1], B[0]);
          for(Q = 0; Q < R; Q++) a((B = S[Q])[0] + k * l, B[1] + k * l, B[2] + k * l)
        }
        J.addGroup(t, K.length / 3 - t, 0)
      }(),
      function() {
        var t = K.length / 3,
          e = 0;
        for(n(j, e), e += j.length, T = 0, L = b.length; T < L; T++) n(D = b[T], e), e += D.length;
        J.addGroup(t, K.length / 3 - t, 1)
      }()
    }
    B.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
      shapes: t,
      options: q
    }, t = Array.isArray(t) ? t : [t];
    for(var J = this, K = [], $ = [], i = 0, n = t.length; i < n; i++) {
      e(t[i])
    }
    this.addAttribute("position", new U(K, 3)), this.addAttribute("uv", new U($, 2)), this.computeVertexNormals()
  }

  function ji(t, e, i) {
    if(i.shapes = [], Array.isArray(t))
      for(var n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        i.shapes.push(a.uuid)
      } else i.shapes.push(t.uuid);
    return void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()), i
  }

  function Ci(t, e) {
    y.call(this), this.type = "TextGeometry", this.parameters = {
      text: t,
      parameters: e
    }, this.fromBufferGeometry(new Oi(t, e)), this.mergeVertices()
  }

  function Oi(t, e) {
    var i = (e = e || {}).font;
    if(!i || !i.isFont) return new y;
    var n = i.generateShapes(t, e.size, e.curveSegments);
    e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Si.call(this, n, e), this.type = "TextBufferGeometry"
  }

  function zi(t, e, i, n, r, a, s) {
    y.call(this), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: i,
      phiStart: n,
      phiLength: r,
      thetaStart: a,
      thetaLength: s
    }, this.fromBufferGeometry(new Pi(t, e, i, n, r, a, s)), this.mergeVertices()
  }

  function Pi(t, e, i, n, r, a, s) {
    B.call(this), this.type = "SphereBufferGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: i,
      phiStart: n,
      phiLength: r,
      thetaStart: a,
      thetaLength: s
    }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
    var o, c, h = (a = void 0 !== a ? a : 0) + (s = void 0 !== s ? s : Math.PI),
      u = 0,
      l = [],
      d = new wt,
      p = new wt,
      f = [],
      g = [],
      m = [],
      M = [];
    for(c = 0; c <= i; c++) {
      var v = [],
        y = c / i;
      for(o = 0; o <= e; o++) {
        var A = o / e;
        d.x = -t * Math.cos(n + A * r) * Math.sin(a + y * s), d.y = t * Math.cos(a + y * s), d.z = t * Math.sin(n + A * r) * Math.sin(a + y * s), g.push(d.x, d.y, d.z), p.set(d.x, d.y, d.z).normalize(), m.push(p.x, p.y, p.z), M.push(A, 1 - y), v.push(u++)
      }
      l.push(v)
    }
    for(c = 0; c < i; c++)
      for(o = 0; o < e; o++) {
        var x = l[c][o + 1],
          w = l[c][o],
          N = l[c + 1][o],
          D = l[c + 1][o + 1];
        (0 !== c || 0 < a) && f.push(x, w, D), (c !== i - 1 || h < Math.PI) && f.push(w, N, D)
      }
    this.setIndex(f), this.addAttribute("position", new U(g, 3)), this.addAttribute("normal", new U(m, 3)), this.addAttribute("uv", new U(M, 2))
  }

  function Ui(t, e, i, n, r, a) {
    y.call(this), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: i,
      phiSegments: n,
      thetaStart: r,
      thetaLength: a
    }, this.fromBufferGeometry(new Bi(t, e, i, n, r, a)), this.mergeVertices()
  }

  function Bi(t, e, i, n, r, a) {
    B.call(this), this.type = "RingBufferGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: i,
      phiSegments: n,
      thetaStart: r,
      thetaLength: a
    }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8;
    var s, o, c, h = [],
      u = [],
      l = [],
      d = [],
      p = t,
      f = (e - t) / (n = void 0 !== n ? Math.max(1, n) : 1),
      g = new wt,
      m = new tt;
    for(o = 0; o <= n; o++) {
      for(c = 0; c <= i; c++) s = r + c / i * a, g.x = p * Math.cos(s), g.y = p * Math.sin(s), u.push(g.x, g.y, g.z), l.push(0, 0, 1), m.x = (g.x / e + 1) / 2, m.y = (g.y / e + 1) / 2, d.push(m.x, m.y);
      p += f
    }
    for(o = 0; o < n; o++) {
      var M = o * (i + 1);
      for(c = 0; c < i; c++) {
        var v = s = c + M,
          y = s + i + 1,
          A = s + i + 2,
          x = s + 1;
        h.push(v, y, x), h.push(y, A, x)
      }
    }
    this.setIndex(h), this.addAttribute("position", new U(u, 3)), this.addAttribute("normal", new U(l, 3)), this.addAttribute("uv", new U(d, 2))
  }

  function ki(t, e, i, n) {
    y.call(this), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: i,
      phiLength: n
    }, this.fromBufferGeometry(new Ri(t, e, i, n)), this.mergeVertices()
  }

  function Ri(t, e, i, n) {
    B.call(this), this.type = "LatheBufferGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: i,
      phiLength: n
    }, e = Math.floor(e) || 12, i = i || 0, n = n || 2 * Math.PI, n = So.clamp(n, 0, 2 * Math.PI);
    var r, a, s, o = [],
      c = [],
      h = [],
      u = 1 / e,
      l = new wt,
      d = new tt;
    for(a = 0; a <= e; a++) {
      var p = i + a * u * n,
        f = Math.sin(p),
        g = Math.cos(p);
      for(s = 0; s <= t.length - 1; s++) l.x = t[s].x * f, l.y = t[s].y, l.z = t[s].x * g, c.push(l.x, l.y, l.z), d.x = a / e, d.y = s / (t.length - 1), h.push(d.x, d.y)
    }
    for(a = 0; a < e; a++)
      for(s = 0; s < t.length - 1; s++) {
        var m = r = s + a * t.length,
          M = r + t.length,
          v = r + t.length + 1,
          y = r + 1;
        o.push(m, M, y), o.push(M, v, y)
      }
    if(this.setIndex(o), this.addAttribute("position", new U(c, 3)), this.addAttribute("uv", new U(h, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
      var A = this.attributes.normal.array,
        x = new wt,
        w = new wt,
        N = new wt;
      for(r = e * t.length * 3, s = a = 0; a < t.length; a++, s += 3) x.x = A[s + 0], x.y = A[s + 1], x.z = A[s + 2], w.x = A[r + s + 0], w.y = A[r + s + 1], w.z = A[r + s + 2], N.addVectors(x, w).normalize(), A[s + 0] = A[r + s + 0] = N.x, A[s + 1] = A[r + s + 1] = N.y, A[s + 2] = A[r + s + 2] = N.z
    }
  }

  function Fi(t, e) {
    y.call(this), this.type = "ShapeGeometry", "object" == typeof e && (e = e.curveSegments), this.parameters = {
      shapes: t,
      curveSegments: e
    }, this.fromBufferGeometry(new Qi(t, e)), this.mergeVertices()
  }

  function Qi(t, f) {
    function e(t) {
      var e, i, n, r = m.length / 3,
        a = t.extractPoints(f),
        s = a.shape,
        o = a.holes;
      if(!1 === wu.isClockWise(s))
        for(s = s.reverse(), e = 0, i = o.length; e < i; e++) n = o[e], !0 === wu.isClockWise(n) && (o[e] = n.reverse());
      var c = wu.triangulateShape(s, o);
      for(e = 0, i = o.length; e < i; e++) n = o[e], s = s.concat(n);
      for(e = 0, i = s.length; e < i; e++) {
        var h = s[e];
        m.push(h.x, h.y, 0), M.push(0, 0, 1), v.push(h.x, h.y)
      }
      for(e = 0, i = c.length; e < i; e++) {
        var u = c[e],
          l = u[0] + r,
          d = u[1] + r,
          p = u[2] + r;
        g.push(l, d, p), y += 3
      }
    }
    B.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
      shapes: t,
      curveSegments: f
    }, f = f || 12;
    var g = [],
      m = [],
      M = [],
      v = [],
      i = 0,
      y = 0;
    if(!1 === Array.isArray(t)) e(t);
    else
      for(var n = 0; n < t.length; n++) e(t[n]), this.addGroup(i, y, n), i += y, y = 0;
    this.setIndex(g), this.addAttribute("position", new U(m, 3)), this.addAttribute("normal", new U(M, 3)), this.addAttribute("uv", new U(v, 2))
  }

  function Gi(t, e) {
    if(e.shapes = [], Array.isArray(t))
      for(var i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        e.shapes.push(r.uuid)
      } else e.shapes.push(t.uuid);
    return e
  }

  function Yi(t, e) {
    B.call(this), this.type = "EdgesGeometry", this.parameters = {
      thresholdAngle: e
    }, e = void 0 !== e ? e : 1;
    var i, n, r, a, s = [],
      o = Math.cos(So.DEG2RAD * e),
      c = [0, 0],
      h = {},
      u = ["a", "b", "c"];
    t.isBufferGeometry ? (a = new y).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
    for(var l = a.vertices, d = a.faces, p = 0, f = d.length; p < f; p++)
      for(var g = d[p], m = 0; m < 3; m++) i = g[u[m]], n = g[u[(m + 1) % 3]], c[0] = Math.min(i, n), c[1] = Math.max(i, n), void 0 === h[r = c[0] + "," + c[1]] ? h[r] = {
        index1: c[0],
        index2: c[1],
        face1: p,
        face2: void 0
      } : h[r].face2 = p;
    for(r in h) {
      var M = h[r];
      if(void 0 === M.face2 || d[M.face1].normal.dot(d[M.face2].normal) <= o) {
        var v = l[M.index1];
        s.push(v.x, v.y, v.z), v = l[M.index2], s.push(v.x, v.y, v.z)
      }
    }
    this.addAttribute("position", new U(s, 3))
  }

  function Vi(t, e, i, n, r, a, s, o) {
    y.call(this), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: i,
      radialSegments: n,
      heightSegments: r,
      openEnded: a,
      thetaStart: s,
      thetaLength: o
    }, this.fromBufferGeometry(new Wi(t, e, i, n, r, a, s, o)), this.mergeVertices()
  }

  function Wi(M, v, y, A, x, t, w, N) {
    function e(t) {
      var e, i, n, r = new tt,
        a = new wt,
        s = 0,
        o = !0 === t ? M : v,
        c = !0 === t ? 1 : -1;
      for(i = _, e = 1; e <= A; e++) L.push(0, S * c, 0), E.push(0, c, 0), I.push(.5, .5), _++;
      for(n = _, e = 0; e <= A; e++) {
        var h = e / A * N + w,
          u = Math.cos(h),
          l = Math.sin(h);
        a.x = o * l, a.y = S * c, a.z = o * u, L.push(a.x, a.y, a.z), E.push(0, c, 0), r.x = .5 * u + .5, r.y = .5 * l * c + .5, I.push(r.x, r.y), _++
      }
      for(e = 0; e < A; e++) {
        var d = i + e,
          p = n + e;
        !0 === t ? T.push(p, p + 1, d) : T.push(p + 1, p, d), s += 3
      }
      D.addGroup(j, s, !0 === t ? 1 : 2), j += s
    }
    B.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
      radiusTop: M,
      radiusBottom: v,
      height: y,
      radialSegments: A,
      heightSegments: x,
      openEnded: t,
      thetaStart: w,
      thetaLength: N
    };
    var D = this;
    M = void 0 !== M ? M : 1, v = void 0 !== v ? v : 1, y = y || 1, A = Math.floor(A) || 8, x = Math.floor(x) || 1, t = void 0 !== t && t, w = void 0 !== w ? w : 0, N = void 0 !== N ? N : 2 * Math.PI;
    var T = [],
      L = [],
      E = [],
      I = [],
      _ = 0,
      b = [],
      S = y / 2,
      j = 0;
    ! function() {
      var t, e, i = new wt,
        n = new wt,
        r = 0,
        a = (v - M) / y;
      for(e = 0; e <= x; e++) {
        var s = [],
          o = e / x,
          c = o * (v - M) + M;
        for(t = 0; t <= A; t++) {
          var h = t / A,
            u = h * N + w,
            l = Math.sin(u),
            d = Math.cos(u);
          n.x = c * l, n.y = -o * y + S, n.z = c * d, L.push(n.x, n.y, n.z), i.set(l, a, d).normalize(), E.push(i.x, i.y, i.z), I.push(h, 1 - o), s.push(_++)
        }
        b.push(s)
      }
      for(t = 0; t < A; t++)
        for(e = 0; e < x; e++) {
          var p = b[e][t],
            f = b[e + 1][t],
            g = b[e + 1][t + 1],
            m = b[e][t + 1];
          T.push(p, f, m), T.push(f, g, m), r += 6
        }
      D.addGroup(j, r, 0), j += r
    }(), !1 === t && (0 < M && e(!0), 0 < v && e(!1)), this.setIndex(T), this.addAttribute("position", new U(L, 3)), this.addAttribute("normal", new U(E, 3)), this.addAttribute("uv", new U(I, 2))
  }

  function Hi(t, e, i, n, r, a, s) {
    Vi.call(this, 0, t, e, i, n, r, a, s), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: i,
      heightSegments: n,
      openEnded: r,
      thetaStart: a,
      thetaLength: s
    }
  }

  function Xi(t, e, i, n, r, a, s) {
    Wi.call(this, 0, t, e, i, n, r, a, s), this.type = "ConeBufferGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: i,
      heightSegments: n,
      openEnded: r,
      thetaStart: a,
      thetaLength: s
    }
  }

  function Zi(t, e, i, n) {
    y.call(this), this.type = "CircleGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: i,
      thetaLength: n
    }, this.fromBufferGeometry(new qi(t, e, i, n)), this.mergeVertices()
  }

  function qi(t, e, i, n) {
    B.call(this), this.type = "CircleBufferGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: i,
      thetaLength: n
    }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, n = void 0 !== n ? n : 2 * Math.PI;
    var r, a, s = [],
      o = [],
      c = [],
      h = [],
      u = new wt,
      l = new tt;
    for(o.push(0, 0, 0), c.push(0, 0, 1), h.push(.5, .5), a = 0, r = 3; a <= e; a++, r += 3) {
      var d = i + a / e * n;
      u.x = t * Math.cos(d), u.y = t * Math.sin(d), o.push(u.x, u.y, u.z), c.push(0, 0, 1), l.x = (o[r] / t + 1) / 2, l.y = (o[r + 1] / t + 1) / 2, h.push(l.x, l.y)
    }
    for(r = 1; r <= e; r++) s.push(r, r + 1, 0);
    this.setIndex(s), this.addAttribute("position", new U(o, 3)), this.addAttribute("normal", new U(c, 3)), this.addAttribute("uv", new U(h, 2))
  }

  function Ji(t) {
    j.call(this), this.type = "ShadowMaterial", this.color = new O(0), this.transparent = !0, this.setValues(t)
  }

  function Ki(t) {
    k.call(this, t), this.type = "RawShaderMaterial"
  }

  function $i(t) {
    j.call(this), this.defines = {
      STANDARD: ""
    }, this.type = "MeshStandardMaterial", this.color = new O(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new O(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new tt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function tn(t) {
    $i.call(this), this.defines = {
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
  }

  function en(t) {
    j.call(this), this.type = "MeshPhongMaterial", this.color = new O(16777215), this.specular = new O(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new O(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new tt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ss, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function nn(t) {
    en.call(this), this.defines = {
      TOON: ""
    }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
  }

  function rn(t) {
    j.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new tt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function an(t) {
    j.call(this), this.type = "MeshLambertMaterial", this.color = new O(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new O(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ss, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function sn(t) {
    Ce.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
  }

  function on(t, e, i) {
    var n = this,
      r = !1,
      a = 0,
      s = 0,
      o = void 0;
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
      s++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, s), r = !0
    }, this.itemEnd = function(t) {
      a++, void 0 !== n.onProgress && n.onProgress(t, a, s), a === s && (r = !1, void 0 !== n.onLoad && n.onLoad())
    }, this.itemError = function(t) {
      void 0 !== n.onError && n.onError(t)
    }, this.resolveURL = function(t) {
      return o ? o(t) : t
    }, this.setURLModifier = function(t) {
      return o = t, this
    }
  }

  function cn(t) {
    this.manager = void 0 !== t ? t : Eu
  }

  function hn(t) {
    this.manager = void 0 !== t ? t : Eu
  }

  function un(t) {
    this.manager = void 0 !== t ? t : Eu
  }

  function ln() {
    this.type = "Curve", this.arcLengthDivisions = 200
  }

  function dn(t, e, i, n, r, a, s, o) {
    ln.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = i || 1, this.yRadius = n || 1, this.aStartAngle = r || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = s || !1, this.aRotation = o || 0
  }

  function pn(t, e, i, n, r, a) {
    dn.call(this, t, e, i, i, n, r, a), this.type = "ArcCurve"
  }

  function fn() {
    function h(t, e, i, n) {
      s = -3 * (r = t) + 3 * e - 2 * (a = i) - n, o = 2 * t - 2 * e + i + n
    }
    var r = 0,
      a = 0,
      s = 0,
      o = 0;
    return {
      initCatmullRom: function(t, e, i, n, r) {
        h(e, i, r * (i - t), r * (n - e))
      },
      initNonuniformCatmullRom: function(t, e, i, n, r, a, s) {
        var o = (e - t) / r - (i - t) / (r + a) + (i - e) / a,
          c = (i - e) / a - (n - e) / (a + s) + (n - i) / s;
        h(e, i, o *= a, c *= a)
      },
      calc: function(t) {
        var e = t * t;
        return r + a * t + s * e + o * (e * t)
      }
    }
  }

  function gn(t, e, i, n) {
    ln.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = i || "centripetal", this.tension = n || .5
  }

  function mn(t, e, i, n, r) {
    var a = .5 * (n - e),
      s = .5 * (r - i),
      o = t * t;
    return (2 * i - 2 * n + a + s) * (t * o) + (-3 * i + 3 * n - 2 * a - s) * o + a * t + i
  }

  function Mn(t, e, i, n) {
    return function(t, e) {
      var i = 1 - t;
      return i * i * e
    }(t, e) + function(t, e) {
      return 2 * (1 - t) * t * e
    }(t, i) + function(t, e) {
      return t * t * e
    }(t, n)
  }

  function vn(t, e, i, n, r) {
    return function(t, e) {
      var i = 1 - t;
      return i * i * i * e
    }(t, e) + function(t, e) {
      var i = 1 - t;
      return 3 * i * i * t * e
    }(t, i) + function(t, e) {
      return 3 * (1 - t) * t * t * e
    }(t, n) + function(t, e) {
      return t * t * t * e
    }(t, r)
  }

  function yn(t, e, i, n) {
    ln.call(this), this.type = "CubicBezierCurve", this.v0 = t || new tt, this.v1 = e || new tt, this.v2 = i || new tt, this.v3 = n || new tt
  }

  function An(t, e, i, n) {
    ln.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new wt, this.v1 = e || new wt, this.v2 = i || new wt, this.v3 = n || new wt
  }

  function xn(t, e) {
    ln.call(this), this.type = "LineCurve", this.v1 = t || new tt, this.v2 = e || new tt
  }

  function wn(t, e) {
    ln.call(this), this.type = "LineCurve3", this.v1 = t || new wt, this.v2 = e || new wt
  }

  function Nn(t, e, i) {
    ln.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new tt, this.v1 = e || new tt, this.v2 = i || new tt
  }

  function Dn(t, e, i) {
    ln.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new wt, this.v1 = e || new wt, this.v2 = i || new wt
  }

  function Tn(t) {
    ln.call(this), this.type = "SplineCurve", this.points = t || []
  }

  function Ln() {
    ln.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
  }

  function En(t) {
    Ln.call(this), this.type = "Path", this.currentPoint = new tt, t && this.setFromPoints(t)
  }

  function In(t) {
    En.call(this, t), this.uuid = So.generateUUID(), this.type = "Shape", this.holes = []
  }

  function _n(t, e) {
    g.call(this), this.type = "Light", this.color = new O(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
  }

  function bn(t, e, i) {
    _n.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(g.DefaultUp), this.updateMatrix(), this.groundColor = new O(e)
  }

  function Sn(t) {
    this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new tt(512, 512), this.map = null, this.matrix = new At
  }

  function jn() {
    Sn.call(this, new ye(50, 1, .5, 500))
  }

  function Cn(t, e, i, n, r, a) {
    _n.call(this, t, e), this.type = "SpotLight", this.position.copy(g.DefaultUp), this.updateMatrix(), this.target = new g, Object.defineProperty(this, "power", {
      get: function() {
        return this.intensity * Math.PI
      },
      set: function(t) {
        this.intensity = t / Math.PI
      }
    }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new jn
  }

  function On(t, e, i, n) {
    _n.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
      get: function() {
        return 4 * this.intensity * Math.PI
      },
      set: function(t) {
        this.intensity = t / (4 * Math.PI)
      }
    }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Sn(new ye(90, 1, .5, 500))
  }

  function zn() {
    Sn.call(this, new m(-5, 5, 5, -5, .5, 500))
  }

  function Pn(t, e) {
    _n.call(this, t, e), this.type = "DirectionalLight", this.position.copy(g.DefaultUp), this.updateMatrix(), this.target = new g, this.shadow = new zn
  }

  function Un(t, e) {
    _n.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
  }

  function Bn(t, e, i, n) {
    _n.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
  }

  function kn(t, e, i, n) {
    Zn.call(this, t, e, i, n)
  }

  function Rn(t, e, i) {
    Zn.call(this, t, e, i)
  }

  function Fn(t, e, i, n) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
  }

  function Qn(t, e, i, n) {
    Fn.call(this, t, e, i, n)
  }

  function Gn(t, e, i, n) {
    Zn.call(this, t, e, i, n)
  }

  function Yn(t, e, i, n) {
    Zn.call(this, t, e, i, n)
  }

  function Vn(t, e, i, n) {
    Zn.call(this, t, e, i, n)
  }

  function Wn(t, e, i, n) {
    Fn.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
  }

  function Hn(t, e, i, n) {
    Fn.call(this, t, e, i, n)
  }

  function Xn(t, e, i, n) {
    Fn.call(this, t, e, i, n)
  }

  function Zn(t, e, i, n) {
    if(void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if(void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = Ou.convertArray(e, this.TimeBufferType), this.values = Ou.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation), this.validate(), this.optimize()
  }

  function qn(t, e, i, n) {
    Zn.call(this, t, e, i, n)
  }

  function Jn(t, e, i) {
    this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = So.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
  }

  function Kn(t) {
    this.manager = void 0 !== t ? t : Eu, this.textures = {}
  }

  function $n(t) {
    this.manager = void 0 !== t ? t : Eu
  }

  function tr() {}

  function er(t) {
    "boolean" == typeof t && (t = void 0), this.manager = void 0 !== t ? t : Eu, this.withCredentials = !1
  }

  function ir() {
    this.type = "ShapePath", this.color = new O, this.subPaths = [], this.currentPath = null
  }

  function nr(t) {
    this.type = "Font", this.data = t
  }

  function rr(t, e, i, n, r, a) {
    var s = a.glyphs[t] || a.glyphs["?"];
    if(s) {
      var o, c, h, u, l, d, p, f, g = new ir;
      if(s.o)
        for(var m = s._cachedOutline || (s._cachedOutline = s.o.split(" ")), M = 0, v = m.length; M < v;) {
          switch(m[M++]) {
            case "m":
              o = m[M++] * i + n, c = m[M++] * i + r, g.moveTo(o, c);
              break;
            case "l":
              o = m[M++] * i + n, c = m[M++] * i + r, g.lineTo(o, c);
              break;
            case "q":
              h = m[M++] * i + n, u = m[M++] * i + r, l = m[M++] * i + n, d = m[M++] * i + r, g.quadraticCurveTo(l, d, h, u);
              break;
            case "b":
              h = m[M++] * i + n, u = m[M++] * i + r, l = m[M++] * i + n, d = m[M++] * i + r, p = m[M++] * i + n, f = m[M++] * i + r, g.bezierCurveTo(l, d, p, f, h, u)
          }
        }
      return {
        offsetX: s.ha * i,
        path: g
      }
    }
  }

  function ar(t) {
    this.manager = void 0 !== t ? t : Eu
  }

  function sr(t, e, i) {
    g.call(this), this.type = "CubeCamera";
    var r = new ye(90, 1, t, e);
    r.up.set(0, -1, 0), r.lookAt(new wt(1, 0, 0)), this.add(r);
    var a = new ye(90, 1, t, e);
    a.up.set(0, -1, 0), a.lookAt(new wt(-1, 0, 0)), this.add(a);
    var s = new ye(90, 1, t, e);
    s.up.set(0, 0, 1), s.lookAt(new wt(0, 1, 0)), this.add(s);
    var o = new ye(90, 1, t, e);
    o.up.set(0, 0, -1), o.lookAt(new wt(0, -1, 0)), this.add(o);
    var c = new ye(90, 1, t, e);
    c.up.set(0, -1, 0), c.lookAt(new wt(0, 0, 1)), this.add(c);
    var h = new ye(90, 1, t, e);
    h.up.set(0, -1, 0), h.lookAt(new wt(0, 0, -1)), this.add(h);
    var n = {
      format: Gs,
      magFilter: Es,
      minFilter: Es
    };
    this.renderTarget = new u(i, i, n), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
      null === this.parent && this.updateMatrixWorld();
      var i = this.renderTarget,
        n = i.texture.generateMipmaps;
      i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, r, i), i.activeCubeFace = 1, t.render(e, a, i), i.activeCubeFace = 2, t.render(e, s, i), i.activeCubeFace = 3, t.render(e, o, i), i.activeCubeFace = 4, t.render(e, c, i), i.texture.generateMipmaps = n, i.activeCubeFace = 5, t.render(e, h, i), t.setRenderTarget(null)
    }, this.clear = function(t, e, i, n) {
      for(var r = this.renderTarget, a = 0; a < 6; a++) r.activeCubeFace = a, t.setRenderTarget(r), t.clear(e, i, n);
      t.setRenderTarget(null)
    }
  }

  function or() {
    g.call(this), this.type = "AudioListener", this.context = sl(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
  }

  function cr(t) {
    g.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
  }

  function hr(t) {
    cr.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
  }

  function ur(t, e) {
    this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
  }

  function lr(t, e, i) {
    this.binding = t, this.valueSize = i;
    var n, r = Float64Array;
    switch(e) {
      case "quaternion":
        n = this._slerp;
        break;
      case "string":
      case "bool":
        r = Array, n = this._select;
        break;
      default:
        n = this._lerp
    }
    this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
  }

  function dr(t, e, i) {
    var n = i || pr.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, n)
  }

  function pr(t, e, i) {
    this.path = e, this.parsedPath = i || pr.parseTrackName(e), this.node = pr.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
  }

  function fr(t, e, i) {
    this._mixer = t, this._clip = e, this._localRoot = i || null;
    for(var n = e.tracks, r = n.length, a = new Array(r), s = {
        endingStart: yo,
        endingEnd: yo
      }, o = 0; o !== r; ++o) {
      var c = n[o].createInterpolant(null);
      (a[o] = c).settings = s
    }
    this._interpolantSettings = s, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
  }

  function gr(t) {
    this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
  }

  function mr(t) {
    "string" == typeof t && (t = arguments[1]), this.value = t
  }

  function Mr() {
    B.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
  }

  function vr(t, e, i, n) {
    this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
  }

  function yr(t, e) {
    this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
      offset: 0,
      count: -1
    }, this.version = 0
  }

  function Ar(t, e, i) {
    yr.call(this, t, e), this.meshPerAttribute = i || 1
  }

  function xr(t, e, i) {
    x.call(this, t, e), this.meshPerAttribute = i || 1
  }

  function wr(t, e) {
    return t.distance - e.distance
  }

  function Nr(t, e, i, n) {
    if(!1 !== t.visible && (t.raycast(e, i), !0 === n))
      for(var r = t.children, a = 0, s = r.length; a < s; a++) Nr(r[a], e, i, !0)
  }

  function Dr(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
  }

  function Tr(t, e) {
    this.min = void 0 !== t ? t : new tt(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new tt(-1 / 0, -1 / 0)
  }

  function Lr(t) {
    g.call(this), this.material = t, this.render = function() {}
  }

  function Er(t, e, i, n) {
    this.object = t, this.size = void 0 !== e ? e : 1;
    var r = void 0 !== i ? i : 16711680,
      a = void 0 !== n ? n : 1,
      s = 0,
      o = this.object.geometry;
    o && o.isGeometry ? s = 3 * o.faces.length : o && o.isBufferGeometry && (s = o.attributes.normal.count);
    var c = new B,
      h = new U(2 * s * 3, 3);
    c.addAttribute("position", h), ze.call(this, c, new Ce({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Ir(t, e) {
    g.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
    for(var i = new B, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, a = 1; r < 32; r++, a++) {
      var s = r / 32 * Math.PI * 2,
        o = a / 32 * Math.PI * 2;
      n.push(Math.cos(s), Math.sin(s), 1, Math.cos(o), Math.sin(o), 1)
    }
    i.addAttribute("position", new U(n, 3));
    var c = new Ce({
      fog: !1
    });
    this.cone = new ze(i, c), this.add(this.cone), this.update()
  }

  function _r(t) {
    for(var e = function t(e) {
        var i = [];
        e && e.isBone && i.push(e);
        for(var n = 0; n < e.children.length; n++) i.push.apply(i, t(e.children[n]));
        return i
      }(t), i = new B, n = [], r = [], a = new O(0, 0, 1), s = new O(0, 1, 0), o = 0; o < e.length; o++) {
      var c = e[o];
      c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(s.r, s.g, s.b))
    }
    i.addAttribute("position", new U(n, 3)), i.addAttribute("color", new U(r, 3));
    var h = new Ce({
      vertexColors: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    });
    ze.call(this, i, h), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
  }

  function br(t, e, i) {
    this.light = t, this.light.updateMatrixWorld(), this.color = i;
    var n = new Pi(e, 4, 2),
      r = new C({
        wireframe: !0,
        fog: !1
      });
    G.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
  }

  function Sr(t, e) {
    g.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
    var i = new Ce({
        fog: !1
      }),
      n = new B;
    n.addAttribute("position", new x(new Float32Array(15), 3)), this.line = new Oe(n, i), this.add(this.line), this.update()
  }

  function jr(t, e, i) {
    g.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
    var n = new Je(e);
    n.rotateY(.5 * Math.PI), this.material = new C({
      wireframe: !0,
      fog: !1
    }), void 0 === this.color && (this.material.vertexColors = 2);
    var r = n.getAttribute("position"),
      a = new Float32Array(3 * r.count);
    n.addAttribute("color", new x(a, 3)), this.add(new G(n, this.material)), this.update()
  }

  function Cr(t, e, i, n) {
    t = t || 10, e = e || 10, i = new O(void 0 !== i ? i : 4473924), n = new O(void 0 !== n ? n : 8947848);
    for(var r = e / 2, a = t / e, s = t / 2, o = [], c = [], h = 0, u = 0, l = -s; h <= e; h++, l += a) {
      o.push(-s, 0, l, s, 0, l), o.push(l, 0, -s, l, 0, s);
      var d = h === r ? i : n;
      d.toArray(c, u), u += 3, d.toArray(c, u), u += 3, d.toArray(c, u), u += 3, d.toArray(c, u), u += 3
    }
    var p = new B;
    p.addAttribute("position", new U(o, 3)), p.addAttribute("color", new U(c, 3));
    var f = new Ce({
      vertexColors: 2
    });
    ze.call(this, p, f)
  }

  function Or(t, e, i, n, r, a) {
    t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new O(void 0 !== r ? r : 4473924), a = new O(void 0 !== a ? a : 8947848);
    var s, o, c, h, u, l, d, p = [],
      f = [];
    for(h = 0; h <= e; h++) c = h / e * (2 * Math.PI), s = Math.sin(c) * t, o = Math.cos(c) * t, p.push(0, 0, 0), p.push(s, 0, o), d = 1 & h ? r : a, f.push(d.r, d.g, d.b), f.push(d.r, d.g, d.b);
    for(h = 0; h <= i; h++)
      for(d = 1 & h ? r : a, l = t - t / i * h, u = 0; u < n; u++) c = u / n * (2 * Math.PI), s = Math.sin(c) * l, o = Math.cos(c) * l, p.push(s, 0, o), f.push(d.r, d.g, d.b), c = (u + 1) / n * (2 * Math.PI), s = Math.sin(c) * l, o = Math.cos(c) * l, p.push(s, 0, o), f.push(d.r, d.g, d.b);
    var g = new B;
    g.addAttribute("position", new U(p, 3)), g.addAttribute("color", new U(f, 3));
    var m = new Ce({
      vertexColors: 2
    });
    ze.call(this, g, m)
  }

  function zr(t, e, i, n) {
    this.object = t, this.size = void 0 !== e ? e : 1;
    var r = void 0 !== i ? i : 16776960,
      a = void 0 !== n ? n : 1,
      s = 0,
      o = this.object.geometry;
    o && o.isGeometry && (s = o.faces.length);
    var c = new B,
      h = new U(2 * s * 3, 3);
    c.addAttribute("position", h), ze.call(this, c, new Ce({
      color: r,
      linewidth: a
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function Pr(t, e, i) {
    g.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
    var n = new B;
    n.addAttribute("position", new U([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
    var r = new Ce({
      fog: !1
    });
    this.lightPlane = new Oe(n, r), this.add(this.lightPlane), (n = new B).addAttribute("position", new U([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Oe(n, r), this.add(this.targetLine), this.update()
  }

  function Ur(t) {
    function e(t, e, i) {
      n(t, i), n(e, i)
    }

    function n(t, e) {
      a.push(0, 0, 0), s.push(e.r, e.g, e.b), void 0 === o[t] && (o[t] = []), o[t].push(a.length / 3 - 1)
    }
    var i = new B,
      r = new Ce({
        color: 16777215,
        vertexColors: 1
      }),
      a = [],
      s = [],
      o = {},
      c = new O(16755200),
      h = new O(16711680),
      u = new O(43775),
      l = new O(16777215),
      d = new O(3355443);
    e("n1", "n2", c), e("n2", "n4", c), e("n4", "n3", c), e("n3", "n1", c), e("f1", "f2", c), e("f2", "f4", c), e("f4", "f3", c), e("f3", "f1", c), e("n1", "f1", c), e("n2", "f2", c), e("n3", "f3", c), e("n4", "f4", c), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", u), e("u2", "u3", u), e("u3", "u1", u), e("c", "t", l), e("p", "c", d), e("cn1", "cn2", d), e("cn3", "cn4", d), e("cf1", "cf2", d), e("cf3", "cf4", d), i.addAttribute("position", new U(a, 3)), i.addAttribute("color", new U(s, 3)), ze.call(this, i, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update()
  }

  function Br(t, e) {
    this.object = t, void 0 === e && (e = 16776960);
    var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      n = new Float32Array(24),
      r = new B;
    r.setIndex(new x(i, 1)), r.addAttribute("position", new x(n, 3)), ze.call(this, r, new Ce({
      color: e
    })), this.matrixAutoUpdate = !1, this.update()
  }

  function kr(t, e) {
    this.type = "Box3Helper", this.box = t;
    var i = void 0 !== e ? e : 16776960,
      n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
      r = new B;
    r.setIndex(new x(n, 1)), r.addAttribute("position", new U([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), ze.call(this, r, new Ce({
      color: i
    })), this.geometry.computeBoundingSphere()
  }

  function Rr(t, e, i) {
    this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
    var n = void 0 !== i ? i : 16776960,
      r = new B;
    r.addAttribute("position", new U([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Oe.call(this, r, new Ce({
      color: n
    }));
    var a = new B;
    a.addAttribute("position", new U([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new G(a, new C({
      color: n,
      opacity: .2,
      transparent: !0,
      depthWrite: !1
    })))
  }

  function Fr(t, e, i, n, r, a) {
    g.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === Rl && ((Rl = new B).addAttribute("position", new U([0, 0, 0, 0, 1, 0], 3)), (Fl = new Wi(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Oe(Rl, new Ce({
      color: n
    })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new G(Fl, new C({
      color: n
    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
  }

  function Qr(t) {
    var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
      i = new B;
    i.addAttribute("position", new U(e, 3)), i.addAttribute("color", new U([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
    var n = new Ce({
      vertexColors: 2
    });
    ze.call(this, i, n)
  }

  function Gr(t) {
    gn.call(this, t), this.type = "catmullrom"
  }
  n = n && n.hasOwnProperty("default") ? n.default : n, xt = xt && xt.hasOwnProperty("default") ? xt.default : xt, N = N && N.hasOwnProperty("default") ? N.default : N;
  var Yr, Vr, Wr = i,
    Hr = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    Xr = (function(t, e) {
      t.exports = function() {
        function t(t) {
          this.config = n(n({}, s), t), this.polyfillDisplays = [], this.enabled = !1, this.hasNative = "getVRDisplays" in navigator, this.native = {}, this.native.getVRDisplays = navigator.getVRDisplays, this.native.VRFrameData = window.VRFrameData, this.native.VRDisplay = window.VRDisplay, (!this.hasNative || this.config.PROVIDE_MOBILE_VRDISPLAY && i()) && (this.enable(), this.getVRDisplays().then(function(t) {
            t && t[0] && t[0].fireVRDisplayConnect_ && t[0].fireVRDisplayConnect_()
          }))
        }
        var e = "undefined" != typeof window ? window : void 0 !== Hr ? Hr : "undefined" != typeof self ? self : {},
          i = function() {
            return /Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)
          },
          r = function(t, e) {
            for(var i = 0, n = t.length; i < n; i++) e[i] = t[i]
          },
          n = function(t, e) {
            for(var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
          },
          a = function(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
          }(function(t, e) {
            return t(e = {
              exports: {}
            }, e.exports), e.exports
          }(function(t, e) {
            t.exports = function() {
              function t(t, e, i) {
                if(e) {
                  for(var n = [], r = null, a = 0; a < e.length; ++a) switch(s = e[a]) {
                    case t.TEXTURE_BINDING_2D:
                    case t.TEXTURE_BINDING_CUBE_MAP:
                      if((c = e[++a]) < t.TEXTURE0 || c > t.TEXTURE31) {
                        n.push(null, null);
                        break
                      }
                      r = r || t.getParameter(t.ACTIVE_TEXTURE), t.activeTexture(c), n.push(t.getParameter(s), null);
                      break;
                    case t.ACTIVE_TEXTURE:
                      r = t.getParameter(t.ACTIVE_TEXTURE), n.push(null);
                      break;
                    default:
                      n.push(t.getParameter(s))
                  }
                  for(i(t), a = 0; a < e.length; ++a) {
                    var s = e[a],
                      o = n[a];
                    switch(s) {
                      case t.ACTIVE_TEXTURE:
                        break;
                      case t.ARRAY_BUFFER_BINDING:
                        t.bindBuffer(t.ARRAY_BUFFER, o);
                        break;
                      case t.COLOR_CLEAR_VALUE:
                        t.clearColor(o[0], o[1], o[2], o[3]);
                        break;
                      case t.COLOR_WRITEMASK:
                        t.colorMask(o[0], o[1], o[2], o[3]);
                        break;
                      case t.CURRENT_PROGRAM:
                        t.useProgram(o);
                        break;
                      case t.ELEMENT_ARRAY_BUFFER_BINDING:
                        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, o);
                        break;
                      case t.FRAMEBUFFER_BINDING:
                        t.bindFramebuffer(t.FRAMEBUFFER, o);
                        break;
                      case t.RENDERBUFFER_BINDING:
                        t.bindRenderbuffer(t.RENDERBUFFER, o);
                        break;
                      case t.TEXTURE_BINDING_2D:
                        if((c = e[++a]) < t.TEXTURE0 || c > t.TEXTURE31) break;
                        t.activeTexture(c), t.bindTexture(t.TEXTURE_2D, o);
                        break;
                      case t.TEXTURE_BINDING_CUBE_MAP:
                        var c;
                        if((c = e[++a]) < t.TEXTURE0 || c > t.TEXTURE31) break;
                        t.activeTexture(c), t.bindTexture(t.TEXTURE_CUBE_MAP, o);
                        break;
                      case t.VIEWPORT:
                        t.viewport(o[0], o[1], o[2], o[3]);
                        break;
                      case t.BLEND:
                      case t.CULL_FACE:
                      case t.DEPTH_TEST:
                      case t.SCISSOR_TEST:
                      case t.STENCIL_TEST:
                        o ? t.enable(s) : t.disable(s)
                    }
                    r && t.activeTexture(r)
                  }
                } else i(t)
              }

              function e(t, e, i, n) {
                this.gl = t, this.cardboardUI = e, this.bufferScale = i, this.dirtySubmitFrameBindings = n, this.ctxAttribs = t.getContextAttributes(), this.meshWidth = 20, this.meshHeight = 20, this.bufferWidth = t.drawingBufferWidth, this.bufferHeight = t.drawingBufferHeight, this.realBindFramebuffer = t.bindFramebuffer, this.realEnable = t.enable, this.realDisable = t.disable, this.realColorMask = t.colorMask, this.realClearColor = t.clearColor, this.realViewport = t.viewport, x() || (this.realCanvasWidth = Object.getOwnPropertyDescriptor(t.canvas.__proto__, "width"), this.realCanvasHeight = Object.getOwnPropertyDescriptor(t.canvas.__proto__, "height")), this.isPatched = !1, this.lastBoundFramebuffer = null, this.cullFace = !1, this.depthTest = !1, this.blend = !1, this.scissorTest = !1, this.stencilTest = !1, this.viewport = [0, 0, 0, 0], this.colorMask = [!0, !0, !0, !0], this.clearColor = [0, 0, 0, 0], this.attribs = {
                  position: 0,
                  texCoord: 1
                }, this.program = O(t, Y, V, this.attribs), this.uniforms = z(t, this.program), this.viewportOffsetScale = new Float32Array(8), this.setTextureBounds(), this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.indexCount = 0, this.renderTarget = t.createTexture(), this.framebuffer = t.createFramebuffer(), this.depthStencilBuffer = null, this.depthBuffer = null, this.stencilBuffer = null, this.ctxAttribs.depth && this.ctxAttribs.stencil ? this.depthStencilBuffer = t.createRenderbuffer() : this.ctxAttribs.depth ? this.depthBuffer = t.createRenderbuffer() : this.ctxAttribs.stencil && (this.stencilBuffer = t.createRenderbuffer()), this.patch(), this.onResize()
              }

              function i(t) {
                this.gl = t, this.attribs = {
                  position: 0
                }, this.program = O(t, W, H, this.attribs), this.uniforms = z(t, this.program), this.vertexBuffer = t.createBuffer(), this.gearOffset = 0, this.gearVertexCount = 0, this.arrowOffset = 0, this.arrowVertexCount = 0, this.projMat = new Float32Array(16), this.listener = null, this.onResize()
              }

              function r(t) {
                this.coefficients = t
              }

              function a(t) {
                this.width = t.width || b(), this.height = t.height || S(), this.widthMeters = t.widthMeters, this.heightMeters = t.heightMeters, this.bevelMeters = t.bevelMeters
              }

              function n(t, e) {
                this.viewer = et.CardboardV2, this.updateDeviceParams(t), this.distortion = new r(this.viewer.distortionCoefficients);
                for(var i = 0; i < e.length; i++) {
                  var n = e[i];
                  et[n.id] = new s(n)
                }
              }

              function s(t) {
                this.id = t.id, this.label = t.label, this.fov = t.fov, this.interLensDistance = t.interLensDistance, this.baselineLensDistance = t.baselineLensDistance, this.screenLensDistance = t.screenLensDistance, this.distortionCoefficients = t.distortionCoefficients, this.inverseCoefficients = t.inverseCoefficients
              }

              function o(t, e) {
                if(this.dpdb = it, this.recalculateDeviceParams_(), t) {
                  this.onDeviceParamsUpdated = e;
                  var i = new XMLHttpRequest,
                    n = this;
                  i.open("GET", t, !0), i.addEventListener("load", function() {
                    n.loading = !1, 200 <= i.status && i.status <= 299 && (n.dpdb = JSON.parse(i.response), n.recalculateDeviceParams_())
                  }), i.send()
                }
              }

              function l(t) {
                this.xdpi = t.xdpi, this.ydpi = t.ydpi, this.bevelMm = t.bevelMm
              }

              function c(t, e) {
                this.set(t, e)
              }

              function h(t, e) {
                this.kFilter = t, this.isDebug = e, this.currentAccelMeasurement = new c, this.currentGyroMeasurement = new c, this.previousGyroMeasurement = new c, x() ? this.filterQ = new K(-1, 0, 0, 1) : this.filterQ = new K(1, 0, 0, 1), this.previousFilterQ = new K, this.previousFilterQ.copy(this.filterQ), this.accelQ = new K, this.isOrientationInitialized = !1, this.estimatedGravity = new J, this.measuredGravity = new J, this.gyroIntegralQ = new K
              }

              function u(t, e) {
                this.predictionTimeS = t, this.isDebug = e, this.previousQ = new K, this.previousTimestampS = null, this.deltaQ = new K, this.outQ = new K
              }

              function d(t, e, i, n) {
                this.yawOnly = i, this.accelerometer = new J, this.gyroscope = new J, this.filter = new h(t, n), this.posePredictor = new u(e, n), this.isFirefoxAndroid = D(), this.isIOS = x();
                var r = T();
                this.isDeviceMotionInRadians = !this.isIOS && r && r < 66, this.isWithoutDeviceMotion = L(), this.filterToWorldQ = new K, x() ? this.filterToWorldQ.setFromAxisAngle(new J(1, 0, 0), Math.PI / 2) : this.filterToWorldQ.setFromAxisAngle(new J(1, 0, 0), -Math.PI / 2), this.inverseWorldToScreenQ = new K, this.worldToScreenQ = new K, this.originalPoseAdjustQ = new K, this.originalPoseAdjustQ.setFromAxisAngle(new J(0, 0, 1), -window.orientation * Math.PI / 180), this.setScreenTransform_(), I() && this.filterToWorldQ.multiply(this.inverseWorldToScreenQ), this.resetQ = new K, this.orientationOut_ = new Float32Array(4), this.start()
              }

              function p() {
                this.loadIcon_();
                var t = document.createElement("div"),
                  e = t.style;
                e.position = "fixed", e.top = 0, e.right = 0, e.bottom = 0, e.left = 0, e.backgroundColor = "gray", e.fontFamily = "sans-serif", e.zIndex = 1e6;
                var i = document.createElement("img");
                i.src = this.icon;
                var e = i.style;
                e.marginLeft = "25%", e.marginTop = "25%", e.width = "50%", t.appendChild(i);
                var n = document.createElement("div"),
                  e = n.style;
                e.textAlign = "center", e.fontSize = "16px", e.lineHeight = "24px", e.margin = "24px 25%", e.width = "50%", n.innerHTML = "Place your phone into your Cardboard viewer.", t.appendChild(n);
                var r = document.createElement("div"),
                  e = r.style;
                e.backgroundColor = "#CFD8DC", e.position = "fixed", e.bottom = 0, e.width = "100%", e.height = "48px", e.padding = "14px 24px", e.boxSizing = "border-box", e.color = "#656A6B", t.appendChild(r);
                var a = document.createElement("div");
                a.style.float = "left", a.innerHTML = "No Cardboard viewer?";
                var s = document.createElement("a");
                s.href = "https://www.google.com/get/cardboard/get-cardboard/", s.innerHTML = "get one", s.target = "_blank";
                var e = s.style;
                e.float = "right", e.fontWeight = 600, e.textTransform = "uppercase", e.borderLeft = "1px solid gray", e.paddingLeft = "24px", e.textDecoration = "none", e.color = "#656A6B", r.appendChild(a), r.appendChild(s), this.overlay = t, this.text = n, this.hide()
              }

              function f(t) {
                try {
                  this.selectedKey = localStorage.getItem(ht)
                } catch (t) {}
                this.selectedKey || (this.selectedKey = t || ct), this.dialog = this.createDialog_(n.Viewers), this.root = null, this.onChangeCallbacks_ = []
              }

              function g(t) {
                Object.defineProperties(this, {
                  hasPosition: {
                    writable: !1,
                    enumerable: !0,
                    value: t.hasPosition
                  },
                  hasExternalDisplay: {
                    writable: !1,
                    enumerable: !0,
                    value: t.hasExternalDisplay
                  },
                  canPresent: {
                    writable: !1,
                    enumerable: !0,
                    value: t.canPresent
                  },
                  maxLayers: {
                    writable: !1,
                    enumerable: !0,
                    value: t.maxLayers
                  },
                  hasOrientation: {
                    enumerable: !0,
                    get: function() {
                      return Q("VRDisplayCapabilities.prototype.hasOrientation", "VRDisplay.prototype.getFrameData"), t.hasOrientation
                    }
                  }
                })
              }

              function m(t) {
                var e = !("wakelock" in (t = t || {})) || t.wakelock;
                this.isPolyfilled = !0, this.displayId = ft++, this.displayName = "", this.depthNear = .01, this.depthFar = 1e4, this.isPresenting = !1, Object.defineProperty(this, "isConnected", {
                  get: function() {
                    return Q("VRDisplay.prototype.isConnected", "VRDisplayCapabilities.prototype.hasExternalDisplay"), !1
                  }
                }), this.capabilities = new g({
                  hasPosition: !1,
                  hasOrientation: !1,
                  hasExternalDisplay: !1,
                  canPresent: !1,
                  maxLayers: 1
                }), this.stageParameters = null, this.waitingForPresent_ = !1, this.layer_ = null, this.originalParent_ = null, this.fullscreenElement_ = null, this.fullscreenWrapper_ = null, this.fullscreenElementCachedStyle_ = null, this.fullscreenEventTarget_ = null, this.fullscreenChangeHandler_ = null, this.fullscreenErrorHandler_ = null, e && P() && (this.wakelock_ = new pt)
              }

              function M(t) {
                var e = U({}, yt);
                t = U(e, t || {}), m.call(this, {
                  wakelock: t.MOBILE_WAKE_LOCK
                }), this.config = t, this.displayName = "Cardboard VRDisplay", this.capabilities = new g({
                  hasPosition: !1,
                  hasOrientation: !0,
                  hasExternalDisplay: !1,
                  canPresent: !0,
                  maxLayers: 1
                }), this.stageParameters = null, this.bufferScale_ = this.config.BUFFER_SCALE, this.poseSensor_ = new ot(this.config), this.distorter_ = null, this.cardboardUI_ = null, this.dpdb_ = new o(this.config.DPDB_URL, this.onDeviceParamsUpdated_.bind(this)), this.deviceInfo_ = new n(this.dpdb_.getDeviceParams(), t.ADDITIONAL_VIEWERS), this.viewerSelector_ = new f(t.DEFAULT_VIEWER), this.viewerSelector_.onChange(this.onViewerChanged_.bind(this)), this.deviceInfo_.setViewer(this.viewerSelector_.getCurrentViewer()), this.config.ROTATE_INSTRUCTIONS_DISABLED || (this.rotateInstructions_ = new p), x()
              }
              var v = function(t, e) {
                  if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                y = function() {
                  function n(t, e) {
                    for(var i = 0; i < e.length; i++) {
                      var n = e[i];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                  }
                  return function(t, e, i) {
                    return e && n(t.prototype, e), i && n(t, i), t
                  }
                }(),
                A = function() {
                  function i(t, e) {
                    var i = [],
                      n = !0,
                      r = !1,
                      a = void 0;
                    try {
                      for(var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                    } catch (t) {
                      r = !0, a = t
                    } finally {
                      try {
                        !n && o.return && o.return()
                      } finally {
                        if(r) throw a
                      }
                    }
                    return i
                  }
                  return function(t, e) {
                    if(Array.isArray(t)) return t;
                    if(Symbol.iterator in Object(t)) return i(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                  }
                }(),
                w = function(t, e, i) {
                  return t + (e - t) * i
                },
                x = function() {
                  var t = /iPad|iPhone|iPod/.test(navigator.platform);
                  return function() {
                    return t
                  }
                }(),
                N = function() {
                  var t = -1 !== navigator.userAgent.indexOf("Version") && -1 !== navigator.userAgent.indexOf("Android") && -1 !== navigator.userAgent.indexOf("Chrome");
                  return function() {
                    return t
                  }
                }(),
                D = (function() {
                  var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                }(), function() {
                  var t = -1 !== navigator.userAgent.indexOf("Firefox") && -1 !== navigator.userAgent.indexOf("Android");
                  return function() {
                    return t
                  }
                }()),
                T = function() {
                  var t = navigator.userAgent.match(/.*Chrome\/([0-9]+)/),
                    e = t ? parseInt(t[1], 10) : null;
                  return function() {
                    return e
                  }
                }(),
                L = function() {
                  var t = !1;
                  if(65 === T()) {
                    var e = navigator.userAgent.match(/.*Chrome\/([0-9\.]*)/);
                    if(e) {
                      var i = e[1].split("."),
                        n = A(i, 4),
                        r = (n[0], n[1], n[2]),
                        a = n[3];
                      t = 3325 === parseInt(r, 10) && parseInt(a, 10) < 148
                    }
                  }
                  return function() {
                    return t
                  }
                }(),
                E = function() {
                  var t = -1 !== navigator.userAgent.indexOf("R7 Build");
                  return function() {
                    return t
                  }
                }(),
                I = function() {
                  var t = 90 == window.orientation || -90 == window.orientation;
                  return E() ? !t : t
                },
                _ = function(t) {
                  return !isNaN(t) && (!(t <= .001) && !(1 < t))
                },
                b = function() {
                  return Math.max(window.screen.width, window.screen.height) * window.devicePixelRatio
                },
                S = function() {
                  return Math.min(window.screen.width, window.screen.height) * window.devicePixelRatio
                },
                j = function(t) {
                  if(N()) return !1;
                  if(t.requestFullscreen) t.requestFullscreen();
                  else if(t.webkitRequestFullscreen) t.webkitRequestFullscreen();
                  else if(t.mozRequestFullScreen) t.mozRequestFullScreen();
                  else {
                    if(!t.msRequestFullscreen) return !1;
                    t.msRequestFullscreen()
                  }
                  return !1
                },
                C = function() {
                  if(document.exitFullscreen) document.exitFullscreen();
                  else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
                  else if(document.mozCancelFullScreen) document.mozCancelFullScreen();
                  else {
                    if(!document.msExitFullscreen) return !1;
                    document.msExitFullscreen()
                  }
                  return !0
                },
                O = function(t, e, i, n) {
                  var r = t.createShader(t.VERTEX_SHADER);
                  t.shaderSource(r, e), t.compileShader(r);
                  var a = t.createShader(t.FRAGMENT_SHADER);
                  t.shaderSource(a, i), t.compileShader(a);
                  var s = t.createProgram();
                  for(var o in t.attachShader(s, r), t.attachShader(s, a), n) t.bindAttribLocation(s, n[o], o);
                  return t.linkProgram(s), t.deleteShader(r), t.deleteShader(a), s
                },
                z = function(t, e) {
                  for(var i = {}, n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = "", a = 0; a < n; a++) {
                    var s = t.getActiveUniform(e, a);
                    r = s.name.replace("[0]", ""), i[r] = t.getUniformLocation(e, r)
                  }
                  return i
                },
                P = function() {
                  var e = !1;
                  return function(t) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                  }(navigator.userAgent || navigator.vendor || window.opera), e
                },
                U = function(t, e) {
                  for(var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                  return t
                },
                B = function(t) {
                  if(x()) {
                    var e = t.style.width,
                      i = t.style.height;
                    t.style.width = parseInt(e) + 1 + "px", t.style.height = parseInt(i) + "px", setTimeout(function() {
                      t.style.width = e, t.style.height = i
                    }, 100)
                  }
                  window.canvas = t
                },
                k = function() {
                  function ft(t, e, i) {
                    var n, r, a, s, o, c, h, u, l, d, p, f, g = i[0],
                      m = i[1],
                      M = i[2];
                    return e === t ? (t[12] = e[0] * g + e[4] * m + e[8] * M + e[12], t[13] = e[1] * g + e[5] * m + e[9] * M + e[13], t[14] = e[2] * g + e[6] * m + e[10] * M + e[14], t[15] = e[3] * g + e[7] * m + e[11] * M + e[15]) : (n = e[0], r = e[1], a = e[2], s = e[3], o = e[4], c = e[5], h = e[6], u = e[7], l = e[8], d = e[9], p = e[10], f = e[11], t[0] = n, t[1] = r, t[2] = a, t[3] = s, t[4] = o, t[5] = c, t[6] = h, t[7] = u, t[8] = l, t[9] = d, t[10] = p, t[11] = f, t[12] = n * g + o * m + l * M + e[12], t[13] = r * g + c * m + d * M + e[13], t[14] = a * g + h * m + p * M + e[14], t[15] = s * g + u * m + f * M + e[15]), t
                  }

                  function n(t, e, i, n, r, a) {
                    var s, o, c, h, u, l, d, p, f, g;
                    s = t, o = n || null, c = a.depthNear, h = a.depthFar, u = Math.tan(o ? o.upDegrees * gt : mt), l = Math.tan(o ? o.downDegrees * gt : mt), d = Math.tan(o ? o.leftDegrees * gt : mt), p = Math.tan(o ? o.rightDegrees * gt : mt), f = 2 / (d + p), g = 2 / (u + l), s[0] = f, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = g, s[6] = 0, s[7] = 0, s[8] = -(d - p) * f * .5, s[9] = (u - l) * g * .5, s[10] = h / (c - h), s[11] = -1, s[12] = 0, s[13] = 0, s[14] = h * c / (c - h), s[15] = 0;
                    var m, M, v, y, A, x, w, N, D, T, L, E, I, _, b, S, j, C, O, z, P, U, B, k, R, F, Q, G, Y, V, W, H, X, Z, q, J, K, $, tt, et, it, nt, rt, at, st, ot, ct, ht, ut, lt, dt = i.orientation || Mt,
                      pt = i.position || vt;
                    m = e, v = pt, y = (M = dt)[0], A = M[1], x = M[2], w = M[3], L = y * (N = y + y), E = y * (D = A + A), I = y * (T = x + x), _ = A * D, b = A * T, S = x * T, j = w * N, C = w * D, O = w * T, m[0] = 1 - (_ + S), m[1] = E + O, m[2] = I - C, m[3] = 0, m[4] = E - O, m[5] = 1 - (L + S), m[6] = b + j, m[7] = 0, m[8] = I + C, m[9] = b - j, m[10] = 1 - (L + _), m[11] = 0, m[12] = v[0], m[13] = v[1], m[14] = v[2], m[15] = 1, r && ft(e, e, r), U = (P = z = e)[0], B = P[1], k = P[2], R = P[3], F = P[4], Q = P[5], G = P[6], Y = P[7], V = P[8], W = P[9], H = P[10], X = P[11], Z = P[12], q = P[13], J = P[14], K = P[15], (lt = ($ = U * Q - B * F) * (ut = H * K - X * J) - (tt = U * G - k * F) * (ht = W * K - X * q) + (et = U * Y - R * F) * (ct = W * J - H * q) + (it = B * G - k * Q) * (ot = V * K - X * Z) - (nt = B * Y - R * Q) * (st = V * J - H * Z) + (rt = k * Y - R * G) * (at = V * q - W * Z)) && (lt = 1 / lt, z[0] = (Q * ut - G * ht + Y * ct) * lt, z[1] = (k * ht - B * ut - R * ct) * lt, z[2] = (q * rt - J * nt + K * it) * lt, z[3] = (H * nt - W * rt - X * it) * lt, z[4] = (G * ot - F * ut - Y * st) * lt, z[5] = (U * ut - k * ot + R * st) * lt, z[6] = (J * et - Z * rt - K * tt) * lt, z[7] = (V * rt - H * et + X * tt) * lt, z[8] = (F * ht - Q * ot + Y * at) * lt, z[9] = (B * ot - U * ht - R * at) * lt, z[10] = (Z * nt - q * et + K * $) * lt, z[11] = (W * et - V * nt - X * $) * lt, z[12] = (Q * st - F * ct - G * at) * lt, z[13] = (U * ct - B * st + k * at) * lt, z[14] = (q * tt - Z * it - J * $) * lt, z[15] = (V * it - W * tt + H * $) * lt)
                  }
                  var gt = Math.PI / 180,
                    mt = .25 * Math.PI,
                    Mt = new Float32Array([0, 0, 0, 1]),
                    vt = new Float32Array([0, 0, 0]);
                  return function(t, e, i) {
                    return !(!t || !e) && (t.pose = e, t.timestamp = e.timestamp, n(t.leftProjectionMatrix, t.leftViewMatrix, e, i._getFieldOfView("left"), i._getEyeOffset("left"), i), n(t.rightProjectionMatrix, t.rightViewMatrix, e, i._getFieldOfView("right"), i._getEyeOffset("right"), i), !0)
                  }
                }(),
                R = function(t) {
                  var e, i = t.indexOf("://");
                  e = -1 !== i ? i + 3 : 0;
                  var n = t.indexOf("/", e);
                  return -1 === n && (n = t.length), t.substring(0, n)
                },
                F = function() {
                  var i = {};
                  return function(t, e) {
                    void 0 === i[t] && (i[t] = !0)
                  }
                }(),
                Q = function(t, e) {
                  var i = e ? "Please use " + e + " instead." : "";
                  F(t, t + " has been deprecated. This may not work on native WebVR displays. " + i)
                },
                G = t,
                Y = ["attribute vec2 position;", "attribute vec3 texCoord;", "varying vec2 vTexCoord;", "uniform vec4 viewportOffsetScale[2];", "void main() {", "  vec4 viewport = viewportOffsetScale[int(texCoord.z)];", "  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;", "  gl_Position = vec4( position, 1.0, 1.0 );", "}"].join("\n"),
                V = ["precision mediump float;", "uniform sampler2D diffuse;", "varying vec2 vTexCoord;", "void main() {", "  gl_FragColor = texture2D(diffuse, vTexCoord);", "}"].join("\n");
              e.prototype.destroy = function() {
                var t = this.gl;
                this.unpatch(), t.deleteProgram(this.program), t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer), t.deleteTexture(this.renderTarget), t.deleteFramebuffer(this.framebuffer), this.depthStencilBuffer && t.deleteRenderbuffer(this.depthStencilBuffer), this.depthBuffer && t.deleteRenderbuffer(this.depthBuffer), this.stencilBuffer && t.deleteRenderbuffer(this.stencilBuffer), this.cardboardUI && this.cardboardUI.destroy()
              }, e.prototype.onResize = function() {
                var t = this.gl,
                  e = this,
                  i = [t.RENDERBUFFER_BINDING, t.TEXTURE_BINDING_2D, t.TEXTURE0];
                G(t, i, function(t) {
                  e.realBindFramebuffer.call(t, t.FRAMEBUFFER, null), e.scissorTest && e.realDisable.call(t, t.SCISSOR_TEST), e.realColorMask.call(t, !0, !0, !0, !0), e.realViewport.call(t, 0, 0, t.drawingBufferWidth, t.drawingBufferHeight), e.realClearColor.call(t, 0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT), e.realBindFramebuffer.call(t, t.FRAMEBUFFER, e.framebuffer), t.bindTexture(t.TEXTURE_2D, e.renderTarget), t.texImage2D(t.TEXTURE_2D, 0, e.ctxAttribs.alpha ? t.RGBA : t.RGB, e.bufferWidth, e.bufferHeight, 0, e.ctxAttribs.alpha ? t.RGBA : t.RGB, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, e.renderTarget, 0), e.ctxAttribs.depth && e.ctxAttribs.stencil ? (t.bindRenderbuffer(t.RENDERBUFFER, e.depthStencilBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, e.bufferWidth, e.bufferHeight), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e.depthStencilBuffer)) : e.ctxAttribs.depth ? (t.bindRenderbuffer(t.RENDERBUFFER, e.depthBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, e.bufferWidth, e.bufferHeight), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e.depthBuffer)) : e.ctxAttribs.stencil && (t.bindRenderbuffer(t.RENDERBUFFER, e.stencilBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.STENCIL_INDEX8, e.bufferWidth, e.bufferHeight), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.STENCIL_ATTACHMENT, t.RENDERBUFFER, e.stencilBuffer)), t.checkFramebufferStatus(t.FRAMEBUFFER), t.FRAMEBUFFER_COMPLETE, e.realBindFramebuffer.call(t, t.FRAMEBUFFER, e.lastBoundFramebuffer), e.scissorTest && e.realEnable.call(t, t.SCISSOR_TEST), e.realColorMask.apply(t, e.colorMask), e.realViewport.apply(t, e.viewport), e.realClearColor.apply(t, e.clearColor)
                }), this.cardboardUI && this.cardboardUI.onResize()
              }, e.prototype.patch = function() {
                if(!this.isPatched) {
                  var r = this,
                    e = this.gl.canvas,
                    a = this.gl;
                  x() || (e.width = b() * this.bufferScale, e.height = S() * this.bufferScale, Object.defineProperty(e, "width", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                      return r.bufferWidth
                    },
                    set: function(t) {
                      r.bufferWidth = t, r.realCanvasWidth.set.call(e, t), r.onResize()
                    }
                  }), Object.defineProperty(e, "height", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                      return r.bufferHeight
                    },
                    set: function(t) {
                      r.bufferHeight = t, r.realCanvasHeight.set.call(e, t), r.onResize()
                    }
                  })), this.lastBoundFramebuffer = a.getParameter(a.FRAMEBUFFER_BINDING), null == this.lastBoundFramebuffer && (this.lastBoundFramebuffer = this.framebuffer, this.gl.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer)), this.gl.bindFramebuffer = function(t, e) {
                    r.lastBoundFramebuffer = e || r.framebuffer, r.realBindFramebuffer.call(a, t, r.lastBoundFramebuffer)
                  }, this.cullFace = a.getParameter(a.CULL_FACE), this.depthTest = a.getParameter(a.DEPTH_TEST), this.blend = a.getParameter(a.BLEND), this.scissorTest = a.getParameter(a.SCISSOR_TEST), this.stencilTest = a.getParameter(a.STENCIL_TEST), a.enable = function(t) {
                    switch(t) {
                      case a.CULL_FACE:
                        r.cullFace = !0;
                        break;
                      case a.DEPTH_TEST:
                        r.depthTest = !0;
                        break;
                      case a.BLEND:
                        r.blend = !0;
                        break;
                      case a.SCISSOR_TEST:
                        r.scissorTest = !0;
                        break;
                      case a.STENCIL_TEST:
                        r.stencilTest = !0
                    }
                    r.realEnable.call(a, t)
                  }, a.disable = function(t) {
                    switch(t) {
                      case a.CULL_FACE:
                        r.cullFace = !1;
                        break;
                      case a.DEPTH_TEST:
                        r.depthTest = !1;
                        break;
                      case a.BLEND:
                        r.blend = !1;
                        break;
                      case a.SCISSOR_TEST:
                        r.scissorTest = !1;
                        break;
                      case a.STENCIL_TEST:
                        r.stencilTest = !1
                    }
                    r.realDisable.call(a, t)
                  }, this.colorMask = a.getParameter(a.COLOR_WRITEMASK), a.colorMask = function(t, e, i, n) {
                    r.colorMask[0] = t, r.colorMask[1] = e, r.colorMask[2] = i, r.colorMask[3] = n, r.realColorMask.call(a, t, e, i, n)
                  }, this.clearColor = a.getParameter(a.COLOR_CLEAR_VALUE), a.clearColor = function(t, e, i, n) {
                    r.clearColor[0] = t, r.clearColor[1] = e, r.clearColor[2] = i, r.clearColor[3] = n, r.realClearColor.call(a, t, e, i, n)
                  }, this.viewport = a.getParameter(a.VIEWPORT), a.viewport = function(t, e, i, n) {
                    r.viewport[0] = t, r.viewport[1] = e, r.viewport[2] = i, r.viewport[3] = n, r.realViewport.call(a, t, e, i, n)
                  }, this.isPatched = !0, B(e)
                }
              }, e.prototype.unpatch = function() {
                if(this.isPatched) {
                  var t = this.gl,
                    e = this.gl.canvas;
                  x() || (Object.defineProperty(e, "width", this.realCanvasWidth), Object.defineProperty(e, "height", this.realCanvasHeight)), e.width = this.bufferWidth, e.height = this.bufferHeight, t.bindFramebuffer = this.realBindFramebuffer, t.enable = this.realEnable, t.disable = this.realDisable, t.colorMask = this.realColorMask, t.clearColor = this.realClearColor, t.viewport = this.realViewport, this.lastBoundFramebuffer == this.framebuffer && t.bindFramebuffer(t.FRAMEBUFFER, null), this.isPatched = !1, setTimeout(function() {
                    B(e)
                  }, 1)
                }
              }, e.prototype.setTextureBounds = function(t, e) {
                t = t || [0, 0, .5, 1], e = e || [.5, 0, .5, 1], this.viewportOffsetScale[0] = t[0], this.viewportOffsetScale[1] = t[1], this.viewportOffsetScale[2] = t[2], this.viewportOffsetScale[3] = t[3], this.viewportOffsetScale[4] = e[0], this.viewportOffsetScale[5] = e[1], this.viewportOffsetScale[6] = e[2], this.viewportOffsetScale[7] = e[3]
              }, e.prototype.submitFrame = function() {
                var t = this.gl,
                  e = this,
                  i = [];
                if(this.dirtySubmitFrameBindings || i.push(t.CURRENT_PROGRAM, t.ARRAY_BUFFER_BINDING, t.ELEMENT_ARRAY_BUFFER_BINDING, t.TEXTURE_BINDING_2D, t.TEXTURE0), G(t, i, function(t) {
                    e.realBindFramebuffer.call(t, t.FRAMEBUFFER, null), e.cullFace && e.realDisable.call(t, t.CULL_FACE), e.depthTest && e.realDisable.call(t, t.DEPTH_TEST), e.blend && e.realDisable.call(t, t.BLEND), e.scissorTest && e.realDisable.call(t, t.SCISSOR_TEST), e.stencilTest && e.realDisable.call(t, t.STENCIL_TEST), e.realColorMask.call(t, !0, !0, !0, !0), e.realViewport.call(t, 0, 0, t.drawingBufferWidth, t.drawingBufferHeight), (e.ctxAttribs.alpha || x()) && (e.realClearColor.call(t, 0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT)), t.useProgram(e.program), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.indexBuffer), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffer), t.enableVertexAttribArray(e.attribs.position), t.enableVertexAttribArray(e.attribs.texCoord), t.vertexAttribPointer(e.attribs.position, 2, t.FLOAT, !1, 20, 0), t.vertexAttribPointer(e.attribs.texCoord, 3, t.FLOAT, !1, 20, 8), t.activeTexture(t.TEXTURE0), t.uniform1i(e.uniforms.diffuse, 0), t.bindTexture(t.TEXTURE_2D, e.renderTarget), t.uniform4fv(e.uniforms.viewportOffsetScale, e.viewportOffsetScale), t.drawElements(t.TRIANGLES, e.indexCount, t.UNSIGNED_SHORT, 0), e.cardboardUI && e.cardboardUI.renderNoState(), e.realBindFramebuffer.call(e.gl, t.FRAMEBUFFER, e.framebuffer), e.ctxAttribs.preserveDrawingBuffer || (e.realClearColor.call(t, 0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT)), e.dirtySubmitFrameBindings || e.realBindFramebuffer.call(t, t.FRAMEBUFFER, e.lastBoundFramebuffer), e.cullFace && e.realEnable.call(t, t.CULL_FACE), e.depthTest && e.realEnable.call(t, t.DEPTH_TEST), e.blend && e.realEnable.call(t, t.BLEND), e.scissorTest && e.realEnable.call(t, t.SCISSOR_TEST), e.stencilTest && e.realEnable.call(t, t.STENCIL_TEST), e.realColorMask.apply(t, e.colorMask), e.realViewport.apply(t, e.viewport), !e.ctxAttribs.alpha && e.ctxAttribs.preserveDrawingBuffer || e.realClearColor.apply(t, e.clearColor)
                  }), x()) {
                  var n = t.canvas;
                  n.width == e.bufferWidth && n.height == e.bufferHeight || (e.bufferWidth = n.width, e.bufferHeight = n.height, e.onResize())
                }
              }, e.prototype.updateDeviceInfo = function(n) {
                var t = this.gl,
                  r = this,
                  e = [t.ARRAY_BUFFER_BINDING, t.ELEMENT_ARRAY_BUFFER_BINDING];
                G(t, e, function(t) {
                  var e = r.computeMeshVertices_(r.meshWidth, r.meshHeight, n);
                  if(t.bindBuffer(t.ARRAY_BUFFER, r.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW), !r.indexCount) {
                    var i = r.computeMeshIndices_(r.meshWidth, r.meshHeight);
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, i, t.STATIC_DRAW), r.indexCount = i.length
                  }
                })
              }, e.prototype.computeMeshVertices_ = function(t, e, i) {
                for(var n = new Float32Array(2 * t * e * 5), r = i.getLeftEyeVisibleTanAngles(), a = i.getLeftEyeNoLensTanAngles(), s = i.getLeftEyeVisibleScreenRect(a), o = 0, c = 0; c < 2; c++) {
                  for(var h = 0; h < e; h++)
                    for(var u = 0; u < t; u++, o++) {
                      var l = u / (t - 1),
                        d = h / (e - 1),
                        p = l,
                        f = d,
                        g = w(r[0], r[2], l),
                        m = w(r[3], r[1], d),
                        M = Math.sqrt(g * g + m * m),
                        v = i.distortion.distortInverse(M),
                        y = g * v / M,
                        A = m * v / M;
                      l = (y - a[0]) / (a[2] - a[0]), d = (A - a[3]) / (a[1] - a[3]), l = 2 * (s.x + l * s.width - .5), d = 2 * (s.y + d * s.height - .5), n[5 * o + 0] = l, n[5 * o + 1] = d, n[5 * o + 2] = p, n[5 * o + 3] = f, n[5 * o + 4] = c
                    }
                  var x = r[2] - r[0];
                  r[0] = -(x + r[0]), r[2] = x - r[2], x = a[2] - a[0], a[0] = -(x + a[0]), a[2] = x - a[2], s.x = 1 - (s.x + s.width)
                }
                return n
              }, e.prototype.computeMeshIndices_ = function(t, e) {
                for(var i = new Uint16Array(2 * (t - 1) * (e - 1) * 6), n = t / 2, r = e / 2, a = 0, s = 0, o = 0; o < 2; o++)
                  for(var c = 0; c < e; c++)
                    for(var h = 0; h < t; h++, a++) 0 != h && 0 != c && (h <= n == c <= r ? (i[s++] = a, i[s++] = a - t - 1, i[s++] = a - t, i[s++] = a - t - 1, i[s++] = a, i[s++] = a - 1) : (i[s++] = a - 1, i[s++] = a - t, i[s++] = a, i[s++] = a - t, i[s++] = a - 1, i[s++] = a - t - 1));
                return i
              }, e.prototype.getOwnPropertyDescriptor_ = function(t, e) {
                var i = Object.getOwnPropertyDescriptor(t, e);
                return void 0 !== i.get && void 0 !== i.set || (i.configurable = !0, i.enumerable = !0, i.get = function() {
                  return this.getAttribute(e)
                }, i.set = function(t) {
                  this.setAttribute(e, t)
                }), i
              };
              var W = ["attribute vec2 position;", "uniform mat4 projectionMat;", "void main() {", "  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );", "}"].join("\n"),
                H = ["precision mediump float;", "uniform vec4 color;", "void main() {", "  gl_FragColor = color;", "}"].join("\n"),
                X = Math.PI / 180;
              i.prototype.destroy = function() {
                var t = this.gl;
                this.listener && t.canvas.removeEventListener("click", this.listener, !1), t.deleteProgram(this.program), t.deleteBuffer(this.vertexBuffer)
              }, i.prototype.listen = function(a, s) {
                var o = this.gl.canvas;
                this.listener = function(t) {
                  var e = o.clientWidth / 2,
                    i = t.clientX,
                    n = t.clientY;
                  try {
                    var r = t.touches[0]
                  } catch (t) {}
                  if(r && (i = r.clientX, n = r.clientY), e - 42 < i && i < 42 + e && n > o.clientHeight - 42) t.preventDefault(), a(t);
                  else if(i < 42 && n < 42) return s(t), !1
                }, "ontouchstart" in document == !0 && (xt.browser.IS_ANDROID || xt.browser.IS_IOS ? o.addEventListener("touchstart", this.listener, !1) : o.addEventListener("click", this.listener, !1))
              }, i.prototype.onResize = function() {
                var t = this.gl,
                  g = this,
                  e = [t.ARRAY_BUFFER_BINDING];
                G(t, e, function(i) {
                  function t(t, e) {
                    var i = (90 - t) * X,
                      n = Math.cos(i),
                      r = Math.sin(i);
                    a.push(.3125 * n * u + s, .3125 * r * u + u), a.push(e * n * u + s, e * r * u + u)
                  }

                  function e(t, e) {
                    a.push(l + t, i.drawingBufferHeight - l - e)
                  }
                  var a = [],
                    s = i.drawingBufferWidth / 2,
                    n = Math.max(screen.width, screen.height) * window.devicePixelRatio,
                    r = i.drawingBufferWidth / n,
                    o = r * window.devicePixelRatio,
                    c = 4 * o / 2,
                    h = 42 * o,
                    u = 28 * o / 2,
                    l = 14 * o;
                  a.push(s - c, h), a.push(s - c, i.drawingBufferHeight), a.push(s + c, h), a.push(s + c, i.drawingBufferHeight), g.gearOffset = a.length / 2;
                  for(var d = 0; d <= 6; d++) {
                    var p = 60 * d;
                    t(p, 1), t(12 + p, 1), t(20 + p, .75), t(40 + p, .75), t(48 + p, 1)
                  }
                  g.gearVertexCount = a.length / 2 - g.gearOffset, g.arrowOffset = a.length / 2;
                  var f = c / Math.sin(45 * X);
                  e(0, u), e(u, 0), e(u + f, f), e(f, u + f), e(f, u - f), e(0, u), e(u, 2 * u), e(u + f, 2 * u - f), e(f, u - f), e(0, u), e(f, u - c), e(28 * o, u - c), e(f, u + c), e(28 * o, u + c), g.arrowVertexCount = a.length / 2 - g.arrowOffset, i.bindBuffer(i.ARRAY_BUFFER, g.vertexBuffer), i.bufferData(i.ARRAY_BUFFER, new Float32Array(a), i.STATIC_DRAW)
                })
              }, i.prototype.render = function() {
                var t = this.gl,
                  e = this,
                  i = [t.CULL_FACE, t.DEPTH_TEST, t.BLEND, t.SCISSOR_TEST, t.STENCIL_TEST, t.COLOR_WRITEMASK, t.VIEWPORT, t.CURRENT_PROGRAM, t.ARRAY_BUFFER_BINDING];
                G(t, i, function(t) {
                  t.disable(t.CULL_FACE), t.disable(t.DEPTH_TEST), t.disable(t.BLEND), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.colorMask(!0, !0, !0, !0), t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), e.renderNoState()
                })
              }, i.prototype.renderNoState = function() {
                var t, e, i, n, r, a, s, o, c, h, u = this.gl;
                u.useProgram(this.program), u.bindBuffer(u.ARRAY_BUFFER, this.vertexBuffer), u.enableVertexAttribArray(this.attribs.position), u.vertexAttribPointer(this.attribs.position, 2, u.FLOAT, !1, 8, 0), u.uniform4f(this.uniforms.color, 1, 1, 1, 1), t = this.projMat, e = 0, i = u.drawingBufferWidth, n = 0, r = u.drawingBufferHeight, o = 1 / (e - i), c = 1 / (n - r), h = 1 / ((a = .1) - (s = 1024)), t[0] = -2 * o, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (e + i) * o, t[13] = (r + n) * c, t[14] = (s + a) * h, t[15] = 1, u.uniformMatrix4fv(this.uniforms.projectionMat, !1, this.projMat), u.drawArrays(u.TRIANGLE_STRIP, 0, 4), u.drawArrays(u.TRIANGLE_STRIP, this.gearOffset, this.gearVertexCount), u.drawArrays(u.TRIANGLE_STRIP, this.arrowOffset, this.arrowVertexCount)
              }, r.prototype.distortInverse = function(t) {
                for(var e = 0, i = 1, n = t - this.distort(e); 1e-4 < Math.abs(i - e);) {
                  var r = t - this.distort(i),
                    a = i - (i - e) / (r - n) * r;
                  e = i, i = a, n = r
                }
                return i
              }, r.prototype.distort = function(t) {
                for(var e = t * t, i = 0, n = 0; n < this.coefficients.length; n++) i = e * (i + this.coefficients[n]);
                return (i + 1) * t
              };
              var Z = Math.PI / 180,
                q = 180 / Math.PI,
                J = function(t, e, i) {
                  this.x = t || 0, this.y = e || 0, this.z = i || 0
                };
              J.prototype = {
                constructor: J,
                set: function(t, e, i) {
                  return this.x = t, this.y = e, this.z = i, this
                },
                copy: function(t) {
                  return this.x = t.x, this.y = t.y, this.z = t.z, this
                },
                length: function() {
                  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                },
                normalize: function() {
                  var t = this.length();
                  if(0 !== t) {
                    var e = 1 / t;
                    this.multiplyScalar(e)
                  } else this.x = 0, this.y = 0, this.z = 0;
                  return this
                },
                multiplyScalar: function(t) {
                  this.x *= t, this.y *= t, this.z *= t
                },
                applyQuaternion: function(t) {
                  var e = this.x,
                    i = this.y,
                    n = this.z,
                    r = t.x,
                    a = t.y,
                    s = t.z,
                    o = t.w,
                    c = o * e + a * n - s * i,
                    h = o * i + s * e - r * n,
                    u = o * n + r * i - a * e,
                    l = -r * e - a * i - s * n;
                  return this.x = c * o + l * -r + h * -s - u * -a, this.y = h * o + l * -a + u * -r - c * -s, this.z = u * o + l * -s + c * -a - h * -r, this
                },
                dot: function(t) {
                  return this.x * t.x + this.y * t.y + this.z * t.z
                },
                crossVectors: function(t, e) {
                  var i = t.x,
                    n = t.y,
                    r = t.z,
                    a = e.x,
                    s = e.y,
                    o = e.z;
                  return this.x = n * o - r * s, this.y = r * a - i * o, this.z = i * s - n * a, this
                }
              };
              var K = function(t, e, i, n) {
                this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
              };
              K.prototype = {
                constructor: K,
                set: function(t, e, i, n) {
                  return this.x = t, this.y = e, this.z = i, this.w = n, this
                },
                copy: function(t) {
                  return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
                },
                setFromEulerXYZ: function(t, e, i) {
                  var n = Math.cos(t / 2),
                    r = Math.cos(e / 2),
                    a = Math.cos(i / 2),
                    s = Math.sin(t / 2),
                    o = Math.sin(e / 2),
                    c = Math.sin(i / 2);
                  return this.x = s * r * a + n * o * c, this.y = n * o * a - s * r * c, this.z = n * r * c + s * o * a, this.w = n * r * a - s * o * c, this
                },
                setFromEulerYXZ: function(t, e, i) {
                  var n = Math.cos(t / 2),
                    r = Math.cos(e / 2),
                    a = Math.cos(i / 2),
                    s = Math.sin(t / 2),
                    o = Math.sin(e / 2),
                    c = Math.sin(i / 2);
                  return this.x = s * r * a + n * o * c, this.y = n * o * a - s * r * c, this.z = n * r * c - s * o * a, this.w = n * r * a + s * o * c, this
                },
                setFromAxisAngle: function(t, e) {
                  var i = e / 2,
                    n = Math.sin(i);
                  return this.x = t.x * n, this.y = t.y * n, this.z = t.z * n, this.w = Math.cos(i), this
                },
                multiply: function(t) {
                  return this.multiplyQuaternions(this, t)
                },
                multiplyQuaternions: function(t, e) {
                  var i = t.x,
                    n = t.y,
                    r = t.z,
                    a = t.w,
                    s = e.x,
                    o = e.y,
                    c = e.z,
                    h = e.w;
                  return this.x = i * h + a * s + n * c - r * o, this.y = n * h + a * o + r * s - i * c, this.z = r * h + a * c + i * o - n * s, this.w = a * h - i * s - n * o - r * c, this
                },
                inverse: function() {
                  return this.x *= -1, this.y *= -1, this.z *= -1, this.normalize(), this
                },
                normalize: function() {
                  var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                  return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (t = 1 / t, this.x = this.x * t, this.y = this.y * t, this.z = this.z * t, this.w = this.w * t), this
                },
                slerp: function(t, e) {
                  if(0 === e) return this;
                  if(1 === e) return this.copy(t);
                  var i = this.x,
                    n = this.y,
                    r = this.z,
                    a = this.w,
                    s = a * t.w + i * t.x + n * t.y + r * t.z;
                  if(s < 0 ? (this.w = -t.w, this.x = -t.x, this.y = -t.y, this.z = -t.z, s = -s) : this.copy(t), 1 <= s) return this.w = a, this.x = i, this.y = n, this.z = r, this;
                  var o = Math.acos(s),
                    c = Math.sqrt(1 - s * s);
                  if(Math.abs(c) < .001) return this.w = .5 * (a + this.w), this.x = .5 * (i + this.x), this.y = .5 * (n + this.y), this.z = .5 * (r + this.z), this;
                  var h = Math.sin((1 - e) * o) / c,
                    u = Math.sin(e * o) / c;
                  return this.w = a * h + this.w * u, this.x = i * h + this.x * u, this.y = n * h + this.y * u, this.z = r * h + this.z * u, this
                },
                setFromUnitVectors: function() {
                  var i, n;
                  return function(t, e) {
                    return void 0 === i && (i = new J), (n = t.dot(e) + 1) < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? i.set(-t.y, t.x, 0) : i.set(0, -t.z, t.y)) : i.crossVectors(t, e), this.x = i.x, this.y = i.y, this.z = i.z, this.w = n, this.normalize(), this
                  }
                }()
              };
              var $ = new a({
                  widthMeters: .11,
                  heightMeters: .062,
                  bevelMeters: .004
                }),
                tt = new a({
                  widthMeters: .1038,
                  heightMeters: .0584,
                  bevelMeters: .004
                }),
                et = {
                  CardboardV1: new s({
                    id: "CardboardV1",
                    label: "Cardboard I/O 2014",
                    fov: 40,
                    interLensDistance: .06,
                    baselineLensDistance: .035,
                    screenLensDistance: .042,
                    distortionCoefficients: [.441, .156],
                    inverseCoefficients: [-.4410035, .42756155, -.4804439, .5460139, -.58821183, .5733938, -.48303202, .33299083, -.17573841, .0651772, -.01488963, .001559834]
                  }),
                  CardboardV2: new s({
                    id: "CardboardV2",
                    label: "Cardboard I/O 2015",
                    fov: 60,
                    interLensDistance: .064,
                    baselineLensDistance: .035,
                    screenLensDistance: .039,
                    distortionCoefficients: [.34, .55],
                    inverseCoefficients: [-.33836704, -.18162185, .862655, -1.2462051, 1.0560602, -.58208317, .21609078, -.05444823, .009177956, -.0009904169, 6183535e-11, -16981803e-13]
                  })
                };
              n.prototype.updateDeviceParams = function(t) {
                this.device = this.determineDevice_(t) || this.device
              }, n.prototype.getDevice = function() {
                return this.device
              }, n.prototype.setViewer = function(t) {
                this.viewer = t, this.distortion = new r(this.viewer.distortionCoefficients)
              }, n.prototype.determineDevice_ = function(t) {
                if(!t) return x() ? tt : $;
                var e = .0254 / t.xdpi,
                  i = .0254 / t.ydpi,
                  n = b(),
                  r = S();
                return new a({
                  widthMeters: e * n,
                  heightMeters: i * r,
                  bevelMeters: .001 * t.bevelMm
                })
              }, n.prototype.getDistortedFieldOfViewLeftEye = function() {
                var t = this.viewer,
                  e = this.device,
                  i = this.distortion,
                  n = t.screenLensDistance,
                  r = (e.widthMeters - t.interLensDistance) / 2,
                  a = t.interLensDistance / 2,
                  s = t.baselineLensDistance - e.bevelMeters,
                  o = e.heightMeters - s,
                  c = q * Math.atan(i.distort(r / n)),
                  h = q * Math.atan(i.distort(a / n)),
                  u = q * Math.atan(i.distort(s / n)),
                  l = q * Math.atan(i.distort(o / n));
                return {
                  leftDegrees: Math.min(c, t.fov),
                  rightDegrees: Math.min(h, t.fov),
                  downDegrees: Math.min(u, t.fov),
                  upDegrees: Math.min(l, t.fov)
                }
              }, n.prototype.getLeftEyeVisibleTanAngles = function() {
                var t = this.viewer,
                  e = this.device,
                  i = this.distortion,
                  n = Math.tan(-Z * t.fov),
                  r = Math.tan(Z * t.fov),
                  a = Math.tan(Z * t.fov),
                  s = Math.tan(-Z * t.fov),
                  o = e.widthMeters / 4,
                  c = e.heightMeters / 2,
                  h = t.baselineLensDistance - e.bevelMeters - c,
                  u = t.interLensDistance / 2 - o,
                  l = -h,
                  d = t.screenLensDistance,
                  p = i.distort((u - o) / d),
                  f = i.distort((l + c) / d),
                  g = i.distort((u + o) / d),
                  m = i.distort((l - c) / d),
                  M = new Float32Array(4);
                return M[0] = Math.max(n, p), M[1] = Math.min(r, f), M[2] = Math.min(a, g), M[3] = Math.max(s, m), M
              }, n.prototype.getLeftEyeNoLensTanAngles = function() {
                var t = this.viewer,
                  e = this.device,
                  i = this.distortion,
                  n = new Float32Array(4),
                  r = i.distortInverse(Math.tan(-Z * t.fov)),
                  a = i.distortInverse(Math.tan(Z * t.fov)),
                  s = i.distortInverse(Math.tan(Z * t.fov)),
                  o = i.distortInverse(Math.tan(-Z * t.fov)),
                  c = e.widthMeters / 4,
                  h = e.heightMeters / 2,
                  u = t.baselineLensDistance - e.bevelMeters - h,
                  l = t.interLensDistance / 2 - c,
                  d = -u,
                  p = t.screenLensDistance,
                  f = (l - c) / p,
                  g = (d + h) / p,
                  m = (l + c) / p,
                  M = (d - h) / p;
                return n[0] = Math.max(r, f), n[1] = Math.min(a, g), n[2] = Math.min(s, m), n[3] = Math.max(o, M), n
              }, n.prototype.getLeftEyeVisibleScreenRect = function(t) {
                var e = this.viewer,
                  i = this.device,
                  n = e.screenLensDistance,
                  r = (i.widthMeters - e.interLensDistance) / 2,
                  a = e.baselineLensDistance - i.bevelMeters,
                  s = (t[0] * n + r) / i.widthMeters,
                  o = (t[1] * n + a) / i.heightMeters,
                  c = (t[2] * n + r) / i.widthMeters,
                  h = (t[3] * n + a) / i.heightMeters;
                return {
                  x: s,
                  y: h,
                  width: c - s,
                  height: o - h
                }
              }, n.prototype.getFieldOfViewLeftEye = function(t) {
                return t ? this.getUndistortedFieldOfViewLeftEye() : this.getDistortedFieldOfViewLeftEye()
              }, n.prototype.getFieldOfViewRightEye = function(t) {
                var e = this.getFieldOfViewLeftEye(t);
                return {
                  leftDegrees: e.rightDegrees,
                  rightDegrees: e.leftDegrees,
                  upDegrees: e.upDegrees,
                  downDegrees: e.downDegrees
                }
              }, n.prototype.getUndistortedFieldOfViewLeftEye = function() {
                var t = this.getUndistortedParams_();
                return {
                  leftDegrees: q * Math.atan(t.outerDist),
                  rightDegrees: q * Math.atan(t.innerDist),
                  downDegrees: q * Math.atan(t.bottomDist),
                  upDegrees: q * Math.atan(t.topDist)
                }
              }, n.prototype.getUndistortedViewportLeftEye = function() {
                var t = this.getUndistortedParams_(),
                  e = this.viewer,
                  i = this.device,
                  n = e.screenLensDistance,
                  r = i.widthMeters / n,
                  a = i.heightMeters / n,
                  s = i.width / r,
                  o = i.height / a,
                  c = Math.round((t.eyePosX - t.outerDist) * s),
                  h = Math.round((t.eyePosY - t.bottomDist) * o);
                return {
                  x: c,
                  y: h,
                  width: Math.round((t.eyePosX + t.innerDist) * s) - c,
                  height: Math.round((t.eyePosY + t.topDist) * o) - h
                }
              }, n.prototype.getUndistortedParams_ = function() {
                var t = this.viewer,
                  e = this.device,
                  i = this.distortion,
                  n = t.screenLensDistance,
                  r = t.interLensDistance / 2 / n,
                  a = e.widthMeters / n,
                  s = e.heightMeters / n,
                  o = a / 2 - r,
                  c = (t.baselineLensDistance - e.bevelMeters) / n,
                  h = t.fov,
                  u = i.distortInverse(Math.tan(Z * h)),
                  l = Math.min(o, u),
                  d = Math.min(r, u),
                  p = Math.min(c, u),
                  f = Math.min(s - c, u);
                return {
                  outerDist: l,
                  innerDist: d,
                  topDist: f,
                  bottomDist: p,
                  eyePosX: o,
                  eyePosY: c
                }
              }, n.Viewers = et;
              var it = {
                format: 1,
                last_updated: "2018-02-20T22:55:10Z",
                devices: [{
                  type: "android",
                  rules: [{
                    mdmh: "asus/*/Nexus 7/*"
                  }, {
                    ua: "Nexus 7"
                  }],
                  dpi: [320.8, 323],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "asus/*/ASUS_Z00AD/*"
                  }, {
                    ua: "ASUS_Z00AD"
                  }],
                  dpi: [403, 404.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Google/*/Pixel XL/*"
                  }, {
                    ua: "Pixel XL"
                  }],
                  dpi: [537.9, 533],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Google/*/Pixel/*"
                  }, {
                    ua: "Pixel"
                  }],
                  dpi: [432.6, 436.7],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "HTC/*/HTC6435LVW/*"
                  }, {
                    ua: "HTC6435LVW"
                  }],
                  dpi: [449.7, 443.3],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "HTC/*/HTC One XL/*"
                  }, {
                    ua: "HTC One XL"
                  }],
                  dpi: [315.3, 314.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "htc/*/Nexus 9/*"
                  }, {
                    ua: "Nexus 9"
                  }],
                  dpi: 289,
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "HTC/*/HTC One M9/*"
                  }, {
                    ua: "HTC One M9"
                  }],
                  dpi: [442.5, 443.3],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "HTC/*/HTC One_M8/*"
                  }, {
                    ua: "HTC One_M8"
                  }],
                  dpi: [449.7, 447.4],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "HTC/*/HTC One/*"
                  }, {
                    ua: "HTC One"
                  }],
                  dpi: 472.8,
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Huawei/*/Nexus 6P/*"
                  }, {
                    ua: "Nexus 6P"
                  }],
                  dpi: [515.1, 518],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LENOVO/*/Lenovo PB2-690Y/*"
                  }, {
                    ua: "Lenovo PB2-690Y"
                  }],
                  dpi: [457.2, 454.713],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/Nexus 5X/*"
                  }, {
                    ua: "Nexus 5X"
                  }],
                  dpi: [422, 419.9],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/LGMS345/*"
                  }, {
                    ua: "LGMS345"
                  }],
                  dpi: [221.7, 219.1],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/LG-D800/*"
                  }, {
                    ua: "LG-D800"
                  }],
                  dpi: [422, 424.1],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/LG-D850/*"
                  }, {
                    ua: "LG-D850"
                  }],
                  dpi: [537.9, 541.9],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/VS985 4G/*"
                  }, {
                    ua: "VS985 4G"
                  }],
                  dpi: [537.9, 535.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/Nexus 5/*"
                  }, {
                    ua: "Nexus 5 B"
                  }],
                  dpi: [442.4, 444.8],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/Nexus 4/*"
                  }, {
                    ua: "Nexus 4"
                  }],
                  dpi: [319.8, 318.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/LG-P769/*"
                  }, {
                    ua: "LG-P769"
                  }],
                  dpi: [240.6, 247.5],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/LGMS323/*"
                  }, {
                    ua: "LGMS323"
                  }],
                  dpi: [206.6, 204.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "LGE/*/LGLS996/*"
                  }, {
                    ua: "LGLS996"
                  }],
                  dpi: [403.4, 401.5],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Micromax/*/4560MMX/*"
                  }, {
                    ua: "4560MMX"
                  }],
                  dpi: [240, 219.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Micromax/*/A250/*"
                  }, {
                    ua: "Micromax A250"
                  }],
                  dpi: [480, 446.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Micromax/*/Micromax AQ4501/*"
                  }, {
                    ua: "Micromax AQ4501"
                  }],
                  dpi: 240,
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/G5/*"
                  }, {
                    ua: "Moto G (5) Plus"
                  }],
                  dpi: [403.4, 403],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/DROID RAZR/*"
                  }, {
                    ua: "DROID RAZR"
                  }],
                  dpi: [368.1, 256.7],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT830C/*"
                  }, {
                    ua: "XT830C"
                  }],
                  dpi: [254, 255.9],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1021/*"
                  }, {
                    ua: "XT1021"
                  }],
                  dpi: [254, 256.7],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1023/*"
                  }, {
                    ua: "XT1023"
                  }],
                  dpi: [254, 256.7],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1028/*"
                  }, {
                    ua: "XT1028"
                  }],
                  dpi: [326.6, 327.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1034/*"
                  }, {
                    ua: "XT1034"
                  }],
                  dpi: [326.6, 328.4],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1053/*"
                  }, {
                    ua: "XT1053"
                  }],
                  dpi: [315.3, 316.1],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1562/*"
                  }, {
                    ua: "XT1562"
                  }],
                  dpi: [403.4, 402.7],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/Nexus 6/*"
                  }, {
                    ua: "Nexus 6 B"
                  }],
                  dpi: [494.3, 489.7],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1063/*"
                  }, {
                    ua: "XT1063"
                  }],
                  dpi: [295, 296.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1064/*"
                  }, {
                    ua: "XT1064"
                  }],
                  dpi: [295, 295.6],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1092/*"
                  }, {
                    ua: "XT1092"
                  }],
                  dpi: [422, 424.1],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/XT1095/*"
                  }, {
                    ua: "XT1095"
                  }],
                  dpi: [422, 423.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "motorola/*/G4/*"
                  }, {
                    ua: "Moto G (4)"
                  }],
                  dpi: 401,
                  bw: 4,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "OnePlus/*/A0001/*"
                  }, {
                    ua: "A0001"
                  }],
                  dpi: [403.4, 401],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "OnePlus/*/ONE E1005/*"
                  }, {
                    ua: "ONE E1005"
                  }],
                  dpi: [442.4, 441.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "OnePlus/*/ONE A2005/*"
                  }, {
                    ua: "ONE A2005"
                  }],
                  dpi: [391.9, 405.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "OnePlus/*/ONEPLUS A5000/*"
                  }, {
                    ua: "ONEPLUS A5000 "
                  }],
                  dpi: [403.411, 399.737],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "OnePlus/*/ONE A5010/*"
                  }, {
                    ua: "ONEPLUS A5010"
                  }],
                  dpi: [403, 400],
                  bw: 2,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "OPPO/*/X909/*"
                  }, {
                    ua: "X909"
                  }],
                  dpi: [442.4, 444.1],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-I9082/*"
                  }, {
                    ua: "GT-I9082"
                  }],
                  dpi: [184.7, 185.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G360P/*"
                  }, {
                    ua: "SM-G360P"
                  }],
                  dpi: [196.7, 205.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/Nexus S/*"
                  }, {
                    ua: "Nexus S"
                  }],
                  dpi: [234.5, 229.8],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-I9300/*"
                  }, {
                    ua: "GT-I9300"
                  }],
                  dpi: [304.8, 303.9],
                  bw: 5,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-T230NU/*"
                  }, {
                    ua: "SM-T230NU"
                  }],
                  dpi: 216,
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SGH-T399/*"
                  }, {
                    ua: "SGH-T399"
                  }],
                  dpi: [217.7, 231.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SGH-M919/*"
                  }, {
                    ua: "SGH-M919"
                  }],
                  dpi: [440.8, 437.7],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-N9005/*"
                  }, {
                    ua: "SM-N9005"
                  }],
                  dpi: [386.4, 387],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SAMSUNG-SM-N900A/*"
                  }, {
                    ua: "SAMSUNG-SM-N900A"
                  }],
                  dpi: [386.4, 387.7],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-I9500/*"
                  }, {
                    ua: "GT-I9500"
                  }],
                  dpi: [442.5, 443.3],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-I9505/*"
                  }, {
                    ua: "GT-I9505"
                  }],
                  dpi: 439.4,
                  bw: 4,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G900F/*"
                  }, {
                    ua: "SM-G900F"
                  }],
                  dpi: [415.6, 431.6],
                  bw: 5,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G900M/*"
                  }, {
                    ua: "SM-G900M"
                  }],
                  dpi: [415.6, 431.6],
                  bw: 5,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G800F/*"
                  }, {
                    ua: "SM-G800F"
                  }],
                  dpi: 326.8,
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G906S/*"
                  }, {
                    ua: "SM-G906S"
                  }],
                  dpi: [562.7, 572.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-I9300/*"
                  }, {
                    ua: "GT-I9300"
                  }],
                  dpi: [306.7, 304.8],
                  bw: 5,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-T535/*"
                  }, {
                    ua: "SM-T535"
                  }],
                  dpi: [142.6, 136.4],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-N920C/*"
                  }, {
                    ua: "SM-N920C"
                  }],
                  dpi: [515.1, 518.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-N920P/*"
                  }, {
                    ua: "SM-N920P"
                  }],
                  dpi: [386.3655, 390.144],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-N920W8/*"
                  }, {
                    ua: "SM-N920W8"
                  }],
                  dpi: [515.1, 518.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-I9300I/*"
                  }, {
                    ua: "GT-I9300I"
                  }],
                  dpi: [304.8, 305.8],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-I9195/*"
                  }, {
                    ua: "GT-I9195"
                  }],
                  dpi: [249.4, 256.7],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SPH-L520/*"
                  }, {
                    ua: "SPH-L520"
                  }],
                  dpi: [249.4, 255.9],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SAMSUNG-SGH-I717/*"
                  }, {
                    ua: "SAMSUNG-SGH-I717"
                  }],
                  dpi: 285.8,
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SPH-D710/*"
                  }, {
                    ua: "SPH-D710"
                  }],
                  dpi: [217.7, 204.2],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/GT-N7100/*"
                  }, {
                    ua: "GT-N7100"
                  }],
                  dpi: 265.1,
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SCH-I605/*"
                  }, {
                    ua: "SCH-I605"
                  }],
                  dpi: 265.1,
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/Galaxy Nexus/*"
                  }, {
                    ua: "Galaxy Nexus"
                  }],
                  dpi: [315.3, 314.2],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-N910H/*"
                  }, {
                    ua: "SM-N910H"
                  }],
                  dpi: [515.1, 518],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-N910C/*"
                  }, {
                    ua: "SM-N910C"
                  }],
                  dpi: [515.2, 520.2],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G130M/*"
                  }, {
                    ua: "SM-G130M"
                  }],
                  dpi: [165.9, 164.8],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G928I/*"
                  }, {
                    ua: "SM-G928I"
                  }],
                  dpi: [515.1, 518.4],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G920F/*"
                  }, {
                    ua: "SM-G920F"
                  }],
                  dpi: 580.6,
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G920P/*"
                  }, {
                    ua: "SM-G920P"
                  }],
                  dpi: [522.5, 577],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G925F/*"
                  }, {
                    ua: "SM-G925F"
                  }],
                  dpi: 580.6,
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G925V/*"
                  }, {
                    ua: "SM-G925V"
                  }],
                  dpi: [522.5, 576.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G930F/*"
                  }, {
                    ua: "SM-G930F"
                  }],
                  dpi: 576.6,
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G935F/*"
                  }, {
                    ua: "SM-G935F"
                  }],
                  dpi: 533,
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G950F/*"
                  }, {
                    ua: "SM-G950F"
                  }],
                  dpi: [562.707, 565.293],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "samsung/*/SM-G955U/*"
                  }, {
                    ua: "SM-G955U"
                  }],
                  dpi: [522.514, 525.762],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Sony/*/C6903/*"
                  }, {
                    ua: "C6903"
                  }],
                  dpi: [442.5, 443.3],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Sony/*/D6653/*"
                  }, {
                    ua: "D6653"
                  }],
                  dpi: [428.6, 427.6],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Sony/*/E6653/*"
                  }, {
                    ua: "E6653"
                  }],
                  dpi: [428.6, 425.7],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Sony/*/E6853/*"
                  }, {
                    ua: "E6853"
                  }],
                  dpi: [403.4, 401.9],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Sony/*/SGP321/*"
                  }, {
                    ua: "SGP321"
                  }],
                  dpi: [224.7, 224.1],
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "TCT/*/ALCATEL ONE TOUCH Fierce/*"
                  }, {
                    ua: "ALCATEL ONE TOUCH Fierce"
                  }],
                  dpi: [240, 247.5],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "THL/*/thl 5000/*"
                  }, {
                    ua: "thl 5000"
                  }],
                  dpi: [480, 443.3],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "Fly/*/IQ4412/*"
                  }, {
                    ua: "IQ4412"
                  }],
                  dpi: 307.9,
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "ZTE/*/ZTE Blade L2/*"
                  }, {
                    ua: "ZTE Blade L2"
                  }],
                  dpi: 240,
                  bw: 3,
                  ac: 500
                }, {
                  type: "android",
                  rules: [{
                    mdmh: "BENEVE/*/VR518/*"
                  }, {
                    ua: "VR518"
                  }],
                  dpi: 480,
                  bw: 3,
                  ac: 500
                }, {
                  type: "ios",
                  rules: [{
                    res: [640, 960]
                  }],
                  dpi: [325.1, 328.4],
                  bw: 4,
                  ac: 1e3
                }, {
                  type: "ios",
                  rules: [{
                    res: [640, 1136]
                  }],
                  dpi: [317.1, 320.2],
                  bw: 3,
                  ac: 1e3
                }, {
                  type: "ios",
                  rules: [{
                    res: [750, 1334]
                  }],
                  dpi: 326.4,
                  bw: 4,
                  ac: 1e3
                }, {
                  type: "ios",
                  rules: [{
                    res: [1242, 2208]
                  }],
                  dpi: [453.6, 458.4],
                  bw: 4,
                  ac: 1e3
                }, {
                  type: "ios",
                  rules: [{
                    res: [1125, 2001]
                  }],
                  dpi: [410.9, 415.4],
                  bw: 4,
                  ac: 1e3
                }, {
                  type: "ios",
                  rules: [{
                    res: [1125, 2436]
                  }],
                  dpi: 458,
                  bw: 4,
                  ac: 1e3
                }]
              };
              o.prototype.getDeviceParams = function() {
                return this.deviceParams
              }, o.prototype.recalculateDeviceParams_ = function() {
                var t = this.calcDeviceParams_();
                t && (this.deviceParams = t, this.onDeviceParamsUpdated && this.onDeviceParamsUpdated(this.deviceParams))
              }, o.prototype.calcDeviceParams_ = function() {
                var t = this.dpdb;
                if(!t) return null;
                if(1 != t.format) return null;
                if(!t.devices || !t.devices.length) return null;
                var e = navigator.userAgent || navigator.vendor || window.opera,
                  i = b(),
                  n = S();
                if(!t.devices) return null;
                for(var r = 0; r < t.devices.length; r++) {
                  var a = t.devices[r];
                  if(a.rules && (("ios" == a.type || "android" == a.type) && x() == ("ios" == a.type))) {
                    for(var s = !1, o = 0; o < a.rules.length; o++) {
                      var c = a.rules[o];
                      if(this.matchRule_(c, e, i, n)) {
                        s = !0;
                        break
                      }
                    }
                    if(s) {
                      var h = a.dpi[0] || a.dpi,
                        u = a.dpi[1] || a.dpi;
                      return new l({
                        xdpi: h,
                        ydpi: u,
                        bevelMm: a.bw
                      })
                    }
                  }
                }
                return null
              }, o.prototype.matchRule_ = function(t, e, i, n) {
                if(!t.ua && !t.res) return !1;
                if(t.ua && e.indexOf(t.ua) < 0) return !1;
                if(t.res) {
                  if(!t.res[0] || !t.res[1]) return !1;
                  var r = t.res[0],
                    a = t.res[1];
                  if(Math.min(i, n) != Math.min(r, a) || Math.max(i, n) != Math.max(r, a)) return !1
                }
                return !0
              }, c.prototype.set = function(t, e) {
                this.sample = t, this.timestampS = e
              }, c.prototype.copy = function(t) {
                this.set(t.sample, t.timestampS)
              }, h.prototype.addAccelMeasurement = function(t, e) {
                this.currentAccelMeasurement.set(t, e)
              }, h.prototype.addGyroMeasurement = function(t, e) {
                this.currentGyroMeasurement.set(t, e);
                var i = e - this.previousGyroMeasurement.timestampS;
                _(i) && this.run_(), this.previousGyroMeasurement.copy(this.currentGyroMeasurement)
              }, h.prototype.run_ = function() {
                if(!this.isOrientationInitialized) return this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample), this.previousFilterQ.copy(this.accelQ), void(this.isOrientationInitialized = !0);
                var t = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS,
                  e = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, t);
                this.gyroIntegralQ.multiply(e), this.filterQ.copy(this.previousFilterQ), this.filterQ.multiply(e);
                var i = new K;
                i.copy(this.filterQ), i.inverse(), this.estimatedGravity.set(0, 0, -1), this.estimatedGravity.applyQuaternion(i), this.estimatedGravity.normalize(), this.measuredGravity.copy(this.currentAccelMeasurement.sample), this.measuredGravity.normalize();
                var n = new K;
                n.setFromUnitVectors(this.estimatedGravity, this.measuredGravity), n.inverse(), this.isDebug;
                var r = new K;
                r.copy(this.filterQ), r.multiply(n), this.filterQ.slerp(r, 1 - this.kFilter), this.previousFilterQ.copy(this.filterQ)
              }, h.prototype.getOrientation = function() {
                return this.filterQ
              }, h.prototype.accelToQuaternion_ = function(t) {
                var e = new J;
                e.copy(t), e.normalize();
                var i = new K;
                return i.setFromUnitVectors(new J(0, 0, -1), e), i.inverse(), i
              }, h.prototype.gyroToQuaternionDelta_ = function(t, e) {
                var i = new K,
                  n = new J;
                return n.copy(t), n.normalize(), i.setFromAxisAngle(n, t.length() * e), i
              }, u.prototype.getPrediction = function(t, e, i) {
                if(!this.previousTimestampS) return this.previousQ.copy(t), this.previousTimestampS = i, t;
                var n = new J;
                n.copy(e), n.normalize();
                var r = e.length();
                if(r < 20 * Z) return this.isDebug, this.outQ.copy(t), this.previousQ.copy(t), this.outQ;
                var a = r * this.predictionTimeS;
                return this.deltaQ.setFromAxisAngle(n, a), this.outQ.copy(this.previousQ), this.outQ.multiply(this.deltaQ), this.previousQ.copy(t), this.previousTimestampS = i, this.outQ
              }, d.prototype.getPosition = function() {
                return null
              }, d.prototype.getOrientation = function() {
                var t = void 0;
                if(this.isWithoutDeviceMotion && this._deviceOrientationQ) {
                  this.deviceOrientationFixQ = this.deviceOrientationFixQ || function() {
                    var t = (new K).setFromAxisAngle(new J(0, 0, -1), 0),
                      e = new K;
                    return -90 === window.orientation ? e.setFromAxisAngle(new J(0, 1, 0), Math.PI / -2) : e.setFromAxisAngle(new J(0, 1, 0), Math.PI / 2), t.multiply(e)
                  }(), this.deviceOrientationFilterToWorldQ = this.deviceOrientationFilterToWorldQ || function() {
                    var t = new K;
                    return t.setFromAxisAngle(new J(1, 0, 0), -Math.PI / 2), t
                  }(), t = this._deviceOrientationQ;
                  var e = new K;
                  return e.copy(t), e.multiply(this.deviceOrientationFilterToWorldQ), e.multiply(this.resetQ), e.multiply(this.worldToScreenQ), e.multiplyQuaternions(this.deviceOrientationFixQ, e), this.yawOnly && (e.x = 0, e.z = 0, e.normalize()), this.orientationOut_[0] = e.x, this.orientationOut_[1] = e.y, this.orientationOut_[2] = e.z, this.orientationOut_[3] = e.w, this.orientationOut_
                }
                var i = this.filter.getOrientation();
                t = this.posePredictor.getPrediction(i, this.gyroscope, this.previousTimestampS);
                var e = new K;
                return e.copy(this.filterToWorldQ), e.multiply(this.resetQ), e.multiply(t), e.multiply(this.worldToScreenQ), this.yawOnly && (e.x = 0, e.z = 0, e.normalize()), this.orientationOut_[0] = e.x, this.orientationOut_[1] = e.y, this.orientationOut_[2] = e.z, this.orientationOut_[3] = e.w, this.orientationOut_
              }, d.prototype.resetPose = function() {
                this.resetQ.copy(this.filter.getOrientation()), this.resetQ.x = 0, this.resetQ.y = 0, this.resetQ.z *= -1, this.resetQ.normalize(), I() && this.resetQ.multiply(this.inverseWorldToScreenQ), this.resetQ.multiply(this.originalPoseAdjustQ)
              }, d.prototype.onDeviceOrientation_ = function(t) {
                this._deviceOrientationQ = this._deviceOrientationQ || new K;
                var e = t.alpha,
                  i = t.beta,
                  n = t.gamma;
                e = (e || 0) * Math.PI / 180, i = (i || 0) * Math.PI / 180, n = (n || 0) * Math.PI / 180, this._deviceOrientationQ.setFromEulerYXZ(i, e, -n)
              }, d.prototype.onDeviceMotion_ = function(t) {
                this.updateDeviceMotion_(t)
              }, d.prototype.updateDeviceMotion_ = function(t) {
                var e = t.accelerationIncludingGravity,
                  i = t.rotationRate,
                  n = t.timeStamp / 1e3,
                  r = n - this.previousTimestampS;
                return r < 0 ? F("fusion-pose-sensor:invalid:non-monotonic", "Invalid timestamps detected: non-monotonic timestamp from devicemotion") : r <= .001 || 1 < r ? F("fusion-pose-sensor:invalid:outside-threshold", "Invalid timestamps detected: Timestamp from devicemotion outside expected range.") : (this.accelerometer.set(-e.x, -e.y, -e.z), E() ? this.gyroscope.set(-i.beta, i.alpha, i.gamma) : this.gyroscope.set(i.alpha, i.beta, i.gamma), this.isDeviceMotionInRadians || this.gyroscope.multiplyScalar(Math.PI / 180), this.filter.addAccelMeasurement(this.accelerometer, n), this.filter.addGyroMeasurement(this.gyroscope, n)), void(this.previousTimestampS = n)
              }, d.prototype.onOrientationChange_ = function(t) {
                this.setScreenTransform_()
              }, d.prototype.onMessage_ = function(t) {
                var e = t.data;
                if(e && e.type) {
                  var i = e.type.toLowerCase();
                  "devicemotion" === i && this.updateDeviceMotion_(e.deviceMotionEvent)
                }
              }, d.prototype.setScreenTransform_ = function() {
                switch(this.worldToScreenQ.set(0, 0, 0, 1), window.orientation) {
                  case 0:
                    break;
                  case 90:
                    this.worldToScreenQ.setFromAxisAngle(new J(0, 0, 1), -Math.PI / 2);
                    break;
                  case -90:
                    this.worldToScreenQ.setFromAxisAngle(new J(0, 0, 1), Math.PI / 2)
                }
                this.inverseWorldToScreenQ.copy(this.worldToScreenQ), this.inverseWorldToScreenQ.inverse()
              }, d.prototype.start = function() {
                var t, e, i;
                this.onDeviceMotionCallback_ = this.onDeviceMotion_.bind(this), this.onOrientationChangeCallback_ = this.onOrientationChange_.bind(this), this.onMessageCallback_ = this.onMessage_.bind(this), this.onDeviceOrientationCallback_ = this.onDeviceOrientation_.bind(this), x() && (t = window.self !== window.top, e = R(document.referrer), i = R(window.location.href), t && e !== i) && window.addEventListener("message", this.onMessageCallback_), window.addEventListener("orientationchange", this.onOrientationChangeCallback_), this.isWithoutDeviceMotion ? window.addEventListener("deviceorientation", this.onDeviceOrientationCallback_) : window.addEventListener("devicemotion", this.onDeviceMotionCallback_)
              }, d.prototype.stop = function() {
                window.removeEventListener("devicemotion", this.onDeviceMotionCallback_), window.removeEventListener("deviceorientation", this.onDeviceOrientationCallback_), window.removeEventListener("orientationchange", this.onOrientationChangeCallback_), window.removeEventListener("message", this.onMessageCallback_)
              };
              var nt = new J(1, 0, 0),
                rt = new J(0, 0, 1),
                at = {};
              screen.orientation ? at = screen.orientation : screen.msOrientation ? at = screen.msOrientation : Object.defineProperty(at, "angle", {
                get: function() {
                  return window.orientation || 0
                }
              });
              var st = new K;
              st.setFromAxisAngle(nt, -Math.PI / 2), st.multiply((new K).setFromAxisAngle(rt, Math.PI / 2));
              var ot = function() {
                function e(t) {
                  v(this, e), this.config = t, this.sensor = null, this.fusionSensor = null, this._out = new Float32Array(4), this.api = null, this.errors = [], this._sensorQ = new K, this._worldToScreenQ = new K, this._outQ = new K, this._onSensorRead = this._onSensorRead.bind(this), this._onSensorError = this._onSensorError.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onOrientationChange(), this.init()
                }
                return y(e, [{
                  key: "init",
                  value: function() {
                    var t = null;
                    try {
                      (t = new RelativeOrientationSensor({
                        frequency: 60
                      })).addEventListener("error", this._onSensorError)
                    } catch (t) {
                      this.errors.push(t), "SecurityError" === t.name ? this.useDeviceMotion() : "ReferenceError" === t.name && this.useDeviceMotion()
                    }
                    t && (this.api = "sensor", this.sensor = t, this.sensor.addEventListener("reading", this._onSensorRead), this.sensor.start()), window.addEventListener("orientationchange", this._onOrientationChange)
                  }
                }, {
                  key: "useDeviceMotion",
                  value: function() {
                    this.api = "devicemotion", this.fusionSensor = new d(this.config.K_FILTER, this.config.PREDICTION_TIME_S, this.config.YAW_ONLY, this.config.DEBUG), this.sensor && (this.sensor.removeEventListener("reading", this._onSensorRead), this.sensor.removeEventListener("error", this._onSensorError), this.sensor = null)
                  }
                }, {
                  key: "getOrientation",
                  value: function() {
                    if(this.fusionSensor) return this.fusionSensor.getOrientation();
                    if(!this.sensor || !this.sensor.quaternion) return this._out[0] = this._out[1] = this._out[2] = 0, this._out[3] = 1, this._out;
                    var t = this.sensor.quaternion;
                    this._sensorQ.set(t[0], t[1], t[2], t[3]);
                    var e = this._outQ;
                    return e.copy(st), e.multiply(this._sensorQ), e.multiply(this._worldToScreenQ), this.config.YAW_ONLY && (e.x = e.z = 0, e.normalize()), this._out[0] = e.x, this._out[1] = e.y, this._out[2] = e.z, this._out[3] = e.w, this._out
                  }
                }, {
                  key: "_onSensorError",
                  value: function(t) {
                    this.errors.push(t.error), "NotAllowedError" === t.error.name || t.error.name, this.useDeviceMotion()
                  }
                }, {
                  key: "_onSensorRead",
                  value: function() {}
                }, {
                  key: "_onOrientationChange",
                  value: function() {
                    var t = -at.angle * Math.PI / 180;
                    this._worldToScreenQ.setFromAxisAngle(rt, t)
                  }
                }]), e
              }();
              p.prototype.show = function(t) {
                t || this.overlay.parentElement ? t && (this.overlay.parentElement && this.overlay.parentElement != t && this.overlay.parentElement.removeChild(this.overlay), t.appendChild(this.overlay)) : document.body.appendChild(this.overlay), this.overlay.style.display = "block";
                var e = this.overlay.querySelector("img"),
                  i = e.style;
                I() ? (i.width = "20%", i.marginLeft = "40%", i.marginTop = "3%") : (i.width = "50%", i.marginLeft = "25%", i.marginTop = "25%")
              }, p.prototype.hide = function() {
                this.overlay.style.display = "none"
              }, p.prototype.showTemporarily = function(t, e) {
                this.show(e), this.timer = setTimeout(this.hide.bind(this), t)
              }, p.prototype.disableShowTemporarily = function() {
                clearTimeout(this.timer)
              }, p.prototype.update = function() {
                this.disableShowTemporarily(), !I() && P() ? this.show() : this.hide()
              }, p.prototype.loadIcon_ = function() {
                this.icon = "data:" + "image/svg+xml" + ";base64," + "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5OHB4IiBoZWlnaHQ9IjI0MHB4IiB2aWV3Qm94PSIwIDAgMTk4IDI0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMy4zICgxMjA4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dHJhbnNpdGlvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJ0cmFuc2l0aW9uIiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIj4KICAgICAgICAgICAgPGcgaWQ9IkltcG9ydGVkLUxheWVycy1Db3B5LTQtKy1JbXBvcnRlZC1MYXllcnMtQ29weS0rLUltcG9ydGVkLUxheWVycy1Db3B5LTItQ29weSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSW1wb3J0ZWQtTGF5ZXJzLUNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwNy4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ5LjYyNSwyLjUyNyBDMTQ5LjYyNSwyLjUyNyAxNTUuODA1LDYuMDk2IDE1Ni4zNjIsNi40MTggTDE1Ni4zNjIsNy4zMDQgQzE1Ni4zNjIsNy40ODEgMTU2LjM3NSw3LjY2NCAxNTYuNCw3Ljg1MyBDMTU2LjQxLDcuOTM0IDE1Ni40Miw4LjAxNSAxNTYuNDI3LDguMDk1IEMxNTYuNTY3LDkuNTEgMTU3LjQwMSwxMS4wOTMgMTU4LjUzMiwxMi4wOTQgTDE2NC4yNTIsMTcuMTU2IEwxNjQuMzMzLDE3LjA2NiBDMTY0LjMzMywxNy4wNjYgMTY4LjcxNSwxNC41MzYgMTY5LjU2OCwxNC4wNDIgQzE3MS4wMjUsMTQuODgzIDE5NS41MzgsMjkuMDM1IDE5NS41MzgsMjkuMDM1IEwxOTUuNTM4LDgzLjAzNiBDMTk1LjUzOCw4My44MDcgMTk1LjE1Miw4NC4yNTMgMTk0LjU5LDg0LjI1MyBDMTk0LjM1Nyw4NC4yNTMgMTk0LjA5NSw4NC4xNzcgMTkzLjgxOCw4NC4wMTcgTDE2OS44NTEsNzAuMTc5IEwxNjkuODM3LDcwLjIwMyBMMTQyLjUxNSw4NS45NzggTDE0MS42NjUsODQuNjU1IEMxMzYuOTM0LDgzLjEyNiAxMzEuOTE3LDgxLjkxNSAxMjYuNzE0LDgxLjA0NSBDMTI2LjcwOSw4MS4wNiAxMjYuNzA3LDgxLjA2OSAxMjYuNzA3LDgxLjA2OSBMMTIxLjY0LDk4LjAzIEwxMTMuNzQ5LDEwMi41ODYgTDExMy43MTIsMTAyLjUyMyBMMTEzLjcxMiwxMzAuMTEzIEMxMTMuNzEyLDEzMC44ODUgMTEzLjMyNiwxMzEuMzMgMTEyLjc2NCwxMzEuMzMgQzExMi41MzIsMTMxLjMzIDExMi4yNjksMTMxLjI1NCAxMTEuOTkyLDEzMS4wOTQgTDY5LjUxOSwxMDYuNTcyIEM2OC41NjksMTA2LjAyMyA2Ny43OTksMTA0LjY5NSA2Ny43OTksMTAzLjYwNSBMNjcuNzk5LDEwMi41NyBMNjcuNzc4LDEwMi42MTcgQzY3LjI3LDEwMi4zOTMgNjYuNjQ4LDEwMi4yNDkgNjUuOTYyLDEwMi4yMTggQzY1Ljg3NSwxMDIuMjE0IDY1Ljc4OCwxMDIuMjEyIDY1LjcwMSwxMDIuMjEyIEM2NS42MDYsMTAyLjIxMiA2NS41MTEsMTAyLjIxNSA2NS40MTYsMTAyLjIxOSBDNjUuMTk1LDEwMi4yMjkgNjQuOTc0LDEwMi4yMzUgNjQuNzU0LDEwMi4yMzUgQzY0LjMzMSwxMDIuMjM1IDYzLjkxMSwxMDIuMjE2IDYzLjQ5OCwxMDIuMTc4IEM2MS44NDMsMTAyLjAyNSA2MC4yOTgsMTAxLjU3OCA1OS4wOTQsMTAwLjg4MiBMMTIuNTE4LDczLjk5MiBMMTIuNTIzLDc0LjAwNCBMMi4yNDUsNTUuMjU0IEMxLjI0NCw1My40MjcgMi4wMDQsNTEuMDM4IDMuOTQzLDQ5LjkxOCBMNTkuOTU0LDE3LjU3MyBDNjAuNjI2LDE3LjE4NSA2MS4zNSwxNy4wMDEgNjIuMDUzLDE3LjAwMSBDNjMuMzc5LDE3LjAwMSA2NC42MjUsMTcuNjYgNjUuMjgsMTguODU0IEw2NS4yODUsMTguODUxIEw2NS41MTIsMTkuMjY0IEw2NS41MDYsMTkuMjY4IEM2NS45MDksMjAuMDAzIDY2LjQwNSwyMC42OCA2Ni45ODMsMjEuMjg2IEw2Ny4yNiwyMS41NTYgQzY5LjE3NCwyMy40MDYgNzEuNzI4LDI0LjM1NyA3NC4zNzMsMjQuMzU3IEM3Ni4zMjIsMjQuMzU3IDc4LjMyMSwyMy44NCA4MC4xNDgsMjIuNzg1IEM4MC4xNjEsMjIuNzg1IDg3LjQ2NywxOC41NjYgODcuNDY3LDE4LjU2NiBDODguMTM5LDE4LjE3OCA4OC44NjMsMTcuOTk0IDg5LjU2NiwxNy45OTQgQzkwLjg5MiwxNy45OTQgOTIuMTM4LDE4LjY1MiA5Mi43OTIsMTkuODQ3IEw5Ni4wNDIsMjUuNzc1IEw5Ni4wNjQsMjUuNzU3IEwxMDIuODQ5LDI5LjY3NCBMMTAyLjc0NCwyOS40OTIgTDE0OS42MjUsMi41MjcgTTE0OS42MjUsMC44OTIgQzE0OS4zNDMsMC44OTIgMTQ5LjA2MiwwLjk2NSAxNDguODEsMS4xMSBMMTAyLjY0MSwyNy42NjYgTDk3LjIzMSwyNC41NDIgTDk0LjIyNiwxOS4wNjEgQzkzLjMxMywxNy4zOTQgOTEuNTI3LDE2LjM1OSA4OS41NjYsMTYuMzU4IEM4OC41NTUsMTYuMzU4IDg3LjU0NiwxNi42MzIgODYuNjQ5LDE3LjE1IEM4My44NzgsMTguNzUgNzkuNjg3LDIxLjE2OSA3OS4zNzQsMjEuMzQ1IEM3OS4zNTksMjEuMzUzIDc5LjM0NSwyMS4zNjEgNzkuMzMsMjEuMzY5IEM3Ny43OTgsMjIuMjU0IDc2LjA4NCwyMi43MjIgNzQuMzczLDIyLjcyMiBDNzIuMDgxLDIyLjcyMiA2OS45NTksMjEuODkgNjguMzk3LDIwLjM4IEw2OC4xNDUsMjAuMTM1IEM2Ny43MDYsMTkuNjcyIDY3LjMyMywxOS4xNTYgNjcuMDA2LDE4LjYwMSBDNjYuOTg4LDE4LjU1OSA2Ni45NjgsMTguNTE5IDY2Ljk0NiwxOC40NzkgTDY2LjcxOSwxOC4wNjUgQzY2LjY5LDE4LjAxMiA2Ni42NTgsMTcuOTYgNjYuNjI0LDE3LjkxMSBDNjUuNjg2LDE2LjMzNyA2My45NTEsMTUuMzY2IDYyLjA1MywxNS4zNjYgQzYxLjA0MiwxNS4zNjYgNjAuMDMzLDE1LjY0IDU5LjEzNiwxNi4xNTggTDMuMTI1LDQ4LjUwMiBDMC40MjYsNTAuMDYxIC0wLjYxMyw1My40NDIgMC44MTEsNTYuMDQgTDExLjA4OSw3NC43OSBDMTEuMjY2LDc1LjExMyAxMS41MzcsNzUuMzUzIDExLjg1LDc1LjQ5NCBMNTguMjc2LDEwMi4yOTggQzU5LjY3OSwxMDMuMTA4IDYxLjQzMywxMDMuNjMgNjMuMzQ4LDEwMy44MDYgQzYzLjgxMiwxMDMuODQ4IDY0LjI4NSwxMDMuODcgNjQuNzU0LDEwMy44NyBDNjUsMTAzLjg3IDY1LjI0OSwxMDMuODY0IDY1LjQ5NCwxMDMuODUyIEM2NS41NjMsMTAzLjg0OSA2NS42MzIsMTAzLjg0NyA2NS43MDEsMTAzLjg0NyBDNjUuNzY0LDEwMy44NDcgNjUuODI4LDEwMy44NDkgNjUuODksMTAzLjg1MiBDNjUuOTg2LDEwMy44NTYgNjYuMDgsMTAzLjg2MyA2Ni4xNzMsMTAzLjg3NCBDNjYuMjgyLDEwNS40NjcgNjcuMzMyLDEwNy4xOTcgNjguNzAyLDEwNy45ODggTDExMS4xNzQsMTMyLjUxIEMxMTEuNjk4LDEzMi44MTIgMTEyLjIzMiwxMzIuOTY1IDExMi43NjQsMTMyLjk2NSBDMTE0LjI2MSwxMzIuOTY1IDExNS4zNDcsMTMxLjc2NSAxMTUuMzQ3LDEzMC4xMTMgTDExNS4zNDcsMTAzLjU1MSBMMTIyLjQ1OCw5OS40NDYgQzEyMi44MTksOTkuMjM3IDEyMy4wODcsOTguODk4IDEyMy4yMDcsOTguNDk4IEwxMjcuODY1LDgyLjkwNSBDMTMyLjI3OSw4My43MDIgMTM2LjU1Nyw4NC43NTMgMTQwLjYwNyw4Ni4wMzMgTDE0MS4xNCw4Ni44NjIgQzE0MS40NTEsODcuMzQ2IDE0MS45NzcsODcuNjEzIDE0Mi41MTYsODcuNjEzIEMxNDIuNzk0LDg3LjYxMyAxNDMuMDc2LDg3LjU0MiAxNDMuMzMzLDg3LjM5MyBMMTY5Ljg2NSw3Mi4wNzYgTDE5Myw4NS40MzMgQzE5My41MjMsODUuNzM1IDE5NC4wNTgsODUuODg4IDE5NC41OSw4NS44ODggQzE5Ni4wODcsODUuODg4IDE5Ny4xNzMsODQuNjg5IDE5Ny4xNzMsODMuMDM2IEwxOTcuMTczLDI5LjAzNSBDMTk3LjE3MywyOC40NTEgMTk2Ljg2MSwyNy45MTEgMTk2LjM1NSwyNy42MTkgQzE5Ni4zNTUsMjcuNjE5IDE3MS44NDMsMTMuNDY3IDE3MC4zODUsMTIuNjI2IEMxNzAuMTMyLDEyLjQ4IDE2OS44NSwxMi40MDcgMTY5LjU2OCwxMi40MDcgQzE2OS4yODUsMTIuNDA3IDE2OS4wMDIsMTIuNDgxIDE2OC43NDksMTIuNjI3IEMxNjguMTQzLDEyLjk3OCAxNjUuNzU2LDE0LjM1NyAxNjQuNDI0LDE1LjEyNSBMMTU5LjYxNSwxMC44NyBDMTU4Ljc5NiwxMC4xNDUgMTU4LjE1NCw4LjkzNyAxNTguMDU0LDcuOTM0IEMxNTguMDQ1LDcuODM3IDE1OC4wMzQsNy43MzkgMTU4LjAyMSw3LjY0IEMxNTguMDA1LDcuNTIzIDE1Ny45OTgsNy40MSAxNTcuOTk4LDcuMzA0IEwxNTcuOTk4LDYuNDE4IEMxNTcuOTk4LDUuODM0IDE1Ny42ODYsNS4yOTUgMTU3LjE4MSw1LjAwMiBDMTU2LjYyNCw0LjY4IDE1MC40NDIsMS4xMTEgMTUwLjQ0MiwxLjExMSBDMTUwLjE4OSwwLjk2NSAxNDkuOTA3LDAuODkyIDE0OS42MjUsMC44OTIiIGlkPSJGaWxsLTEiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTYuMDI3LDI1LjYzNiBMMTQyLjYwMyw1Mi41MjcgQzE0My44MDcsNTMuMjIyIDE0NC41ODIsNTQuMTE0IDE0NC44NDUsNTUuMDY4IEwxNDQuODM1LDU1LjA3NSBMNjMuNDYxLDEwMi4wNTcgTDYzLjQ2LDEwMi4wNTcgQzYxLjgwNiwxMDEuOTA1IDYwLjI2MSwxMDEuNDU3IDU5LjA1NywxMDAuNzYyIEwxMi40ODEsNzMuODcxIEw5Ni4wMjcsMjUuNjM2IiBpZD0iRmlsbC0yIiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYzLjQ2MSwxMDIuMTc0IEM2My40NTMsMTAyLjE3NCA2My40NDYsMTAyLjE3NCA2My40MzksMTAyLjE3MiBDNjEuNzQ2LDEwMi4wMTYgNjAuMjExLDEwMS41NjMgNTguOTk4LDEwMC44NjMgTDEyLjQyMiw3My45NzMgQzEyLjM4Niw3My45NTIgMTIuMzY0LDczLjkxNCAxMi4zNjQsNzMuODcxIEMxMi4zNjQsNzMuODMgMTIuMzg2LDczLjc5MSAxMi40MjIsNzMuNzcgTDk1Ljk2OCwyNS41MzUgQzk2LjAwNCwyNS41MTQgOTYuMDQ5LDI1LjUxNCA5Ni4wODUsMjUuNTM1IEwxNDIuNjYxLDUyLjQyNiBDMTQzLjg4OCw1My4xMzQgMTQ0LjY\0ï¿½q\0\0\0\0\0ï¿½q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½o\0\0\0\0\0\0\0\0\0\0\0\0 =p\0\0\0\0hï¿½q\0\0\0\0ï¿½\b3\0\0\0\0ï¿½\b3\0\0\0\0\0ï¿½Ie\0\0\0\0ï¿½Ie\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0pï¿½f\0\0\0\0\0\0\0\0\0\0\0\0ï¿½i\0\0\0\x008Je\0\0\0\0\0\0\0\0\0\0\0\0ï¿½Ie\0\0\0\0\0@\0\0\0\0\0\0ï¿½Ie\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Æ©\0\0\0\0\0\0@\0\0\0\0\0\0Æ©\0\0\0\0\0\0\0\0\0\0\0\0\0D\0ï¿½x\0\0\0\0\0ï¿½x\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½ï¿½\0\0\0\0\0\0\0\0\0\0\0\0ï¿½Uï¿½\0\0\0\0hï¿½x\0\0\0\0\0\0\0\0\0\0\0\0 ï¿½x\0\0\0\0\0@\0\0\0\0\0\0 ï¿½x\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0\0@\0\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0\0\0\0\0\0\0\0\0\0?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x000?\0\0\0\0\0\0\0\0\0\0\0\0???\0\0\0\0h)?\0\0\0\0\0\0\0\0\0\0\0\0 )?\0\0\0\0\0@\0\0\0\0\0\0 )?\0\0\0\0\0\0\0\0\0\0\0\x0043MTQsNzMuODcxIFoiIGlkPSJGaWxsLTMiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ4LjMyNyw1OC40NzEgQzE0OC4xNDUsNTguNDggMTQ3Ljk2Miw1OC40OCAxNDcuNzgxLDU4LjQ3MiBDMTQ1Ljg4Nyw1OC4zODkgMTQ0LjQ3OSw1Ny40MzQgMTQ0LjYzNiw1Ni4zNCBDMTQ0LjY4OSw1NS45NjcgMTQ0LjY2NCw1NS41OTcgMTQ0LjU2NCw1NS4yMzUgTDYzLjQ2MSwxMDIuMDU3IEM2NC4wODksMTAyLjExNSA2NC43MzMsMTAyLjEzIDY1LjM3OSwxMDIuMDk5IEM2NS41NjEsMTAyLjA5IDY1Ljc0MywxMDIuMDkgNjUuOTI1LDEwMi4wOTggQzY3LjgxOSwxMDIuMTgxIDY5LjIyNywxMDMuMTM2IDY5LjA3LDEwNC4yMyBMMTQ4LjMyNyw1OC40NzEiIGlkPSJGaWxsLTQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjkuMDcsMTA0LjM0NyBDNjkuMDQ4LDEwNC4zNDcgNjkuMDI1LDEwNC4zNCA2OS4wMDUsMTA0LjMyNyBDNjguOTY4LDEwNC4zMDEgNjguOTQ4LDEwNC4yNTcgNjguOTU1LDEwNC4yMTMgQzY5LDEwMy44OTYgNjguODk4LDEwMy41NzYgNjguNjU4LDEwMy4yODggQzY4LjE1MywxMDIuNjc4IDY3LjEwMywxMDIuMjY2IDY1LjkyLDEwMi4yMTQgQzY1Ljc0MiwxMDIuMjA2IDY1LjU2MywxMDIuMjA3IDY1LjM4NSwxMDIuMjE1IEM2NC43NDIsMTAyLjI0NiA2NC4wODcsMTAyLjIzMiA2My40NSwxMDIuMTc0IEM2My4zOTksMTAyLjE2OSA2My4zNTgsMTAyLjEzMiA2My4zNDcsMTAyLjA4MiBDNjMuMzM2LDEwMi4wMzMgNjMuMzU4LDEwMS45ODEgNjMuNDAyLDEwMS45NTYgTDE0NC41MDYsNTUuMTM0IEMxNDQuNTM3LDU1LjExNiAxNDQuNTc1LDU1LjExMyAxNDQuNjA5LDU1LjEyNyBDMTQ0LjY0Miw1NS4xNDEgMTQ0LjY2OCw1NS4xNyAxNDQuNjc3LDU1LjIwNCBDMTQ0Ljc4MSw1NS41ODUgMTQ0LjgwNiw1NS45NzIgMTQ0Ljc1MSw1Ni4zNTcgQzE0NC43MDYsNTYuNjczIDE0NC44MDgsNTYuOTk0IDE0NS4wNDcsNTcuMjgyIEMxNDUuNTUzLDU3Ljg5MiAxNDYuNjAyLDU4LjMwMyAxNDcuNzg2LDU4LjM1NSBDMTQ3Ljk2NCw1OC4zNjMgMTQ4LjE0Myw1OC4zNjMgMTQ4LjMyMSw1OC4zNTQgQzE0OC4zNzcsNTguMzUyIDE0OC40MjQsNTguMzg3IDE0OC40MzksNTguNDM4IEMxNDguNDU0LDU4LjQ5IDE0OC40MzIsNTguNTQ1IDE0OC4zODUsNTguNTcyIEw2OS4xMjksMTA0LjMzMSBDNjkuMTExLDEwNC4zNDIgNjkuMDksMTA0LjM0NyA2OS4wNywxMDQuMzQ3IEw2OS4wNywxMDQuMzQ3IFogTTY1LjY2NSwxMDEuOTc1IEM2NS43NTQsMTAxLjk3NSA2NS44NDIsMTAxLjk3NyA2NS45MywxMDEuOTgxIEM2Ny4xOTYsMTAyLjAzNyA2OC4yODMsMTAyLjQ2OSA2OC44MzgsMTAzLjEzOSBDNjkuMDY1LDEwMy40MTMgNjkuMTg4LDEwMy43MTQgNjkuMTk4LDEwNC4wMjEgTDE0Ny44ODMsNTguNTkyIEMxNDcuODQ3LDU4LjU5MiAxNDcuODExLDU4LjU5MSAxNDcuNzc2LDU4LjU4OSBDMTQ2LjUwOSw1OC41MzMgMTQ1LjQyMiw1OC4xIDE0NC44NjcsNTcuNDMxIEMxNDQuNTg1LDU3LjA5MSAxNDQuNDY1LDU2LjcwNyAxNDQuNTIsNTYuMzI0IEMxNDQuNTYzLDU2LjAyMSAxNDQuNTUyLDU1LjcxNiAxNDQuNDg4LDU1LjQxNCBMNjMuODQ2LDEwMS45NyBDNjQuMzUzLDEwMi4wMDIgNjQuODY3LDEwMi4wMDYgNjUuMzc0LDEwMS45ODIgQzY1LjQ3MSwxMDEuOTc3IDY1LjU2OCwxMDEuOTc1IDY1LjY2NSwxMDEuOTc1IEw2NS42NjUsMTAxLjk3NSBaIiBpZD0iRmlsbC01IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIuMjA4LDU1LjEzNCBDMS4yMDcsNTMuMzA3IDEuOTY3LDUwLjkxNyAzLjkwNiw0OS43OTcgTDU5LjkxNywxNy40NTMgQzYxLjg1NiwxNi4zMzMgNjQuMjQxLDE2LjkwNyA2NS4yNDMsMTguNzM0IEw2NS40NzUsMTkuMTQ0IEM2NS44NzIsMTkuODgyIDY2LjM2OCwyMC41NiA2Ni45NDUsMjEuMTY1IEw2Ny4yMjMsMjEuNDM1IEM3MC41NDgsMjQuNjQ5IDc1LjgwNiwyNS4xNTEgODAuMTExLDIyLjY2NSBMODcuNDMsMTguNDQ1IEM4OS4zNywxNy4zMjYgOTEuNzU0LDE3Ljg5OSA5Mi43NTUsMTkuNzI3IEw5Ni4wMDUsMjUuNjU1IEwxMi40ODYsNzMuODg0IEwyLjIwOCw1NS4xMzQgWiIgaWQ9IkZpbGwtNiIgZmlsbD0iI0ZBRkFGQSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi40ODYsNzQuMDAxIEMxMi40NzYsNzQuMDAxIDEyLjQ2NSw3My45OTkgMTIuNDU1LDczLjk5NiBDMTIuNDI0LDczLjk4OCAxMi4zOTksNzMuOTY3IDEyLjM4NCw3My45NCBMMi4xMDYsNTUuMTkgQzEuMDc1LDUzLjMxIDEuODU3LDUwLjg0NSAzLjg0OCw0OS42OTYgTDU5Ljg1OCwxNy4zNTIgQzYwLjUyNSwxNi45NjcgNjEuMjcxLDE2Ljc2NCA2Mi4wMTYsMTYuNzY0IEM2My40MzEsMTYuNzY0IDY0LjY2NiwxNy40NjYgNjUuMzI3LDE4LjY0NiBDNjUuMzM3LDE4LjY1NCA2NS4zNDUsMTguNjYzIDY1LjM1MSwxOC42NzQgTDY1LjU3OCwxOS4wODggQzY1LjU4NCwxOS4xIDY1LjU4OSwxOS4xMTIgNjUuNTkxLDE5LjEyNiBDNjUuOTg1LDE5LjgzOCA2Ni40NjksMjAuNDk3IDY3LjAzLDIxLjA4NSBMNjcuMzA1LDIxLjM1MSBDNjkuMTUxLDIzLjEzNyA3MS42NDksMjQuMTIgNzQuMzM2LDI0LjEyIEM3Ni4zMTMsMjQuMTIgNzguMjksMjMuNTgyIDgwLjA1MywyMi41NjMgQzgwLjA2NCwyMi41NTcgODAuMDc2LDIyLjU1MyA4MC4wODgsMjIuNTUgTDg3LjM3MiwxOC4zNDQgQzg4LjAzOCwxNy45NTkgODguNzg0LDE3Ljc1NiA4OS41MjksMTcuNzU2IEM5MC45NTYsMTcuNzU2IDkyLjIwMSwxOC40NzIgOTIuODU4LDE5LjY3IEw5Ni4xMDcsMjUuNTk5IEM5Ni4xMzgsMjUuNjU0IDk2LjExOCwyNS43MjQgOTYuMDYzLDI1Ljc1NiBMMTIuNTQ1LDczLjk4NSBDMTIuNTI2LDczLjk5NiAxMi41MDYsNzQuMDAxIDEyLjQ4Niw3NC4wMDEgTDEyLjQ4Niw3NC4wMDEgWiBNNjIuMDE2LDE2Ljk5NyBDNjEuMzEyLDE2Ljk5NyA2MC42MDYsMTcuMTkgNTkuOTc1LDE3LjU1NCBMMy45NjUsNDkuODk5IEMyLjA4Myw1MC45ODUgMS4zNDEsNTMuMzA4IDIuMzEsNTUuMDc4IEwxMi41MzEsNzMuNzIzIEw5NS44NDgsMjUuNjExIEw5Mi42NTMsMTkuNzgyIEM5Mi4wMzgsMTguNjYgOTAuODcsMTcuOTkgODkuNTI5LDE3Ljk5IEM4OC44MjUsMTcuOTkgODguMTE5LDE4LjE4MiA4Ny40ODksMTguNTQ3IEw4MC4xNzIsMjIuNzcyIEM4MC4xNjEsMjIuNzc4IDgwLjE0OSwyMi43ODIgODAuMTM3LDIyLjc4NSBDNzguMzQ2LDIzLjgxMSA3Ni4zNDEsMjQuMzU0IDc0LjMzNiwyNC4zNTQgQzcxLjU4OCwyNC4zNTQgNjkuMDMzLDIzLjM0NyA2Ny4xNDIsMjEuNTE5IEw2Ni44NjQsMjEuMjQ5IEM2Ni4yNzcsMjAuNjM0IDY1Ljc3NCwxOS45NDcgNjUuMzY3LDE5LjIwMyBDNjUuMzYsMTkuMTkyIDY1LjM1NiwxOS4xNzkgNjUuMzU0LDE5LjE2NiBMNjUuMTYzLDE4LjgxOSBDNjUuMTU0LDE4LjgxMSA2NS4xNDYsMTguODAxIDY1LjE0LDE4Ljc5IEM2NC41MjUsMTcuNjY3IDYzLjM1NywxNi45OTcgNjIuMDE2LDE2Ljk5NyBMNjIuMDE2LDE2Ljk5NyBaIiBpZD0iRmlsbC03IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQyLjQzNCw0OC44MDggTDQyLjQzNCw0OC44MDggQzM5LjkyNCw0OC44MDcgMzcuNzM3LDQ3LjU1IDM2LjU4Miw0NS40NDMgQzM0Ljc3MSw0Mi4xMzkgMzYuMTQ0LDM3LjgwOSAzOS42NDEsMzUuNzg5IEw1MS45MzIsMjguNjkxIEM1My4xMDMsMjguMDE1IDU0LjQxMywyNy42NTggNTUuNzIxLDI3LjY1OCBDNTguMjMxLDI3LjY1OCA2MC40MTgsMjguOTE2IDYxLjU3MywzMS4wMjMgQzYzLjM4NCwzNC4zMjcgNjIuMDEyLDM4LjY1NyA1OC41MTQsNDAuNjc3IEw0Ni4yMjMsNDcuNzc1IEM0NS4wNTMsNDguNDUgNDMuNzQyLDQ4LjgwOCA0Mi40MzQsNDguODA4IEw0Mi40MzQsNDguODA4IFogTTU1LjcyMSwyOC4xMjUgQzU0LjQ5NSwyOC4xMjUgNTMuMjY1LDI4LjQ2MSA1Mi4xNjYsMjkuMDk2IEwzOS44NzUsMzYuMTk0IEMzNi41OTYsMzguMDg3IDM1LjMwMiw0Mi4xMzYgMzYuOTkyLDQ1LjIxOCBDMzguMDYzLDQ3LjE3MyA0MC4wOTgsNDguMzQgNDIuNDM0LDQ4LjM0IEM0My42NjEsNDguMzQgNDQuODksNDguMDA1IDQ1Ljk5LDQ3LjM3IEw1OC4yODEsNDAuMjcyIEM2MS41NiwzOC4zNzkgNjIuODUzLDM0LjMzIDYxLjE2NCwzMS4yNDggQzYwLjA5MiwyOS4yOTMgNTguMDU4LDI4LjEyNSA1NS43MjEsMjguMTI1IEw1NS43MjEsMjguMTI1IFoiIGlkPSJGaWxsLTgiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQ5LjU4OCwyLjQwNyBDMTQ5LjU4OCwyLjQwNyAxNTUuNzY4LDUuOTc1IDE1Ni4zMjUsNi4yOTcgTDE1Ni4zMjUsNy4xODQgQzE1Ni4zMjUsNy4zNiAxNTYuMzM4LDcuNTQ0IDE1Ni4zNjIsNy43MzMgQzE1Ni4zNzMsNy44MTQgMTU2LjM4Miw3Ljg5NCAxNTYuMzksNy45NzUgQzE1Ni41Myw5LjM5IDE1Ny4zNjMsMTAuOTczIDE1OC40OTUsMTEuOTc0IEwxNjUuODkxLDE4LjUxOSBDMTY2LjA2OCwxOC42NzUgMTY2LjI0OSwxOC44MTQgMTY2LjQzMiwxOC45MzQgQzE2OC4wMTEsMTkuOTc0IDE2OS4zODIsMTkuNCAxNjkuNDk0LDE3LjY1MiBDMTY5LjU0MywxNi44NjggMTY5LjU1MSwxNi4wNTcgMTY5LjUxNywxNS4yMjMgTDE2OS41MTQsMTUuMDYzIEwxNjkuNTE0LDEzLjkxMiBDMTcwLjc4LDE0LjY0MiAxOTUuNTAxLDI4LjkxNSAxOTUuNTAxLDI4LjkxNSBMMTk1LjUwMSw4Mi45MTUgQzE5NS41MDEsODQuMDA1IDE5NC43MzEsODQuNDQ1IDE5My43ODEsODMuODk3IEwxNTEuMzA4LDU5LjM3NCBDMTUwLjM1OCw1OC44MjYgMTQ5LjU4OCw1Ny40OTcgMTQ5LjU4OCw1Ni40MDggTDE0OS41ODgsMjIuMzc1IiBpZD0iRmlsbC05IiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5NC41NTMsODQuMjUgQzE5NC4yOTYsODQuMjUgMTk0LjAxMyw4NC4xNjUgMTkzLjcyMiw4My45OTcgTDE1MS4yNSw1OS40NzYgQzE1MC4yNjksNTguOTA5IDE0OS40NzEsNTcuNTMzIDE0OS40NzEsNTYuNDA4IEwxNDkuNDcxLDIyLjM3NSBMMTQ5LjcwNSwyMi4zNzUgTDE0OS43MDUsNTYuNDA4IEMxNDkuNzA1LDU3LjQ1OSAxNTAuNDUsNTguNzQ0IDE1MS4zNjYsNTkuMjc0IEwxOTMuODM5LDgzLjc5NSBDMTk0LjI2Myw4NC4wNCAxOTQuNjU1LDg0LjA4MyAxOTQuOTQyLDgzLjkxNyBDMTk1LjIyNyw4My43NTMgMTk1LjM4NCw4My4zOTcgMTk1LjM4NCw4Mi45MTUgTDE5NS4zODQsMjguOTgyIEMxOTQuMTAyLDI4LjI0MiAxNzIuMTA0LDE1LjU0MiAxNjkuNjMxLDE0LjExNCBMMTY5LjYzNCwxNS4yMiBDMTY5LjY2OCwxNi4wNTIgMTY5LjY2LDE2Ljg3NCAxNjkuNjEsMTcuNjU5IEMxNjkuNTU2LDE4LjUwMyAxNjkuMjE0LDE5LjEyMyAxNjguNjQ3LDE5LjQwNSBDMTY4LjAyOCwxOS43MTQgMTY3LjE5NywxOS41NzggMTY2LjM2NywxOS4wMzIgQzE2Ni4xODEsMTguOTA5IDE2NS45OTUsMTguNzY2IDE2NS44MTQsMTguNjA2IEwxNTguNDE3LDEyLjA2MiBDMTU3LjI1OSwxMS4wMzYgMTU2LjQxOCw5LjQzNyAxNTYuMjc0LDcuOTg2IEMxNTYuMjY2LDcuOTA3IDE1Ni4yNTcsNy44MjcgMTU2LjI0Nyw3Ljc0OCBDMTU2LjIyMSw3LjU1NSAxNTYuMjA5LDcuMzY1IDE1Ni4yMDksNy4xODQgTDE1Ni4yMDksNi4zNjQgQzE1NS4zNzUsNS44ODMgMTQ5LjUyOSwyLjUwOCAxNDkuNTI5LDIuNTA4IEwxNDkuNjQ2LDIuMzA2IEMxNDkuNjQ2LDIuMzA2IDE1NS44MjcsNS44NzQgMTU2LjM4NCw2LjE5NiBMMTU2LjQ0Miw2LjIzIEwxNTYuNDQyLDcuMTg0IEMxNTYuNDQyLDcuMzU1IDE1Ni40NTQsNy41MzUgMTU2LjQ3OCw3LjcxNyBDMTU2LjQ4OSw3LjggMTU2LjQ5OSw3Ljg4MiAxNTYuNTA3LDcuOTYzIEMxNTYuNjQ1LDkuMzU4IDE1Ny40NTUsMTAuODk4IDE1OC41NzIsMTEuODg2IEwxNjUuOTY5LDE4LjQzMSBDMTY2LjE0MiwxOC41ODQgMTY2LjMxOSwxOC43MiAxNjYuNDk2LDE4LjgzNyBDMTY3LjI1NCwxOS4zMzYgMTY4LDE5LjQ2NyAxNjguNTQzLDE5LjE5NiBDMTY5LjAzMywxOC45NTMgMTY5LjMyOSwxOC40MDEgMTY5LjM3NywxNy42NDUgQzE2OS40MjcsMTYuODY3IDE2OS40MzQsMTYuMDU0IDE2OS40MDEsMTUuMjI4IEwxNjkuMzk3LDE1LjA2NSBMMTY5LjM5NywxMy43MSBMMTY5LjU3MiwxMy44MSBDMTcwLjgzOSwxNC41NDEgMTk1LjU1OSwyOC44MTQgMTk1LjU1OSwyOC44MTQgTDE5NS42MTgsMjguODQ3IEwxOTUuNjE4LDgyLjkxNSBDMTk1LjYxOCw4My40ODQgMTk1LjQyLDgzLjkxMSAxOTUuMDU5LDg0LjExOSBDMTk0LjkwOCw4NC4yMDYgMTk0LjczNyw4NC4yNSAxOTQuNTUzLDg0LjI1IiBpZD0iRmlsbC0xMCIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDUuNjg1LDU2LjE2MSBMMTY5LjgsNzAuMDgzIEwxNDMuODIyLDg1LjA4MSBMMTQyLjM2LDg0Ljc3NCBDMTM1LjgyNiw4Mi42MDQgMTI4LjczMiw4MS4wNDYgMTIxLjM0MSw4MC4xNTggQzExNi45NzYsNzkuNjM0IDExMi42NzgsODEuMjU0IDExMS43NDMsODMuNzc4IEMxMTEuNTA2LDg0LjQxNCAxMTEuNTAzLDg1LjA3MSAxMTEuNzMyLDg1LjcwNiBDMTEzLjI3LDg5Ljk3MyAxMTUuOTY4LDk0LjA2OSAxMTkuNzI3LDk3Ljg0MSBMMTIwLjI1OSw5OC42ODYgQzEyMC4yNiw5OC42ODUgOTQuMjgyLDExMy42ODMgOTQuMjgyLDExMy42ODMgTDcwLjE2Nyw5OS43NjEgTDE0NS42ODUsNTYuMTYxIiBpZD0iRmlsbC0xMSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05NC4yODIsMTEzLjgxOCBMOTQuMjIzLDExMy43ODUgTDY5LjkzMyw5OS43NjEgTDcwLjEwOCw5OS42NiBMMTQ1LjY4NSw1Ni4wMjYgTDE0NS43NDMsNTYuMDU5IEwxNzAuMDMzLDcwLjA4MyBMMTQzLjg0Miw4NS4yMDUgTDE0My43OTcsODUuMTk1IEMxNDMuNzcyLDg1LjE5IDE0Mi4zMzYsODQuODg4IDE0Mi4zMzYsODQuODg4IEMxMzUuNzg3LDgyLjcxNCAxMjguNzIzLDgxLjE2MyAxMjEuMzI3LDgwLjI3NCBDMTIwLjc4OCw4MC4yMDkgMTIwLjIzNiw4MC4xNzcgMTE5LjY4OSw4MC4xNzcgQzExNS45MzEsODAuMTc3IDExMi42MzUsODEuNzA4IDExMS44NTIsODMuODE5IEMxMTEuNjI0LDg0LjQzMiAxMTEuNjIxLDg1LjA1MyAxMTEuODQyLDg1LjY2NyBDMTEzLjM3Nyw4OS45MjUgMTE2LjA1OCw5My45OTMgMTE5LjgxLDk3Ljc1OCBMMTE5LjgyNiw5Ny43NzkgTDEyMC4zNTIsOTguNjE0IEMxMjAuMzU0LDk4LjYxNyAxMjAuMzU2LDk4LjYyIDEyMC4zNTgsOTguNjI0IEwxMjAuNDIyLDk4LjcyNiBMMTIwLjMxNyw5OC43ODcgQzEyMC4yNjQsOTguODE4IDk0LjU5OSwxMTMuNjM1IDk0LjM0LDExMy43ODUgTDk0LjI4MiwxMTMuODE4IEw5NC4yODIsMTEzLjgxOCBaIE03MC40MDEsOTkuNzYxIEw5NC4yODIsMTEzLjU0OSBMMTE5LjA4NCw5OS4yMjkgQzExOS42Myw5OC45MTQgMTE5LjkzLDk4Ljc0IDEyMC4xMDEsOTguNjU0IEwxMTkuNjM1LDk3LjkxNCBDMTE1Ljg2NCw5NC4xMjcgMTEzLjE2OCw5MC4wMzMgMTExLjYyMiw4NS43NDYgQzExMS4zODIsODUuMDc5IDExMS4zODYsODQuNDA0IDExMS42MzMsODMuNzM4IEMxMTIuNDQ4LDgxLjUzOSAxMTUuODM2LDc5Ljk0MyAxMTkuNjg5LDc5Ljk0MyBDMTIwLjI0Niw3OS45NDMgMTIwLjgwNiw3OS45NzYgMTIxLjM1NSw4MC4wNDIgQzEyOC43NjcsODAuOTMzIDEzNS44NDYsODIuNDg3IDE0Mi4zOTYsODQuNjYzIEMxNDMuMjMyLDg0LjgzOCAxNDMuNjExLDg0LjkxNyAxNDMuNzg2LDg0Ljk2NyBMMTY5LjU2Niw3MC4wODMgTDE0NS42ODUsNTYuMjk1IEw3MC40MDEsOTkuNzYxIEw3MC40MDEsOTkuNzYxIFoiIGlkPSJGaWxsLTEyIiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2Ny4yMywxOC45NzkgTDE2Ny4yMyw2OS44NSBMMTM5LjkwOSw4NS42MjMgTDEzMy40NDgsNzEuNDU2IEMxMzIuNTM4LDY5LjQ2IDEzMC4wMiw2OS43MTggMTI3LjgyNCw3Mi4wMyBDMTI2Ljc2OSw3My4xNCAxMjUuOTMxLDc0LjU4NSAxMjUuNDk0LDc2LjA0OCBMMTE5LjAzNCw5Ny42NzYgTDkxLjcxMiwxMTMuNDUgTDkxLjcxMiw2Mi41NzkgTDE2Ny4yMywxOC45NzkiIGlkPSJGaWxsLTEzIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkxLjcxMiwxMTMuNTY3IEM5MS42OTIsMTEzLjU2NyA5MS42NzIsMTEzLjU2MSA5MS42NTMsMTEzLjU1MSBDOTEuNjE4LDExMy41MyA5MS41OTUsMTEzLjQ5MiA5MS41OTUsMTEzLjQ1IEw5MS41OTUsNjIuNTc5IEM5MS41OTUsNjIuNTM3IDkxLjYxOCw2Mi40OTkgOTEuNjUzLDYyLjQ3OCBMMTY3LjE3MiwxOC44NzggQzE2Ny4yMDgsMTguODU3IDE2Ny4yNTIsMTguODU3IDE2Ny4yODgsMTguODc4IEMxNjcuMzI0LDE4Ljg5OSAxNjcuMzQ3LDE4LjkzNyAxNjcuMzQ3LDE4Ljk3OSBMMTY3LjM0Nyw2OS44NSBDMTY3LjM0Nyw2OS44OTEgMTY3LjMyNCw2OS45MyAxNjcuMjg4LDY5Ljk1IEwxMzkuOTY3LDg1LjcyNSBDMTM5LjkzOSw4NS43NDEgMTM5LjkwNSw4NS43NDUgMTM5Ljg3Myw4NS43MzUgQzEzOS44NDIsODUuNzI1IDEzOS44MTYsODUuNzAyIDEzOS44MDIsODUuNjcyIEwxMzMuMzQyLDcxLjUwNCBDMTMyLjk2Nyw3MC42ODIgMTMyLjI4LDcwLjIyOSAxMzEuNDA4LDcwLjIyOSBDMTMwLjMxOSw3MC4yMjkgMTI5LjA0NCw3MC45MTUgMTI3LjkwOCw3Mi4xMSBDMTI2Ljg3NCw3My4yIDEyNi4wMzQsNzQuNjQ3IDEyNS42MDYsNzYuMDgyIEwxMTkuMTQ2LDk3LjcwOSBDMTE5LjEzNyw5Ny43MzggMTE5LjExOCw5Ny43NjIgMTE5LjA5Miw5Ny43NzcgTDkxLjc3LDExMy41NTEgQzkxLjc1MiwxMTMuNTYxIDkxLjczMiwxMTMuNTY3IDkxLjcxMiwxMTMuNTY3IEw5MS43MTIsMTEzLjU2NyBaIE05MS44MjksNjIuNjQ3IEw5MS44MjksMTEzLjI0OCBMMTE4LjkzNSw5Ny41OTggTDEyNS4zODIsNzYuMDE1IEMxMjUuODI3LDc0LjUyNSAxMjYuNjY0LDczLjA4MSAxMjcuNzM5LDcxLjk1IEMxMjguOTE5LDcwLjcwOCAxMzAuMjU2LDY5Ljk5NiAxMzEuNDA4LDY5Ljk5NiBDMTMyLjM3Nyw2OS45OTYgMTMzLjEzOSw3MC40OTcgMTMzLjU1NCw3MS40MDcgTDEzOS45NjEsODUuNDU4IEwxNjcuMTEzLDY5Ljc4MiBMMTY3LjExMywxOS4xODEgTDkxLjgyOSw2Mi42NDcgTDkxLjgyOSw2Mi42NDcgWiIgaWQ9IkZpbGwtMTQiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTY4LjU0MywxOS4yMTMgTDE2OC41NDMsNzAuMDgzIEwxNDEuMjIxLDg1Ljg1NyBMMTM0Ljc2MSw3MS42ODkgQzEzMy44NTEsNjkuNjk0IDEzMS4zMzMsNjkuOTUxIDEyOS4xMzcsNzIuMjYzIEMxMjguMDgyLDczLjM3NCAxMjcuMjQ0LDc0LjgxOSAxMjYuODA3LDc2LjI4MiBMMTIwLjM0Niw5Ny45MDkgTDkzLjAyNSwxMTMuNjgzIEw5My4wMjUsNjIuODEzIEwxNjguNTQzLDE5LjIxMyIgaWQ9IkZpbGwtMTUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTMuMDI1LDExMy44IEM5My4wMDUsMTEzLjggOTIuOTg0LDExMy43OTUgOTIuOTY2LDExMy43ODUgQzkyLjkzMSwxMTMuNzY0IDkyLjkwOCwxMTMuNzI1IDkyLjkwOCwxMTMuNjg0IEw5Mi45MDgsNjIuODEzIEM5Mi45MDgsNjIuNzcxIDkyLjkzMSw2Mi43MzMgOTIuOTY2LDYyLjcxMiBMMTY4LjQ4NCwxOS4xMTIgQzE2OC41MiwxOS4wOSAxNjguNTY1LDE5LjA5IDE2OC42MDEsMTkuMTEyIEMxNjguNjM3LDE5LjEzMiAxNjguNjYsMTkuMTcxIDE2OC42NiwxOS4yMTIgTDE2OC42Niw3MC4wODMgQzE2OC42Niw3MC4xMjUgMTY4LjYzNyw3MC4xNjQgMTY4LjYwMSw3MC4xODQgTDE0MS4yOCw4NS45NTggQzE0MS4yNTEsODUuOTc1IDE0MS4yMTcsODUuOTc5IDE0MS4xODYsODUuOTY4IEMxNDEuMTU0LDg1Ljk1OCAxNDEuMTI5LDg1LjkzNiAxNDEuMTE1LDg1LjkwNiBMMTM0LjY1NSw3MS43MzggQzEzNC4yOCw3MC45MTUgMTMzLjU5Myw3MC40NjMgMTMyLjcyLDcwLjQ2MyBDMTMxLjYzMiw3MC40NjMgMTMwLjM1Nyw3MS4xNDggMTI5LjIyMSw3Mi4zNDQgQzEyOC4xODYsNzMuNDMzIDEyNy4zNDcsNzQuODgxIDEyNi45MTksNzYuMzE1IEwxMjAuNDU4LDk3Ljk0MyBDMTIwLjQ1LDk3Ljk3MiAxMjAuNDMxLDk3Ljk5NiAxMjAuNDA1LDk4LjAxIEw5My4wODMsMTEzLjc4NSBDOTMuMDY1LDExMy43OTUgOTMuMDQ1LDExMy44IDkzLjAyNSwxMTMuOCBMOTMuMDI1LDExMy44IFogTTkzLjE0Miw2Mi44ODEgTDkzLjE0MiwxMTMuNDgxIEwxMjAuMjQ4LDk3LjgzMiBMMTI2LjY5NSw3Ni4yNDggQzEyNy4xNCw3NC43NTggMTI3Ljk3Nyw3My4zMTUgMTI5LjA1Miw3Mi4xODMgQzEzMC4yMzEsNzAuOTQyIDEzMS41NjgsNzAuMjI5IDEzMi43Miw3MC4yMjkgQzEzMy42ODksNzAuMjI5IDEzNC40NTIsNzAuNzMxIDEzNC44NjcsNzEuNjQxIEwxNDEuMjc0LDg1LjY5MiBMMTY4LjQyNiw3MC4wMTYgTDE2OC40MjYsMTkuNDE1IEw5My4xNDIsNjIuODgxIEw5My4xNDIsNjIuODgxIFoiIGlkPSJGaWxsLTE2IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2OS44LDcwLjA4MyBMMTQyLjQ3OCw4NS44NTcgTDEzNi4wMTgsNzEuNjg5IEMxMzUuMTA4LDY5LjY5NCAxMzIuNTksNjkuOTUxIDEzMC4zOTMsNzIuMjYzIEMxMjkuMzM5LDczLjM3NCAxMjguNSw3NC44MTkgMTI4LjA2NCw3Ni4yODIgTDEyMS42MDMsOTcuOTA5IEw5NC4yODIsMTEzLjY4MyBMOTQuMjgyLDYyLjgxMyBMMTY5LjgsMTkuMjEzIEwxNjkuOCw3MC4wODMgWiIgaWQ9IkZpbGwtMTciIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTQuMjgyLDExMy45MTcgQzk0LjI0MSwxMTMuOTE3IDk0LjIwMSwxMTMuOTA3IDk0LjE2NSwxMTMuODg2IEM5NC4wOTMsMTEzLjg0NSA5NC4wNDgsMTEzLjc2NyA5NC4wNDgsMTEzLjY4NCBMOTQuMDQ4LDYyLjgxMyBDOTQuMDQ4LDYyLjczIDk0LjA5Myw2Mi42NTIgOTQuMTY1LDYyLjYxMSBMMTY5LjY4MywxOS4wMSBDMTY5Ljc1NSwxOC45NjkgMTY5Ljg0NCwxOC45NjkgMTY5LjkxNywxOS4wMSBDMTY5Ljk4OSwxOS4wNTIgMTcwLjAzMywxOS4xMjkgMTcwLjAzMywxOS4yMTIgTDE3MC4wMzMsNzAuMDgzIEMxNzAuMDMzLDcwLjE2NiAxNjkuOTg5LDcwLjI0NCAxNjkuOTE3LDcwLjI4NSBMMTQyLjU5NSw4Ni4wNiBDMTQyLjUzOCw4Ni4wOTIgMTQyLjQ2OSw4Ni4xIDE0Mi40MDcsODYuMDggQzE0Mi4zNDQsODYuMDYgMTQyLjI5Myw4Ni4wMTQgMTQyLjI2Niw4NS45NTQgTDEzNS44MDUsNzEuNzg2IEMxMzUuNDQ1LDcwLjk5NyAxMzQuODEzLDcwLjU4IDEzMy45NzcsNzAuNTggQzEzMi45MjEsNzAuNTggMTMxLjY3Niw3MS4yNTIgMTMwLjU2Miw3Mi40MjQgQzEyOS41NCw3My41MDEgMTI4LjcxMSw3NC45MzEgMTI4LjI4Nyw3Ni4zNDggTDEyMS44MjcsOTcuOTc2IEMxMjEuODEsOTguMDM0IDEyMS43NzEsOTguMDgyIDEyMS43Miw5OC4xMTIgTDk0LjM5OCwxMTMuODg2IEM5NC4zNjIsMTEzLjkwNyA5NC4zMjIsMTEzLjkxNyA5NC4yODIsMTEzLjkxNyBMOTQuMjgyLDExMy45MTcgWiBNOTQuNTE1LDYyLjk0OCBMOTQuNTE1LDExMy4yNzkgTDEyMS40MDYsOTcuNzU0IEwxMjcuODQsNzYuMjE1IEMxMjguMjksNzQuNzA4IDEyOS4xMzcsNzMuMjQ3IDEzMC4yMjQsNzIuMTAzIEMxMzEuNDI1LDcwLjgzOCAxMzIuNzkzLDcwLjExMiAxMzMuOTc3LDcwLjExMiBDMTM0Ljk5NSw3MC4xMTIgMTM1Ljc5NSw3MC42MzggMTM2LjIzLDcxLjU5MiBMMTQyLjU4NCw4NS41MjYgTDE2OS41NjYsNjkuO\0ï¿½q\0\0\0\0\0ï¿½q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½o\0\0\0\0\0\0\0\0\0\0\0\0 =p\0\0\0\0hï¿½q\0\0\0\0ï¿½\b3\0\0\0\0ï¿½\b3\0\0\0\0\0ï¿½Ie\0\0\0\0ï¿½Ie\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0pï¿½f\0\0\0\0\0\0\0\0\0\0\0\0ï¿½i\0\0\0\x008Je\0\0\0\0\0\0\0\0\0\0\0\0ï¿½Ie\0\0\0\0\0@\0\0\0\0\0\0ï¿½Ie\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Æ©\0\0\0\0\0\0@\0\0\0\0\0\0Æ©\0\0\0\0\0\0\0\0\0\0\0\0\x002\0ï¿½x\0\0\0\0\0ï¿½x\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½ï¿½\0\0\0\0\0\0\0\0\0\0\0\0ï¿½Uï¿½\0\0\0\0hï¿½x\0\0\0\0\0\0\0\0\0\0\0\0 ï¿½x\0\0\0\0\0@\0\0\0\0\0\0 ï¿½x\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0\0\0\0\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0\0@\0\0\0\0\0\0ï¿½ï¿½ï¿½\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x000?\0\0\0\0\0\0\0\0\0\0\0\0???\0\0\0\0h)?\0\0\0\0\0\0\0\0\0\0\0\0 )?\0\0\0\0\0@\0\0\0\0\0\0 )?\0\0\0\0\0\0\0\0\0\0\0\0kwLjAyNyBDMTE4LjI5MSw4Ni45NiAxMjIuNjExLDc5LjUwOSAxMjIuNjExLDczLjQxNiBDMTIyLjYxMSw3MS40ODkgMTIyLjE2OSw2OS44NTYgMTIxLjMzMyw2OC42OTIgQzEyMS4yNjYsNjguNiAxMjEuMjc2LDY4LjQ3MyAxMjEuMzU2LDY4LjM5MiBDMTIxLjQzNiw2OC4zMTEgMTIxLjU2Myw2OC4yOTkgMTIxLjY1Niw2OC4zNjUgQzEyMy4zMjcsNjkuNTM3IDEyNC4yNDcsNzEuNzQ2IDEyNC4yNDcsNzQuNTg0IEMxMjQuMjQ3LDgwLjgyNiAxMTkuODIxLDg4LjQ0NyAxMTQuMzgyLDkxLjU4NyBDMTEyLjgwOCw5Mi40OTUgMTExLjI5OCw5Mi45NDMgMTA5Ljg5NCw5Mi45NDMgTDEwOS44OTQsOTIuOTQzIFogTTEwNi45MjUsOTEuNDAxIEMxMDcuNzM4LDkyLjA1MiAxMDguNzQ1LDkyLjI3OCAxMDkuODkzLDkyLjI3OCBMMTA5Ljg5NCw5Mi4yNzggQzExMS4yMTUsOTIuMjc4IDExMi42NDcsOTEuOTUxIDExNC4xNDgsOTEuMDg0IEMxMTkuNDU5LDg4LjAxNyAxMjMuNzgsODAuNjIxIDEyMy43OCw3NC41MjggQzEyMy43OCw3Mi41NDkgMTIzLjMxNyw3MC45MjkgMTIyLjQ1NCw2OS43NjcgQzEyMi44NjUsNzAuODAyIDEyMy4wNzksNzIuMDQyIDEyMy4wNzksNzMuNDAyIEMxMjMuMDc5LDc5LjY0NSAxMTguNjUzLDg3LjI4NSAxMTMuMjE0LDkwLjQyNSBDMTExLjY0LDkxLjMzNCAxMTAuMTMsOTEuNzQyIDEwOC43MjQsOTEuNzQyIEMxMDguMDgzLDkxLjc0MiAxMDcuNDgxLDkxLjU5MyAxMDYuOTI1LDkxLjQwMSBMMTA2LjkyNSw5MS40MDEgWiIgaWQ9IkZpbGwtMTkiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjA5Nyw5MC4yMyBDMTE4LjQ4MSw4Ny4xMjIgMTIyLjg0NSw3OS41OTQgMTIyLjg0NSw3My40MTYgQzEyMi44NDUsNzEuMzY1IDEyMi4zNjIsNjkuNzI0IDEyMS41MjIsNjguNTU2IEMxMTkuNzM4LDY3LjMwNCAxMTcuMTQ4LDY3LjM2MiAxMTQuMjY1LDY5LjAyNiBDMTA4Ljg4MSw3Mi4xMzQgMTA0LjUxNyw3OS42NjIgMTA0LjUxNyw4NS44NCBDMTA0LjUxNyw4Ny44OTEgMTA1LDg5LjUzMiAxMDUuODQsOTAuNyBDMTA3LjYyNCw5MS45NTIgMTEwLjIxNCw5MS44OTQgMTEzLjA5Nyw5MC4yMyIgaWQ9IkZpbGwtMjAiIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA4LjcyNCw5MS42MTQgTDEwOC43MjQsOTEuNjE0IEMxMDcuNTgyLDkxLjYxNCAxMDYuNTY2LDkxLjQwMSAxMDUuNzA1LDkwLjc5NyBDMTA1LjY4NCw5MC43ODMgMTA1LjY2NSw5MC44MTEgMTA1LjY1LDkwLjc5IEMxMDQuNzU2LDg5LjU0NiAxMDQuMjgzLDg3Ljg0MiAxMDQuMjgzLDg1LjgxNyBDMTA0LjI4Myw3OS41NzUgMTA4LjcwOSw3MS45NTMgMTE0LjE0OCw2OC44MTIgQzExNS43MjIsNjcuOTA0IDExNy4yMzIsNjcuNDQ5IDExOC42MzgsNjcuNDQ5IEMxMTkuNzgsNjcuNDQ5IDEyMC43OTYsNjcuNzU4IDEyMS42NTYsNjguMzYyIEMxMjEuNjc4LDY4LjM3NyAxMjEuNjk3LDY4LjM5NyAxMjEuNzEyLDY4LjQxOCBDMTIyLjYwNiw2OS42NjIgMTIzLjA3OSw3MS4zOSAxMjMuMDc5LDczLjQxNSBDMTIzLjA3OSw3OS42NTggMTE4LjY1Myw4Ny4xOTggMTEzLjIxNCw5MC4zMzggQzExMS42NCw5MS4yNDcgMTEwLjEzLDkxLjYxNCAxMDguNzI0LDkxLjYxNCBMMTA4LjcyNCw5MS42MTQgWiBNMTA2LjAwNiw5MC41MDUgQzEwNi43OCw5MS4wMzcgMTA3LjY5NCw5MS4yODEgMTA4LjcyNCw5MS4yODEgQzExMC4wNDcsOTEuMjgxIDExMS40NzgsOTAuODY4IDExMi45OCw5MC4wMDEgQzExOC4yOTEsODYuOTM1IDEyMi42MTEsNzkuNDk2IDEyMi42MTEsNzMuNDAzIEMxMjIuNjExLDcxLjQ5NCAxMjIuMTc3LDY5Ljg4IDEyMS4zNTYsNjguNzE4IEMxMjAuNTgyLDY4LjE4NSAxMTkuNjY4LDY3LjkxOSAxMTguNjM4LDY3LjkxOSBDMTE3LjMxNSw2Ny45MTkgMTE1Ljg4Myw2OC4zNiAxMTQuMzgyLDY5LjIyNyBDMTA5LjA3MSw3Mi4yOTMgMTA0Ljc1MSw3OS43MzMgMTA0Ljc1MSw4NS44MjYgQzEwNC43NTEsODcuNzM1IDEwNS4xODUsODkuMzQzIDEwNi4wMDYsOTAuNTA1IEwxMDYuMDA2LDkwLjUwNSBaIiBpZD0iRmlsbC0yMSIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDkuMzE4LDcuMjYyIEwxMzkuMzM0LDE2LjE0IEwxNTUuMjI3LDI3LjE3MSBMMTYwLjgxNiwyMS4wNTkgTDE0OS4zMTgsNy4yNjIiIGlkPSJGaWxsLTIyIiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2OS42NzYsMTMuODQgTDE1OS45MjgsMTkuNDY3IEMxNTYuMjg2LDIxLjU3IDE1MC40LDIxLjU4IDE0Ni43ODEsMTkuNDkxIEMxNDMuMTYxLDE3LjQwMiAxNDMuMTgsMTQuMDAzIDE0Ni44MjIsMTEuOSBMMTU2LjMxNyw2LjI5MiBMMTQ5LjU4OCwyLjQwNyBMNjcuNzUyLDQ5LjQ3OCBMMTEzLjY3NSw3NS45OTIgTDExNi43NTYsNzQuMjEzIEMxMTcuMzg3LDczLjg0OCAxMTcuNjI1LDczLjMxNSAxMTcuMzc0LDcyLjgyMyBDMTE1LjAxNyw2OC4xOTEgMTE0Ljc4MSw2My4yNzcgMTE2LjY5MSw1OC41NjEgQzEyMi4zMjksNDQuNjQxIDE0MS4yLDMzLjc0NiAxNjUuMzA5LDMwLjQ5MSBDMTczLjQ3OCwyOS4zODggMTgxLjk4OSwyOS41MjQgMTkwLjAxMywzMC44ODUgQzE5MC44NjUsMzEuMDMgMTkxLjc4OSwzMC44OTMgMTkyLjQyLDMwLjUyOCBMMTk1LjUwMSwyOC43NSBMMTY5LjY3NiwxMy44NCIgaWQ9IkZpbGwtMjMiIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjY3NSw3Ni40NTkgQzExMy41OTQsNzYuNDU5IDExMy41MTQsNzYuNDM4IDExMy40NDIsNzYuMzk3IEw2Ny41MTgsNDkuODgyIEM2Ny4zNzQsNDkuNzk5IDY3LjI4NCw0OS42NDUgNjcuMjg1LDQ5LjQ3OCBDNjcuMjg1LDQ5LjMxMSA2Ny4zNzQsNDkuMTU3IDY3LjUxOSw0OS4wNzMgTDE0OS4zNTUsMi4wMDIgQzE0OS40OTksMS45MTkgMTQ5LjY3NywxLjkxOSAxNDkuODIxLDIuMDAyIEwxNTYuNTUsNS44ODcgQzE1Ni43NzQsNi4wMTcgMTU2Ljg1LDYuMzAyIDE1Ni43MjIsNi41MjYgQzE1Ni41OTIsNi43NDkgMTU2LjMwNyw2LjgyNiAxNTYuMDgzLDYuNjk2IEwxNDkuNTg3LDIuOTQ2IEw2OC42ODcsNDkuNDc5IEwxMTMuNjc1LDc1LjQ1MiBMMTE2LjUyMyw3My44MDggQzExNi43MTUsNzMuNjk3IDExNy4xNDMsNzMuMzk5IDExNi45NTgsNzMuMDM1IEMxMTQuNTQyLDY4LjI4NyAxMTQuMyw2My4yMjEgMTE2LjI1OCw1OC4zODUgQzExOS4wNjQsNTEuNDU4IDEyNS4xNDMsNDUuMTQzIDEzMy44NCw0MC4xMjIgQzE0Mi40OTcsMzUuMTI0IDE1My4zNTgsMzEuNjMzIDE2NS4yNDcsMzAuMDI4IEMxNzMuNDQ1LDI4LjkyMSAxODIuMDM3LDI5LjA1OCAxOTAuMDkxLDMwLjQyNSBDMTkwLjgzLDMwLjU1IDE5MS42NTIsMzAuNDMyIDE5Mi4xODYsMzAuMTI0IEwxOTQuNTY3LDI4Ljc1IEwxNjkuNDQyLDE0LjI0NCBDMTY5LjIxOSwxNC4xMTUgMTY5LjE0MiwxMy44MjkgMTY5LjI3MSwxMy42MDYgQzE2OS40LDEzLjM4MiAxNjkuNjg1LDEzLjMwNiAxNjkuOTA5LDEzLjQzNSBMMTk1LjczNCwyOC4zNDUgQzE5NS44NzksMjguNDI4IDE5NS45NjgsMjguNTgzIDE5NS45NjgsMjguNzUgQzE5NS45NjgsMjguOTE2IDE5NS44NzksMjkuMDcxIDE5NS43MzQsMjkuMTU0IEwxOTIuNjUzLDMwLjkzMyBDMTkxLjkzMiwzMS4zNSAxOTAuODksMzEuNTA4IDE4OS45MzUsMzEuMzQ2IEMxODEuOTcyLDI5Ljk5NSAxNzMuNDc4LDI5Ljg2IDE2NS4zNzIsMzAuOTU0IEMxNTMuNjAyLDMyLjU0MyAxNDIuODYsMzUuOTkzIDEzNC4zMDcsNDAuOTMxIEMxMjUuNzkzLDQ1Ljg0NyAxMTkuODUxLDUyLjAwNCAxMTcuMTI0LDU4LjczNiBDMTE1LjI3LDYzLjMxNCAxMTUuNTAxLDY4LjExMiAxMTcuNzksNzIuNjExIEMxMTguMTYsNzMuMzM2IDExNy44NDUsNzQuMTI0IDExNi45OSw3NC42MTcgTDExMy45MDksNzYuMzk3IEMxMTMuODM2LDc2LjQzOCAxMTMuNzU2LDc2LjQ1OSAxMTMuNjc1LDc2LjQ1OSIgaWQ9IkZpbGwtMjQiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjMxNiwyMS4yNzkgQzE1MC45MDMsMjEuMjc5IDE0OC40OTUsMjAuNzUxIDE0Ni42NjQsMTkuNjkzIEMxNDQuODQ2LDE4LjY0NCAxNDMuODQ0LDE3LjIzMiAxNDMuODQ0LDE1LjcxOCBDMTQzLjg0NCwxNC4xOTEgMTQ0Ljg2LDEyLjc2MyAxNDYuNzA1LDExLjY5OCBMMTU2LjE5OCw2LjA5MSBDMTU2LjMwOSw2LjAyNSAxNTYuNDUyLDYuMDYyIDE1Ni41MTgsNi4xNzMgQzE1Ni41ODMsNi4yODQgMTU2LjU0Nyw2LjQyNyAxNTYuNDM2LDYuNDkzIEwxNDYuOTQsMTIuMTAyIEMxNDUuMjQ0LDEzLjA4MSAxNDQuMzEyLDE0LjM2NSAxNDQuMzEyLDE1LjcxOCBDMTQ0LjMxMiwxNy4wNTggMTQ1LjIzLDE4LjMyNiAxNDYuODk3LDE5LjI4OSBDMTUwLjQ0NiwyMS4zMzggMTU2LjI0LDIxLjMyNyAxNTkuODExLDE5LjI2NSBMMTY5LjU1OSwxMy42MzcgQzE2OS42NywxMy41NzMgMTY5LjgxMywxMy42MTEgMTY5Ljg3OCwxMy43MjMgQzE2OS45NDMsMTMuODM0IDE2OS45MDQsMTMuOTc3IDE2OS43OTMsMTQuMDQyIEwxNjAuMDQ1LDE5LjY3IEMxNTguMTg3LDIwLjc0MiAxNTUuNzQ5LDIxLjI3OSAxNTMuMzE2LDIxLjI3OSIgaWQ9IkZpbGwtMjUiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEzLjY3NSw3NS45OTIgTDY3Ljc2Miw0OS40ODQiIGlkPSJGaWxsLTI2IiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExMy42NzUsNzYuMzQyIEMxMTMuNjE1LDc2LjM0MiAxMTMuNTU1LDc2LjMyNyAxMTMuNSw3Ni4yOTUgTDY3LjU4Nyw0OS43ODcgQzY3LjQxOSw0OS42OSA2Ny4zNjIsNDkuNDc2IDY3LjQ1OSw0OS4zMDkgQzY3LjU1Niw0OS4xNDEgNjcuNzcsNDkuMDgzIDY3LjkzNyw0OS4xOCBMMTEzLjg1LDc1LjY4OCBDMTE0LjAxOCw3NS43ODUgMTE0LjA3NSw3NiAxMTMuOTc4LDc2LjE2NyBDMTEzLjkxNCw3Ni4yNzkgMTEzLjc5Niw3Ni4zNDIgMTEzLjY3NSw3Ni4zNDIiIGlkPSJGaWxsLTI3IiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY3Ljc2Miw0OS40ODQgTDY3Ljc2MiwxMDMuNDg1IEM2Ny43NjIsMTA0LjU3NSA2OC41MzIsMTA1LjkwMyA2OS40ODIsMTA2LjQ1MiBMMTExLjk1NSwxMzAuOTczIEMxMTIuOTA1LDEzMS41MjIgMTEzLjY3NSwxMzEuMDgzIDExMy42NzUsMTI5Ljk5MyBMMTEzLjY3NSw3NS45OTIiIGlkPSJGaWxsLTI4IiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExMi43MjcsMTMxLjU2MSBDMTEyLjQzLDEzMS41NjEgMTEyLjEwNywxMzEuNDY2IDExMS43OCwxMzEuMjc2IEw2OS4zMDcsMTA2Ljc1NSBDNjguMjQ0LDEwNi4xNDIgNjcuNDEyLDEwNC43MDUgNjcuNDEyLDEwMy40ODUgTDY3LjQxMiw0OS40ODQgQzY3LjQxMiw0OS4yOSA2Ny41NjksNDkuMTM0IDY3Ljc2Miw0OS4xMzQgQzY3Ljk1Niw0OS4xMzQgNjguMTEzLDQ5LjI5IDY4LjExMyw0OS40ODQgTDY4LjExMywxMDMuNDg1IEM2OC4xMTMsMTA0LjQ0NSA2OC44MiwxMDUuNjY1IDY5LjY1NywxMDYuMTQ4IEwxMTIuMTMsMTMwLjY3IEMxMTIuNDc0LDEzMC44NjggMTEyLjc5MSwxMzAuOTEzIDExMywxMzAuNzkyIEMxMTMuMjA2LDEzMC42NzMgMTEzLjMyNSwxMzAuMzgxIDExMy4zMjUsMTI5Ljk5MyBMMTEzLjMyNSw3NS45OTIgQzExMy4zMjUsNzUuNzk4IDExMy40ODIsNzUuNjQxIDExMy42NzUsNzUuNjQxIEMxMTMuODY5LDc1LjY0MSAxMTQuMDI1LDc1Ljc5OCAxMTQuMDI1LDc1Ljk5MiBMMTE0LjAyNSwxMjkuOTkzIEMxMTQuMDI1LDEzMC42NDggMTEzLjc4NiwxMzEuMTQ3IDExMy4zNSwxMzEuMzk5IEMxMTMuMTYyLDEzMS41MDcgMTEyLjk1MiwxMzEuNTYxIDExMi43MjcsMTMxLjU2MSIgaWQ9IkZpbGwtMjkiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEyLjg2LDQwLjUxMiBDMTEyLjg2LDQwLjUxMiAxMTIuODYsNDAuNTEyIDExMi44NTksNDAuNTEyIEMxMTAuNTQxLDQwLjUxMiAxMDguMzYsMzkuOTkgMTA2LjcxNywzOS4wNDEgQzEwNS4wMTIsMzguMDU3IDEwNC4wNzQsMzYuNzI2IDEwNC4wNzQsMzUuMjkyIEMxMDQuMDc0LDMzLjg0NyAxMDUuMDI2LDMyLjUwMSAxMDYuNzU0LDMxLjUwNCBMMTE4Ljc5NSwyNC41NTEgQzEyMC40NjMsMjMuNTg5IDEyMi42NjksMjMuMDU4IDEyNS4wMDcsMjMuMDU4IEMxMjcuMzI1LDIzLjA1OCAxMjkuNTA2LDIzLjU4MSAxMzEuMTUsMjQuNTMgQzEzMi44NTQsMjUuNTE0IDEzMy43OTMsMjYuODQ1IDEzMy43OTMsMjguMjc4IEMxMzMuNzkzLDI5LjcyNCAxMzIuODQxLDMxLjA2OSAxMzEuMTEzLDMyLjA2NyBMMTE5LjA3MSwzOS4wMTkgQzExNy40MDMsMzkuOTgyIDExNS4xOTcsNDAuNTEyIDExMi44Niw0MC41MTIgTDExMi44Niw0MC41MTIgWiBNMTI1LjAwNywyMy43NTkgQzEyMi43OSwyMy43NTkgMTIwLjcwOSwyNC4yNTYgMTE5LjE0NiwyNS4xNTggTDEwNy4xMDQsMzIuMTEgQzEwNS42MDIsMzIuOTc4IDEwNC43NzQsMzQuMTA4IDEwNC43NzQsMzUuMjkyIEMxMDQuNzc0LDM2LjQ2NSAxMDUuNTg5LDM3LjU4MSAxMDcuMDY3LDM4LjQzNCBDMTA4LjYwNSwzOS4zMjMgMTEwLjY2MywzOS44MTIgMTEyLjg1OSwzOS44MTIgTDExMi44NiwzOS44MTIgQzExNS4wNzYsMzkuODEyIDExNy4xNTgsMzkuMzE1IDExOC43MjEsMzguNDEzIEwxMzAuNzYyLDMxLjQ2IEMxMzIuMjY0LDMwLjU5MyAxMzMuMDkyLDI5LjQ2MyAxMzMuMDkyLDI4LjI3OCBDMTMzLjA5MiwyNy4xMDYgMTMyLjI3OCwyNS45OSAxMzAuOCwyNS4xMzYgQzEyOS4yNjEsMjQuMjQ4IDEyNy4yMDQsMjMuNzU5IDEyNS4wMDcsMjMuNzU5IEwxMjUuMDA3LDIzLjc1OSBaIiBpZD0iRmlsbC0zMCIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjUuNjMsMTYuMjE5IEwxNTkuODk2LDE5LjUzIEMxNTYuNzI5LDIxLjM1OCAxNTEuNjEsMjEuMzY3IDE0OC40NjMsMTkuNTUgQzE0NS4zMTYsMTcuNzMzIDE0NS4zMzIsMTQuNzc4IDE0OC40OTksMTIuOTQ5IEwxNTQuMjMzLDkuNjM5IEwxNjUuNjMsMTYuMjE5IiBpZD0iRmlsbC0zMSIgZmlsbD0iI0ZBRkFGQSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTQuMjMzLDEwLjQ0OCBMMTY0LjIyOCwxNi4yMTkgTDE1OS41NDYsMTguOTIzIEMxNTguMTEyLDE5Ljc1IDE1Ni4xOTQsMjAuMjA2IDE1NC4xNDcsMjAuMjA2IEMxNTIuMTE4LDIwLjIwNiAxNTAuMjI0LDE5Ljc1NyAxNDguODE0LDE4Ljk0MyBDMTQ3LjUyNCwxOC4xOTkgMTQ2LjgxNCwxNy4yNDkgMTQ2LjgxNCwxNi4yNjkgQzE0Ni44MTQsMTUuMjc4IDE0Ny41MzcsMTQuMzE0IDE0OC44NSwxMy41NTYgTDE1NC4yMzMsMTAuNDQ4IE0xNTQuMjMzLDkuNjM5IEwxNDguNDk5LDEyLjk0OSBDMTQ1LjMzMiwxNC43NzggMTQ1LjMxNiwxNy43MzMgMTQ4LjQ2MywxOS41NSBDMTUwLjAzMSwyMC40NTUgMTUyLjA4NiwyMC45MDcgMTU0LjE0NywyMC45MDcgQzE1Ni4yMjQsMjAuOTA3IDE1OC4zMDYsMjAuNDQ3IDE1OS44OTYsMTkuNTMgTDE2NS42MywxNi4yMTkgTDE1NC4yMzMsOS42MzkiIGlkPSJGaWxsLTMyIiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0NS40NDUsNzIuNjY3IEwxNDUuNDQ1LDcyLjY2NyBDMTQzLjY3Miw3Mi42NjcgMTQyLjIwNCw3MS44MTcgMTQxLjIwMiw3MC40MjIgQzE0MS4xMzUsNzAuMzMgMTQxLjE0NSw3MC4xNDcgMTQxLjIyNSw3MC4wNjYgQzE0MS4zMDUsNjkuOTg1IDE0MS40MzIsNjkuOTQ2IDE0MS41MjUsNzAuMDExIEMxNDIuMzA2LDcwLjU1OSAxNDMuMjMxLDcwLjgyMyAxNDQuMjc2LDcwLjgyMiBDMTQ1LjU5OCw3MC44MjIgMTQ3LjAzLDcwLjM3NiAxNDguNTMyLDY5LjUwOSBDMTUzLjg0Miw2Ni40NDMgMTU4LjE2Myw1OC45ODcgMTU4LjE2Myw1Mi44OTQgQzE1OC4xNjMsNTAuOTY3IDE1Ny43MjEsNDkuMzMyIDE1Ni44ODQsNDguMTY4IEMxNTYuODE4LDQ4LjA3NiAxNTYuODI4LDQ3Ljk0OCAxNTYuOTA4LDQ3Ljg2NyBDMTU2Ljk4OCw0Ny43ODYgMTU3LjExNCw0Ny43NzQgMTU3LjIwOCw0Ny44NCBDMTU4Ljg3OCw0OS4wMTIgMTU5Ljc5OCw1MS4yMiAxNTkuNzk4LDU0LjA1OSBDMTU5Ljc5OCw2MC4zMDEgMTU1LjM3Myw2OC4wNDYgMTQ5LjkzMyw3MS4xODYgQzE0OC4zNiw3Mi4wOTQgMTQ2Ljg1LDcyLjY2NyAxNDUuNDQ1LDcyLjY2NyBMMTQ1LjQ0NSw3Mi42NjcgWiBNMTQyLjQ3Niw3MSBDMTQzLjI5LDcxLjY1MSAxNDQuMjk2LDcyLjAwMiAxNDUuNDQ1LDcyLjAwMiBDMTQ2Ljc2Nyw3Mi4wMDIgMTQ4LjE5OCw3MS41NSAxNDkuNyw3MC42ODIgQzE1NS4wMSw2Ny42MTcgMTU5LjMzMSw2MC4xNTkgMTU5LjMzMSw1NC4wNjUgQzE1OS4zMzEsNTIuMDg1IDE1OC44NjgsNTAuNDM1IDE1OC4wMDYsNDkuMjcyIEMxNTguNDE3LDUwLjMwNyAxNTguNjMsNTEuNTMyIDE1OC42Myw1Mi44OTIgQzE1OC42Myw1OS4xMzQgMTU0LjIwNSw2Ni43NjcgMTQ4Ljc2NSw2OS45MDcgQzE0Ny4xOTIsNzAuODE2IDE0NS42ODEsNzEuMjgzIDE0NC4yNzYsNzEuMjgzIEMxNDMuNjM0LDcxLjI4MyAxNDMuMDMzLDcxLjE5MiAxNDIuNDc2LDcxIEwxNDIuNDc2LDcxIFoiIGlkPSJGaWxsLTMzIiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0OC42NDgsNjkuNzA0IEMxNTQuMDMyLDY2LjU5NiAxNTguMzk2LDU5LjA2OCAxNTguMzk2LDUyLjg5MSBDMTU4LjM5Niw1MC44MzkgMTU3LjkxMyw0OS4xOTggMTU3LjA3NCw0OC4wMyBDMTU1LjI4OSw0Ni43NzggMTUyLjY5OSw0Ni44MzYgMTQ5LjgxNiw0OC41MDEgQzE0NC40MzMsNTEuNjA5IDE0MC4wNjgsNTkuMTM3IDE0MC4wNjgsNjUuMzE0IEMxNDAuMDY4LDY3LjM2NSAxNDAuNTUyLDY5LjAwNiAxNDEuMzkxLDcwLjE3NCBDMTQzLjE3Niw3MS40MjcgMTQ1Ljc2NSw3MS4zNjkgMTQ4LjY0OCw2OS43MDQiIGlkPSJGaWxsLTM0IiBmaWxsPSIjRkFGQUZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0NC4yNzYsNzEuMjc2IEwxNDQuMjc2LDcxLjI3NiBDMTQzLjEzMyw3MS4yNzYgMTQyLjExOCw3MC45NjkgMTQxLjI1Nyw3MC4zNjUgQzE0MS4yMzYsNzAuMzUxIDE0MS4yMTcsNzAuMzMyIDE0MS4yMDIsNzAuMzExIEMxNDAuMzA3LDY5LjA2NyAxMzkuODM1LDY3LjMzOSAxMzkuODM1LDY1LjMxNCBDMTM5LjgzNSw1OS4wNzMgMTQ0LjI2LDUxLjQzOSAxNDkuNyw0OC4yOTggQzE1MS4yNzMsNDcuMzkgMTUyLjc4NCw0Ni45MjkgMTU0LjE4OSw0Ni45MjkgQzE1NS4zMzIsNDYuOTI5IDE1Ni4zNDcsNDcuMjM2IDE1Ny4yMDgsNDcuODM5IEMxNTcuMjI5LDQ3Ljg1NCAxNTcuMjQ4LDQ3Ljg3MyAxNTcuMjYzLDQ3Ljg5NCBDMTU4LjE1Nyw0OS4xMzggMTU4LjYzLDUwLjg2NSAxNTguNjMsNTIuODkxIEMxNTguNjMsNTkuMTMyIDE1NC4yMDUsNjYuNzY2IDE0OC43NjUsNjkuOTA3IEMxNDcuMTkyLDcwLjgxNSAxNDUuNjgxLDcxLjI3NiAxNDQuMjc2LDcxLjI3NiBMMTQ0LjI3Niw3MS4yNzYgWiBNMTQxLjU1OCw3MC4xMDQgQzE0Mi4zMzEsNzAuNjM3IDE0My4yNDUsNzEuMDA1IDE0NC4yNzYsNzEuMDA1IEMxNDUuNTk4LDcxLjAwNSAxNDcuMDMsNzAuNDY3IDE0OC41MzIsNjkuNiBDMTUzLjg0Miw2Ni41MzQgMTU4LjE2Myw1OS4wMzMgMTU4LjE2Myw1Mi45MzkgQzE1OC4xNjMsNTEuMDMxIDE1Ny43MjksNDkuMzg1IDE1Ni45MDcsNDguMjIzIEMxNTYuMTMzLDQ3LjY5MSAxNTUuMjE5LDQ3LjQwOSAxNTQuMTg5LDQ3LjQwOSBDMTUyLjg2Nyw0Ny40MDkgMTUxLjQzNSw0Ny44NDIgMTQ5LjkzMyw0OC43MDkgQzE0NC42MjMsNTEuNzc1IDE0MC4zMDIsNTkuMjczIDE0MC4zMDIsNjUuMzY2IEMxNDAuMzAyLDY3LjI3NiAxNDAuNzM2LDY4Ljk0MiAxNDEuNTU4LDcwLjEwNCBMMTQxLjU1OCw3MC4xMDQgWiIgaWQ9IkZpbGwtMzUiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUwLjcyLDY1LjM2MSBMMTUwLjM1Nyw2NS4wNjYgQzE1MS4xNDcsNjQuMDkyIDE1MS44NjksNjMuMDQgMTUyLjUwNSw2MS45MzggQzE1My4zMTMsNjAuNTM5IDE1My45NzgsNTkuMDY3IDE1NC40ODIsNTcuNTYzIEwxNTQuOTI1LDU3LjcxMiBDMTU0LjQxMiw1OS4yNDUgMTUzLjczMyw2MC43NDUgMTUyLjkxLDYyLjE3MiBDMTUyLjI2Miw2My4yOTUgMTUxLjUyNSw2NC4zNjggMTUwLjcyLDY1LjM2MSIgaWQ9IkZpbGwtMzYiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTE1LjkxNyw4NC41MTQgTDExNS41NTQsODQuMjIgQzExNi4zNDQsODMuMjQ1IDExNy4wNjYsODIuMTk0IDExNy43MDIsODEuMDkyIEMxMTguNTEsNzkuNjkyIDExOS4xNzUsNzguMjIgMTE5LjY3OCw3Ni43MTcgTDEyMC4xMjEsNzYuODY1IEMxMTkuNjA4LDc4LjM5OCAxMTguOTMsNzkuODk5IDExOC4xMDYsODEuMzI2IEMxMTcuNDU4LDgyLjQ0OCAxMTYuNzIyLDgzLjUyMSAxMTUuOTE3LDg0LjUxNCIgaWQ9IkZpbGwtMzciIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTE0LDEzMC40NzYgTDExNCwxMzAuMDA4IEwxMTQsNzYuMDUyIEwxMTQsNzUuNTg0IEwxMTQsNzYuMDUyIEwxMTQsMTMwLjAwOCBMMTE0LDEzMC40NzYiIGlkPSJGaWxsLTM4IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iSW1wb3J0ZWQtTGF5ZXJzLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYyLjAwMDAwMCwgMC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuODIyLDM3LjQ3NCBDMTkuODM5LDM3LjMzOSAxOS43NDcsMzcuMTk0IDE5LjU1NSwzNy4wODIgQzE5LjIyOCwzNi44OTQgMTguNzI5LDM2Ljg3MiAxOC40NDYsMzcuMDM3IEwxMi40MzQsNDAuNTA4IEMxMi4zMDMsNDAuNTg0IDEyLjI0LDQwLjY4NiAxMi4yNDMsNDAuNzkzIEMxMi4yNDUsNDAuOTI1IDEyLjI0NSw0MS4yNTQgMTIuMjQ1LDQxLjM3MSBMMTIuMjQ1LDQxLjQxNCBMMTIuMjM4LDQxLjU0MiBDOC4xNDgsNDMuODg3IDUuNjQ3LDQ1LjMyMSA1LjY0Nyw0NS4zMjEgQzUuNjQ2LDQ1LjMyMSAzLjU3LDQ2LjM2NyAyLjg2LDUwLjUxMyBDMi44Niw1MC41MTMgMS45NDgsNTcuNDc0IDEuOTYyLDcwLjI1OCBDMS45NzcsODIuODI4IDIuNTY4LDg3LjMyOCAzLjEyOSw5MS42MDkgQzMuMzQ5LDkzLjI5MyA2LjEzLDkzLjczNCA2LjEzLDkzLjczNCBDNi40NjEsOTMuNzc0IDYuODI4LDkzLjcwNyA3LjIxLDkzLjQ4NiBMODIuNDgzLDQ5LjkzNSBDODQuMjkxLDQ4Ljg2NiA4NS4xNSw0Ni4yMTYgODUuNTM5LDQzLjY1MSBDODYuNzUyLDM1LjY2MSA4Ny4yMTQsMTAuNjczIDg1LjI2NCwzLjc3MyBDODUuMDY4LDMuMDggODQuNzU0LDIuNjkgODQuMzk2LDIuNDkxIEw4Mi4zMSwxLjcwMSBDODEuNTgzLDEuNzI5IDgwLjg5NCwyLjE2OCA4MC43NzYsMi4yMzYgQzgwLjYzNiwyLjMxNyA0MS44MDcsMjQuNTg1IDIwLjAzMiwzNy4wNzIgTDE5LjgyMiwzNy40NzQiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODIuMzExLDEuNzAxIEw4NC4zOTYsMi40OTEgQzg0Ljc1NCwyLjY5IDg1LjA2OCwzLjA4IDg1LjI2NCwzLjc3MyBDODcuMjEzLDEwLjY3MyA4Ni43NTEsMzUuNjYgODUuNTM5LDQzLjY1MSBDODUuMTQ5LDQ2LjIxNiA4NC4yOSw0OC44NjYgODIuNDgzLDQ5LjkzNSBMNy4yMSw5My40ODYgQzYuODk3LDkzLjY2NyA2LjU5NSw5My43NDQgNi4zMTQsOTMuNzQ0IEw2LjEzMSw5My43MzMgQzYuMTMxLDkzLjczNCAzLjM0OSw5My4yOTMgMy4xMjgsOTEuNjA5IEMyLjU2OCw4Ny4zMjcgMS45NzcsODIuODI4IDEuOTYzLDcwLjI1OCBDMS45NDgsNTcuNDc0IDIuODYsNTAuNTEzIDIuODYsNTAuNTEzIEMzLjU3LDQ2LjM2NyA1LjY0Nyw0NS4zMjEgNS42NDcsNDUuMzIxIEM1LjY0Nyw0NS4zMjEgOC4xNDgsNDMuODg3IDEyLjIzOCw0MS41NDIgTDEyLjI0NSw0MS40MTQgTDEyLjI0NSw0MS4zNzEgQzEyLjI0NSw0MS4yNTQgMTIuMjQ1LDQwLjkyNSAxMi4yNDMsNDAuNzkzIEMxMi4yNCw0MC42ODYgMTIuMzAyLDQwLjU4MyAxMi40MzQsNDAuNTA4IEwxOC40NDYsMzcuMDM2IEMxOC41NzQsMzYuOTYyIDE4Ljc0NiwzNi45MjYgMTguOTI3LDM2LjkyNiBDMTkuMTQ1LDM2LjkyNiAxOS4zNzYsMzYuOTc5IDE5LjU1NCwzNy4wODIgQzE5Ljc0NywzNy4xOTQgMTkuODM5LDM3LjM0IDE5LjgyMiwzNy40NzQgTDIwLjAzMywzNy4wNzIgQzQxLjgwNiwyNC41ODUgODAuNjM2LDIuMzE4IDgwLjc3NywyLjIzNiBDODAuODk0LDIuMTY4IDgxLjU4MywxLjcyOSA4Mi4zMTEsMS43MDEgTTgyLjMxMSwwLjcwNCBMODIuMjcyLDAuNzA1IEM4MS42NTQsMC43MjggODAuOTg5LDAuOTQ5IDgwLjI5OCwxLjM2MSBMODAuMjc3LDEuMzczIEM4MC4xMjksMS40NTggNTkuNzY4LDEzLjEzNSAxOS43NTgsMzYuMDc5IEMxOS41LDM1Ljk4MSAxOS4yMTQsMzUuOTI5IDE4LjkyNywzNS45MjkgQzE4LjU2MiwzNS45MjkgMTguMjIzLDM2LjAxMyAxNy45NDcsMzYuMTczIEwxMS45MzUsMzkuNjQ0IEMxMS40OTMsMzkuODk5IDExLjIzNiw0MC4zMzQgMTEuMjQ2LDQwLjgxIEwxMS4yNDcsNDAuOTYgTDUuMTY3LDQ0LjQ0NyBDNC43OTQsNDQuNjQ2IDIuNjI1LDQ1Ljk3OCAxLjg3Nyw1MC4zNDUgTDEuODcxLDUwLjM4NCBDMS44NjIsNTAuNDU0IDAuOTUxLDU3LjU1NyAwLjk2NSw3MC4yNTkgQzAuOTc5LDgyLjg3OSAxLjU2OCw4Ny4zNzUgMi4xMzcsOTEuNzI0IEwyLjEzOSw5MS43MzkgQzIuNDQ3LDk0LjA5NCA1LjYxNCw5NC42NjIgNS45NzUsOTQuNzE5IEw2LjAwOSw5NC43MjMgQzYuMTEsOTQuNzM2IDYuMjEzLDk0Ljc0MiA2LjMxNCw5NC43NDIgQzYuNzksOTQuNzQyIDcuMjYsOTQuNjEgNy43MSw5NC4zNSBMODIuOTgzLDUwLjc5OCBDODQuNzk0LDQ5LjcyNyA4NS45ODIsNDcuMzc1IDg2LjUyNSw0My44MDEgQzg3LjcxMSwzNS45ODcgODguMjU5LDEwLjcwNSA4Ni4yMjQsMy41MDIgQzg1Ljk3MSwyLjYwOSA4NS41MiwxLjk3NSA4NC44ODEsMS42MiBMODQuNzQ5LDEuNTU4IEw4Mi42NjQsMC43NjkgQzgyLjU1MSwwLjcyNSA4Mi40MzEsMC43MDQgODIuMzExLDAuNzA0IiBpZD0iRmlsbC0yIiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY2LjI2NywxMS41NjUgTDY3Ljc2MiwxMS45OTkgTDExLjQyMyw0NC4zMjUiIGlkPSJGaWxsLTMiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjAyLDkwLjU0NSBDMTIuMDI5LDkwLjU0NSAxMS44NjIsOTAuNDU1IDExLjc2OSw5MC4yOTUgQzExLjYzMiw5MC4wNTcgMTEuNzEzLDg5Ljc1MiAxMS45NTIsODkuNjE0IEwzMC4zODksNzguOTY5IEMzMC42MjgsNzguODMxIDMwLjkzMyw3OC45MTMgMzEuMDcxLDc5LjE1MiBDMzEuMjA4LDc5LjM5IDMxLjEyNyw3OS42OTYgMzAuODg4LDc5LjgzMyBMMTIuNDUxLDkwLjQ3OCBMMTIuMjAyLDkwLjU0NSIgaWQ9IkZpbGwtNCIgZmlsbD0iIzYwN0Q4QiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy43NjQsNDIuNjU0IEwxMy42NTYsNDIuNTkyIEwxMy43MDIsNDIuNDIxIEwxOC44MzcsMzkuNDU3IEwxOS4wMDcsMzkuNTAyIEwxOC45NjIsMzkuNjczIEwxMy44MjcsNDIuNjM3IEwxMy43NjQsNDIuNjU0IiBpZD0iRmlsbC01IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguNTIsOTAuMzc1IEw4LjUyLDQ2LjQyMSBMOC41ODMsNDYuMzg1IEw3NS44NCw3LjU1NCBMNzUuODQsNTEuNTA4IEw3NS43NzgsNTEuNTQ0IEw4LjUyLDkwLjM3NSBMOC41Miw5MC4zNzUgWiBNOC43Nyw0Ni41NjQgTDguNzcsODkuOTQ0IEw3NS41OTEsNTEuMzY1IEw3NS41OTEsNy45ODUgTDguNzcsNDYuNTY0IEw4Ljc3LDQ2LjU2NCBaIiBpZD0iRmlsbC02IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0Ljk4Niw4My4xODIgQzI0Ljc1Niw4My4zMzEgMjQuMzc0LDgzLjU2NiAyNC4xMzcsODMuNzA1IEwxMi42MzIsOTAuNDA2IEMxMi4zOTUsOTAuNTQ1IDEyLjQyNiw5MC42NTggMTIuNyw5MC42NTggTDEzLjI2NSw5MC42NTggQzEzLjU0LDkwLjY1OCAxMy45NTgsOTAuNTQ1IDE0LjE5NSw5MC40MDYgTDI1LjcsODMuNzA1IEMyNS45MzcsODMuNTY2IDI2LjEyOCw4My40NTIgMjYuMTI1LDgzLjQ0OSBDMjYuMTIyLDgzLjQ0NyAyNi4xMTksODMuMjIgMjYuMTE5LDgyLjk0NiBDMjYuMTE5LDgyLjY3MiAyNS45MzEsODIuNTY5IDI1LjcwMSw4Mi43MTkgTDI0Ljk4Niw4My4xODIiIGlkPSJGaWxsLTciIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuMjY2LDkwLjc4MiBMMTIuNyw5MC43ODIgQzEyLjUsOTAuNzgyIDEyLjM4NCw5MC43MjYgMTIuMzU0LDkwLjYxNiBDMTIuMzI0LDkwLjUwNiAxMi4zOTcsOTAuMzk5IDEyLjU2OSw5MC4yOTkgTDI0LjA3NCw4My41OTcgQzI0LjMxLDgzLjQ1OSAyNC42ODksODMuMjI2IDI0LjkxOCw4My4wNzggTDI1LjYzMyw4Mi42MTQgQzI1LjcyMyw4Mi41NTUgMjUuODEzLDgyLjUyNSAyNS44OTksODIuNTI1IEMyNi4wNzEsODIuNTI1IDI2LjI0NCw4Mi42NTUgMjYuMjQ0LDgyLjk0NiBDMjYuMjQ0LDgzLjE2IDI2LjI0NSw4My4zMDkgMjYuMjQ3LDgzLjM4MyBMMjYuMjUzLDgzLjM4NyBMMjYuMjQ5LDgzLjQ1NiBDMjYuMjQ2LDgzLjUzMSAyNi4yNDYsODMuNTMxIDI1Ljc2Myw4My44MTIgTDE0LjI1OCw5MC41MTQgQzE0LDkwLjY2NSAxMy41NjQsOTAuNzgyIDEzLjI2Niw5MC43ODIgTDEzLjI2Niw5MC43ODIgWiBNMTIuNjY2LDkwLjUzMiBMMTIuNyw5MC41MzMgTDEzLjI2Niw5MC41MzMgQzEzLjUxOCw5MC41MzMgMTMuOTE1LDkwLjQyNSAxNC4xMzIsOTAuMjk5IEwyNS42MzcsODMuNTk3IEMyNS44MDUsODMuNDk5IDI1LjkzMSw4My40MjQgMjUuOTk4LDgzLjM4MyBDMjUuOTk0LDgzLjI5OSAyNS45OTQsODMuMTY1IDI1Ljk5NCw4Mi45NDYgTDI1Ljg5OSw4Mi43NzUgTDI1Ljc2OCw4Mi44MjQgTDI1LjA1NCw4My4yODcgQzI0LjgyMiw4My40MzcgMjQuNDM4LDgzLjY3MyAyNC4yLDgzLjgxMiBMMTIuNjk1LDkwLjUxNCBMMTIuNjY2LDkwLjUzMiBMMTIuNjY2LDkwLjUzMiBaIiBpZD0iRmlsbC04IiBmaWxsPSIjNjA3RDhCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjI2Niw4OS44NzEgTDEyLjcsODkuODcxIEMxMi41LDg5Ljg3MSAxMi4zODQsODkuODE1IDEyLjM1NCw4OS43MDUgQzEyLjMyNCw4OS41OTUgMTIuMzk3LDg5LjQ4OCAxMi41NjksODkuMzg4IEwyNC4wNzQsODIuNjg2IEMyNC4zMzIsODIuNTM1IDI0Ljc2OCw4Mi40MTggMjUuMDY3LDgyLjQxOCBMMjUuNjMyLDgyLjQxOCBDMjUuODMyLDgyLjQxOCAyNS45NDgsODIuNDc0IDI1Ljk3OCw4Mi41ODQgQzI2LjAwOCw4Mi42OTQgMjUuOTM1LDgyLjgwMSAyNS43NjMsODIuOTAxIEwxNC4yNTgsODkuNjAzIEMxNCw4OS43NTQgMTMuNTY0LDg5Ljg3MSAxMy4yNjYsODkuODcxIEwxMy4yNjYsODkuODcxIFogTTEyLjY2Niw4OS42MjEgTDEyLjcsODkuNjIyIEwxMy4yNjYsODkuNjIyIEMxMy41MTgsODkuNjIyIDEzLjkxNSw4OS41MTUgMTQuMTMyLDg5LjM4OCBMMjUuNjM3LDgyLjY4NiBMMjUuNjY3LDgyLjY2OCBMMjUuNjMyLDgyLjY2NyBMMjUuMDY3LDgyLjY2NyBDMjQuODE1LDgyLjY2NyAyNC40MTgsODIuNzc1IDI0LjIsODIuOTAxIEwxMi42OTUsODkuNjAzIEwxMi42NjYsODkuNjIxIEwxMi42NjYsODkuNjIxIFoiIGlkPSJGaWxsLTkiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzcsOTAuODAxIEwxMi4zNyw4OS41NTQgTDEyLjM3LDkwLjgwMSIgaWQ9IkZpbGwtMTAiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi4xMyw5My45MDEgQzUuMzc5LDkzLjgwOCA0LjgxNiw5My4xNjQgNC42OTEsOTIuNTI1IEMzLjg2LDg4LjI4NyAzLjU0LDgzLjc0MyAzLjUyNiw3MS4xNzMgQzMuNTExLDU4LjM4OSA0LjQyMyw1MS40MjggNC40MjMsNTEuNDI4IEM1LjEzNCw0Ny4yODIgNy4yMSw0Ni4yMzYgNy4yMSw0Ni4yMzYgQzcuMjEsNDYuMjM2IDgxLjY2NywzLjI1IDgyLjA2OSwzLjAxNyBDODIuMjkyLDIuODg4IDg0LjU1NiwxLjQzMyA4NS4yNjQsMy45NCBDODcuMjE0LDEwLjg0IDg2Ljc1MiwzNS44MjcgODUuNTM5LDQzLjgxOCBDODUuMTUsNDYuMzgzIDg0LjI5MSw0OS4wMzMgODIuNDgzLDUwLjEwMSBMNy4yMSw5My42NTMgQzYuODI4LDkzLjg3NCA2LjQ2MSw5My45NDEgNi4xMyw5My45MDEgQzYuMTMsOTMuOTAxIDMuMzQ5LDkzLjQ2IDMuMTI5LDkxLjc3NiBDMi41NjgsODcuNDk1IDEuOTc3LDgyLjk5NSAxLjk2Miw3MC40MjUgQzEuOTQ4LDU3LjY0MSAyLjg2LDUwLjY4IDIuODYsNTAuNjggQzMuNTcsNDYuNTM0IDUuNjQ3LDQ1LjQ4OSA1LjY0Nyw0NS40ODkgQzUuNjQ2LDQ1LjQ4OSA4LjA2NSw0NC4wOTIgMTIuMjQ1LDQxLjY3OSBMMTMuMTE2LDQxLjU2IEwxOS43MTUsMzcuNzMgTDE5Ljc2MSwzNy4yNjkgTDYuMTMsOTMuOTAxIiBpZD0iRmlsbC0xMSIgZmlsbD0iI0ZBRkFGQSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjMxNyw5NC4xNjEgTDYuMTAyLDk0LjE0OCBMNi4xMDEsOTQuMTQ4IEw1Ljg1Nyw5NC4xMDEgQzUuMTM4LDkzLjk0NSAzLjA4NSw5My4zNjUgMi44ODEsOTEuODA5IEMyLjMxMyw4Ny40NjkgMS43MjcsODIuOTk2IDEuNzEzLDcwLjQyNSBDMS42OTksNTcuNzcxIDIuNjA0LDUwLjcxOCAyLjYxMyw1MC42NDggQzMuMzM4LDQ2LjQxNyA1LjQ0NSw0NS4zMSA1LjUzNSw0NS4yNjYgTDEyLjE2Myw0MS40MzkgTDEzLjAzMyw0MS4zMiBMMTkuNDc5LDM3LjU3OCBMMTkuNTEzLDM3LjI0NCBDMTkuNTI2LDM3LjEwNyAxOS42NDcsMzcuMDA4IDE5Ljc4NiwzNy4wMjEgQzE5LjkyMiwzNy4wMzQgMjAuMDIzLDM3LjE1NiAyMC4wMDksMzcuMjkzIEwxOS45NSwzNy44ODIgTDEzLjE5OCw0MS44MDEgTDEyLjMyOCw0MS45MTkgTDUuNzcyLDQ1LjcwNCBDNS43NDEsNDUuNzIgMy43ODIsNDYuNzcyIDMuMTA2LDUwLjcyMiBDMy4wOTksNTAuNzgyIDIuMTk4LDU3LjgwOCAyLjIxMiw3MC40MjQgQzIuMjI2LDgyLjk2MyAyLjgwOSw4Ny40MiAzLjM3Myw5MS43MjkgQzMuNDY0LDkyLjQyIDQuMDYyLDkyLjg4MyA0LjY4Miw5My4xODEgQzQuNTY2LDkyLjk4NCA0LjQ4Niw5Mi43NzYgNC40NDYsOTIuNTcyIEMzLjY2NSw4OC41ODggMy4yOTEsODQuMzcgMy4yNzYsNzEuMTczIEMzLjI2Miw1OC41MiA0LjE2Nyw1MS40NjYgNC4xNzYsNTEuMzk2IEM0LjkwMSw0Ny4xNjUgNy4wMDgsNDYuMDU5IDcuMDk4LDQ2LjAxNCBDNy4wOTQsNDYuMDE1IDgxLjU0MiwzLjAzNCA4MS45NDQsMi44MDIgTDgxLjk3MiwyLjc4NSBDODIuODc2LDIuMjQ3IDgzLjY5MiwyLjA5NyA4NC4zMzIsMi4zNTIgQzg0Ljg4NywyLjU3MyA4NS4yODEsMy4wODUgODUuNTA0LDMuODcyIEM4Ny41MTgsMTEgODYuOTY0LDM2LjA5MSA4NS43ODUsNDMuODU1IEM4NS4yNzgsNDcuMTk2IDg0LjIxLDQ5LjM3IDgyLjYxLDUwLjMxNyBMNy4zMzUsOTMuODY5IEM2Ljk5OSw5NC4wNjMgNi42NTgsOTQuMTYxIDYuMzE3LDk0LjE2MSBMNi4zMTcsOTQuMTYxIFogTTYuMTcsOTMuNjU0IEM2LjQ2Myw5My42OSA2Ljc3NCw5My42MTcgNy4wODUsOTMuNDM3IEw4Mi4zNTgsNDkuODg2IEM4NC4xODEsNDguODA4IDg0Ljk2LDQ1Ljk3MSA4NS4yOTIsNDMuNzggQzg2LjQ2NiwzNi4wNDkgODcuMDIzLDExLjA4NSA4NS4wMjQsNC4wMDggQzg0Ljg0NiwzLjM3NyA4NC41NTEsMi45NzYgODQuMTQ4LDIuODE2IEM4My42NjQsMi42MjMgODIuOTgyLDIuNzY0IDgyLjIyNywzLjIxMyBMODIuMTkzLDMuMjM0IEM4MS43OTEsMy40NjYgNy4zMzUsNDYuNDUyIDcuMzM1LDQ2LjQ1MiBDNy4zMDQsNDYuNDY5IDUuMzQ2LDQ3LjUyMSA0LjY2OSw1MS40NzEgQzQuNjYyLDUxLjUzIDMuNzYxLDU4LjU1NiAzLjc3NSw3MS4xNzMgQzMuNzksODQuMzI4IDQuMTYxLDg4LjUyNCA0LjkzNiw5Mi40NzYgQzUuMDI2LDkyLjkzNyA1LjQxMiw5My40NTkgNS45NzMsOTMuNjE1IEM2LjA4Nyw5My42NCA2LjE1OCw5My42NTIgNi4xNjksOTMuNjU0IEw2LjE3LDkzLjY1NCBMNi4xNyw5My42NTQgWiIgaWQ9IkZpbGwtMTIiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy4zMTcsNjguOTgyIEM3LjgwNiw2OC43MDEgOC4yMDIsNjguOTI2IDguMjAyLDY5LjQ4NyBDOC4yMDIsNzAuMDQ3IDcuODA2LDcwLjczIDcuMzE3LDcxLjAxMiBDNi44MjksNzEuMjk0IDYuNDMzLDcxLjA2OSA2LjQzMyw3MC41MDggQzYuNDMzLDY5Ljk0OCA2LjgyOSw2OS4yNjUgNy4zMTcsNjguOTgyIiBpZD0iRmlsbC0xMyIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjkyLDcxLjEzMyBDNi42MzEsNzEuMTMzIDYuNDMzLDcwLjkwNSA2LjQzMyw3MC41MDggQzYuNDMzLDY5Ljk0OCA2LjgyOSw2OS4yNjUgNy4zMTcsNjguOTgyIEM3LjQ2LDY4LjkgNy41OTUsNjguODYxIDcuNzE0LDY4Ljg2MSBDOC4wMDMsNjguODYxIDguMjAyLDY5LjA5IDguMjAyLDY5LjQ4NyBDOC4yMDIsNzAuMDQ3IDcuODA2LDcwLjczIDcuMzE3LDcxLjAxMiBDNy4xNzQsNzEuMDk0IDcuMDM5LDcxLjEzMyA2LjkyLDcxLjEzMyBNNy43MTQsNjguNjc0IEM3LjU1Nyw2OC42NzQgNy4zOTIsNjguNzIzIDcuMjI0LDY4LjgyMSBDNi42NzYsNjkuMTM4IDYuMjQ2LDY5Ljg3OSA2LjI0Niw3MC41MDggQzYuMjQ2LDcwLjk5NCA2LjUxNyw3MS4zMiA2LjkyLDcxLjMyIEM3LjA3OCw3MS4zMiA3LjI0Myw3MS4yNzEgNy40MTEsNzEuMTc0IEM3Ljk1OSw3MC44NTcgOC4zODksNzAuMTE3IDguMzg5LDY5LjQ4NyBDOC4zODksNjkuMDAxIDguMTE3LDY4LjY3NCA3LjcxNCw2OC42NzQiIGlkPSJGaWxsLTE0IiBmaWxsPSIjODA5N0EyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuOTIsNzAuOTQ3IEM2LjY0OSw3MC45NDcgNi42MjEsNzAuNjQgNi42MjEsNzAuNTA4IEM2LjYyMSw3MC4wMTcgNi45ODIsNjkuMzkyIDcuNDExLDY5LjE0NSBDNy41MjEsNjkuMDgyIDcuNjI1LDY5LjA0OSA3LjcxNCw2OS4wNDkgQzcuOTg2LDY5LjA0OSA4LjAxNSw2OS4zNTUgOC4wMTUsNjkuNDg3IEM4LjAxNSw2OS45NzggNy42NTIsNzAuNjAzIDcuMjI0LDcwLjg1MSBDNy4xMTUsNzAuOTE0IDcuMDEsNzAuOTQ3IDYuOTIsNzAuOTQ3IE03LjcxNCw2OC44NjEgQzcuNTk1LDY4Ljg2MSA3LjQ2LDY4LjkgNy4zMTcsNjguOTgyIEM2LjgyOSw2OS4yNjUgNi40MzMsNjkuOTQ4IDYuNDMzLDcwLjUwOCBDNi40MzMsNzAuOTA1IDYuNjMxLDcxLjEzMyA2LjkyLDcxLjEzMyBDNy4wMzksNzEuMTMzIDcuMTc0LDcxLjA5NCA3LjMxNyw3MS4wMTIgQzcuODA2LDcwLjczIDguMjAyLDcwLjA0NyA4LjIwMiw2OS40ODcgQzguMjAyLDY5LjA5IDguMDAzLDY4Ljg2MSA3LjcxNCw2OC44NjEiIGlkPSJGaWxsLTE1IiBmaWxsPSIjODA5N0EyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNDQ0LDg1LjM1IEM3LjcwOCw4NS4xOTggNy45MjEsODUuMzE5IDcuOTIxLDg1LjYyMiBDNy45MjEsODUuOTI1IDcuNzA4LDg2LjI5MiA3LjQ0NCw4Ni40NDQgQzcuMTgxLDg2LjU5NyA2Ljk2Nyw4Ni40NzUgNi45NjcsODYuMTczIEM2Ljk2Nyw4NS44NzEgNy4xODEsODUuNTAyIDcuNDQ0LDg1LjM1IiBpZD0iRmlsbC0xNiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjIzLDg2LjUxIEM3LjA3NCw4Ni41MSA2Ljk2Nyw4Ni4zODcgNi45NjcsODYuMTczIEM2Ljk2Nyw4NS44NzEgNy4xODEsODUuNTAyIDcuNDQ0LDg1LjM1IEM3LjUyMSw4NS4zMDUgNy41OTQsODUuMjg0IDcuNjU4LDg1LjI4NCBDNy44MTQsODUuMjg0IDcuOTIxLDg1LjQwOCA3LjkyMSw4NS42MjIgQzcuOTIxLDg1LjkyNSA3LjcwOCw4Ni4yOTIgNy40NDQsODYuNDQ0IEM3LjM2Nyw4Ni40ODkgNy4yOTQsODYuNTEgNy4yMyw4Ni41MSBNNy42NTgsODUuMDk4IEM3LjU1OCw4NS4wOTggNy40NTUsODUuMTI3IDcuMzUxLDg1LjE4OCBDNy4wMzEsODUuMzczIDYuNzgxLDg1LjgwNiA2Ljc4MSw4Ni4xNzMgQzYuNzgxLDg2LjQ4MiA2Ljk2Niw4Ni42OTcgNy4yMyw4Ni42OTcgQzcuMzMsODYuNjk3IDcuNDMzLDg2LjY2NiA3LjUzOCw4Ni42MDcgQzcuODU4LDg2LjQyMiA4LjEwOCw4NS45ODkgOC4xMDgsODUuNjIyIEM4LjEwOCw4NS4zMTMgNy45MjMsODUuMDk4IDcuNjU4LDg1LjA5OCIgaWQ9IkZpbGwtMTciIGZpbGw9IiM4MDk3QTIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy4yMyw4Ni4zMjIgTDcuMTU0LDg2LjE3MyBDNy4xNTQsODUuOTM4IDcuMzMzLDg1LjYyOSA3LjUzOCw4NS41MTIgTDcuNjU4LDg1LjQ3MSBMNy43MzQsODUuNjIyIEM3LjczNCw4NS44NTYgNy41NTUsODYuMTY0IDcuMzUxLDg2LjI4MiBMNy4yMyw4Ni4zMjIgTTcuNjU4LDg1LjI4NCBDNy41OTQsODUuMjg0IDcuNTIxLDg1LjMwNSA3LjQ0NCw4NS4zNSBDNy4xODEsODUuNTAyIDYuOTY3LDg1Ljg3MSA2Ljk2Nyw4Ni4xNzMgQzYuOTY3LDg2LjM4NyA3LjA3NCw4Ni41MSA3LjIzLDg2LjUxIEM3LjI5NCw4Ni41MSA3LjM2Nyw4Ni40ODkgNy40NDQsODYuNDQ0IEM3LjcwOCw4Ni4yOTIgNy45MjEsODUuOTI1IDcuOTIxLDg1LjYyMiBDNy45MjEsODUuNDA4IDcuODE0LDg1LjI4NCA3LjY1OCw4NS4yODQiIGlkPSJGaWxsLTE4IiBmaWxsPSIjODA5N0EyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTc3LjI3OCw3Ljc2OSBMNzcuMjc4LDUxLjQzNiBMMTAuMjA4LDkwLjE2IEwxMC4yMDgsNDYuNDkzIEw3Ny4yNzgsNy43NjkiIGlkPSJGaWxsLTE5IiBmaWxsPSIjNDU1QTY0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjA4Myw5MC4zNzUgTDEwLjA4Myw0Ni40MjEgTDEwLjE0Niw0Ni4zODUgTDc3LjQwMyw3LjU1NCBMNzcuNDAzLDUxLjUwOCBMNzcuMzQxLDUxLjU0NCBMMTAuMDgzLDkwLjM3NSBMMTAuMDgzLDkwLjM3NSBaIE0xMC4zMzMsNDYuNTY0IEwxMC4zMzMsODkuOTQ0IEw3Ny4xNTQsNTEuMzY1IEw3Ny4xNTQsNy45ODUgTDEwLjMzMyw0Ni41NjQgTDEwLjMzMyw0Ni41NjQgWiIgaWQ9IkZpbGwtMjAiIGZpbGw9IiM2MDdEOEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjUuNzM3LDg4LjY0NyBMMTE4LjA5OCw5MS45ODEgTDExOC4wOTgsODQgTDEwNi42MzksODguNzEzIEwxMDYuNjM5LDk2Ljk4MiBMOTksMTAwLjMxNSBMMTEyLjM2OSwxMDMuOTYxIEwxMjUuNzM3LDg4LjY0NyIgaWQ9IkltcG9ydGVkLUxheWVycy1Db3B5LTIiIGZpbGw9IiM0NTVBNjQiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              };
              var ct = "CardboardV1",
                ht = "WEBVR_CARDBOARD_VIEWER";
              f.prototype.show = function(t) {
                (this.root = t).appendChild(this.dialog);
                var e = this.dialog.querySelector("#" + this.selectedKey);
                e.checked = !0, this.dialog.style.display = "block"
              }, f.prototype.hide = function() {
                this.root && this.root.contains(this.dialog) && this.root.removeChild(this.dialog), this.dialog.style.display = "none"
              }, f.prototype.getCurrentViewer = function() {
                return n.Viewers[this.selectedKey]
              }, f.prototype.getSelectedKey_ = function() {
                var t = this.dialog.querySelector("input[name=field]:checked");
                return t ? t.id : null
              }, f.prototype.onChange = function(t) {
                this.onChangeCallbacks_.push(t)
              }, f.prototype.fireOnChange_ = function(t) {
                for(var e = 0; e < this.onChangeCallbacks_.length; e++) this.onChangeCallbacks_[e](t)
              }, f.prototype.onSave_ = function() {
                if(this.selectedKey = this.getSelectedKey_(), this.selectedKey && n.Viewers[this.selectedKey]) {
                  this.fireOnChange_(n.Viewers[this.selectedKey]);
                  try {
                    localStorage.setItem(ht, this.selectedKey)
                  } catch (t) {}
                  this.hide()
                }
              }, f.prototype.createDialog_ = function(t) {
                var e = document.createElement("div");
                e.classList.add("webvr-polyfill-viewer-selector"), e.style.display = "none";
                var i = document.createElement("div"),
                  n = i.style;
                n.position = "fixed", n.left = 0, n.top = 0, n.width = "100%", n.height = "100%", n.background = "rgba(0, 0, 0, 0.3)", i.addEventListener("click", this.hide.bind(this));
                var r = document.createElement("div"),
                  n = r.style;
                for(var a in n.boxSizing = "border-box", n.position = "fixed", n.top = "24px", n.left = "50%", n.marginLeft = "-140px", n.width = "280px", n.padding = "24px", n.overflow = "hidden", n.background = "#fafafa", n.fontFamily = "'Roboto', sans-serif", n.boxShadow = "0px 5px 20px #666", r.appendChild(this.createH1_("Select your viewer")), t) r.appendChild(this.createChoice_(a, t[a].label));
                return r.appendChild(this.createButton_("Save", this.onSave_.bind(this))), e.appendChild(i), e.appendChild(r), e
              }, f.prototype.createH1_ = function(t) {
                var e = document.createElement("h1"),
                  i = e.style;
                return i.color = "black", i.fontSize = "20px", i.fontWeight = "bold", i.marginTop = 0, i.marginBottom = "24px", e.innerHTML = t, e
              }, f.prototype.createChoice_ = function(t, e) {
                var i = document.createElement("div");
                i.style.marginTop = "8px", i.style.color = "black";
                var n = document.createElement("input");
                n.style.fontSize = "30px", n.setAttribute("id", t), n.setAttribute("type", "radio"), n.setAttribute("value", t), n.setAttribute("name", "field");
                var r = document.createElement("label");
                return r.style.marginLeft = "4px", r.setAttribute("for", t), r.innerHTML = e, i.appendChild(n), i.appendChild(r), i
              }, f.prototype.createButton_ = function(t, e) {
                var i = document.createElement("button");
                i.innerHTML = t;
                var n = i.style;
                return n.float = "right", n.textTransform = "uppercase", n.color = "#1094f7", n.fontSize = "14px", n.letterSpacing = 0, n.border = 0, n.background = "none", n.marginTop = "16px", i.addEventListener("click", e), i
              };
              var ut, lt, dt = "undefined" != typeof window ? window : void 0 !== dt ? dt : "undefined" != typeof self ? self : {},
                pt = (function(i, t) {
                  ! function(t, e) {
                    i.exports = e()
                  }(0, function() {
                    return function(i) {
                      function n(t) {
                        if(r[t]) return r[t].exports;
                        var e = r[t] = {
                          i: t,
                          l: !1,
                          exports: {}
                        };
                        return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
                      }
                      var r = {};
                      return n.m = i, n.c = r, n.d = function(t, e, i) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                          configurable: !1,
                          enumerable: !0,
                          get: i
                        })
                      }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                          return t.default
                        } : function() {
                          return t
                        };
                        return n.d(e, "a", e), e
                      }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                      }, n.p = "", n(n.s = 0)
                    }([function(t, e, i) {
                      function n(t, e) {
                        if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                      }
                      var r = function() {
                          function n(t, e) {
                            for(var i = 0; i < e.length; i++) {
                              var n = e[i];
                              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                          }
                          return function(t, e, i) {
                            return e && n(t.prototype, e), i && n(t, i), t
                          }
                        }(),
                        a = i(1),
                        s = "undefined" != typeof navigator && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream,
                        o = function() {
                          function t() {
                            n(this, t), s ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("playsinline", ""), this.noSleepVideo.setAttribute("src", a), this.noSleepVideo.addEventListener("timeupdate", function(t) {
                              .5 < this.noSleepVideo.currentTime && (this.noSleepVideo.currentTime = Math.random())
                            }.bind(this)))
                          }
                          return r(t, [{
                            key: "enable",
                            value: function() {
                              s ? (this.disable(), this.noSleepTimer = window.setInterval(function() {
                                window.location.href = "/", window.setTimeout(window.stop, 0)
                              }, 15e3)) : this.noSleepVideo.play()
                            }
                          }, {
                            key: "disable",
                            value: function() {
                              s ? this.noSleepTimer && (window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause()
                            }
                          }]), t
                        }();
                      t.exports = o
                    }, function(t, e, i) {
                      t.exports = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="
                    }])
                  })
                }(lt = {
                  exports: {}
                }, lt.exports), (ut = lt.exports) && ut.__esModule ? ut.default : ut),
                ft = 1e3,
                gt = [0, 0, .5, 1],
                mt = [.5, 0, .5, 1],
                Mt = window.requestAnimationFrame,
                vt = window.cancelAnimationFrame;
              m.prototype.getFrameData = function(t) {
                return k(t, this._getPose(), this)
              }, m.prototype.getPose = function() {
                return Q("VRDisplay.prototype.getPose", "VRDisplay.prototype.getFrameData"), this._getPose()
              }, m.prototype.resetPose = function() {
                return Q("VRDisplay.prototype.resetPose"), this._resetPose()
              }, m.prototype.getImmediatePose = function() {
                return Q("VRDisplay.prototype.getImmediatePose", "VRDisplay.prototype.getFrameData"), this._getPose()
              }, m.prototype.requestAnimationFrame = function(t) {
                return Mt(t)
              }, m.prototype.cancelAnimationFrame = function(t) {
                return vt(t)
              }, m.prototype.wrapForFullscreen = function(t) {
                function e() {
                  if(r.fullscreenElement_) {
                    var t = ["position: absolute", "top: 0", "left: 0", "width: " + Math.max(screen.width, screen.height) + "px", "height: 100%", "border: 0", "margin: 0", "padding: 0"];
                    r.fullscreenElement_.setAttribute("style", t.join("; ") + ";")
                  }
                }
                if(x()) return t;
                if(!this.fullscreenWrapper_) {
                  this.fullscreenWrapper_ = document.createElement("div");
                  var i = ["height: " + Math.min(screen.height, screen.width) + "px !important", "top: 0 !important", "left: 0 !important", "right: 0 !important", "border: 0", "margin: 0", "padding: 0", "z-index: 999999 !important", "position: fixed"];
                  this.fullscreenWrapper_.setAttribute("style", i.join("; ") + ";"), this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper")
                }
                if(this.fullscreenElement_ == t) return this.fullscreenWrapper_;
                if(this.fullscreenElement_ && (this.originalParent_ ? this.originalParent_.appendChild(this.fullscreenElement_) : this.fullscreenElement_.parentElement.removeChild(this.fullscreenElement_)), this.fullscreenElement_ = t, this.originalParent_ = t.parentElement, this.originalParent_ || document.body.appendChild(t), !this.fullscreenWrapper_.parentElement) {
                  var n = this.fullscreenElement_.parentElement;
                  n.insertBefore(this.fullscreenWrapper_, this.fullscreenElement_), n.removeChild(this.fullscreenElement_)
                }
                this.fullscreenWrapper_.insertBefore(this.fullscreenElement_, this.fullscreenWrapper_.firstChild), this.fullscreenElementCachedStyle_ = this.fullscreenElement_.getAttribute("style");
                var r = this;
                return e(), this.fullscreenWrapper_
              }, m.prototype.removeFullscreenWrapper = function() {
                if(this.fullscreenElement_) {
                  var t = this.fullscreenElement_;
                  this.fullscreenElementCachedStyle_ ? t.setAttribute("style", this.fullscreenElementCachedStyle_) : t.removeAttribute("style"), this.fullscreenElement_ = null, this.fullscreenElementCachedStyle_ = null;
                  var e = this.fullscreenWrapper_.parentElement;
                  return this.fullscreenWrapper_.removeChild(t), this.originalParent_ === e ? e.insertBefore(t, this.fullscreenWrapper_) : this.originalParent_ && this.originalParent_.appendChild(t), e.removeChild(this.fullscreenWrapper_), t
                }
              }, m.prototype.requestPresent = function(u) {
                var l = this.isPresenting,
                  d = this;
                return u instanceof Array || (Q("VRDisplay.prototype.requestPresent with non-array argument", "an array of VRLayers as the first argument"), u = [u]), new Promise(function(e, t) {
                  if(d.capabilities.canPresent)
                    if(0 == u.length || u.length > d.capabilities.maxLayers) t(new Error("Invalid number of layers."));
                    else {
                      var i = u[0];
                      if(i.source) {
                        var n = i.leftBounds || gt,
                          r = i.rightBounds || mt;
                        if(l) {
                          var a = d.layer_;
                          a.source !== i.source && (a.source = i.source);
                          for(var s = 0; s < 4; s++) a.leftBounds[s] = n[s], a.rightBounds[s] = r[s];
                          return d.wrapForFullscreen(d.layer_.source), d.updatePresent_(), void e()
                        }
                        if(d.layer_ = {
                            predistorted: i.predistorted,
                            source: i.source,
                            leftBounds: n.slice(0),
                            rightBounds: r.slice(0)
                          }, d.waitingForPresent_ = !1, d.layer_ && d.layer_.source) {
                          var o = d.wrapForFullscreen(d.layer_.source),
                            c = function() {
                              var t = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                              d.isPresenting = o === t, d.isPresenting ? (screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape-primary").catch(function(t) {}), d.waitingForPresent_ = !1, d.beginPresent_(), e()) : (screen.orientation && screen.orientation.unlock && screen.orientation.unlock(), d.removeFullscreenWrapper(), d.disableWakeLock(), d.endPresent_(), d.removeFullscreenListeners_()), d.fireVRDisplayPresentChange_()
                            },
                            h = function() {
                              d.waitingForPresent_ && (d.removeFullscreenWrapper(), d.removeFullscreenListeners_(), d.disableWakeLock(), d.waitingForPresent_ = !1, d.isPresenting = !1, t(new Error("Unable to present.")))
                            };
                          d.addFullscreenListeners_(o, c, h), j(o) ? (d.enableWakeLock(), d.waitingForPresent_ = !0) : (x() || N()) && (d.enableWakeLock(), d.isPresenting = !0, d.beginPresent_(), d.fireVRDisplayPresentChange_(), e())
                        }
                        d.waitingForPresent_ || x() || (C(), t(new Error("Unable to present.")))
                      } else e()
                    }
                  else t(new Error("VRDisplay is not capable of presenting."))
                })
              }, m.prototype.exitPresent = function() {
                var i = this.isPresenting,
                  n = this;
                return this.isPresenting = !1, this.layer_ = null, this.disableWakeLock(), new Promise(function(t, e) {
                  i ? (!C() && x() && (n.endPresent_(), n.fireVRDisplayPresentChange_()), N() && (n.removeFullscreenWrapper(), n.removeFullscreenListeners_(), n.endPresent_(), n.fireVRDisplayPresentChange_()), t()) : e(new Error("Was not presenting to VRDisplay."))
                })
              }, m.prototype.getLayers = function() {
                return this.layer_ ? [this.layer_] : []
              }, m.prototype.fireVRDisplayPresentChange_ = function() {
                var t = new CustomEvent("vrdisplaypresentchange", {
                  detail: {
                    display: this
                  }
                });
                window.dispatchEvent(t)
              }, m.prototype.fireVRDisplayConnect_ = function() {
                var t = new CustomEvent("vrdisplayconnect", {
                  detail: {
                    display: this
                  }
                });
                window.dispatchEvent(t)
              }, m.prototype.addFullscreenListeners_ = function(t, e, i) {
                this.removeFullscreenListeners_(), this.fullscreenEventTarget_ = t, this.fullscreenChangeHandler_ = e, this.fullscreenErrorHandler_ = i, e && (document.fullscreenEnabled ? t.addEventListener("fullscreenchange", e, !1) : document.webkitFullscreenEnabled ? t.addEventListener("webkitfullscreenchange", e, !1) : document.mozFullScreenEnabled ? document.addEventListener("mozfullscreenchange", e, !1) : document.msFullscreenEnabled && t.addEventListener("msfullscreenchange", e, !1)), i && (document.fullscreenEnabled ? t.addEventListener("fullscreenerror", i, !1) : document.webkitFullscreenEnabled ? t.addEventListener("webkitfullscreenerror", i, !1) : document.mozFullScreenEnabled ? document.addEventListener("mozfullscreenerror", i, !1) : document.msFullscreenEnabled && t.addEventListener("msfullscreenerror", i, !1))
              }, m.prototype.removeFullscreenListeners_ = function() {
                if(this.fullscreenEventTarget_) {
                  var t = this.fullscreenEventTarget_;
                  if(this.fullscreenChangeHandler_) {
                    var e = this.fullscreenChangeHandler_;
                    t.removeEventListener("fullscreenchange", e, !1), t.removeEventListener("webkitfullscreenchange", e, !1), document.removeEventListener("mozfullscreenchange", e, !1), t.removeEventListener("msfullscreenchange", e, !1)
                  }
                  if(this.fullscreenErrorHandler_) {
                    var i = this.fullscreenErrorHandler_;
                    t.removeEventListener("fullscreenerror", i, !1), t.removeEventListener("webkitfullscreenerror", i, !1), document.removeEventListener("mozfullscreenerror", i, !1), t.removeEventListener("msfullscreenerror", i, !1)
                  }
                  this.fullscreenEventTarget_ = null, this.fullscreenChangeHandler_ = null, this.fullscreenErrorHandler_ = null
                }
              }, m.prototype.enableWakeLock = function() {
                this.wakelock_ && this.wakelock_.enable()
              }, m.prototype.disableWakeLock = function() {
                this.wakelock_ && this.wakelock_.disable()
              }, m.prototype.beginPresent_ = function() {}, m.prototype.endPresent_ = function() {}, m.prototype.submitFrame = function(t) {};
              var yt = {
                  ADDITIONAL_VIEWERS: [],
                  DEFAULT_VIEWER: "",
                  MOBILE_WAKE_LOCK: !0,
                  DEBUG: !(m.prototype.getEyeParameters = function(t) {
                    return null
                  }),
                  DPDB_URL: "https://dpdb.webvr.rocks/dpdb.json",
                  K_FILTER: .98,
                  PREDICTION_TIME_S: .04,
                  CARDBOARD_UI_DISABLED: !1,
                  ROTATE_INSTRUCTIONS_DISABLED: !1,
                  YAW_ONLY: !1,
                  BUFFER_SCALE: .5,
                  DIRTY_SUBMIT_FRAME_BINDINGS: !1
                },
                At = {
                  LEFT: "left",
                  RIGHT: "right"
                };
              return (M.prototype = Object.create(m.prototype))._getPose = function() {
                return {
                  position: null,
                  orientation: this.poseSensor_.getOrientation(),
                  linearVelocity: null,
                  linearAcceleration: null,
                  angularVelocity: null,
                  angularAcceleration: null
                }
              }, M.prototype._resetPose = function() {
                this.poseSensor_.resetPose && this.poseSensor_.resetPose()
              }, M.prototype._getFieldOfView = function(t) {
                var e;
                if(t == At.LEFT) e = this.deviceInfo_.getFieldOfViewLeftEye();
                else {
                  if(t != At.RIGHT) return null;
                  e = this.deviceInfo_.getFieldOfViewRightEye()
                }
                return e
              }, M.prototype._getEyeOffset = function(t) {
                var e;
                if(t == At.LEFT) e = [.5 * -this.deviceInfo_.viewer.interLensDistance, 0, 0];
                else {
                  if(t != At.RIGHT) return null;
                  e = [.5 * this.deviceInfo_.viewer.interLensDistance, 0, 0]
                }
                return e
              }, M.prototype.getEyeParameters = function(t) {
                var e = this._getEyeOffset(t),
                  i = this._getFieldOfView(t),
                  n = {
                    offset: e,
                    renderWidth: .5 * this.deviceInfo_.device.width * this.bufferScale_,
                    renderHeight: this.deviceInfo_.device.height * this.bufferScale_
                  };
                return Object.defineProperty(n, "fieldOfView", {
                  enumerable: !0,
                  get: function() {
                    return Q("VRFieldOfView", "VRFrameData's projection matrices"), i
                  }
                }), n
              }, M.prototype.onDeviceParamsUpdated_ = function(t) {
                this.config.DEBUG, this.deviceInfo_.updateDeviceParams(t), this.distorter_ && this.distorter_.updateDeviceInfo(this.deviceInfo_)
              }, M.prototype.updateBounds_ = function() {
                this.layer_ && this.distorter_ && (this.layer_.leftBounds || this.layer_.rightBounds) && this.distorter_.setTextureBounds(this.layer_.leftBounds, this.layer_.rightBounds)
              }, M.prototype.beginPresent_ = function() {
                var t = this.layer_.source.getContext("webgl");
                (t = (t = t || this.layer_.source.getContext("experimental-webgl")) || this.layer_.source.getContext("webgl2")) && (this.layer_.predistorted ? this.config.CARDBOARD_UI_DISABLED || (t.canvas.width = b() * this.bufferScale_, t.canvas.height = S() * this.bufferScale_, this.cardboardUI_ = new i(t)) : (this.config.CARDBOARD_UI_DISABLED || (this.cardboardUI_ = new i(t)), this.distorter_ = new e(t, this.cardboardUI_, this.config.BUFFER_SCALE, this.config.DIRTY_SUBMIT_FRAME_BINDINGS), this.distorter_.updateDeviceInfo(this.deviceInfo_)), this.cardboardUI_ && this.cardboardUI_.listen(function(t) {
                  this.viewerSelector_.show(this.layer_.source.parentElement), t.stopPropagation(), t.preventDefault()
                }.bind(this), function(t) {
                  this.exitPresent(), t.stopPropagation(), t.preventDefault()
                }.bind(this)), this.rotateInstructions_ && (I() && P() ? this.rotateInstructions_.showTemporarily(3e3, this.layer_.source.parentElement) : this.rotateInstructions_.update()), this.orientationHandler = this.onOrientationChange_.bind(this), window.addEventListener("orientationchange", this.orientationHandler), this.vrdisplaypresentchangeHandler = this.updateBounds_.bind(this), window.addEventListener("vrdisplaypresentchange", this.vrdisplaypresentchangeHandler), this.fireVRDisplayDeviceParamsChange_())
              }, M.prototype.endPresent_ = function() {
                this.distorter_ && (this.distorter_.destroy(), this.distorter_ = null), this.cardboardUI_ && (this.cardboardUI_.destroy(), this.cardboardUI_ = null), this.rotateInstructions_ && this.rotateInstructions_.hide(), this.viewerSelector_.hide(), window.removeEventListener("orientationchange", this.orientationHandler), window.removeEventListener("vrdisplaypresentchange", this.vrdisplaypresentchangeHandler)
              }, M.prototype.updatePresent_ = function() {
                this.endPresent_(), this.beginPresent_()
              }, M.prototype.submitFrame = function(t) {
                if(this.distorter_) this.updateBounds_(), this.distorter_.submitFrame();
                else if(this.cardboardUI_ && this.layer_) {
                  var e = this.layer_.source.getContext("webgl").canvas;
                  e.width == this.lastWidth && e.height == this.lastHeight || this.cardboardUI_.onResize(), this.lastWidth = e.width, this.lastHeight = e.height, this.cardboardUI_.render()
                }
              }, M.prototype.onOrientationChange_ = function(t) {
                this.viewerSelector_.hide(), this.rotateInstructions_ && this.rotateInstructions_.update(), this.onResize_()
              }, M.prototype.onResize_ = function(t) {
                if(this.layer_) {
                  var e = this.layer_.source.getContext("webgl");
                  B(e.canvas)
                }
              }, M.prototype.onViewerChanged_ = function(t) {
                this.deviceInfo_.setViewer(t), this.distorter_ && this.distorter_.updateDeviceInfo(this.deviceInfo_), this.fireVRDisplayDeviceParamsChange_()
              }, M.prototype.fireVRDisplayDeviceParamsChange_ = function() {
                var t = new CustomEvent("vrdisplaydeviceparamschange", {
                  detail: {
                    vrdisplay: this,
                    deviceInfo: this.deviceInfo_
                  }
                });
                window.dispatchEvent(t)
              }, M.VRFrameData = function() {
                this.leftProjectionMatrix = new Float32Array(16), this.leftViewMatrix = new Float32Array(16), this.rightProjectionMatrix = new Float32Array(16), this.rightViewMatrix = new Float32Array(16), this.pose = null
              }, M.VRDisplay = m, M
            }()
          })),
          s = {
            ADDITIONAL_VIEWERS: [],
            DEFAULT_VIEWER: "",
            PROVIDE_MOBILE_VRDISPLAY: !0,
            GET_VR_DISPLAYS_TIMEOUT: 1e3,
            MOBILE_WAKE_LOCK: !0,
            DEBUG: !1,
            DPDB_URL: "https://dpdb.webvr.rocks/dpdb.json",
            K_FILTER: .98,
            PREDICTION_TIME_S: .04,
            TOUCH_PANNER_DISABLED: !0,
            CARDBOARD_UI_DISABLED: !1,
            ROTATE_INSTRUCTIONS_DISABLED: !1,
            YAW_ONLY: !1,
            BUFFER_SCALE: .5,
            DIRTY_SUBMIT_FRAME_BINDINGS: !1
          };
        t.prototype.getPolyfillDisplays = function() {
          if(this._polyfillDisplaysPopulated) return this.polyfillDisplays;
          if(i()) {
            var t = new a({
              ADDITIONAL_VIEWERS: this.config.ADDITIONAL_VIEWERS,
              DEFAULT_VIEWER: this.config.DEFAULT_VIEWER,
              MOBILE_WAKE_LOCK: this.config.MOBILE_WAKE_LOCK,
              DEBUG: this.config.DEBUG,
              DPDB_URL: this.config.DPDB_URL,
              CARDBOARD_UI_DISABLED: this.config.CARDBOARD_UI_DISABLED,
              K_FILTER: this.config.K_FILTER,
              PREDICTION_TIME_S: this.config.PREDICTION_TIME_S,
              TOUCH_PANNER_DISABLED: this.config.TOUCH_PANNER_DISABLED,
              ROTATE_INSTRUCTIONS_DISABLED: this.config.ROTATE_INSTRUCTIONS_DISABLED,
              YAW_ONLY: this.config.YAW_ONLY,
              BUFFER_SCALE: this.config.BUFFER_SCALE,
              DIRTY_SUBMIT_FRAME_BINDINGS: this.config.DIRTY_SUBMIT_FRAME_BINDINGS
            });
            this.polyfillDisplays.push(t)
          }
          return this._polyfillDisplaysPopulated = !0, this.polyfillDisplays
        }, t.prototype.enable = function() {
          if(this.enabled = !0, this.hasNative && this.native.VRFrameData) {
            var e = this.native.VRFrameData,
              i = new this.native.VRFrameData,
              n = this.native.VRDisplay.prototype.getFrameData;
            window.VRDisplay.prototype.getFrameData = function(t) {
              t instanceof e ? n.call(this, t) : (n.call(this, i), t.pose = i.pose, r(i.leftProjectionMatrix, t.leftProjectionMatrix), r(i.rightProjectionMatrix, t.rightProjectionMatrix), r(i.leftViewMatrix, t.leftViewMatrix), r(i.rightViewMatrix, t.rightViewMatrix))
            }
          }
          navigator.getVRDisplays = this.getVRDisplays.bind(this), window.VRDisplay = a.VRDisplay, window.VRFrameData = a.VRFrameData
        }, t.prototype.getVRDisplays = function() {
          var e, i = this,
            n = this.config;
          if(!this.hasNative) return Promise.resolve(this.getPolyfillDisplays());
          var t = this.native.getVRDisplays.call(navigator),
            r = new Promise(function(t) {
              e = setTimeout(function() {
                t([])
              }, n.GET_VR_DISPLAYS_TIMEOUT)
            });
          return function(n) {
            if(Promise.race) {
              return Promise.race(n)
            }
            return new Promise(function(t, e) {
              for(var i = 0; i < n.length; i++) {
                n[i].then(t, e)
              }
            })
          }([t, r]).then(function(t) {
            return clearTimeout(e), 0 < t.length ? t : i.getPolyfillDisplays()
          })
        }, t.version = "0.10.6", t.VRFrameData = a.VRFrameData, t.VRDisplay = a.VRDisplay;
        var o = Object.freeze({
            default: t
          }),
          c = o && t || o;
        return void 0 !== e && e.window && (e.document || (e.document = e.window.document), e.navigator || (e.navigator = e.window.navigator)), c
      }()
    }(Yr = {
      exports: {}
    }, Yr.exports), Yr.exports),
    Zr = (Vr = Xr) && Vr.__esModule && Object.prototype.hasOwnProperty.call(Vr, "default") ? Vr.default : Vr;
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
  }), void 0 === Math.sign && (Math.sign = function(t) {
    return t < 0 ? -1 : 0 < t ? 1 : +t
  }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
    get: function() {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
    }
  }), void 0 === Object.assign && (Object.assign = function(t) {
    if(null == t) throw new TypeError("Cannot convert undefined or null to object");
    for(var e = Object(t), i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      if(null != n)
        for(var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }), Object.assign(t.prototype, {
    addEventListener: function(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var i = this._listeners;
      void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
    },
    hasEventListener: function(t, e) {
      if(void 0 === this._listeners) return !1;
      var i = this._listeners;
      return void 0 !== i[t] && -1 !== i[t].indexOf(e)
    },
    removeEventListener: function(t, e) {
      if(void 0 !== this._listeners) {
        var i = this._listeners[t];
        if(void 0 !== i) {
          var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
        }
      }
    },
    dispatchEvent: function(t) {
      if(void 0 !== this._listeners) {
        var e = this._listeners[t.type];
        if(void 0 !== e) {
          t.target = this;
          for(var i = e.slice(0), n = 0, r = i.length; n < r; n++) i[n].call(this, t)
        }
      }
    }
  });
  var qr, Jr, Kr, $r, ta, ea, ia, na, ra, aa, sa, oa, ca, ha, ua, la, da, pa, fa, ga, ma, Ma, va = 0,
    ya = 1,
    Aa = 2,
    xa = 0,
    wa = 1,
    Na = 2,
    Da = 1,
    Ta = 2,
    La = 0,
    Ea = 1,
    Ia = 2,
    _a = 0,
    ba = 0,
    Sa = 1,
    ja = 2,
    Ca = 3,
    Oa = 4,
    za = 5,
    Pa = 100,
    Ua = 101,
    Ba = 102,
    ka = 103,
    Ra = 104,
    Fa = 200,
    Qa = 201,
    Ga = 202,
    Ya = 203,
    Va = 204,
    Wa = 205,
    Ha = 206,
    Xa = 207,
    Za = 208,
    qa = 209,
    Ja = 210,
    Ka = 0,
    $a = 1,
    ts = 2,
    es = 3,
    is = 4,
    ns = 5,
    rs = 6,
    as = 7,
    ss = 0,
    os = 1,
    cs = 2,
    hs = 0,
    us = 1,
    ls = 2,
    ds = 3,
    ps = 4,
    fs = 301,
    gs = 302,
    ms = 303,
    Ms = 304,
    vs = 305,
    ys = 306,
    As = 307,
    xs = 1e3,
    ws = 1001,
    Ns = 1002,
    Ds = 1003,
    Ts = 1004,
    Ls = 1005,
    Es = 1006,
    Is = 1007,
    _s = 1008,
    bs = 1009,
    Ss = 1010,
    js = 1011,
    Cs = 1012,
    Os = 1013,
    zs = 1014,
    Ps = 1015,
    Us = 1016,
    Bs = 1017,
    ks = 1018,
    Rs = 1019,
    Fs = 1020,
    Qs = 1021,
    Gs = 1022,
    Ys = 1023,
    Vs = 1024,
    Ws = 1025,
    Hs = 1026,
    Xs = 1027,
    Zs = 33776,
    qs = 33777,
    Js = 33778,
    Ks = 33779,
    $s = 35840,
    to = 35841,
    eo = 35842,
    io = 35843,
    no = 36196,
    ro = 37808,
    ao = 37809,
    so = 37810,
    oo = 37811,
    co = 37812,
    ho = 37813,
    uo = 37814,
    lo = 37815,
    po = 37816,
    fo = 37817,
    go = 37818,
    mo = 37819,
    Mo = 37820,
    vo = 37821,
    yo = 2400,
    Ao = 2401,
    xo = 0,
    wo = 3e3,
    No = 3001,
    Do = 3007,
    To = 3002,
    Lo = 3004,
    Eo = 3005,
    Io = 3006,
    _o = 3200,
    bo = 3201,
    So = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID: function() {
        for(var r = [], t = 0; t < 256; t++) r[t] = (t < 16 ? "0" : "") + t.toString(16);
        return function() {
          var t = 4294967295 * Math.random() | 0,
            e = 4294967295 * Math.random() | 0,
            i = 4294967295 * Math.random() | 0,
            n = 4294967295 * Math.random() | 0;
          return (r[255 & t] + r[t >> 8 & 255] + r[t >> 16 & 255] + r[t >> 24 & 255] + "-" + r[255 & e] + r[e >> 8 & 255] + "-" + r[e >> 16 & 15 | 64] + r[e >> 24 & 255] + "-" + r[63 & i | 128] + r[i >> 8 & 255] + "-" + r[i >> 16 & 255] + r[i >> 24 & 255] + r[255 & n] + r[n >> 8 & 255] + r[n >> 16 & 255] + r[n >> 24 & 255]).toUpperCase()
        }
      }(),
      clamp: function(t, e, i) {
        return Math.max(e, Math.min(i, t))
      },
      euclideanModulo: function(t, e) {
        return (t % e + e) % e
      },
      mapLinear: function(t, e, i, n, r) {
        return n + (t - e) * (r - n) / (i - e)
      },
      lerp: function(t, e, i) {
        return (1 - i) * t + i * e
      },
      smoothstep: function(t, e, i) {
        return t <= e ? 0 : i <= t ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
      },
      smootherstep: function(t, e, i) {
        return t <= e ? 0 : i <= t ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
      },
      randInt: function(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1))
      },
      randFloat: function(t, e) {
        return t + Math.random() * (e - t)
      },
      randFloatSpread: function(t) {
        return t * (.5 - Math.random())
      },
      degToRad: function(t) {
        return t * So.DEG2RAD
      },
      radToDeg: function(t) {
        return t * So.RAD2DEG
      },
      isPowerOfTwo: function(t) {
        return 0 == (t & t - 1) && 0 !== t
      },
      ceilPowerOfTwo: function(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
      },
      floorPowerOfTwo: function(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
      }
    };
  Object.defineProperties(tt.prototype, {
    width: {
      get: function() {
        return this.x
      },
      set: function(t) {
        this.x = t
      }
    },
    height: {
      get: function() {
        return this.y
      },
      set: function(t) {
        this.y = t
      }
    }
  }), Object.assign(tt.prototype, {
    isVector2: !0,
    set: function(t, e) {
      return this.x = t, this.y = e, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setComponent: function(t, e) {
      switch(t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch(t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this
    },
    add: function(t, e) {
      return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this
    },
    multiply: function(t) {
      return this.x *= t.x, this.y *= t.y, this
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this
    },
    divide: function(t) {
      return this.x /= t.x, this.y /= t.y, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    applyMatrix3: function(t) {
      var e = this.x,
        i = this.y,
        n = t.elements;
      return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
    },
    clampScalar: (qr = new tt, Jr = new tt, function(t, e) {
      return qr.set(t, t), Jr.set(e, e), this.clamp(qr, Jr)
    }),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    angle: function() {
      var t = Math.atan2(this.y, this.x);
      return t < 0 && (t += 2 * Math.PI), t
    },
    distanceTo: function(t) {
      return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
      var e = this.x - t.x,
        i = this.y - t.y;
      return e * e + i * i
    },
    manhattanDistanceTo: function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
    },
    fromBufferAttribute: function(t, e, i) {
      return this.x = t.getX(e), this.y = t.getY(e), this
    },
    rotateAround: function(t, e) {
      var i = Math.cos(e),
        n = Math.sin(e),
        r = this.x - t.x,
        a = this.y - t.y;
      return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
    }
  }), Object.assign(At.prototype, {
    isMatrix4: !0,
    set: function(t, e, i, n, r, a, s, o, c, h, u, l, d, p, f, g) {
      var m = this.elements;
      return m[0] = t, m[4] = e, m[8] = i, m[12] = n, m[1] = r, m[5] = a, m[9] = s, m[13] = o, m[2] = c, m[6] = h, m[10] = u, m[14] = l, m[3] = d, m[7] = p, m[11] = f, m[15] = g, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new At).fromArray(this.elements)
    },
    copy: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
    },
    copyPosition: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
    },
    extractBasis: function(t, e, i) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
    },
    makeBasis: function(t, e, i) {
      return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
    },
    extractRotation: (sa = new wt, function(t) {
      var e = this.elements,
        i = t.elements,
        n = 1 / sa.setFromMatrixColumn(t, 0).length(),
        r = 1 / sa.setFromMatrixColumn(t, 1).length(),
        a = 1 / sa.setFromMatrixColumn(t, 2).length();
      return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * a, e[9] = i[9] * a, e[10] = i[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }),
    makeRotationFromEuler: function(t) {
      t && t.isEuler;
      var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z,
        a = Math.cos(i),
        s = Math.sin(i),
        o = Math.cos(n),
        c = Math.sin(n),
        h = Math.cos(r),
        u = Math.sin(r);
      if("XYZ" === t.order) {
        var l = a * h,
          d = a * u,
          p = s * h,
          f = s * u;
        e[0] = o * h, e[4] = -o * u, e[8] = c, e[1] = d + p * c, e[5] = l - f * c, e[9] = -s * o, e[2] = f - l * c, e[6] = p + d * c, e[10] = a * o
      } else if("YXZ" === t.order) {
        var g = o * h,
          m = o * u,
          M = c * h,
          v = c * u;
        e[0] = g + v * s, e[4] = M * s - m, e[8] = a * c, e[1] = a * u, e[5] = a * h, e[9] = -s, e[2] = m * s - M, e[6] = v + g * s, e[10] = a * o
      } else if("ZXY" === t.order) {
        g = o * h, m = o * u, M = c * h, v = c * u;
        e[0] = g - v * s, e[4] = -a * u, e[8] = M + m * s, e[1] = m + M * s, e[5] = a * h, e[9] = v - g * s, e[2] = -a * c, e[6] = s, e[10] = a * o
      } else if("ZYX" === t.order) {
        l = a * h, d = a * u, p = s * h, f = s * u;
        e[0] = o * h, e[4] = p * c - d, e[8] = l * c + f, e[1] = o * u, e[5] = f * c + l, e[9] = d * c - p, e[2] = -c, e[6] = s * o, e[10] = a * o
      } else if("YZX" === t.order) {
        var y = a * o,
          A = a * c,
          x = s * o,
          w = s * c;
        e[0] = o * h, e[4] = w - y * u, e[8] = x * u + A, e[1] = u, e[5] = a * h, e[9] = -s * h, e[2] = -c * h, e[6] = A * u + x, e[10] = y - w * u
      } else if("XZY" === t.order) {
        y = a * o, A = a * c, x = s * o, w = s * c;
        e[0] = o * h, e[4] = -u, e[8] = c * h, e[1] = y * u + w, e[5] = a * h, e[9] = A * u - x, e[2] = x * u - A, e[6] = s * h, e[10] = w * u + y
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    },
    makeRotationFromQuaternion: (ra = new wt(0, 0, 0), aa = new wt(1, 1, 1), function(t) {
      return this.compose(ra, t, aa)
    }),
    lookAt: (ea = new wt, ia = new wt, na = new wt, function(t, e, i) {
      var n = this.elements;
      return na.subVectors(t, e), 0 === na.lengthSq() && (na.z = 1), na.normalize(), ea.crossVectors(i, na), 0 === ea.lengthSq() && (1 === Math.abs(i.z) ? na.x += 1e-4 : na.z += 1e-4, na.normalize(), ea.crossVectors(i, na)), ea.normalize(), ia.crossVectors(na, ea), n[0] = ea.x, n[4] = ia.x, n[8] = na.x, n[1] = ea.y, n[5] = ia.y, n[9] = na.y, n[2] = ea.z, n[6] = ia.z, n[10] = na.z, this
    }),
    multiply: function(t, e) {
      return void 0 !== e ? this.multiplyMatrices(t, e) : this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
      return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
      var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        s = i[4],
        o = i[8],
        c = i[12],
        h = i[1],
        u = i[5],
        l = i[9],
        d = i[13],
        p = i[2],
        f = i[6],
        g = i[10],
        m = i[14],
        M = i[3],
        v = i[7],
        y = i[11],
        A = i[15],
        x = n[0],
        w = n[4],
        N = n[8],
        D = n[12],
        T = n[1],
        L = n[5],
        E = n[9],
        I = n[13],
        _ = n[2],
        b = n[6],
        S = n[10],
        j = n[14],
        C = n[3],
        O = n[7],
        z = n[11],
        P = n[15];
      return r[0] = a * x + s * T + o * _ + c * C, r[4] = a * w + s * L + o * b + c * O, r[8] = a * N + s * E + o * S + c * z, r[12] = a * D + s * I + o * j + c * P, r[1] = h * x + u * T + l * _ + d * C, r[5] = h * w + u * L + l * b + d * O, r[9] = h * N + u * E + l * S + d * z, r[13] = h * D + u * I + l * j + d * P, r[2] = p * x + f * T + g * _ + m * C, r[6] = p * w + f * L + g * b + m * O, r[10] = p * N + f * E + g * S + m * z, r[14] = p * D + f * I + g * j + m * P, r[3] = M * x + v * T + y * _ + A * C, r[7] = M * w + v * L + y * b + A * O, r[11] = M * N + v * E + y * S + A * z, r[15] = M * D + v * I + y * j + A * P, this
    },
    multiplyScalar: function(t) {
      var e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
    },
    applyToBufferAttribute: (ta = new wt, function(t) {
      for(var e = 0, i = t.count; e < i; e++) ta.x = t.getX(e), ta.y = t.getY(e), ta.z = t.getZ(e), ta.applyMatrix4(this), t.setXYZ(e, ta.x, ta.y, ta.z);
      return t
    }),
    determinant: function() {
      var t = this.elements,
        e = t[0],
        i = t[4],
        n = t[8],
        r = t[12],
        a = t[1],
        s = t[5],
        o = t[9],
        c = t[13],
        h = t[2],
        u = t[6],
        l = t[10],
        d = t[14];
      return t[3] * (+r * o * u - n * c * u - r * s * l + i * c * l + n * s * d - i * o * d) + t[7] * (+e * o * d - e * c * l + r * a * l - n * a * d + n * c * h - r * o * h) + t[11] * (+e * c * u - e * s * d - r * a * u + i * a * d + r * s * h - i * c * h) + t[15] * (-n * s * h - e * o * u + e * s * l + n * a * u - i * a * l + i * o * h)
    },
    transpose: function() {
      var t, e = this.elements;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    },
    setPosition: function(t) {
      var e = this.elements;
      return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
    },
    getInverse: function(t, e) {
      var i = this.elements,
        n = t.elements,
        r = n[0],
        a = n[1],
        s = n[2],
        o = n[3],
        c = n[4],
        h = n[5],
        u = n[6],
        l = n[7],
        d = n[8],
        p = n[9],
        f = n[10],
        g = n[11],
        m = n[12],
        M = n[13],
        v = n[14],
        y = n[15],
        A = p * v * l - M * f * l + M * u * g - h * v * g - p * u * y + h * f * y,
        x = m * f * l - d * v * l - m * u * g + c * v * g + d * u * y - c * f * y,
        w = d * M * l - m * p * l + m * h * g - c * M * g - d * h * y + c * p * y,
        N = m * p * u - d * M * u - m * h * f + c * M * f + d * h * v - c * p * v,
        D = r * A + a * x + s * w + o * N;
      if(0 == D) {
        var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
        if(!0 === e) throw new Error(T);
        return this.identity()
      }
      var L = 1 / D;
      return i[0] = A * L, i[1] = (M * f * o - p * v * o - M * s * g + a * v * g + p * s * y - a * f * y) * L, i[2] = (h * v * o - M * u * o + M * s * l - a * v * l - h * s * y + a * u * y) * L, i[3] = (p * u * o - h * f * o - p * s * l + a * f * l + h * s * g - a * u * g) * L, i[4] = x * L, i[5] = (d * v * o - m * f * o + m * s * g - r * v * g - d * s * y + r * f * y) * L, i[6] = (m * u * o - c * v * o - m * s * l + r * v * l + c * s * y - r * u * y) * L, i[7] = (c * f * o - d * u * o + d * s * l - r * f * l - c * s * g + r * u * g) * L, i[8] = w * L, i[9] = (m * p * o - d * M * o - m * a * g + r * M * g + d * a * y - r * p * y) * L, i[10] = (c * M * o - m * h * o + m * a * l - r * M * l - c * a * y + r * h * y) * L, i[11] = (d * h * o - c * p * o - d * a * l + r * p * l + c * a * g - r * h * g) * L, i[12] = N * L, i[13] = (d * M * s - m * p * s + m * a * f - r * M * f - d * a * v + r * p * v) * L, i[14] = (m * h * s - c * M * s - m * a * u + r * M * u + c * a * v - r * h * v) * L, i[15] = (c * p * s - d * h * s + d * a * u - r * p * u - c * a * f + r * h * f) * L, this
    },
    scale: function(t) {
      var e = this.elements,
        i = t.x,
        n = t.y,
        r = t.z;
      return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
    },
    getMaxScaleOnAxis: function() {
      var t = this.elements,
        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
        n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
      return Math.sqrt(Math.max(e, i, n))
    },
    makeTranslation: function(t, e, i) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
    },
    makeRotationX: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t);
      return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function(t, e) {
      var i = Math.cos(e),
        n = Math.sin(e),
        r = 1 - i,
        a = t.x,
        s = t.y,
        o = t.z,
        c = r * a,
        h = r * s;
      return this.set(c * a + i, c * s - n * o, c * o + n * s, 0, c * s + n * o, h * s + i, h * o - n * a, 0, c * o - n * s, h * o + n * a, r * o * o + i, 0, 0, 0, 0, 1), this
    },
    makeScale: function(t, e, i) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
    },
    makeShear: function(t, e, i) {
      return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
    },
    compose: function(t, e, i) {
      var n = this.elements,
        r = e._x,
        a = e._y,
        s = e._z,
        o = e._w,
        c = r + r,
        h = a + a,
        u = s + s,
        l = r * c,
        d = r * h,
        p = r * u,
        f = a * h,
        g = a * u,
        m = s * u,
        M = o * c,
        v = o * h,
        y = o * u,
        A = i.x,
        x = i.y,
        w = i.z;
      return n[0] = (1 - (f + m)) * A, n[1] = (d + y) * A, n[2] = (p - v) * A, n[3] = 0, n[4] = (d - y) * x, n[5] = (1 - (l + m)) * x, n[6] = (g + M) * x, n[7] = 0, n[8] = (p + v) * w, n[9] = (g - M) * w, n[10] = (1 - (l + f)) * w, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
    },
    decompose: (Kr = new wt, $r = new At, function(t, e, i) {
      var n = this.elements,
        r = Kr.set(n[0], n[1], n[2]).length(),
        a = Kr.set(n[4], n[5], n[6]).length(),
        s = Kr.set(n[8], n[9], n[10]).length();
      this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], $r.copy(this);
      var o = 1 / r,
        c = 1 / a,
        h = 1 / s;
      return $r.elements[0] *= o, $r.elements[1] *= o, $r.elements[2] *= o, $r.elements[4] *= c, $r.elements[5] *= c, $r.elements[6] *= c, $r.elements[8] *= h, $r.elements[9] *= h, $r.elements[10] *= h, e.setFromRotationMatrix($r), i.x = r, i.y = a, i.z = s, this
    }),
    makePerspective: function(t, e, i, n, r, a) {
      var s = this.elements,
        o = 2 * r / (e - t),
        c = 2 * r / (i - n),
        h = (e + t) / (e - t),
        u = (i + n) / (i - n),
        l = -(a + r) / (a - r),
        d = -2 * a * r / (a - r);
      return s[0] = o, s[4] = 0, s[8] = h, s[12] = 0, s[1] = 0, s[5] = c, s[9] = u, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = l, s[14] = d, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this
    },
    makeOrthographic: function(t, e, i, n, r, a) {
      var s = this.elements,
        o = 1 / (e - t),
        c = 1 / (i - n),
        h = 1 / (a - r),
        u = (e + t) * o,
        l = (i + n) * c,
        d = (a + r) * h;
      return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -u, s[1] = 0, s[5] = 2 * c, s[9] = 0, s[13] = -l, s[2] = 0, s[6] = 0, s[10] = -2 * h, s[14] = -d, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this
    },
    equals: function(t) {
      for(var e = this.elements, i = t.elements, n = 0; n < 16; n++)
        if(e[n] !== i[n]) return !1;
      return !0
    },
    fromArray: function(t, e) {
      void 0 === e && (e = 0);
      for(var i = 0; i < 16; i++) this.elements[i] = t[i + e];
      return this
    },
    toArray: function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
    }
  }), Object.assign(W, {
    slerp: function(t, e, i, n) {
      return i.copy(t).slerp(e, n)
    },
    slerpFlat: function(t, e, i, n, r, a, s) {
      var o = i[n + 0],
        c = i[n + 1],
        h = i[n + 2],
        u = i[n + 3],
        l = r[a + 0],
        d = r[a + 1],
        p = r[a + 2],
        f = r[a + 3];
      if(u !== f || o !== l || c !== d || h !== p) {
        var g = 1 - s,
          m = o * l + c * d + h * p + u * f,
          M = 0 <= m ? 1 : -1,
          v = 1 - m * m;
        if(v > Number.EPSILON) {
          var y = Math.sqrt(v),
            A = Math.atan2(y, m * M);
          g = Math.sin(g * A) / y, s = Math.sin(s * A) / y
        }
        var x = s * M;
        if(o = o * g + l * x, c = c * g + d * x, h = h * g + p * x, u = u * g + f * x, g === 1 - s) {
          var w = 1 / Math.sqrt(o * o + c * c + h * h + u * u);
          o *= w, c *= w, h *= w, u *= w
        }
      }
      t[e] = o, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u
    }
  }), Object.defineProperties(W.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(t) {
        this._x = t, this.onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(t) {
        this._y = t, this.onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(t) {
        this._z = t, this.onChangeCallback()
      }
    },
    w: {
      get: function() {
        return this._w
      },
      set: function(t) {
        this._w = t, this.onChangeCallback()
      }
    }
  }), Object.assign(W.prototype, {
    set: function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._w)
    },
    copy: function(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
    },
    setFromEuler: function(t, e) {
      if(!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var i = t._x,
        n = t._y,
        r = t._z,
        a = t.order,
        s = Math.cos,
        o = Math.sin,
        c = s(i / 2),
        h = s(n / 2),
        u = s(r / 2),
        l = o(i / 2),
        d = o(n / 2),
        p = o(r / 2);
      return "XYZ" === a ? (this._x = l * h * u + c * d * p, this._y = c * d * u - l * h * p, this._z = c * h * p + l * d * u, this._w = c * h * u - l * d * p) : "YXZ" === a ? (this._x = l * h * u + c * d * p, this._y = c * d * u - l * h * p, this._z = c * h * p - l * d * u, this._w = c * h * u + l * d * p) : "ZXY" === a ? (this._x = l * h * u - c * d * p, this._y = c * d * u + l * h * p, this._z = c * h * p + l * d * u, this._w = c * h * u - l * d * p) : "ZYX" === a ? (this._x = l * h * u - c * d * p, this._y = c * d * u + l * h * p, this._z = c * h * p - l * d * u, this._w = c * h * u + l * d * p) : "YZX" === a ? (this._x = l * h * u + c * d * p, this._y = c * d * u + l * h * p, this._z = c * h * p - l * d * u, this._w = c * h * u - l * d * p) : "XZY" === a && (this._x = l * h * u - c * d * p, this._y = c * d * u - l * h * p, this._z = c * h * p + l * d * u, this._w = c * h * u + l * d * p), !1 !== e && this.onChangeCallback(), this
    },
    setFromAxisAngle: function(t, e) {
      var i = e / 2,
        n = Math.sin(i);
      return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
    },
    setFromRotationMatrix: function(t) {
      var e, i = t.elements,
        n = i[0],
        r = i[4],
        a = i[8],
        s = i[1],
        o = i[5],
        c = i[9],
        h = i[2],
        u = i[6],
        l = i[10],
        d = n + o + l;
      return 0 < d ? (e = .5 / Math.sqrt(d + 1), this._w = .25 / e, this._x = (u - c) * e, this._y = (a - h) * e, this._z = (s - r) * e) : o < n && l < n ? (e = 2 * Math.sqrt(1 + n - o - l), this._w = (u - c) / e, this._x = .25 * e, this._y = (r + s) / e, this._z = (a + h) / e) : l < o ? (e = 2 * Math.sqrt(1 + o - n - l), this._w = (a - h) / e, this._x = (r + s) / e, this._y = .25 * e, this._z = (c + u) / e) : (e = 2 * Math.sqrt(1 + l - n - o), this._w = (s - r) / e, this._x = (a + h) / e, this._y = (c + u) / e, this._z = .25 * e), this.onChangeCallback(), this
    },
    setFromUnitVectors: (ca = new wt, function(t, e) {
      return void 0 === ca && (ca = new wt), (oa = t.dot(e) + 1) < 1e-6 ? (oa = 0, Math.abs(t.x) > Math.abs(t.z) ? ca.set(-t.y, t.x, 0) : ca.set(0, -t.z, t.y)) : ca.crossVectors(t, e), this._x = ca.x, this._y = ca.y, this._z = ca.z, this._w = oa, this.normalize()
    }),
    inverse: function() {
      return this.conjugate()
    },
    conjugate: function() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
    },
    dot: function(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    },
    lengthSq: function() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
      var t = this.length();
      return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
    },
    multiply: function(t, e) {
      return void 0 !== e ? this.multiplyQuaternions(t, e) : this.multiplyQuaternions(this, t)
    },
    premultiply: function(t) {
      return this.multiplyQuaternions(t, this)
    },
    multiplyQuaternions: function(t, e) {
      var i = t._x,
        n = t._y,
        r = t._z,
        a = t._w,
        s = e._x,
        o = e._y,
        c = e._z,
        h = e._w;
      return this._x = i * h + a * s + n * c - r * o, this._y = n * h + a * o + r * s - i * c, this._z = r * h + a * c + i * o - n * s, this._w = a * h - i * s - n * o - r * c, this.onChangeCallback(), this
    },
    slerp: function(t, e) {
      if(0 === e) return this;
      if(1 === e) return this.copy(t);
      var i = this._x,
        n = this._y,
        r = this._z,
        a = this._w,
        s = a * t._w + i * t._x + n * t._y + r * t._z;
      if(s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), 1 <= s) return this._w = a, this._x = i, this._y = n, this._z = r, this;
      var o = Math.sqrt(1 - s * s);
      if(Math.abs(o) < .001) return this._w = .5 * (a + this._w), this._x = .5 * (i + this._x), this._y = .5 * (n + this._y), this._z = .5 * (r + this._z), this;
      var c = Math.atan2(o, s),
        h = Math.sin((1 - e) * c) / o,
        u = Math.sin(e * c) / o;
      return this._w = a * h + this._w * u, this._x = i * h + this._x * u, this._y = n * h + this._y * u, this._z = r * h + this._z * u, this.onChangeCallback(), this
    },
    equals: function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
    },
    onChange: function(t) {
      return this.onChangeCallback = t, this
    },
    onChangeCallback: function() {}
  }), Object.assign(wt.prototype, {
    isVector3: !0,
    set: function(t, e, i) {
      return this.x = t, this.y = e, this.z = i, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this.z = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setZ: function(t) {
      return this.z = t, this
    },
    setComponent: function(t, e) {
      switch(t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch(t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this
    },
    add: function(t, e) {
      return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this.z += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    },
    multiply: function(t, e) {
      return void 0 !== e ? this.multiplyVectors(t, e) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this
    },
    multiplyVectors: function(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    },
    applyEuler: (ma = new W, function(t) {
      return t && t.isEuler, this.applyQuaternion(ma.setFromEuler(t))
    }),
    applyAxisAngle: (ga = new W, function(t, e) {
      return this.applyQuaternion(ga.setFromAxisAngle(t, e))
    }),
    applyMatrix3: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements;
      return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
    },
    applyMatrix4: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
      return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * a, this
    },
    applyQuaternion: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.x,
        a = t.y,
        s = t.z,
        o = t.w,
        c = o * e + a * n - s * i,
        h = o * i + s * e - r * n,
        u = o * n + r * i - a * e,
        l = -r * e - a * i - s * n;
      return this.x = c * o + l * -r + h * -s - u * -a, this.y = h * o + l * -a + u * -r - c * -s, this.z = u * o + l * -s + c * -a - h * -r, this
    },
    project: (fa = new At, function(t) {
      return fa.multiplyMatrices(t.projectionMatrix, fa.getInverse(t.matrixWorld)), this.applyMatrix4(fa)
    }),
    unproject: (pa = new At, function(t) {
      return pa.multiplyMatrices(t.matrixWorld, pa.getInverse(t.projectionMatrix)), this.applyMatrix4(pa)
    }),
    transformDirection: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = t.elements;
      return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
    },
    divide: function(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
    },
    clampScalar: (la = new wt, da = new wt, function(t, e) {
      return la.set(t, t, t), da.set(e, e, e), this.clamp(la, da)
    }),
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    cross: function(t, e) {
      return void 0 !== e ? this.crossVectors(t, e) : this.crossVectors(this, t)
    },
    crossVectors: function(t, e) {
      var i = t.x,
        n = t.y,
        r = t.z,
        a = e.x,
        s = e.y,
        o = e.z;
      return this.x = n * o - r * s, this.y = r * a - i * o, this.z = i * s - n * a, this
    },
    projectOnVector: function(t) {
      var e = t.dot(this) / t.lengthSq();
      return this.copy(t).multiplyScalar(e)
    },
    projectOnPlane: (ua = new wt, function(t) {
      return ua.copy(this).projectOnVector(t), this.sub(ua)
    }),
    reflect: (ha = new wt, function(t) {
      return this.sub(ha.copy(t).multiplyScalar(2 * this.dot(t)))
    }),
    angleTo: function(t) {
      var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
      return Math.acos(So.clamp(e, -1, 1))
    },
    distanceTo: function(t) {
      return Math.sqrt(this.distanceToSquared(t))
    },
    distanceToSquared: function(t) {
      var e = this.x - t.x,
        i = this.y - t.y,
        n = this.z - t.z;
      return e * e + i * i + n * n
    },
    manhattanDistanceTo: function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    },
    setFromSpherical: function(t) {
      var e = Math.sin(t.phi) * t.radius;
      return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
    },
    setFromCylindrical: function(t) {
      return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this
    },
    setFromMatrixPosition: function(t) {
      var e = t.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this
    },
    setFromMatrixScale: function(t) {
      var e = this.setFromMatrixColumn(t, 0).length(),
        i = this.setFromMatrixColumn(t, 1).length(),
        n = this.setFromMatrixColumn(t, 2).length();
      return this.x = e, this.y = i, this.z = n, this
    },
    setFromMatrixColumn: function(t, e) {
      return this.fromArray(t.elements, 4 * e)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
    },
    fromBufferAttribute: function(t, e, i) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
    }
  }), Object.assign(I.prototype, {
    isMatrix3: !0,
    set: function(t, e, i, n, r, a, s, o, c) {
      var h = this.elements;
      return h[0] = t, h[1] = n, h[2] = s, h[3] = e, h[4] = r, h[5] = o, h[6] = i, h[7] = a, h[8] = c, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    },
    clone: function() {
      return (new this.constructor).fromArray(this.elements)
    },
    copy: function(t) {
      var e = this.elements,
        i = t.elements;
      return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
    },
    setFromMatrix4: function(t) {
      var e = t.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    },
    applyToBufferAttribute: (Ma = new wt, function(t) {
      for(var e = 0, i = t.count; e < i; e++) Ma.x = t.getX(e), Ma.y = t.getY(e), Ma.z = t.getZ(e), Ma.applyMatrix3(this), t.setXYZ(e, Ma.x, Ma.y, Ma.z);
      return t
    }),
    multiply: function(t) {
      return this.multiplyMatrices(this, t)
    },
    premultiply: function(t) {
      return this.multiplyMatrices(t, this)
    },
    multiplyMatrices: function(t, e) {
      var i = t.elements,
        n = e.elements,
        r = this.elements,
        a = i[0],
        s = i[3],
        o = i[6],
        c = i[1],
        h = i[4],
        u = i[7],
        l = i[2],
        d = i[5],
        p = i[8],
        f = n[0],
        g = n[3],
        m = n[6],
        M = n[1],
        v = n[4],
        y = n[7],
        A = n[2],
        x = n[5],
        w = n[8];
      return r[0] = a * f + s * M + o * A, r[3] = a * g + s * v + o * x, r[6] = a * m + s * y + o * w, r[1] = c * f + h * M + u * A, r[4] = c * g + h * v + u * x, r[7] = c * m + h * y + u * w, r[2] = l * f + d * M + p * A, r[5] = l * g + d * v + p * x, r[8] = l * m + d * y + p * w, this
    },
    multiplyScalar: function(t) {
      var e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
    },
    determinant: function() {
      var t = this.elements,
        e = t[0],
        i = t[1],
        n = t[2],
        r = t[3],
        a = t[4],
        s = t[5],
        o = t[6],
        c = t[7],
        h = t[8];
      return e * a * h - e * s * c - i * r * h + i * s * o + n * r * c - n * a * o
    },
    getInverse: function(t, e) {
      t && t.isMatrix4;
      var i = t.elements,
        n = this.elements,
        r = i[0],
        a = i[1],
        s = i[2],
        o = i[3],
        c = i[4],
        h = i[5],
        u = i[6],
        l = i[7],
        d = i[8],
        p = d * c - h * l,
        f = h * u - d * o,
        g = l * o - c * u,
        m = r * p + a * f + s * g;
      if(0 == m) {
        var M = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
        if(!0 === e) throw new Error(M);
        return this.identity()
      }
      var v = 1 / m;
      return n[0] = p * v, n[1] = (s * l - d * a) * v, n[2] = (h * a - s * c) * v, n[3] = f * v, n[4] = (d * r - s * u) * v, n[5] = (s * o - h * r) * v, n[6] = g * v, n[7] = (a * u - l * r) * v, n[8] = (c * r - a * o) * v, this
    },
    transpose: function() {
      var t, e = this.elements;
      return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    },
    getNormalMatrix: function(t) {
      return this.setFromMatrix4(t).getInverse(this).transpose()
    },
    transposeIntoArray: function(t) {
      var e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    },
    setUvTransform: function(t, e, i, n, r, a, s) {
      var o = Math.cos(r),
        c = Math.sin(r);
      this.set(i * o, i * c, -i * (o * a + c * s) + a + t, -n * c, n * o, -n * (-c * a + o * s) + s + e, 0, 0, 1)
    },
    scale: function(t, e) {
      var i = this.elements;
      return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
    },
    rotate: function(t) {
      var e = Math.cos(t),
        i = Math.sin(t),
        n = this.elements,
        r = n[0],
        a = n[3],
        s = n[6],
        o = n[1],
        c = n[4],
        h = n[7];
      return n[0] = e * r + i * o, n[3] = e * a + i * c, n[6] = e * s + i * h, n[1] = -i * r + e * o, n[4] = -i * a + e * c, n[7] = -i * s + e * h, this
    },
    translate: function(t, e) {
      var i = this.elements;
      return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
    },
    equals: function(t) {
      for(var e = this.elements, i = t.elements, n = 0; n < 9; n++)
        if(e[n] !== i[n]) return !1;
      return !0
    },
    fromArray: function(t, e) {
      void 0 === e && (e = 0);
      for(var i = 0; i < 9; i++) this.elements[i] = t[i + e];
      return this
    },
    toArray: function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
    }
  });
  var jo, Co, Oo, zo, Po, Uo, Bo, ko, Ro, Fo, Qo, Go, Yo, Vo, Wo, Ho, Xo, Zo, qo, Jo, Ko, $o, tc, ec, ic, nc, rc, ac, sc, oc, cc = 0;

  function hc(t) {
    var e, i;
    for(e = 0, i = t.length - 3; e <= i; e += 3) {
      Qo.fromArray(t, e);
      var n = Yo.x * Math.abs(Qo.x) + Yo.y * Math.abs(Qo.y) + Yo.z * Math.abs(Qo.z),
        r = Po.dot(Qo),
        a = Uo.dot(Qo),
        s = Bo.dot(Qo);
      if(Math.max(-Math.max(r, a, s), Math.min(r, a, s)) > n) return !1
    }
    return !0
  }

  function uc(t) {
    var e = t.geometry;
    if(void 0 !== e)
      if(e.isGeometry) {
        var i = e.vertices;
        for(Xo = 0, Zo = i.length; Xo < Zo; Xo++) qo.copy(i[Xo]), qo.applyMatrix4(t.matrixWorld), Ho.expandByPoint(qo)
      } else if(e.isBufferGeometry) {
      var n = e.attributes.position;
      if(void 0 !== n)
        for(Xo = 0, Zo = n.count; Xo < Zo; Xo++) qo.fromBufferAttribute(n, Xo).applyMatrix4(t.matrixWorld), Ho.expandByPoint(qo)
    }
  }
  d.DEFAULT_IMAGE = void 0, d.DEFAULT_MAPPING = 300, d.prototype = Object.assign(Object.create(t.prototype), {
    constructor: d,
    isTexture: !0,
    updateMatrix: function() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
    },
    toJSON: function(t) {
      var e = void 0 === t || "string" == typeof t;
      if(!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
      var i = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY
      };
      if(void 0 !== this.image) {
        var n = this.image;
        void 0 === n.uuid && (n.uuid = So.generateUUID()), e || void 0 !== t.images[n.uuid] || (t.images[n.uuid] = {
          uuid: n.uuid,
          url: function(t) {
            var e;
            if(t instanceof HTMLCanvasElement) e = t;
            else {
              (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width, e.height = t.height;
              var i = e.getContext("2d");
              t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height)
            }
            return 2048 < e.width || 2048 < e.height ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
          }(n)
        }), i.image = n.uuid
      }
      return e || (t.textures[this.uuid] = i), i
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    },
    transformUv: function(t) {
      if(300 === this.mapping) {
        if(t.applyMatrix3(this.matrix), t.x < 0 || 1 < t.x) switch(this.wrapS) {
          case xs:
            t.x = t.x - Math.floor(t.x);
            break;
          case ws:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case Ns:
            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
        }
        if(t.y < 0 || 1 < t.y) switch(this.wrapT) {
          case xs:
            t.y = t.y - Math.floor(t.y);
            break;
          case ws:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case Ns:
            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
        }
        this.flipY && (t.y = 1 - t.y)
      }
    }
  }), Object.defineProperty(d.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(Nt.prototype, {
    isVector4: !0,
    set: function(t, e, i, n) {
      return this.x = t, this.y = e, this.z = i, this.w = n, this
    },
    setScalar: function(t) {
      return this.x = t, this.y = t, this.z = t, this.w = t, this
    },
    setX: function(t) {
      return this.x = t, this
    },
    setY: function(t) {
      return this.y = t, this
    },
    setZ: function(t) {
      return this.z = t, this
    },
    setW: function(t) {
      return this.w = t, this
    },
    setComponent: function(t, e) {
      switch(t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t)
      }
      return this
    },
    getComponent: function(t) {
      switch(t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t)
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z, this.w)
    },
    copy: function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
    },
    add: function(t, e) {
      return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
    },
    addScalar: function(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this
    },
    addVectors: function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    },
    addScaledVector: function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
    },
    sub: function(t, e) {
      return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
    },
    subScalar: function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
    },
    subVectors: function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    },
    multiplyScalar: function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    },
    applyMatrix4: function(t) {
      var e = this.x,
        i = this.y,
        n = this.z,
        r = this.w,
        a = t.elements;
      return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
    },
    divideScalar: function(t) {
      return this.multiplyScalar(1 / t)
    },
    setAxisAngleFromQuaternion: function(t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
    },
    setAxisAngleFromRotationMatrix: function(t) {
      var e, i, n, r, a = t.elements,
        s = a[0],
        o = a[4],
        c = a[8],
        h = a[1],
        u = a[5],
        l = a[9],
        d = a[2],
        p = a[6],
        f = a[10];
      if(Math.abs(o - h) < .01 && Math.abs(c - d) < .01 && Math.abs(l - p) < .01) {
        if(Math.abs(o + h) < .1 && Math.abs(c + d) < .1 && Math.abs(l + p) < .1 && Math.abs(s + u + f - 3) < .1) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        var g = (s + 1) / 2,
          m = (u + 1) / 2,
          M = (f + 1) / 2,
          v = (o + h) / 4,
          y = (c + d) / 4,
          A = (l + p) / 4;
        return m < g && M < g ? r = g < .01 ? (i = 0, n = .707106781) : (n = v / (i = Math.sqrt(g)), y / i) : M < m ? r = m < .01 ? (n = 0, i = .707106781) : (i = v / (n = Math.sqrt(m)), A / n) : M < .01 ? (n = i = .707106781, r = 0) : (i = y / (r = Math.sqrt(M)), n = A / r), this.set(i, n, r, e), this
      }
      var x = Math.sqrt((p - l) * (p - l) + (c - d) * (c - d) + (h - o) * (h - o));
      return Math.abs(x) < .001 && (x = 1), this.x = (p - l) / x, this.y = (c - d) / x, this.z = (h - o) / x, this.w = Math.acos((s + u + f - 1) / 2), this
    },
    min: function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
    },
    max: function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
    },
    clamp: function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
    },
    clampScalar: function(t, e) {
      return void 0 === jo && (jo = new Nt, Co = new Nt), jo.set(t, t, t, t), Co.set(e, e, e, e), this.clamp(jo, Co)
    },
    clampLength: function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    },
    floor: function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    },
    ceil: function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    },
    round: function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    },
    roundToZero: function() {
      return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    },
    negate: function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    },
    dot: function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1)
    },
    setLength: function(t) {
      return this.normalize().multiplyScalar(t)
    },
    lerp: function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    },
    lerpVectors: function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t)
    },
    equals: function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
    },
    fromBufferAttribute: function(t, e, i) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
    }
  }), z.prototype = Object.assign(Object.create(t.prototype), {
    constructor: z,
    isWebGLRenderTarget: !0,
    setSize: function(t, e) {
      this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), ((u.prototype = Object.create(z.prototype)).constructor = u).prototype.isWebGLRenderTargetCube = !0, ((Dt.prototype = Object.create(d.prototype)).constructor = Dt).prototype.isDataTexture = !0, Object.assign(e.prototype, {
    isBox3: !0,
    set: function(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    },
    setFromArray: function(t) {
      for(var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, c = t.length; o < c; o += 3) {
        var h = t[o],
          u = t[o + 1],
          l = t[o + 2];
        h < e && (e = h), u < i && (i = u), l < n && (n = l), r < h && (r = h), a < u && (a = u), s < l && (s = l)
      }
      return this.min.set(e, i, n), this.max.set(r, a, s), this
    },
    setFromBufferAttribute: function(t) {
      for(var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, c = t.count; o < c; o++) {
        var h = t.getX(o),
          u = t.getY(o),
          l = t.getZ(o);
        h < e && (e = h), u < i && (i = u), l < n && (n = l), r < h && (r = h), a < u && (a = u), s < l && (s = l)
      }
      return this.min.set(e, i, n), this.max.set(r, a, s), this
    },
    setFromPoints: function(t) {
      this.makeEmpty();
      for(var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
      return this
    },
    setFromCenterAndSize: (Jo = new wt, function(t, e) {
      var i = Jo.copy(e).multiplyScalar(.5);
      return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
    }),
    setFromObject: function(t) {
      return this.makeEmpty(), this.expandByObject(t)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    getCenter: function(t) {
      return void 0 === t && (t = new wt), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
      return void 0 === t && (t = new wt), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
      return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
      return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    expandByObject: (qo = new wt, function(t) {
      return Ho = this, t.updateMatrixWorld(!0), t.traverse(uc), this
    }),
    containsPoint: function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    },
    containsBox: function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    },
    getParameter: function(t, e) {
      return void 0 === e && (e = new wt), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    },
    intersectsSphere: (Wo = new wt, function(t) {
      return this.clampPoint(t.center, Wo), Wo.distanceToSquared(t.center) <= t.radius * t.radius
    }),
    intersectsPlane: function(t) {
      var e, i;
      return i = 0 < t.normal.x ? (e = t.normal.x * this.min.x, t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, t.normal.x * this.min.x), 0 < t.normal.y ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), 0 < t.normal.z ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant
    },
    intersectsTriangle: (Po = new wt, Uo = new wt, Bo = new wt, ko = new wt, Ro = new wt, Fo = new wt, Qo = new wt, Go = new wt, Yo = new wt, Vo = new wt, function(t) {
      if(this.isEmpty()) return !1;
      this.getCenter(Go), Yo.subVectors(this.max, Go), Po.subVectors(t.a, Go), Uo.subVectors(t.b, Go), Bo.subVectors(t.c, Go), ko.subVectors(Uo, Po), Ro.subVectors(Bo, Uo), Fo.subVectors(Po, Bo);
      var e = [0, -ko.z, ko.y, 0, -Ro.z, Ro.y, 0, -Fo.z, Fo.y, ko.z, 0, -ko.x, Ro.z, 0, -Ro.x, Fo.z, 0, -Fo.x, -ko.y, ko.x, 0, -Ro.y, Ro.x, 0, -Fo.y, Fo.x, 0];
      return !!hc(e) && !!hc(e = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (Vo.crossVectors(ko, Ro), hc(e = [Vo.x, Vo.y, Vo.z]))
    }),
    clampPoint: function(t, e) {
      return void 0 === e && (e = new wt), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: (zo = new wt, function(t) {
      return zo.copy(t).clamp(this.min, this.max).sub(t).length()
    }),
    getBoundingSphere: (Oo = new wt, function(t) {
      return void 0 === t && (t = new p), this.getCenter(t.center), t.radius = .5 * this.getSize(Oo).length(), t
    }),
    intersect: function(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    },
    union: function(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    },
    applyMatrix4: function(t) {
      if(this.isEmpty()) return this;
      var e = t.elements,
        i = e[0] * this.min.x,
        n = e[1] * this.min.x,
        r = e[2] * this.min.x,
        a = e[0] * this.max.x,
        s = e[1] * this.max.x,
        o = e[2] * this.max.x,
        c = e[4] * this.min.y,
        h = e[5] * this.min.y,
        u = e[6] * this.min.y,
        l = e[4] * this.max.y,
        d = e[5] * this.max.y,
        p = e[6] * this.max.y,
        f = e[8] * this.min.z,
        g = e[9] * this.min.z,
        m = e[10] * this.min.z,
        M = e[8] * this.max.z,
        v = e[9] * this.max.z,
        y = e[10] * this.max.z;
      return this.min.x = Math.min(i, a) + Math.min(c, l) + Math.min(f, M) + e[12], this.min.y = Math.min(n, s) + Math.min(h, d) + Math.min(g, v) + e[13], this.min.z = Math.min(r, o) + Math.min(u, p) + Math.min(m, y) + e[14], this.max.x = Math.max(i, a) + Math.max(c, l) + Math.max(f, M) + e[12], this.max.y = Math.max(n, s) + Math.max(h, d) + Math.max(g, v) + e[13], this.max.z = Math.max(r, o) + Math.max(u, p) + Math.max(m, y) + e[14], this
    },
    translate: function(t) {
      return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }), Object.assign(p.prototype, {
    set: function(t, e) {
      return this.center.copy(t), this.radius = e, this
    },
    setFromPoints: (Ko = new e, function(t, e) {
      var i = this.center;
      void 0 !== e ? i.copy(e) : Ko.setFromPoints(t).getCenter(i);
      for(var n = 0, r = 0, a = t.length; r < a; r++) n = Math.max(n, i.distanceToSquared(t[r]));
      return this.radius = Math.sqrt(n), this
    }),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.center.copy(t.center), this.radius = t.radius, this
    },
    empty: function() {
      return this.radius <= 0
    },
    containsPoint: function(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(t) {
      return t.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e
    },
    intersectsBox: function(t) {
      return t.intersectsSphere(this)
    },
    intersectsPlane: function(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    },
    clampPoint: function(t, e) {
      var i = this.center.distanceToSquared(t);
      return void 0 === e && (e = new wt), e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
    },
    getBoundingBox: function(t) {
      return void 0 === t && (t = new e), t.set(this.center, this.center), t.expandByScalar(this.radius), t
    },
    applyMatrix4: function(t) {
      return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
    },
    translate: function(t) {
      return this.center.add(t), this
    },
    equals: function(t) {
      return t.center.equals(this.center) && t.radius === this.radius
    }
  }), Object.assign(s.prototype, {
    set: function(t, e) {
      return this.normal.copy(t), this.constant = e, this
    },
    setComponents: function(t, e, i, n) {
      return this.normal.set(t, e, i), this.constant = n, this
    },
    setFromNormalAndCoplanarPoint: function(t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this
    },
    setFromCoplanarPoints: (ic = new wt, nc = new wt, function(t, e, i) {
      var n = ic.subVectors(i, e).cross(nc.subVectors(t, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(n, t), this
    }),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this
    },
    normalize: function() {
      var t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), this.constant *= t, this
    },
    negate: function() {
      return this.constant *= -1, this.normal.negate(), this
    },
    distanceToPoint: function(t) {
      return this.normal.dot(t) + this.constant
    },
    distanceToSphere: function(t) {
      return this.distanceToPoint(t.center) - t.radius
    },
    projectPoint: function(t, e) {
      return void 0 === e && (e = new wt), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
    },
    intersectLine: (ec = new wt, function(t, e) {
      void 0 === e && (e = new wt);
      var i = t.delta(ec),
        n = this.normal.dot(i);
      if(0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
      var r = -(t.start.dot(this.normal) + this.constant) / n;
      return r < 0 || 1 < r ? void 0 : e.copy(i).multiplyScalar(r).add(t.start)
    }),
    intersectsLine: function(t) {
      var e = this.distanceToPoint(t.start),
        i = this.distanceToPoint(t.end);
      return e < 0 && 0 < i || i < 0 && 0 < e
    },
    intersectsBox: function(t) {
      return t.intersectsPlane(this)
    },
    intersectsSphere: function(t) {
      return t.intersectsPlane(this)
    },
    coplanarPoint: function(t) {
      return void 0 === t && (t = new wt), t.copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: ($o = new wt, tc = new I, function(t, e) {
      var i = e || tc.getNormalMatrix(t),
        n = this.coplanarPoint($o).applyMatrix4(t),
        r = this.normal.applyMatrix3(i).normalize();
      return this.constant = -n.dot(r), this
    }),
    translate: function(t) {
      return this.constant -= t.dot(this.normal), this
    },
    equals: function(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant
    }
  }), Object.assign(Tt.prototype, {
    set: function(t, e, i, n, r, a) {
      var s = this.planes;
      return s[0].copy(t), s[1].copy(e), s[2].copy(i), s[3].copy(n), s[4].copy(r), s[5].copy(a), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      for(var e = this.planes, i = 0; i < 6; i++) e[i].copy(t.planes[i]);
      return this
    },
    setFromMatrix: function(t) {
      var e = this.planes,
        i = t.elements,
        n = i[0],
        r = i[1],
        a = i[2],
        s = i[3],
        o = i[4],
        c = i[5],
        h = i[6],
        u = i[7],
        l = i[8],
        d = i[9],
        p = i[10],
        f = i[11],
        g = i[12],
        m = i[13],
        M = i[14],
        v = i[15];
      return e[0].setComponents(s - n, u - o, f - l, v - g).normalize(), e[1].setComponents(s + n, u + o, f + l, v + g).normalize(), e[2].setComponents(s + r, u + c, f + d, v + m).normalize(), e[3].setComponents(s - r, u - c, f - d, v - m).normalize(), e[4].setComponents(s - a, u - h, f - p, v - M).normalize(), e[5].setComponents(s + a, u + h, f + p, v + M).normalize(), this
    },
    intersectsObject: (oc = new p, function(t) {
      var e = t.geometry;
      return null === e.boundingSphere && e.computeBoundingSphere(), oc.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(oc)
    }),
    intersectsSprite: (sc = new p, function(t) {
      return sc.center.set(0, 0, 0), sc.radius = .7071067811865476, sc.applyMatrix4(t.matrixWorld), this.intersectsSphere(sc)
    }),
    intersectsSphere: function(t) {
      for(var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
        if(e[r].distanceToPoint(i) < n) return !1
      }
      return !0
    },
    intersectsBox: (rc = new wt, ac = new wt, function(t) {
      for(var e = this.planes, i = 0; i < 6; i++) {
        var n = e[i];
        rc.x = 0 < n.normal.x ? t.min.x : t.max.x, ac.x = 0 < n.normal.x ? t.max.x : t.min.x, rc.y = 0 < n.normal.y ? t.min.y : t.max.y, ac.y = 0 < n.normal.y ? t.max.y : t.min.y, rc.z = 0 < n.normal.z ? t.min.z : t.max.z, ac.z = 0 < n.normal.z ? t.max.z : t.min.z;
        var r = n.distanceToPoint(rc),
          a = n.distanceToPoint(ac);
        if(r < 0 && a < 0) return !1
      }
      return !0
    }),
    containsPoint: function(t) {
      for(var e = this.planes, i = 0; i < 6; i++)
        if(e[i].distanceToPoint(t) < 0) return !1;
      return !0
    }
  });
  var lc, dc = {
      alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
      alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
      alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
      aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
      aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "\nvec3 transformed = vec3( position );\n",
      beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
      bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
      bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
      clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
      clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
      clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
      clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
      color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
      color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
      color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
      common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
      cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
      defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
      displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
      displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
      emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
      emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
      encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
      encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
      envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
      envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
      envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
      envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
      fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
      fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
      fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
      gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
      lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
      lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
      lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
      lights_pars_maps: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
      lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
      lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
      lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
      lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
      lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
      lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
      lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
      logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
      logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
      logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
      map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
      map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
      map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
      metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
      metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
      morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
      morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
      normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
      normal_fragment_maps: "#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
      normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
      packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
      premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
      project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
      dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
      dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
      roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
      roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
      shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
      shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
      shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
      skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
      skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
      skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
      specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
      tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
      uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
      uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
      uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
      worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
      cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
      cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
      depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
      depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
      distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
      distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
      equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
      equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
      linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
      meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars_begin>\n#include <lights_pars_maps>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
      normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
      points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
      shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
      shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
    },
    pc = {
      merge: function(t) {
        for(var e = {}, i = 0; i < t.length; i++) {
          var n = this.clone(t[i]);
          for(var r in n) e[r] = n[r]
        }
        return e
      },
      clone: function(t) {
        var e = {};
        for(var i in t)
          for(var n in e[i] = {}, t[i]) {
            var r = t[i][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
          }
        return e
      }
    },
    fc = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };

  function gc(t, e, i) {
    return i < 0 && (i += 1), 1 < i && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
  }
  Object.assign(O.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function(t) {
      return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
    },
    setScalar: function(t) {
      return this.r = t, this.g = t, this.b = t, this
    },
    setHex: function(t) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
    },
    setRGB: function(t, e, i) {
      return this.r = t, this.g = e, this.b = i, this
    },
    setHSL: function(t, e, i) {
      if(t = So.euclideanModulo(t, 1), e = So.clamp(e, 0, 1), i = So.clamp(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
      else {
        var n = i <= .5 ? i * (1 + e) : i + e - i * e,
          r = 2 * i - n;
        this.r = gc(r, n, t + 1 / 3), this.g = gc(r, n, t), this.b = gc(r, n, t - 1 / 3)
      }
      return this
    },
    setStyle: function(t) {
      function e(t) {
        void 0 !== t && parseFloat(t)
      }
      var i;
      if(i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
        var n, r = i[1],
          a = i[2];
        switch(r) {
          case "rgb":
          case "rgba":
            if(n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this;
            if(n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this;
            break;
          case "hsl":
          case "hsla":
            if(n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              var s = parseFloat(n[1]) / 360,
                o = parseInt(n[2], 10) / 100,
                c = parseInt(n[3], 10) / 100;
              return e(n[5]), this.setHSL(s, o, c)
            }
        }
      } else if(i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
        var h, u = (h = i[1]).length;
        if(3 === u) return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255, this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255, this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255, this;
        if(6 === u) return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255, this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255, this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255, this
      }
      t && 0 < t.length && void 0 !== (h = fc[t]) && this.setHex(h);
      return this
    },
    clone: function() {
      return new this.constructor(this.r, this.g, this.b)
    },
    copy: function(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this
    },
    copyGammaToLinear: function(t, e) {
      return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
    },
    copyLinearToGamma: function(t, e) {
      void 0 === e && (e = 2);
      var i = 0 < e ? 1 / e : 1;
      return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
    },
    convertGammaToLinear: function(t) {
      return this.copyGammaToLinear(this, t), this
    },
    convertLinearToGamma: function(t) {
      return this.copyLinearToGamma(this, t), this
    },
    getHex: function() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
      return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(t) {
      void 0 === t && (t = {
        h: 0,
        s: 0,
        l: 0
      });
      var e, i, n = this.r,
        r = this.g,
        a = this.b,
        s = Math.max(n, r, a),
        o = Math.min(n, r, a),
        c = (o + s) / 2;
      if(o === s) i = e = 0;
      else {
        var h = s - o;
        switch(i = c <= .5 ? h / (s + o) : h / (2 - s - o), s) {
          case n:
            e = (r - a) / h + (r < a ? 6 : 0);
            break;
          case r:
            e = (a - n) / h + 2;
            break;
          case a:
            e = (n - r) / h + 4
        }
        e /= 6
      }
      return t.h = e, t.s = i, t.l = c, t
    },
    getStyle: function() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: (lc = {}, function(t, e, i) {
      return this.getHSL(lc), lc.h += t, lc.s += e, lc.l += i, this.setHSL(lc.h, lc.s, lc.l), this
    }),
    add: function(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this
    },
    addColors: function(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
    },
    addScalar: function(t) {
      return this.r += t, this.g += t, this.b += t, this
    },
    sub: function(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
    },
    multiply: function(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
    },
    multiplyScalar: function(t) {
      return this.r *= t, this.g *= t, this.b *= t, this
    },
    lerp: function(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
    },
    equals: function(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b
    },
    fromArray: function(t, e) {
      return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
    },
    toJSON: function() {
      return this.getHex()
    }
  });
  var mc, Mc, vc = {
      common: {
        diffuse: {
          value: new O(15658734)
        },
        opacity: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new I
        },
        alphaMap: {
          value: null
        }
      },
      specularmap: {
        specularMap: {
          value: null
        }
      },
      envmap: {
        envMap: {
          value: null
        },
        flipEnvMap: {
          value: -1
        },
        reflectivity: {
          value: 1
        },
        refractionRatio: {
          value: .98
        },
        maxMipLevel: {
          value: 0
        }
      },
      aomap: {
        aoMap: {
          value: null
        },
        aoMapIntensity: {
          value: 1
        }
      },
      lightmap: {
        lightMap: {
          value: null
        },
        lightMapIntensity: {
          value: 1
        }
      },
      emissivemap: {
        emissiveMap: {
          value: null
        }
      },
      bumpmap: {
        bumpMap: {
          value: null
        },
        bumpScale: {
          value: 1
        }
      },
      normalmap: {
        normalMap: {
          value: null
        },
        normalScale: {
          value: new tt(1, 1)
        }
      },
      displacementmap: {
        displacementMap: {
          value: null
        },
        displacementScale: {
          value: 1
        },
        displacementBias: {
          value: 0
        }
      },
      roughnessmap: {
        roughnessMap: {
          value: null
        }
      },
      metalnessmap: {
        metalnessMap: {
          value: null
        }
      },
      gradientmap: {
        gradientMap: {
          value: null
        }
      },
      fog: {
        fogDensity: {
          value: 25e-5
        },
        fogNear: {
          value: 1
        },
        fogFar: {
          value: 2e3
        },
        fogColor: {
          value: new O(16777215)
        }
      },
      lights: {
        ambientLightColor: {
          value: []
        },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: {
          value: []
        },
        directionalShadowMatrix: {
          value: []
        },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotShadowMap: {
          value: []
        },
        spotShadowMatrix: {
          value: []
        },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: {
          value: []
        },
        pointShadowMatrix: {
          value: []
        },
        hemisphereLights: {
          value: [],
          properties: {
            direction: {},
            skyColor: {},
            groundColor: {}
          }
        },
        rectAreaLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            width: {},
            height: {}
          }
        }
      },
      points: {
        diffuse: {
          value: new O(15658734)
        },
        opacity: {
          value: 1
        },
        size: {
          value: 1
        },
        scale: {
          value: 1
        },
        map: {
          value: null
        },
        uvTransform: {
          value: new I
        }
      }
    },
    yc = {
      basic: {
        uniforms: pc.merge([vc.common, vc.specularmap, vc.envmap, vc.aomap, vc.lightmap, vc.fog]),
        vertexShader: dc.meshbasic_vert,
        fragmentShader: dc.meshbasic_frag
      },
      lambert: {
        uniforms: pc.merge([vc.common, vc.specularmap, vc.envmap, vc.aomap, vc.lightmap, vc.emissivemap, vc.fog, vc.lights, {
          emissive: {
            value: new O(0)
          }
        }]),
        vertexShader: dc.meshlambert_vert,
        fragmentShader: dc.meshlambert_frag
      },
      phong: {
        uniforms: pc.merge([vc.common, vc.specularmap, vc.envmap, vc.aomap, vc.lightmap, vc.emissivemap, vc.bumpmap, vc.normalmap, vc.displacementmap, vc.gradientmap, vc.fog, vc.lights, {
          emissive: {
            value: new O(0)
          },
          specular: {
            value: new O(1118481)
          },
          shininess: {
            value: 30
          }
        }]),
        vertexShader: dc.meshphong_vert,
        fragmentShader: dc.meshphong_frag
      },
      standard: {
        uniforms: pc.merge([vc.common, vc.envmap, vc.aomap, vc.lightmap, vc.emissivemap, vc.bumpmap, vc.normalmap, vc.displacementmap, vc.roughnessmap, vc.metalnessmap, vc.fog, vc.lights, {
          emissive: {
            value: new O(0)
          },
          roughness: {
            value: .5
          },
          metalness: {
            value: .5
          },
          envMapIntensity: {
            value: 1
          }
        }]),
        vertexShader: dc.meshphysical_vert,
        fragmentShader: dc.meshphysical_frag
      },
      points: {
        uniforms: pc.merge([vc.points, vc.fog]),
        vertexShader: dc.points_vert,
        fragmentShader: dc.points_frag
      },
      dashed: {
        uniforms: pc.merge([vc.common, vc.fog, {
          scale: {
            value: 1
          },
          dashSize: {
            value: 1
          },
          totalSize: {
            value: 2
          }
        }]),
        vertexShader: dc.linedashed_vert,
        fragmentShader: dc.linedashed_frag
      },
      depth: {
        uniforms: pc.merge([vc.common, vc.displacementmap]),
        vertexShader: dc.depth_vert,
        fragmentShader: dc.depth_frag
      },
      normal: {
        uniforms: pc.merge([vc.common, vc.bumpmap, vc.normalmap, vc.displacementmap, {
          opacity: {
            value: 1
          }
        }]),
        vertexShader: dc.normal_vert,
        fragmentShader: dc.normal_frag
      },
      cube: {
        uniforms: {
          tCube: {
            value: null
          },
          tFlip: {
            value: -1
          },
          opacity: {
            value: 1
          }
        },
        vertexShader: dc.cube_vert,
        fragmentShader: dc.cube_frag
      },
      equirect: {
        uniforms: {
          tEquirect: {
            value: null
          }
        },
        vertexShader: dc.equirect_vert,
        fragmentShader: dc.equirect_frag
      },
      distanceRGBA: {
        uniforms: pc.merge([vc.common, vc.displacementmap, {
          referencePosition: {
            value: new wt
          },
          nearDistance: {
            value: 1
          },
          farDistance: {
            value: 1e3
          }
        }]),
        vertexShader: dc.distanceRGBA_vert,
        fragmentShader: dc.distanceRGBA_frag
      },
      shadow: {
        uniforms: pc.merge([vc.lights, vc.fog, {
          color: {
            value: new O(0)
          },
          opacity: {
            value: 1
          }
        }]),
        vertexShader: dc.shadow_vert,
        fragmentShader: dc.shadow_frag
      }
    };
  yc.physical = {
    uniforms: pc.merge([yc.standard.uniforms, {
      clearCoat: {
        value: 0
      },
      clearCoatRoughness: {
        value: 0
      }
    }]),
    vertexShader: dc.meshphysical_vert,
    fragmentShader: dc.meshphysical_frag
  }, r.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], r.DefaultOrder = "XYZ", Object.defineProperties(r.prototype, {
    x: {
      get: function() {
        return this._x
      },
      set: function(t) {
        this._x = t, this.onChangeCallback()
      }
    },
    y: {
      get: function() {
        return this._y
      },
      set: function(t) {
        this._y = t, this.onChangeCallback()
      }
    },
    z: {
      get: function() {
        return this._z
      },
      set: function(t) {
        this._z = t, this.onChangeCallback()
      }
    },
    order: {
      get: function() {
        return this._order
      },
      set: function(t) {
        this._order = t, this.onChangeCallback()
      }
    }
  }), Object.assign(r.prototype, {
    isEuler: !0,
    set: function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._order)
    },
    copy: function(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
    },
    setFromRotationMatrix: function(t, e, i) {
      var n = So.clamp,
        r = t.elements,
        a = r[0],
        s = r[4],
        o = r[8],
        c = r[1],
        h = r[5],
        u = r[9],
        l = r[2],
        d = r[6],
        p = r[10];
      return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(d, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-l, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-l, p), this._z = Math.atan2(-s, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-s, h))) : "YZX" === e ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, h), this._y = Math.atan2(-l, a)) : (this._x = 0, this._y = Math.atan2(o, p))) : "XZY" === e && (this._z = Math.asin(-n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(d, h), this._y = Math.atan2(o, a)) : (this._x = Math.atan2(-u, p), this._y = 0)), this._order = e, !1 !== i && this.onChangeCallback(), this
    },
    setFromQuaternion: (Mc = new At, function(t, e, i) {
      return Mc.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Mc, e, i)
    }),
    setFromVector3: function(t, e) {
      return this.set(t.x, t.y, t.z, e || this._order)
    },
    reorder: (mc = new W, function(t) {
      return mc.setFromEuler(this), this.setFromQuaternion(mc, t)
    }),
    equals: function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    },
    fromArray: function(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
    },
    toArray: function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
    },
    toVector3: function(t) {
      return t ? t.set(this._x, this._y, this._z) : new wt(this._x, this._y, this._z)
    },
    onChange: function(t) {
      return this.onChangeCallback = t, this
    },
    onChangeCallback: function() {}
  }), Object.assign(a.prototype, {
    set: function(t) {
      this.mask = 1 << t | 0
    },
    enable: function(t) {
      this.mask |= 1 << t | 0
    },
    toggle: function(t) {
      this.mask ^= 1 << t | 0
    },
    disable: function(t) {
      this.mask &= ~(1 << t | 0)
    },
    test: function(t) {
      return 0 != (this.mask & t.mask)
    }
  });
  var Ac, xc, wc, Nc, Dc, Tc, Lc, Ec, Ic, _c, bc, Sc, jc, Cc, Oc, zc, Pc, Uc, Bc = 0;
  g.DefaultUp = new wt(0, 1, 0), g.DefaultMatrixAutoUpdate = !0, g.prototype = Object.assign(Object.create(t.prototype), {
    constructor: g,
    isObject3D: !0,
    onBeforeRender: function() {},
    onAfterRender: function() {},
    applyMatrix: function(t) {
      this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    applyQuaternion: function(t) {
      return this.quaternion.premultiply(t), this
    },
    setRotationFromAxisAngle: function(t, e) {
      this.quaternion.setFromAxisAngle(t, e)
    },
    setRotationFromEuler: function(t) {
      this.quaternion.setFromEuler(t, !0)
    },
    setRotationFromMatrix: function(t) {
      this.quaternion.setFromRotationMatrix(t)
    },
    setRotationFromQuaternion: function(t) {
      this.quaternion.copy(t)
    },
    rotateOnAxis: (Pc = new W, function(t, e) {
      return Pc.setFromAxisAngle(t, e), this.quaternion.multiply(Pc), this
    }),
    rotateOnWorldAxis: (zc = new W, function(t, e) {
      return zc.setFromAxisAngle(t, e), this.quaternion.premultiply(zc), this
    }),
    rotateX: (Oc = new wt(1, 0, 0), function(t) {
      return this.rotateOnAxis(Oc, t)
    }),
    rotateY: (Cc = new wt(0, 1, 0), function(t) {
      return this.rotateOnAxis(Cc, t)
    }),
    rotateZ: (jc = new wt(0, 0, 1), function(t) {
      return this.rotateOnAxis(jc, t)
    }),
    translateOnAxis: (Sc = new wt, function(t, e) {
      return Sc.copy(t).applyQuaternion(this.quaternion), this.position.add(Sc.multiplyScalar(e)), this
    }),
    translateX: (bc = new wt(1, 0, 0), function(t) {
      return this.translateOnAxis(bc, t)
    }),
    translateY: (_c = new wt(0, 1, 0), function(t) {
      return this.translateOnAxis(_c, t)
    }),
    translateZ: (Ic = new wt(0, 0, 1), function(t) {
      return this.translateOnAxis(Ic, t)
    }),
    localToWorld: function(t) {
      return t.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: (Ec = new At, function(t) {
      return t.applyMatrix4(Ec.getInverse(this.matrixWorld))
    }),
    lookAt: (Tc = new At, Lc = new wt, function(t, e, i) {
      t.isVector3 ? Lc.copy(t) : Lc.set(t, e, i), this.isCamera ? Tc.lookAt(this.position, Lc, this.up) : Tc.lookAt(Lc, this.position, this.up), this.quaternion.setFromRotationMatrix(Tc)
    }),
    add: function(t) {
      if(1 < arguments.length) {
        for(var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this
      }
      return t === this || t && t.isObject3D && (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
        type: "added"
      }), this.children.push(t)), this
    },
    remove: function(t) {
      if(1 < arguments.length) {
        for(var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
        return this
      }
      var i = this.children.indexOf(t);
      return -1 !== i && (t.parent = null, t.dispatchEvent({
        type: "removed"
      }), this.children.splice(i, 1)), this
    },
    getObjectById: function(t) {
      return this.getObjectByProperty("id", t)
    },
    getObjectByName: function(t) {
      return this.getObjectByProperty("name", t)
    },
    getObjectByProperty: function(t, e) {
      if(this[t] === e) return this;
      for(var i = 0, n = this.children.length; i < n; i++) {
        var r = this.children[i].getObjectByProperty(t, e);
        if(void 0 !== r) return r
      }
    },
    getWorldPosition: function(t) {
      return void 0 === t && (t = new wt), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: (Nc = new wt, Dc = new wt, function(t) {
      return void 0 === t && (t = new W), this.updateMatrixWorld(!0), this.matrixWorld.decompose(Nc, t, Dc), t
    }),
    getWorldScale: (xc = new wt, wc = new W, function(t) {
      return void 0 === t && (t = new wt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(xc, wc, t), t
    }),
    getWorldDirection: (Ac = new W, function(t) {
      return void 0 === t && (t = new wt), this.getWorldQuaternion(Ac), t.set(0, 0, 1).applyQuaternion(Ac)
    }),
    raycast: function() {},
    traverse: function(t) {
      t(this);
      for(var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
    },
    traverseVisible: function(t) {
      if(!1 !== this.visible) {
        t(this);
        for(var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
      }
    },
    traverseAncestors: function(t) {
      var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t))
    },
    updateMatrix: function() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t = !(this.matrixWorldNeedsUpdate = !1));
      for(var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
    },
    toJSON: function(i) {
      function t(t, e) {
        return void 0 === t[e.uuid] && (t[e.uuid] = e.toJSON(i)), e.uuid
      }

      function e(t) {
        var e = [];
        for(var i in t) {
          var n = t[i];
          delete n.metadata, e.push(n)
        }
        return e
      }
      var n = void 0 === i || "string" == typeof i,
        r = {};
      n && (i = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      }, r.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var a = {};
      if(a.uuid = this.uuid, a.type = this.type, "" !== this.name && (a.name = this.name), !0 === this.castShadow && (a.castShadow = !0), !0 === this.receiveShadow && (a.receiveShadow = !0), !1 === this.visible && (a.visible = !1), !1 === this.frustumCulled && (a.frustumCulled = !1), 0 !== this.renderOrder && (a.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (a.userData = this.userData), a.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (a.matrixAutoUpdate = !1), void 0 !== this.geometry) {
        a.geometry = t(i.geometries, this.geometry);
        var s = this.geometry.parameters;
        if(void 0 !== s && void 0 !== s.shapes) {
          var o = s.shapes;
          if(Array.isArray(o))
            for(var c = 0, h = o.length; c < h; c++) {
              var u = o[c];
              t(i.shapes, u)
            } else t(i.shapes, o)
        }
      }
      if(void 0 !== this.material)
        if(Array.isArray(this.material)) {
          var l = [];
          for(c = 0, h = this.material.length; c < h; c++) l.push(t(i.materials, this.material[c]));
          a.material = l
        } else a.material = t(i.materials, this.material);
      if(0 < this.children.length) {
        a.children = [];
        for(c = 0; c < this.children.length; c++) a.children.push(this.children[c].toJSON(i).object)
      }
      if(n) {
        var d = e(i.geometries),
          p = e(i.materials),
          f = e(i.textures),
          g = e(i.images);
        o = e(i.shapes);
        0 < d.length && (r.geometries = d), 0 < p.length && (r.materials = p), 0 < f.length && (r.textures = f), 0 < g.length && (r.images = g), 0 < o.length && (r.shapes = o)
      }
      return r.object = a, r
    },
    clone: function(t) {
      return (new this.constructor).copy(this, t)
    },
    copy: function(t, e) {
      if(void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
        for(var i = 0; i < t.children.length; i++) {
          var n = t.children[i];
          this.add(n.clone())
        }
      return this
    }
  }), o.prototype = Object.assign(Object.create(g.prototype), {
    constructor: o,
    isCamera: !0,
    copy: function(t, e) {
      return g.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
    },
    getWorldDirection: (Uc = new W, function(t) {
      return void 0 === t && (t = new wt), this.getWorldQuaternion(Uc), t.set(0, 0, -1).applyQuaternion(Uc)
    }),
    updateMatrixWorld: function(t) {
      g.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), m.prototype = Object.assign(Object.create(o.prototype), {
    constructor: m,
    isOrthographicCamera: !0,
    copy: function(t, e) {
      return o.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
    },
    setViewOffset: function(t, e, i, n, r, a) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        i = (this.right + this.left) / 2,
        n = (this.top + this.bottom) / 2,
        r = i - t,
        a = i + t,
        s = n + e,
        o = n - e;
      if(null !== this.view && this.view.enabled) {
        var c = this.zoom / (this.view.width / this.view.fullWidth),
          h = this.zoom / (this.view.height / this.view.fullHeight),
          u = (this.right - this.left) / this.view.width,
          l = (this.top - this.bottom) / this.view.height;
        a = (r += u * (this.view.offsetX / c)) + u * (this.view.width / c), o = (s -= l * (this.view.offsetY / h)) - l * (this.view.height / h)
      }
      this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far)
    },
    toJSON: function(t) {
      var e = g.prototype.toJSON.call(this, t);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
    }
  }), Object.assign(P.prototype, {
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
      for(var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
      for(e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
      return this
    }
  });
  var kc, Rc, Fc, Qc, Gc, Yc, Vc, Wc = 0;
  y.prototype = Object.assign(Object.create(t.prototype), {
    constructor: y,
    isGeometry: !0,
    applyMatrix: function(t) {
      for(var e = (new I).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
        this.vertices[i].applyMatrix4(t)
      }
      for(i = 0, n = this.faces.length; i < n; i++) {
        var r = this.faces[i];
        r.normal.applyMatrix3(e).normalize();
        for(var a = 0, s = r.vertexNormals.length; a < s; a++) r.vertexNormals[a].applyMatrix3(e).normalize()
      }
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
    },
    rotateX: (Vc = new At, function(t) {
      return Vc.makeRotationX(t), this.applyMatrix(Vc), this
    }),
    rotateY: (Yc = new At, function(t) {
      return Yc.makeRotationY(t), this.applyMatrix(Yc), this
    }),
    rotateZ: (Gc = new At, function(t) {
      return Gc.makeRotationZ(t), this.applyMatrix(Gc), this
    }),
    translate: (Qc = new At, function(t, e, i) {
      return Qc.makeTranslation(t, e, i), this.applyMatrix(Qc), this
    }),
    scale: (Fc = new At, function(t, e, i) {
      return Fc.makeScale(t, e, i), this.applyMatrix(Fc), this
    }),
    lookAt: (Rc = new g, function(t) {
      Rc.lookAt(t), Rc.updateMatrix(), this.applyMatrix(Rc.matrix)
    }),
    fromBufferGeometry: function(t) {
      function e(t, e, i, n) {
        var r = new P(t, e, i, void 0 !== s ? [u[t].clone(), u[e].clone(), u[i].clone()] : [], void 0 !== o ? [a.colors[t].clone(), a.colors[e].clone(), a.colors[i].clone()] : [], n);
        a.faces.push(r), void 0 !== c && a.faceVertexUvs[0].push([l[t].clone(), l[e].clone(), l[i].clone()]), void 0 !== h && a.faceVertexUvs[1].push([d[t].clone(), d[e].clone(), d[i].clone()])
      }
      var a = this,
        i = null !== t.index ? t.index.array : void 0,
        n = t.attributes,
        r = n.position.array,
        s = void 0 !== n.normal ? n.normal.array : void 0,
        o = void 0 !== n.color ? n.color.array : void 0,
        c = void 0 !== n.uv ? n.uv.array : void 0,
        h = void 0 !== n.uv2 ? n.uv2.array : void 0;
      void 0 !== h && (this.faceVertexUvs[1] = []);
      for(var u = [], l = [], d = [], p = 0, f = 0; p < r.length; p += 3, f += 2) a.vertices.push(new wt(r[p], r[p + 1], r[p + 2])), void 0 !== s && u.push(new wt(s[p], s[p + 1], s[p + 2])), void 0 !== o && a.colors.push(new O(o[p], o[p + 1], o[p + 2])), void 0 !== c && l.push(new tt(c[f], c[f + 1])), void 0 !== h && d.push(new tt(h[f], h[f + 1]));
      var g = t.groups;
      if(0 < g.length)
        for(p = 0; p < g.length; p++)
          for(var m = g[p], M = m.start, v = (f = M, M + m.count); f < v; f += 3) void 0 !== i ? e(i[f], i[f + 1], i[f + 2], m.materialIndex) : e(f, f + 1, f + 2, m.materialIndex);
      else if(void 0 !== i)
        for(p = 0; p < i.length; p += 3) e(i[p], i[p + 1], i[p + 2]);
      else
        for(p = 0; p < r.length / 3; p += 3) e(p, p + 1, p + 2);
      return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
    },
    center: (kc = new wt, function() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(kc).negate(), this.translate(kc.x, kc.y, kc.z), this
    }),
    normalize: function() {
      this.computeBoundingSphere();
      var t = this.boundingSphere.center,
        e = this.boundingSphere.radius,
        i = 0 === e ? 1 : 1 / e,
        n = new At;
      return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
    },
    computeFaceNormals: function() {
      for(var t = new wt, e = new wt, i = 0, n = this.faces.length; i < n; i++) {
        var r = this.faces[i],
          a = this.vertices[r.a],
          s = this.vertices[r.b],
          o = this.vertices[r.c];
        t.subVectors(o, s), e.subVectors(a, s), t.cross(e), t.normalize(), r.normal.copy(t)
      }
    },
    computeVertexNormals: function(t) {
      var e, i, n, r, a, s;
      for(void 0 === t && (t = !0), s = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) s[e] = new wt;
      if(t) {
        var o, c, h, u = new wt,
          l = new wt;
        for(n = 0, r = this.faces.length; n < r; n++) a = this.faces[n], o = this.vertices[a.a], c = this.vertices[a.b], h = this.vertices[a.c], u.subVectors(h, c), l.subVectors(o, c), u.cross(l), s[a.a].add(u), s[a.b].add(u), s[a.c].add(u)
      } else
        for(this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) s[(a = this.faces[n]).a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
      for(e = 0, i = this.vertices.length; e < i; e++) s[e].normalize();
      for(n = 0, r = this.faces.length; n < r; n++) {
        var d = (a = this.faces[n]).vertexNormals;
        3 === d.length ? (d[0].copy(s[a.a]), d[1].copy(s[a.b]), d[2].copy(s[a.c])) : (d[0] = s[a.a].clone(), d[1] = s[a.b].clone(), d[2] = s[a.c].clone())
      }
      0 < this.faces.length && (this.normalsNeedUpdate = !0)
    },
    computeFlatVertexNormals: function() {
      var t, e, i;
      for(this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
        var n = (i = this.faces[t]).vertexNormals;
        3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
      }
      0 < this.faces.length && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
      var t, e, i, n, r;
      for(i = 0, n = this.faces.length; i < n; i++)
        for((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
      var a = new y;
      for(a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
        if(!this.morphNormals[t]) {
          this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
          var s = this.morphNormals[t].faceNormals,
            o = this.morphNormals[t].vertexNormals;
          for(i = 0, n = this.faces.length; i < n; i++) c = new wt, h = {
            a: new wt,
            b: new wt,
            c: new wt
          }, s.push(c), o.push(h)
        }
        var c, h, u = this.morphNormals[t];
        for(a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, n = this.faces.length; i < n; i++) r = this.faces[i], c = u.faceNormals[i], h = u.vertexNormals[i], c.copy(r.normal), h.a.copy(r.vertexNormals[0]), h.b.copy(r.vertexNormals[1]), h.c.copy(r.vertexNormals[2])
      }
      for(i = 0, n = this.faces.length; i < n; i++)(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new e), this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
      null === this.boundingSphere && (this.boundingSphere = new p), this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(t, e, i) {
      if(t && t.isGeometry) {
        var n, r = this.vertices.length,
          a = this.vertices,
          s = t.vertices,
          o = this.faces,
          c = t.faces,
          h = this.faceVertexUvs[0],
          u = t.faceVertexUvs[0],
          l = this.colors,
          d = t.colors;
        void 0 === i && (i = 0), void 0 !== e && (n = (new I).getNormalMatrix(e));
        for(var p = 0, f = s.length; p < f; p++) {
          var g = s[p].clone();
          void 0 !== e && g.applyMatrix4(e), a.push(g)
        }
        for(p = 0, f = d.length; p < f; p++) l.push(d[p].clone());
        for(p = 0, f = c.length; p < f; p++) {
          var m, M, v, y = c[p],
            A = y.vertexNormals,
            x = y.vertexColors;
          (m = new P(y.a + r, y.b + r, y.c + r)).normal.copy(y.normal), void 0 !== n && m.normal.applyMatrix3(n).normalize();
          for(var w = 0, N = A.length; w < N; w++) M = A[w].clone(), void 0 !== n && M.applyMatrix3(n).normalize(), m.vertexNormals.push(M);
          m.color.copy(y.color);
          for(w = 0, N = x.length; w < N; w++) v = x[w], m.vertexColors.push(v.clone());
          m.materialIndex = y.materialIndex + i, o.push(m)
        }
        for(p = 0, f = u.length; p < f; p++) {
          var D = u[p],
            T = [];
          if(void 0 !== D) {
            for(w = 0, N = D.length; w < N; w++) T.push(D[w].clone());
            h.push(T)
          }
        }
      }
    },
    mergeMesh: function(t) {
      t && t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix))
    },
    mergeVertices: function() {
      var t, e, i, n, r, a, s, o, c = {},
        h = [],
        u = [],
        l = Math.pow(10, 4);
      for(i = 0, n = this.vertices.length; i < n; i++) t = this.vertices[i], void 0 === c[e = Math.round(t.x * l) + "_" + Math.round(t.y * l) + "_" + Math.round(t.z * l)] ? (c[e] = i, h.push(this.vertices[i]), u[i] = h.length - 1) : u[i] = u[c[e]];
      var d = [];
      for(i = 0, n = this.faces.length; i < n; i++) {
        (r = this.faces[i]).a = u[r.a], r.b = u[r.b], r.c = u[r.c], a = [r.a, r.b, r.c];
        for(var p = 0; p < 3; p++)
          if(a[p] === a[(p + 1) % 3]) {
            d.push(i);
            break
          }
      }
      for(i = d.length - 1; 0 <= i; i--) {
        var f = d[i];
        for(this.faces.splice(f, 1), s = 0, o = this.faceVertexUvs.length; s < o; s++) this.faceVertexUvs[s].splice(f, 1)
      }
      var g = this.vertices.length - h.length;
      return this.vertices = h, g
    },
    setFromPoints: function(t) {
      this.vertices = [];
      for(var e = 0, i = t.length; e < i; e++) {
        var n = t[e];
        this.vertices.push(new wt(n.x, n.y, n.z || 0))
      }
      return this
    },
    sortFacesByMaterialIndex: function() {
      for(var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
      t.sort(function(t, e) {
        return t.materialIndex - e.materialIndex
      });
      var n, r, a = this.faceVertexUvs[0],
        s = this.faceVertexUvs[1];
      a && a.length === e && (n = []), s && s.length === e && (r = []);
      for(i = 0; i < e; i++) {
        var o = t[i]._id;
        n && n.push(a[o]), r && r.push(s[o])
      }
      n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
    },
    toJSON: function() {
      function t(t, e, i) {
        return i ? t | 1 << e : t & ~(1 << e)
      }

      function e(t) {
        var e = t.x.toString() + t.y.toString() + t.z.toString();
        return void 0 !== d[e] || (d[e] = l.length / 3, l.push(t.x, t.y, t.z)), d[e]
      }

      function i(t) {
        var e = t.r.toString() + t.g.toString() + t.b.toString();
        return void 0 !== f[e] || (f[e] = p.length, p.push(t.getHex())), f[e]
      }

      function n(t) {
        var e = t.x.toString() + t.y.toString();
        return void 0 !== m[e] || (m[e] = g.length / 2, g.push(t.x, t.y)), m[e]
      }
      var r = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };
      if(r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
        var a = this.parameters;
        for(var s in a) void 0 !== a[s] && (r[s] = a[s]);
        return r
      }
      for(var o = [], c = 0; c < this.vertices.length; c++) {
        var h = this.vertices[c];
        o.push(h.x, h.y, h.z)
      }
      var u = [],
        l = [],
        d = {},
        p = [],
        f = {},
        g = [],
        m = {};
      for(c = 0; c < this.faces.length; c++) {
        var M = this.faces[c],
          v = void 0 !== this.faceVertexUvs[0][c],
          y = 0 < M.normal.length(),
          A = 0 < M.vertexNormals.length,
          x = 1 !== M.color.r || 1 !== M.color.g || 1 !== M.color.b,
          w = 0 < M.vertexColors.length,
          N = 0;
        if(N = t(N = t(N = t(N = t(N = t(N = t(N = t(N = t(N, 0, 0), 1, !0), 2, !1), 3, v), 4, y), 5, A), 6, x), 7, w), u.push(N), u.push(M.a, M.b, M.c), u.push(M.materialIndex), v) {
          var D = this.faceVertexUvs[0][c];
          u.push(n(D[0]), n(D[1]), n(D[2]))
        }
        if(y && u.push(e(M.normal)), A) {
          var T = M.vertexNormals;
          u.push(e(T[0]), e(T[1]), e(T[2]))
        }
        if(x && u.push(i(M.color)), w) {
          var L = M.vertexColors;
          u.push(i(L[0]), i(L[1]), i(L[2]))
        }
      }
      return r.data = {}, r.data.vertices = o, r.data.normals = l, 0 < p.length && (r.data.colors = p), 0 < g.length && (r.data.uvs = [g]), r.data.faces = u, r
    },
    clone: function() {
      return (new y).copy(this)
    },
    copy: function(t) {
      var e, i, n, r, a, s;
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
        []
      ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
      var o = t.vertices;
      for(e = 0, i = o.length; e < i; e++) this.vertices.push(o[e].clone());
      var c = t.colors;
      for(e = 0, i = c.length; e < i; e++) this.colors.push(c[e].clone());
      var h = t.faces;
      for(e = 0, i = h.length; e < i; e++) this.faces.push(h[e].clone());
      for(e = 0, i = t.faceVertexUvs.length; e < i; e++) {
        var u = t.faceVertexUvs[e];
        for(void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = u.length; n < r; n++) {
          var l = u[n],
            d = [];
          for(a = 0, s = l.length; a < s; a++) {
            var p = l[a];
            d.push(p.clone())
          }
          this.faceVertexUvs[e].push(d)
        }
      }
      var f = t.morphTargets;
      for(e = 0, i = f.length; e < i; e++) {
        var g = {};
        if(g.name = f[e].name, void 0 !== f[e].vertices)
          for(g.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) g.vertices.push(f[e].vertices[n].clone());
        if(void 0 !== f[e].normals)
          for(g.normals = [], n = 0, r = f[e].normals.length; n < r; n++) g.normals.push(f[e].normals[n].clone());
        this.morphTargets.push(g)
      }
      var m = t.morphNormals;
      for(e = 0, i = m.length; e < i; e++) {
        var M = {};
        if(void 0 !== m[e].vertexNormals)
          for(M.vertexNormals = [], n = 0, r = m[e].vertexNormals.length; n < r; n++) {
            var v = m[e].vertexNormals[n],
              y = {};
            y.a = v.a.clone(), y.b = v.b.clone(), y.c = v.c.clone(), M.vertexNormals.push(y)
          }
        if(void 0 !== m[e].faceNormals)
          for(M.faceNormals = [], n = 0, r = m[e].faceNormals.length; n < r; n++) M.faceNormals.push(m[e].faceNormals[n].clone());
        this.morphNormals.push(M)
      }
      var A = t.skinWeights;
      for(e = 0, i = A.length; e < i; e++) this.skinWeights.push(A[e].clone());
      var x = t.skinIndices;
      for(e = 0, i = x.length; e < i; e++) this.skinIndices.push(x[e].clone());
      var w = t.lineDistances;
      for(e = 0, i = w.length; e < i; e++) this.lineDistances.push(w[e]);
      var N = t.boundingBox;
      null !== N && (this.boundingBox = N.clone());
      var D = t.boundingSphere;
      return null !== D && (this.boundingSphere = D.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), Object.defineProperty(x.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(x.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function() {},
    setArray: function(t) {
      if(Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
    },
    setDynamic: function(t) {
      return this.dynamic = t, this
    },
    copy: function(t) {
      return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
    },
    copyAt: function(t, e, i) {
      t *= this.itemSize, i *= e.itemSize;
      for(var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
      return this
    },
    copyArray: function(t) {
      return this.array.set(t), this
    },
    copyColorsArray: function(t) {
      for(var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (a = new O), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
      }
      return this
    },
    copyVector2sArray: function(t) {
      for(var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (a = new tt), e[i++] = a.x, e[i++] = a.y
      }
      return this
    },
    copyVector3sArray: function(t) {
      for(var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (a = new wt), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
      }
      return this
    },
    copyVector4sArray: function(t) {
      for(var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (a = new Nt), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w
      }
      return this
    },
    set: function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    getX: function(t) {
      return this.array[t * this.itemSize]
    },
    setX: function(t, e) {
      return this.array[t * this.itemSize] = e, this
    },
    getY: function(t) {
      return this.array[t * this.itemSize + 1]
    },
    setY: function(t, e) {
      return this.array[t * this.itemSize + 1] = e, this
    },
    getZ: function(t) {
      return this.array[t * this.itemSize + 2]
    },
    setZ: function(t, e) {
      return this.array[t * this.itemSize + 2] = e, this
    },
    getW: function(t) {
      return this.array[t * this.itemSize + 3]
    },
    setW: function(t, e) {
      return this.array[t * this.itemSize + 3] = e, this
    },
    setXY: function(t, e, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
    },
    onUpload: function(t) {
      return this.onUploadCallback = t, this
    },
    clone: function() {
      return new this.constructor(this.array, this.itemSize).copy(this)
    }
  }), (c.prototype = Object.create(x.prototype)).constructor = c, (h.prototype = Object.create(x.prototype)).constructor = h, (l.prototype = Object.create(x.prototype)).constructor = l, (M.prototype = Object.create(x.prototype)).constructor = M, (v.prototype = Object.create(x.prototype)).constructor = v, (A.prototype = Object.create(x.prototype)).constructor = A, (w.prototype = Object.create(x.prototype)).constructor = w, (U.prototype = Object.create(x.prototype)).constructor = U, (D.prototype = Object.create(x.prototype)).constructor = D, Object.assign(T.prototype, {
    computeGroups: function(t) {
      for(var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
        var s = r[a];
        s.materialIndex !== n && (n = s.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = {
          start: 3 * a,
          materialIndex: n
        })
      }
      void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
    },
    fromGeometry: function(t) {
      var e, i = t.faces,
        n = t.vertices,
        r = t.faceVertexUvs,
        a = r[0] && 0 < r[0].length,
        s = r[1] && 0 < r[1].length,
        o = t.morphTargets,
        c = o.length;
      if(0 < c) {
        e = [];
        for(var h = 0; h < c; h++) e[h] = [];
        this.morphTargets.position = e
      }
      var u, l = t.morphNormals,
        d = l.length;
      if(0 < d) {
        u = [];
        for(h = 0; h < d; h++) u[h] = [];
        this.morphTargets.normal = u
      }
      var p = t.skinIndices,
        f = t.skinWeights,
        g = p.length === n.length,
        m = f.length === n.length;
      i.length;
      for(h = 0; h < i.length; h++) {
        var M = i[h];
        this.vertices.push(n[M.a], n[M.b], n[M.c]);
        var v = M.vertexNormals;
        if(3 === v.length) this.normals.push(v[0], v[1], v[2]);
        else {
          var y = M.normal;
          this.normals.push(y, y, y)
        }
        var A, x = M.vertexColors;
        if(3 === x.length) this.colors.push(x[0], x[1], x[2]);
        else {
          var w = M.color;
          this.colors.push(w, w, w)
        }
        if(!0 === a) void 0 !== (A = r[0][h]) ? this.uvs.push(A[0], A[1], A[2]) : this.uvs.push(new tt, new tt, new tt);
        if(!0 === s) void 0 !== (A = r[1][h]) ? this.uvs2.push(A[0], A[1], A[2]) : this.uvs2.push(new tt, new tt, new tt);
        for(var N = 0; N < c; N++) {
          var D = o[N].vertices;
          e[N].push(D[M.a], D[M.b], D[M.c])
        }
        for(N = 0; N < d; N++) {
          var T = l[N].vertexNormals[h];
          u[N].push(T.a, T.b, T.c)
        }
        g && this.skinIndices.push(p[M.a], p[M.b], p[M.c]), m && this.skinWeights.push(f[M.a], f[M.b], f[M.c])
      }
      return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
    }
  });
  var Hc, Xc, Zc, qc, Jc, Kc, $c, th, eh, ih, nh = 1;
  B.prototype = Object.assign(Object.create(t.prototype), {
    constructor: B,
    isBufferGeometry: !0,
    getIndex: function() {
      return this.index
    },
    setIndex: function(t) {
      Array.isArray(t) ? this.index = new(65535 < L(t) ? w : v)(t, 1) : this.index = t
    },
    addAttribute: function(t, e) {
      return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? ("index" === t ? this.setIndex(e) : this.attributes[t] = e, this) : this.addAttribute(t, new x(e, arguments[2]))
    },
    getAttribute: function(t) {
      return this.attributes[t]
    },
    removeAttribute: function(t) {
      return delete this.attributes[t], this
    },
    addGroup: function(t, e, i) {
      this.groups.push({
        start: t,
        count: e,
        materialIndex: void 0 !== i ? i : 0
      })
    },
    clearGroups: function() {
      this.groups = []
    },
    setDrawRange: function(t, e) {
      this.drawRange.start = t, this.drawRange.count = e
    },
    applyMatrix: function(t) {
      var e = this.attributes.position;
      void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
      var i = this.attributes.normal;
      void 0 !== i && ((new I).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0);
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
    },
    rotateX: (ih = new At, function(t) {
      return ih.makeRotationX(t), this.applyMatrix(ih), this
    }),
    rotateY: (eh = new At, function(t) {
      return eh.makeRotationY(t), this.applyMatrix(eh), this
    }),
    rotateZ: (th = new At, function(t) {
      return th.makeRotationZ(t), this.applyMatrix(th), this
    }),
    translate: ($c = new At, function(t, e, i) {
      return $c.makeTranslation(t, e, i), this.applyMatrix($c), this
    }),
    scale: (Kc = new At, function(t, e, i) {
      return Kc.makeScale(t, e, i), this.applyMatrix(Kc), this
    }),
    lookAt: (Jc = new g, function(t) {
      Jc.lookAt(t), Jc.updateMatrix(), this.applyMatrix(Jc.matrix)
    }),
    center: (qc = new wt, function() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(qc).negate(), this.translate(qc.x, qc.y, qc.z), this
    }),
    setFromObject: function(t) {
      var e = t.geometry;
      if(t.isPoints || t.isLine) {
        var i = new U(3 * e.vertices.length, 3),
          n = new U(3 * e.colors.length, 3);
        if(this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
          var r = new U(e.lineDistances.length, 1);
          this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
        }
        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
      } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
      return this
    },
    setFromPoints: function(t) {
      for(var e = [], i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        e.push(r.x, r.y, r.z || 0)
      }
      return this.addAttribute("position", new U(e, 3)), this
    },
    updateFromObject: function(t) {
      var e, i = t.geometry;
      if(t.isMesh) {
        var n = i.__directGeometry;
        if(!0 === i.elementsNeedUpdate && (n = void 0, i.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(i);
        n.verticesNeedUpdate = i.verticesNeedUpdate, n.normalsNeedUpdate = i.normalsNeedUpdate, n.colorsNeedUpdate = i.colorsNeedUpdate, n.uvsNeedUpdate = i.uvsNeedUpdate, n.groupsNeedUpdate = i.groupsNeedUpdate, i.verticesNeedUpdate = !1, i.normalsNeedUpdate = !1, i.colorsNeedUpdate = !1, i.uvsNeedUpdate = !1, i.groupsNeedUpdate = !1, i = n
      }
      return !0 === i.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(i.vertices), e.needsUpdate = !0), i.verticesNeedUpdate = !1), !0 === i.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(i.normals), e.needsUpdate = !0), i.normalsNeedUpdate = !1), !0 === i.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(i.colors), e.needsUpdate = !0), i.colorsNeedUpdate = !1), i.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(i.uvs), e.needsUpdate = !0), i.uvsNeedUpdate = !1), i.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(i.lineDistances), e.needsUpdate = !0), i.lineDistancesNeedUpdate = !1), i.groupsNeedUpdate && (i.computeGroups(t.geometry), this.groups = i.groups, i.groupsNeedUpdate = !1), this
    },
    fromGeometry: function(t) {
      return t.__directGeometry = (new T).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
    },
    fromDirectGeometry: function(t) {
      var e = new Float32Array(3 * t.vertices.length);
      if(this.addAttribute("position", new x(e, 3).copyVector3sArray(t.vertices)), 0 < t.normals.length) {
        var i = new Float32Array(3 * t.normals.length);
        this.addAttribute("normal", new x(i, 3).copyVector3sArray(t.normals))
      }
      if(0 < t.colors.length) {
        var n = new Float32Array(3 * t.colors.length);
        this.addAttribute("color", new x(n, 3).copyColorsArray(t.colors))
      }
      if(0 < t.uvs.length) {
        var r = new Float32Array(2 * t.uvs.length);
        this.addAttribute("uv", new x(r, 2).copyVector2sArray(t.uvs))
      }
      if(0 < t.uvs2.length) {
        var a = new Float32Array(2 * t.uvs2.length);
        this.addAttribute("uv2", new x(a, 2).copyVector2sArray(t.uvs2))
      }
      for(var s in this.groups = t.groups, t.morphTargets) {
        for(var o = [], c = t.morphTargets[s], h = 0, u = c.length; h < u; h++) {
          var l = c[h],
            d = new U(3 * l.length, 3);
          o.push(d.copyVector3sArray(l))
        }
        this.morphAttributes[s] = o
      }
      if(0 < t.skinIndices.length) {
        var p = new U(4 * t.skinIndices.length, 4);
        this.addAttribute("skinIndex", p.copyVector4sArray(t.skinIndices))
      }
      if(0 < t.skinWeights.length) {
        var f = new U(4 * t.skinWeights.length, 4);
        this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
      }
      return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new e);
      var t = this.attributes.position;
      void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)
    },
    computeBoundingSphere: (Xc = new e, Zc = new wt, function() {
      null === this.boundingSphere && (this.boundingSphere = new p);
      var t = this.attributes.position;
      if(t) {
        var e = this.boundingSphere.center;
        Xc.setFromBufferAttribute(t), Xc.getCenter(e);
        for(var i = 0, n = 0, r = t.count; n < r; n++) Zc.x = t.getX(n), Zc.y = t.getY(n), Zc.z = t.getZ(n), i = Math.max(i, e.distanceToSquared(Zc));
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius)
      }
    }),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
      var t = this.index,
        e = this.attributes,
        i = this.groups;
      if(e.position) {
        var n = e.position.array;
        if(void 0 === e.normal) this.addAttribute("normal", new x(new Float32Array(n.length), 3));
        else
          for(var r = e.normal.array, a = 0, s = r.length; a < s; a++) r[a] = 0;
        var o, c, h, u = e.normal.array,
          l = new wt,
          d = new wt,
          p = new wt,
          f = new wt,
          g = new wt;
        if(t) {
          var m = t.array;
          0 === i.length && this.addGroup(0, m.length);
          for(var M = 0, v = i.length; M < v; ++M) {
            var y = i[M],
              A = y.start;
            for(a = A, s = A + y.count; a < s; a += 3) o = 3 * m[a + 0], c = 3 * m[a + 1], h = 3 * m[a + 2], l.fromArray(n, o), d.fromArray(n, c), p.fromArray(n, h), f.subVectors(p, d), g.subVectors(l, d), f.cross(g), u[o] += f.x, u[1 + o] += f.y, u[2 + o] += f.z, u[c] += f.x, u[1 + c] += f.y, u[2 + c] += f.z, u[h] += f.x, u[1 + h] += f.y, u[2 + h] += f.z
          }
        } else
          for(a = 0, s = n.length; a < s; a += 9) l.fromArray(n, a), d.fromArray(n, a + 3), p.fromArray(n, a + 6), f.subVectors(p, d), g.subVectors(l, d), f.cross(g), u[a] = f.x, u[a + 1] = f.y, u[a + 2] = f.z, u[a + 3] = f.x, u[a + 4] = f.y, u[a + 5] = f.z, u[a + 6] = f.x, u[a + 7] = f.y, u[a + 8] = f.z;
        this.normalizeNormals(), e.normal.needsUpdate = !0
      }
    },
    merge: function(t, e) {
      if(t && t.isBufferGeometry) {
        void 0 === e && (e = 0);
        var i = this.attributes;
        for(var n in i)
          if(void 0 !== t.attributes[n])
            for(var r = i[n].array, a = t.attributes[n], s = a.array, o = 0, c = a.itemSize * e; o < s.length; o++, c++) r[c] = s[o];
        return this
      }
    },
    normalizeNormals: (Hc = new wt, function() {
      for(var t = this.attributes.normal, e = 0, i = t.count; e < i; e++) Hc.x = t.getX(e), Hc.y = t.getY(e), Hc.z = t.getZ(e), Hc.normalize(), t.setXYZ(e, Hc.x, Hc.y, Hc.z)
    }),
    toNonIndexed: function() {
      if(null === this.index) return this;
      var t = new B,
        e = this.index.array,
        i = this.attributes;
      for(var n in i) {
        for(var r = i[n], a = r.array, s = r.itemSize, o = new a.constructor(e.length * s), c = 0, h = 0, u = 0, l = e.length; u < l; u++) {
          c = e[u] * s;
          for(var d = 0; d < s; d++) o[h++] = a[c++]
        }
        t.addAttribute(n, new x(o, s))
      }
      var p = this.groups;
      for(u = 0, l = p.length; u < l; u++) {
        var f = p[u];
        t.addGroup(f.start, f.count, f.materialIndex)
      }
      return t
    },
    toJSON: function() {
      var t = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if(t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), 0 < Object.keys(this.userData).length && (t.userData = this.userData), void 0 !== this.parameters) {
        var e = this.parameters;
        for(var i in e) void 0 !== e[i] && (t[i] = e[i]);
        return t
      }
      t.data = {
        attributes: {}
      };
      var n = this.index;
      if(null !== n) {
        var r = Array.prototype.slice.call(n.array);
        t.data.index = {
          type: n.array.constructor.name,
          array: r
        }
      }
      var a = this.attributes;
      for(var i in a) {
        var s = a[i];
        r = Array.prototype.slice.call(s.array);
        t.data.attributes[i] = {
          itemSize: s.itemSize,
          type: s.array.constructor.name,
          array: r,
          normalized: s.normalized
        }
      }
      var o = this.groups;
      0 < o.length && (t.data.groups = JSON.parse(JSON.stringify(o)));
      var c = this.boundingSphere;
      return null !== c && (t.data.boundingSphere = {
        center: c.center.toArray(),
        radius: c.radius
      }), t
    },
    clone: function() {
      return (new B).copy(this)
    },
    copy: function(t) {
      var e, i, n;
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
      var r = t.index;
      null !== r && this.setIndex(r.clone());
      var a = t.attributes;
      for(e in a) {
        var s = a[e];
        this.addAttribute(e, s.clone())
      }
      var o = t.morphAttributes;
      for(e in o) {
        var c = [],
          h = o[e];
        for(i = 0, n = h.length; i < n; i++) c.push(h[i].clone());
        this.morphAttributes[e] = c
      }
      var u = t.groups;
      for(i = 0, n = u.length; i < n; i++) {
        var l = u[i];
        this.addGroup(l.start, l.count, l.materialIndex)
      }
      var d = t.boundingBox;
      null !== d && (this.boundingBox = d.clone());
      var p = t.boundingSphere;
      return null !== p && (this.boundingSphere = p.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), (_.prototype = Object.create(y.prototype)).constructor = _, (E.prototype = Object.create(B.prototype)).constructor = E, (b.prototype = Object.create(y.prototype)).constructor = b, (S.prototype = Object.create(B.prototype)).constructor = S;
  var rh, ah, sh, oh, ch, hh, uh, lh, dh, ph, fh, gh, mh, Mh, vh, yh, Ah, xh, wh, Nh, Dh, Th, Lh, Eh, Ih, _h, bh, Sh, jh, Ch, Oh, zh, Ph, Uh, Bh, kh, Rh, Fh, Qh, Gh = 0;

  function Yh(t, e, i, n, r, a, s) {
    return Q.getBarycoord(t, e, i, n, Rh), r.multiplyScalar(Rh.x), a.multiplyScalar(Rh.y), s.multiplyScalar(Rh.z), r.add(a).add(s), r.clone()
  }

  function Vh(t, e, i, n, r, a, s, o) {
    if(null === (e.side === Ea ? n.intersectTriangle(s, a, r, !0, o) : n.intersectTriangle(r, a, s, e.side !== Ia, o))) return null;
    Qh.copy(o), Qh.applyMatrix4(t.matrixWorld);
    var c = i.ray.origin.distanceTo(Qh);
    return c < i.near || c > i.far ? null : {
      distance: c,
      point: Qh.clone(),
      object: t
    }
  }

  function Wh(t, e, i, n, r, a, s, o) {
    Sh.fromBufferAttribute(n, a), jh.fromBufferAttribute(n, s), Ch.fromBufferAttribute(n, o);
    var c = Vh(t, t.material, e, i, Sh, jh, Ch, Fh);
    if(c) {
      r && (Uh.fromBufferAttribute(r, a), Bh.fromBufferAttribute(r, s), kh.fromBufferAttribute(r, o), c.uv = Yh(Fh, Sh, jh, Ch, Uh, Bh, kh));
      var h = new P(a, s, o);
      Q.getNormal(Sh, jh, Ch, h.normal), c.face = h
    }
    return c
  }
  j.prototype = Object.assign(Object.create(t.prototype), {
    constructor: j,
    isMaterial: !0,
    onBeforeCompile: function() {},
    setValues: function(t) {
      if(void 0 !== t)
        for(var e in t) {
          var i = t[e];
          if(void 0 !== i)
            if("shading" !== e) {
              var n = this[e];
              void 0 !== n && (n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i)
            } else this.flatShading = 1 === i
        }
    },
    toJSON: function(t) {
      function e(t) {
        var e = [];
        for(var i in t) {
          var n = t[i];
          delete n.metadata, e.push(n)
        }
        return e
      }
      var i = void 0 === t || "string" == typeof t;
      i && (t = {
        textures: {},
        images: {}
      });
      var n = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      if(n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Sa && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== La && (n.side = this.side), this.vertexColors !== _a && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation = this.rotation), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), 0 < this.alphaTest && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), i) {
        var r = e(t.textures),
          a = e(t.images);
        0 < r.length && (n.textures = r), 0 < a.length && (n.images = a)
      }
      return n
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
      var e = t.clippingPlanes,
        i = null;
      if(null !== e) {
        var n = e.length;
        i = new Array(n);
        for(var r = 0; r !== n; ++r) i[r] = e[r].clone()
      }
      return this.clippingPlanes = i, this.shadowSide = t.shadowSide, this
    },
    dispose: function() {
      this.dispatchEvent({
        type: "dispose"
      })
    }
  }), ((C.prototype = Object.create(j.prototype)).constructor = C).prototype.isMeshBasicMaterial = !0, C.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
  }, ((k.prototype = Object.create(j.prototype)).constructor = k).prototype.isShaderMaterial = !0, k.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = pc.clone(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
  }, k.prototype.toJSON = function(t) {
    var e = j.prototype.toJSON.call(this, t);
    return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
  }, Object.assign(R.prototype, {
    set: function(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this
    },
    at: function(t, e) {
      return void 0 === e && (e = new wt), e.copy(this.direction).multiplyScalar(t).add(this.origin)
    },
    lookAt: function(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this
    },
    recast: (fh = new wt, function(t) {
      return this.origin.copy(this.at(t, fh)), this
    }),
    closestPointToPoint: function(t, e) {
      void 0 === e && (e = new wt), e.subVectors(t, this.origin);
      var i = e.dot(this.direction);
      return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
    },
    distanceToPoint: function(t) {
      return Math.sqrt(this.distanceSqToPoint(t))
    },
    distanceSqToPoint: (ph = new wt, function(t) {
      var e = ph.subVectors(t, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t) : (ph.copy(this.direction).multiplyScalar(e).add(this.origin), ph.distanceToSquared(t))
    }),
    distanceSqToSegment: (uh = new wt, lh = new wt, dh = new wt, function(t, e, i, n) {
      uh.copy(t).add(e).multiplyScalar(.5), lh.copy(e).sub(t).normalize(), dh.copy(this.origin).sub(uh);
      var r, a, s, o, c = .5 * t.distanceTo(e),
        h = -this.direction.dot(lh),
        u = dh.dot(this.direction),
        l = -dh.dot(lh),
        d = dh.lengthSq(),
        p = Math.abs(1 - h * h);
      if(0 < p)
        if(a = h * u - l, o = c * p, 0 <= (r = h * l - u))
          if(-o <= a)
            if(a <= o) {
              var f = 1 / p;
              s = (r *= f) * (r + h * (a *= f) + 2 * u) + a * (h * r + a + 2 * l) + d
            } else a = c, s = -(r = Math.max(0, -(h * a + u))) * r + a * (a + 2 * l) + d;
      else a = -c, s = -(r = Math.max(0, -(h * a + u))) * r + a * (a + 2 * l) + d;
      else s = a <= -o ? -(r = Math.max(0, -(-h * c + u))) * r + (a = 0 < r ? -c : Math.min(Math.max(-c, -l), c)) * (a + 2 * l) + d : a <= o ? (r = 0, (a = Math.min(Math.max(-c, -l), c)) * (a + 2 * l) + d) : -(r = Math.max(0, -(h * c + u))) * r + (a = 0 < r ? c : Math.min(Math.max(-c, -l), c)) * (a + 2 * l) + d;
      else a = 0 < h ? -c : c, s = -(r = Math.max(0, -(h * a + u))) * r + a * (a + 2 * l) + d;
      return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(lh).multiplyScalar(a).add(uh), s
    }),
    intersectSphere: (hh = new wt, function(t, e) {
      hh.subVectors(t.center, this.origin);
      var i = hh.dot(this.direction),
        n = hh.dot(hh) - i * i,
        r = t.radius * t.radius;
      if(r < n) return null;
      var a = Math.sqrt(r - n),
        s = i - a,
        o = i + a;
      return s < 0 && o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e)
    }),
    intersectsSphere: function(t) {
      return this.distanceToPoint(t.center) <= t.radius
    },
    distanceToPlane: function(t) {
      var e = t.normal.dot(this.direction);
      if(0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
      var i = -(this.origin.dot(t.normal) + t.constant) / e;
      return 0 <= i ? i : null
    },
    intersectPlane: function(t, e) {
      var i = this.distanceToPlane(t);
      return null === i ? null : this.at(i, e)
    },
    intersectsPlane: function(t) {
      var e = t.distanceToPoint(this.origin);
      return 0 === e || t.normal.dot(this.direction) * e < 0
    },
    intersectBox: function(t, e) {
      var i, n, r, a, s, o, c = 1 / this.direction.x,
        h = 1 / this.direction.y,
        u = 1 / this.direction.z,
        l = this.origin;
      return n = 0 <= c ? (i = (t.min.x - l.x) * c, (t.max.x - l.x) * c) : (i = (t.max.x - l.x) * c, (t.min.x - l.x) * c), (a = 0 <= h ? (r = (t.min.y - l.y) * h, (t.max.y - l.y) * h) : (r = (t.max.y - l.y) * h, (t.min.y - l.y) * h)) < i || n < r ? null : ((i < r || i != i) && (i = r), (a < n || n != n) && (n = a), (o = 0 <= u ? (s = (t.min.z - l.z) * u, (t.max.z - l.z) * u) : (s = (t.max.z - l.z) * u, (t.min.z - l.z) * u)) < i || n < s ? null : ((i < s || i != i) && (i = s), (o < n || n != n) && (n = o), n < 0 ? null : this.at(0 <= i ? i : n, e)))
    },
    intersectsBox: (ch = new wt, function(t) {
      return null !== this.intersectBox(t, ch)
    }),
    intersectTriangle: (rh = new wt, ah = new wt, sh = new wt, oh = new wt, function(t, e, i, n, r) {
      ah.subVectors(e, t), sh.subVectors(i, t), oh.crossVectors(ah, sh);
      var a, s = this.direction.dot(oh);
      if(0 < s) {
        if(n) return null;
        a = 1
      } else {
        if(!(s < 0)) return null;
        a = -1, s = -s
      }
      rh.subVectors(this.origin, t);
      var o = a * this.direction.dot(sh.crossVectors(rh, sh));
      if(o < 0) return null;
      var c = a * this.direction.dot(ah.cross(rh));
      if(c < 0) return null;
      if(s < o + c) return null;
      var h = -a * rh.dot(oh);
      return h < 0 ? null : this.at(h / s, r)
    }),
    applyMatrix4: function(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    },
    equals: function(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
  }), Object.assign(F.prototype, {
    set: function(t, e) {
      return this.start.copy(t), this.end.copy(e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.start.copy(t.start), this.end.copy(t.end), this
    },
    getCenter: function(t) {
      return void 0 === t && (t = new wt), t.addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(t) {
      return void 0 === t && (t = new wt), t.subVectors(this.end, this.start)
    },
    distanceSq: function() {
      return this.start.distanceToSquared(this.end)
    },
    distance: function() {
      return this.start.distanceTo(this.end)
    },
    at: function(t, e) {
      return void 0 === e && (e = new wt), this.delta(e).multiplyScalar(t).add(this.start)
    },
    closestPointToPointParameter: (gh = new wt, mh = new wt, function(t, e) {
      gh.subVectors(t, this.start), mh.subVectors(this.end, this.start);
      var i = mh.dot(mh),
        n = mh.dot(gh) / i;
      return e && (n = So.clamp(n, 0, 1)), n
    }),
    closestPointToPoint: function(t, e, i) {
      var n = this.closestPointToPointParameter(t, e);
      return void 0 === i && (i = new wt), this.delta(i).multiplyScalar(n).add(this.start)
    },
    applyMatrix4: function(t) {
      return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
    },
    equals: function(t) {
      return t.start.equals(this.start) && t.end.equals(this.end)
    }
  }), Object.assign(Q, {
    getNormal: (xh = new wt, function(t, e, i, n) {
      void 0 === n && (n = new wt), n.subVectors(i, e), xh.subVectors(t, e), n.cross(xh);
      var r = n.lengthSq();
      return 0 < r ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
    }),
    getBarycoord: (vh = new wt, yh = new wt, Ah = new wt, function(t, e, i, n, r) {
      vh.subVectors(n, e), yh.subVectors(i, e), Ah.subVectors(t, e);
      var a = vh.dot(vh),
        s = vh.dot(yh),
        o = vh.dot(Ah),
        c = yh.dot(yh),
        h = yh.dot(Ah),
        u = a * c - s * s;
      if(void 0 === r && (r = new wt), 0 == u) return r.set(-2, -1, -1);
      var l = 1 / u,
        d = (c * o - s * h) * l,
        p = (a * h - s * o) * l;
      return r.set(1 - d - p, p, d)
    }),
    containsPoint: (Mh = new wt, function(t, e, i, n) {
      return Q.getBarycoord(t, e, i, n, Mh), 0 <= Mh.x && 0 <= Mh.y && Mh.x + Mh.y <= 1
    })
  }), Object.assign(Q.prototype, {
    set: function(t, e, i) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
    },
    setFromPointsAndIndices: function(t, e, i, n) {
      return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
    },
    getArea: (Lh = new wt, Eh = new wt, function() {
      return Lh.subVectors(this.c, this.b), Eh.subVectors(this.a, this.b), .5 * Lh.cross(Eh).length()
    }),
    getMidpoint: function(t) {
      return void 0 === t && (t = new wt), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    getNormal: function(t) {
      return Q.getNormal(this.a, this.b, this.c, t)
    },
    getPlane: function(t) {
      return void 0 === t && (t = new wt), t.setFromCoplanarPoints(this.a, this.b, this.c)
    },
    getBarycoord: function(t, e) {
      return Q.getBarycoord(t, this.a, this.b, this.c, e)
    },
    containsPoint: function(t) {
      return Q.containsPoint(t, this.a, this.b, this.c)
    },
    intersectsBox: function(t) {
      return t.intersectsTriangle(this)
    },
    closestPointToPoint: (wh = new s, Nh = [new F, new F, new F], Dh = new wt, Th = new wt, function(t, e) {
      void 0 === e && (e = new wt);
      var i = 1 / 0;
      if(wh.setFromCoplanarPoints(this.a, this.b, this.c), wh.projectPoint(t, Dh), !0 === this.containsPoint(Dh)) e.copy(Dh);
      else {
        Nh[0].set(this.a, this.b), Nh[1].set(this.b, this.c), Nh[2].set(this.c, this.a);
        for(var n = 0; n < Nh.length; n++) {
          Nh[n].closestPointToPoint(Dh, !0, Th);
          var r = Dh.distanceToSquared(Th);
          r < i && (i = r, e.copy(Th))
        }
      }
      return e
    }),
    equals: function(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
  }), G.prototype = Object.assign(Object.create(g.prototype), {
    constructor: G,
    isMesh: !0,
    setDrawMode: function(t) {
      this.drawMode = t
    },
    copy: function(t) {
      return g.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
    },
    updateMorphTargets: function() {
      var t, e, i, n = this.geometry;
      if(n.isBufferGeometry) {
        var r = n.morphAttributes,
          a = Object.keys(r);
        if(0 < a.length) {
          var s = r[a[0]];
          if(void 0 !== s)
            for(this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) i = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
        }
      } else {
        var o = n.morphTargets;
        if(void 0 !== o && 0 < o.length)
          for(this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
      }
    },
    raycast: (Ih = new At, _h = new R, bh = new p, Sh = new wt, jh = new wt, Ch = new wt, Oh = new wt, zh = new wt, Ph = new wt, Uh = new tt, Bh = new tt, kh = new tt, Rh = new wt, Fh = new wt, Qh = new wt, function(t, e) {
      var i, n = this.geometry,
        r = this.material,
        a = this.matrixWorld;
      if(void 0 !== r && (null === n.boundingSphere && n.computeBoundingSphere(), bh.copy(n.boundingSphere), bh.applyMatrix4(a), !1 !== t.ray.intersectsSphere(bh) && (Ih.getInverse(a), _h.copy(t.ray).applyMatrix4(Ih), null === n.boundingBox || !1 !== _h.intersectsBox(n.boundingBox))))
        if(n.isBufferGeometry) {
          var s, o, c, h, u, l = n.index,
            d = n.attributes.position,
            p = n.attributes.uv;
          if(null !== l)
            for(h = 0, u = l.count; h < u; h += 3) s = l.getX(h), o = l.getX(h + 1), c = l.getX(h + 2), (i = Wh(this, t, _h, d, p, s, o, c)) && (i.faceIndex = Math.floor(h / 3), e.push(i));
          else if(void 0 !== d)
            for(h = 0, u = d.count; h < u; h += 3)(i = Wh(this, t, _h, d, p, s = h, o = h + 1, c = h + 2)) && (i.faceIndex = Math.floor(h / 3), e.push(i))
        } else if(n.isGeometry) {
        var f, g, m, M, v = Array.isArray(r),
          y = n.vertices,
          A = n.faces,
          x = n.faceVertexUvs[0];
        0 < x.length && (M = x);
        for(var w = 0, N = A.length; w < N; w++) {
          var D = A[w],
            T = v ? r[D.materialIndex] : r;
          if(void 0 !== T) {
            if(f = y[D.a], g = y[D.b], m = y[D.c], !0 === T.morphTargets) {
              var L = n.morphTargets,
                E = this.morphTargetInfluences;
              Sh.set(0, 0, 0), jh.set(0, 0, 0), Ch.set(0, 0, 0);
              for(var I = 0, _ = L.length; I < _; I++) {
                var b = E[I];
                if(0 !== b) {
                  var S = L[I].vertices;
                  Sh.addScaledVector(Oh.subVectors(S[D.a], f), b), jh.addScaledVector(zh.subVectors(S[D.b], g), b), Ch.addScaledVector(Ph.subVectors(S[D.c], m), b)
                }
              }
              Sh.add(f), jh.add(g), Ch.add(m), f = Sh, g = jh, m = Ch
            }
            if(i = Vh(this, T, t, _h, f, g, m, Fh)) {
              if(M && M[w]) {
                var j = M[w];
                Uh.copy(j[0]), Bh.copy(j[1]), kh.copy(j[2]), i.uv = Yh(Fh, f, g, m, Uh, Bh, kh)
              }
              i.face = D, i.faceIndex = w, e.push(i)
            }
          }
        }
      }
    }),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), ((V.prototype = Object.create(d.prototype)).constructor = V).prototype.isCubeTexture = !0, Object.defineProperty(V.prototype, "images", {
    get: function() {
      return this.image
    },
    set: function(t) {
      this.image = t
    }
  });
  var Hh = new d,
    Xh = new V,
    Zh = [],
    qh = [],
    Jh = new Float32Array(16),
    Kh = new Float32Array(9),
    $h = new Float32Array(4);
  Ft.prototype.updateCache = function(t) {
    var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), q(e, t)
  }, Qt.prototype.setValue = function(t, e) {
    for(var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
      var a = i[n];
      a.setValue(t, e[a.id])
    }
  };
  var tu = /([\w\d_]+)(\])?(\[|\.)?/g;
  Vt.prototype.setValue = function(t, e, i) {
    var n = this.map[e];
    void 0 !== n && n.setValue(t, i, this.renderer)
  }, Vt.prototype.setOptional = function(t, e, i) {
    var n = e[i];
    void 0 !== n && this.setValue(t, i, n)
  }, Vt.upload = function(t, e, i, n) {
    for(var r = 0, a = e.length; r !== a; ++r) {
      var s = e[r],
        o = i[s.id];
      !1 !== o.needsUpdate && s.setValue(t, o.value, n)
    }
  }, Vt.seqWithValue = function(t, e) {
    for(var i = [], n = 0, r = t.length; n !== r; ++n) {
      var a = t[n];
      a.id in e && i.push(a)
    }
    return i
  };
  var eu, iu, nu, ru, au, su, ou, cu, hu, uu, lu, du, pu, fu, gu, mu, Mu, vu, yu = 0,
    Au = 0;
  ((le.prototype = Object.create(j.prototype)).constructor = le).prototype.isMeshDepthMaterial = !0, le.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
  }, ((de.prototype = Object.create(j.prototype)).constructor = de).prototype.isMeshDistanceMaterial = !0, de.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
  }, ((fe.prototype = Object.create(d.prototype)).constructor = fe).prototype.isCanvasTexture = !0, ye.prototype = Object.assign(Object.create(o.prototype), {
    constructor: ye,
    isPerspectiveCamera: !0,
    copy: function(t, e) {
      return o.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
    },
    setFocalLength: function(t) {
      var e = .5 * this.getFilmHeight() / t;
      this.fov = 2 * So.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
    },
    getFocalLength: function() {
      var t = Math.tan(.5 * So.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / t
    },
    getEffectiveFOV: function() {
      return 2 * So.RAD2DEG * Math.atan(Math.tan(.5 * So.DEG2RAD * this.fov) / this.zoom)
    },
    getFilmWidth: function() {
      return this.filmGauge * Math.min(this.aspect, 1)
    },
    getFilmHeight: function() {
      return this.filmGauge / Math.max(this.aspect, 1)
    },
    setViewOffset: function(t, e, i, n, r, a) {
      this.aspect = t / e, null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
    },
    updateProjectionMatrix: function() {
      var t = this.near,
        e = t * Math.tan(.5 * So.DEG2RAD * this.fov) / this.zoom,
        i = 2 * e,
        n = this.aspect * i,
        r = -.5 * n,
        a = this.view;
      if(null !== this.view && this.view.enabled) {
        var s = a.fullWidth,
          o = a.fullHeight;
        r += a.offsetX * n / s, e -= a.offsetY * i / o, n *= a.width / s, i *= a.height / o
      }
      var c = this.filmOffset;
      0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far)
    },
    toJSON: function(t) {
      var e = g.prototype.toJSON.call(this, t);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
    }
  }), Ae.prototype = Object.assign(Object.create(ye.prototype), {
    constructor: Ae,
    isArrayCamera: !0
  }), De.prototype.isFogExp2 = !0, De.prototype.clone = function() {
    return new De(this.color, this.density)
  }, De.prototype.toJSON = function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    }
  }, Te.prototype.isFog = !0, Te.prototype.clone = function() {
    return new Te(this.color, this.near, this.far)
  }, Te.prototype.toJSON = function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    }
  }, Le.prototype = Object.assign(Object.create(g.prototype), {
    constructor: Le,
    copy: function(t, e) {
      return g.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    },
    toJSON: function(t) {
      var e = g.prototype.toJSON.call(this, t);
      return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
    }
  }), ((Ee.prototype = Object.create(j.prototype)).constructor = Ee).prototype.isSpriteMaterial = !0, Ee.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
  }, Ie.prototype = Object.assign(Object.create(g.prototype), {
    constructor: Ie,
    isSprite: !0,
    raycast: (eu = new wt, iu = new wt, nu = new wt, function(t, e) {
      iu.setFromMatrixPosition(this.matrixWorld), t.ray.closestPointToPoint(iu, eu), nu.setFromMatrixScale(this.matrixWorld);
      var i = nu.x * nu.y / 4;
      if(!(iu.distanceToSquared(eu) > i)) {
        var n = t.ray.origin.distanceTo(eu);
        n < t.near || n > t.far || e.push({
          distance: n,
          point: eu.clone(),
          face: null,
          object: this
        })
      }
    }),
    clone: function() {
      return new this.constructor(this.material).copy(this)
    },
    copy: function(t) {
      return g.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
    }
  }), _e.prototype = Object.assign(Object.create(g.prototype), {
    constructor: _e,
    copy: function(t) {
      g.prototype.copy.call(this, t, !1);
      for(var e = t.levels, i = 0, n = e.length; i < n; i++) {
        var r = e[i];
        this.addLevel(r.object.clone(), r.distance)
      }
      return this
    },
    addLevel: function(t, e) {
      void 0 === e && (e = 0), e = Math.abs(e);
      for(var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
      i.splice(n, 0, {
        distance: e,
        object: t
      }), this.add(t)
    },
    getObjectForDistance: function(t) {
      for(var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
      return e[i - 1].object
    },
    raycast: (su = new wt, function(t, e) {
      su.setFromMatrixPosition(this.matrixWorld);
      var i = t.ray.origin.distanceTo(su);
      this.getObjectForDistance(i).raycast(t, e)
    }),
    update: (ru = new wt, au = new wt, function(t) {
      var e = this.levels;
      if(1 < e.length) {
        ru.setFromMatrixPosition(t.matrixWorld), au.setFromMatrixPosition(this.matrixWorld);
        var i = ru.distanceTo(au);
        e[0].object.visible = !0;
        for(var n = 1, r = e.length; n < r && i >= e[n].distance; n++) e[n - 1].object.visible = !1, e[n].object.visible = !0;
        for(; n < r; n++) e[n].object.visible = !1
      }
    }),
    toJSON: function(t) {
      var e = g.prototype.toJSON.call(this, t);
      e.object.levels = [];
      for(var i = this.levels, n = 0, r = i.length; n < r; n++) {
        var a = i[n];
        e.object.levels.push({
          object: a.object.uuid,
          distance: a.distance
        })
      }
      return e
    }
  }), Object.assign(be.prototype, {
    calculateInverses: function() {
      this.boneInverses = [];
      for(var t = 0, e = this.bones.length; t < e; t++) {
        var i = new At;
        this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
      }
    },
    pose: function() {
      var t, e, i;
      for(e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
      for(e = 0, i = this.bones.length; e < i; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
    },
    update: (ou = new At, cu = new At, function() {
      for(var t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture, r = 0, a = t.length; r < a; r++) {
        var s = t[r] ? t[r].matrixWorld : cu;
        ou.multiplyMatrices(s, e[r]), ou.toArray(i, 16 * r)
      }
      void 0 !== n && (n.needsUpdate = !0)
    }),
    clone: function() {
      return new be(this.bones, this.boneInverses)
    },
    getBoneByName: function(t) {
      for(var e = 0, i = this.bones.length; e < i; e++) {
        var n = this.bones[e];
        if(n.name === t) return n
      }
    }
  }), Se.prototype = Object.assign(Object.create(g.prototype), {
    constructor: Se,
    isBone: !0
  }), je.prototype = Object.assign(Object.create(G.prototype), {
    constructor: je,
    isSkinnedMesh: !0,
    initBones: function() {
      var t, e, i, n, r = [];
      if(this.geometry && void 0 !== this.geometry.bones) {
        for(i = 0, n = this.geometry.bones.length; i < n; i++) e = this.geometry.bones[i], t = new Se, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
        for(i = 0, n = this.geometry.bones.length; i < n; i++) - 1 !== (e = this.geometry.bones[i]).parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[i]) : this.add(r[i])
      }
      return this.updateMatrixWorld(!0), r
    },
    bind: function(t, e) {
      this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
    },
    pose: function() {
      this.skeleton.pose()
    },
    normalizeSkinWeights: function() {
      var t, e;
      if(this.geometry && this.geometry.isGeometry)
        for(e = 0; e < this.geometry.skinWeights.length; e++) {
          var i = this.geometry.skinWeights[e];
          (t = 1 / i.manhattanLength()) !== 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0)
        } else if(this.geometry && this.geometry.isBufferGeometry) {
          var n = new Nt,
            r = this.geometry.attributes.skinWeight;
          for(e = 0; e < r.count; e++) n.x = r.getX(e), n.y = r.getY(e), n.z = r.getZ(e), n.w = r.getW(e), (t = 1 / n.manhattanLength()) !== 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0), r.setXYZW(e, n.x, n.y, n.z, n.w)
        }
    },
    updateMatrixWorld: function(t) {
      G.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode && this.bindMatrixInverse.getInverse(this.bindMatrix)
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), ((Ce.prototype = Object.create(j.prototype)).constructor = Ce).prototype.isLineBasicMaterial = !0, Ce.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
  }, Oe.prototype = Object.assign(Object.create(g.prototype), {
    constructor: Oe,
    isLine: !0,
    computeLineDistances: (du = new wt, pu = new wt, function() {
      var t = this.geometry;
      if(t.isBufferGeometry) {
        if(null === t.index) {
          for(var e = t.attributes.position, i = [0], n = 1, r = e.count; n < r; n++) du.fromBufferAttribute(e, n - 1), pu.fromBufferAttribute(e, n), i[n] = i[n - 1], i[n] += du.distanceTo(pu);
          t.addAttribute("lineDistance", new U(i, 1))
        }
      } else if(t.isGeometry) {
        var a = t.vertices;
        for((i = t.lineDistances)[0] = 0, n = 1, r = a.length; n < r; n++) i[n] = i[n - 1], i[n] += a[n - 1].distanceTo(a[n])
      }
      return this
    }),
    raycast: (hu = new At, uu = new R, lu = new p, function(t, e) {
      var i = t.linePrecision,
        n = i * i,
        r = this.geometry,
        a = this.matrixWorld;
      if(null === r.boundingSphere && r.computeBoundingSphere(), lu.copy(r.boundingSphere), lu.applyMatrix4(a), !1 !== t.ray.intersectsSphere(lu)) {
        hu.getInverse(a), uu.copy(t.ray).applyMatrix4(hu);
        var s = new wt,
          o = new wt,
          c = new wt,
          h = new wt,
          u = this && this.isLineSegments ? 2 : 1;
        if(r.isBufferGeometry) {
          var l = r.index,
            d = r.attributes.position.array;
          if(null !== l)
            for(var p = l.array, f = 0, g = p.length - 1; f < g; f += u) {
              var m = p[f],
                M = p[f + 1];
              s.fromArray(d, 3 * m), o.fromArray(d, 3 * M), n < uu.distanceSqToSegment(s, o, h, c) || (h.applyMatrix4(this.matrixWorld), (A = t.ray.origin.distanceTo(h)) < t.near || A > t.far || e.push({
                distance: A,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: f,
                face: null,
                faceIndex: null,
                object: this
              }))
            } else
              for(f = 0, g = d.length / 3 - 1; f < g; f += u) s.fromArray(d, 3 * f), o.fromArray(d, 3 * f + 3), n < uu.distanceSqToSegment(s, o, h, c) || (h.applyMatrix4(this.matrixWorld), (A = t.ray.origin.distanceTo(h)) < t.near || A > t.far || e.push({
                distance: A,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: f,
                face: null,
                faceIndex: null,
                object: this
              }))
        } else if(r.isGeometry) {
          var v = r.vertices,
            y = v.length;
          for(f = 0; f < y - 1; f += u) {
            var A;
            n < uu.distanceSqToSegment(v[f], v[f + 1], h, c) || (h.applyMatrix4(this.matrixWorld), (A = t.ray.origin.distanceTo(h)) < t.near || A > t.far || e.push({
              distance: A,
              point: c.clone().applyMatrix4(this.matrixWorld),
              index: f,
              face: null,
              faceIndex: null,
              object: this
            }))
          }
        }
      }
    }),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), ze.prototype = Object.assign(Object.create(Oe.prototype), {
    constructor: ze,
    isLineSegments: !0,
    computeLineDistances: (fu = new wt, gu = new wt, function() {
      var t = this.geometry;
      if(t.isBufferGeometry) {
        if(null === t.index) {
          for(var e = t.attributes.position, i = [], n = 0, r = e.count; n < r; n += 2) fu.fromBufferAttribute(e, n), gu.fromBufferAttribute(e, n + 1), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + fu.distanceTo(gu);
          t.addAttribute("lineDistance", new U(i, 1))
        }
      } else if(t.isGeometry) {
        var a = t.vertices;
        for(i = t.lineDistances, n = 0, r = a.length; n < r; n += 2) fu.copy(a[n]), gu.copy(a[n + 1]), i[n] = 0 === n ? 0 : i[n - 1], i[n + 1] = i[n] + fu.distanceTo(gu)
      }
      return this
    })
  }), Pe.prototype = Object.assign(Object.create(Oe.prototype), {
    constructor: Pe,
    isLineLoop: !0
  }), ((Ue.prototype = Object.create(j.prototype)).constructor = Ue).prototype.isPointsMaterial = !0, Ue.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
  }, Be.prototype = Object.assign(Object.create(g.prototype), {
    constructor: Be,
    isPoints: !0,
    raycast: (mu = new At, Mu = new R, vu = new p, function(r, a) {
      function t(t, e) {
        var i = Mu.distanceSqToPoint(t);
        if(i < c) {
          Mu.closestPointToPoint(t, u), u.applyMatrix4(o);
          var n = r.ray.origin.distanceTo(u);
          if(n < r.near || n > r.far) return;
          a.push({
            distance: n,
            distanceToRay: Math.sqrt(i),
            point: u.clone(),
            index: e,
            face: null,
            object: s
          })
        }
      }
      var s = this,
        e = this.geometry,
        o = this.matrixWorld,
        i = r.params.Points.threshold;
      if(null === e.boundingSphere && e.computeBoundingSphere(), vu.copy(e.boundingSphere), vu.applyMatrix4(o), vu.radius += i, !1 !== r.ray.intersectsSphere(vu)) {
        mu.getInverse(o), Mu.copy(r.ray).applyMatrix4(mu);
        var n = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          c = n * n,
          h = new wt,
          u = new wt;
        if(e.isBufferGeometry) {
          var l = e.index,
            d = e.attributes.position.array;
          if(null !== l)
            for(var p = l.array, f = 0, g = p.length; f < g; f++) {
              var m = p[f];
              h.fromArray(d, 3 * m), t(h, m)
            } else {
              f = 0;
              for(var M = d.length / 3; f < M; f++) h.fromArray(d, 3 * f), t(h, f)
            }
        } else {
          var v = e.vertices;
          for(f = 0, M = v.length; f < M; f++) t(v[f], f)
        }
      }
    }),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this)
    }
  }), ke.prototype = Object.assign(Object.create(g.prototype), {
    constructor: ke,
    isGroup: !0
  }), Re.prototype = Object.assign(Object.create(d.prototype), {
    constructor: Re,
    isVideoTexture: !0,
    update: function() {
      var t = this.image;
      t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
  }), ((Fe.prototype = Object.create(d.prototype)).constructor = Fe).prototype.isCompressedTexture = !0, ((Qe.prototype = Object.create(d.prototype)).constructor = Qe).prototype.isDepthTexture = !0, (Ge.prototype = Object.create(B.prototype)).constructor = Ge, (Ye.prototype = Object.create(y.prototype)).constructor = Ye, (Ve.prototype = Object.create(B.prototype)).constructor = Ve, (We.prototype = Object.create(y.prototype)).constructor = We, (He.prototype = Object.create(B.prototype)).constructor = He, (Xe.prototype = Object.create(y.prototype)).constructor = Xe, (Ze.prototype = Object.create(He.prototype)).constructor = Ze, (qe.prototype = Object.create(y.prototype)).constructor = qe, (Je.prototype = Object.create(He.prototype)).constructor = Je, (Ke.prototype = Object.create(y.prototype)).constructor = Ke, ($e.prototype = Object.create(He.prototype)).constructor = $e, (ti.prototype = Object.create(y.prototype)).constructor = ti, (ei.prototype = Object.create(He.prototype)).constructor = ei, (ii.prototype = Object.create(y.prototype)).constructor = ii, (ni.prototype = Object.create(B.prototype)).constructor = ni, (ri.prototype = Object.create(y.prototype)).constructor = ri, (ai.prototype = Object.create(B.prototype)).constructor = ai, (si.prototype = Object.create(y.prototype)).constructor = si, (oi.prototype = Object.create(B.prototype)).constructor = oi;
  var xu = function(t, e, i) {
      i = i || 2;
      var n, r, a, s, o, c, h, u = e && e.length,
        l = u ? e[0] * i : t.length,
        d = ci(t, 0, l, i, !0),
        p = [];
      if(!d) return p;
      if(u && (d = function(t, e, i, n) {
          var r, a, s, o = [];
          for(r = 0, a = e.length; r < a; r++)(s = ci(t, e[r] * n, r < a - 1 ? e[r + 1] * n : t.length, n, !1)) === s.next && (s.steiner = !0), o.push(vi(s));
          for(o.sort(gi), r = 0; r < o.length; r++) mi(o[r], i), i = hi(i, i.next);
          return i
        }(t, e, d, i)), t.length > 80 * i) {
        n = a = t[0], r = s = t[1];
        for(var f = i; f < l; f += i)(o = t[f]) < n && (n = o), (c = t[f + 1]) < r && (r = c), a < o && (a = o), s < c && (s = c);
        h = 0 !== (h = Math.max(a - n, s - r)) ? 1 / h : 0
      }
      return ui(d, p, i, n, r, h), p
    },
    wu = {
      area: function(t) {
        for(var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
        return .5 * i
      },
      isClockWise: function(t) {
        return wu.area(t) < 0
      },
      triangulateShape: function(t, e) {
        var i = [],
          n = [],
          r = [];
        Ii(t), _i(i, t);
        var a = t.length;
        e.forEach(Ii);
        for(var s = 0; s < e.length; s++) n.push(a), a += e[s].length, _i(i, e[s]);
        var o = xu(i, n);
        for(s = 0; s < o.length; s += 3) r.push(o.slice(s, s + 3));
        return r
      }
    };
  ((bi.prototype = Object.create(y.prototype)).constructor = bi).prototype.toJSON = function() {
    var t = y.prototype.toJSON.call(this);
    return ji(this.parameters.shapes, this.parameters.options, t)
  }, ((Si.prototype = Object.create(B.prototype)).constructor = Si).prototype.toJSON = function() {
    var t = B.prototype.toJSON.call(this);
    return ji(this.parameters.shapes, this.parameters.options, t)
  };
  var Nu = {
    generateTopUV: function(t, e, i, n, r) {
      var a = e[3 * i],
        s = e[3 * i + 1],
        o = e[3 * n],
        c = e[3 * n + 1],
        h = e[3 * r],
        u = e[3 * r + 1];
      return [new tt(a, s), new tt(o, c), new tt(h, u)]
    },
    generateSideWallUV: function(t, e, i, n, r, a) {
      var s = e[3 * i],
        o = e[3 * i + 1],
        c = e[3 * i + 2],
        h = e[3 * n],
        u = e[3 * n + 1],
        l = e[3 * n + 2],
        d = e[3 * r],
        p = e[3 * r + 1],
        f = e[3 * r + 2],
        g = e[3 * a],
        m = e[3 * a + 1],
        M = e[3 * a + 2];
      return Math.abs(o - u) < .01 ? [new tt(s, 1 - c), new tt(h, 1 - l), new tt(d, 1 - f), new tt(g, 1 - M)] : [new tt(o, 1 - c), new tt(u, 1 - l), new tt(p, 1 - f), new tt(m, 1 - M)]
    }
  };
  (Ci.prototype = Object.create(y.prototype)).constructor = Ci, (Oi.prototype = Object.create(Si.prototype)).constructor = Oi, (zi.prototype = Object.create(y.prototype)).constructor = zi, (Pi.prototype = Object.create(B.prototype)).constructor = Pi, (Ui.prototype = Object.create(y.prototype)).constructor = Ui, (Bi.prototype = Object.create(B.prototype)).constructor = Bi, (ki.prototype = Object.create(y.prototype)).constructor = ki, (Ri.prototype = Object.create(B.prototype)).constructor = Ri, ((Fi.prototype = Object.create(y.prototype)).constructor = Fi).prototype.toJSON = function() {
    var t = y.prototype.toJSON.call(this);
    return Gi(this.parameters.shapes, t)
  }, ((Qi.prototype = Object.create(B.prototype)).constructor = Qi).prototype.toJSON = function() {
    var t = B.prototype.toJSON.call(this);
    return Gi(this.parameters.shapes, t)
  }, (Yi.prototype = Object.create(B.prototype)).constructor = Yi, (Vi.prototype = Object.create(y.prototype)).constructor = Vi, (Wi.prototype = Object.create(B.prototype)).constructor = Wi, (Hi.prototype = Object.create(Vi.prototype)).constructor = Hi, (Xi.prototype = Object.create(Wi.prototype)).constructor = Xi, (Zi.prototype = Object.create(y.prototype)).constructor = Zi, (qi.prototype = Object.create(B.prototype)).constructor = qi;
  var Du = Object.freeze({
    WireframeGeometry: Ge,
    ParametricGeometry: Ye,
    ParametricBufferGeometry: Ve,
    TetrahedronGeometry: Xe,
    TetrahedronBufferGeometry: Ze,
    OctahedronGeometry: qe,
    OctahedronBufferGeometry: Je,
    IcosahedronGeometry: Ke,
    IcosahedronBufferGeometry: $e,
    DodecahedronGeometry: ti,
    DodecahedronBufferGeometry: ei,
    PolyhedronGeometry: We,
    PolyhedronBufferGeometry: He,
    TubeGeometry: ii,
    TubeBufferGeometry: ni,
    TorusKnotGeometry: ri,
    TorusKnotBufferGeometry: ai,
    TorusGeometry: si,
    TorusBufferGeometry: oi,
    TextGeometry: Ci,
    TextBufferGeometry: Oi,
    SphereGeometry: zi,
    SphereBufferGeometry: Pi,
    RingGeometry: Ui,
    RingBufferGeometry: Bi,
    PlaneGeometry: b,
    PlaneBufferGeometry: S,
    LatheGeometry: ki,
    LatheBufferGeometry: Ri,
    ShapeGeometry: Fi,
    ShapeBufferGeometry: Qi,
    ExtrudeGeometry: bi,
    ExtrudeBufferGeometry: Si,
    EdgesGeometry: Yi,
    ConeGeometry: Hi,
    ConeBufferGeometry: Xi,
    CylinderGeometry: Vi,
    CylinderBufferGeometry: Wi,
    CircleGeometry: Zi,
    CircleBufferGeometry: qi,
    BoxGeometry: _,
    BoxBufferGeometry: E
  });
  ((Ji.prototype = Object.create(j.prototype)).constructor = Ji).prototype.isShadowMaterial = !0, Ji.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.color.copy(t.color), this
  }, ((Ki.prototype = Object.create(k.prototype)).constructor = Ki).prototype.isRawShaderMaterial = !0, (($i.prototype = Object.create(j.prototype)).constructor = $i).prototype.isMeshStandardMaterial = !0, $i.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.defines = {
      STANDARD: ""
    }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, ((tn.prototype = Object.create($i.prototype)).constructor = tn).prototype.isMeshPhysicalMaterial = !0, tn.prototype.copy = function(t) {
    return $i.prototype.copy.call(this, t), this.defines = {
      PHYSICAL: ""
    }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
  }, ((en.prototype = Object.create(j.prototype)).constructor = en).prototype.isMeshPhongMaterial = !0, en.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, ((nn.prototype = Object.create(en.prototype)).constructor = nn).prototype.isMeshToonMaterial = !0, nn.prototype.copy = function(t) {
    return en.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
  }, ((rn.prototype = Object.create(j.prototype)).constructor = rn).prototype.isMeshNormalMaterial = !0, rn.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, ((an.prototype = Object.create(j.prototype)).constructor = an).prototype.isMeshLambertMaterial = !0, an.prototype.copy = function(t) {
    return j.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, ((sn.prototype = Object.create(Ce.prototype)).constructor = sn).prototype.isLineDashedMaterial = !0, sn.prototype.copy = function(t) {
    return Ce.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
  };
  var Tu = Object.freeze({
      ShadowMaterial: Ji,
      SpriteMaterial: Ee,
      RawShaderMaterial: Ki,
      ShaderMaterial: k,
      PointsMaterial: Ue,
      MeshPhysicalMaterial: tn,
      MeshStandardMaterial: $i,
      MeshPhongMaterial: en,
      MeshToonMaterial: nn,
      MeshNormalMaterial: rn,
      MeshLambertMaterial: an,
      MeshDepthMaterial: le,
      MeshDistanceMaterial: de,
      MeshBasicMaterial: C,
      LineDashedMaterial: sn,
      LineBasicMaterial: Ce,
      Material: j
    }),
    Lu = {
      enabled: !1,
      files: {},
      add: function(t, e) {
        !1 !== this.enabled && (this.files[t] = e)
      },
      get: function(t) {
        if(!1 !== this.enabled) return this.files[t]
      },
      remove: function(t) {
        delete this.files[t]
      },
      clear: function() {
        this.files = {}
      }
    },
    Eu = new on,
    Iu = {};
  Object.assign(cn.prototype, {
    load: function(s, t, e, i) {
      void 0 === s && (s = ""), void 0 !== this.path && (s = this.path + s), s = this.manager.resolveURL(s);
      var o = this,
        n = Lu.get(s);
      if(void 0 !== n) return o.manager.itemStart(s), setTimeout(function() {
        t && t(n), o.manager.itemEnd(s)
      }, 0), n;
      if(void 0 === Iu[s]) {
        var r = s.match(/^data:(.*?)(;base64)?,(.*)$/);
        if(r) {
          var a = r[1],
            c = !!r[2],
            h = r[3];
          h = window.decodeURIComponent(h), c && (h = window.atob(h));
          try {
            var u, l = (this.responseType || "").toLowerCase();
            switch(l) {
              case "arraybuffer":
              case "blob":
                for(var d = new Uint8Array(h.length), p = 0; p < h.length; p++) d[p] = h.charCodeAt(p);
                u = "blob" === l ? new Blob([d.buffer], {
                  type: a
                }) : d.buffer;
                break;
              case "document":
                var f = new DOMParser;
                u = f.parseFromString(h, a);
                break;
              case "json":
                u = JSON.parse(h);
                break;
              default:
                u = h
            }
            window.setTimeout(function() {
              t && t(u), o.manager.itemEnd(s)
            }, 0)
          } catch (t) {
            window.setTimeout(function() {
              i && i(t), o.manager.itemEnd(s), o.manager.itemError(s)
            }, 0)
          }
        } else {
          Iu[s] = [], Iu[s].push({
            onLoad: t,
            onProgress: e,
            onError: i
          });
          var g = new XMLHttpRequest;
          for(var m in g.open("GET", s, !0), g.addEventListener("load", function(t) {
              var e = this.response;
              Lu.add(s, e);
              var i = Iu[s];
              if(delete Iu[s], 200 === this.status || 0 === this.status) {
                this.status;
                for(var n = 0, r = i.length; n < r; n++) {
                  (a = i[n]).onLoad && a.onLoad(e)
                }
                o.manager.itemEnd(s)
              } else {
                for(n = 0, r = i.length; n < r; n++) {
                  var a;
                  (a = i[n]).onError && a.onError(t)
                }
                o.manager.itemEnd(s), o.manager.itemError(s)
              }
            }, !1), g.addEventListener("progress", function(t) {
              for(var e = Iu[s], i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                r.onProgress && r.onProgress(t)
              }
            }, !1), g.addEventListener("error", function(t) {
              var e = Iu[s];
              delete Iu[s];
              for(var i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                r.onError && r.onError(t)
              }
              o.manager.itemEnd(s), o.manager.itemError(s)
            }, !1), void 0 !== this.responseType && (g.responseType = this.responseType), void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials), g.overrideMimeType && g.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) g.setRequestHeader(m, this.requestHeader[m]);
          g.send(null)
        }
        return o.manager.itemStart(s), g
      }
      Iu[s].push({
        onLoad: t,
        onProgress: e,
        onError: i
      })
    },
    setPath: function(t) {
      return this.path = t, this
    },
    setResponseType: function(t) {
      return this.responseType = t, this
    },
    setWithCredentials: function(t) {
      return this.withCredentials = t, this
    },
    setMimeType: function(t) {
      return this.mimeType = t, this
    },
    setRequestHeader: function(t) {
      return this.requestHeader = t, this
    }
  }), Object.assign(function(t) {
    this.manager = void 0 !== t ? t : Eu, this._parser = null
  }.prototype, {
    load: function(t, a, e, n) {
      function i(i) {
        r.load(t[i], function(t) {
          var e = s._parser(t, !0);
          o[i] = {
            width: e.width,
            height: e.height,
            format: e.format,
            mipmaps: e.mipmaps
          }, 6 === (h += 1) && (1 === e.mipmapCount && (c.minFilter = Es), c.format = e.format, c.needsUpdate = !0, a && a(c))
        }, e, n)
      }
      var s = this,
        o = [],
        c = new Fe;
      c.image = o;
      var r = new cn(this.manager);
      if(r.setPath(this.path), r.setResponseType("arraybuffer"), Array.isArray(t))
        for(var h = 0, u = 0, l = t.length; u < l; ++u) i(u);
      else r.load(t, function(t) {
        var e = s._parser(t, !0);
        if(e.isCubemap)
          for(var i = e.mipmaps.length / e.mipmapCount, n = 0; n < i; n++) {
            o[n] = {
              mipmaps: []
            };
            for(var r = 0; r < e.mipmapCount; r++) o[n].mipmaps.push(e.mipmaps[n * e.mipmapCount + r]), o[n].format = e.format, o[n].width = e.width, o[n].height = e.height
          } else c.image.width = e.width, c.image.height = e.height, c.mipmaps = e.mipmaps;
        1 === e.mipmapCount && (c.minFilter = Es), c.format = e.format, c.needsUpdate = !0, a && a(c)
      }, e, n);
      return c
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(function(t) {
    this.manager = void 0 !== t ? t : Eu, this._parser = null
  }.prototype, {
    load: function(t, i, e, n) {
      var r = this,
        a = new Dt,
        s = new cn(this.manager);
      return s.setResponseType("arraybuffer"), s.load(t, function(t) {
        var e = r._parser(t);
        e && (void 0 !== e.image ? a.image = e.image : void 0 !== e.data && (a.image.width = e.width, a.image.height = e.height, a.image.data = e.data), a.wrapS = void 0 !== e.wrapS ? e.wrapS : ws, a.wrapT = void 0 !== e.wrapT ? e.wrapT : ws, a.magFilter = void 0 !== e.magFilter ? e.magFilter : Es, a.minFilter = void 0 !== e.minFilter ? e.minFilter : _s, a.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1, void 0 !== e.format && (a.format = e.format), void 0 !== e.type && (a.type = e.type), void 0 !== e.mipmaps && (a.mipmaps = e.mipmaps), 1 === e.mipmapCount && (a.minFilter = Es), a.needsUpdate = !0, i && i(a, e))
      }, e, n), a
    }
  }), Object.assign(hn.prototype, {
    crossOrigin: "Anonymous",
    load: function(e, t, i, n) {
      function r() {
        c.removeEventListener("load", r, !1), c.removeEventListener("error", a, !1), Lu.add(e, this), t && t(this), s.manager.itemEnd(e)
      }

      function a(t) {
        c.removeEventListener("load", r, !1), c.removeEventListener("error", a, !1), n && n(t), s.manager.itemEnd(e), s.manager.itemError(e)
      }
      void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
      var s = this,
        o = Lu.get(e);
      if(void 0 !== o) return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e)
      }, 0), o;
      var c = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
      return c.addEventListener("load", r, !1), c.addEventListener("error", a, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (c.crossOrigin = this.crossOrigin), s.manager.itemStart(e), c.src = e, c
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(function(t) {
    this.manager = void 0 !== t ? t : Eu
  }.prototype, {
    crossOrigin: "Anonymous",
    load: function(t, i, e, n) {
      function r(e) {
        s.load(t[e], function(t) {
          a.images[e] = t, 6 === ++o && (a.needsUpdate = !0, i && i(a))
        }, void 0, n)
      }
      var a = new V,
        s = new hn(this.manager);
      s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
      for(var o = 0, c = 0; c < t.length; ++c) r(c);
      return a
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(un.prototype, {
    crossOrigin: "Anonymous",
    load: function(i, n, t, e) {
      var r = new d,
        a = new hn(this.manager);
      return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(i, function(t) {
        r.image = t;
        var e = 0 < i.search(/\.(jpg|jpeg)$/) || 0 === i.search(/^data\:image\/jpeg/);
        r.format = e ? Gs : Ys, r.needsUpdate = !0, void 0 !== n && n(r)
      }, t, e), r
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    setPath: function(t) {
      return this.path = t, this
    }
  }), Object.assign(ln.prototype, {
    getPoint: function() {
      return null
    },
    getPointAt: function(t, e) {
      var i = this.getUtoTmapping(t);
      return this.getPoint(i, e)
    },
    getPoints: function(t) {
      void 0 === t && (t = 5);
      for(var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
      return e
    },
    getSpacedPoints: function(t) {
      void 0 === t && (t = 5);
      for(var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
      return e
    },
    getLength: function() {
      var t = this.getLengths();
      return t[t.length - 1]
    },
    getLengths: function(t) {
      if(void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var e, i, n = [],
        r = this.getPoint(0),
        a = 0;
      for(n.push(0), i = 1; i <= t; i++) a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e;
      return this.cacheArcLengths = n
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.getLengths()
    },
    getUtoTmapping: function(t, e) {
      var i, n = this.getLengths(),
        r = 0,
        a = n.length;
      i = e || t * n[a - 1];
      for(var s, o = 0, c = a - 1; o <= c;)
        if((s = n[r = Math.floor(o + (c - o) / 2)] - i) < 0) o = r + 1;
        else {
          if(!(0 < s)) {
            c = r;
            break
          }
          c = r - 1
        } if(n[r = c] === i) return r / (a - 1);
      var h = n[r];
      return (r + (i - h) / (n[r + 1] - h)) / (a - 1)
    },
    getTangent: function(t) {
      var e = t - 1e-4,
        i = t + 1e-4;
      e < 0 && (e = 0), 1 < i && (i = 1);
      var n = this.getPoint(e);
      return this.getPoint(i).clone().sub(n).normalize()
    },
    getTangentAt: function(t) {
      var e = this.getUtoTmapping(t);
      return this.getTangent(e)
    },
    computeFrenetFrames: function(t, e) {
      var i, n, r, a = new wt,
        s = [],
        o = [],
        c = [],
        h = new wt,
        u = new At;
      for(i = 0; i <= t; i++) n = i / t, s[i] = this.getTangentAt(n), s[i].normalize();
      o[0] = new wt, c[0] = new wt;
      var l = Number.MAX_VALUE,
        d = Math.abs(s[0].x),
        p = Math.abs(s[0].y),
        f = Math.abs(s[0].z);
      for(d <= l && (l = d, a.set(1, 0, 0)), p <= l && (l = p, a.set(0, 1, 0)), f <= l && a.set(0, 0, 1), h.crossVectors(s[0], a).normalize(), o[0].crossVectors(s[0], h), c[0].crossVectors(s[0], o[0]), i = 1; i <= t; i++) o[i] = o[i - 1].clone(), c[i] = c[i - 1].clone(), h.crossVectors(s[i - 1], s[i]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos(So.clamp(s[i - 1].dot(s[i]), -1, 1)), o[i].applyMatrix4(u.makeRotationAxis(h, r))), c[i].crossVectors(s[i], o[i]);
      if(!0 === e)
        for(r = Math.acos(So.clamp(o[0].dot(o[t]), -1, 1)), r /= t, 0 < s[0].dot(h.crossVectors(o[0], o[t])) && (r = -r), i = 1; i <= t; i++) o[i].applyMatrix4(u.makeRotationAxis(s[i], r * i)), c[i].crossVectors(s[i], o[i]);
      return {
        tangents: s,
        normals: o,
        binormals: c
      }
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    },
    toJSON: function() {
      var t = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
    },
    fromJSON: function(t) {
      return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
  }), ((dn.prototype = Object.create(ln.prototype)).constructor = dn).prototype.isEllipseCurve = !0, dn.prototype.getPoint = function(t, e) {
    for(var i = e || new tt, n = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, a = Math.abs(r) < Number.EPSILON; r < 0;) r += n;
    for(; n < r;) r -= n;
    r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
    var s = this.aStartAngle + t * r,
      o = this.aX + this.xRadius * Math.cos(s),
      c = this.aY + this.yRadius * Math.sin(s);
    if(0 !== this.aRotation) {
      var h = Math.cos(this.aRotation),
        u = Math.sin(this.aRotation),
        l = o - this.aX,
        d = c - this.aY;
      o = l * h - d * u + this.aX, c = l * u + d * h + this.aY
    }
    return i.set(o, c)
  }, dn.prototype.copy = function(t) {
    return ln.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, dn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
  }, dn.prototype.fromJSON = function(t) {
    return ln.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, ((pn.prototype = Object.create(dn.prototype)).constructor = pn).prototype.isArcCurve = !0;
  var _u = new wt,
    bu = new fn,
    Su = new fn,
    ju = new fn;
  ((gn.prototype = Object.create(ln.prototype)).constructor = gn).prototype.isCatmullRomCurve3 = !0, gn.prototype.getPoint = function(t, e) {
    var i, n, r, a, s = e || new wt,
      o = this.points,
      c = o.length,
      h = (c - (this.closed ? 0 : 1)) * t,
      u = Math.floor(h),
      l = h - u;
    if(this.closed ? u += 0 < u ? 0 : (Math.floor(Math.abs(u) / c) + 1) * c : 0 === l && u === c - 1 && (u = c - 2, l = 1), i = this.closed || 0 < u ? o[(u - 1) % c] : (_u.subVectors(o[0], o[1]).add(o[0]), _u), n = o[u % c], r = o[(u + 1) % c], a = this.closed || u + 2 < c ? o[(u + 2) % c] : (_u.subVectors(o[c - 1], o[c - 2]).add(o[c - 1]), _u), "centripetal" === this.curveType || "chordal" === this.curveType) {
      var d = "chordal" === this.curveType ? .5 : .25,
        p = Math.pow(i.distanceToSquared(n), d),
        f = Math.pow(n.distanceToSquared(r), d),
        g = Math.pow(r.distanceToSquared(a), d);
      f < 1e-4 && (f = 1), p < 1e-4 && (p = f), g < 1e-4 && (g = f), bu.initNonuniformCatmullRom(i.x, n.x, r.x, a.x, p, f, g), Su.initNonuniformCatmullRom(i.y, n.y, r.y, a.y, p, f, g), ju.initNonuniformCatmullRom(i.z, n.z, r.z, a.z, p, f, g)
    } else "catmullrom" === this.curveType && (bu.initCatmullRom(i.x, n.x, r.x, a.x, this.tension), Su.initCatmullRom(i.y, n.y, r.y, a.y, this.tension), ju.initCatmullRom(i.z, n.z, r.z, a.z, this.tension));
    return s.set(bu.calc(l), Su.calc(l), ju.calc(l)), s
  }, gn.prototype.copy = function(t) {
    ln.prototype.copy.call(this, t), this.points = [];
    for(var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push(n.clone())
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, gn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    t.points = [];
    for(var e = 0, i = this.points.length; e < i; e++) {
      var n = this.points[e];
      t.points.push(n.toArray())
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
  }, gn.prototype.fromJSON = function(t) {
    ln.prototype.fromJSON.call(this, t), this.points = [];
    for(var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push((new wt).fromArray(n))
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, ((yn.prototype = Object.create(ln.prototype)).constructor = yn).prototype.isCubicBezierCurve = !0, yn.prototype.getPoint = function(t, e) {
    var i = e || new tt,
      n = this.v0,
      r = this.v1,
      a = this.v2,
      s = this.v3;
    return i.set(vn(t, n.x, r.x, a.x, s.x), vn(t, n.y, r.y, a.y, s.y)), i
  }, yn.prototype.copy = function(t) {
    return ln.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, yn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, yn.prototype.fromJSON = function(t) {
    return ln.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, ((An.prototype = Object.create(ln.prototype)).constructor = An).prototype.isCubicBezierCurve3 = !0, An.prototype.getPoint = function(t, e) {
    var i = e || new wt,
      n = this.v0,
      r = this.v1,
      a = this.v2,
      s = this.v3;
    return i.set(vn(t, n.x, r.x, a.x, s.x), vn(t, n.y, r.y, a.y, s.y), vn(t, n.z, r.z, a.z, s.z)), i
  }, An.prototype.copy = function(t) {
    return ln.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, An.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, An.prototype.fromJSON = function(t) {
    return ln.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, ((xn.prototype = Object.create(ln.prototype)).constructor = xn).prototype.isLineCurve = !0, xn.prototype.getPoint = function(t, e) {
    var i = e || new tt;
    return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
  }, xn.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
  }, xn.prototype.getTangent = function() {
    return this.v2.clone().sub(this.v1).normalize()
  }, xn.prototype.copy = function(t) {
    return ln.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, xn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, xn.prototype.fromJSON = function(t) {
    return ln.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, ((wn.prototype = Object.create(ln.prototype)).constructor = wn).prototype.isLineCurve3 = !0, wn.prototype.getPoint = function(t, e) {
    var i = e || new wt;
    return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
  }, wn.prototype.getPointAt = function(t, e) {
    return this.getPoint(t, e)
  }, wn.prototype.copy = function(t) {
    return ln.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, wn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, wn.prototype.fromJSON = function(t) {
    return ln.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, ((Nn.prototype = Object.create(ln.prototype)).constructor = Nn).prototype.isQuadraticBezierCurve = !0, Nn.prototype.getPoint = function(t, e) {
    var i = e || new tt,
      n = this.v0,
      r = this.v1,
      a = this.v2;
    return i.set(Mn(t, n.x, r.x, a.x), Mn(t, n.y, r.y, a.y)), i
  }, Nn.prototype.copy = function(t) {
    return ln.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Nn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Nn.prototype.fromJSON = function(t) {
    return ln.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, ((Dn.prototype = Object.create(ln.prototype)).constructor = Dn).prototype.isQuadraticBezierCurve3 = !0, Dn.prototype.getPoint = function(t, e) {
    var i = e || new wt,
      n = this.v0,
      r = this.v1,
      a = this.v2;
    return i.set(Mn(t, n.x, r.x, a.x), Mn(t, n.y, r.y, a.y), Mn(t, n.z, r.z, a.z)), i
  }, Dn.prototype.copy = function(t) {
    return ln.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Dn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Dn.prototype.fromJSON = function(t) {
    return ln.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, ((Tn.prototype = Object.create(ln.prototype)).constructor = Tn).prototype.isSplineCurve = !0, Tn.prototype.getPoint = function(t, e) {
    var i = e || new tt,
      n = this.points,
      r = (n.length - 1) * t,
      a = Math.floor(r),
      s = r - a,
      o = n[0 === a ? a : a - 1],
      c = n[a],
      h = n[a > n.length - 2 ? n.length - 1 : a + 1],
      u = n[a > n.length - 3 ? n.length - 1 : a + 2];
    return i.set(mn(s, o.x, c.x, h.x, u.x), mn(s, o.y, c.y, h.y, u.y)), i
  }, Tn.prototype.copy = function(t) {
    ln.prototype.copy.call(this, t), this.points = [];
    for(var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push(n.clone())
    }
    return this
  }, Tn.prototype.toJSON = function() {
    var t = ln.prototype.toJSON.call(this);
    t.points = [];
    for(var e = 0, i = this.points.length; e < i; e++) {
      var n = this.points[e];
      t.points.push(n.toArray())
    }
    return t
  }, Tn.prototype.fromJSON = function(t) {
    ln.prototype.fromJSON.call(this, t), this.points = [];
    for(var e = 0, i = t.points.length; e < i; e++) {
      var n = t.points[e];
      this.points.push((new tt).fromArray(n))
    }
    return this
  };
  var Cu = Object.freeze({
    ArcCurve: pn,
    CatmullRomCurve3: gn,
    CubicBezierCurve: yn,
    CubicBezierCurve3: An,
    EllipseCurve: dn,
    LineCurve: xn,
    LineCurve3: wn,
    QuadraticBezierCurve: Nn,
    QuadraticBezierCurve3: Dn,
    SplineCurve: Tn
  });
  Ln.prototype = Object.assign(Object.create(ln.prototype), {
    constructor: Ln,
    add: function(t) {
      this.curves.push(t)
    },
    closePath: function() {
      var t = this.curves[0].getPoint(0),
        e = this.curves[this.curves.length - 1].getPoint(1);
      t.equals(e) || this.curves.push(new xn(e, t))
    },
    getPoint: function(t) {
      for(var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
        if(i[n] >= e) {
          var r = i[n] - e,
            a = this.curves[n],
            s = a.getLength(),
            o = 0 === s ? 0 : 1 - r / s;
          return a.getPointAt(o)
        }
        n++
      }
      return null
    },
    getLength: function() {
      var t = this.getCurveLengths();
      return t[t.length - 1]
    },
    updateArcLengths: function() {
      this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    },
    getCurveLengths: function() {
      if(this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      for(var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
      return this.cacheLengths = t
    },
    getSpacedPoints: function(t) {
      void 0 === t && (t = 40);
      for(var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
      return this.autoClose && e.push(e[0]), e
    },
    getPoints: function(t) {
      t = t || 12;
      for(var e, i = [], n = 0, r = this.curves; n < r.length; n++)
        for(var a = r[n], s = a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? t * a.points.length : t, o = a.getPoints(s), c = 0; c < o.length; c++) {
          var h = o[c];
          e && e.equals(h) || (i.push(h), e = h)
        }
      return this.autoClose && 1 < i.length && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
    },
    copy: function(t) {
      ln.prototype.copy.call(this, t), this.curves = [];
      for(var e = 0, i = t.curves.length; e < i; e++) {
        var n = t.curves[e];
        this.curves.push(n.clone())
      }
      return this.autoClose = t.autoClose, this
    },
    toJSON: function() {
      var t = ln.prototype.toJSON.call(this);
      t.autoClose = this.autoClose, t.curves = [];
      for(var e = 0, i = this.curves.length; e < i; e++) {
        var n = this.curves[e];
        t.curves.push(n.toJSON())
      }
      return t
    },
    fromJSON: function(t) {
      ln.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
      for(var e = 0, i = t.curves.length; e < i; e++) {
        var n = t.curves[e];
        this.curves.push((new Cu[n.type]).fromJSON(n))
      }
      return this
    }
  }), En.prototype = Object.assign(Object.create(Ln.prototype), {
    constructor: En,
    setFromPoints: function(t) {
      this.moveTo(t[0].x, t[0].y);
      for(var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y)
    },
    moveTo: function(t, e) {
      this.currentPoint.set(t, e)
    },
    lineTo: function(t, e) {
      var i = new xn(this.currentPoint.clone(), new tt(t, e));
      this.curves.push(i), this.currentPoint.set(t, e)
    },
    quadraticCurveTo: function(t, e, i, n) {
      var r = new Nn(this.currentPoint.clone(), new tt(t, e), new tt(i, n));
      this.curves.push(r), this.currentPoint.set(i, n)
    },
    bezierCurveTo: function(t, e, i, n, r, a) {
      var s = new yn(this.currentPoint.clone(), new tt(t, e), new tt(i, n), new tt(r, a));
      this.curves.push(s), this.currentPoint.set(r, a)
    },
    splineThru: function(t) {
      var e = new Tn([this.currentPoint.clone()].concat(t));
      this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
    },
    arc: function(t, e, i, n, r, a) {
      var s = this.currentPoint.x,
        o = this.currentPoint.y;
      this.absarc(t + s, e + o, i, n, r, a)
    },
    absarc: function(t, e, i, n, r, a) {
      this.absellipse(t, e, i, i, n, r, a)
    },
    ellipse: function(t, e, i, n, r, a, s, o) {
      var c = this.currentPoint.x,
        h = this.currentPoint.y;
      this.absellipse(t + c, e + h, i, n, r, a, s, o)
    },
    absellipse: function(t, e, i, n, r, a, s, o) {
      var c = new dn(t, e, i, n, r, a, s, o);
      if(0 < this.curves.length) {
        var h = c.getPoint(0);
        h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
      }
      this.curves.push(c);
      var u = c.getPoint(1);
      this.currentPoint.copy(u)
    },
    copy: function(t) {
      return Ln.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
    },
    toJSON: function() {
      var t = Ln.prototype.toJSON.call(this);
      return t.currentPoint = this.currentPoint.toArray(), t
    },
    fromJSON: function(t) {
      return Ln.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
    }
  }), In.prototype = Object.assign(Object.create(En.prototype), {
    constructor: In,
    getPointsHoles: function(t) {
      for(var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
      return e
    },
    extractPoints: function(t) {
      return {
        shape: this.getPoints(t),
        holes: this.getPointsHoles(t)
      }
    },
    copy: function(t) {
      En.prototype.copy.call(this, t), this.holes = [];
      for(var e = 0, i = t.holes.length; e < i; e++) {
        var n = t.holes[e];
        this.holes.push(n.clone())
      }
      return this
    },
    toJSON: function() {
      var t = En.prototype.toJSON.call(this);
      t.uuid = this.uuid, t.holes = [];
      for(var e = 0, i = this.holes.length; e < i; e++) {
        var n = this.holes[e];
        t.holes.push(n.toJSON())
      }
      return t
    },
    fromJSON: function(t) {
      En.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
      for(var e = 0, i = t.holes.length; e < i; e++) {
        var n = t.holes[e];
        this.holes.push((new En).fromJSON(n))
      }
      return this
    }
  }), _n.prototype = Object.assign(Object.create(g.prototype), {
    constructor: _n,
    isLight: !0,
    copy: function(t) {
      return g.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
    },
    toJSON: function(t) {
      var e = g.prototype.toJSON.call(this, t);
      return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
    }
  }), bn.prototype = Object.assign(Object.create(_n.prototype), {
    constructor: bn,
    isHemisphereLight: !0,
    copy: function(t) {
      return _n.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
    }
  }), Object.assign(Sn.prototype, {
    copy: function(t) {
      return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    toJSON: function() {
      var t = {};
      return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
    }
  }), jn.prototype = Object.assign(Object.create(Sn.prototype), {
    constructor: jn,
    isSpotLightShadow: !0,
    update: function(t) {
      var e = this.camera,
        i = 2 * So.RAD2DEG * t.angle,
        n = this.mapSize.width / this.mapSize.height,
        r = t.distance || e.far;
      i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix())
    }
  }), Cn.prototype = Object.assign(Object.create(_n.prototype), {
    constructor: Cn,
    isSpotLight: !0,
    copy: function(t) {
      return _n.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }), On.prototype = Object.assign(Object.create(_n.prototype), {
    constructor: On,
    isPointLight: !0,
    copy: function(t) {
      return _n.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    }
  }), zn.prototype = Object.assign(Object.create(Sn.prototype), {
    constructor: zn
  }), Pn.prototype = Object.assign(Object.create(_n.prototype), {
    constructor: Pn,
    isDirectionalLight: !0,
    copy: function(t) {
      return _n.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
  }), Un.prototype = Object.assign(Object.create(_n.prototype), {
    constructor: Un,
    isAmbientLight: !0
  }), Bn.prototype = Object.assign(Object.create(_n.prototype), {
    constructor: Bn,
    isRectAreaLight: !0,
    copy: function(t) {
      return _n.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
    },
    toJSON: function(t) {
      var e = _n.prototype.toJSON.call(this, t);
      return e.object.width = this.width, e.object.height = this.height, e
    }
  }), kn.prototype = Object.assign(Object.create(Zn.prototype), {
    constructor: kn,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), Rn.prototype = Object.assign(Object.create(Zn.prototype), {
    constructor: Rn,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  }), Object.assign(Fn.prototype, {
    evaluate: function(t) {
      var e = this.parameterPositions,
        i = this._cachedIndex,
        n = e[i],
        r = e[i - 1];
      t: {
        e: {
          var a;i: {
            n: if(!(t < n)) {
              for(var s = i + 2;;) {
                if(void 0 === n) {
                  if(t < r) break n;
                  return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
                }
                if(i === s) break;
                if(r = n, t < (n = e[++i])) break e
              }
              a = e.length;
              break i
            }if(r <= t) break t;
            var o = e[1];t < o && (i = 2, r = o);
            for(s = i - 2;;) {
              if(void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
              if(i === s) break;
              if(n = r, (r = e[--i - 1]) <= t) break e
            }
            a = i,
            i = 0
          }
          for(; i < a;) {
            var c = i + a >>> 1;
            t < e[c] ? a = c : i = 1 + c
          }
          if(n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0,
          this.beforeStart_(0, t, n);
          if(void 0 === n) return i = e.length,
          this._cachedIndex = i,
          this.afterEnd_(i - 1, r, t)
        }
        this._cachedIndex = i,
        this.intervalChanged_(i, r, n)
      }
      return this.interpolate_(i, r, t, n)
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function() {
      return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(t) {
      for(var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) e[a] = i[r + a];
      return e
    },
    interpolate_: function() {
      throw new Error("call to abstract method")
    },
    intervalChanged_: function() {}
  }), Object.assign(Fn.prototype, {
    beforeStart_: Fn.prototype.copySampleValue_,
    afterEnd_: Fn.prototype.copySampleValue_
  }), Qn.prototype = Object.assign(Object.create(Fn.prototype), {
    constructor: Qn,
    interpolate_: function(t, e, i, n) {
      for(var r = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = t * s, c = (i - e) / (n - e), h = o + s; o !== h; o += 4) W.slerpFlat(r, 0, a, o - s, a, o, c);
      return r
    }
  }), Gn.prototype = Object.assign(Object.create(Zn.prototype), {
    constructor: Gn,
    ValueTypeName: "quaternion",
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodLinear: function(t) {
      return new Qn(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: void 0
  }), Yn.prototype = Object.assign(Object.create(Zn.prototype), {
    constructor: Yn,
    ValueTypeName: "color"
  }), Vn.prototype = Object.assign(Object.create(Zn.prototype), {
    constructor: Vn,
    ValueTypeName: "number"
  }), Wn.prototype = Object.assign(Object.create(Fn.prototype), {
    constructor: Wn,
    DefaultSettings_: {
      endingStart: yo,
      endingEnd: yo
    },
    intervalChanged_: function(t, e, i) {
      var n = this.parameterPositions,
        r = t - 2,
        a = t + 1,
        s = n[r],
        o = n[a];
      if(void 0 === s) switch(this.getSettings_().endingStart) {
        case Ao:
          r = t, s = 2 * e - i;
          break;
        case 2402:
          s = e + n[r = n.length - 2] - n[r + 1];
          break;
        default:
          r = t, s = i
      }
      if(void 0 === o) switch(this.getSettings_().endingEnd) {
        case Ao:
          a = t, o = 2 * i - e;
          break;
        case 2402:
          o = i + n[a = 1] - n[0];
          break;
        default:
          a = t - 1, o = e
      }
      var c = .5 * (i - e),
        h = this.valueSize;
      this._weightPrev = c / (e - s), this._weightNext = c / (o - i), this._offsetPrev = r * h, this._offsetNext = a * h
    },
    interpolate_: function(t, e, i, n) {
      for(var r = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = t * s, c = o - s, h = this._offsetPrev, u = this._offsetNext, l = this._weightPrev, d = this._weightNext, p = (i - e) / (n - e), f = p * p, g = f * p, m = -l * g + 2 * l * f - l * p, M = (1 + l) * g + (-1.5 - 2 * l) * f + (-.5 + l) * p + 1, v = (-1 - d) * g + (1.5 + d) * f + .5 * p, y = d * g - d * f, A = 0; A !== s; ++A) r[A] = m * a[h + A] + M * a[c + A] + v * a[o + A] + y * a[u + A];
      return r
    }
  }), Hn.prototype = Object.assign(Object.create(Fn.prototype), {
    constructor: Hn,
    interpolate_: function(t, e, i, n) {
      for(var r = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = t * s, c = o - s, h = (i - e) / (n - e), u = 1 - h, l = 0; l !== s; ++l) r[l] = a[c + l] * u + a[o + l] * h;
      return r
    }
  }), Xn.prototype = Object.assign(Object.create(Fn.prototype), {
    constructor: Xn,
    interpolate_: function(t) {
      return this.copySampleValue_(t - 1)
    }
  });
  var Ou = {
    arraySlice: function(t, e, i) {
      return Ou.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
    },
    convertArray: function(t, e, i) {
      return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
    },
    isTypedArray: function(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView)
    },
    getKeyframeOrder: function(i) {
      for(var t = i.length, e = new Array(t), n = 0; n !== t; ++n) e[n] = n;
      return e.sort(function(t, e) {
        return i[t] - i[e]
      }), e
    },
    sortedArray: function(t, e, i) {
      for(var n = t.length, r = new t.constructor(n), a = 0, s = 0; s !== n; ++a)
        for(var o = i[a] * e, c = 0; c !== e; ++c) r[s++] = t[o + c];
      return r
    },
    flattenJSON: function(t, e, i, n) {
      for(var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
      if(void 0 !== a) {
        var s = a[n];
        if(void 0 !== s)
          if(Array.isArray(s))
            for(; void 0 !== (s = a[n]) && (e.push(a.time), i.push.apply(i, s)), void 0 !== (a = t[r++]););
          else if(void 0 !== s.toArray)
          for(; void 0 !== (s = a[n]) && (e.push(a.time), s.toArray(i, i.length)), void 0 !== (a = t[r++]););
        else
          for(; void 0 !== (s = a[n]) && (e.push(a.time), i.push(s)), void 0 !== (a = t[r++]););
      }
    }
  };
  Object.assign(Zn, {
    parse: function(t) {
      if(void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
      var e = Zn._getTrackTypeForValueTypeName(t.type);
      if(void 0 === t.times) {
        var i = [],
          n = [];
        Ou.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
      }
      return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
    },
    toJSON: function(t) {
      var e, i = t.constructor;
      if(void 0 !== i.toJSON) e = i.toJSON(t);
      else {
        e = {
          name: t.name,
          times: Ou.convertArray(t.times, Array),
          values: Ou.convertArray(t.values, Array)
        };
        var n = t.getInterpolation();
        n !== t.DefaultInterpolation && (e.interpolation = n)
      }
      return e.type = t.ValueTypeName, e
    },
    _getTrackTypeForValueTypeName: function(t) {
      switch(t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return Vn;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return qn;
        case "color":
          return Yn;
        case "quaternion":
          return Gn;
        case "bool":
        case "boolean":
          return Rn;
        case "string":
          return kn
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
    }
  }), Object.assign(Zn.prototype, {
    constructor: Zn,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodDiscrete: function(t) {
      return new Xn(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodLinear: function(t) {
      return new Hn(this.times, this.values, this.getValueSize(), t)
    },
    InterpolantFactoryMethodSmooth: function(t) {
      return new Wn(this.times, this.values, this.getValueSize(), t)
    },
    setInterpolation: function(t) {
      var e;
      switch(t) {
        case 2300:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case 2301:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case 2302:
          e = this.InterpolantFactoryMethodSmooth
      }
      if(void 0 !== e) this.createInterpolant = e;
      else {
        var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if(void 0 === this.createInterpolant) {
          if(t === this.DefaultInterpolation) throw new Error(i);
          this.setInterpolation(this.DefaultInterpolation)
        }
      }
    },
    getInterpolation: function() {
      switch(this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return 2300;
        case this.InterpolantFactoryMethodLinear:
          return 2301;
        case this.InterpolantFactoryMethodSmooth:
          return 2302
      }
    },
    getValueSize: function() {
      return this.values.length / this.times.length
    },
    shift: function(t) {
      if(0 !== t)
        for(var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
      return this
    },
    scale: function(t) {
      if(1 !== t)
        for(var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
      return this
    },
    trim: function(t, e) {
      for(var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
      for(; - 1 !== a && i[a] > e;) --a;
      if(++a, 0 !== r || a !== n) {
        a <= r && (r = (a = Math.max(a, 1)) - 1);
        var s = this.getValueSize();
        this.times = Ou.arraySlice(i, r, a), this.values = Ou.arraySlice(this.values, r * s, a * s)
      }
      return this
    },
    validate: function() {
      var t = !0,
        e = this.getValueSize();
      e - Math.floor(e) != 0 && (t = !1);
      var i = this.times,
        n = this.values,
        r = i.length;
      0 === r && (t = !1);
      for(var a = null, s = 0; s !== r; s++) {
        var o = i[s];
        if("number" == typeof o && isNaN(o)) {
          t = !1;
          break
        }
        if(null !== a && o < a) {
          t = !1;
          break
        }
        a = o
      }
      if(void 0 !== n && Ou.isTypedArray(n)) {
        s = 0;
        for(var c = n.length; s !== c; ++s) {
          var h = n[s];
          if(isNaN(h)) {
            t = !1;
            break
          }
        }
      }
      return t
    },
    optimize: function() {
      for(var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, s = 1; s < a; ++s) {
        var o = !1,
          c = t[s];
        if(c !== t[s + 1] && (1 !== s || c !== c[0]))
          if(n) o = !0;
          else
            for(var h = s * i, u = h - i, l = h + i, d = 0; d !== i; ++d) {
              var p = e[h + d];
              if(p !== e[u + d] || p !== e[l + d]) {
                o = !0;
                break
              }
            }
        if(o) {
          if(s !== r) {
            t[r] = t[s];
            var f = s * i,
              g = r * i;
            for(d = 0; d !== i; ++d) e[g + d] = e[f + d]
          }++r
        }
      }
      if(0 < a) {
        t[r] = t[a];
        for(f = a * i, g = r * i, d = 0; d !== i; ++d) e[g + d] = e[f + d];
        ++r
      }
      return r !== t.length && (this.times = Ou.arraySlice(t, 0, r), this.values = Ou.arraySlice(e, 0, r * i)), this
    }
  }), qn.prototype = Object.assign(Object.create(Zn.prototype), {
    constructor: qn,
    ValueTypeName: "vector"
  }), Object.assign(Jn, {
    parse: function(t) {
      for(var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(Zn.parse(i[r]).scale(n));
      return new Jn(t.name, t.duration, e)
    },
    toJSON: function(t) {
      for(var e = [], i = t.tracks, n = {
          name: t.name,
          duration: t.duration,
          tracks: e,
          uuid: t.uuid
        }, r = 0, a = i.length; r !== a; ++r) e.push(Zn.toJSON(i[r]));
      return n
    },
    CreateFromMorphTargetSequence: function(t, e, i, n) {
      for(var r = e.length, a = [], s = 0; s < r; s++) {
        var o = [],
          c = [];
        o.push((s + r - 1) % r, s, (s + 1) % r), c.push(0, 1, 0);
        var h = Ou.getKeyframeOrder(o);
        o = Ou.sortedArray(o, 1, h), c = Ou.sortedArray(c, 1, h), n || 0 !== o[0] || (o.push(r), c.push(c[0])), a.push(new Vn(".morphTargetInfluences[" + e[s].name + "]", o, c).scale(1 / i))
      }
      return new Jn(t, -1, a)
    },
    findByName: function(t, e) {
      var i = t;
      if(!Array.isArray(t)) {
        var n = t;
        i = n.geometry && n.geometry.animations || n.animations
      }
      for(var r = 0; r < i.length; r++)
        if(i[r].name === e) return i[r];
      return null
    },
    CreateClipsFromMorphTargetSequences: function(t, e, i) {
      for(var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, s = t.length; a < s; a++) {
        var o = t[a],
          c = o.name.match(r);
        if(c && 1 < c.length) {
          var h = n[l = c[1]];
          h || (n[l] = h = []), h.push(o)
        }
      }
      var u = [];
      for(var l in n) u.push(Jn.CreateFromMorphTargetSequence(l, n[l], e, i));
      return u
    },
    parseAnimation: function(t, e) {
      if(!t) return null;
      for(var i = function(t, e, i, n, r) {
          if(0 !== i.length) {
            var a = [],
              s = [];
            Ou.flattenJSON(i, a, s, n), 0 !== a.length && r.push(new t(e, a, s))
          }
        }, n = [], r = t.name || "default", a = t.length || -1, s = t.fps || 30, o = t.hierarchy || [], c = 0; c < o.length; c++) {
        var h = o[c].keys;
        if(h && 0 !== h.length)
          if(h[0].morphTargets) {
            for(var u = {}, l = 0; l < h.length; l++)
              if(h[l].morphTargets)
                for(var d = 0; d < h[l].morphTargets.length; d++) u[h[l].morphTargets[d]] = -1;
            for(var p in u) {
              var f = [],
                g = [];
              for(d = 0; d !== h[l].morphTargets.length; ++d) {
                var m = h[l];
                f.push(m.time), g.push(m.morphTarget === p ? 1 : 0)
              }
              n.push(new Vn(".morphTargetInfluence[" + p + "]", f, g))
            }
            a = u.length * (s || 1)
          } else {
            var M = ".bones[" + e[c].name + "]";
            i(qn, M + ".position", h, "pos", n), i(Gn, M + ".quaternion", h, "rot", n), i(qn, M + ".scale", h, "scl", n)
          }
      }
      return 0 === n.length ? null : new Jn(r, a, n)
    }
  }), Object.assign(Jn.prototype, {
    resetDuration: function() {
      for(var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
        var n = this.tracks[e];
        t = Math.max(t, n.times[n.times.length - 1])
      }
      this.duration = t
    },
    trim: function() {
      for(var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
      return this
    },
    optimize: function() {
      for(var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
      return this
    }
  }), Object.assign(Kn.prototype, {
    load: function(t, e, i, n) {
      var r = this;
      new cn(r.manager).load(t, function(t) {
        e(r.parse(JSON.parse(t)))
      }, i, n)
    },
    setTextures: function(t) {
      this.textures = t
    },
    parse: function(t) {
      function e(t) {
        return i[t], i[t]
      }
      var i = this.textures,
        n = new Tu[t.type];
      if(void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && n.specular.setHex(t.specular), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearCoat && (n.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (n.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (n.uniforms = t.uniforms), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (n.vertexColors = t.vertexColors), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.side && (n.side = t.side), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (n.skinning = t.skinning), void 0 !== t.morphTargets && (n.morphTargets = t.morphTargets), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.shading && (n.flatShading = 1 === t.shading), void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = e(t.map)), void 0 !== t.alphaMap && (n.alphaMap = e(t.alphaMap), n.transparent = !0), void 0 !== t.bumpMap && (n.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = e(t.normalMap)), void 0 !== t.normalScale) {
        var r = t.normalScale;
        !1 === Array.isArray(r) && (r = [r, r]), n.normalScale = (new tt).fromArray(r)
      }
      return void 0 !== t.displacementMap && (n.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = e(t.specularMap)), void 0 !== t.envMap && (n.envMap = e(t.envMap)), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.lightMap && (n.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = e(t.gradientMap)), n
    }
  }), Object.assign($n.prototype, {
    load: function(t, e, i, n) {
      var r = this;
      new cn(r.manager).load(t, function(t) {
        e(r.parse(JSON.parse(t)))
      }, i, n)
    },
    parse: function(t) {
      var e = new B,
        i = t.data.index;
      if(void 0 !== i) {
        var n = new ku[i.type](i.array);
        e.setIndex(new x(n, 1))
      }
      var r = t.data.attributes;
      for(var a in r) {
        var s = r[a];
        n = new ku[s.type](s.array);
        e.addAttribute(a, new x(n, s.itemSize, s.normalized))
      }
      var o = t.data.groups || t.data.drawcalls || t.data.offsets;
      if(void 0 !== o)
        for(var c = 0, h = o.length; c !== h; ++c) {
          var u = o[c];
          e.addGroup(u.start, u.count, u.materialIndex)
        }
      var l = t.data.boundingSphere;
      if(void 0 !== l) {
        var d = new wt;
        void 0 !== l.center && d.fromArray(l.center), e.boundingSphere = new p(d, l.radius)
      }
      return e
    }
  });
  var zu, Pu, Uu, Bu, ku = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };
  tr.Handlers = {
    handlers: [],
    add: function(t, e) {
      this.handlers.push(t, e)
    },
    get: function(t) {
      for(var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
        var r = e[i],
          a = e[i + 1];
        if(r.test(t)) return a
      }
      return null
    }
  }, Object.assign(tr.prototype, {
    crossOrigin: void 0,
    onLoadStart: function() {},
    onLoadProgress: function() {},
    onLoadComplete: function() {},
    initMaterials: function(t, e, i) {
      for(var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
      return n
    },
    createMaterial: (zu = {
      NoBlending: ba,
      NormalBlending: Sa,
      AdditiveBlending: ja,
      SubtractiveBlending: Ca,
      MultiplyBlending: Oa,
      CustomBlending: za
    }, Pu = new O, Uu = new un, Bu = new Kn, function(t, h, u) {
      function e(t, e, i, n, r) {
        var a, s = h + t,
          o = tr.Handlers.get(s);
        a = null !== o ? o.load(s) : (Uu.setCrossOrigin(u), Uu.load(s)), void 0 !== e && (a.repeat.fromArray(e), 1 !== e[0] && (a.wrapS = xs), 1 !== e[1] && (a.wrapT = xs)), void 0 !== i && a.offset.fromArray(i), void 0 !== n && ("repeat" === n[0] && (a.wrapS = xs), "mirror" === n[0] && (a.wrapS = Ns), "repeat" === n[1] && (a.wrapT = xs), "mirror" === n[1] && (a.wrapT = Ns)), void 0 !== r && (a.anisotropy = r);
        var c = So.generateUUID();
        return l[c] = a, c
      }
      var l = {},
        i = {
          uuid: So.generateUUID(),
          type: "MeshLambertMaterial"
        };
      for(var n in t) {
        var r = t[n];
        switch(n) {
          case "DbgColor":
          case "DbgIndex":
          case "opticalDensity":
          case "illumination":
            break;
          case "DbgName":
            i.name = r;
            break;
          case "blending":
            i.blending = zu[r];
            break;
          case "colorAmbient":
          case "mapAmbient":
            break;
          case "colorDiffuse":
            i.color = Pu.fromArray(r).getHex();
            break;
          case "colorSpecular":
            i.specular = Pu.fromArray(r).getHex();
            break;
          case "colorEmissive":
            i.emissive = Pu.fromArray(r).getHex();
            break;
          case "specularCoef":
            i.shininess = r;
            break;
          case "shading":
            "basic" === r.toLowerCase() && (i.type = "MeshBasicMaterial"), "phong" === r.toLowerCase() && (i.type = "MeshPhongMaterial"), "standard" === r.toLowerCase() && (i.type = "MeshStandardMaterial");
            break;
          case "mapDiffuse":
            i.map = e(r, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy);
            break;
          case "mapDiffuseRepeat":
          case "mapDiffuseOffset":
          case "mapDiffuseWrap":
          case "mapDiffuseAnisotropy":
            break;
          case "mapEmissive":
            i.emissiveMap = e(r, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy);
            break;
          case "mapEmissiveRepeat":
          case "mapEmissiveOffset":
          case "mapEmissiveWrap":
          case "mapEmissiveAnisotropy":
            break;
          case "mapLight":
            i.lightMap = e(r, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy);
            break;
          case "mapLightRepeat":
          case "mapLightOffset":
          case "mapLightWrap":
          case "mapLightAnisotropy":
            break;
          case "mapAO":
            i.aoMap = e(r, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy);
            break;
          case "mapAORepeat":
          case "mapAOOffset":
          case "mapAOWrap":
          case "mapAOAnisotropy":
            break;
          case "mapBump":
            i.bumpMap = e(r, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy);
            break;
          case "mapBumpScale":
            i.bumpScale = r;
            break;
          case "mapBumpRepeat":
          case "mapBumpOffset":
          case "mapBumpWrap":
          case "mapBumpAnisotropy":
            break;
          case "mapNormal":
            i.normalMap = e(r, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy);
            break;
          case "mapNormalFactor":
            i.normalScale = r;
            break;
          case "mapNormalRepeat":
          case "mapNormalOffset":
          case "mapNormalWrap":
          case "mapNormalAnisotropy":
            break;
          case "mapSpecular":
            i.specularMap = e(r, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy);
            break;
          case "mapSpecularRepeat":
          case "mapSpecularOffset":
          case "mapSpecularWrap":
          case "mapSpecularAnisotropy":
            break;
          case "mapMetalness":
            i.metalnessMap = e(r, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy);
            break;
          case "mapMetalnessRepeat":
          case "mapMetalnessOffset":
          case "mapMetalnessWrap":
          case "mapMetalnessAnisotropy":
            break;
          case "mapRoughness":
            i.roughnessMap = e(r, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy);
            break;
          case "mapRoughnessRepeat":
          case "mapRoughnessOffset":
          case "mapRoughnessWrap":
          case "mapRoughnessAnisotropy":
            break;
          case "mapAlpha":
            i.alphaMap = e(r, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy);
            break;
          case "mapAlphaRepeat":
          case "mapAlphaOffset":
          case "mapAlphaWrap":
          case "mapAlphaAnisotropy":
            break;
          case "flipSided":
            i.side = Ea;
            break;
          case "doubleSided":
            i.side = Ia;
            break;
          case "transparency":
            i.opacity = r;
            break;
          case "depthTest":
          case "depthWrite":
          case "colorWrite":
          case "opacity":
          case "reflectivity":
          case "transparent":
          case "visible":
          case "wireframe":
            i[n] = r;
            break;
          case "vertexColors":
            !0 === r && (i.vertexColors = 2), "face" === r && (i.vertexColors = 1)
        }
      }
      return "MeshBasicMaterial" === i.type && delete i.emissive, "MeshPhongMaterial" !== i.type && delete i.specular, i.opacity < 1 && (i.transparent = !0), Bu.setTextures(l), Bu.parse(i)
    })
  });
  var Ru = function(t) {
    var e = t.lastIndexOf("/");
    return -1 === e ? "./" : t.substr(0, e + 1)
  };
  Object.assign(er.prototype, {
    load: function(t, a, e, i) {
      var s = this,
        o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Ru(t),
        n = new cn(this.manager);
      n.setWithCredentials(this.withCredentials), n.load(t, function(t) {
        var e = JSON.parse(t),
          i = e.metadata;
        if(void 0 !== i) {
          var n = i.type;
          if(void 0 !== n && "object" === n.toLowerCase()) return
        }
        var r = s.parse(e, o);
        a(r.geometry, r.materials)
      }, e, i)
    },
    setTexturePath: function(t) {
      this.texturePath = t
    },
    parse: function(t, e) {
      void 0 !== t.data && (t = t.data), void 0 !== t.scale ? t.scale = 1 / t.scale : t.scale = 1;
      var i = new y;
      return function(t, e) {
          function i(t, e) {
            return t & 1 << e
          }
          var n, r, a, s, o, c, h, u, l, d, p, f, g, m, M, v, y, A, x, w, N, D, T, L, E, I = t.faces,
            _ = t.vertices,
            b = t.normals,
            S = t.colors,
            j = t.scale,
            C = 0;
          if(void 0 !== t.uvs) {
            for(n = 0; n < t.uvs.length; n++) t.uvs[n].length && C++;
            for(n = 0; n < C; n++) e.faceVertexUvs[n] = []
          }
          for(s = 0, o = _.length; s < o;)(A = new wt).x = _[s++] * j, A.y = _[s++] * j, A.z = _[s++] * j, e.vertices.push(A);
          for(s = 0, o = I.length; s < o;)
            if(p = i(d = I[s++], 0), f = i(d, 1), g = i(d, 3), m = i(d, 4), M = i(d, 5), v = i(d, 6), y = i(d, 7), p) {
              if((w = new P).a = I[s], w.b = I[s + 1], w.c = I[s + 3], (N = new P).a = I[s + 1], N.b = I[s + 2], N.c = I[s + 3], s += 4, f && (l = I[s++], w.materialIndex = l, N.materialIndex = l), a = e.faces.length, g)
                for(n = 0; n < C; n++)
                  for(L = t.uvs[n], e.faceVertexUvs[n][a] = [], e.faceVertexUvs[n][a + 1] = [], r = 0; r < 4; r++) E = new tt(L[2 * (u = I[s++])], L[2 * u + 1]), 2 !== r && e.faceVertexUvs[n][a].push(E), 0 !== r && e.faceVertexUvs[n][a + 1].push(E);
              if(m && (h = 3 * I[s++], w.normal.set(b[h++], b[h++], b[h]), N.normal.copy(w.normal)), M)
                for(n = 0; n < 4; n++) h = 3 * I[s++], T = new wt(b[h++], b[h++], b[h]), 2 !== n && w.vertexNormals.push(T), 0 !== n && N.vertexNormals.push(T);
              if(v && (D = S[c = I[s++]], w.color.setHex(D), N.color.setHex(D)), y)
                for(n = 0; n < 4; n++) D = S[c = I[s++]], 2 !== n && w.vertexColors.push(new O(D)), 0 !== n && N.vertexColors.push(new O(D));
              e.faces.push(w), e.faces.push(N)
            } else {
              if((x = new P).a = I[s++], x.b = I[s++], x.c = I[s++], f && (l = I[s++], x.materialIndex = l), a = e.faces.length, g)
                for(n = 0; n < C; n++)
                  for(L = t.uvs[n], e.faceVertexUvs[n][a] = [], r = 0; r < 3; r++) E = new tt(L[2 * (u = I[s++])], L[2 * u + 1]), e.faceVertexUvs[n][a].push(E);
              if(m && (h = 3 * I[s++], x.normal.set(b[h++], b[h++], b[h])), M)
                for(n = 0; n < 3; n++) h = 3 * I[s++], T = new wt(b[h++], b[h++], b[h]), x.vertexNormals.push(T);
              if(v && (c = I[s++], x.color.setHex(S[c])), y)
                for(n = 0; n < 3; n++) c = I[s++], x.vertexColors.push(new O(S[c]));
              e.faces.push(x)
            }
        }(t, i),
        function(t, e) {
          var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
          if(t.skinWeights)
            for(var n = 0, r = t.skinWeights.length; n < r; n += i) {
              var a = t.skinWeights[n],
                s = 1 < i ? t.skinWeights[n + 1] : 0,
                o = 2 < i ? t.skinWeights[n + 2] : 0,
                c = 3 < i ? t.skinWeights[n + 3] : 0;
              e.skinWeights.push(new Nt(a, s, o, c))
            }
          if(t.skinIndices)
            for(n = 0, r = t.skinIndices.length; n < r; n += i) {
              var h = t.skinIndices[n],
                u = 1 < i ? t.skinIndices[n + 1] : 0,
                l = 2 < i ? t.skinIndices[n + 2] : 0,
                d = 3 < i ? t.skinIndices[n + 3] : 0;
              e.skinIndices.push(new Nt(h, u, l, d))
            }
          e.bones = t.bones, e.bones && 0 < e.bones.length && (e.skinWeights.length !== e.skinIndices.length || (e.skinIndices.length, e.vertices.length))
        }(t, i),
        function(t, e) {
          var i = t.scale;
          if(void 0 !== t.morphTargets)
            for(var n = 0, r = t.morphTargets.length; n < r; n++) {
              e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e.morphTargets[n].vertices = [];
              for(var a = e.morphTargets[n].vertices, s = t.morphTargets[n].vertices, o = 0, c = s.length; o < c; o += 3) {
                var h = new wt;
                h.x = s[o] * i, h.y = s[o + 1] * i, h.z = s[o + 2] * i, a.push(h)
              }
            }
          if(void 0 !== t.morphColors && 0 < t.morphColors.length) {
            var u = e.faces,
              l = t.morphColors[0].colors;
            for(n = 0, r = u.length; n < r; n++) u[n].color.fromArray(l, 3 * n)
          }
        }(t, i),
        function(t, e) {
          var i = [],
            n = [];
          void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
          for(var r = 0; r < n.length; r++) {
            var a = Jn.parseAnimation(n[r], e.bones);
            a && i.push(a)
          }
          if(e.morphTargets) {
            var s = Jn.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
            i = i.concat(s)
          }
          0 < i.length && (e.animations = i)
        }(t, i), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length ? {
          geometry: i
        } : {
          geometry: i,
          materials: tr.prototype.initMaterials(t.materials, e, this.crossOrigin)
        }
    }
  }), Object.assign(function(t) {
    this.manager = void 0 !== t ? t : Eu, this.texturePath = ""
  }.prototype, {
    load: function(t, n, e, r) {
      "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
      var a = this;
      new cn(a.manager).load(t, function(t) {
        var e = null;
        try {
          e = JSON.parse(t)
        } catch (t) {
          return void(void 0 !== r && r(t))
        }
        var i = e.metadata;
        void 0 !== i && void 0 !== i.type && "geometry" !== i.type.toLowerCase() && a.parse(e, n)
      }, e, r)
    },
    setTexturePath: function(t) {
      return this.texturePath = t, this
    },
    setCrossOrigin: function(t) {
      return this.crossOrigin = t, this
    },
    parse: function(t, e) {
      var i = this.parseShape(t.shapes),
        n = this.parseGeometries(t.geometries, i),
        r = this.parseImages(t.images, function() {
          void 0 !== e && e(o)
        }),
        a = this.parseTextures(t.textures, r),
        s = this.parseMaterials(t.materials, a),
        o = this.parseObject(t.object, n, s);
      return t.animations && (o.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(o), o
    },
    parseShape: function(t) {
      var e = {};
      if(void 0 !== t)
        for(var i = 0, n = t.length; i < n; i++) {
          var r = (new In).fromJSON(t[i]);
          e[r.uuid] = r
        }
      return e
    },
    parseGeometries: function(t, e) {
      var i = {};
      if(void 0 !== t)
        for(var n = new er, r = new $n, a = 0, s = t.length; a < s; a++) {
          var o, c = t[a];
          switch(c.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              o = new Du[c.type](c.width, c.height, c.widthSegments, c.heightSegments);
              break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              o = new Du[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments);
              break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              o = new Du[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength);
              break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              o = new Du[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
              break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              o = new Du[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
              break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              o = new Du[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength);
              break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              o = new Du[c.type](c.radius, c.detail);
              break;
            case "RingGeometry":
            case "RingBufferGeometry":
              o = new Du[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength);
              break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              o = new Du[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc);
              break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              o = new Du[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q);
              break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              o = new Du[c.type](c.points, c.segments, c.phiStart, c.phiLength);
              break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              o = new Du[c.type](c.vertices, c.indices, c.radius, c.details);
              break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              for(var h = [], u = 0, l = c.shapes.length; u < l; u++) {
                var d = e[c.shapes[u]];
                h.push(d)
              }
              o = new Du[c.type](h, c.curveSegments);
              break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              for(h = [], u = 0, l = c.shapes.length; u < l; u++) {
                d = e[c.shapes[u]];
                h.push(d)
              }
              var p = c.options.extrudePath;
              void 0 !== p && (c.options.extrudePath = (new Cu[p.type]).fromJSON(p)), o = new Du[c.type](h, c.options);
              break;
            case "BufferGeometry":
              o = r.parse(c);
              break;
            case "Geometry":
              o = n.parse(c, this.texturePath).geometry;
              break;
            default:
              continue
          }
          o.uuid = c.uuid, void 0 !== c.name && (o.name = c.name), !0 === o.isBufferGeometry && void 0 !== c.userData && (o.userData = c.userData), i[c.uuid] = o
        }
      return i
    },
    parseMaterials: function(t, e) {
      var i = {};
      if(void 0 !== t) {
        var n = new Kn;
        n.setTextures(e);
        for(var r = 0, a = t.length; r < a; r++) {
          var s = t[r];
          if("MultiMaterial" === s.type) {
            for(var o = [], c = 0; c < s.materials.length; c++) o.push(n.parse(s.materials[c]));
            i[s.uuid] = o
          } else i[s.uuid] = n.parse(s)
        }
      }
      return i
    },
    parseAnimations: function(t) {
      for(var e = [], i = 0; i < t.length; i++) {
        var n = t[i],
          r = Jn.parse(n);
        void 0 !== n.uuid && (r.uuid = n.uuid), e.push(r)
      }
      return e
    },
    parseImages: function(t, e) {
      function i(t) {
        return n.manager.itemStart(t), a.load(t, function() {
          n.manager.itemEnd(t)
        }, void 0, function() {
          n.manager.itemEnd(t), n.manager.itemError(t)
        })
      }
      var n = this,
        r = {};
      if(void 0 !== t && 0 < t.length) {
        var a = new hn(new on(e));
        a.setCrossOrigin(this.crossOrigin);
        for(var s = 0, o = t.length; s < o; s++) {
          var c = t[s],
            h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
          r[c.uuid] = i(h)
        }
      }
      return r
    },
    parseTextures: function(t, e) {
      function i(t, e) {
        return "number" == typeof t ? t : e[t]
      }
      var n = {};
      if(void 0 !== t)
        for(var r = 0, a = t.length; r < a; r++) {
          var s = t[r];
          s.image, e[s.image];
          var o = new d(e[s.image]);
          o.needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = i(s.mapping, Qu)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = i(s.wrap[0], Gu), o.wrapT = i(s.wrap[1], Gu)), void 0 !== s.format && (o.format = s.format), void 0 !== s.minFilter && (o.minFilter = i(s.minFilter, Yu)), void 0 !== s.magFilter && (o.magFilter = i(s.magFilter, Yu)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), n[s.uuid] = o
        }
      return n
    },
    parseObject: function(t, e, a) {
      function i(t) {
        return e[t], e[t]
      }

      function n(t) {
        if(void 0 !== t) {
          if(Array.isArray(t)) {
            for(var e = [], i = 0, n = t.length; i < n; i++) {
              var r = t[i];
              a[r], e.push(a[r])
            }
            return e
          }
          return a[t], a[t]
        }
      }
      var r;
      switch(t.type) {
        case "Scene":
          r = new Le, void 0 !== t.background && Number.isInteger(t.background) && (r.background = new O(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? r.fog = new Te(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (r.fog = new De(t.fog.color, t.fog.density)));
          break;
        case "PerspectiveCamera":
          r = new ye(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (r.focus = t.focus), void 0 !== t.zoom && (r.zoom = t.zoom), void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset), void 0 !== t.view && (r.view = Object.assign({}, t.view));
          break;
        case "OrthographicCamera":
          r = new m(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (r.zoom = t.zoom), void 0 !== t.view && (r.view = Object.assign({}, t.view));
          break;
        case "AmbientLight":
          r = new Un(t.color, t.intensity);
          break;
        case "DirectionalLight":
          r = new Pn(t.color, t.intensity);
          break;
        case "PointLight":
          r = new On(t.color, t.intensity, t.distance, t.decay);
          break;
        case "RectAreaLight":
          r = new Bn(t.color, t.intensity, t.width, t.height);
          break;
        case "SpotLight":
          r = new Cn(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
          break;
        case "HemisphereLight":
          r = new bn(t.color, t.groundColor, t.intensity);
          break;
        case "SkinnedMesh":
        case "Mesh":
          var s = i(t.geometry),
            o = n(t.material);
          r = s.bones && 0 < s.bones.length ? new je(s, o) : new G(s, o);
          break;
        case "LOD":
          r = new _e;
          break;
        case "Line":
          r = new Oe(i(t.geometry), n(t.material), t.mode);
          break;
        case "LineLoop":
          r = new Pe(i(t.geometry), n(t.material));
          break;
        case "LineSegments":
          r = new ze(i(t.geometry), n(t.material));
          break;
        case "PointCloud":
        case "Points":
          r = new Be(i(t.geometry), n(t.material));
          break;
        case "Sprite":
          r = new Ie(n(t.material));
          break;
        case "Group":
          r = new ke;
          break;
        default:
          r = new g
      }
      if(r.uuid = t.uuid, void 0 !== t.name && (r.name = t.name), void 0 !== t.matrix ? (r.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (r.matrixAutoUpdate = t.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== t.position && r.position.fromArray(t.position), void 0 !== t.rotation && r.rotation.fromArray(t.rotation), void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion), void 0 !== t.scale && r.scale.fromArray(t.scale)), void 0 !== t.castShadow && (r.castShadow = t.castShadow), void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && r.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (r.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder), void 0 !== t.userData && (r.userData = t.userData), void 0 !== t.children)
        for(var c = t.children, h = 0; h < c.length; h++) r.add(this.parseObject(c[h], e, a));
      if("LOD" === t.type)
        for(var u = t.levels, l = 0; l < u.length; l++) {
          var d = u[l],
            p = r.getObjectByProperty("uuid", d.object);
          void 0 !== p && r.addLevel(p, d.distance)
        }
      return r
    }
  });
  var Fu, Qu = {
      UVMapping: 300,
      CubeReflectionMapping: fs,
      CubeRefractionMapping: gs,
      EquirectangularReflectionMapping: ms,
      EquirectangularRefractionMapping: Ms,
      SphericalReflectionMapping: vs,
      CubeUVReflectionMapping: ys,
      CubeUVRefractionMapping: As
    },
    Gu = {
      RepeatWrapping: xs,
      ClampToEdgeWrapping: ws,
      MirroredRepeatWrapping: Ns
    },
    Yu = {
      NearestFilter: Ds,
      NearestMipMapNearestFilter: Ts,
      NearestMipMapLinearFilter: Ls,
      LinearFilter: Es,
      LinearMipMapNearestFilter: Is,
      LinearMipMapLinearFilter: _s
    };
  Object.assign(ir.prototype, {
    moveTo: function(t, e) {
      this.currentPath = new En, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
    },
    lineTo: function(t, e) {
      this.currentPath.lineTo(t, e)
    },
    quadraticCurveTo: function(t, e, i, n) {
      this.currentPath.quadraticCurveTo(t, e, i, n)
    },
    bezierCurveTo: function(t, e, i, n, r, a) {
      this.currentPath.bezierCurveTo(t, e, i, n, r, a)
    },
    splineThru: function(t) {
      this.currentPath.splineThru(t)
    },
    toShapes: function(t, e) {
      function i(t) {
        for(var e = [], i = 0, n = t.length; i < n; i++) {
          var r = t[i],
            a = new In;
          a.curves = r.curves, e.push(a)
        }
        return e
      }

      function n(t, e) {
        for(var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
          var s = e[r],
            o = e[a],
            c = o.x - s.x,
            h = o.y - s.y;
          if(Math.abs(h) > Number.EPSILON) {
            if(h < 0 && (s = e[a], c = -c, o = e[r], h = -h), t.y < s.y || t.y > o.y) continue;
            if(t.y === s.y) {
              if(t.x === s.x) return !0
            } else {
              var u = h * (t.x - s.x) - c * (t.y - s.y);
              if(0 == u) return !0;
              if(u < 0) continue;
              n = !n
            }
          } else {
            if(t.y !== s.y) continue;
            if(o.x <= t.x && t.x <= s.x || s.x <= t.x && t.x <= o.x) return !0
          }
        }
        return n
      }
      var r = wu.isClockWise,
        a = this.subPaths;
      if(0 === a.length) return [];
      if(!0 === e) return i(a);
      var s, o, c, h = [];
      if(1 === a.length) return o = a[0], (c = new In).curves = o.curves, h.push(c), h;
      var u = !r(a[0].getPoints());
      u = t ? !u : u;
      var l, d, p = [],
        f = [],
        g = [],
        m = 0;
      f[m] = void 0, g[m] = [];
      for(var M = 0, v = a.length; M < v; M++) s = r(l = (o = a[M]).getPoints()), (s = t ? !s : s) ? (!u && f[m] && m++, f[m] = {
        s: new In,
        p: l
      }, f[m].s.curves = o.curves, u && m++, g[m] = []) : g[m].push({
        h: o,
        p: l[0]
      });
      if(!f[0]) return i(a);
      if(1 < f.length) {
        for(var y = !1, A = [], x = 0, w = f.length; x < w; x++) p[x] = [];
        for(x = 0, w = f.length; x < w; x++)
          for(var N = g[x], D = 0; D < N.length; D++) {
            for(var T = N[D], L = !0, E = 0; E < f.length; E++) n(T.p, f[E].p) && (x !== E && A.push({
              froms: x,
              tos: E,
              hole: D
            }), L ? (L = !1, p[E].push(T)) : y = !0);
            L && p[x].push(T)
          }
        0 < A.length && (y || (g = p))
      }
      M = 0;
      for(var I = f.length; M < I; M++) {
        c = f[M].s, h.push(c);
        for(var _ = 0, b = (d = g[M]).length; _ < b; _++) c.holes.push(d[_].h)
      }
      return h
    }
  }), Object.assign(nr.prototype, {
    isFont: !0,
    generateShapes: function(t, e, i) {
      void 0 === e && (e = 100), void 0 === i && (i = 4);
      for(var n = [], r = function(t, e, i, n) {
          for(var r = Array.from ? Array.from(t) : String(t).split(""), a = e / n.resolution, s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * a, o = [], c = 0, h = 0, u = 0; u < r.length; u++) {
            var l = r[u];
            if("\n" === l) c = 0, h -= s;
            else {
              var d = rr(l, i, a, c, h, n);
              c += d.offsetX, o.push(d.path)
            }
          }
          return o
        }(t, e, i, this.data), a = 0, s = r.length; a < s; a++) Array.prototype.push.apply(n, r[a].toShapes());
      return n
    }
  }), Object.assign(function(t) {
    this.manager = void 0 !== t ? t : Eu
  }.prototype, {
    load: function(t, n, e, i) {
      var r = this,
        a = new cn(this.manager);
      a.setPath(this.path), a.load(t, function(e) {
        var i;
        try {
          i = JSON.parse(e)
        } catch (t) {
          i = JSON.parse(e.substring(65, e.length - 2))
        }
        var t = r.parse(i);
        n && n(t)
      }, e, i)
    },
    parse: function(t) {
      return new nr(t)
    },
    setPath: function(t) {
      return this.path = t, this
    }
  });
  var Vu, Wu, Hu, Xu, Zu, qu, Ju, Ku, $u, tl, el, il, nl, rl, al, sl = function() {
    return void 0 === Fu && (Fu = new(window.AudioContext || window.webkitAudioContext)), Fu
  };
  Object.assign(ar.prototype, {
    load: function(t, e, i, n) {
      var r = new cn(this.manager);
      r.setResponseType("arraybuffer"), r.load(t, function(t) {
        sl().decodeAudioData(t, function(t) {
          e(t)
        })
      }, i, n)
    }
  }), Object.assign(function() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new ye, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ye, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
  }.prototype, {
    update: ($u = new At, tl = new At, function(t) {
      if(Vu !== this || Wu !== t.focus || Hu !== t.fov || Xu !== t.aspect * this.aspect || Zu !== t.near || qu !== t.far || Ju !== t.zoom || Ku !== this.eyeSep) {
        Vu = this, Wu = t.focus, Hu = t.fov, Xu = t.aspect * this.aspect, Zu = t.near, qu = t.far, Ju = t.zoom;
        var e, i, n = t.projectionMatrix.clone(),
          r = (Ku = this.eyeSep / 2) * Zu / Wu,
          a = Zu * Math.tan(So.DEG2RAD * Hu * .5) / Ju;
        tl.elements[12] = -Ku, $u.elements[12] = Ku, e = -a * Xu + r, i = a * Xu + r, n.elements[0] = 2 * Zu / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraL.projectionMatrix.copy(n), e = -a * Xu - r, i = a * Xu - r, n.elements[0] = 2 * Zu / (i - e), n.elements[8] = (i + e) / (i - e), this.cameraR.projectionMatrix.copy(n)
      }
      this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(tl), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply($u)
    })
  }), (sr.prototype = Object.create(g.prototype)).constructor = sr, or.prototype = Object.assign(Object.create(g.prototype), {
    constructor: or,
    getInput: function() {
      return this.gain
    },
    removeFilter: function() {
      null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
    },
    getFilter: function() {
      return this.filter
    },
    setFilter: function(t) {
      null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
    },
    getMasterVolume: function() {
      return this.gain.gain.value
    },
    setMasterVolume: function(t) {
      this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01)
    },
    updateMatrixWorld: (el = new wt, il = new W, nl = new wt, rl = new wt, function(t) {
      g.prototype.updateMatrixWorld.call(this, t);
      var e = this.context.listener,
        i = this.up;
      this.matrixWorld.decompose(el, il, nl), rl.set(0, 0, -1).applyQuaternion(il), e.positionX ? (e.positionX.setValueAtTime(el.x, this.context.currentTime), e.positionY.setValueAtTime(el.y, this.context.currentTime), e.positionZ.setValueAtTime(el.z, this.context.currentTime), e.forwardX.setValueAtTime(rl.x, this.context.currentTime), e.forwardY.setValueAtTime(rl.y, this.context.currentTime), e.forwardZ.setValueAtTime(rl.z, this.context.currentTime), e.upX.setValueAtTime(i.x, this.context.currentTime), e.upY.setValueAtTime(i.y, this.context.currentTime), e.upZ.setValueAtTime(i.z, this.context.currentTime)) : (e.setPosition(el.x, el.y, el.z), e.setOrientation(rl.x, rl.y, rl.z, i.x, i.y, i.z))
    })
  }), cr.prototype = Object.assign(Object.create(g.prototype), {
    constructor: cr,
    getOutput: function() {
      return this.gain
    },
    setNodeSource: function(t) {
      return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
    },
    setMediaElementSource: function(t) {
      return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
    },
    setBuffer: function(t) {
      return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
    },
    play: function() {
      if(!0 !== this.isPlaying && !1 !== this.hasPlaybackControl) {
        var t = this.context.createBufferSource();
        return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect()
      }
    },
    pause: function() {
      if(!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this
    },
    stop: function() {
      if(!1 !== this.hasPlaybackControl) return this.source.stop(), this.offset = 0, this.isPlaying = !1, this
    },
    connect: function() {
      if(0 < this.filters.length) {
        this.source.connect(this.filters[0]);
        for(var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
        this.filters[this.filters.length - 1].connect(this.getOutput())
      } else this.source.connect(this.getOutput());
      return this
    },
    disconnect: function() {
      if(0 < this.filters.length) {
        this.source.disconnect(this.filters[0]);
        for(var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput())
      } else this.source.disconnect(this.getOutput());
      return this
    },
    getFilters: function() {
      return this.filters
    },
    setFilters: function(t) {
      return t = t || [], !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
    },
    getFilter: function() {
      return this.getFilters()[0]
    },
    setFilter: function(t) {
      return this.setFilters(t ? [t] : [])
    },
    setPlaybackRate: function(t) {
      if(!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this
    },
    getPlaybackRate: function() {
      return this.playbackRate
    },
    onEnded: function() {
      this.isPlaying = !1
    },
    getLoop: function() {
      return !1 !== this.hasPlaybackControl && this.loop
    },
    setLoop: function(t) {
      if(!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this
    },
    getVolume: function() {
      return this.gain.gain.value
    },
    setVolume: function(t) {
      return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
    }
  }), hr.prototype = Object.assign(Object.create(cr.prototype), {
    constructor: hr,
    getOutput: function() {
      return this.panner
    },
    getRefDistance: function() {
      return this.panner.refDistance
    },
    setRefDistance: function(t) {
      this.panner.refDistance = t
    },
    getRolloffFactor: function() {
      return this.panner.rolloffFactor
    },
    setRolloffFactor: function(t) {
      this.panner.rolloffFactor = t
    },
    getDistanceModel: function() {
      return this.panner.distanceModel
    },
    setDistanceModel: function(t) {
      this.panner.distanceModel = t
    },
    getMaxDistance: function() {
      return this.panner.maxDistance
    },
    setMaxDistance: function(t) {
      this.panner.maxDistance = t
    },
    updateMatrixWorld: (al = new wt, function(t) {
      g.prototype.updateMatrixWorld.call(this, t), al.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(al.x, al.y, al.z)
    })
  }), Object.assign(ur.prototype, {
    getFrequencyData: function() {
      return this.analyser.getByteFrequencyData(this.data), this.data
    },
    getAverageFrequency: function() {
      for(var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
      return t / e.length
    }
  }), Object.assign(lr.prototype, {
    accumulate: function(t, e) {
      var i = this.buffer,
        n = this.valueSize,
        r = t * n + n,
        a = this.cumulativeWeight;
      if(0 === a) {
        for(var s = 0; s !== n; ++s) i[r + s] = i[s];
        a = e
      } else {
        var o = e / (a += e);
        this._mixBufferRegion(i, r, 0, o, n)
      }
      this.cumulativeWeight = a
    },
    apply: function(t) {
      var e = this.valueSize,
        i = this.buffer,
        n = t * e + e,
        r = this.cumulativeWeight,
        a = this.binding;
      if(this.cumulativeWeight = 0, r < 1) {
        var s = 3 * e;
        this._mixBufferRegion(i, n, s, 1 - r, e)
      }
      for(var o = e, c = e + e; o !== c; ++o)
        if(i[o] !== i[o + e]) {
          a.setValue(i, n);
          break
        }
    },
    saveOriginalState: function() {
      var t = this.binding,
        e = this.buffer,
        i = this.valueSize,
        n = 3 * i;
      t.getValue(e, n);
      for(var r = i, a = n; r !== a; ++r) e[r] = e[n + r % i];
      this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
      var t = 3 * this.valueSize;
      this.binding.setValue(this.buffer, t)
    },
    _select: function(t, e, i, n, r) {
      if(.5 <= n)
        for(var a = 0; a !== r; ++a) t[e + a] = t[i + a]
    },
    _slerp: function(t, e, i, n) {
      W.slerpFlat(t, e, t, e, t, i, n)
    },
    _lerp: function(t, e, i, n, r) {
      for(var a = 1 - n, s = 0; s !== r; ++s) {
        var o = e + s;
        t[o] = t[o] * a + t[i + s] * n
      }
    }
  });
  var ol, cl, hl, ul, ll, dl, pl, fl, gl, ml, Ml, vl, yl, Al, xl, wl, Nl, Dl, Tl, Ll, El, Il, _l, bl, Sl, jl, Cl, Ol, zl, Pl, Ul, Bl, kl, Rl, Fl, Ql, Gl, Yl, Vl = "\\[\\]\\.:\\/";

  function Wl(t, e, i, n) {
    Ul.set(e, i, n).unproject(Bl);
    var r = Pl[t];
    if(void 0 !== r)
      for(var a = zl.getAttribute("position"), s = 0, o = r.length; s < o; s++) a.setXYZ(r[s], Ul.x, Ul.y, Ul.z)
  }
  Object.assign(dr.prototype, {
    getValue: function(t, e) {
      this.bind();
      var i = this._targetGroup.nCachedObjects_,
        n = this._bindings[i];
      void 0 !== n && n.getValue(t, e)
    },
    setValue: function(t, e) {
      for(var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
    },
    bind: function() {
      for(var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
    },
    unbind: function() {
      for(var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
    }
  }), Object.assign(pr, {
    Composite: dr,
    create: function(t, e, i) {
      return t && t.isAnimationObjectGroup ? new pr.Composite(t, e, i) : new pr(t, e, i)
    },
    sanitizeNodeName: (gl = new RegExp("[" + Vl + "]", "g"), function(t) {
      return t.replace(/\s/g, "_").replace(gl, "")
    }),
    parseTrackName: (ol = "[^" + Vl + "]", cl = "[^" + Vl.replace("\\.", "") + "]", hl = /((?:WC+[\/:])*)/.source.replace("WC", ol), ul = /(WCOD+)?/.source.replace("WCOD", cl), ll = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ol), dl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ol), pl = new RegExp("^" + hl + ul + ll + dl + "$"), fl = ["material", "materials", "bones"], function(t) {
      var e = pl.exec(t);
      if(!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
      var i = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6]
        },
        n = i.nodeName && i.nodeName.lastIndexOf(".");
      if(void 0 !== n && -1 !== n) {
        var r = i.nodeName.substring(n + 1); - 1 !== fl.indexOf(r) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = r)
      }
      if(null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
      return i
    }),
    findNode: function(t, r) {
      if(!r || "" === r || "root" === r || "." === r || -1 === r || r === t.name || r === t.uuid) return t;
      if(t.skeleton) {
        var e = t.skeleton.getBoneByName(r);
        if(void 0 !== e) return e
      }
      if(t.children) {
        var a = function(t) {
            for(var e = 0; e < t.length; e++) {
              var i = t[e];
              if(i.name === r || i.uuid === r) return i;
              var n = a(i.children);
              if(n) return n
            }
            return null
          },
          i = a(t.children);
        if(i) return i
      }
      return null
    }
  }), Object.assign(pr.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function(t, e) {
      t[e] = this.node[this.propertyName]
    }, function(t, e) {
      for(var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
    }, function(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex]
    }, function(t, e) {
      this.resolvedProperty.toArray(t, e)
    }],
    SetterByBindingTypeAndVersioning: [
      [function(t, e) {
        this.targetObject[this.propertyName] = t[e]
      }, function(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        for(var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
      }, function(t, e) {
        for(var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.needsUpdate = !0
      }, function(t, e) {
        for(var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e]
      }, function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }],
      [function(t, e) {
        this.resolvedProperty.fromArray(t, e)
      }, function(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
      }, function(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
      }]
    ],
    getValue: function(t, e) {
      this.bind(), this.getValue(t, e)
    },
    setValue: function(t, e) {
      this.bind(), this.setValue(t, e)
    },
    bind: function() {
      var t = this.node,
        e = this.parsedPath,
        i = e.objectName,
        n = e.propertyName,
        r = e.propertyIndex;
      if(t || (t = pr.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
        if(i) {
          var a = e.objectIndex;
          switch(i) {
            case "materials":
              if(!t.material) return;
              if(!t.material.materials) return;
              t = t.material.materials;
              break;
            case "bones":
              if(!t.skeleton) return;
              t = t.skeleton.bones;
              for(var s = 0; s < t.length; s++)
                if(t[s].name === a) {
                  a = s;
                  break
                } break;
            default:
              if(void 0 === t[i]) return;
              t = t[i]
          }
          if(void 0 !== a) {
            if(void 0 === t[a]) return;
            t = t[a]
          }
        }
        var o = t[n];
        if(void 0 !== o) {
          var c = this.Versioning.None;
          void 0 !== t.needsUpdate ? (c = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
          var h = this.BindingType.Direct;
          if(void 0 !== r) {
            if("morphTargetInfluences" === n) {
              if(!t.geometry) return;
              if(t.geometry.isBufferGeometry) {
                if(!t.geometry.morphAttributes) return;
                for(s = 0; s < this.node.geometry.morphAttributes.position.length; s++)
                  if(t.geometry.morphAttributes.position[s].name === r) {
                    r = s;
                    break
                  }
              } else {
                if(!t.geometry.morphTargets) return;
                for(s = 0; s < this.node.geometry.morphTargets.length; s++)
                  if(t.geometry.morphTargets[s].name === r) {
                    r = s;
                    break
                  }
              }
            }
            h = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r
          } else void 0 !== o.fromArray && void 0 !== o.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (h = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = n;
          this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][c]
        } else e.nodeName
      }
    },
    unbind: function() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
  }), Object.assign(pr.prototype, {
    _getValue_unbound: pr.prototype.getValue,
    _setValue_unbound: pr.prototype.setValue
  }), Object.assign(function() {
    this.uuid = So.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    var t = {};
    this._indicesByUUID = t;
    for(var e = 0, i = arguments.length; e !== i; ++e) t[arguments[e].uuid] = e;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    var n = this;
    this.stats = {
      objects: {
        get total() {
          return n._objects.length
        },
        get inUse() {
          return this.total - n.nCachedObjects_
        }
      },
      get bindingsPerObject() {
        return n._bindings.length
      }
    }
  }.prototype, {
    isAnimationObjectGroup: !0,
    add: function() {
      for(var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, s = this._bindings, o = s.length, c = 0, h = arguments.length; c !== h; ++c) {
        var u = arguments[c],
          l = u.uuid,
          d = n[l];
        if(void 0 === d) {
          d = e++, n[l] = d, t.push(u);
          for(var p = 0, f = o; p !== f; ++p) s[p].push(new pr(u, r[p], a[p]))
        } else if(d < i) {
          t[d];
          var g = --i,
            m = t[g];
          t[n[m.uuid] = d] = m, t[n[l] = g] = u;
          for(p = 0, f = o; p !== f; ++p) {
            var M = s[p],
              v = M[g],
              y = M[d];
            M[d] = v, void 0 === y && (y = new pr(u, r[p], a[p])), M[g] = y
          }
        } else t[d]
      }
      this.nCachedObjects_ = i
    },
    remove: function() {
      for(var t = this._objects, e = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, s = arguments.length; a !== s; ++a) {
        var o = arguments[a],
          c = o.uuid,
          h = i[c];
        if(void 0 !== h && e <= h) {
          var u = e++,
            l = t[u];
          t[i[l.uuid] = h] = l, t[i[c] = u] = o;
          for(var d = 0, p = r; d !== p; ++d) {
            var f = n[d],
              g = f[u],
              m = f[h];
            f[h] = g, f[u] = m
          }
        }
      }
      this.nCachedObjects_ = e
    },
    uncache: function() {
      for(var t = this._objects, e = t.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, s = 0, o = arguments.length; s !== o; ++s) {
        var c = arguments[s].uuid,
          h = n[c];
        if(void 0 !== h)
          if(delete n[c], h < i) {
            var u = --i,
              l = t[u],
              d = t[M = --e];
            t[n[l.uuid] = h] = l, t[n[d.uuid] = u] = d, t.pop();
            for(var p = 0, f = a; p !== f; ++p) {
              var g = (v = r[p])[u],
                m = v[M];
              v[h] = g, v[u] = m, v.pop()
            }
          } else {
            var M;
            t[n[(d = t[M = --e]).uuid] = h] = d, t.pop();
            for(p = 0, f = a; p !== f; ++p) {
              var v;
              (v = r[p])[h] = v[M], v.pop()
            }
          }
      }
      this.nCachedObjects_ = i
    },
    subscribe_: function(t, e) {
      var i = this._bindingsIndicesByPath,
        n = i[t],
        r = this._bindings;
      if(void 0 !== n) return r[n];
      var a = this._paths,
        s = this._parsedPaths,
        o = this._objects,
        c = o.length,
        h = this.nCachedObjects_,
        u = new Array(c);
      n = r.length, i[t] = n, a.push(t), s.push(e), r.push(u);
      for(var l = h, d = o.length; l !== d; ++l) {
        var p = o[l];
        u[l] = new pr(p, t, e)
      }
      return u
    },
    unsubscribe_: function(t) {
      var e = this._bindingsIndicesByPath,
        i = e[t];
      if(void 0 !== i) {
        var n = this._paths,
          r = this._parsedPaths,
          a = this._bindings,
          s = a.length - 1,
          o = a[s];
        a[e[t[s]] = i] = o, a.pop(), r[i] = r[s], r.pop(), n[i] = n[s], n.pop()
      }
    }
  }), Object.assign(fr.prototype, {
    play: function() {
      return this._mixer._activateAction(this), this
    },
    stop: function() {
      return this._mixer._deactivateAction(this), this.reset()
    },
    reset: function() {
      return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
    },
    isRunning: function() {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    },
    isScheduled: function() {
      return this._mixer._isActiveAction(this)
    },
    startAt: function(t) {
      return this._startTime = t, this
    },
    setLoop: function(t, e) {
      return this.loop = t, this.repetitions = e, this
    },
    setEffectiveWeight: function(t) {
      return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
    },
    getEffectiveWeight: function() {
      return this._effectiveWeight
    },
    fadeIn: function(t) {
      return this._scheduleFading(t, 0, 1)
    },
    fadeOut: function(t) {
      return this._scheduleFading(t, 1, 0)
    },
    crossFadeFrom: function(t, e, i) {
      if(t.fadeOut(e), this.fadeIn(e), i) {
        var n = this._clip.duration,
          r = t._clip.duration,
          a = r / n,
          s = n / r;
        t.warp(1, a, e), this.warp(s, 1, e)
      }
      return this
    },
    crossFadeTo: function(t, e, i) {
      return t.crossFadeFrom(this, e, i)
    },
    stopFading: function() {
      var t = this._weightInterpolant;
      return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    setEffectiveTimeScale: function(t) {
      return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
    },
    getEffectiveTimeScale: function() {
      return this._effectiveTimeScale
    },
    setDuration: function(t) {
      return this.timeScale = this._clip.duration / t, this.stopWarping()
    },
    syncWith: function(t) {
      return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
    },
    halt: function(t) {
      return this.warp(this._effectiveTimeScale, 0, t)
    },
    warp: function(t, e, i) {
      var n = this._mixer,
        r = n.time,
        a = this._timeScaleInterpolant,
        s = this.timeScale;
      null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
      var o = a.parameterPositions,
        c = a.sampleValues;
      return o[0] = r, o[1] = r + i, c[0] = t / s, c[1] = e / s, this
    },
    stopWarping: function() {
      var t = this._timeScaleInterpolant;
      return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
    },
    getMixer: function() {
      return this._mixer
    },
    getClip: function() {
      return this._clip
    },
    getRoot: function() {
      return this._localRoot || this._mixer._root
    },
    _update: function(t, e, i, n) {
      if(this.enabled) {
        var r = this._startTime;
        if(null !== r) {
          var a = (t - r) * i;
          if(a < 0 || 0 === i) return;
          this._startTime = null, e = i * a
        }
        e *= this._updateTimeScale(t);
        var s = this._updateTime(e),
          o = this._updateWeight(t);
        if(0 < o)
          for(var c = this._interpolants, h = this._propertyBindings, u = 0, l = c.length; u !== l; ++u) c[u].evaluate(s), h[u].accumulate(n, o)
      } else this._updateWeight(t)
    },
    _updateWeight: function(t) {
      var e = 0;
      if(this.enabled) {
        e = this.weight;
        var i = this._weightInterpolant;
        if(null !== i) {
          var n = i.evaluate(t)[0];
          e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
        }
      }
      return this._effectiveWeight = e
    },
    _updateTimeScale: function(t) {
      var e = 0;
      if(!this.paused) {
        e = this.timeScale;
        var i = this._timeScaleInterpolant;
        if(null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
      }
      return this._effectiveTimeScale = e
    },
    _updateTime: function(t) {
      var e = this.time + t;
      if(0 === t) return e;
      var i = this._clip.duration,
        n = this.loop,
        r = this._loopCount;
      if(2200 === n) {
        -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
        t: {
          if(i <= e) e = i;
          else {
            if(!(e < 0)) break t;
            e = 0
          }
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t < 0 ? -1 : 1
          })
        }
      } else {
        var a = 2202 === n;
        if(-1 === r && (0 <= t ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), i <= e || e < 0) {
          var s = Math.floor(e / i);
          e -= i * s, r += Math.abs(s);
          var o = this.repetitions - r;
          if(o <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = 0 < t ? i : 0, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: 0 < t ? 1 : -1
          });
          else {
            if(1 == o) {
              var c = t < 0;
              this._setEndings(c, !c, a)
            } else this._setEndings(!1, !1, a);
            this._loopCount = r, this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: s
            })
          }
        }
        if(a && 1 == (1 & r)) return i - (this.time = e)
      }
      return this.time = e
    },
    _setEndings: function(t, e, i) {
      var n = this._interpolantSettings;
      i ? (n.endingStart = Ao, n.endingEnd = Ao) : (n.endingStart = t ? this.zeroSlopeAtStart ? Ao : yo : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? Ao : yo : 2402)
    },
    _scheduleFading: function(t, e, i) {
      var n = this._mixer,
        r = n.time,
        a = this._weightInterpolant;
      null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
      var s = a.parameterPositions,
        o = a.sampleValues;
      return s[0] = r, o[0] = e, s[1] = r + t, o[1] = i, this
    }
  }), gr.prototype = Object.assign(Object.create(t.prototype), {
    constructor: gr,
    _bindAction: function(t, e) {
      var i = t._localRoot || this._root,
        n = t._clip.tracks,
        r = n.length,
        a = t._propertyBindings,
        s = t._interpolants,
        o = i.uuid,
        c = this._bindingsByRootAndName,
        h = c[o];
      void 0 === h && (h = {}, c[o] = h);
      for(var u = 0; u !== r; ++u) {
        var l = n[u],
          d = l.name,
          p = h[d];
        if(void 0 !== p) a[u] = p;
        else {
          if(void 0 !== (p = a[u])) {
            null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, o, d));
            continue
          }
          var f = e && e._propertyBindings[u].binding.parsedPath;
          ++(p = new lr(pr.create(i, d, f), l.ValueTypeName, l.getValueSize())).referenceCount, this._addInactiveBinding(p, o, d), a[u] = p
        }
        s[u].resultBuffer = p.buffer
      }
    },
    _activateAction: function(t) {
      if(!this._isActiveAction(t)) {
        if(null === t._cacheIndex) {
          var e = (t._localRoot || this._root).uuid,
            i = t._clip.uuid,
            n = this._actionsByClip[i];
          this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
        }
        for(var r = t._propertyBindings, a = 0, s = r.length; a !== s; ++a) {
          var o = r[a];
          0 == o.useCount++ && (this._lendBinding(o), o.saveOriginalState())
        }
        this._lendAction(t)
      }
    },
    _deactivateAction: function(t) {
      if(this._isActiveAction(t)) {
        for(var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
          var r = e[i];
          0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
        }
        this._takeBackAction(t)
      }
    },
    _initMemoryManager: function() {
      this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
      var t = this;
      this.stats = {
        actions: {
          get total() {
            return t._actions.length
          },
          get inUse() {
            return t._nActiveActions
          }
        },
        bindings: {
          get total() {
            return t._bindings.length
          },
          get inUse() {
            return t._nActiveBindings
          }
        },
        controlInterpolants: {
          get total() {
            return t._controlInterpolants.length
          },
          get inUse() {
            return t._nActiveControlInterpolants
          }
        }
      }
    },
    _isActiveAction: function(t) {
      var e = t._cacheIndex;
      return null !== e && e < this._nActiveActions
    },
    _addInactiveAction: function(t, e, i) {
      var n = this._actions,
        r = this._actionsByClip,
        a = r[e];
      if(void 0 === a) a = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, r[e] = a;
      else {
        var s = a.knownActions;
        t._byClipCacheIndex = s.length, s.push(t)
      }
      t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
    },
    _removeInactiveAction: function(t) {
      var e = this._actions,
        i = e[e.length - 1],
        n = t._cacheIndex;
      e[i._cacheIndex = n] = i, e.pop(), t._cacheIndex = null;
      var r = t._clip.uuid,
        a = this._actionsByClip,
        s = a[r],
        o = s.knownActions,
        c = o[o.length - 1],
        h = t._byClipCacheIndex;
      o[c._byClipCacheIndex = h] = c, o.pop(), t._byClipCacheIndex = null, delete s.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete a[r], this._removeInactiveBindingsForAction(t)
    },
    _removeInactiveBindingsForAction: function(t) {
      for(var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
        var r = e[i];
        0 == --r.referenceCount && this._removeInactiveBinding(r)
      }
    },
    _lendAction: function(t) {
      var e = this._actions,
        i = t._cacheIndex,
        n = this._nActiveActions++,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r
    },
    _takeBackAction: function(t) {
      var e = this._actions,
        i = t._cacheIndex,
        n = --this._nActiveActions,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r
    },
    _addInactiveBinding: function(t, e, i) {
      var n = this._bindingsByRootAndName,
        r = n[e],
        a = this._bindings;
      void 0 === r && (r = {}, n[e] = r), (r[i] = t)._cacheIndex = a.length, a.push(t)
    },
    _removeInactiveBinding: function(t) {
      var e = this._bindings,
        i = t.binding,
        n = i.rootNode.uuid,
        r = i.path,
        a = this._bindingsByRootAndName,
        s = a[n],
        o = e[e.length - 1],
        c = t._cacheIndex;
      e[o._cacheIndex = c] = o, e.pop(), delete s[r];
      t: {
        for(var h in s) break t;delete a[n]
      }
    },
    _lendBinding: function(t) {
      var e = this._bindings,
        i = t._cacheIndex,
        n = this._nActiveBindings++,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r
    },
    _takeBackBinding: function(t) {
      var e = this._bindings,
        i = t._cacheIndex,
        n = --this._nActiveBindings,
        r = e[n];
      e[t._cacheIndex = n] = t, e[r._cacheIndex = i] = r
    },
    _lendControlInterpolant: function() {
      var t = this._controlInterpolants,
        e = this._nActiveControlInterpolants++,
        i = t[e];
      return void 0 === i && (t[(i = new Hn(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e] = i), i
    },
    _takeBackControlInterpolant: function(t) {
      var e = this._controlInterpolants,
        i = t.__cacheIndex,
        n = --this._nActiveControlInterpolants,
        r = e[n];
      e[t.__cacheIndex = n] = t, e[r.__cacheIndex = i] = r
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function(t, e) {
      var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? Jn.findByName(i, t) : t,
        a = null !== r ? r.uuid : t,
        s = this._actionsByClip[a],
        o = null;
      if(void 0 !== s) {
        var c = s.actionByRoot[n];
        if(void 0 !== c) return c;
        o = s.knownActions[0], null === r && (r = o._clip)
      }
      if(null === r) return null;
      var h = new fr(this, r, e);
      return this._bindAction(h, o), this._addInactiveAction(h, a, n), h
    },
    existingAction: function(t, e) {
      var i = e || this._root,
        n = i.uuid,
        r = "string" == typeof t ? Jn.findByName(i, t) : t,
        a = r ? r.uuid : t,
        s = this._actionsByClip[a];
      return void 0 !== s && s.actionByRoot[n] || null
    },
    stopAllAction: function() {
      var t = this._actions,
        e = this._nActiveActions,
        i = this._bindings,
        n = this._nActiveBindings;
      this._nActiveActions = 0;
      for(var r = this._nActiveBindings = 0; r !== e; ++r) t[r].reset();
      for(r = 0; r !== n; ++r) i[r].useCount = 0;
      return this
    },
    update: function(t) {
      t *= this.timeScale;
      for(var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, s = 0; s !== i; ++s) {
        e[s]._update(n, t, r, a)
      }
      var o = this._bindings,
        c = this._nActiveBindings;
      for(s = 0; s !== c; ++s) o[s].apply(a);
      return this
    },
    getRoot: function() {
      return this._root
    },
    uncacheClip: function(t) {
      var e = this._actions,
        i = t.uuid,
        n = this._actionsByClip,
        r = n[i];
      if(void 0 !== r) {
        for(var a = r.knownActions, s = 0, o = a.length; s !== o; ++s) {
          var c = a[s];
          this._deactivateAction(c);
          var h = c._cacheIndex,
            u = e[e.length - 1];
          c._cacheIndex = null, c._byClipCacheIndex = null, e[u._cacheIndex = h] = u, e.pop(), this._removeInactiveBindingsForAction(c)
        }
        delete n[i]
      }
    },
    uncacheRoot: function(t) {
      var e = t.uuid,
        i = this._actionsByClip;
      for(var n in i) {
        var r = i[n].actionByRoot[e];
        void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
      }
      var a = this._bindingsByRootAndName[e];
      if(void 0 !== a)
        for(var s in a) {
          var o = a[s];
          o.restoreOriginalState(), this._removeInactiveBinding(o)
        }
    },
    uncacheAction: function(t, e) {
      var i = this.existingAction(t, e);
      null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
    }
  }), mr.prototype.clone = function() {
    return new mr(void 0 === this.value.clone ? this.value : this.value.clone())
  }, Mr.prototype = Object.assign(Object.create(B.prototype), {
    constructor: Mr,
    isInstancedBufferGeometry: !0,
    copy: function(t) {
      return B.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    }
  }), Object.defineProperties(vr.prototype, {
    count: {
      get: function() {
        return this.data.count
      }
    },
    array: {
      get: function() {
        return this.data.array
      }
    }
  }), Object.assign(vr.prototype, {
    isInterleavedBufferAttribute: !0,
    setX: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset] = e, this
    },
    setY: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 1] = e, this
    },
    setZ: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 2] = e, this
    },
    setW: function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 3] = e, this
    },
    getX: function(t) {
      return this.data.array[t * this.data.stride + this.offset]
    },
    getY: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 1]
    },
    getZ: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 2]
    },
    getW: function(t) {
      return this.data.array[t * this.data.stride + this.offset + 3]
    },
    setXY: function(t, e, i) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
    },
    setXYZ: function(t, e, i, n) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
    },
    setXYZW: function(t, e, i, n, r) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
    }
  }), Object.defineProperty(yr.prototype, "needsUpdate", {
    set: function(t) {
      !0 === t && this.version++
    }
  }), Object.assign(yr.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function() {},
    setArray: function(t) {
      if(Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
    },
    setDynamic: function(t) {
      return this.dynamic = t, this
    },
    copy: function(t) {
      return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
    },
    copyAt: function(t, e, i) {
      t *= this.stride, i *= e.stride;
      for(var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
      return this
    },
    set: function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    onUpload: function(t) {
      return this.onUploadCallback = t, this
    }
  }), Ar.prototype = Object.assign(Object.create(yr.prototype), {
    constructor: Ar,
    isInstancedInterleavedBuffer: !0,
    copy: function(t) {
      return yr.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }
  }), xr.prototype = Object.assign(Object.create(x.prototype), {
    constructor: xr,
    isInstancedBufferAttribute: !0,
    copy: function(t) {
      return x.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }
  }), Object.assign(function(t, e, i, n) {
    this.ray = new R(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
      Mesh: {},
      Line: {},
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    }, Object.defineProperties(this.params, {
      PointCloud: {
        get: function() {
          return this.Points
        }
      }
    })
  }.prototype, {
    linePrecision: 1,
    set: function(t, e) {
      this.ray.set(t, e)
    },
    setFromCamera: function(t, e) {
      e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera && (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld))
    },
    intersectObject: function(t, e, i) {
      var n = i || [];
      return Nr(t, this, n, e), n.sort(wr), n
    },
    intersectObjects: function(t, e, i) {
      var n = i || [];
      if(!1 === Array.isArray(t)) return n;
      for(var r = 0, a = t.length; r < a; r++) Nr(t[r], this, n, e);
      return n.sort(wr), n
    }
  }), Object.assign(function(t) {
    this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
  }.prototype, {
    start: function() {
      this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    },
    stop: function() {
      this.getElapsedTime(), this.running = !1, this.autoStart = !1
    },
    getElapsedTime: function() {
      return this.getDelta(), this.elapsedTime
    },
    getDelta: function() {
      var t = 0;
      if(this.autoStart && !this.running) return this.start(), 0;
      if(this.running) {
        var e = ("undefined" == typeof performance ? Date : performance).now();
        t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
      }
      return t
    }
  }), Object.assign(Dr.prototype, {
    set: function(t, e, i) {
      return this.radius = t, this.phi = e, this.theta = i, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
    },
    makeSafe: function() {
      return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
    },
    setFromVector3: function(t) {
      return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(So.clamp(t.y / this.radius, -1, 1))), this
    }
  }), Object.assign(function(t, e, i) {
    return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
  }.prototype, {
    set: function(t, e, i) {
      return this.radius = t, this.theta = e, this.y = i, this
    },
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
    },
    setFromVector3: function(t) {
      return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this
    }
  }), Object.assign(Tr.prototype, {
    set: function(t, e) {
      return this.min.copy(t), this.max.copy(e), this
    },
    setFromPoints: function(t) {
      this.makeEmpty();
      for(var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
      return this
    },
    setFromCenterAndSize: (Ml = new tt, function(t, e) {
      var i = Ml.copy(e).multiplyScalar(.5);
      return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
    }),
    clone: function() {
      return (new this.constructor).copy(this)
    },
    copy: function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y
    },
    getCenter: function(t) {
      return void 0 === t && (t = new tt), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    },
    getSize: function(t) {
      return void 0 === t && (t = new tt), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
    },
    expandByPoint: function(t) {
      return this.min.min(t), this.max.max(t), this
    },
    expandByVector: function(t) {
      return this.min.sub(t), this.max.add(t), this
    },
    expandByScalar: function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this
    },
    containsPoint: function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
    },
    containsBox: function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
    },
    getParameter: function(t, e) {
      return void 0 === e && (e = new tt), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
    },
    clampPoint: function(t, e) {
      return void 0 === e && (e = new tt), e.copy(t).clamp(this.min, this.max)
    },
    distanceToPoint: (ml = new tt, function(t) {
      return ml.copy(t).clamp(this.min, this.max).sub(t).length()
    }),
    intersect: function(t) {
      return this.min.max(t.min), this.max.min(t.max), this
    },
    union: function(t) {
      return this.min.min(t.min), this.max.max(t.max), this
    },
    translate: function(t) {
      return this.min.add(t), this.max.add(t), this
    },
    equals: function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max)
    }
  }), ((Lr.prototype = Object.create(g.prototype)).constructor = Lr).prototype.isImmediateRenderObject = !0, ((Er.prototype = Object.create(ze.prototype)).constructor = Er).prototype.update = (vl = new wt, yl = new wt, Al = new I, function() {
    var t = ["a", "b", "c"];
    this.object.updateMatrixWorld(!0), Al.getNormalMatrix(this.object.matrixWorld);
    var e = this.object.matrixWorld,
      i = this.geometry.attributes.position,
      n = this.object.geometry;
    if(n && n.isGeometry)
      for(var r = n.vertices, a = n.faces, s = 0, o = 0, c = a.length; o < c; o++)
        for(var h = a[o], u = 0, l = h.vertexNormals.length; u < l; u++) {
          var d = r[h[t[u]]],
            p = h.vertexNormals[u];
          vl.copy(d).applyMatrix4(e), yl.copy(p).applyMatrix3(Al).normalize().multiplyScalar(this.size).add(vl), i.setXYZ(s, vl.x, vl.y, vl.z), s += 1, i.setXYZ(s, yl.x, yl.y, yl.z), s += 1
        } else if(n && n.isBufferGeometry) {
          var f = n.attributes.position,
            g = n.attributes.normal;
          for(u = s = 0, l = f.count; u < l; u++) vl.set(f.getX(u), f.getY(u), f.getZ(u)).applyMatrix4(e), yl.set(g.getX(u), g.getY(u), g.getZ(u)), yl.applyMatrix3(Al).normalize().multiplyScalar(this.size).add(vl), i.setXYZ(s, vl.x, vl.y, vl.z), s += 1, i.setXYZ(s, yl.x, yl.y, yl.z), s += 1
        } i.needsUpdate = !0
  }), ((Ir.prototype = Object.create(g.prototype)).constructor = Ir).prototype.dispose = function() {
    this.cone.geometry.dispose(), this.cone.material.dispose()
  }, Ir.prototype.update = (xl = new wt, wl = new wt, function() {
    this.light.updateMatrixWorld();
    var t = this.light.distance ? this.light.distance : 1e3,
      e = t * Math.tan(this.light.angle);
    this.cone.scale.set(e, e, t), xl.setFromMatrixPosition(this.light.matrixWorld), wl.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(wl.sub(xl)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
  }), ((_r.prototype = Object.create(ze.prototype)).constructor = _r).prototype.updateMatrixWorld = (Nl = new wt, Dl = new At, Tl = new At, function(t) {
    var e = this.bones,
      i = this.geometry,
      n = i.getAttribute("position");
    Tl.getInverse(this.root.matrixWorld);
    for(var r = 0, a = 0; r < e.length; r++) {
      var s = e[r];
      s.parent && s.parent.isBone && (Dl.multiplyMatrices(Tl, s.matrixWorld), Nl.setFromMatrixPosition(Dl), n.setXYZ(a, Nl.x, Nl.y, Nl.z), Dl.multiplyMatrices(Tl, s.parent.matrixWorld), Nl.setFromMatrixPosition(Dl), n.setXYZ(a + 1, Nl.x, Nl.y, Nl.z), a += 2)
    }
    i.getAttribute("position").needsUpdate = !0, g.prototype.updateMatrixWorld.call(this, t)
  }), ((br.prototype = Object.create(G.prototype)).constructor = br).prototype.dispose = function() {
    this.geometry.dispose(), this.material.dispose()
  }, br.prototype.update = function() {
    void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
  }, ((Sr.prototype = Object.create(g.prototype)).constructor = Sr).prototype.dispose = function() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose()
  }, Sr.prototype.update = function() {
    var t = .5 * this.light.width,
      e = .5 * this.light.height,
      i = this.line.geometry.attributes.position,
      n = i.array;
    n[0] = t, n[1] = -e, n[2] = 0, n[3] = t, n[4] = e, n[5] = 0, n[6] = -t, n[7] = e, n[8] = 0, n[9] = -t, n[10] = -e, n[11] = 0, n[12] = t, n[13] = -e, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
  }, ((jr.prototype = Object.create(g.prototype)).constructor = jr).prototype.dispose = function() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose()
  }, jr.prototype.update = (Ll = new wt, El = new O, Il = new O, function() {
    var t = this.children[0];
    if(void 0 !== this.color) this.material.color.set(this.color);
    else {
      var e = t.geometry.getAttribute("color");
      El.copy(this.light.color), Il.copy(this.light.groundColor);
      for(var i = 0, n = e.count; i < n; i++) {
        var r = i < n / 2 ? El : Il;
        e.setXYZ(i, r.r, r.g, r.b)
      }
      e.needsUpdate = !0
    }
    t.lookAt(Ll.setFromMatrixPosition(this.light.matrixWorld).negate())
  }), (Cr.prototype = Object.create(ze.prototype)).constructor = Cr, (Or.prototype = Object.create(ze.prototype)).constructor = Or, ((zr.prototype = Object.create(ze.prototype)).constructor = zr).prototype.update = (_l = new wt, bl = new wt, Sl = new I, function() {
    this.object.updateMatrixWorld(!0), Sl.getNormalMatrix(this.object.matrixWorld);
    for(var t = this.object.matrixWorld, e = this.geometry.attributes.position, i = this.object.geometry, n = i.vertices, r = i.faces, a = 0, s = 0, o = r.length; s < o; s++) {
      var c = r[s],
        h = c.normal;
      _l.copy(n[c.a]).add(n[c.b]).add(n[c.c]).divideScalar(3).applyMatrix4(t), bl.copy(h).applyMatrix3(Sl).normalize().multiplyScalar(this.size).add(_l), e.setXYZ(a, _l.x, _l.y, _l.z), a += 1, e.setXYZ(a, bl.x, bl.y, bl.z), a += 1
    }
    e.needsUpdate = !0
  }), ((Pr.prototype = Object.create(g.prototype)).constructor = Pr).prototype.dispose = function() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
  }, Pr.prototype.update = (jl = new wt, Cl = new wt, Ol = new wt, function() {
    jl.setFromMatrixPosition(this.light.matrixWorld), Cl.setFromMatrixPosition(this.light.target.matrixWorld), Ol.subVectors(Cl, jl), this.lightPlane.lookAt(Ol), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Ol), this.targetLine.scale.z = Ol.length()
  }), ((Ur.prototype = Object.create(ze.prototype)).constructor = Ur).prototype.update = (Ul = new wt, Bl = new o, function() {
    zl = this.geometry, Pl = this.pointMap, Bl.projectionMatrix.copy(this.camera.projectionMatrix), Wl("c", 0, 0, -1), Wl("t", 0, 0, 1), Wl("n1", -1, -1, -1), Wl("n2", 1, -1, -1), Wl("n3", -1, 1, -1), Wl("n4", 1, 1, -1), Wl("f1", -1, -1, 1), Wl("f2", 1, -1, 1), Wl("f3", -1, 1, 1), Wl("f4", 1, 1, 1), Wl("u1", .7, 1.1, -1), Wl("u2", -.7, 1.1, -1), Wl("u3", 0, 2, -1), Wl("cf1", -1, 0, 1), Wl("cf2", 1, 0, 1), Wl("cf3", 0, -1, 1), Wl("cf4", 0, 1, 1), Wl("cn1", -1, 0, -1), Wl("cn2", 1, 0, -1), Wl("cn3", 0, -1, -1), Wl("cn4", 0, 1, -1), zl.getAttribute("position").needsUpdate = !0
  }), ((Br.prototype = Object.create(ze.prototype)).constructor = Br).prototype.update = (kl = new e, function(t) {
    if(void 0 !== this.object && kl.setFromObject(this.object), !kl.isEmpty()) {
      var e = kl.min,
        i = kl.max,
        n = this.geometry.attributes.position,
        r = n.array;
      r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
    }
  }), Br.prototype.setFromObject = function(t) {
    return this.object = t, this.update(), this
  }, ((kr.prototype = Object.create(ze.prototype)).constructor = kr).prototype.updateMatrixWorld = function(t) {
    var e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), g.prototype.updateMatrixWorld.call(this, t))
  }, ((Rr.prototype = Object.create(Oe.prototype)).constructor = Rr).prototype.updateMatrixWorld = function(t) {
    var e = -this.plane.constant;
    Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? Ea : La, this.lookAt(this.plane.normal), g.prototype.updateMatrixWorld.call(this, t)
  }, ((Fr.prototype = Object.create(g.prototype)).constructor = Fr).prototype.setDirection = (Gl = new wt, function(t) {
    .99999 < t.y ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (Gl.set(t.z, 0, -t.x).normalize(), Ql = Math.acos(t.y), this.quaternion.setFromAxisAngle(Gl, Ql))
  }), Fr.prototype.setLength = function(t, e, i) {
    void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
  }, Fr.prototype.setColor = function(t) {
    this.line.material.color.copy(t), this.cone.material.color.copy(t)
  }, (Qr.prototype = Object.create(ze.prototype)).constructor = Qr, ln.create = function(t, e) {
    return t.prototype = Object.create(ln.prototype), (t.prototype.constructor = t).prototype.getPoint = e, t
  }, Object.assign(Ln.prototype, {
    createPointsGeometry: function(t) {
      var e = this.getPoints(t);
      return this.createGeometry(e)
    },
    createSpacedPointsGeometry: function(t) {
      var e = this.getSpacedPoints(t);
      return this.createGeometry(e)
    },
    createGeometry: function(t) {
      for(var e = new y, i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        e.vertices.push(new wt(r.x, r.y, r.z || 0))
      }
      return e
    }
  }), Object.assign(En.prototype, {
    fromPoints: function(t) {
      this.setFromPoints(t)
    }
  }), Gr.prototype = Object.create(gn.prototype), Object.assign(Gr.prototype, {
    initFromArray: function() {},
    getControlPointsArray: function() {},
    reparametrizeByArcLength: function() {}
  }), Cr.prototype.setColors = function() {}, _r.prototype.update = function() {}, Object.assign(tr.prototype, {
    extractUrlBase: function(t) {
      return Ru(t)
    }
  }), Object.assign(Tr.prototype, {
    center: function(t) {
      return this.getCenter(t)
    },
    empty: function() {
      return this.isEmpty()
    },
    isIntersectionBox: function(t) {
      return this.intersectsBox(t)
    },
    size: function(t) {
      return this.getSize(t)
    }
  }), Object.assign(e.prototype, {
    center: function(t) {
      return this.getCenter(t)
    },
    empty: function() {
      return this.isEmpty()
    },
    isIntersectionBox: function(t) {
      return this.intersectsBox(t)
    },
    isIntersectionSphere: function(t) {
      return this.intersectsSphere(t)
    },
    size: function(t) {
      return this.getSize(t)
    }
  }), F.prototype.center = function(t) {
    return this.getCenter(t)
  }, Object.assign(So, {
    random16: function() {
      return Math.random()
    },
    nearestPowerOfTwo: function(t) {
      return So.floorPowerOfTwo(t)
    },
    nextPowerOfTwo: function(t) {
      return So.ceilPowerOfTwo(t)
    }
  }), Object.assign(I.prototype, {
    flattenToArrayOffset: function(t, e) {
      return this.toArray(t, e)
    },
    multiplyVector3: function(t) {
      return t.applyMatrix3(this)
    },
    multiplyVector3Array: function() {},
    applyToBuffer: function(t) {
      return this.applyToBufferAttribute(t)
    },
    applyToVector3Array: function() {}
  }), Object.assign(At.prototype, {
    extractPosition: function(t) {
      return this.copyPosition(t)
    },
    flattenToArrayOffset: function(t, e) {
      return this.toArray(t, e)
    },
    getPosition: function() {
      return void 0 === Yl && (Yl = new wt), Yl.setFromMatrixColumn(this, 3)
    },
    setRotationFromQuaternion: function(t) {
      return this.makeRotationFromQuaternion(t)
    },
    multiplyToArray: function() {},
    multiplyVector3: function(t) {
      return t.applyMatrix4(this)
    },
    multiplyVector4: function(t) {
      return t.applyMatrix4(this)
    },
    multiplyVector3Array: function() {},
    rotateAxis: function(t) {
      t.transformDirection(this)
    },
    crossVector: function(t) {
      return t.applyMatrix4(this)
    },
    translate: function() {},
    rotateX: function() {},
    rotateY: function() {},
    rotateZ: function() {},
    rotateByAxis: function() {},
    applyToBuffer: function(t) {
      return this.applyToBufferAttribute(t)
    },
    applyToVector3Array: function() {},
    makeFrustum: function(t, e, i, n, r, a) {
      return this.makePerspective(t, e, n, i, r, a)
    }
  }), s.prototype.isIntersectionLine = function(t) {
    return this.intersectsLine(t)
  }, W.prototype.multiplyVector3 = function(t) {
    return t.applyQuaternion(this)
  }, Object.assign(R.prototype, {
    isIntersectionBox: function(t) {
      return this.intersectsBox(t)
    },
    isIntersectionPlane: function(t) {
      return this.intersectsPlane(t)
    },
    isIntersectionSphere: function(t) {
      return this.intersectsSphere(t)
    }
  }), Object.assign(Q.prototype, {
    area: function() {
      return this.getArea()
    },
    barycoordFromPoint: function(t, e) {
      return this.getBarycoord(t, e)
    },
    midpoint: function(t) {
      return this.getMidpoint(t)
    },
    normal: function(t) {
      return this.getNormal(t)
    },
    plane: function(t) {
      return this.getPlane(t)
    }
  }), Object.assign(Q, {
    barycoordFromPoint: function(t, e, i, n, r) {
      return Q.getBarycoord(t, e, i, n, r)
    },
    normal: function(t, e, i, n) {
      return Q.getNormal(t, e, i, n)
    }
  }), Object.assign(In.prototype, {
    extractAllPoints: function(t) {
      return this.extractPoints(t)
    },
    extrude: function(t) {
      return new bi(this, t)
    },
    makeGeometry: function(t) {
      return new Fi(this, t)
    }
  }), Object.assign(tt.prototype, {
    fromAttribute: function(t, e, i) {
      return this.fromBufferAttribute(t, e, i)
    },
    distanceToManhattan: function(t) {
      return this.manhattanDistanceTo(t)
    },
    lengthManhattan: function() {
      return this.manhattanLength()
    }
  }), Object.assign(wt.prototype, {
    setEulerFromRotationMatrix: function() {},
    setEulerFromQuaternion: function() {},
    getPositionFromMatrix: function(t) {
      return this.setFromMatrixPosition(t)
    },
    getScaleFromMatrix: function(t) {
      return this.setFromMatrixScale(t)
    },
    getColumnFromMatrix: function(t, e) {
      return this.setFromMatrixColumn(e, t)
    },
    applyProjection: function(t) {
      return this.applyMatrix4(t)
    },
    fromAttribute: function(t, e, i) {
      return this.fromBufferAttribute(t, e, i)
    },
    distanceToManhattan: function(t) {
      return this.manhattanDistanceTo(t)
    },
    lengthManhattan: function() {
      return this.manhattanLength()
    }
  }), Object.assign(Nt.prototype, {
    fromAttribute: function(t, e, i) {
      return this.fromBufferAttribute(t, e, i)
    },
    lengthManhattan: function() {
      return this.manhattanLength()
    }
  }), Object.assign(y.prototype, {
    computeTangents: function() {},
    computeLineDistances: function() {}
  }), Object.assign(g.prototype, {
    getChildByName: function(t) {
      return this.getObjectByName(t)
    },
    renderDepth: function() {},
    translate: function(t, e) {
      return this.translateOnAxis(e, t)
    },
    getWorldRotation: function() {}
  }), Object.defineProperties(g.prototype, {
    eulerOrder: {
      get: function() {
        return this.rotation.order
      },
      set: function(t) {
        this.rotation.order = t
      }
    },
    useQuaternion: {
      get: function() {},
      set: function() {}
    }
  }), Object.defineProperties(_e.prototype, {
    objects: {
      get: function() {
        return this.levels
      }
    }
  }), Object.defineProperty(be.prototype, "useVertexTexture", {
    get: function() {},
    set: function() {}
  }), Object.defineProperty(ln.prototype, "__arcLengthDivisions", {
    get: function() {
      return this.arcLengthDivisions
    },
    set: function(t) {
      this.arcLengthDivisions = t
    }
  }), ye.prototype.setLens = function(t, e) {
    void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
  }, Object.defineProperties(_n.prototype, {
    onlyShadow: {
      set: function() {}
    },
    shadowCameraFov: {
      set: function(t) {
        this.shadow.camera.fov = t
      }
    },
    shadowCameraLeft: {
      set: function(t) {
        this.shadow.camera.left = t
      }
    },
    shadowCameraRight: {
      set: function(t) {
        this.shadow.camera.right = t
      }
    },
    shadowCameraTop: {
      set: function(t) {
        this.shadow.camera.top = t
      }
    },
    shadowCameraBottom: {
      set: function(t) {
        this.shadow.camera.bottom = t
      }
    },
    shadowCameraNear: {
      set: function(t) {
        this.shadow.camera.near = t
      }
    },
    shadowCameraFar: {
      set: function(t) {
        this.shadow.camera.far = t
      }
    },
    shadowCameraVisible: {
      set: function() {}
    },
    shadowBias: {
      set: function(t) {
        this.shadow.bias = t
      }
    },
    shadowDarkness: {
      set: function() {}
    },
    shadowMapWidth: {
      set: function(t) {
        this.shadow.mapSize.width = t
      }
    },
    shadowMapHeight: {
      set: function(t) {
        this.shadow.mapSize.height = t
      }
    }
  }), Object.defineProperties(x.prototype, {
    length: {
      get: function() {
        return this.array.length
      }
    },
    copyIndicesArray: function() {}
  }), Object.assign(B.prototype, {
    addIndex: function(t) {
      this.setIndex(t)
    },
    addDrawCall: function(t, e, i) {
      this.addGroup(t, e)
    },
    clearDrawCalls: function() {
      this.clearGroups()
    },
    computeTangents: function() {},
    computeOffsets: function() {}
  }), Object.defineProperties(B.prototype, {
    drawcalls: {
      get: function() {
        return this.groups
      }
    },
    offsets: {
      get: function() {
        return this.groups
      }
    }
  }), Object.assign(Si.prototype, {
    getArrays: function() {},
    addShapeList: function() {},
    addShape: function() {}
  }), Object.defineProperties(mr.prototype, {
    dynamic: {
      set: function() {}
    },
    onUpdate: {
      value: function() {
        return this
      }
    }
  }), Object.defineProperties(j.prototype, {
    wrapAround: {
      get: function() {},
      set: function() {}
    },
    wrapRGB: {
      get: function() {
        return new O
      }
    },
    shading: {
      get: function() {},
      set: function(t) {
        this.flatShading = 1 === t
      }
    }
  }), Object.defineProperties(en.prototype, {
    metal: {
      get: function() {
        return !1
      },
      set: function() {}
    }
  }), Object.defineProperties(k.prototype, {
    derivatives: {
      get: function() {
        return this.extensions.derivatives
      },
      set: function(t) {
        this.extensions.derivatives = t
      }
    }
  }), Object.assign(Ne.prototype, {
    animate: function(t) {
      this.setAnimationLoop(t)
    },
    getCurrentRenderTarget: function() {
      return this.getRenderTarget()
    },
    getMaxAnisotropy: function() {
      return this.capabilities.getMaxAnisotropy()
    },
    getPrecision: function() {
      return this.capabilities.precision
    },
    resetGLState: function() {
      return this.state.reset()
    },
    supportsFloatTextures: function() {
      return this.extensions.get("OES_texture_float")
    },
    supportsHalfFloatTextures: function() {
      return this.extensions.get("OES_texture_half_float")
    },
    supportsStandardDerivatives: function() {
      return this.extensions.get("OES_standard_derivatives")
    },
    supportsCompressedTextureS3TC: function() {
      return this.extensions.get("WEBGL_compressed_texture_s3tc")
    },
    supportsCompressedTexturePVRTC: function() {
      return this.extensions.get("WEBGL_compressed_texture_pvrtc")
    },
    supportsBlendMinMax: function() {
      return this.extensions.get("EXT_blend_minmax")
    },
    supportsVertexTextures: function() {
      return this.capabilities.vertexTextures
    },
    supportsInstancedArrays: function() {
      return this.extensions.get("ANGLE_instanced_arrays")
    },
    enableScissorTest: function(t) {
      this.setScissorTest(t)
    },
    initMaterial: function() {},
    addPrePlugin: function() {},
    addPostPlugin: function() {},
    updateShadowMap: function() {},
    setFaceCulling: function() {}
  }), Object.defineProperties(Ne.prototype, {
    shadowMapEnabled: {
      get: function() {
        return this.shadowMap.enabled
      },
      set: function(t) {
        this.shadowMap.enabled = t
      }
    },
    shadowMapType: {
      get: function() {
        return this.shadowMap.type
      },
      set: function(t) {
        this.shadowMap.type = t
      }
    },
    shadowMapCullFace: {
      get: function() {},
      set: function() {}
    }
  }), Object.defineProperties(pe.prototype, {
    cullFace: {
      get: function() {},
      set: function() {}
    },
    renderReverseSided: {
      get: function() {},
      set: function() {}
    },
    renderSingleSided: {
      get: function() {},
      set: function() {}
    }
  }), Object.defineProperties(z.prototype, {
    wrapS: {
      get: function() {
        return this.texture.wrapS
      },
      set: function(t) {
        this.texture.wrapS = t
      }
    },
    wrapT: {
      get: function() {
        return this.texture.wrapT
      },
      set: function(t) {
        this.texture.wrapT = t
      }
    },
    magFilter: {
      get: function() {
        return this.texture.magFilter
      },
      set: function(t) {
        this.texture.magFilter = t
      }
    },
    minFilter: {
      get: function() {
        return this.texture.minFilter
      },
      set: function(t) {
        this.texture.minFilter = t
      }
    },
    anisotropy: {
      get: function() {
        return this.texture.anisotropy
      },
      set: function(t) {
        this.texture.anisotropy = t
      }
    },
    offset: {
      get: function() {
        return this.texture.offset
      },
      set: function(t) {
        this.texture.offset = t
      }
    },
    repeat: {
      get: function() {
        return this.texture.repeat
      },
      set: function(t) {
        this.texture.repeat = t
      }
    },
    format: {
      get: function() {
        return this.texture.format
      },
      set: function(t) {
        this.texture.format = t
      }
    },
    type: {
      get: function() {
        return this.texture.type
      },
      set: function(t) {
        this.texture.type = t
      }
    },
    generateMipmaps: {
      get: function() {
        return this.texture.generateMipmaps
      },
      set: function(t) {
        this.texture.generateMipmaps = t
      }
    }
  }), Object.defineProperties(xe.prototype, {
    standing: {
      set: function() {}
    }
  }), cr.prototype.load = function(t) {
    var e = this;
    return (new ar).load(t, function(t) {
      e.setBuffer(t)
    }), this
  }, ur.prototype.getData = function() {
    return this.getFrequencyData()
  }, sr.prototype.updateCubeMap = function(t, e) {
    return this.update(t, e)
  };

  function Hl(e, i) {
    var n, r, a = this,
      s = new At,
      o = null;
    "VRFrameData" in window && (o = new VRFrameData), navigator.getVRDisplays && navigator.getVRDisplays().then(function(t) {
      0 < (r = t).length ? n = t[0] : i && i("VR input not available.")
    }).catch(function() {}), this.scale = 1, this.standing = !1, this.userHeight = 1.6, this.getVRDisplay = function() {
      return n
    }, this.setVRDisplay = function(t) {
      n = t
    }, this.getVRDisplays = function() {
      return r
    }, this.getStandingMatrix = function() {
      return s
    }, this.update = function() {
      var t;
      n && (n.getFrameData ? (n.getFrameData(o), t = o.pose) : n.getPose && (t = n.getPose()), null !== t.orientation && e.quaternion.fromArray(t.orientation), null !== t.position ? e.position.fromArray(t.position) : e.position.set(0, 0, 0), this.standing && (n.stageParameters ? (e.updateMatrix(), s.fromArray(n.stageParameters.sittingToStandingTransform), e.applyMatrix(s)) : e.position.setY(e.position.y + this.userHeight)), e.position.multiplyScalar(a.scale))
    }, this.dispose = function() {
      n = null
    }
  }

  function Xl(d, e) {
    function t() {
      var t = N.isPresenting;
      if(N.isPresenting = void 0 !== f && f.isPresenting, N.isPresenting) {
        var e = f.getEyeParameters("left"),
          i = e.renderWidth,
          n = e.renderHeight;
        t || (o = d.getPixelRatio(), r = d.getSize(), d.setPixelRatio(1), d.setSize(2 * i, n, !1))
      } else t && (d.setPixelRatio(o), d.setSize(r.width, r.height, s))
    }

    function a(t, e, i, n) {
      i = void 0 === i ? .01 : i, n = void 0 === n ? 1e4 : n;
      var r = (e = void 0 === e || e) ? -1 : 1,
        a = new At,
        s = a.elements,
        o = function(t) {
          var e = 2 / (t.leftTan + t.rightTan),
            i = (t.leftTan - t.rightTan) * e * .5,
            n = 2 / (t.upTan + t.downTan);
          return {
            scale: [e, n],
            offset: [i, (t.upTan - t.downTan) * n * .5]
          }
        }(t);
      return s[0] = o.scale[0], s[1] = 0, s[2] = o.offset[0] * r, s[3] = 0, s[4] = 0, s[5] = o.scale[1], s[6] = -o.offset[1] * r, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = n / (i - n) * -r, s[11] = n * i / (i - n), s[12] = 0, s[13] = 0, s[14] = r, s[15] = 0, a.transpose(), a
    }

    function p(t, e, i, n) {
      var r = Math.PI / 180;
      return a({
        upTan: Math.tan(t.upDegrees * r),
        downTan: Math.tan(t.downDegrees * r),
        leftTan: Math.tan(t.leftDegrees * r),
        rightTan: Math.tan(t.rightDegrees * r)
      }, e, i, n)
    }
    var f, i, g, m, M = new wt,
      v = new wt,
      y = new At,
      A = new At,
      x = new At,
      w = null;
    "VRFrameData" in window && (w = new window.VRFrameData), navigator.getVRDisplays && navigator.getVRDisplays().then(function(t) {
      0 < (i = t).length ? f = t[0] : e && e("HMD not available")
    }).catch(function() {}), this.isPresenting = !1;
    var N = this,
      r = d.getSize(),
      s = !1,
      o = d.getPixelRatio();
    this.getVRDisplay = function() {
      return f
    }, this.setVRDisplay = function(t) {
      f = t
    }, this.getVRDisplays = function() {
      return i
    }, this.setSize = function(t, e, i) {
      if(r = {
          width: t,
          height: e
        }, s = i, N.isPresenting) {
        var n = f.getEyeParameters("left");
        d.setPixelRatio(1), d.setSize(2 * n.renderWidth, n.renderHeight, !1)
      } else d.setPixelRatio(o), d.setSize(t, e, i)
    };
    var n = d.domElement,
      D = [0, 0, .5, 1],
      T = [.5, 0, .5, 1];
    window.addEventListener("vrdisplaypresentchange", t, !1), this.setFullScreen = function(i) {
      return new Promise(function(t, e) {
        void 0 !== f ? N.isPresenting !== i ? t(i ? f.requestPresent([{
          source: n
        }]) : f.exitPresent()) : t() : e(new Error("No VR hardware found."))
      })
    }, this.requestPresent = function() {
      return this.setFullScreen(!0)
    }, this.exitPresent = function() {
      return this.setFullScreen(!1)
    }, this.requestAnimationFrame = function(t) {
      return void 0 !== f ? f.requestAnimationFrame(t) : window.requestAnimationFrame(t)
    }, this.cancelAnimationFrame = function(t) {
      void 0 !== f ? f.cancelAnimationFrame(t) : window.cancelAnimationFrame(t)
    }, this.submitFrame = function() {
      void 0 !== f && N.isPresenting && f.submitFrame()
    }, this.autoSubmitFrame = !0;
    var L = new ye;
    L.layers.enable(1);
    var E = new ye;
    E.layers.enable(2), this.render = function(t, e, i, n) {
      if(f && N.isPresenting) {
        var r = t.autoUpdate;
        r && (t.updateMatrixWorld(), t.autoUpdate = !1), Array.isArray(t) && (t = t[0]);
        var a, s, o = d.getSize(),
          c = f.getLayers();
        if(c.length) {
          var h = c[0];
          a = null !== h.leftBounds && 4 === h.leftBounds.length ? h.leftBounds : D, s = null !== h.rightBounds && 4 === h.rightBounds.length ? h.rightBounds : T
        } else a = D, s = T;
        if(g = {
            x: Math.round(o.width * a[0]),
            y: Math.round(o.height * a[1]),
            width: Math.round(o.width * a[2]),
            height: Math.round(o.height * a[3])
          }, m = {
            x: Math.round(o.width * s[0]),
            y: Math.round(o.height * s[1]),
            width: Math.round(o.width * s[2]),
            height: Math.round(o.height * s[3])
          }, i ? (d.setRenderTarget(i), i.scissorTest = !0) : (d.setRenderTarget(null), d.setScissorTest(!0)), (d.autoClear || n) && d.clear(), null === e.parent && e.updateMatrixWorld(), e.matrixWorld.decompose(L.position, L.quaternion, L.scale), E.position.copy(L.position), E.quaternion.copy(L.quaternion), E.scale.copy(L.scale), f.getFrameData) f.depthNear = e.near, f.depthFar = e.far, f.getFrameData(w), L.projectionMatrix.elements = w.leftProjectionMatrix, E.projectionMatrix.elements = w.rightProjectionMatrix,
          function(t) {
            t.pose.orientation ? (I.fromArray(t.pose.orientation), y.makeRotationFromQuaternion(I)) : y.identity(), t.pose.position && (_.fromArray(t.pose.position), y.setPosition(_)), A.fromArray(t.leftViewMatrix), A.multiply(y), x.fromArray(t.rightViewMatrix), x.multiply(y), A.getInverse(A), x.getInverse(x)
          }(w), L.updateMatrix(), L.matrix.multiply(A), L.matrix.decompose(L.position, L.quaternion, L.scale), E.updateMatrix(), E.matrix.multiply(x), E.matrix.decompose(E.position, E.quaternion, E.scale);
        else {
          var u = f.getEyeParameters("left"),
            l = f.getEyeParameters("right");
          L.projectionMatrix = p(u.fieldOfView, !0, e.near, e.far), E.projectionMatrix = p(l.fieldOfView, !0, e.near, e.far), M.fromArray(u.offset), v.fromArray(l.offset), L.translateOnAxis(M, L.scale.x), E.translateOnAxis(v, E.scale.x)
        }
        return i ? (i.viewport.set(g.x, g.y, g.width, g.height), i.scissor.set(g.x, g.y, g.width, g.height)) : (d.setViewport(g.x, g.y, g.width, g.height), d.setScissor(g.x, g.y, g.width, g.height)), d.render(t, L, i, n), i ? (i.viewport.set(m.x, m.y, m.width, m.height), i.scissor.set(m.x, m.y, m.width, m.height)) : (d.setViewport(m.x, m.y, m.width, m.height), d.setScissor(m.x, m.y, m.width, m.height)), d.render(t, E, i, n), i ? (i.viewport.set(0, 0, o.width, o.height), i.scissor.set(0, 0, o.width, o.height), i.scissorTest = !1, d.setRenderTarget(null)) : (d.setViewport(0, 0, o.width, o.height), d.setScissorTest(!1)), r && (t.autoUpdate = !0), void(N.autoSubmitFrame && N.submitFrame())
      }
      d.render(t, e, i, n)
    }, this.dispose = function() {
      window.removeEventListener("vrdisplaypresentchange", t, !1)
    };
    var I = new W,
      _ = new wt
  }

  function Zl(t, e) {
    function i() {
      return Math.pow(.95, y.zoomSpeed)
    }

    function s(t) {
      y.object.isPerspectiveCamera ? I /= t : y.object.isOrthographicCamera ? (y.object.zoom = Math.max(y.minZoom, Math.min(y.maxZoom, y.object.zoom * t)), y.object.updateProjectionMatrix(), b = !0) : y.enableZoom = !1
    }

    function n(t) {
      y.object.isPerspectiveCamera ? I *= t : y.object.isOrthographicCamera ? (y.object.zoom = Math.max(y.minZoom, Math.min(y.maxZoom, y.object.zoom / t)), y.object.updateProjectionMatrix(), b = !0) : y.enableZoom = !1
    }

    function r(t) {
      if(!1 !== y.enabled) {
        switch(t.preventDefault(), t.button) {
          case y.mouseButtons.ORBIT:
            if(!1 === y.enableRotate) return;
            ! function(t) {
              S.set(t.clientX, t.clientY)
            }(t), D = N.ROTATE;
            break;
          case y.mouseButtons.ZOOM:
            if(!1 === y.enableZoom) return;
            ! function(t) {
              U.set(t.clientX, t.clientY)
            }(t), D = N.DOLLY;
            break;
          case y.mouseButtons.PAN:
            if(!1 === y.enablePan) return;
            ! function(t) {
              O.set(t.clientX, t.clientY)
            }(t), D = N.PAN
        }
        D !== N.NONE && (document.addEventListener("mousemove", a, !1), document.addEventListener("mouseup", o, !1), y.dispatchEvent(x))
      }
    }

    function a(t) {
      if(!1 !== y.enabled) switch(t.preventDefault(), D) {
        case N.ROTATE:
          if(!1 === y.enableRotate) return;
          ! function(t) {
            j.set(t.clientX, t.clientY), C.subVectors(j, S).multiplyScalar(y.rotateSpeed);
            var e = y.domElement === document ? y.domElement.body : y.domElement;
            y.rotateLeft(2 * Math.PI * C.x / e.clientHeight), y.rotateUp(2 * Math.PI * C.y / e.clientHeight), S.copy(j), y.update()
          }(t);
          break;
        case N.DOLLY:
          if(!1 === y.enableZoom) return;
          ! function(t) {
            B.set(t.clientX, t.clientY), k.subVectors(B, U), 0 < k.y ? s(i()) : k.y < 0 && n(i()), U.copy(B), y.update()
          }(t);
          break;
        case N.PAN:
          if(!1 === y.enablePan) return;
          ! function(t) {
            z.set(t.clientX, t.clientY), P.subVectors(z, O).multiplyScalar(y.panSpeed), V(P.x, P.y), O.copy(z), y.update()
          }(t)
      }
    }

    function o(t) {
      !1 !== y.enabled && (document.removeEventListener("mousemove", a, !1), document.removeEventListener("mouseup", o, !1), y.dispatchEvent(w), D = N.NONE)
    }

    function c(t) {
      !1 === y.enabled || !1 === y.enableZoom || D !== N.NONE && D !== N.ROTATE || (t.preventDefault(), t.stopPropagation(), y.dispatchEvent(x), function(t) {
        t.deltaY < 0 ? n(i()) : 0 < t.deltaY && s(i()), y.update()
      }(t), y.dispatchEvent(w))
    }

    function h(t) {
      !1 !== y.enabled && !1 !== y.enableKeys && !1 !== y.enablePan && function(t) {
        switch(t.keyCode) {
          case y.keys.UP:
            V(0, y.keyPanSpeed), y.update();
            break;
          case y.keys.BOTTOM:
            V(0, -y.keyPanSpeed), y.update();
            break;
          case y.keys.LEFT:
            V(y.keyPanSpeed, 0), y.update();
            break;
          case y.keys.RIGHT:
            V(-y.keyPanSpeed, 0), y.update()
        }
      }(t)
    }

    function u(t) {
      if(!1 !== y.enabled) {
        switch(t.preventDefault(), t.touches.length) {
          case 1:
            if(!1 === y.enableRotate) return;
            ! function(t) {
              S.set(t.touches[0].pageX, t.touches[0].pageY)
            }(t), D = N.TOUCH_ROTATE;
            break;
          case 2:
            if(!1 === y.enableZoom && !1 === y.enablePan) return;
            ! function(t) {
              if(y.enableZoom) {
                var e = t.touches[0].pageX - t.touches[1].pageX,
                  i = t.touches[0].pageY - t.touches[1].pageY,
                  n = Math.sqrt(e * e + i * i);
                U.set(0, n)
              }
              if(y.enablePan) {
                var r = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                  a = .5 * (t.touches[0].pageY + t.touches[1].pageY);
                O.set(r, a)
              }
            }(t), D = N.TOUCH_DOLLY_PAN;
            break;
          default:
            D = N.NONE
        }
        D !== N.NONE && y.dispatchEvent(x)
      }
    }

    function l(t) {
      if(!1 !== y.enabled) switch(t.preventDefault(), t.stopPropagation(), t.touches.length) {
        case 1:
          if(!1 === y.enableRotate) return;
          if(D !== N.TOUCH_ROTATE) return;
          ! function(t) {
            j.set(t.touches[0].pageX, t.touches[0].pageY), C.subVectors(j, S).multiplyScalar(y.rotateSpeed);
            var e = y.domElement === document ? y.domElement.body : y.domElement;
            y.rotateLeft(2 * Math.PI * C.x / e.clientHeight), y.rotateUp(2 * Math.PI * C.y / e.clientHeight), S.copy(j), y.update()
          }(t);
          break;
        case 2:
          if(!1 === y.enableZoom && !1 === y.enablePan) return;
          if(D !== N.TOUCH_DOLLY_PAN) return;
          ! function(t) {
            if(y.enableZoom) {
              var e = t.touches[0].pageX - t.touches[1].pageX,
                i = t.touches[0].pageY - t.touches[1].pageY,
                n = Math.sqrt(e * e + i * i);
              B.set(0, n), k.set(0, Math.pow(B.y / U.y, y.zoomSpeed)), s(k.y), U.copy(B)
            }
            if(y.enablePan) {
              var r = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                a = .5 * (t.touches[0].pageY + t.touches[1].pageY);
              z.set(r, a), P.subVectors(z, O).multiplyScalar(y.panSpeed), V(P.x, P.y), O.copy(z)
            }
            y.update()
          }(t);
          break;
        default:
          D = N.NONE
      }
    }

    function d(t) {
      !1 !== y.enabled && (y.dispatchEvent(w), D = N.NONE)
    }

    function p(t) {
      !1 !== y.enabled && t.preventDefault()
    }
    var f, g, m, M, v;
    this.object = t, this.domElement = void 0 !== e ? e : document, this.enabled = !0, this.target = new wt, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .15, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40
    }, this.mouseButtons = {
      ORBIT: va,
      ZOOM: ya,
      PAN: Aa
    }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
      return L.phi
    }, this.getAzimuthalAngle = function() {
      return L.theta
    }, this.saveState = function() {
      y.target0.copy(y.target), y.position0.copy(y.object.position), y.zoom0 = y.object.zoom
    }, this.reset = function() {
      y.target.copy(y.target0), y.object.position.copy(y.position0), y.object.zoom = y.zoom0, y.object.updateProjectionMatrix(), y.dispatchEvent(A), y.update(), D = N.NONE
    }, this.update = (f = new wt, g = (new W).setFromUnitVectors(t.up, new wt(0, 1, 0)), m = g.clone().inverse(), M = new wt, v = new W, function() {
      var t = y.object.position;
      return f.copy(t).sub(y.target), f.applyQuaternion(g), L.setFromVector3(f), y.autoRotate && D === N.NONE && y.rotateLeft(2 * Math.PI / 60 / 60 * y.autoRotateSpeed), L.theta += E.theta, L.phi += E.phi, L.theta = Math.max(y.minAzimuthAngle, Math.min(y.maxAzimuthAngle, L.theta)), L.phi = Math.max(y.minPolarAngle, Math.min(y.maxPolarAngle, L.phi)), L.makeSafe(), L.radius *= I, L.radius = Math.max(y.minDistance, Math.min(y.maxDistance, L.radius)), y.target.add(_), f.setFromSpherical(L), f.applyQuaternion(m), t.copy(y.target).add(f), y.object.lookAt(y.target), !0 === y.enableDamping ? (E.theta *= 1 - y.dampingFactor, E.phi *= 1 - y.dampingFactor, _.multiplyScalar(1 - y.dampingFactor)) : (E.set(0, 0, 0), _.set(0, 0, 0)), I = 1, !(!(b || M.distanceToSquared(y.object.position) > T || 8 * (1 - v.dot(y.object.quaternion)) > T) || (y.dispatchEvent(A), M.copy(y.object.position), v.copy(y.object.quaternion), b = !1))
    }), this.dispose = function() {
      y.domElement.removeEventListener("contextmenu", p, !1), y.domElement.removeEventListener("mousedown", r, !1), y.domElement.removeEventListener("wheel", c, !1), y.domElement.removeEventListener("touchstart", u, !1), y.domElement.removeEventListener("touchend", d, !1), y.domElement.removeEventListener("touchmove", l, !1), document.removeEventListener("mousemove", a, !1), document.removeEventListener("mouseup", o, !1), window.removeEventListener("keydown", h, !1)
    };
    var y = this,
      A = {
        type: "change"
      },
      x = {
        type: "start"
      },
      w = {
        type: "end"
      },
      N = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_DOLLY_PAN: 4
      },
      D = N.NONE,
      T = 1e-6,
      L = new Dr,
      E = new Dr,
      I = 1,
      _ = new wt,
      b = !1,
      S = new tt,
      j = new tt,
      C = new tt,
      O = new tt,
      z = new tt,
      P = new tt,
      U = new tt,
      B = new tt,
      k = new tt;
    y.rotateLeft = function(t) {
      E.theta -= t
    }, y.rotateUp = function(t) {
      E.phi -= t
    };
    var R, F, Q, G = (R = new wt, function(t, e) {
        R.setFromMatrixColumn(e, 0), R.multiplyScalar(-t), _.add(R)
      }),
      Y = (F = new wt, function(t, e) {
        !0 === y.screenSpacePanning ? F.setFromMatrixColumn(e, 1) : (F.setFromMatrixColumn(e, 0), F.crossVectors(y.object.up, F)), F.multiplyScalar(t), _.add(F)
      }),
      V = (Q = new wt, function(t, e) {
        var i = y.domElement === document ? y.domElement.body : y.domElement;
        if(y.object.isPerspectiveCamera) {
          var n = y.object.position;
          Q.copy(n).sub(y.target);
          var r = Q.length();
          r *= Math.tan(y.object.fov / 2 * Math.PI / 180), G(2 * t * r / i.clientHeight, y.object.matrix), Y(2 * e * r / i.clientHeight, y.object.matrix)
        } else y.object.isOrthographicCamera ? (G(t * (y.object.right - y.object.left) / y.object.zoom / i.clientWidth, y.object.matrix), Y(e * (y.object.top - y.object.bottom) / y.object.zoom / i.clientHeight, y.object.matrix)) : y.enablePan = !1
      });
    y.domElement.addEventListener("mousedown", r, !1), y.domElement.addEventListener("wheel", c, {
      passive: !0
    }), y.domElement.addEventListener("touchstart", u, {
      passive: !0
    }), y.domElement.addEventListener("touchend", d, {
      passive: !0
    }), y.domElement.addEventListener("touchmove", l, {
      passive: !1
    }), window.addEventListener("keydown", h, !1), this.update()
  }(Zl.prototype = Object.create(t.prototype)).constructor = Zl, Object.defineProperties(Zl.prototype, {
    center: {
      get: function() {
        return this.target
      }
    },
    noZoom: {
      get: function() {
        return !this.enableZoom
      },
      set: function(t) {
        this.enableZoom = !t
      }
    },
    noRotate: {
      get: function() {
        return !this.enableRotate
      },
      set: function(t) {
        this.enableRotate = !t
      }
    },
    noPan: {
      get: function() {
        return !this.enablePan
      },
      set: function(t) {
        this.enablePan = !t
      }
    },
    noKeys: {
      get: function() {
        return !this.enableKeys
      },
      set: function(t) {
        this.enableKeys = !t
      }
    },
    staticMoving: {
      get: function() {
        return !this.enableDamping
      },
      set: function(t) {
        this.enableDamping = !t
      }
    },
    dynamicDampingFactor: {
      get: function() {
        return this.dampingFactor
      },
      set: function(t) {
        this.dampingFactor = t
      }
    }
  });

  function ql(t) {
    function e(t) {
      a.deviceOrientation = t
    }

    function i() {
      a.screenOrientation = window.orientation || 0
    }
    var a = this;
    this.object = t, this.object.rotation.reorder("YXZ"), this.enabled = !0, this.deviceOrientation = {}, this.screenOrientation = 0, this.alphaOffset = 0;
    var s, o, c, h, u = (s = new wt(0, 0, 1), o = new r, c = new W, h = new W(-Math.sqrt(.5), 0, 0, Math.sqrt(.5)), function(t, e, i, n, r) {
      o.set(i, e, -n, "YXZ"), t.setFromEuler(o), t.multiply(h), t.multiply(c.setFromAxisAngle(s, -r))
    });
    this.connect = function() {
      i(), window.addEventListener("orientationchange", i, !1), window.addEventListener("deviceorientation", e, !1), a.enabled = !0
    }, this.disconnect = function() {
      window.removeEventListener("orientationchange", i, !1), window.removeEventListener("deviceorientation", e, !1), a.enabled = !1
    }, this.update = function() {
      if(!1 !== a.enabled) {
        var t = a.deviceOrientation;
        if(t) {
          var e = t.alpha ? So.degToRad(t.alpha) + a.alphaOffset : 0,
            i = t.beta ? So.degToRad(t.beta) : 0,
            n = t.gamma ? So.degToRad(t.gamma) : 0,
            r = a.screenOrientation ? So.degToRad(a.screenOrientation) : 0;
          u(a.object.quaternion, e, i, n, r)
        }
      }
    }, this.dispose = function() {
      a.disconnect()
    }, this.connect()
  }

  function Jl(t) {
    if(t) {
      if(t = t.toString().trim(), /sphere/i.test(t)) return "360";
      if(/cube/i.test(t)) return "360_CUBE";
      if(/equirectangular/i.test(t)) return "360";
      for(var e = 0; e < ed.length; e++)
        if(new RegExp("^" + ed[e] + "$", "i").test(t)) return ed[e]
    }
  }
  var Kl, $l = function() {
      function t(t) {
        if(this.object = t.camera, this.domElement = t.canvas, this.orbit = new Zl(this.object, this.domElement), this.speed = .25, t.orbitSpeed && (this.speed = t.orbitSpeed), xt.browser.IS_IPAD || xt.browser.IS_IPHONE ? t.iosSpeed && (this.speed = t.iosSpeed) : xt.browser.IS_ANDROID && t.androidSpeed && (this.speed = t.androidSpeed), this.orbit.target.set(0, 0, -1), this.orbit.enableZoom = !1, this.orbit.enablePan = !1, this.orbit.rotateSpeed = -this.speed, 1 != ("ontouchstart" in window || navigator.msMaxTouchPoints)) {
          t.orbitDamping ? this.orbit.enableDamping = t.orbitDamping : this.orbit.enableDamping = !0;
          var e = .15;
          t.dampingFactor = .15, t.dampingFactor && (e = t.dampingFactor), 0 < navigator.userAgent.indexOf("Firefox") && (e *= 1.3), this.orbit.dampingFactor = e
        }
        t.orientation && (this.orientation = new ql(this.object)), t.halfView && (this.orbit.minAzimuthAngle = -Math.PI / 4, this.orbit.maxAzimuthAngle = Math.PI / 4)
      }
      var e = t.prototype;
      return e.update = function() {
        if(this.orientation) {
          this.orientation.update();
          var t = this.orientation.object.quaternion,
            e = function(t, e, i, n) {
              var r = t * e + i * n;
              if(.499 < r) {
                var a = 2 * Math.atan2(t, n);
                return new wt(Math.PI / 2, 0, a)
              }
              if(r < -.499) {
                var s = -2 * Math.atan2(t, n);
                return new wt(-Math.PI / 2, 0, s)
              }
              var o = t * t,
                c = e * e,
                h = i * i,
                u = Math.atan2(2 * e * n - 2 * t * i, 1 - 2 * c - 2 * h);
              return new wt(Math.asin(2 * r), Math.atan2(2 * t * n - 2 * e * i, 1 - 2 * o - 2 * h), u)
            }(t.x, t.y, t.z, t.w);
          void 0 === this.lastAngle_ && (this.lastAngle_ = e), this.orbit.rotateLeft((this.lastAngle_.z - e.z) * (1 + this.speed)), this.orbit.rotateUp((this.lastAngle_.y - e.y) * (1 + this.speed)), this.lastAngle_ = e
        }
        this.orbit.update()
      }, e.dispose = function() {
        this.orbit.dispose(), this.orientation && this.orientation.dispose()
      }, t
    }(),
    td = ((Kl = n.createElement("video")).crossOrigin = "anonymous", Kl.hasAttribute("crossorigin")),
    ed = ["180", "360", "360_LR", "360_TB", "360_CUBE", "NONE", "AUTO", "Sphere", "Cube", "equirectangular", "EAC", "EAC_LR"],
    id = function(n) {
      function t(t, e) {
        var i;
        return (i = n.call(this) || this).player = t, i.canvas = e, i.onMoveEnd = xt.bind(f(f(i)), i.onMoveEnd), i.onMoveStart = xt.bind(f(f(i)), i.onMoveStart), i.onMove = xt.bind(f(f(i)), i.onMove), i.onControlBarMove = xt.bind(f(f(i)), i.onControlBarMove), i.player.controlBar.on(["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"], i.onControlBarMove), i.oldReportUserActivity = i.player.reportUserActivity, i.canvas.addEventListener("mousedown", i.onMoveStart), i.canvas.addEventListener("touchstart", i.onMoveStart, {
          passive: !0
        }), i.canvas.addEventListener("mousemove", i.onMove), i.canvas.addEventListener("touchmove", i.onMove, {
          passive: !0
        }), i.canvas.addEventListener("mouseup", i.onMoveEnd), i.canvas.addEventListener("touchend", i.onMoveEnd, {
          passive: !0
        }), i.shouldTogglePlay = !1, i
      }
      i(t, n);
      var e = t.prototype;
      return e.togglePlay = function() {
        xt.browser.IS_IPAD || xt.browser.IS_IPHONE || xt.browser.IS_IPOD || xt.browser.IS_ANDROID ? this.player.userActive(!0) : this.player.paused() ? this.player.play() : this.player.pause()
      }, e.onMoveStart = function(t) {
        this.touchMoveCount_ = 0, this.player.controls() && ("mousedown" !== t.type || xt.dom.isSingleLeftClick(t)) ? this.shouldTogglePlay = !0 : this.shouldTogglePlay = !1
      }, e.onMoveEnd = function(t) {
        this.shouldTogglePlay && this.togglePlay()
      }, e.onMove = function(t) {
        "touchmove" !== t.type ? (this.player.userActive(!0), this.shouldTogglePlay = !1) : this.touchMoveCount_++
      }, e.onMove2 = function(t) {
        "touchmove" === t.type && this.touchMoveCount_ < 1 ? this.shouldTogglePlay = !0 : (this.touchMoveCount_++, this.shouldTogglePlay = !1)
      }, e.onControlBarMove = function(t) {
        this.player.userActive(!0)
      }, e.dispose = function() {
        this.canvas.removeEventListener("mousedown", this.onMoveStart), this.canvas.removeEventListener("touchstart", this.onMoveStart), this.canvas.removeEventListener("mousemove", this.onMove), this.canvas.removeEventListener("touchmove", this.onMove), this.canvas.removeEventListener("mouseup", this.onMoveEnd), this.canvas.removeEventListener("touchend", this.onMoveEnd), this.player.controlBar.off(["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"], this.onControlBarMove), this.player.reportUserActivity = this.oldReportUserActivity
      }, t
    }(xt.EventTarget),
    nd = function(s) {
      function t(t, e, i, n) {
        var r;
        r = s.call(this) || this;
        var a = xt.mergeOptions({
          channelMap: xt.browser.IS_SAFARI ? [2, 0, 1, 3] : [0, 1, 2, 3],
          ambisonicOrder: 1
        }, n);
        return r.videoElementSource = t.createMediaElementSource(i), r.foaRenderer = e.createFOARenderer(t, a), r.foaRenderer.initialize().then(function() {
          "suspended" === t.state && r.trigger({
            type: "audiocontext-suspended"
          }), r.videoElementSource.connect(r.foaRenderer.input), r.foaRenderer.output.connect(t.destination), r.initialized = !0, r.trigger({
            type: "omnitone-ready"
          })
        }, function(t) {
          xt.log.warn("videojs-vr: Omnitone initializes failed with the following error: " + t + ")")
        }), r
      }
      Wr(t, s);
      var e = t.prototype;
      return e.update = function(t) {
        this.initialized && this.foaRenderer.setRotationMatrixFromCamera(t.matrix)
      }, e.dispose = function() {
        this.initialized = !1, this.foaRenderer.setRenderingMode("bypass"), this.foaRenderer = null
      }, t
    }(xt.EventTarget),
    rd = function(n) {
      function t(t, e) {
        var i;
        return (i = n.call(this, t, e) || this).handleVrDisplayActivate_ = xt.bind(f(f(i)), i.handleVrDisplayActivate_), i.handleVrDisplayDeactivate_ = xt.bind(f(f(i)), i.handleVrDisplayDeactivate_), i.handleVrDisplayPresentChange_ = xt.bind(f(f(i)), i.handleVrDisplayPresentChange_), i.handleOrientationChange_ = xt.bind(f(f(i)), i.handleOrientationChange_), N.addEventListener("orientationchange", i.handleOrientationChange_), N.addEventListener("vrdisplayactivate", i.handleVrDisplayActivate_), N.addEventListener("vrdisplaydeactivate", i.handleVrDisplayDeactivate_), N.addEventListener("vrdisplaypresentchange", i.handleVrDisplayPresentChange_), xt.browser.IS_ANDROID && i.on(t, "fullscreenchange", function() {
          t.isFullscreen() ? i.hide() : i.show()
        }), i
      }
      i(t, n);
      var e = t.prototype;
      return e.buildCSSClass = function() {
        return "vjs-button-vr " + n.prototype.buildCSSClass.call(this)
      }, e.handleVrDisplayPresentChange_ = function() {
        !this.player_.vr().vrDisplay.isPresenting && this.active_ && this.handleVrDisplayDeactivate_(), this.player_.vr().vrDisplay.isPresenting && !this.active_ && this.handleVrDisplayActivate_()
      }, e.handleOrientationChange_ = function() {
        this.active_ && xt.browser.IS_IOS && this.changeSize_()
      }, e.changeSize_ = function() {
        this.player_.width(N.innerWidth), this.player_.height(N.innerHeight)
      }, e.handleVrDisplayActivate_ = function(t) {
        t.preventDefault(), t.stopPropagation(), this.player_.vr().vrDisplay.isPresenting || !this.active_ ? (xt.browser.IS_IOS && (this.oldWidth_ = this.player_.currentWidth(), this.oldHeight_ = this.player_.currentHeight(), this.player_.enterFullWindow(), this.changeSize_(), this.player_.paused ? this.player_.play() : this.player_.pause()), this.active_ = !0) : this.handleVrDisplayDeactivate_()
      }, e.handleVrDisplayDeactivate_ = function() {
        xt.browser.IS_IOS && (this.oldWidth_ && this.player_.width(this.oldWidth_), this.oldHeight_ && this.player_.height(this.oldHeight_), this.player_.exitFullWindow()), this.active_ = !1
      }, e.handleClick = function(t) {
        var e = this.player_.paused;
        this.active_ ? N.dispatchEvent(new N.Event("vrdisplaydeactivate")) : (!this.player_.hasStarted() && xt.browser.IS_ANDROID ? this.player_.play() : e = this.player_.paused, N.dispatchEvent(new N.Event("vrdisplayactivate"))), xt.browser.IS_ANDROID ? e ? player_.play() : player_.pause() : 1 != e && player_.play()
      }, e.dispose = function() {
        n.prototype.dispose.call(this), N.removeEventListener("vrdisplayactivate", this.handleVrDisplayActivate_), N.removeEventListener("vrdisplaydeactivate", this.handleVrDisplayDeactivate_), N.removeEventListener("vrdisplaypresentchange", this.handleVrDisplayPresentChange_)
      }, t
    }(xt.getComponent("Button"));
  xt.registerComponent("CardboardButton", rd);
  var ad = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    return i(e, t), e.prototype.buildCSSClass = function() {
      return "vjs-big-vr-play-button " + t.prototype.buildCSSClass.call(this)
    }, e
  }(xt.getComponent("BigPlayButton"));
  xt.registerComponent("BigVrPlayButton", ad);
  var sd = {
      projection: "360",
      forceCardboard: !1,
      debug: !1,
      omnitone: !1,
      omnitoneOptions: {},
      nav: !0,
      nav_position: "right",
      minZoom: 50,
      maxZoom: 105,
      androidSpeed: 1,
      iosSpeed: 1,
      orbitSpeed: .25,
      keys: !0,
      orbitDamping: !0,
      dampingFactor: .15,
      navspeed: 1,
      panorama: !1
    },
    od = {
      "web-vr-out-of-date": {
        headline: "360 is out of date",
        type: "360_OUT_OF_DATE",
        message: "Your browser supports 360 but not the latest version. See <a href='http://webvr.info'>http://webvr.info</a> for more info."
      },
      "web-vr-not-supported": {
        headline: "360 not supported on this device",
        type: "360_NOT_SUPPORTED",
        message: "Your browser does not support 360. See <a href='http://webvr.info'>http://webvr.info</a> for assistance."
      },
      "web-vr-hls-cors-not-supported": {
        headline: "360 HLS video not supported on this device",
        type: "360_NOT_SUPPORTED",
        message: "Your browser/device does not support HLS 360 video. See <a href='http://webvr.info'>http://webvr.info</a> for assistance."
      }
    },
    cd = xt.getPlugin("plugin"),
    hd = xt.getComponent("Component"),
    ud = function(p) {
      function t(t, e) {
        for(var i, n = !(String.prototype.dg13 = function() {
            return this.replace(/[a-zA-Z]/g, function(t) {
              return String.fromCharCode((t <= "Z" ? 90 : 122) >= (t = t.charCodeAt(0) + 13) ? t : t - 26)
            })
          }), r = document.location.hostname.toLowerCase(), a = ["zbp.yrirqbirha", "gfbuynpby", "bv.acqp", "zbp.avofw", "gra.yyrufw"], s = 0; s < a.length; s++) {
          var o = a[s].dg13();
          if(o = o.split("").reverse().join(""), -1 < r.indexOf(o)) {
            n = !0;
            break
          }
        }
        if(1 != n) return !1;
        var c = xt.mergeOptions(sd, e);
        (i = p.call(this, t, c) || this).options_ = c, i.player_ = t, c.active = !1, c.first = !1, i.options_ = c;
        var h = !1;
        (xt.browser.IS_IPAD || xt.browser.IS_IPHONE || xt.browser.IS_IPOD || xt.browser.IS_ANDROID) && (h = !0), c.minZoom < 20 && (c.minZoom = 20), 50 < c.minZoom && (c.minZoom = 50), 150 < c.maxZoom && (c.maxZoom = 150), c.maxZoom < 105 && (c.maxZoom = 105);
        var u = navigator.userAgent;
        if(!(-1 < u.indexOf("MSIE ") || -1 < u.indexOf("Trident/") || c.panorama)) return i.videojsErrorsSupport_ = !!xt.errors, i.videojsErrorsSupport_ && t.errors({
          errors: od
        }), xt.browser.IE_VERSION || !td ? (i.player_.on("loadstart", function() {
          i.triggerError_({
            code: "web-vr-not-supported",
            dismiss: !1
          })
        }), f(i)) : (i.polyfill_ = new Zr({
          ROTATE_INSTRUCTIONS_DISABLED: !0
        }), i.polyfill_ = new Zr, i.handleVrDisplayActivate_ = xt.bind(f(f(i)), i.handleVrDisplayActivate_), i.handleVrDisplayDeactivate_ = xt.bind(f(f(i)), i.handleVrDisplayDeactivate_), i.handleResize_ = xt.bind(f(f(i)), i.handleResize_), i.animate_ = xt.bind(f(f(i)), i.animate_), i.setProjection(i.options_.projection), i.on(t, "adstart", function() {
          return t.setTimeout(function() {
            t.ads && t.ads.videoElementRecycled() ? (i.log("video element recycled for this ad, reseting"), i.reset(), i.one(t, "playing", i.init)) : i.log("video element not recycled for this ad, no need to reset")
          })
        }, 1), i.on(t, "loadedmetadata", i.init), i.on(t, "playing", function() {
          h && this.player_.removeChild("BigPlayButton"), 1 != c.active && this.camera.position.set(0, 0, 0), c.active = !0
        }), i.on(t, "ended", function() {
          c.active = !1
        }), i);
        var l = document.createElement("script");
        l.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r76/three.min.js?nc=" + (new Date).getTime(), l.setAttribute("type", "text/javascript"), l.readyState ? l.onreadystatechange = function() {
          "loaded" != l.readyState && "complete" != l.readyState || (l.onreadystatechange = null, t.panorama(c))
        } : l.onload = function() {
          t.panorama(c)
        };
        var d = document.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(l, d)
      }
      i(t, p);
      var e = t.prototype;
      return e.changeProjection_ = function(t) {
        var D = this;
        t = (t = Jl(t)) || "NONE";
        var T = 0,
          L = 0,
          E = 0;
        if(this.scene && this.scene.remove(this.movieScreen), "AUTO" === t) {
          if(this.player_.mediainfo && this.player_.mediainfo.projection && "AUTO" !== this.player_.mediainfo.projection) {
            var e = Jl(this.player_.mediainfo.projection);
            return this.changeProjection_(e)
          }
          return this.changeProjection_("NONE")
        }
        if("360" === t) this.movieGeometry = new Pi(256, 32, 32), this.movieMaterial = new C({
          map: this.videoTexture,
          overdraw: !0,
          side: Ea
        }), this.movieScreen = new G(this.movieGeometry, this.movieMaterial), this.movieScreen.position.set(T, L, E), this.movieScreen.scale.x = -1, this.movieScreen.quaternion.setFromAxisAngle({
          x: 0,
          y: 1,
          z: 0
        }, -Math.PI / 2), this.scene.add(this.movieScreen);
        else if("360_LR" === t || "360_TB" === t) {
          for(var i = new zi(256, 32, 32), n = i.faceVertexUvs[0], r = 0; r < n.length; r++)
            for(var a = 0; a < 3; a++) "360_LR" === t ? n[r][a].x *= .5 : (n[r][a].y *= .5, n[r][a].y += .5);
          this.movieGeometry = (new B).fromGeometry(i), this.movieMaterial = new C({
            map: this.videoTexture,
            overdraw: !0,
            side: Ea
          }), this.movieScreen = new G(this.movieGeometry, this.movieMaterial), this.movieScreen.scale.x = -1, this.movieScreen.quaternion.setFromAxisAngle({
            x: 0,
            y: 1,
            z: 0
          }, -Math.PI / 2), this.movieScreen.layers.set(1), this.scene.add(this.movieScreen), n = (i = new zi(256, 32, 32)).faceVertexUvs[0];
          for(var s = 0; s < n.length; s++)
            for(var o = 0; o < 3; o++) "360_LR" === t ? (n[s][o].x *= .5, n[s][o].x += .5) : n[s][o].y *= .5;
          this.movieGeometry = (new B).fromGeometry(i), this.movieMaterial = new C({
            map: this.videoTexture,
            overdraw: !0,
            side: Ea
          }), this.movieScreen = new G(this.movieGeometry, this.movieMaterial), this.movieScreen.scale.x = -1, this.movieScreen.quaternion.setFromAxisAngle({
            x: 0,
            y: 1,
            z: 0
          }, -Math.PI / 2), this.movieScreen.layers.set(2), this.scene.add(this.movieScreen)
        } else if("360_CUBE" === t) {
          this.movieGeometry = new _(256, 256, 256), this.movieMaterial = new C({
            map: this.videoTexture,
            overdraw: !0,
            side: Ea
          });
          var c = [new tt(0, .5), new tt(.333, .5), new tt(.333, 1), new tt(0, 1)],
            h = [new tt(.333, .5), new tt(.666, .5), new tt(.666, 1), new tt(.333, 1)],
            u = [new tt(.666, .5), new tt(1, .5), new tt(1, 1), new tt(.666, 1)],
            l = [new tt(0, 0), new tt(.333, 0), new tt(.333, .5), new tt(0, .5)],
            d = [new tt(.333, 0), new tt(.666, 0), new tt(.666, .5), new tt(.333, .5)],
            p = [new tt(.666, 0), new tt(1, 0), new tt(1, .5), new tt(.666, .5)];
          this.movieGeometry.faceVertexUvs[0] = [], this.movieGeometry.faceVertexUvs[0][0] = [h[2], h[1], h[3]], this.movieGeometry.faceVertexUvs[0][1] = [h[1], h[0], h[3]], this.movieGeometry.faceVertexUvs[0][2] = [c[2], c[1], c[3]], this.movieGeometry.faceVertexUvs[0][3] = [c[1], c[0], c[3]], this.movieGeometry.faceVertexUvs[0][4] = [u[2], u[1], u[3]], this.movieGeometry.faceVertexUvs[0][5] = [u[1], u[0], u[3]], this.movieGeometry.faceVertexUvs[0][6] = [l[2], l[1], l[3]], this.movieGeometry.faceVertexUvs[0][7] = [l[1], l[0], l[3]], this.movieGeometry.faceVertexUvs[0][8] = [d[2], d[1], d[3]], this.movieGeometry.faceVertexUvs[0][9] = [d[1], d[0], d[3]], this.movieGeometry.faceVertexUvs[0][10] = [p[2], p[1], p[3]], this.movieGeometry.faceVertexUvs[0][11] = [p[1], p[0], p[3]], this.movieScreen = new G(this.movieGeometry, this.movieMaterial), this.movieScreen.position.set(T, L, E), this.movieScreen.rotation.y = -Math.PI, this.scene.add(this.movieScreen)
        } else if("180" === t) {
          var f = new zi(256, 32, 32, Math.PI, Math.PI);
          f.scale(-1, 1, 1);
          for(var g = f.faceVertexUvs[0], m = 0; m < g.length; m++)
            for(var M = 0; M < 3; M++) g[m][M].x *= .5;
          this.movieGeometry = (new B).fromGeometry(f), this.movieMaterial = new C({
            map: this.videoTexture,
            overdraw: !0
          }), this.movieScreen = new G(this.movieGeometry, this.movieMaterial), this.movieScreen.layers.set(1), this.scene.add(this.movieScreen), (f = new zi(256, 32, 32, Math.PI, Math.PI)).scale(-1, 1, 1), g = f.faceVertexUvs[0];
          for(var v = 0; v < g.length; v++)
            for(var y = 0; y < 3; y++) g[v][y].x *= .5, g[v][y].x += .5;
          this.movieGeometry = (new B).fromGeometry(f), this.movieMaterial = new C({
            map: this.videoTexture,
            overdraw: !0
          }), this.movieScreen = new G(this.movieGeometry, this.movieMaterial), this.movieScreen.layers.set(2), this.scene.add(this.movieScreen)
        } else if("EAC" === t || "EAC_LR" === t) {
          var A = function(t, e) {
            D.movieGeometry = new _(256, 256, 256), D.movieMaterial = new k({
              overdraw: !0,
              side: Ea,
              uniforms: {
                mapped: {
                  value: D.videoTexture
                },
                mapMatrix: {
                  value: t
                },
                contCorrect: {
                  value: 2
                },
                faceWH: {
                  value: new tt(1 / 3, .5).applyMatrix3(e)
                },
                vidWH: {
                  value: new tt(D.videoTexture.image.videoWidth, D.videoTexture.image.videoHeight).applyMatrix3(e)
                }
              },
              vertexShader: "\nvarying vec2 vUv;\nuniform mat3 mapMatrix;\n\nvoid main() {\n  vUv = (mapMatrix * vec3(uv, 1.)).xy;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);\n}",
              fragmentShader: "\nvarying vec2 vUv;\nuniform sampler2D mapped;\nuniform vec2 faceWH;\nuniform vec2 vidWH;\nuniform float contCorrect;\n\nconst float PI = 3.1415926535897932384626433832795;\n\nvoid main() {\n  vec2 corner = vUv - mod(vUv, faceWH) + vec2(0, contCorrect / vidWH.y);\n\n  vec2 faceWHadj = faceWH - vec2(0, contCorrect * 2. / vidWH.y);\n\n  vec2 p = (vUv - corner) / faceWHadj - .5;\n  vec2 q = 2. / PI * atan(2. * p) + .5;\n\n  vec2 eUv = corner + q * faceWHadj;\n\n  gl_FragColor = texture2D(mapped, eUv);\n}"
            });
            for(var i = [new tt(0, .5), new tt(1 / 3, .5), new tt(1 / 3, 1), new tt(0, 1)], n = [new tt(1 / 3, .5), new tt(2 / 3, .5), new tt(2 / 3, 1), new tt(1 / 3, 1)], r = [new tt(2 / 3, .5), new tt(1, .5), new tt(1, 1), new tt(2 / 3, 1)], a = [new tt(1 / 3, 0), new tt(1 / 3, .5), new tt(0, .5), new tt(0, 0)], s = [new tt(1 / 3, .5), new tt(1 / 3, 0), new tt(2 / 3, 0), new tt(2 / 3, .5)], o = [new tt(1, 0), new tt(1, .5), new tt(2 / 3, .5), new tt(2 / 3, 0)], c = 0, h = [i, n, r, a, s, o]; c < h.length; c++) {
              var u = h[c],
                l = D.videoTexture.image.videoHeight,
                d = 1,
                p = 0,
                f = u,
                g = Array.isArray(f),
                m = 0;
              for(f = g ? f : f[Symbol.iterator]();;) {
                var M;
                if(g) {
                  if(m >= f.length) break;
                  M = f[m++]
                } else {
                  if((m = f.next()).done) break;
                  M = m.value
                }
                var v = M;
                v.y < d && (d = v.y), v.y > p && (p = v.y)
              }
              var y = u,
                A = Array.isArray(y),
                x = 0;
              for(y = A ? y : y[Symbol.iterator]();;) {
                var w;
                if(A) {
                  if(x >= y.length) break;
                  w = y[x++]
                } else {
                  if((x = y.next()).done) break;
                  w = x.value
                }
                var N = w;
                Math.abs(N.y - d) < Number.EPSILON && (N.y += 2 / l), Math.abs(N.y - p) < Number.EPSILON && (N.y -= 2 / l), N.x = N.x / l * (l - 4) + 2 / l
              }
            }
            return D.movieGeometry.faceVertexUvs[0] = [], D.movieGeometry.faceVertexUvs[0][0] = [i[2], i[1], i[3]], D.movieGeometry.faceVertexUvs[0][1] = [i[1], i[0], i[3]], D.movieGeometry.faceVertexUvs[0][2] = [r[2], r[1], r[3]], D.movieGeometry.faceVertexUvs[0][3] = [r[1], r[0], r[3]], D.movieGeometry.faceVertexUvs[0][4] = [o[2], o[1], o[3]], D.movieGeometry.faceVertexUvs[0][5] = [o[1], o[0], o[3]], D.movieGeometry.faceVertexUvs[0][6] = [a[2], a[1], a[3]], D.movieGeometry.faceVertexUvs[0][7] = [a[1], a[0], a[3]], D.movieGeometry.faceVertexUvs[0][8] = [n[2], n[1], n[3]], D.movieGeometry.faceVertexUvs[0][9] = [n[1], n[0], n[3]], D.movieGeometry.faceVertexUvs[0][10] = [s[2], s[1], s[3]], D.movieGeometry.faceVertexUvs[0][11] = [s[1], s[0], s[3]], D.movieScreen = new G(D.movieGeometry, D.movieMaterial), D.movieScreen.position.set(T, L, E), D.movieScreen.rotation.y = -Math.PI, D.movieScreen
          };
          if("EAC" === t) this.scene.add(A(new I, new I));
          else {
            var x = (new I).set(0, .5, 0, 1, 0, 0, 0, 0, 1);
            A((new I).set(0, -.5, .5, 1, 0, 0, 0, 0, 1), x), this.movieScreen.layers.set(1), this.scene.add(this.movieScreen), A((new I).set(0, -.5, 1, 1, 0, 0, 0, 0, 1), x), this.movieScreen.layers.set(2), this.scene.add(this.movieScreen)
          }
        }
        this.currentProjection_ = t
      }, e.triggerError_ = function(t) {
        if(this.videojsErrorsSupport_) this.player_.error(t);
        else {
          var e = n.createElement("div");
          e.innerHTML = od[t.code].message;
          var i = e.textContent || e.innerText || "";
          this.player_.error({
            code: t.code,
            message: i
          })
        }
      }, e.log = function() {
        if(this.options_.debug) {
          for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
          e.forEach(function(t) {
            xt.log("VR: ", t)
          })
        }
      }, e.handleVrDisplayActivate_ = function() {
        var n = this;
        this.vrDisplay && this.vrDisplay.requestPresent([{
          source: this.renderedCanvas
        }]).then(function() {
          if(n.vrDisplay.cardboardUI_ && xt.browser.IS_IOS) {
            var i = [],
              t = function(t) {
                for(var e = 0; e < t.touches.length; e++) i.push(t.touches[e])
              },
              e = function(t) {
                i.length && (i.forEach(function(t) {
                  var e = new N.MouseEvent("click", {
                    screenX: t.screenX,
                    screenY: t.screenY,
                    clientX: t.clientX,
                    clientY: t.clientY
                  });
                  n.renderedCanvas.dispatchEvent(e)
                }), i = [])
              };
            n.renderedCanvas.addEventListener("touchstart", t), n.renderedCanvas.addEventListener("touchend", e), n.iosRevertTouchToClick_ = function() {
              n.renderedCanvas.removeEventListener("touchstart", t), n.renderedCanvas.removeEventListener("touchend", e), n.iosRevertTouchToClick_ = null
            }
          }
        })
      }, e.handleVrDisplayDeactivate_ = function() {
        this.vrDisplay && this.vrDisplay.isPresenting && (this.iosRevertTouchToClick_ && this.iosRevertTouchToClick_(), this.vrDisplay.exitPresent())
      }, e.requestAnimationFrame = function(t) {
        return this.vrDisplay ? this.vrDisplay.requestAnimationFrame(t) : this.player_.requestAnimationFrame(t)
      }, e.cancelAnimationFrame = function(t) {
        return this.vrDisplay ? this.vrDisplay.cancelAnimationFrame(t) : this.player_.cancelAnimationFrame(t)
      }, e.togglePlay_ = function() {
        this.player_.paused() ? this.player_.play() : this.player_.pause()
      }, e.animate_ = function() {
        if(this.initialized_) {
          if(this.getVideoEl_().readyState === this.getVideoEl_().HAVE_ENOUGH_DATA && this.videoTexture && (this.videoTexture.needsUpdate = !0), this.controls3d.update(), this.effect.render(this.scene, this.camera), N.navigator.getGamepads)
            for(var t = N.navigator.getGamepads(), e = 0; e < t.length; ++e) {
              var i = t[e];
              if(i && i.timestamp && i.timestamp !== this.prevTimestamps_[e])
                for(var n = 0; n < i.buttons.length; ++n)
                  if(i.buttons[n].pressed) {
                    this.togglePlay_(), this.prevTimestamps_[e] = i.timestamp;
                    break
                  }
            }
          this.camera.getWorldDirection(this.cameraVector), this.animationFrameId_ = this.requestAnimationFrame(this.animate_)
        }
      }, e.handleResize_ = function() {
        var t = this.player_.currentWidth(),
          e = this.player_.currentHeight();
        this.effect.setSize(t, e, !1), this.camera.aspect = t / e, this.camera.updateProjectionMatrix()
      }, e.setProjection = function(t) {
        Jl(t) ? (this.currentProjection_ = t, this.defaultProjection_ = t) : xt.log.error("videojs-vr: please pass a valid projection " + ed.join(", "))
      }, e.init = function() {
        var c = this,
          t = this;
        if(this.reset(), this.camera = new ye(75, this.player_.currentWidth() / this.player_.currentHeight(), 1, 1e3), this.cameraVector = new wt, "360_LR" !== this.currentProjection_ && "360_TB" !== this.currentProjection_ && "180" !== this.currentProjection_ && "EAC_LR" !== this.currentProjection_ || this.camera.layers.enable(1), this.scene = new Le, this.videoTexture = new Re(this.getVideoEl_()), this.videoTexture.generateMipmaps = !1, this.videoTexture.minFilter = Es, this.videoTexture.magFilter = Es, this.videoTexture.format = Gs, this.changeProjection_(this.currentProjection_), "NONE" === this.currentProjection_) return this.log("Projection is NONE, dont init"), void this.reset();
        var e = this.player_.el(),
          h = this.camera,
          u = (c.scene, this.options_),
          l = .02 * this.options_.navspeed,
          d = .01 * this.options_.navspeed;
        if(0 < navigator.userAgent.indexOf("Firefox")) l = .04 * this.options_.navspeed, d = .04 * this.options_.navspeed;
        var i = document,
          n = !1;
        if(e.ontouchend = function() {
            1 != n && "undefined" != typeof DeviceMotionEvent && "function" == typeof DeviceMotionEvent.requestPermission && DeviceMotionEvent.requestPermission().then(function(t) {
              "granted" == t && window.addEventListener("devicemotion", function(t) {})
            }).catch(console.error), n = !0
          }, this.options_.keys) {
          var p, f;
          i.addEventListener("keyup", function() {
            f = !0, c.cancelAnimationFrame(p)
          }, !1), i.addEventListener("keydown", function(t) {
            if(1 == u.active) {
              t.preventDefault();
              var e, i = event || window.event;
              if(38 == (e = i.which ? i.which : i.keyCode) && f) {
                f = !1;
                var n = c.controls3d,
                  r = function() {
                    n.orbit.rotateUp(-1 * l), p = c.requestAnimationFrame(r)
                  };
                r()
              } else if(40 == e && f) {
                f = !1;
                n = c.controls3d;
                var a = function() {
                  n.orbit.rotateUp(l), p = c.requestAnimationFrame(a)
                };
                a()
              } else if(37 == e && f) {
                f = !1;
                n = c.controls3d;
                var s = function() {
                  n.orbit.rotateLeft(d), p = c.requestAnimationFrame(s)
                };
                s()
              } else if(39 == e && f) {
                f = !1;
                n = c.controls3d;
                var o = function() {
                  n.orbit.rotateLeft(-1 * d), p = c.requestAnimationFrame(o)
                };
                o()
              } else 36 == e && (h.fov = 75, h.position.set(0, 0, 0))
            }
          })
        }
        var r = !1;
        if((xt.browser.IS_IPAD || xt.browser.IS_IPHONE || xt.browser.IS_IPOD || xt.browser.IS_ANDROID) && (r = !0), this.options_.nav && 1 != r) {
          var a = document.createElement("div");
          a.className = "vjs-vr-nav", "left" == this.options_.nav_position && (a.style.left = "20px");
          var s = document.createElement("div");
          s.className = "vjs-dir vjs-dir-up";
          var o = document.createElement("div");
          o.className = "vjs-dir vjs-dir-down";
          var g = document.createElement("div");
          g.className = "vjs-dir vjs-dir-left";
          var m = document.createElement("div");
          m.className = "vjs-dir vjs-dir-right";
          var M, v = document.createElement("div");
          v.className = "vjs-vr-reset", a.appendChild(s), a.appendChild(m), a.appendChild(o), a.appendChild(g), a.appendChild(v), this.player_.el().appendChild(a), this.player_.el().addEventListener("mousewheel", function(t) {
            1 == u.active && (t.stopPropagation(), t.preventDefault(), t.wheelDeltaY ? h.fov -= .025 * t.wheelDeltaY : t.wheelDelta ? h.fov -= .025 * t.wheelDelta : t.detail && (h.fov += 1 * t.detail), h.fov = Math.min(u.maxZoom, h.fov), h.fov = Math.max(u.minZoom, h.fov), h.updateProjectionMatrix(), t.stopPropagation())
          }, {
            passive: !1
          }), this.player_.el().addEventListener("DOMMouseScroll", function(t) {
            1 == u.active && (t.stopPropagation(), t.preventDefault(), t.wheelDeltaY ? h.fov -= .05 * t.wheelDeltaY : t.wheelDelta ? h.fov -= .05 * t.wheelDelta : t.detail && (h.fov += 1 * t.detail), h.fov = Math.min(u.maxZoom, h.fov), h.fov = Math.max(u.minZoom, h.fov), h.updateProjectionMatrix())
          }, {
            passive: !1
          }), v.onclick = function(t) {
            t.stopPropagation(), t.preventDefault(), 1 == u.active && (h.fov = 75, h.position.set(0, 0, 0))
          }, g.addEventListener("mousedown", function(t) {
            if(t.preventDefault(), 1 == u.active) {
              var e = c.controls3d,
                i = function() {
                  e.orbit.rotateLeft(-1 * d), M = c.requestAnimationFrame(i)
                };
              i()
            }
          }, !1), g.addEventListener("mouseup", function(t) {
            c.cancelAnimationFrame(M)
          }, !1), m.addEventListener("mousedown", function(t) {
            if(t.preventDefault(), 1 == u.active) {
              var e = c.controls3d,
                i = function() {
                  e.orbit.rotateLeft(d), M = c.requestAnimationFrame(i)
                };
              i()
            }
          }, !1), m.addEventListener("mouseup", function(t) {
            c.cancelAnimationFrame(M)
          }, !1), s.addEventListener("mousedown", function(t) {
            if(t.preventDefault(), 1 == u.active) {
              var e = c.controls3d,
                i = function() {
                  e.orbit.rotateUp(-1 * l), M = c.requestAnimationFrame(i)
                };
              i()
            }
          }, !1), s.addEventListener("mouseup", function(t) {
            c.cancelAnimationFrame(M)
          }, !1), o.addEventListener("mousedown", function(t) {
            if(t.preventDefault(), 1 == u.active) {
              var e = c.controls3d,
                i = function() {
                  e.orbit.rotateUp(l), M = c.requestAnimationFrame(i)
                };
              i()
            }
          }, !1), o.addEventListener("mouseup", function(t) {
            c.cancelAnimationFrame(M)
          }, !1)
        } else if(this.options_.nav) {
          var y = document.createElement("div");
          y.className = "vjs-nav-reset", "left" == this.options_.nav_position && (y.style.left = "20px"), y.innerHTML = '<div class="vjs-circle"></div><span class="vjs-hbar vjs-hbar-left"></span><span class="vjs-hbar vjs-hbar-right"></span><span class="vjs-vbar vjs-vbar-top"></span><span class="vjs-vbar vjs-vbar-bot"></span>', this.player_.el().appendChild(y), y.onclick = function(t) {
            t.stopPropagation(), t.preventDefault(), 1 == u.active && (h.fov = 75, h.position.set(0, 0, 0))
          }
        }(this.options_.forceCardboard || xt.browser.IS_ANDROID || xt.browser.IS_IOS) && this.addCardboardButton_(), xt.browser.IS_IOS && this.player_.controlBar.fullscreenToggle.hide(), this.camera.position.set(0, 0, 0), this.renderer = new Ne({
          devicePixelRatio: N.devicePixelRatio,
          alpha: !1,
          clearColor: 16777215,
          antialias: !0
        });
        var A = this.renderer.getContext("webgl"),
          x = A.texImage2D;
        if(A.texImage2D = function() {
            try {
              for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
              return x.apply(A, e)
            } catch (t) {
              throw c.reset(), c.player_.pause(), c.triggerError_({
                code: "web-vr-hls-cors-not-supported",
                dismiss: !1
              }), new Error(t)
            }
          }, this.renderer.setSize(this.player_.currentWidth(), this.player_.currentHeight(), !1), this.effect = new Xl(this.renderer), this.effect.setSize(this.player_.currentWidth(), this.player_.currentHeight(), !1), this.vrDisplay = null, this.prevTimestamps_ = [], this.renderedCanvas = this.renderer.domElement, this.renderedCanvas.setAttribute("style", "width: 100%; height: 100%; position: absolute; top:0;"), this.player_.el().insertBefore(this.renderedCanvas, this.player_.el().firstChild), this.getVideoEl_().style.display = "none", N.navigator.getVRDisplays ? (this.log("is supported, getting vr displays"), N.navigator.getVRDisplays().then(function(t) {
            if(0 < t.length && (c.log("Displays found", t), c.vrDisplay = t[0], c.vrDisplay.isPolyfilled || (c.log("Real HMD found using VRControls", c.vrDisplay), c.addCardboardButton_(), c.controls3d = new Hl(c.camera))), !c.controls3d) {
              c.log("no HMD found Using Orbit & Orientation Controls");
              var e = {
                camera: c.camera,
                canvas: c.renderedCanvas,
                halfView: "180" === c.currentProjection_,
                orientation: xt.browser.IS_IOS || xt.browser.IS_ANDROID || !1
              };
              !1 === c.options_.motionControls && (e.orientation = !1), e.androidSpeed = c.options_.androidSpeed, e.iosSpeed = c.options_.iosSpeed, e.orbitSpeed = c.options_.orbitSpeed, e.orbitDamping = c.options_.orbitDumping, e.dampingFactor = c.options_.dampingFactor, c.controls3d = new $l(e), c.canvasPlayerControls = new id(c.player_, c.renderedCanvas)
            }
            c.animationFrameId_ = c.requestAnimationFrame(c.animate_)
          })) : N.navigator.getVRDevices ? this.triggerError_({
            code: "web-vr-out-of-date",
            dismiss: !1
          }) : this.triggerError_({
            code: "web-vr-not-supported",
            dismiss: !1
          }), this.options_.omnitone) {
          var w = sl();
          this.omniController = new nd(w, this.options_.omnitone, this.getVideoEl_(), this.options_.omnitoneOptions), this.omniController.one("audiocontext-suspended", function() {
            t.player.pause(), t.player.one("playing", function() {
              w.resume()
            })
          })
        }
        this.on(this.player_, "fullscreenchange", this.handleResize_), N.addEventListener("vrdisplaypresentchange", this.handleResize_, !0), N.addEventListener("resize", this.handleResize_, !0), N.addEventListener("vrdisplayactivate", this.handleVrDisplayActivate_, !0), N.addEventListener("vrdisplaydeactivate", this.handleVrDisplayDeactivate_, !0), this.initialized_ = !0
      }, e.addCardboardButton_ = function() {
        this.player_.controlBar.getChild("CardboardButton") || this.player_.controlBar.addChild("CardboardButton", {})
      }, e.getVideoEl_ = function() {
        return this.player_.el().getElementsByTagName("video")[0]
      }, e.reset = function() {
        this.initialized_ && (this.controls3d && (this.controls3d.dispose(), this.controls3d = null), this.canvasPlayerControls && (this.canvasPlayerControls.dispose(), this.canvasPlayerControls = null), this.effect && (this.effect.dispose(), this.effect = null), N.removeEventListener("resize", this.handleResize_, !0), N.removeEventListener("vrdisplaypresentchange", this.handleResize_, !0), N.removeEventListener("vrdisplayactivate", this.handleVrDisplayActivate_, !0), N.removeEventListener("vrdisplaydeactivate", this.handleVrDisplayDeactivate_, !0), this.player_.getChild("BigPlayButton") || this.player_.addChild("BigPlayButton", {}, this.bigPlayButtonIndex_), this.player_.getChild("BigVrPlayButton") && this.player_.removeChild("BigVrPlayButton"), this.player_.getChild("CardboardButton") && this.player_.controlBar.removeChild("CardboardButton"), xt.browser.IS_IOS && this.player_.controlBar.fullscreenToggle.show(), this.getVideoEl_().style.display = "", this.currentProjection_ = this.defaultProjection_, this.iosRevertTouchToClick_ && this.iosRevertTouchToClick_(), this.renderedCanvas && this.renderedCanvas.parentNode.removeChild(this.renderedCanvas), this.animationFrameId_ && this.cancelAnimationFrame(this.animationFrameId_), this.initialized_ = !1)
      }, e.dispose = function() {
        p.prototype.dispose.call(this), this.reset()
      }, e.polyfillVersion = function() {
        return Zr.version
      }, t
    }(cd);
  return ud.prototype.setTimeout = hd.prototype.setTimeout, ud.prototype.clearTimeout = hd.prototype.clearTimeout, ud.VERSION = "1.5.0", xt.registerPlugin("vr", ud), ud
}),
function a(s, o, c) {
  function h(i, t) {
    if(!o[i]) {
      if(!s[i]) {
        var e = "function" == typeof require && require;
        if(!t && e) return e(i, !0);
        if(u) return u(i, !0);
        var n = new Error("Cannot find module '" + i + "'");
        throw n.code = "MODULE_NOT_FOUND", n
      }
      var r = o[i] = {
        exports: {}
      };
      s[i][0].call(r.exports, function(t) {
        var e = s[i][1][t];
        return h(e || t)
      }, r, r.exports, a, s, o, c)
    }
    return o[i].exports
  }
  for(var u = "function" == typeof require && require, t = 0; t < c.length; t++) h(c[t]);
  return h
}({
  1: [function(t, e, i) {
    "use strict";

    function n(e, i, t, n) {
      function r(t) {
        a = i(r, n), e(t - (s || t)), s = t
      }
      var a, s;
      return {
        start: function() {
          a || r(0)
        },
        stop: function() {
          t(a), a = null, s = 0
        }
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.intervalometer = n, i.frameIntervalometer = function(t) {
      return n(t, requestAnimationFrame, cancelAnimationFrame)
    }, i.timerIntervalometer = function(t, e) {
      return n(t, setTimeout, clearTimeout, e)
    }
  }, {}],
  2: [function(t, e, i) {
    "use strict";

    function n(e, t, i, n) {
      function r(t) {
        Boolean(e[i]) === Boolean(n) && t.stopImmediatePropagation(), delete e[i]
      }
      return e.addEventListener(t, r, !1), r
    }

    function r(t, e, i, n) {
      function r(t) {
        i[e] = t
      }
      n && r(t[e]), Object.defineProperty(t, e, {
        get: function() {
          return i[e]
        },
        set: r
      })
    }

    function a(t, e, i) {
      i.addEventListener(e, function() {
        return t.dispatchEvent(new Event(e))
      })
    }

    function s(t, e) {
      Promise.resolve().then(function() {
        t.dispatchEvent(new Event(e))
      })
    }

    function o(t, e, i) {
      (f || 0) + 200 < Date.now() && (t[y] = !0, f = Date.now()), i || (t.currentTime = e), w[++N % 3] = 100 * e | 0
    }

    function c(t) {
      return t.driver.currentTime >= t.video.duration
    }

    function h() {
      var t = this,
        e = t[v];
      t.webkitDisplayingFullscreen ? t[A]() : ("data:" !== e.driver.src && e.driver.src !== t.src && (o(t, 0, !0), e.driver.src = t.src), t.paused && (e.paused = !1, t.buffered.length || t.load(), e.driver.play(), e.updater.start(), e.hasAudio || (s(t, "play"), e.video.readyState >= e.video.HAVE_ENOUGH_DATA && s(t, "playing"))))
    }

    function u(t) {
      var e = this[v];
      e.driver.pause(), e.updater.stop(), this.webkitDisplayingFullscreen && this[x](), e.paused && !t || (e.paused = !0, e.hasAudio || s(this, "pause"), this.ended && (this[y] = !0, s(this, "ended")))
    }

    function l(e, t) {
      var i = e[v] = {};
      i.paused = !0, i.hasAudio = t, i.video = e, i.updater = m.frameIntervalometer(function(t) {
        var e = this;
        e.video.readyState >= e.video.HAVE_FUTURE_DATA ? (e.hasAudio || (e.driver.currentTime = e.video.currentTime + t * e.video.playbackRate / 1e3, e.video.loop && c(e) && (e.driver.currentTime = 0)), o(e.video, e.driver.currentTime)) : e.video.networkState !== e.video.NETWORK_IDLE || e.video.buffered.length || e.video.load(), e.video.ended && (delete e.video[y], e.video.pause(!0))
      }.bind(i)), t ? i.driver = function(t) {
        var e = new Audio;
        return a(t, "play", e), a(t, "playing", e), a(t, "pause", e), e.crossOrigin = t.crossOrigin, e.src = t.src || t.currentSrc || "data:", e
      }(e) : (e.addEventListener("canplay", function() {
        e.paused || s(e, "playing")
      }), i.driver = {
        src: e.src || e.currentSrc || "data:",
        muted: !0,
        paused: !0,
        pause: function() {
          i.driver.paused = !0
        },
        play: function() {
          i.driver.paused = !1, c(i) && o(e, 0)
        },
        get ended() {
          return c(i)
        }
      }), e.addEventListener("emptied", function() {
        var t = !i.driver.src || "data:" === i.driver.src;
        i.driver.src && i.driver.src !== e.src && (o(e, 0, !0), i.driver.src = e.src, t ? i.driver.play() : i.updater.stop())
      }, !1), e.addEventListener("webkitbeginfullscreen", function() {
        e.paused ? t && !i.driver.buffered.length && i.driver.load() : (e.pause(), e[A]())
      }), t && (e.addEventListener("webkitendfullscreen", function() {
        i.driver.currentTime = e.currentTime
      }), e.addEventListener("seeking", function() {
        w.indexOf(100 * e.currentTime | 0) < 0 && (i.driver.currentTime = e.currentTime)
      }))
    }

    function d(t, e, i) {
      void 0 === e && (e = !0), void 0 === i && (i = !0), i && !M || t[v] || (l(t, e), function(t) {
        var e = t[v];
        t[A] = t.play, t[x] = t.pause, t.play = h, t.pause = u, r(t, "paused", e.driver), r(t, "muted", e.driver, !0), r(t, "playbackRate", e.driver, !0), r(t, "ended", e.driver), r(t, "loop", e.driver, !0), n(t, "seeking"), n(t, "seeked"), n(t, "timeupdate", y, !1), n(t, "ended", y, !1)
      }(t), t.classList.add("IIV"), !e && t.autoplay && t.play(), /iPhone|iPod|iPad/.test(navigator.platform))
    }
    var p, f, g = (p = t("poor-mans-symbol")) && "object" == typeof p && "default" in p ? p.default : p,
      m = t("intervalometer"),
      M = /iPhone|iPod/i.test(navigator.userAgent) && !matchMedia("(-webkit-video-playable-inline)").matches,
      v = g(),
      y = g(),
      A = g("nativeplay"),
      x = g("nativepause"),
      w = [],
      N = 0;
    d.isWhitelisted = M, e.exports = d
  }, {
    intervalometer: 1,
    "poor-mans-symbol": 3
  }],
  3: [function(t, e, i) {
    "use strict";
    var n = "undefined" == typeof Symbol ? function(t) {
      return "@" + (t || "@") + Math.random()
    } : Symbol;
    e.exports = n
  }, {}],
  4: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var o = n(t("../lib/Detector")),
      c = n(t("../lib/MobileBuffering"));
    i.default = function(r, a, t) {
      var s = 2 < arguments.length && void 0 !== t ? t : {};
      return {
        constructor: function(t, e) {
          this.settings = e, this.width = t.el().offsetWidth, this.height = t.el().offsetHeight, this.lon = e.initLon, this.lat = e.initLat, this.phi = 0, this.theta = 0, this.videoType = e.videoType, this.clickToToggle = e.clickToToggle, this.mouseDown = !1, this.isUserInteracting = !1, this.keyDown = !0, this.navTimer, this.navDown = !1, this.navAnim, this.iniLat, this.iniLon, this.speed = 1, this.settings.navSpeed < 1 && 0 < this.settings.navSpeed && (this.speed = this.settings.navSpeed), this.step = 2.5, 0 < navigator.userAgent.indexOf("Firefox") && (this.step = 4), this.renderer = new a.WebGLRenderer, this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(this.width, this.height), this.renderer.autoClear = !1, this.renderer.setClearColor(0, 1);
          var i = s.getTech(t);
          if(this.supportVideoTexture = o.default.supportVideoTexture(), this.liveStreamOnSafari = o.default.isLiveStreamOnSafari(i), this.liveStreamOnSafari && (this.supportVideoTexture = !1), this.supportVideoTexture) this.texture = new a.Texture(i);
          else {
            this.helperCanvas = t.addChild("HelperCanvas", {
              video: i,
              width: this.width,
              height: this.height
            });
            var n = this.helperCanvas.el();
            this.texture = new a.Texture(n)
          }
          i.style.display = "none", this.texture.generateMipmaps = !1, this.texture.minFilter = a.LinearFilter, this.texture.maxFilter = a.LinearFilter, this.texture.format = a.RGBFormat, this.el_ = this.renderer.domElement, this.el_.classList.add("vjs-video-canvas"), e.el = this.el_, r.call(this, t, e), this.attachControlEvents(), this.player().on("play", function() {
            this.time = (new Date).getTime(), this.iniLon = this.lon, this.iniLat = this.lat, this.animate(), e.nav && this.attachNav(e, t.el(), this)
          }.bind(this))
        },
        attachNav: function(t, e, i) {
          var n = document.createElement("div");
          n.className = "vjs-vr-nav", "left" == t.nav_position && (n.style.left = "20px");
          var r = document.createElement("div");
          r.className = "vjs-dir vjs-dir-up";
          var a = document.createElement("div");
          a.className = "vjs-dir vjs-dir-down";
          var s = document.createElement("div");
          s.className = "vjs-dir vjs-dir-left";
          var o = document.createElement("div");
          o.className = "vjs-dir vjs-dir-right";
          var c = document.createElement("div");
          c.className = "vjs-vr-reset", n.appendChild(r), n.appendChild(o), n.appendChild(a), n.appendChild(s), n.appendChild(c), e.appendChild(n), s.onmousedown = this.handleNavDown.bind(this), s.onmouseup = this.handleNavUp.bind(this), o.onmousedown = this.handleNavDown.bind(this), o.onmouseup = this.handleNavUp.bind(this), r.onmousedown = this.handleNavDown.bind(this), r.onmouseup = this.handleNavUp.bind(this), a.onmousedown = this.handleNavDown.bind(this), a.onmouseup = this.handleNavUp.bind(this), c.onmousedown = this.handleNavDown.bind(this), c.onmouseup = this.handleNavUp.bind(this)
        },
        attachControlEvents: function() {
          1 < this.settings.navSpeed && (this.settings.navSpeed = 1), document.onmousemove = this.handleMouseMove.bind(this), this.on("touchmove", this.handleMouseMove.bind(this)), this.on("mousedown", this.handleMouseDown.bind(this)), this.on("touchstart", this.handleMouseDown.bind(this)), document.onmouseup = this.handleMouseUp.bind(this), this.settings.keys && (document.onkeydown = this.handleKeyDown.bind(this)), this.settings.keys && (document.onkeyup = this.handleKeyUp.bind(this)), this.on("touchend", this.handleMouseUp.bind(this)), this.settings.scrollable && (this.on("mousewheel", this.handleMouseWheel.bind(this)), this.on("MozMousePixelScroll", this.handleMouseWheel.bind(this))), this.on("mouseenter", this.handleMouseEnter.bind(this))
        },
        handleNavDown: function(t) {
          var e = t.target.className,
            i = this;
          if(-1 < e.indexOf("vjs-dir-left")) {
            var n = function() {
              i.navAnim = requestAnimationFrame(n), i.lon = i.lon - i.step * i.speed
            };
            n()
          } else if(-1 < e.indexOf("vjs-dir-right")) {
            var r = function() {
              i.navAnim = requestAnimationFrame(r), i.lon = i.lon + i.step * i.speed
            };
            r()
          } else if(-1 < e.indexOf("vjs-dir-up")) {
            var a = function() {
              i.navAnim = requestAnimationFrame(a), i.lat = i.lat + i.step * i.speed
            };
            a()
          } else if(-1 < e.indexOf("vjs-dir-down")) {
            var s = function() {
              i.navAnim = requestAnimationFrame(s), i.lat = i.lat - i.step * i.speed
            };
            s()
          } else -1 < e.indexOf("vjs-vr-reset") && (i.lon = this.iniLon, i.lat = this.iniLat)
        },
        handleNavUp: function(t) {
          cancelAnimationFrame(this.navAnim)
        },
        handleResize: function() {
          this.width = this.player().el().offsetWidth, this.height = this.player().el().offsetHeight, this.renderer.setSize(this.width, this.height)
        },
        handleMouseUp: function(t) {
          if(this.mouseDown = !1, this.clickToToggle) {
            var e = t.clientX || t.changedTouches && t.changedTouches[0].clientX,
              i = t.clientY || t.changedTouches && t.changedTouches[0].clientY;
            if(void 0 === e || "undefined" === i) return;
            var n = Math.abs(e - this.onPointerDownPointerX),
              r = Math.abs(i - this.onPointerDownPointerY);
            n < .1 && r < .1 && (this.player().paused() ? this.player().play() : this.player().pause())
          }
        },
        handleMouseDown: function(t) {
          t.preventDefault();
          var e = t.clientX || t.touches && t.touches[0].clientX,
            i = t.clientY || t.touches && t.touches[0].clientY;
          void 0 !== e && "undefined" !== i && (this.mouseDown = !0, this.onPointerDownPointerX = e, this.onPointerDownPointerY = i, this.onPointerDownLon = this.lon, this.onPointerDownLat = this.lat)
        },
        handleMouseMove: function(t) {
          var e = t.clientX || t.touches && t.touches[0].clientX,
            i = t.clientY || t.touches && t.touches[0].clientY;
          if(void 0 !== e && "undefined" !== i)
            if(this.settings.clickAndDrag = !0, this.settings.clickAndDrag) this.mouseDown && (this.lon = .2 * (this.onPointerDownPointerX - e) + this.onPointerDownLon, this.lat = .2 * (i - this.onPointerDownPointerY) + this.onPointerDownLat);
            else if(this.mouseDown) {
            var n = t.pageX - this.el_.offsetLeft,
              r = t.pageY - this.el_.offsetTop;
            this.lon = n / this.width * 430 - 225, this.lat = r / this.height * -180 + 90
          }
        },
        handleKeyUp: function(t) {
          cancelAnimationFrame(this.navTimer), this.keyDown = !0
        },
        handleKeyDown: function(t) {
          if(void 0 !== this.texture) {
            event.preventDefault();
            var e, i = this,
              n = event || window.event;
            if(39 == (e = n.which ? n.which : n.keyCode) && i.keyDown) i.keyDown = !1, (r = function() {
              i.navTimer = requestAnimationFrame(r), i.lon = i.lon + i.step * i.speed
            })();
            else if(37 == e && i.keyDown) {
              i.keyDown = !1, (r = function() {
                i.navTimer = requestAnimationFrame(r), i.lon = i.lon - i.step * i.speed
              })()
            } else if(38 == e && i.keyDown) {
              i.keyDown = !1, (r = function() {
                i.navTimer = requestAnimationFrame(r), i.lat = i.lat - i.step * i.speed
              })()
            } else if(40 == e && i.keyDown) {
              var r;
              i.keyDown = !1, (r = function() {
                i.navTimer = requestAnimationFrame(r), i.lat = i.lat + i.step * i.speed
              })()
            } else 36 == e && i.keyDown && (i.keyDown = !1, i.lon = this.iniLon, i.lat = this.iniLat)
          }
        },
        handleMobileOrientation: function(t) {
          if(void 0 !== t.rotationRate) {
            var e = t.rotationRate.alpha,
              i = t.rotationRate.beta,
              n = void 0 !== t.portrait ? t.portrait : window.matchMedia("(orientation: portrait)").matches,
              r = void 0 !== t.landscape ? t.landscape : window.matchMedia("(orientation: landscape)").matches,
              a = t.orientation || window.orientation;
            if(n) this.lon = this.lon - i * this.settings.mobileVibrationValue, this.lat = this.lat + e * this.settings.mobileVibrationValue;
            else if(r) {
              var s = -90;
              void 0 !== a && (s = a), this.lon = -90 == s ? this.lon + e * this.settings.mobileVibrationValue : this.lon - e * this.settings.mobileVibrationValue, this.lat = -90 == s ? this.lat + i * this.settings.mobileVibrationValue : this.lat - i * this.settings.mobileVibrationValue
            }
          }
        },
        handleMouseWheel: function(t) {
          t.stopPropagation(), t.preventDefault()
        },
        handleMouseEnter: function(t) {
          this.isUserInteracting = !0
        },
        handleMouseLease: function(t) {
          this.isUserInteracting = !1, this.mouseDown = !1, this.handleMouseUp(t)
        },
        animate: function() {
          if(this.requestAnimationId = requestAnimationFrame(this.animate.bind(this)), !this.player().paused() && void 0 !== this.texture && (!this.isPlayOnMobile && 2 <= this.player().readyState() || this.isPlayOnMobile && this.player().hasClass("vjs-playing"))) {
            var t = (new Date).getTime();
            if(30 <= t - this.time && (this.texture.needsUpdate = !0, this.time = t), this.isPlayOnMobile) {
              var e = this.player().currentTime();
              c.default.isBuffering(e) ? this.player().hasClass("vjs-panorama-mobile-inline-video-buffering") || this.player().addClass("vjs-panorama-mobile-inline-video-buffering") : this.player().hasClass("vjs-panorama-mobile-inline-video-buffering") && this.player().removeClass("vjs-panorama-mobile-inline-video-buffering")
            }
          }
          this.render()
        },
        render: function() {
          if(!this.isUserInteracting) {
            var t = this.lat > this.settings.initLat ? -1 : 1,
              e = this.lon > this.settings.initLon ? -1 : 1;
            this.settings.backToVerticalCenter && (this.lat = this.lat > this.settings.initLat - Math.abs(this.settings.returnStepLat) && this.lat < this.settings.initLat + Math.abs(this.settings.returnStepLat) ? this.settings.initLat : this.lat + this.settings.returnStepLat * t), this.settings.backToHorizonCenter && (this.lon = this.lon > this.settings.initLon - Math.abs(this.settings.returnStepLon) && this.lon < this.settings.initLon + Math.abs(this.settings.returnStepLon) ? this.settings.initLon : this.lon + this.settings.returnStepLon * e)
          }
          this.lat = Math.max(this.settings.minLat, Math.min(this.settings.maxLat, this.lat)), this.lon = Math.max(this.settings.minLon, Math.min(this.settings.maxLon, this.lon)), this.phi = a.Math.degToRad(90 - this.lat), this.theta = a.Math.degToRad(this.lon), this.supportVideoTexture || this.helperCanvas.update(), this.renderer.clear()
        },
        playOnMobile: function() {
          this.isPlayOnMobile = !0, this.settings.autoMobileOrientation && window.addEventListener("devicemotion", this.handleMobileOrientation.bind(this))
        },
        el: function() {
          return this.el_
        }
      }
    }
  }, {
    "../lib/Detector": 6,
    "../lib/MobileBuffering": 8
  }],
  5: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var r = n(t("./BaseCanvas")),
      c = n(t("./Util"));
    i.default = function(t, d, e) {
      var i = 2 < arguments.length && void 0 !== e ? e : {},
        p = (0, r.default)(t, d, i);
      return c.default.extend(p, {
        constructor: function(t, e) {
          p.constructor.call(this, t, e), this.VRMode = !1, this.scene = new d.Scene, this.camera = new d.PerspectiveCamera(e.initFov, this.width / this.height, 1, 2e3), this.camera.target = new d.Vector3(0, 0, 0);
          var i = "equirectangular" === this.videoType ? new d.SphereGeometry(500, 60, 40) : new d.SphereBufferGeometry(500, 60, 40).toNonIndexed();
          if("fisheye" === this.videoType) {
            for(var n = i.attributes.normal.array, r = i.attributes.uv.array, a = 0, s = n.length / 3; a < s; a++) {
              var o = n[3 * a + 0],
                c = n[3 * a + 1],
                h = n[3 * a + 2],
                u = Math.asin(Math.sqrt(o * o + h * h) / Math.sqrt(o * o + c * c + h * h)) / Math.PI;
              c < 0 && (u = 1 - u);
              var l = 0 == o && 0 == h ? 0 : Math.acos(o / Math.sqrt(o * o + h * h));
              h < 0 && (l *= -1), r[2 * a + 0] = -.8 * u * Math.cos(l) + .5, r[2 * a + 1] = .8 * u * Math.sin(l) + .5
            }
            i.rotateX(e.rotateX), i.rotateY(e.rotateY), i.rotateZ(e.rotateZ)
          }
          i.scale(-1, 1, 1), this.mesh = new d.Mesh(i, new d.MeshBasicMaterial({
            map: this.texture
          })), this.scene.add(this.mesh)
        },
        enableVR: function() {
          if(this.VRMode = !0, "undefined" != typeof vrHMD) {
            var t = vrHMD.getEyeParameters("left"),
              e = vrHMD.getEyeParameters("right");
            this.eyeFOVL = t.recommendedFieldOfView, this.eyeFOVR = e.recommendedFieldOfView
          }
          this.cameraL = new d.PerspectiveCamera(this.camera.fov, this.width / 2 / this.height, 1, 2e3), this.cameraR = new d.PerspectiveCamera(this.camera.fov, this.width / 2 / this.height, 1, 2e3)
        },
        disableVR: function() {
          this.VRMode = !1, this.renderer.setViewport(0, 0, this.width, this.height), this.renderer.setScissor(0, 0, this.width, this.height)
        },
        handleResize: function() {
          p.handleResize.call(this), this.camera.aspect = this.width / this.height, this.camera.updateProjectionMatrix(), this.VRMode && (this.cameraL.aspect = this.camera.aspect / 2, this.cameraR.aspect = this.camera.aspect / 2, this.cameraL.updateProjectionMatrix(), this.cameraR.updateProjectionMatrix())
        },
        handleMouseWheel: function(t) {
          p.handleMouseWheel(t), t.wheelDeltaY ? this.camera.fov -= .05 * t.wheelDeltaY : t.wheelDelta ? this.camera.fov -= .05 * t.wheelDelta : t.detail && (this.camera.fov += 1 * t.detail), this.camera.fov = Math.min(this.settings.maxFov, this.camera.fov), this.camera.fov = Math.max(this.settings.minFov, this.camera.fov), this.camera.updateProjectionMatrix(), this.VRMode && (this.cameraL.fov = this.camera.fov, this.cameraR.fov = this.camera.fov, this.cameraL.updateProjectionMatrix(), this.cameraR.updateProjectionMatrix())
        },
        render: function() {
          if(p.render.call(this), this.camera.target.x = 500 * Math.sin(this.phi) * Math.cos(this.theta), this.camera.target.y = 500 * Math.cos(this.phi), this.camera.target.z = 500 * Math.sin(this.phi) * Math.sin(this.theta), this.camera.lookAt(this.camera.target), this.VRMode) {
            var t = this.width / 2,
              e = this.height;
            if("undefined" != typeof vrHMD) this.cameraL.projectionMatrix = c.default.fovToProjection(this.eyeFOVL, !0, this.camera.near, this.camera.far), this.cameraR.projectionMatrix = c.default.fovToProjection(this.eyeFOVR, !0, this.camera.near, this.camera.far);
            else {
              var i = this.lon + this.settings.VRGapDegree,
                n = this.lon - this.settings.VRGapDegree,
                r = d.Math.degToRad(i),
                a = d.Math.degToRad(n),
                s = c.default.deepCopy(this.camera.target);
              s.x = 500 * Math.sin(this.phi) * Math.cos(r), s.z = 500 * Math.sin(this.phi) * Math.sin(r), this.cameraL.lookAt(s);
              var o = c.default.deepCopy(this.camera.target);
              o.x = 500 * Math.sin(this.phi) * Math.cos(a), o.z = 500 * Math.sin(this.phi) * Math.sin(a), this.cameraR.lookAt(o)
            }
            this.renderer.setViewport(0, 0, t, e), this.renderer.setScissor(0, 0, t, e), this.renderer.render(this.scene, this.cameraL), this.renderer.setViewport(t, 0, t, e), this.renderer.setScissor(t, 0, t, e), this.renderer.render(this.scene, this.cameraR)
          } else this.renderer.render(this.scene, this.camera)
        }
      })
    }
  }, {
    "./BaseCanvas": 4,
    "./Util": 11
  }],
  6: [function(t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var r = {
      canvas: !!window.CanvasRenderingContext2D,
      webgl: function() {
        try {
          var t = document.createElement("canvas");
          return !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
        } catch (t) {
          return !1
        }
      }(),
      workers: !!window.Worker,
      fileapi: window.File && window.FileReader && window.FileList && window.Blob,
      Check_Version: function() {
        var t = -1;
        if("Microsoft Internet Explorer" == navigator.appName) {
          var e = navigator.userAgent;
          null !== new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
        } else if("Netscape" == navigator.appName)
          if(-1 !== navigator.appVersion.indexOf("Trident")) t = 11;
          else {
            e = navigator.userAgent;
            null !== new RegExp("Edge/([0-9]{1,}[\\.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
          } return t
      },
      supportVideoTexture: function() {
        var t = this.Check_Version();
        return -1 === t || 13 <= t
      },
      isLiveStreamOnSafari: function(t) {
        for(var e = t.querySelectorAll("source"), i = !1, n = 0; n < e.length; n++) {
          var r = e[n];
          ("application/x-mpegURL" == r.type || "application/vnd.apple.mpegurl" == r.type) && /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) && (i = !0);
          break
        }
        return i
      },
      getWebGLErrorMessage: function() {
        var t = document.createElement("div");
        return t.id = "webgl-error-message", this.webgl || (t.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")), t
      },
      addGetWebGLMessage: function(t) {
        var e, i, n;
        e = void 0 !== (t = t || {}).parent ? t.parent : document.body, i = void 0 !== t.id ? t.id : "oldie", (n = r.getWebGLErrorMessage()).id = i, e.appendChild(n)
      }
    };
    i.default = r
  }, {}],
  7: [function(t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var n = document.createElement("canvas");
    n.className = "vjs-video-helper-canvas";
    i.default = function(i) {
      return {
        constructor: function(t, e) {
          this.videoElement = e.video, this.width = e.width, this.height = e.height, n.width = this.width, n.height = this.height, n.style.display = "none", e.el = n, this.context = n.getContext("2d"), this.context.drawImage(this.videoElement, 0, 0, this.width, this.height), i.call(this, t, e)
        },
        getContext: function() {
          return this.context
        },
        update: function() {
          this.context.drawImage(this.videoElement, 0, 0, this.width, this.height)
        },
        el: function() {
          return n
        }
      }
    }
  }, {}],
  8: [function(t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    i.default = {
      prev_currentTime: 0,
      counter: 0,
      isBuffering: function(t) {
        return t == this.prev_currentTime ? this.counter++ : this.counter = 0, this.prev_currentTime = t, 10 < this.counter && (this.counter = 10, !0)
      }
    }
  }, {}],
  9: [function(t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    i.default = function(i) {
      var n = document.createElement("div");
      return n.className = "vjs-video-notice-label", {
        constructor: function(t, e) {
          "object" == r(e.NoticeMessage) ? (n = e.NoticeMessage, e.el = e.NoticeMessage) : "string" == typeof e.NoticeMessage && (n.innerHTML = e.NoticeMessage, e.el = n), i.call(this, t, e)
        },
        el: function() {
          return n
        }
      }
    }
  }, {}],
  10: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var r = n(t("./BaseCanvas")),
      a = n(t("./Util"));
    i.default = function(t, u, e) {
      var i = 2 < arguments.length && void 0 !== e ? e : {},
        l = (0, r.default)(t, u, i);
      return a.default.extend(l, {
        constructor: function(t, e) {
          l.constructor.call(this, t, e), this.scene = new u.Scene;
          var i = this.width / this.height / 2;
          this.cameraL = new u.PerspectiveCamera(e.initFov, i, 1, 2e3), this.cameraL.target = new u.Vector3(0, 0, 0), this.cameraR = new u.PerspectiveCamera(e.initFov, i, 1, 2e3), this.cameraR.position.set(1e3, 0, 0), this.cameraR.target = new u.Vector3(1e3, 0, 0);
          for(var n = new u.SphereBufferGeometry(500, 60, 40).toNonIndexed(), r = new u.SphereBufferGeometry(500, 60, 40).toNonIndexed(), a = n.attributes.uv.array, s = n.attributes.normal.array, o = 0; o < s.length / 3; o++) a[2 * o + 1] = a[2 * o + 1] / 2;
          var c = r.attributes.uv.array,
            h = r.attributes.normal.array;
          for(o = 0; o < h.length / 3; o++) c[2 * o + 1] = c[2 * o + 1] / 2 + .5;
          n.scale(-1, 1, 1), r.scale(-1, 1, 1), this.meshL = new u.Mesh(n, new u.MeshBasicMaterial({
            map: this.texture
          })), this.meshR = new u.Mesh(r, new u.MeshBasicMaterial({
            map: this.texture
          })), this.meshR.position.set(1e3, 0, 0), this.scene.add(this.meshL), this.scene.add(this.meshR), e.callback && e.callback()
        },
        handleResize: function() {
          l.handleResize.call(this);
          var t = this.width / this.height / 2;
          this.cameraL.aspect = t, this.cameraR.aspect = t, this.cameraL.updateProjectionMatrix(), this.cameraR.updateProjectionMatrix()
        },
        handleMouseWheel: function(t) {
          l.handleMouseWheel(t), t.wheelDeltaY ? this.cameraL.fov -= .05 * t.wheelDeltaY : t.wheelDelta ? this.cameraL.fov -= .05 * t.wheelDelta : t.detail && (this.cameraL.fov += 1 * t.detail), this.cameraL.fov = Math.min(this.settings.maxFov, this.cameraL.fov), this.cameraL.fov = Math.max(this.settings.minFov, this.cameraL.fov), this.cameraR.fov = this.cameraL.fov, this.cameraL.updateProjectionMatrix(), this.cameraR.updateProjectionMatrix()
        },
        render: function() {
          l.render.call(this);
          var t = this.width / 2,
            e = this.height;
          this.cameraL.target.x = 500 * Math.sin(this.phi) * Math.cos(this.theta), this.cameraL.target.y = 500 * Math.cos(this.phi), this.cameraL.target.z = 500 * Math.sin(this.phi) * Math.sin(this.theta), this.cameraL.lookAt(this.cameraL.target), this.cameraR.target.x = 1e3 + 500 * Math.sin(this.phi) * Math.cos(this.theta), this.cameraR.target.y = 500 * Math.cos(this.phi), this.cameraR.target.z = 500 * Math.sin(this.phi) * Math.sin(this.theta), this.cameraR.lookAt(this.cameraR.target), this.renderer.setViewport(0, 0, t, e), this.renderer.setScissor(0, 0, t, e), this.renderer.render(this.scene, this.cameraL), this.renderer.setViewport(t, 0, t, e), this.renderer.setScissor(t, 0, t, e), this.renderer.render(this.scene, this.cameraR)
        }
      })
    }
  }, {
    "./BaseCanvas": 4,
    "./Util": 11
  }],
  11: [function(t, e, i) {
    "use strict";

    function a(t, e, i, n) {
      i = void 0 === i ? .01 : i, n = void 0 === n ? 1e4 : n;
      var r = (e = void 0 === e || e) ? -1 : 1,
        a = new THREE.Matrix4,
        s = a.elements,
        o = function(t) {
          var e = 2 / (t.leftTan + t.rightTan),
            i = (t.leftTan - t.rightTan) * e * .5,
            n = 2 / (t.upTan + t.downTan);
          return {
            scale: [e, n],
            offset: [i, (t.upTan - t.downTan) * n * .5]
          }
        }(t);
      return s[0] = o.scale[0], s[1] = 0, s[2] = o.offset[0] * r, s[3] = 0, s[4] = 0, s[5] = o.scale[1], s[6] = -o.offset[1] * r, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = n / (i - n) * -r, s[11] = n * i / (i - n), s[12] = 0, s[13] = 0, s[14] = r, s[15] = 0, a.transpose(), a
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = {
      whichTransitionEvent: function() {
        var t, e = document.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for(t in i)
          if(void 0 !== e.style[t]) return i[t]
      },
      mobileAndTabletcheck: function() {
        var t, e = !1;
        return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
      },
      isIos: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent)
      },
      isRealIphone: function() {
        return /iPhone|iPod/i.test(navigator.platform)
      },
      fovToProjection: function(t, e, i, n) {
        var r = Math.PI / 180;
        return a({
          upTan: Math.tan(t.upDegrees * r),
          downTan: Math.tan(t.downDegrees * r),
          leftTan: Math.tan(t.leftDegrees * r),
          rightTan: Math.tan(t.rightDegrees * r)
        }, e, i, n)
      },
      extend: function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        for(var i in t) t.hasOwnProperty(i) && !e.hasOwnProperty(i) && (e[i] = t[i]);
        return e
      },
      deepCopy: function(t) {
        var e = {};
        for(var i in t) e[i] = t[i];
        return e
      }
    }
  }, {}],
  12: [function(t, e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
      value: !0
    })
  }, {}],
  13: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function a(e, t) {
      var i = function(t) {
        var e = t.getChild("Canvas");
        return function() {
          t.el().style.width = window.innerWidth + "px", t.el().style.height = window.innerHeight + "px", e.handleResize()
        }
      }(e);
      e.controlBar.fullscreenToggle.off("tap", t), e.controlBar.fullscreenToggle.on("tap", function() {
        var t = e.getChild("Canvas");
        e.isFullscreen() ? (e.isFullscreen(!1), e.exitFullWindow(), e.el().style.width = "", e.el().style.height = "", t.handleResize(), window.removeEventListener("devicemotion", i)) : (e.isFullscreen(!0), e.enterFullWindow(), i(), window.addEventListener("devicemotion", i))
      })
    }
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    var s = n(t("./lib/Util")),
      o = n(t("./lib/Detector")),
      c = n(t("iphone-inline-video")),
      h = s.default.mobileAndTabletcheck(),
      r = {
        clickAndDrag: h,
        showNotice: !1,
        NoticeMessage: "Please use your mouse drag and drop the video.",
        autoHideNotice: 3e3,
        scrollable: !0,
        initFov: 75,
        maxFov: 105,
        minFov: 51,
        initLat: 0,
        initLon: -180,
        returnStepLat: .5,
        returnStepLon: 2,
        backToVerticalCenter: !1,
        backToHorizonCenter: !1,
        clickToToggle: !1,
        minLat: -85,
        maxLat: 85,
        minLon: -1 / 0,
        maxLon: 1 / 0,
        nav: !0,
        keys: !0,
        nav_position: "right",
        navSpedd: 1,
        videoType: "equirectangular",
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        autoMobileOrientation: !1,
        mobileVibrationValue: s.default.isIos() ? .022 : 1,
        VREnable: !0,
        VRGapDegree: 2.5,
        closePanorama: !1
      };
    i.default = function(t) {
      var i = 0 < arguments.length && void 0 !== t ? t : {},
        n = ["equirectangular", "fisheye", "3dVideo"];
      return function(t) {
        var e = this;
        i.mergeOption && (t = i.mergeOption(r, t)), void 0 !== i._init && "function" == typeof i._init && (-1 == n.indexOf(t.videoType) && (t.videoType = r.videoType), i._init(t), this.ready(function() {
          ! function(t, e, i) {
            if(t.addClass("vjs-panorama"), !o.default.webgl) return PopupNotification(t, {
              NoticeMessage: o.default.getWebGLErrorMessage(),
              autoHideNotice: e.autoHideNotice
            }), e.callback && e.callback();
            t.addChild("Canvas", s.default.deepCopy(e));
            var n = t.getChild("Canvas");
            if(h) {
              var r = i.getTech(t);
              s.default.isRealIphone() && (r.setAttribute("playsinline", ""), (0, c.default)(r, !0)), s.default.isIos() && a(t, i.getFullscreenToggleClickFn(t)), t.addClass("vjs-panorama-mobile-inline-video"), t.removeClass("vjs-using-native-controls"), n.playOnMobile()
            }
            n.hide(), t.on("play", function() {
              n.show()
            }), t.on("fullscreenchange", function() {
              n.handleResize()
            }), e.callback && e.callback()
          }(e, t, i)
        }))
      }
    }
  }, {
    "./lib/Detector": 6,
    "./lib/Util": 11,
    "iphone-inline-video": 2
  }],
  14: [function(t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function r(t) {
      return t.tech({
        IWillNotUseThisInPlugins: !0
      }).el()
    }
    var a = n(t("./lib/Canvas")),
      s = n(t("./lib/ThreeCanvas")),
      o = (n(t("./lib/Notice")), n(t("./lib/HelperCanvas"))),
      c = n(t("./plugin")),
      h = videojs.getComponent("Component"),
      u = (0, o.default)(h);
    videojs.registerComponent("HelperCanvas", videojs.extend(h, u)), videojs.registerPlugin("panorama", (0, c.default)({
      _init: function(t) {
        var e = "3dVideo" !== t.videoType ? (0, a.default)(h, window.THREE, {
          getTech: r
        }) : (0, s.default)(h, window.THREE, {
          getTech: r
        });
        videojs.registerComponent("Canvas", videojs.extend(h, e))
      },
      mergeOption: function(t, e) {
        return videojs.mergeOptions(t, e)
      },
      getTech: r,
      getFullscreenToggleClickFn: function(t) {
        return t.controlBar.fullscreenToggle.handleClick
      }
    }))
  }, {
    "./lib/Canvas": 5,
    "./lib/HelperCanvas": 7,
    "./lib/Notice": 9,
    "./lib/ThreeCanvas": 10,
    "./plugin": 13
  }]
}, {}, [14]);
var t = 0;
