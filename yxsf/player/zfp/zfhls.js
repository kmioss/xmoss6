"undefined" != typeof window &&
function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
} (this, (function() {
	return function(e) {
		var t = {};
		function r(i) {
			if (t[i]) return t[i].exports;
			var a = t[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(a.exports, a, a.exports, r),
			a.l = !0,
			a.exports
		}
		return r.m = e,
		r.c = t,
		r.d = function(e, t, i) {
			r.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: i
			})
		},
		r.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}),
			Object.defineProperty(e, "__esModule", {
				value: !0
			})
		},
		r.t = function(e, t) {
			if (1 & t && (e = r(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var i = Object.create(null);
			if (r.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e) for (var a in e) r.d(i, a,
			function(t) {
				return e[t]
			}.bind(null, a));
			return i
		},
		r.n = function(e) {
			var t = e && e.__esModule ?
			function() {
				return e.
			default
			}:
			function() {
				return e
			};
			return r.d(t, "a", t),
			t
		},
		r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		r.p = "/dist/",
		r(r.s = 13)
	} ([function(e, t, r) {
		"use strict";
		r.d(t, "a", (function() {
			return d
		})),
		r.d(t, "b", (function() {
			return c
		}));
		var i = r(5);
		function a() {}
		var n = {
			trace: a,
			debug: a,
			log: a,
			warn: a,
			info: a,
			error: a
		},
		s = n;
		function o(e, t) {
			return t = "[" + e + "] > " + t
		}
		var l = Object(i.a)();
		function u(e) {
			var t = l.console[e];
			return t ?
			function() {
				for (var r = arguments.length,
				i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
				i[0] && (i[0] = o(e, i[0])),
				t.apply(l.console, i)
			}: a
		}
		var d = function(e) {
			if (l.console && !0 === e || "object" == typeof e) { !
				function(e) {
					for (var t = arguments.length,
					r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
					r.forEach((function(t) {
						s[t] = e[t] ? e[t].bind(e) : u(t)
					}))
				} (e, "debug", "log", "info", "warn", "error");
				try {
					s.log()
				} catch(e) {
					s = n
				}
			} else s = n
		},
		c = s
	},
	function(e, t, r) {
		"use strict";
		t.a = {
			MEDIA_ATTACHING: "hlsMediaAttaching",
			MEDIA_ATTACHED: "hlsMediaAttached",
			MEDIA_DETACHING: "hlsMediaDetaching",
			MEDIA_DETACHED: "hlsMediaDetached",
			BUFFER_RESET: "hlsBufferReset",
			BUFFER_CODECS: "hlsBufferCodecs",
			BUFFER_CREATED: "hlsBufferCreated",
			BUFFER_APPENDING: "hlsBufferAppending",
			BUFFER_APPENDED: "hlsBufferAppended",
			BUFFER_EOS: "hlsBufferEos",
			BUFFER_FLUSHING: "hlsBufferFlushing",
			BUFFER_FLUSHED: "hlsBufferFlushed",
			MANIFEST_LOADING: "hlsManifestLoading",
			MANIFEST_LOADED: "hlsManifestLoaded",
			MANIFEST_PARSED: "hlsManifestParsed",
			LEVEL_SWITCHING: "hlsLevelSwitching",
			LEVEL_SWITCHED: "hlsLevelSwitched",
			LEVEL_LOADING: "hlsLevelLoading",
			LEVEL_LOADED: "hlsLevelLoaded",
			LEVEL_UPDATED: "hlsLevelUpdated",
			LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
			LEVELS_UPDATED: "hlsLevelsUpdated",
			AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
			AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
			AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
			AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
			AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
			SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
			SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
			SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
			SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
			SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
			CUES_PARSED: "hlsCuesParsed",
			NON_NATIVE_TEXT_TRACKS_FOUND: "hlsNonNativeTextTracksFound",
			INIT_PTS_FOUND: "hlsInitPtsFound",
			FRAG_LOADING: "hlsFragLoading",
			FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
			FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
			FRAG_LOADED: "hlsFragLoaded",
			FRAG_DECRYPTED: "hlsFragDecrypted",
			FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
			FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
			FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
			FRAG_PARSING_DATA: "hlsFragParsingData",
			FRAG_PARSED: "hlsFragParsed",
			FRAG_BUFFERED: "hlsFragBuffered",
			FRAG_CHANGED: "hlsFragChanged",
			FPS_DROP: "hlsFpsDrop",
			FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
			ERROR: "hlsError",
			DESTROYING: "hlsDestroying",
			KEY_LOADING: "hlsKeyLoading",
			KEY_LOADED: "hlsKeyLoaded",
			STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
			LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
		}
	},
	function(e, t, r) {
		"use strict";
		var i, a;
		r.d(t, "b", (function() {
			return i
		})),
		r.d(t, "a", (function() {
			return a
		})),
		function(e) {
			e.NETWORK_ERROR = "networkError",
			e.MEDIA_ERROR = "mediaError",
			e.KEY_SYSTEM_ERROR = "keySystemError",
			e.MUX_ERROR = "muxError",
			e.OTHER_ERROR = "otherError"
		} (i || (i = {})),
		function(e) {
			e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
			e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
			e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
			e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
			e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData",
			e.MANIFEST_LOAD_ERROR = "manifestLoadError",
			e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
			e.MANIFEST_PARSING_ERROR = "manifestParsingError",
			e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
			e.LEVEL_EMPTY_ERROR = "levelEmptyError",
			e.LEVEL_LOAD_ERROR = "levelLoadError",
			e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
			e.LEVEL_SWITCH_ERROR = "levelSwitchError",
			e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
			e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
			e.FRAG_LOAD_ERROR = "fragLoadError",
			e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
			e.FRAG_DECRYPT_ERROR = "fragDecryptError",
			e.FRAG_PARSING_ERROR = "fragParsingError",
			e.REMUX_ALLOC_ERROR = "remuxAllocError",
			e.KEY_LOAD_ERROR = "keyLoadError",
			e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
			e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
			e.BUFFER_APPEND_ERROR = "bufferAppendError",
			e.BUFFER_APPENDING_ERROR = "bufferAppendingError",
			e.BUFFER_STALLED_ERROR = "bufferStalledError",
			e.BUFFER_FULL_ERROR = "bufferFullError",
			e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
			e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
			e.INTERNAL_EXCEPTION = "internalException"
		} (a || (a = {}))
	},
	function(e, t, r) {
		"use strict";
		r.d(t, "a", (function() {
			return i
		}));
		var i = Number.isFinite ||
		function(e) {
			return "number" == typeof e && isFinite(e)
		}
	},
	function(e, t, r) {
		"use strict";
		r.d(t, "b", (function() {
			return o
		}));
		var i, a = r(5),
		n = function() {
			function e() {}
			return e.isHeader = function(e, t) {
				return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
			},
			e.isFooter = function(e, t) {
				return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
			},
			e.getID3Data = function(t, r) {
				for (var i = r,
				a = 0; e.isHeader(t, r);) {
					a += 10,
					a += e._readSize(t, r + 6),
					e.isFooter(t, r + 10) && (a += 10),
					r += a
				}
				if (a > 0) return t.subarray(i, i + a)
			},
			e._readSize = function(e, t) {
				var r = 0;
				return r = (127 & e[t]) << 21,
				r |= (127 & e[t + 1]) << 14,
				r |= (127 & e[t + 2]) << 7,
				r |= 127 & e[t + 3]
			},
			e.getTimeStamp = function(t) {
				for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) {
					var a = r[i];
					if (e.isTimeStampFrame(a)) return e._readTimeStamp(a)
				}
			},
			e.isTimeStampFrame = function(e) {
				return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
			},
			e._getFrameData = function(t) {
				var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
				i = e._readSize(t, 4);
				return {
					type: r,
					size: i,
					data: t.subarray(10, 10 + i)
				}
			},
			e.getID3Frames = function(t) {
				for (var r = 0,
				i = []; e.isHeader(t, r);) {
					for (var a = e._readSize(t, r + 6), n = (r += 10) + a; r + 8 < n;) {
						var s = e._getFrameData(t.subarray(r)),
						o = e._decodeFrame(s);
						o && i.push(o),
						r += s.size + 10
					}
					e.isFooter(t, r) && (r += 10)
				}
				return i
			},
			e._decodeFrame = function(t) {
				return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
			},
			e._readTimeStamp = function(e) {
				if (8 === e.data.byteLength) {
					var t = new Uint8Array(e.data),
					r = 1 & t[3],
					i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
					return i /= 45,
					r && (i += 47721858.84),
					Math.round(i)
				}
			},
			e._decodePrivFrame = function(t) {
				if (! (t.size < 2)) {
					var r = e._utf8ArrayToStr(t.data, !0),
					i = new Uint8Array(t.data.subarray(r.length + 1));
					return {
						key: t.type,
						info: r,
						data: i.buffer
					}
				}
			},
			e._decodeTextFrame = function(t) {
				if (! (t.size < 2)) {
					if ("TXXX" === t.type) {
						var r = 1,
						i = e._utf8ArrayToStr(t.data.subarray(r), !0);
						r += i.length + 1;
						var a = e._utf8ArrayToStr(t.data.subarray(r));
						return {
							key: t.type,
							info: i,
							data: a
						}
					}
					var n = e._utf8ArrayToStr(t.data.subarray(1));
					return {
						key: t.type,
						data: n
					}
				}
			},
			e._decodeURLFrame = function(t) {
				if ("WXXX" === t.type) {
					if (t.size < 2) return;
					var r = 1,
					i = e._utf8ArrayToStr(t.data.subarray(r));
					r += i.length + 1;
					var a = e._utf8ArrayToStr(t.data.subarray(r));
					return {
						key: t.type,
						info: i,
						data: a
					}
				}
				var n = e._utf8ArrayToStr(t.data);
				return {
					key: t.type,
					data: n
				}
			},
			e._utf8ArrayToStr = function(e, t) {
				void 0 === t && (t = !1);
				var r = s();
				if (r) {
					var i = r.decode(e);
					if (t) {
						var a = i.indexOf("\0");
						return - 1 !== a ? i.substring(0, a) : i
					}
					return i.replace(/\0/g, "")
				}
				for (var n, o, l, u = e.length,
				d = "",
				c = 0; c < u;) {
					if (0 === (n = e[c++]) && t) return d;
					if (0 !== n && 3 !== n) switch (n >> 4) {
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
						d += String.fromCharCode(n);
						break;
					case 12:
					case 13:
						o = e[c++],
						d += String.fromCharCode((31 & n) << 6 | 63 & o);
						break;
					case 14:
						o = e[c++],
						l = e[c++],
						d += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | (63 & l) << 0)
					}
				}
				return d
			},
			e
		} ();
		function s() {
			var e = Object(a.a)();
			return i || void 0 === e.TextDecoder || (i = new e.TextDecoder("utf-8")),
			i
		}
		var o = n._utf8ArrayToStr;
		t.a = n
	},
	function(e, t, r) {
		"use strict";
		function i() {
			return "undefined" == typeof window ? self: window
		}
		r.d(t, "a", (function() {
			return i
		}))
	},
	function(e, t, r) {
		var i, a, n, s, o;
		i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
		a = /^([^\/?#]*)(.*)$/,
		n = /(?:\/|^)\.(?=\/)/g,
		s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
		o = {
			buildAbsoluteURL: function(e, t, r) {
				if (r = r || {},
				e = e.trim(), !(t = t.trim())) {
					if (!r.alwaysNormalize) return e;
					var i = o.parseURL(e);
					if (!i) throw new Error("Error trying to parse base URL.");
					return i.path = o.normalizePath(i.path),
					o.buildURLFromParts(i)
				}
				var n = o.parseURL(t);
				if (!n) throw new Error("Error trying to parse relative URL.");
				if (n.scheme) return r.alwaysNormalize ? (n.path = o.normalizePath(n.path), o.buildURLFromParts(n)) : t;
				var s = o.parseURL(e);
				if (!s) throw new Error("Error trying to parse base URL.");
				if (!s.netLoc && s.path && "/" !== s.path[0]) {
					var l = a.exec(s.path);
					s.netLoc = l[1],
					s.path = l[2]
				}
				s.netLoc && !s.path && (s.path = "/");
				var u = {
					scheme: s.scheme,
					netLoc: n.netLoc,
					path: null,
					params: n.params,
					query: n.query,
					fragment: n.fragment
				};
				if (!n.netLoc && (u.netLoc = s.netLoc, "/" !== n.path[0])) if (n.path) {
					var d = s.path,
					c = d.substring(0, d.lastIndexOf("/") + 1) + n.path;
					u.path = o.normalizePath(c)
				} else u.path = s.path,
				n.params || (u.params = s.params, n.query || (u.query = s.query));
				return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path),
				o.buildURLFromParts(u)
			},
			parseURL: function(e) {
				var t = i.exec(e);
				return t ? {
					scheme: t[1] || "",
					netLoc: t[2] || "",
					path: t[3] || "",
					params: t[4] || "",
					query: t[5] || "",
					fragment: t[6] || ""
				}: null
			},
			normalizePath: function(e) {
				for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(s, "")).length;);
				return e.split("").reverse().join("")
			},
			buildURLFromParts: function(e) {
				return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
			}
		},
		e.exports = o
	},
	function(e, t, r) {
		"use strict";
		var i = function() {
			function e(e, t) {
				this.subtle = e,
				this.aesIV = t
			}
			return e.prototype.decrypt = function(e, t) {
				return this.subtle.decrypt({
					name: "AES-CBC",
					iv: this.aesIV
				},
				t, e)
			},
			e
		} (),
		a = function() {
			function e(e, t) {
				this.subtle = e,
				this.key = t
			}
			return e.prototype.expandKey = function() {
				return this.subtle.importKey("raw", this.key, {
					name: "AES-CBC"
				},
				!1, ["encrypt", "decrypt"])
			},
			e
		} ();
		var n = function() {
			function e() {
				this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
				this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
				this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
				this.sBox = new Uint32Array(256),
				this.invSBox = new Uint32Array(256),
				this.key = new Uint32Array(0),
				this.initTable()
			}
			var t = e.prototype;
			return t.uint8ArrayToUint32Array_ = function(e) {
				for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = t.getUint32(4 * i);
				return r
			},
			t.initTable = function() {
				var e = this.sBox,
				t = this.invSBox,
				r = this.subMix,
				i = r[0],
				a = r[1],
				n = r[2],
				s = r[3],
				o = this.invSubMix,
				l = o[0],
				u = o[1],
				d = o[2],
				c = o[3],
				h = new Uint32Array(256),
				f = 0,
				g = 0,
				p = 0;
				for (p = 0; p < 256; p++) h[p] = p < 128 ? p << 1 : p << 1 ^ 283;
				for (p = 0; p < 256; p++) {
					var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
					v = v >>> 8 ^ 255 & v ^ 99,
					e[f] = v,
					t[v] = f;
					var m = h[f],
					y = h[m],
					b = h[y],
					T = 257 * h[v] ^ 16843008 * v;
					i[f] = T << 24 | T >>> 8,
					a[f] = T << 16 | T >>> 16,
					n[f] = T << 8 | T >>> 24,
					s[f] = T,
					T = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * f,
					l[v] = T << 24 | T >>> 8,
					u[v] = T << 16 | T >>> 16,
					d[v] = T << 8 | T >>> 24,
					c[v] = T,
					f ? (f = m ^ h[h[h[b ^ m]]], g ^= h[h[g]]) : f = g = 1
				}
			},
			t.expandKey = function(e) {
				for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) r = t[i] === this.key[i],
				i++;
				if (!r) {
					this.key = t;
					var a = this.keySize = t.length;
					if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);
					var n, s, o, l, u = this.ksRows = 4 * (a + 6 + 1),
					d = this.keySchedule = new Uint32Array(u),
					c = this.invKeySchedule = new Uint32Array(u),
					h = this.sBox,
					f = this.rcon,
					g = this.invSubMix,
					p = g[0],
					v = g[1],
					m = g[2],
					y = g[3];
					for (n = 0; n < u; n++) n < a ? o = d[n] = t[n] : (l = o, n % a == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l], l ^= f[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]), d[n] = o = (d[n - a] ^ l) >>> 0);
					for (s = 0; s < u; s++) n = u - s,
					l = 3 & s ? d[n] : d[n - 4],
					c[s] = s < 4 || n <= 4 ? l: p[h[l >>> 24]] ^ v[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ y[h[255 & l]],
					c[s] = c[s] >>> 0
				}
			},
			t.networkToHostOrderSwap = function(e) {
				return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
			},
			t.decrypt = function(e, t, r, i) {
				for (var a, n, s, o, l, u, d, c, h, f, g, p, v, m, y, b, T, E = this.keySize + 6,
				S = this.invKeySchedule,
				_ = this.invSBox,
				R = this.invSubMix,
				A = R[0], k = R[1], w = R[2], L = R[3], D = this.uint8ArrayToUint32Array_(r), O = D[0], C = D[1], I = D[2], x = D[3], P = new Int32Array(e), M = new Int32Array(P.length), F = this.networkToHostOrderSwap; t < P.length;) {
					for (h = F(P[t]), f = F(P[t + 1]), g = F(P[t + 2]), p = F(P[t + 3]), l = h ^ S[0], u = p ^ S[1], d = g ^ S[2], c = f ^ S[3], v = 4, m = 1; m < E; m++) a = A[l >>> 24] ^ k[u >> 16 & 255] ^ w[d >> 8 & 255] ^ L[255 & c] ^ S[v],
					n = A[u >>> 24] ^ k[d >> 16 & 255] ^ w[c >> 8 & 255] ^ L[255 & l] ^ S[v + 1],
					s = A[d >>> 24] ^ k[c >> 16 & 255] ^ w[l >> 8 & 255] ^ L[255 & u] ^ S[v + 2],
					o = A[c >>> 24] ^ k[l >> 16 & 255] ^ w[u >> 8 & 255] ^ L[255 & d] ^ S[v + 3],
					l = a,
					u = n,
					d = s,
					c = o,
					v += 4;
					a = _[l >>> 24] << 24 ^ _[u >> 16 & 255] << 16 ^ _[d >> 8 & 255] << 8 ^ _[255 & c] ^ S[v],
					n = _[u >>> 24] << 24 ^ _[d >> 16 & 255] << 16 ^ _[c >> 8 & 255] << 8 ^ _[255 & l] ^ S[v + 1],
					s = _[d >>> 24] << 24 ^ _[c >> 16 & 255] << 16 ^ _[l >> 8 & 255] << 8 ^ _[255 & u] ^ S[v + 2],
					o = _[c >>> 24] << 24 ^ _[l >> 16 & 255] << 16 ^ _[u >> 8 & 255] << 8 ^ _[255 & d] ^ S[v + 3],
					v += 3,
					M[t] = F(a ^ O),
					M[t + 1] = F(o ^ C),
					M[t + 2] = F(s ^ I),
					M[t + 3] = F(n ^ x),
					O = h,
					C = f,
					I = g,
					x = p,
					t += 4
				}
				return i ? (y = M.buffer, b = y.byteLength, (T = b && new DataView(y).getUint8(b - 1)) ? y.slice(0, b - T) : y) : M.buffer
			},
			t.destroy = function() {
				this.key = void 0,
				this.keySize = void 0,
				this.ksRows = void 0,
				this.sBox = void 0,
				this.invSBox = void 0,
				this.subMix = void 0,
				this.invSubMix = void 0,
				this.keySchedule = void 0,
				this.invKeySchedule = void 0,
				this.rcon = void 0
			},
			e
		} (),
		s = r(2),
		o = r(0),
		l = r(1),
		u = r(5),
		d = Object(u.a)(),
		c = function() {
			function e(e, t, r) {
				var i = (void 0 === r ? {}: r).removePKCS7Padding,
				a = void 0 === i || i;
				if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = a, a) try {
					var n = d.crypto;
					n && (this.subtle = n.subtle || n.webkitSubtle)
				} catch(e) {}
				this.disableWebCrypto = !this.subtle
			}
			var t = e.prototype;
			return t.isSync = function() {
				return this.disableWebCrypto && this.config.enableSoftwareAES
			},
			t.decrypt = function(e, t, r, s) {
				var l = this;
				if (this.disableWebCrypto && this.config.enableSoftwareAES) {
					this.logEnabled && (o.b.log("JS AES decrypt"), this.logEnabled = !1);
					var u = this.decryptor;
					u || (this.decryptor = u = new n),
					u.expandKey(t),
					s(u.decrypt(e, 0, r, this.removePKCS7Padding))
				} else {
					this.logEnabled && (o.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
					var d = this.subtle;
					this.key !== t && (this.key = t, this.fastAesKey = new a(d, t)),
					this.fastAesKey.expandKey().then((function(a) {
						new i(d, r).decrypt(e, a).
						catch((function(i) {
							l.onWebCryptoError(i, e, t, r, s)
						})).then((function(e) {
							s(e)
						}))
					})).
					catch((function(i) {
						l.onWebCryptoError(i, e, t, r, s)
					}))
				}
			},
			t.onWebCryptoError = function(e, t, r, i, a) {
				this.config.enableSoftwareAES ? (o.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, a)) : (o.b.error("decrypting error : " + e.message), this.observer.trigger(l.a.ERROR, {
					type: s.b.MEDIA_ERROR,
					details: s.a.FRAG_DECRYPT_ERROR,
					fatal: !0,
					reason: e.message
				}))
			},
			t.destroy = function() {
				var e = this.decryptor;
				e && (e.destroy(), this.decryptor = void 0)
			},
			e
		} ();
		t.a = c
	},
	function(e, t, r) {
		"use strict";
		var i = Object.prototype.hasOwnProperty,
		a = "~";
		function n() {}
		function s(e, t, r) {
			this.fn = e,
			this.context = t,
			this.once = r || !1
		}
		function o(e, t, r, i, n) {
			if ("function" != typeof r) throw new TypeError("The listener must be a function");
			var o = new s(r, i || e, n),
			l = a ? a + t: t;
			return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++),
			e
		}
		function l(e, t) {
			0 == --e._eventsCount ? e._events = new n: delete e._events[t]
		}
		function u() {
			this._events = new n,
			this._eventsCount = 0
		}
		Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)),
		u.prototype.eventNames = function() {
			var e, t, r = [];
			if (0 === this._eventsCount) return r;
			for (t in e = this._events) i.call(e, t) && r.push(a ? t.slice(1) : t);
			return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
		},
		u.prototype.listeners = function(e) {
			var t = a ? a + e: e,
			r = this._events[t];
			if (!r) return [];
			if (r.fn) return [r.fn];
			for (var i = 0,
			n = r.length,
			s = new Array(n); i < n; i++) s[i] = r[i].fn;
			return s
		},
		u.prototype.listenerCount = function(e) {
			var t = a ? a + e: e,
			r = this._events[t];
			return r ? r.fn ? 1 : r.length: 0
		},
		u.prototype.emit = function(e, t, r, i, n, s) {
			var o = a ? a + e: e;
			if (!this._events[o]) return ! 1;
			var l, u, d = this._events[o],
			c = arguments.length;
			if (d.fn) {
				switch (d.once && this.removeListener(e, d.fn, void 0, !0), c) {
				case 1:
					return d.fn.call(d.context),
					!0;
				case 2:
					return d.fn.call(d.context, t),
					!0;
				case 3:
					return d.fn.call(d.context, t, r),
					!0;
				case 4:
					return d.fn.call(d.context, t, r, i),
					!0;
				case 5:
					return d.fn.call(d.context, t, r, i, n),
					!0;
				case 6:
					return d.fn.call(d.context, t, r, i, n, s),
					!0
				}
				for (u = 1, l = new Array(c - 1); u < c; u++) l[u - 1] = arguments[u];
				d.fn.apply(d.context, l)
			} else {
				var h, f = d.length;
				for (u = 0; u < f; u++) switch (d[u].once && this.removeListener(e, d[u].fn, void 0, !0), c) {
				case 1:
					d[u].fn.call(d[u].context);
					break;
				case 2:
					d[u].fn.call(d[u].context, t);
					break;
				case 3:
					d[u].fn.call(d[u].context, t, r);
					break;
				case 4:
					d[u].fn.call(d[u].context, t, r, i);
					break;
				default:
					if (!l) for (h = 1, l = new Array(c - 1); h < c; h++) l[h - 1] = arguments[h];
					d[u].fn.apply(d[u].context, l)
				}
			}
			return ! 0
		},
		u.prototype.on = function(e, t, r) {
			return o(this, e, t, r, !1)
		},
		u.prototype.once = function(e, t, r) {
			return o(this, e, t, r, !0)
		},
		u.prototype.removeListener = function(e, t, r, i) {
			var n = a ? a + e: e;
			if (!this._events[n]) return this;
			if (!t) return l(this, n),
			this;
			var s = this._events[n];
			if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || l(this, n);
			else {
				for (var o = 0,
				u = [], d = s.length; o < d; o++)(s[o].fn !== t || i && !s[o].once || r && s[o].context !== r) && u.push(s[o]);
				u.length ? this._events[n] = 1 === u.length ? u[0] : u: l(this, n)
			}
			return this
		},
		u.prototype.removeAllListeners = function(e) {
			var t;
			return e ? (t = a ? a + e: e, this._events[t] && l(this, t)) : (this._events = new n, this._eventsCount = 0),
			this
		},
		u.prototype.off = u.prototype.removeListener,
		u.prototype.addListener = u.prototype.on,
		u.prefixed = a,
		u.EventEmitter = u,
		e.exports = u
	},
	function(e, t, r) {
		"use strict";
		var i = r(1),
		a = r(2),
		n = r(7),
		s = r(3),
		o = r(0),
		l = r(5);
		function u(e, t) {
			return 255 === e[t] && 240 == (246 & e[t + 1])
		}
		function d(e, t) {
			return 1 & e[t + 1] ? 7 : 9
		}
		function c(e, t) {
			return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
		}
		function h(e, t) {
			return !! (t + 1 < e.length && u(e, t))
		}
		function f(e, t) {
			if (h(e, t)) {
				var r = d(e, t);
				t + 5 < e.length && (r = c(e, t));
				var i = t + r;
				if (i === e.length || i + 1 < e.length && u(e, i)) return ! 0
			}
			return ! 1
		}
		function g(e, t, r, n, s) {
			if (!e.samplerate) {
				var l = function(e, t, r, n) {
					var s, l, u, d, c, h = navigator.userAgent.toLowerCase(),
					f = n,
					g = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
					if (s = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > g.length - 1)) return d = (1 & t[r + 2]) << 2,
					d |= (192 & t[r + 3]) >>> 6,
					o.b.log("manifest codec:" + n + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + g[l] + "Hz],channelConfig:" + d),
					/firefox/i.test(h) ? l >= 6 ? (s = 5, c = new Array(4), u = l - 3) : (s = 2, c = new Array(2), u = l) : -1 !== h.indexOf("android") ? (s = 2, c = new Array(2), u = l) : (s = 5, c = new Array(4), n && ( - 1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && l >= 6 ? u = l - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (l >= 6 && 1 === d || /vivaldi/i.test(h)) || !n && 1 === d) && (s = 2, c = new Array(2)), u = l)),
					c[0] = s << 3,
					c[0] |= (14 & l) >> 1,
					c[1] |= (1 & l) << 7,
					c[1] |= d << 3,
					5 === s && (c[1] |= (14 & u) >> 1, c[2] = (1 & u) << 7, c[2] |= 8, c[3] = 0),
					{
						config: c,
						samplerate: g[l],
						channelCount: d,
						codec: "mp4a.40." + s,
						manifestCodec: f
					};
					e.trigger(i.a.ERROR, {
						type: a.b.MEDIA_ERROR,
						details: a.a.FRAG_PARSING_ERROR,
						fatal: !0,
						reason: "invalid ADTS sampling index:" + l
					})
				} (t, r, n, s);
				e.config = l.config,
				e.samplerate = l.samplerate,
				e.channelCount = l.channelCount,
				e.codec = l.codec,
				e.manifestCodec = l.manifestCodec,
				o.b.log("parsed codec:" + e.codec + ",rate:" + l.samplerate + ",nb channel:" + l.channelCount)
			}
		}
		function p(e) {
			return 9216e4 / e
		}
		function v(e, t, r, i, a) {
			var n = function(e, t, r, i, a) {
				var n, s, o = e.length;
				if (n = d(e, t), s = c(e, t), (s -= n) > 0 && t + n + s <= o) return {
					headerLength: n,
					frameLength: s,
					stamp: r + i * a
				}
			} (t, r, i, a, p(e.samplerate));
			if (n) {
				var s = n.stamp,
				o = n.headerLength,
				l = n.frameLength,
				u = {
					unit: t.subarray(r + o, r + o + l),
					pts: s,
					dts: s
				};
				return e.samples.push(u),
				{
					sample: u,
					length: l + o
				}
			}
		}
		var m = r(4),
		y = function() {
			function e(e, t, r) {
				this.observer = e,
				this.config = r,
				this.remuxer = t
			}
			var t = e.prototype;
			return t.resetInitSegment = function(e, t, r, i) {
				this._audioTrack = {
					container: "audio/adts",
					type: "audio",
					id: 0,
					sequenceNumber: 0,
					isAAC: !0,
					samples: [],
					len: 0,
					manifestCodec: t,
					duration: i,
					inputTimeScale: 9e4
				}
			},
			t.resetTimeStamp = function() {},
			e.probe = function(e) {
				if (!e) return ! 1;
				for (var t = (m.a.getID3Data(e, 0) || []).length, r = e.length; t < r; t++) if (f(e, t)) return o.b.log("ADTS sync word found !"),
				!0;
				return ! 1
			},
			t.append = function(e, t, r, i) {
				for (var a = this._audioTrack,
				n = m.a.getID3Data(e, 0) || [], l = m.a.getTimeStamp(n), u = Object(s.a)(l) ? 90 * l: 9e4 * t, d = 0, c = u, f = e.length, p = n.length, y = [{
					pts: c,
					dts: c,
					data: n
				}]; p < f - 1;) if (h(e, p) && p + 5 < f) {
					g(a, this.observer, e, p, a.manifestCodec);
					var b = v(a, e, p, u, d);
					if (!b) {
						o.b.log("Unable to parse AAC frame");
						break
					}
					p += b.length,
					c = b.sample.pts,
					d++
				} else m.a.isHeader(e, p) ? (n = m.a.getID3Data(e, p), y.push({
					pts: c,
					dts: c,
					data: n
				}), p += n.length) : p++;
				this.remuxer.remux(a, {
					samples: []
				},
				{
					samples: y,
					inputTimeScale: 9e4
				},
				{
					samples: []
				},
				t, r, i)
			},
			t.destroy = function() {},
			e
		} (),
		b = r(10),
		T = {
			BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
			SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
			SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
			BytesInSlot: [0, 1, 1, 4],
			appendFrame: function(e, t, r, i, a) {
				if (! (r + 24 > t.length)) {
					var n = this.parseHeader(t, r);
					if (n && r + n.frameLength <= t.length) {
						var s = i + a * (9e4 * n.samplesPerFrame / n.sampleRate),
						o = {
							unit: t.subarray(r, r + n.frameLength),
							pts: s,
							dts: s
						};
						return e.config = [],
						e.channelCount = n.channelCount,
						e.samplerate = n.sampleRate,
						e.samples.push(o),
						{
							sample: o,
							length: n.frameLength
						}
					}
				}
			},
			parseHeader: function(e, t) {
				var r = e[t + 1] >> 3 & 3,
				i = e[t + 1] >> 1 & 3,
				a = e[t + 2] >> 4 & 15,
				n = e[t + 2] >> 2 & 3,
				s = e[t + 2] >> 1 & 1;
				if (1 !== r && 0 !== a && 15 !== a && 3 !== n) {
					var o = 3 === r ? 3 - i: 3 === i ? 3 : 4,
					l = 1e3 * T.BitratesMap[14 * o + a - 1],
					u = 3 === r ? 0 : 2 === r ? 1 : 2,
					d = T.SamplingRateMap[3 * u + n],
					c = e[t + 3] >> 6 == 3 ? 1 : 2,
					h = T.SamplesCoefficients[r][i],
					f = T.BytesInSlot[i],
					g = 8 * h * f;
					return {
						sampleRate: d,
						channelCount: c,
						frameLength: parseInt(h * l / d + s, 10) * f,
						samplesPerFrame: g
					}
				}
			},
			isHeaderPattern: function(e, t) {
				return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
			},
			isHeader: function(e, t) {
				return !! (t + 1 < e.length && this.isHeaderPattern(e, t))
			},
			probe: function(e, t) {
				if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
					var r = this.parseHeader(e, t),
					i = 4;
					r && r.frameLength && (i = r.frameLength);
					var a = t + i;
					if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a)) return ! 0
				}
				return ! 1
			}
		},
		E = T,
		S = function() {
			function e(e) {
				this.data = e,
				this.bytesAvailable = e.byteLength,
				this.word = 0,
				this.bitsAvailable = 0
			}
			var t = e.prototype;
			return t.loadWord = function() {
				var e = this.data,
				t = this.bytesAvailable,
				r = e.byteLength - t,
				i = new Uint8Array(4),
				a = Math.min(4, t);
				if (0 === a) throw new Error("no bytes available");
				i.set(e.subarray(r, r + a)),
				this.word = new DataView(i.buffer).getUint32(0),
				this.bitsAvailable = 8 * a,
				this.bytesAvailable -= a
			},
			t.skipBits = function(e) {
				var t;
				this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
			},
			t.readBits = function(e) {
				var t = Math.min(this.bitsAvailable, e),
				r = this.word >>> 32 - t;
				return e > 32 && o.b.error("Cannot read more than 32 bits at a time"),
				this.bitsAvailable -= t,
				this.bitsAvailable > 0 ? this.word <<= t: this.bytesAvailable > 0 && this.loadWord(),
				(t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
			},
			t.skipLZ = function() {
				var e;
				for (e = 0; e < this.bitsAvailable; ++e) if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e,
				this.bitsAvailable -= e,
				e;
				return this.loadWord(),
				e + this.skipLZ()
			},
			t.skipUEG = function() {
				this.skipBits(1 + this.skipLZ())
			},
			t.skipEG = function() {
				this.skipBits(1 + this.skipLZ())
			},
			t.readUEG = function() {
				var e = this.skipLZ();
				return this.readBits(e + 1) - 1
			},
			t.readEG = function() {
				var e = this.readUEG();
				return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
			},
			t.readBoolean = function() {
				return 1 === this.readBits(1)
			},
			t.readUByte = function() {
				return this.readBits(8)
			},
			t.readUShort = function() {
				return this.readBits(16)
			},
			t.readUInt = function() {
				return this.readBits(32)
			},
			t.skipScalingList = function(e) {
				var t, r = 8,
				i = 8;
				for (t = 0; t < e; t++) 0 !== i && (i = (r + this.readEG() + 256) % 256),
				r = 0 === i ? r: i
			},
			t.readSPS = function() {
				var e, t, r, i, a, n, s, o = 0,
				l = 0,
				u = 0,
				d = 0,
				c = this.readUByte.bind(this),
				h = this.readBits.bind(this),
				f = this.readUEG.bind(this),
				g = this.readBoolean.bind(this),
				p = this.skipBits.bind(this),
				v = this.skipEG.bind(this),
				m = this.skipUEG.bind(this),
				y = this.skipScalingList.bind(this);
				if (c(), e = c(), h(5), p(3), c(), m(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
					var b = f();
					if (3 === b && p(1), m(), m(), p(1), g()) for (n = 3 !== b ? 8 : 12, s = 0; s < n; s++) g() && y(s < 6 ? 16 : 64)
				}
				m();
				var T = f();
				if (0 === T) f();
				else if (1 === T) for (p(1), v(), v(), t = f(), s = 0; s < t; s++) v();
				m(),
				p(1),
				r = f(),
				i = f(),
				0 === (a = h(1)) && p(1),
				p(1),
				g() && (o = f(), l = f(), u = f(), d = f());
				var E = [1, 1];
				if (g() && g()) switch (c()) {
				case 1:
					E = [1, 1];
					break;
				case 2:
					E = [12, 11];
					break;
				case 3:
					E = [10, 11];
					break;
				case 4:
					E = [16, 11];
					break;
				case 5:
					E = [40, 33];
					break;
				case 6:
					E = [24, 11];
					break;
				case 7:
					E = [20, 11];
					break;
				case 8:
					E = [32, 11];
					break;
				case 9:
					E = [80, 33];
					break;
				case 10:
					E = [18, 11];
					break;
				case 11:
					E = [15, 11];
					break;
				case 12:
					E = [64, 33];
					break;
				case 13:
					E = [160, 99];
					break;
				case 14:
					E = [4, 3];
					break;
				case 15:
					E = [3, 2];
					break;
				case 16:
					E = [2, 1];
					break;
				case 255:
					E = [c() << 8 | c(), c() << 8 | c()]
				}
				return {
					width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l),
					height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (u + d),
					pixelRatio: E
				}
			},
			t.readSliceType = function() {
				return this.readUByte(),
				this.readUEG(),
				this.readUEG()
			},
			e
		} (),
		_ = function() {
			function e(e, t, r, i) {
				this.decryptdata = r,
				this.discardEPB = i,
				this.decrypter = new n.a(e, t, {
					removePKCS7Padding: !1
				})
			}
			var t = e.prototype;
			return t.decryptBuffer = function(e, t) {
				this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
			},
			t.decryptAacSample = function(e, t, r, i) {
				var a = e[t].unit,
				n = a.subarray(16, a.length - a.length % 16),
				s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
				o = this;
				this.decryptBuffer(s, (function(n) {
					n = new Uint8Array(n),
					a.set(n, 16),
					i || o.decryptAacSamples(e, t + 1, r)
				}))
			},
			t.decryptAacSamples = function(e, t, r) {
				for (;; t++) {
					if (t >= e.length) return void r();
					if (! (e[t].unit.length < 32)) {
						var i = this.decrypter.isSync();
						if (this.decryptAacSample(e, t, r, i), !i) return
					}
				}
			},
			t.getAvcEncryptedData = function(e) {
				for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160, i += 16) r.set(e.subarray(a, a + 16), i);
				return r
			},
			t.getAvcDecryptedUnit = function(e, t) {
				t = new Uint8Array(t);
				for (var r = 0,
				i = 32; i <= e.length - 16; i += 160, r += 16) e.set(t.subarray(r, r + 16), i);
				return e
			},
			t.decryptAvcSample = function(e, t, r, i, a, n) {
				var s = this.discardEPB(a.data),
				o = this.getAvcEncryptedData(s),
				l = this;
				this.decryptBuffer(o.buffer, (function(o) {
					a.data = l.getAvcDecryptedUnit(s, o),
					n || l.decryptAvcSamples(e, t, r + 1, i)
				}))
			},
			t.decryptAvcSamples = function(e, t, r, i) {
				for (;; t++, r = 0) {
					if (t >= e.length) return void i();
					for (var a = e[t].units; ! (r >= a.length); r++) {
						var n = a[r];
						if (! (n.length <= 48 || 1 !== n.type && 5 !== n.type)) {
							var s = this.decrypter.isSync();
							if (this.decryptAvcSample(e, t, r, i, n, s), !s) return
						}
					}
				}
			},
			e
		} (),
		R = {
			video: 1,
			audio: 2,
			id3: 3,
			text: 4
		},
		A = function() {
			function e(e, t, r, i) {
				this.observer = e,
				this.config = r,
				this.typeSupported = i,
				this.remuxer = t,
				this.sampleAes = null
			}
			var t = e.prototype;
			return t.setDecryptData = function(e) {
				null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new _(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
			},
			e.probe = function(t) {
				var r = e._syncOffset(t);
				return ! (r < 0) && (r && o.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
			},
			e._syncOffset = function(e) {
				for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
					if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
					r++
				}
				return - 1
			},
			e.createTrack = function(e, t) {
				return {
					container: "video" === e || "audio" === e ? "video/mp2t": void 0,
					type: e,
					id: R[e],
					pid: -1,
					inputTimeScale: 9e4,
					sequenceNumber: 0,
					samples: [],
					dropped: "video" === e ? 0 : void 0,
					isAAC: "audio" === e || void 0,
					duration: "audio" === e ? t: void 0
				}
			},
			t.resetInitSegment = function(t, r, i, a) {
				this.pmtParsed = !1,
				this._pmtId = -1,
				this._avcTrack = e.createTrack("video", a),
				this._audioTrack = e.createTrack("audio", a),
				this._id3Track = e.createTrack("id3", a),
				this._txtTrack = e.createTrack("text", a),
				this.aacOverFlow = null,
				this.aacLastPTS = null,
				this.avcSample = null,
				this.audioCodec = r,
				this.videoCodec = i,
				this._duration = a
			},
			t.resetTimeStamp = function() {},
			t.append = function(t, r, n, s) {
				var l, u, d, c, h, f = t.length,
				g = !1;
				this.contiguous = n;
				var p = this.pmtParsed,
				v = this._avcTrack,
				m = this._audioTrack,
				y = this._id3Track,
				b = v.pid,
				T = m.pid,
				E = y.pid,
				S = this._pmtId,
				_ = v.pesData,
				R = m.pesData,
				A = y.pesData,
				k = this._parsePAT,
				w = this._parsePMT,
				L = this._parsePES,
				D = this._parseAVCPES.bind(this),
				O = this._parseAACPES.bind(this),
				C = this._parseMPEGPES.bind(this),
				I = this._parseID3PES.bind(this),
				x = e._syncOffset(t);
				for (f -= (f + x) % 188, l = x; l < f; l += 188) if (71 === t[l]) {
					if (u = !!(64 & t[l + 1]), d = ((31 & t[l + 1]) << 8) + t[l + 2], (48 & t[l + 3]) >> 4 > 1) {
						if ((c = l + 5 + t[l + 4]) === l + 188) continue
					} else c = l + 4;
					switch (d) {
					case b:
						u && (_ && (h = L(_)) && D(h, !1), _ = {
							data: [],
							size: 0
						}),
						_ && (_.data.push(t.subarray(c, l + 188)), _.size += l + 188 - c);
						break;
					case T:
						u && (R && (h = L(R)) && (m.isAAC ? O(h) : C(h)), R = {
							data: [],
							size: 0
						}),
						R && (R.data.push(t.subarray(c, l + 188)), R.size += l + 188 - c);
						break;
					case E:
						u && (A && (h = L(A)) && I(h), A = {
							data: [],
							size: 0
						}),
						A && (A.data.push(t.subarray(c, l + 188)), A.size += l + 188 - c);
						break;
					case 0:
						u && (c += t[c] + 1),
						S = this._pmtId = k(t, c);
						break;
					case S:
						u && (c += t[c] + 1);
						var P = w(t, c, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes); (b = P.avc) > 0 && (v.pid = b),
						(T = P.audio) > 0 && (m.pid = T, m.isAAC = P.isAAC),
						(E = P.id3) > 0 && (y.pid = E),
						g && !p && (o.b.log("reparse from beginning"), g = !1, l = x - 188),
						p = this.pmtParsed = !0;
						break;
					case 17:
					case 8191:
						break;
					default:
						g = !0
					}
				} else this.observer.trigger(i.a.ERROR, {
					type: a.b.MEDIA_ERROR,
					details: a.a.FRAG_PARSING_ERROR,
					fatal: !1,
					reason: "TS packet did not start with 0x47"
				});
				_ && (h = L(_)) ? (D(h, !0), v.pesData = null) : v.pesData = _,
				R && (h = L(R)) ? (m.isAAC ? O(h) : C(h), m.pesData = null) : (R && R.size && o.b.log("last AAC PES packet truncated,might overlap between fragments"), m.pesData = R),
				A && (h = L(A)) ? (I(h), y.pesData = null) : y.pesData = A,
				null == this.sampleAes ? this.remuxer.remux(m, v, y, this._txtTrack, r, n, s) : this.decryptAndRemux(m, v, y, this._txtTrack, r, n, s)
			},
			t.decryptAndRemux = function(e, t, r, i, a, n, s) {
				if (e.samples && e.isAAC) {
					var o = this;
					this.sampleAes.decryptAacSamples(e.samples, 0, (function() {
						o.decryptAndRemuxAvc(e, t, r, i, a, n, s)
					}))
				} else this.decryptAndRemuxAvc(e, t, r, i, a, n, s)
			},
			t.decryptAndRemuxAvc = function(e, t, r, i, a, n, s) {
				if (t.samples) {
					var o = this;
					this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() {
						o.remuxer.remux(e, t, r, i, a, n, s)
					}))
				} else this.remuxer.remux(e, t, r, i, a, n, s)
			},
			t.destroy = function() {
				this._initPTS = this._initDTS = void 0,
				this._duration = 0
			},
			t._parsePAT = function(e, t) {
				return (31 & e[t + 10]) << 8 | e[t + 11]
			},
			t._parsePMT = function(e, t, r, i) {
				var a, n, s = {
					audio: -1,
					avc: -1,
					id3: -1,
					isAAC: !0
				};
				for (a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a;) {
					switch (n = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
					case 207:
						if (!i) {
							o.b.log("unknown stream type:" + e[t]);
							break
						}
					case 15:
						-1 === s.audio && (s.audio = n);
						break;
					case 21:
						-1 === s.id3 && (s.id3 = n);
						break;
					case 219:
						if (!i) {
							o.b.log("unknown stream type:" + e[t]);
							break
						}
					case 27:
						-1 === s.avc && (s.avc = n);
						break;
					case 3:
					case 4:
						r ? -1 === s.audio && (s.audio = n, s.isAAC = !1) : o.b.log("MPEG audio found, not supported in this browser for now");
						break;
					case 36:
						o.b.warn("HEVC stream type found, not supported for now");
						break;
					default:
						o.b.log("unknown stream type:" + e[t])
					}
					t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
				}
				return s
			},
			t._parsePES = function(e) {
				var t, r, i, a, n, s, l, u, d = 0,
				c = e.data;
				if (!e || 0 === e.size) return null;
				for (; c[0].length < 19 && c.length > 1;) {
					var h = new Uint8Array(c[0].length + c[1].length);
					h.set(c[0]),
					h.set(c[1], c[0].length),
					c[0] = h,
					c.splice(1, 1)
				}
				if (1 === ((t = c[0])[0] << 16) + (t[1] << 8) + t[2]) {
					if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
					if (192 & (r = t[7]) && ((s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (s -= 8589934592), 64 & r ? ((l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (l -= 8589934592), s - l > 54e5 && (o.b.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"), s = l)) : l = s), u = (a = t[8]) + 9, e.size <= u) return null;
					e.size -= u,
					n = new Uint8Array(e.size);
					for (var f = 0,
					g = c.length; f < g; f++) {
						var p = (t = c[f]).byteLength;
						if (u) {
							if (u > p) {
								u -= p;
								continue
							}
							t = t.subarray(u),
							p -= u,
							u = 0
						}
						n.set(t, d),
						d += p
					}
					return i && (i -= a + 3),
					{
						data: n,
						pts: s,
						dts: l,
						len: i
					}
				}
				return null
			},
			t.pushAccesUnit = function(e, t) {
				if (e.units.length && e.frame) {
					var r = t.samples,
					i = r.length;
					if (isNaN(e.pts)) {
						if (!i) return void t.dropped++;
						var a = r[i - 1];
						e.pts = a.pts,
						e.dts = a.dts
					} ! this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++
				}
				e.debug.length && o.b.log(e.pts + "/" + e.dts + ":" + e.debug)
			},
			t._parseAVCPES = function(e, t) {
				var r, i, a, n = this,
				s = this._avcTrack,
				o = this._parseAVCNALu(e.data),
				l = this.avcSample,
				u = !1,
				d = this.pushAccesUnit.bind(this),
				c = function(e, t, r, i) {
					return {
						key: e,
						pts: t,
						dts: r,
						units: [],
						debug: i
					}
				};
				e.data = null,
				l && o.length && !s.audFound && (d(l, s), l = this.avcSample = c(!1, e.pts, e.dts, "")),
				o.forEach((function(t) {
					switch (t.type) {
					case 1:
						i = !0,
						l || (l = n.avcSample = c(!0, e.pts, e.dts, "")),
						l.frame = !0;
						var o = t.data;
						if (u && o.length > 4) {
							var h = new S(o).readSliceType();
							2 !== h && 4 !== h && 7 !== h && 9 !== h || (l.key = !0)
						}
						break;
					case 5:
						i = !0,
						l || (l = n.avcSample = c(!0, e.pts, e.dts, "")),
						l.key = !0,
						l.frame = !0;
						break;
					case 6:
						i = !0,
						(r = new S(n.discardEPB(t.data))).readUByte();
						for (var f = 0,
						g = 0,
						p = !1,
						v = 0; ! p && r.bytesAvailable > 1;) {
							f = 0;
							do {
								f += v = r.readUByte()
							} while ( 255 === v );
							g = 0;
							do {
								g += v = r.readUByte()
							} while ( 255 === v );
							if (4 === f && 0 !== r.bytesAvailable) {
								if (p = !0, 181 === r.readUByte()) if (49 === r.readUShort()) if (1195456820 === r.readUInt()) if (3 === r.readUByte()) {
									var y = r.readUByte(),
									b = 31 & y,
									T = [y, r.readUByte()];
									for (a = 0; a < b; a++) T.push(r.readUByte()),
									T.push(r.readUByte()),
									T.push(r.readUByte());
									n._insertSampleInOrder(n._txtTrack.samples, {
										type: 3,
										pts: e.pts,
										bytes: T
									})
								}
							} else if (5 === f && 0 !== r.bytesAvailable) {
								if (p = !0, g > 16) {
									var E = [];
									for (a = 0; a < 16; a++) E.push(r.readUByte().toString(16)),
									3 !== a && 5 !== a && 7 !== a && 9 !== a || E.push("-");
									var _ = g - 16,
									R = new Uint8Array(_);
									for (a = 0; a < _; a++) R[a] = r.readUByte();
									n._insertSampleInOrder(n._txtTrack.samples, {
										pts: e.pts,
										payloadType: f,
										uuid: E.join(""),
										userDataBytes: R,
										userData: Object(m.b)(R.buffer)
									})
								}
							} else if (g < r.bytesAvailable) for (a = 0; a < g; a++) r.readUByte()
						}
						break;
					case 7:
						if (i = !0, u = !0, !s.sps) {
							var A = (r = new S(t.data)).readSPS();
							s.width = A.width,
							s.height = A.height,
							s.pixelRatio = A.pixelRatio,
							s.sps = [t.data],
							s.duration = n._duration;
							var k = t.data.subarray(1, 4),
							w = "avc1.";
							for (a = 0; a < 3; a++) {
								var L = k[a].toString(16);
								L.length < 2 && (L = "0" + L),
								w += L
							}
							s.codec = w
						}
						break;
					case 8:
						i = !0,
						s.pps || (s.pps = [t.data]);
						break;
					case 9:
						i = !1,
						s.audFound = !0,
						l && d(l, s),
						l = n.avcSample = c(!1, e.pts, e.dts, "");
						break;
					case 12:
						i = !1;
						break;
					default:
						i = !1,
						l && (l.debug += "unknown NAL " + t.type + " ")
					}
					l && i && l.units.push(t)
				})),
				t && l && (d(l, s), this.avcSample = null)
			},
			t._insertSampleInOrder = function(e, t) {
				var r = e.length;
				if (r > 0) {
					if (t.pts >= e[r - 1].pts) e.push(t);
					else for (var i = r - 1; i >= 0; i--) if (t.pts < e[i].pts) {
						e.splice(i, 0, t);
						break
					}
				} else e.push(t)
			},
			t._getLastNalUnit = function() {
				var e, t = this.avcSample;
				if (!t || 0 === t.units.length) {
					var r = this._avcTrack.samples;
					t = r[r.length - 1]
				}
				if (t) {
					var i = t.units;
					e = i[i.length - 1]
				}
				return e
			},
			t._parseAVCNALu = function(e) {
				var t, r, i, a, n = 0,
				s = e.byteLength,
				o = this._avcTrack,
				l = o.naluState || 0,
				u = l,
				d = [],
				c = -1;
				for ( - 1 === l && (c = 0, a = 31 & e[0], l = 0, n = 1); n < s;) if (t = e[n++], l) if (1 !== l) if (t) if (1 === t) {
					if (c >= 0) i = {
						data: e.subarray(c, n - l - 1),
						type: a
					},
					d.push(i);
					else {
						var h = this._getLastNalUnit();
						if (h && (u && n <= 4 - u && h.state && (h.data = h.data.subarray(0, h.data.byteLength - u)), (r = n - l - 1) > 0)) {
							var f = new Uint8Array(h.data.byteLength + r);
							f.set(h.data, 0),
							f.set(e.subarray(0, r), h.data.byteLength),
							h.data = f
						}
					}
					n < s ? (c = n, a = 31 & e[n], l = 0) : l = -1
				} else l = 0;
				else l = 3;
				else l = t ? 0 : 2;
				else l = t ? 0 : 1;
				if (c >= 0 && l >= 0 && (i = {
					data: e.subarray(c, s),
					type: a,
					state: l
				},
				d.push(i)), 0 === d.length) {
					var g = this._getLastNalUnit();
					if (g) {
						var p = new Uint8Array(g.data.byteLength + e.byteLength);
						p.set(g.data, 0),
						p.set(e, g.data.byteLength),
						g.data = p
					}
				}
				return o.naluState = l,
				d
			},
			t.discardEPB = function(e) {
				for (var t, r, i = e.byteLength,
				a = [], n = 1; n < i - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2), n += 2) : n++;
				if (0 === a.length) return e;
				t = i - a.length,
				r = new Uint8Array(t);
				var s = 0;
				for (n = 0; n < t; s++, n++) s === a[0] && (s++, a.shift()),
				r[n] = e[s];
				return r
			},
			t._parseAACPES = function(e) {
				var t, r, n, s, l, u, d, c = this._audioTrack,
				f = e.data,
				m = e.pts,
				y = this.aacOverFlow,
				b = this.aacLastPTS;
				if (y) {
					var T = new Uint8Array(y.byteLength + f.byteLength);
					T.set(y, 0),
					T.set(f, y.byteLength),
					f = T
				}
				for (n = 0, l = f.length; n < l - 1 && !h(f, n); n++);
				if (n && (n < l - 1 ? (u = "AAC PES did not start with ADTS header,offset:" + n, d = !1) : (u = "no ADTS header found in AAC PES", d = !0), o.b.warn("parsing error:" + u), this.observer.trigger(i.a.ERROR, {
					type: a.b.MEDIA_ERROR,
					details: a.a.FRAG_PARSING_ERROR,
					fatal: d,
					reason: u
				}), d)) return;
				if (g(c, this.observer, f, n, this.audioCodec), r = 0, t = p(c.samplerate), y && b) {
					var E = b + t;
					Math.abs(E - m) > 1 && (o.b.log("AAC: align PTS for overlapping frames by " + Math.round((E - m) / 90)), m = E)
				}
				for (; n < l;) {
					if (h(f, n)) {
						if (n + 5 < l) {
							var S = v(c, f, n, m, r);
							if (S) {
								n += S.length,
								s = S.sample.pts,
								r++;
								continue
							}
						}
						break
					}
					n++
				}
				y = n < l ? f.subarray(n, l) : null,
				this.aacOverFlow = y,
				this.aacLastPTS = s
			},
			t._parseMPEGPES = function(e) {
				for (var t = e.data,
				r = t.length,
				i = 0,
				a = 0,
				n = e.pts; a < r;) if (E.isHeader(t, a)) {
					var s = E.appendFrame(this._audioTrack, t, a, n, i);
					if (!s) break;
					a += s.length,
					i++
				} else a++
			},
			t._parseID3PES = function(e) {
				this._id3Track.samples.push(e)
			},
			e
		} (),
		k = function() {
			function e(e, t, r) {
				this.observer = e,
				this.config = r,
				this.remuxer = t
			}
			var t = e.prototype;
			return t.resetInitSegment = function(e, t, r, i) {
				this._audioTrack = {
					container: "audio/mpeg",
					type: "audio",
					id: -1,
					sequenceNumber: 0,
					isAAC: !1,
					samples: [],
					len: 0,
					manifestCodec: t,
					duration: i,
					inputTimeScale: 9e4
				}
			},
			t.resetTimeStamp = function() {},
			e.probe = function(e) {
				var t, r, i = m.a.getID3Data(e, 0);
				if (i && void 0 !== m.a.getTimeStamp(i)) for (t = i.length, r = Math.min(e.length - 1, t + 100); t < r; t++) if (E.probe(e, t)) return o.b.log("MPEG Audio sync word found !"),
				!0;
				return ! 1
			},
			t.append = function(e, t, r, i) {
				for (var a = m.a.getID3Data(e, 0), n = m.a.getTimeStamp(a), s = n ? 90 * n: 9e4 * t, o = a.length, l = e.length, u = 0, d = 0, c = this._audioTrack, h = [{
					pts: s,
					dts: s,
					data: a
				}]; o < l;) if (E.isHeader(e, o)) {
					var f = E.appendFrame(c, e, o, s, u);
					if (!f) break;
					o += f.length,
					d = f.sample.pts,
					u++
				} else m.a.isHeader(e, o) ? (a = m.a.getID3Data(e, o), h.push({
					pts: d,
					dts: d,
					data: a
				}), o += a.length) : o++;
				this.remuxer.remux(c, {
					samples: []
				},
				{
					samples: h,
					inputTimeScale: 9e4
				},
				{
					samples: []
				},
				t, r, i)
			},
			t.destroy = function() {},
			e
		} (),
		w = function() {
			function e() {}
			return e.getSilentFrame = function(e, t) {
				switch (e) {
				case "mp4a.40.2":
					if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
					if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
					if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
					if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
					if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
					if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
					break;
				default:
					if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
					if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
					if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
				}
				return null
			},
			e
		} (),
		L = Math.pow(2, 32) - 1,
		D = function() {
			function e() {}
			return e.init = function() {
				var t;
				for (t in e.types = {
					avc1: [],
					avcC: [],
					btrt: [],
					dinf: [],
					dref: [],
					esds: [],
					ftyp: [],
					hdlr: [],
					mdat: [],
					mdhd: [],
					mdia: [],
					mfhd: [],
					minf: [],
					moof: [],
					moov: [],
					mp4a: [],
					".mp3": [],
					mvex: [],
					mvhd: [],
					pasp: [],
					sdtp: [],
					stbl: [],
					stco: [],
					stsc: [],
					stsd: [],
					stsz: [],
					stts: [],
					tfdt: [],
					tfhd: [],
					traf: [],
					trak: [],
					trun: [],
					trex: [],
					tkhd: [],
					vmhd: [],
					smhd: []
				},
				e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
				var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
				i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
				e.HDLR_TYPES = {
					video: r,
					audio: i
				};
				var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
				n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
				e.STTS = e.STSC = e.STCO = n,
				e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
				e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
				e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
				var s = new Uint8Array([105, 115, 111, 109]),
				o = new Uint8Array([97, 118, 99, 49]),
				l = new Uint8Array([0, 0, 0, 1]);
				e.FTYP = e.box(e.types.ftyp, s, l, s, o),
				e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a))
			},
			e.box = function(e) {
				for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;) i += r[a].byteLength;
				for ((t = new Uint8Array(i))[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), a = 0, i = 8; a < n; a++) t.set(r[a], i),
				i += r[a].byteLength;
				return t
			},
			e.hdlr = function(t) {
				return e.box(e.types.hdlr, e.HDLR_TYPES[t])
			},
			e.mdat = function(t) {
				return e.box(e.types.mdat, t)
			},
			e.mdhd = function(t, r) {
				r *= t;
				var i = Math.floor(r / (L + 1)),
				a = Math.floor(r % (L + 1));
				return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
			},
			e.mdia = function(t) {
				return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
			},
			e.mfhd = function(t) {
				return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
			},
			e.minf = function(t) {
				return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
			},
			e.moof = function(t, r, i) {
				return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
			},
			e.moov = function(t) {
				for (var r = t.length,
				i = []; r--;) i[r] = e.trak(t[r]);
				return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
			},
			e.mvex = function(t) {
				for (var r = t.length,
				i = []; r--;) i[r] = e.trex(t[r]);
				return e.box.apply(null, [e.types.mvex].concat(i))
			},
			e.mvhd = function(t, r) {
				r *= t;
				var i = Math.floor(r / (L + 1)),
				a = Math.floor(r % (L + 1)),
				n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
				return e.box(e.types.mvhd, n)
			},
			e.sdtp = function(t) {
				var r, i, a = t.samples || [],
				n = new Uint8Array(4 + a.length);
				for (i = 0; i < a.length; i++) r = a[i].flags,
				n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
				return e.box(e.types.sdtp, n)
			},
			e.stbl = function(t) {
				return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
			},
			e.avc1 = function(t) {
				var r, i, a, n = [],
				s = [];
				for (r = 0; r < t.sps.length; r++) a = (i = t.sps[r]).byteLength,
				n.push(a >>> 8 & 255),
				n.push(255 & a),
				n = n.concat(Array.prototype.slice.call(i));
				for (r = 0; r < t.pps.length; r++) a = (i = t.pps[r]).byteLength,
				s.push(a >>> 8 & 255),
				s.push(255 & a),
				s = s.concat(Array.prototype.slice.call(i));
				var o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(s))),
				l = t.width,
				u = t.height,
				d = t.pixelRatio[0],
				c = t.pixelRatio[1];
				return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
			},
			e.esds = function(e) {
				var t = e.config.length;
				return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
			},
			e.mp4a = function(t) {
				var r = t.samplerate;
				return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
			},
			e.mp3 = function(t) {
				var r = t.samplerate;
				return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
			},
			e.stsd = function(t) {
				return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
			},
			e.tkhd = function(t) {
				var r = t.id,
				i = t.duration * t.timescale,
				a = t.width,
				n = t.height,
				s = Math.floor(i / (L + 1)),
				o = Math.floor(i % (L + 1));
				return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
			},
			e.traf = function(t, r) {
				var i = e.sdtp(t),
				a = t.id,
				n = Math.floor(r / (L + 1)),
				s = Math.floor(r % (L + 1));
				return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
			},
			e.trak = function(t) {
				return t.duration = t.duration || 4294967295,
				e.box(e.types.trak, e.tkhd(t), e.mdia(t))
			},
			e.trex = function(t) {
				var r = t.id;
				return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
			},
			e.trun = function(t, r) {
				var i, a, n, s, o, l, u = t.samples || [],
				d = u.length,
				c = 12 + 16 * d,
				h = new Uint8Array(c);
				for (r += 8 + c, h.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++) n = (a = u[i]).duration,
				s = a.size,
				o = a.flags,
				l = a.cts,
				h.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
				return e.box(e.types.trun, h)
			},
			e.initSegment = function(t) {
				e.types || e.init();
				var r, i = e.moov(t);
				return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP),
				r.set(i, e.FTYP.byteLength),
				r
			},
			e
		} ();
		function O(e, t, r, i) {
			void 0 === r && (r = 1),
			void 0 === i && (i = !1);
			var a = e * t * r;
			return i ? Math.round(a) : a
		}
		function C(e, t) {
			return void 0 === t && (t = !1),
			O(e, 1e3, 1 / 9e4, t)
		}
		function I(e, t) {
			return void 0 === t && (t = 1),
			O(e, 9e4, 1 / t)
		}
		var x, P = I(10),
		M = I(.2),
		F = function() {
			function e(e, t, r, i) {
				this.observer = e,
				this.config = t,
				this.typeSupported = r;
				var a = navigator.userAgent;
				this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"),
				this.ISGenerated = !1
			}
			var t = e.prototype;
			return t.destroy = function() {},
			t.resetTimeStamp = function(e) {
				this._initPTS = this._initDTS = e
			},
			t.resetInitSegment = function() {
				this.ISGenerated = !1
			},
			t.remux = function(e, t, r, a, n, s, l) {
				if (this.ISGenerated || this.generateIS(e, t, n), this.ISGenerated) {
					var u = e.samples.length,
					d = t.samples.length,
					c = n,
					h = n;
					if (u && d) {
						var f = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
						c += Math.max(0, f),
						h += Math.max(0, -f)
					}
					if (u) {
						e.timescale || (o.b.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, n));
						var g, p = this.remuxAudio(e, c, s, l);
						if (d) p && (g = p.endPTS - p.startPTS),
						t.timescale || (o.b.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, n)),
						this.remuxVideo(t, h, s, g, l)
					} else if (d) {
						var v = this.remuxVideo(t, h, s, 0, l);
						v && e.codec && this.remuxEmptyAudio(e, c, s, v)
					}
				}
				r.samples.length && this.remuxID3(r, n),
				a.samples.length && this.remuxText(a, n),
				this.observer.trigger(i.a.FRAG_PARSED)
			},
			t.generateIS = function(e, t, r) {
				var n, s, l = this.observer,
				u = e.samples,
				d = t.samples,
				c = this.typeSupported,
				h = "audio/mp4",
				f = {},
				g = {
					tracks: f
				},
				p = void 0 === this._initPTS;
				if (p && (n = s = 1 / 0), e.config && u.length && (e.timescale = e.samplerate, o.b.log("audio sampling rate : " + e.samplerate), e.isAAC || (c.mpeg ? (h = "audio/mpeg", e.codec = "") : c.mp3 && (e.codec = "mp3")), f.audio = {
					container: h,
					codec: e.codec,
					initSegment: !e.isAAC && c.mpeg ? new Uint8Array: D.initSegment([e]),
					metadata: {
						channelCount: e.channelCount
					}
				},
				p && (n = s = u[0].pts - e.inputTimeScale * r)), t.sps && t.pps && d.length) {
					var v = t.inputTimeScale;
					t.timescale = v,
					f.video = {
						container: "video/mp4",
						codec: t.codec,
						initSegment: D.initSegment([t]),
						metadata: {
							width: t.width,
							height: t.height
						}
					},
					p && (n = Math.min(n, d[0].pts - v * r), s = Math.min(s, d[0].dts - v * r), this.observer.trigger(i.a.INIT_PTS_FOUND, {
						initPTS: n
					}))
				}
				Object.keys(f).length ? (l.trigger(i.a.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, p && (this._initPTS = n, this._initDTS = s)) : l.trigger(i.a.ERROR, {
					type: a.b.MEDIA_ERROR,
					details: a.a.FRAG_PARSING_ERROR,
					fatal: !1,
					reason: "no audio/video samples found"
				})
			},
			t.remuxVideo = function(e, t, r, n, s) {
				var l, u, d, c, h, f, g, p = 8,
				v = e.timescale,
				m = e.samples,
				y = [],
				b = m.length,
				T = this._PTSNormalize,
				E = this._initPTS,
				S = this.nextAvcDts,
				_ = this.isSafari;
				if (0 !== b) {
					_ && (r |= m.length && S && (s && Math.abs(t - S / v) < .1 || Math.abs(m[0].pts - S - E) < v / 5)),
					r || (S = t * v),
					m.forEach((function(e) {
						e.pts = T(e.pts - E, S),
						e.dts = T(e.dts - E, S)
					})),
					m.sort((function(e, t) {
						var r = e.dts - t.dts,
						i = e.pts - t.pts;
						return r || i || e.id - t.id
					}));
					var R = m.reduce((function(e, t) {
						return Math.max(Math.min(e, t.pts - t.dts), -1 * M)
					}), 0);
					if (R < 0) {
						o.b.warn("PTS < DTS detected in video samples, shifting DTS by " + C(R, !0) + " ms to overcome this issue");
						for (var A = 0; A < m.length; A++) m[A].dts += R
					}
					var k = m[0];
					h = Math.max(k.dts, 0),
					c = Math.max(k.pts, 0);
					var w = h - S;
					r && w && (w > 1 ? o.b.log("AVC: " + C(w, !0) + " ms hole between fragments detected,filling it") : w < -1 && o.b.log("AVC: " + C( - w, !0) + " ms overlapping between fragments detected"), h = S, m[0].dts = h, c = Math.max(c - w, S), m[0].pts = c, o.b.log("Video: PTS/DTS adjusted: " + C(c, !0) + "/" + C(h, !0) + ", delta: " + C(w, !0) + " ms")),
					k = m[m.length - 1],
					g = Math.max(k.dts, 0),
					f = Math.max(k.pts, 0, g),
					_ && (l = Math.round((g - h) / (m.length - 1)));
					for (var L = 0,
					O = 0,
					I = 0; I < b; I++) {
						for (var x = m[I], P = x.units, F = P.length, U = 0, N = 0; N < F; N++) U += P[N].data.length;
						O += U,
						L += F,
						x.length = U,
						x.dts = _ ? h + I * l: Math.max(x.dts, h),
						x.pts = Math.max(x.pts, x.dts)
					}
					var B = O + 4 * L + 8;
					try {
						u = new Uint8Array(B)
					} catch(e) {
						return void this.observer.trigger(i.a.ERROR, {
							type: a.b.MUX_ERROR,
							details: a.a.REMUX_ALLOC_ERROR,
							fatal: !1,
							bytes: B,
							reason: "fail allocating video mdat " + B
						})
					}
					var G = new DataView(u.buffer);
					G.setUint32(0, B),
					u.set(D.types.mdat, 4);
					for (var K = 0; K < b; K++) {
						for (var j = m[K], H = j.units, V = 0, Y = void 0, W = 0, q = H.length; W < q; W++) {
							var z = H[W],
							X = z.data,
							Q = z.data.byteLength;
							G.setUint32(p, Q),
							p += 4,
							u.set(X, p),
							p += Q,
							V += 4 + Q
						}
						if (_) Y = Math.max(0, l * Math.round((j.pts - j.dts) / l));
						else {
							if (K < b - 1) l = m[K + 1].dts - j.dts;
							else {
								var $ = this.config,
								J = j.dts - m[K > 0 ? K - 1 : K].dts;
								if ($.stretchShortVideoTrack) {
									var Z = $.maxBufferHole,
									ee = Math.floor(Z * v),
									te = (n ? c + n * v: this.nextAudioPts) - j.pts;
									te > ee ? ((l = te - J) < 0 && (l = J), o.b.log("It is approximately " + C(te, !1) + " ms to the next segment; using duration " + C(l, !1) + " ms for the last video frame.")) : l = J
								} else l = J
							}
							Y = Math.round(j.pts - j.dts)
						}
						y.push({
							size: V,
							duration: l,
							cts: Y,
							flags: {
								isLeading: 0,
								isDependedOn: 0,
								hasRedundancy: 0,
								degradPrio: 0,
								dependsOn: j.key ? 2 : 1,
								isNonSync: j.key ? 0 : 1
							}
						})
					}
					this.nextAvcDts = g + l;
					var re = e.dropped;
					if (e.nbNalu = 0, e.dropped = 0, y.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
						var ie = y[0].flags;
						ie.dependsOn = 2,
						ie.isNonSync = 0
					}
					e.samples = y,
					d = D.moof(e.sequenceNumber++, h, e),
					e.samples = [];
					var ae = {
						data1: d,
						data2: u,
						startPTS: c / v,
						endPTS: (f + l) / v,
						startDTS: h / v,
						endDTS: this.nextAvcDts / v,
						type: "video",
						hasAudio: !1,
						hasVideo: !0,
						nb: y.length,
						dropped: re
					};
					return this.observer.trigger(i.a.FRAG_PARSING_DATA, ae),
					ae
				}
			},
			t.remuxAudio = function(e, t, r, n) {
				var s, l, u, d, c, h, f = e.inputTimeScale,
				g = e.timescale,
				p = f / g,
				v = (e.isAAC ? 1024 : 1152) * p,
				m = this._PTSNormalize,
				y = this._initPTS,
				b = !e.isAAC && this.typeSupported.mpeg,
				T = b ? 0 : 8,
				E = e.samples,
				S = [],
				_ = this.nextAudioPts;
				if (r |= E.length && _ && (n && Math.abs(t - _ / f) < .1 || Math.abs(E[0].pts - _ - y) < 20 * v), E.forEach((function(e) {
					e.pts = e.dts = m(e.pts - y, t * f)
				})), 0 !== (E = E.filter((function(e) {
					return e.pts >= 0
				}))).length) {
					if (r || (_ = n ? t * f: E[0].pts), e.isAAC) for (var R = this.config.maxAudioFramesDrift,
					A = 0,
					k = _; A < E.length;) {
						var L, O = E[A];
						if ((L = O.pts - k) <= -R * v) o.b.warn("Dropping 1 audio frame @ " + C(k, !0) + " ms due to " + C(L, !0) + " ms overlap."),
						E.splice(A, 1);
						else if (L >= R * v && L < P && k) {
							var I = Math.round(L / v);
							o.b.warn("Injecting " + I + " audio frames @ " + C(k, !0) + " ms due to " + C(k, !0) + " ms gap.");
							for (var x = 0; x < I; x++) {
								var M = Math.max(k, 0); (l = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), l = O.unit.subarray()),
								E.splice(A, 0, {
									unit: l,
									pts: M,
									dts: M
								}),
								k += v,
								A++
							}
							O.pts = O.dts = k,
							k += v,
							A++
						} else Math.abs(L),
						O.pts = O.dts = k,
						k += v,
						A++
					}
					for (var F = E.length,
					U = 0; F--;) U += E[F].unit.byteLength;
					for (var N = 0,
					B = E.length; N < B; N++) {
						var G = E[N],
						K = G.unit,
						j = G.pts;
						if (void 0 !== h) s.duration = Math.round((j - h) / p);
						else {
							var H = j - _,
							V = 0;
							if (r && e.isAAC && H) {
								if (H > 0 && H < P) V = Math.round((j - _) / v),
								o.b.log(C(H, !0) + " ms hole between AAC samples detected,filling it"),
								V > 0 && ((l = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l = K.subarray()), U += V * l.length);
								else if (H < -12) {
									o.b.log("drop overlapping AAC sample, expected/parsed/delta: " + C(_, !0) + " ms / " + C(j, !0) + " ms / " + C( - H, !0) + " ms"),
									U -= K.byteLength;
									continue
								}
								j = _
							}
							if (c = j, !(U > 0)) return;
							U += T;
							try {
								u = new Uint8Array(U)
							} catch(e) {
								return void this.observer.trigger(i.a.ERROR, {
									type: a.b.MUX_ERROR,
									details: a.a.REMUX_ALLOC_ERROR,
									fatal: !1,
									bytes: U,
									reason: "fail allocating audio mdat " + U
								})
							}
							b || (new DataView(u.buffer).setUint32(0, U), u.set(D.types.mdat, 4));
							for (var Y = 0; Y < V; Y++)(l = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), l = K.subarray()),
							u.set(l, T),
							T += l.byteLength,
							s = {
								size: l.byteLength,
								cts: 0,
								duration: 1024,
								flags: {
									isLeading: 0,
									isDependedOn: 0,
									hasRedundancy: 0,
									degradPrio: 0,
									dependsOn: 1
								}
							},
							S.push(s)
						}
						u.set(K, T);
						var W = K.byteLength;
						T += W,
						s = {
							size: W,
							cts: 0,
							duration: 0,
							flags: {
								isLeading: 0,
								isDependedOn: 0,
								hasRedundancy: 0,
								degradPrio: 0,
								dependsOn: 1
							}
						},
						S.push(s),
						h = j
					}
					var q = 0;
					if ((F = S.length) >= 2 && (q = S[F - 2].duration, s.duration = q), F) {
						this.nextAudioPts = _ = h + p * q,
						e.samples = S,
						d = b ? new Uint8Array: D.moof(e.sequenceNumber++, c / p, e),
						e.samples = [];
						var z = c / f,
						X = _ / f,
						Q = {
							data1: d,
							data2: u,
							startPTS: z,
							endPTS: X,
							startDTS: z,
							endDTS: X,
							type: "audio",
							hasAudio: !0,
							hasVideo: !1,
							nb: F
						};
						return this.observer.trigger(i.a.FRAG_PARSING_DATA, Q),
						Q
					}
					return null
				}
			},
			t.remuxEmptyAudio = function(e, t, r, i) {
				var a = e.inputTimeScale,
				n = a / (e.samplerate ? e.samplerate: a),
				s = this.nextAudioPts,
				l = (void 0 !== s ? s: i.startDTS * a) + this._initDTS,
				u = i.endDTS * a + this._initDTS,
				d = 1024 * n,
				c = Math.ceil((u - l) / d),
				h = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
				if (o.b.warn("remux empty Audio"), h) {
					for (var f = [], g = 0; g < c; g++) {
						var p = l + g * d;
						f.push({
							unit: h,
							pts: p,
							dts: p
						})
					}
					e.samples = f,
					this.remuxAudio(e, t, r)
				} else o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
			},
			t.remuxID3 = function(e) {
				var t, r = e.samples.length,
				a = e.inputTimeScale,
				n = this._initPTS,
				s = this._initDTS;
				if (r) {
					for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - n) / a,
					t.dts = (t.dts - s) / a;
					this.observer.trigger(i.a.FRAG_PARSING_METADATA, {
						samples: e.samples
					})
				}
				e.samples = []
			},
			t.remuxText = function(e) {
				e.samples.sort((function(e, t) {
					return e.pts - t.pts
				}));
				var t, r = e.samples.length,
				a = e.inputTimeScale,
				n = this._initPTS;
				if (r) {
					for (var s = 0; s < r; s++)(t = e.samples[s]).pts = (t.pts - n) / a;
					this.observer.trigger(i.a.FRAG_PARSING_USERDATA, {
						samples: e.samples
					})
				}
				e.samples = []
			},
			t._PTSNormalize = function(e, t) {
				var r;
				if (void 0 === t) return e;
				for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
				return e
			},
			e
		} (),
		U = function() {
			function e(e) {
				this.observer = e
			}
			var t = e.prototype;
			return t.destroy = function() {},
			t.resetTimeStamp = function() {},
			t.resetInitSegment = function() {},
			t.remux = function(e, t, r, a, n, s, o, l) {
				var u = this.observer,
				d = "";
				e && (d += "audio"),
				t && (d += "video"),
				u.trigger(i.a.FRAG_PARSING_DATA, {
					data1: l,
					startPTS: n,
					startDTS: n,
					type: d,
					hasAudio: !!e,
					hasVideo: !!t,
					nb: 1,
					dropped: 0
				}),
				u.trigger(i.a.FRAG_PARSED)
			},
			e
		} (),
		N = Object(l.a)();
		try {
			x = N.performance.now.bind(N.performance)
		} catch(e) {
			o.b.debug("Unable to use Performance API on this environment"),
			x = N.Date.now
		}
		var B = function() {
			function e(e, t, r, i) {
				this.observer = e,
				this.typeSupported = t,
				this.config = r,
				this.vendor = i
			}
			var t = e.prototype;
			return t.destroy = function() {
				var e = this.demuxer;
				e && e.destroy()
			},
			t.push = function(e, t, r, a, s, o, l, u, d, c, h, f) {
				var g = this;
				if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
					var p = this.decrypter;
					null == p && (p = this.decrypter = new n.a(this.observer, this.config));
					var v = x();
					p.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
						var n = x();
						g.observer.trigger(i.a.FRAG_DECRYPTED, {
							stats: {
								tstart: v,
								tdecrypt: n
							}
						}),
						g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, u, d, c, h, f)
					}))
				} else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, u, d, c, h, f)
			},
			t.pushDecrypted = function(e, t, r, n, s, o, l, u, d, c, h, f) {
				var g = this.demuxer;
				if (!g || (l || u) && !this.probe(e)) {
					for (var p = this.observer,
					v = this.typeSupported,
					m = this.config,
					T = [{
						demux: A,
						remux: F
					},
					{
						demux: b.a,
						remux: U
					},
					{
						demux: y,
						remux: F
					},
					{
						demux: k,
						remux: F
					}], E = 0, S = T.length; E < S; E++) {
						var _ = T[E],
						R = _.demux.probe;
						if (R(e)) {
							var w = this.remuxer = new _.remux(p, m, v, this.vendor);
							g = new _.demux(p, w, m, v),
							this.probe = R;
							break
						}
					}
					if (!g) return void p.trigger(i.a.ERROR, {
						type: a.b.MEDIA_ERROR,
						details: a.a.FRAG_PARSING_ERROR,
						fatal: !0,
						reason: "no demux matching with content found"
					});
					this.demuxer = g
				}
				var L = this.remuxer; (l || u) && (g.resetInitSegment(r, n, s, c), L.resetInitSegment()),
				l && (g.resetTimeStamp(f), L.resetTimeStamp(f)),
				"function" == typeof g.setDecryptData && g.setDecryptData(t),
				g.append(e, o, d, h)
			},
			e
		} ();
		t.a = B
	},
	function(e, t, r) {
		"use strict";
		var i = r(0),
		a = r(1),
		n = Math.pow(2, 32) - 1,
		s = function() {
			function e(e, t) {
				this.observer = e,
				this.remuxer = t
			}
			var t = e.prototype;
			return t.resetTimeStamp = function(e) {
				this.initPTS = e
			},
			t.resetInitSegment = function(t, r, i, n) {
				if (t && t.byteLength) {
					var s = this.initData = e.parseInitSegment(t);
					null == r && (r = "mp4a.40.5"),
					null == i && (i = "avc1.42e01e");
					var o = {};
					s.audio && s.video ? o.audiovideo = {
						container: "video/mp4",
						codec: r + "," + i,
						initSegment: n ? t: null
					}: (s.audio && (o.audio = {
						container: "audio/mp4",
						codec: r,
						initSegment: n ? t: null
					}), s.video && (o.video = {
						container: "video/mp4",
						codec: i,
						initSegment: n ? t: null
					})),
					this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, {
						tracks: o
					})
				} else r && (this.audioCodec = r),
				i && (this.videoCodec = i)
			},
			e.probe = function(t) {
				return e.findBox({
					data: t,
					start: 0,
					end: Math.min(t.length, 16384)
				},
				["moof"]).length > 0
			},
			e.bin2str = function(e) {
				return String.fromCharCode.apply(null, e)
			},
			e.readUint16 = function(e, t) {
				e.data && (t += e.start, e = e.data);
				var r = e[t] << 8 | e[t + 1];
				return r < 0 ? 65536 + r: r
			},
			e.readUint32 = function(e, t) {
				e.data && (t += e.start, e = e.data);
				var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
				return r < 0 ? 4294967296 + r: r
			},
			e.writeUint32 = function(e, t, r) {
				e.data && (t += e.start, e = e.data),
				e[t] = r >> 24,
				e[t + 1] = r >> 16 & 255,
				e[t + 2] = r >> 8 & 255,
				e[t + 3] = 255 & r
			},
			e.findBox = function(t, r) {
				var i, a, n, s, o, l, u = [];
				if (t.data ? (o = t.start, n = t.end, t = t.data) : (o = 0, n = t.byteLength), !r.length) return null;
				for (i = o; i < n;) l = (a = e.readUint32(t, i)) > 1 ? i + a: n,
				e.bin2str(t.subarray(i + 4, i + 8)) === r[0] && (1 === r.length ? u.push({
					data: t,
					start: i + 8,
					end: l
				}) : (s = e.findBox({
					data: t,
					start: i + 8,
					end: l
				},
				r.slice(1))).length && (u = u.concat(s))),
				i = l;
				return u
			},
			e.parseSegmentIndex = function(t) {
				var r, i = e.findBox(t, ["moov"])[0],
				a = i ? i.end: null,
				n = 0,
				s = e.findBox(t, ["sidx"]);
				if (!s || !s[0]) return null;
				r = [];
				var o = (s = s[0]).data[0];
				n = 0 === o ? 8 : 16;
				var l = e.readUint32(s, n);
				n += 4;
				n += 0 === o ? 8 : 16,
				n += 2;
				var u = s.end + 0,
				d = e.readUint16(s, n);
				n += 2;
				for (var c = 0; c < d; c++) {
					var h = n,
					f = e.readUint32(s, h);
					h += 4;
					var g = 2147483647 & f;
					if (1 === (2147483648 & f) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
					var p = e.readUint32(s, h);
					h += 4,
					r.push({
						referenceSize: g,
						subsegmentDuration: p,
						info: {
							duration: p / l,
							start: u,
							end: u + g - 1
						}
					}),
					u += g,
					n = h += 4
				}
				return {
					earliestPresentationTime: 0,
					timescale: l,
					version: o,
					referencesCount: d,
					references: r,
					moovEndOffset: a
				}
			},
			e.parseInitSegment = function(t) {
				var r = [];
				return e.findBox(t, ["moov", "trak"]).forEach((function(t) {
					var a = e.findBox(t, ["tkhd"])[0];
					if (a) {
						var n = a.data[a.start],
						s = 0 === n ? 12 : 20,
						o = e.readUint32(a, s),
						l = e.findBox(t, ["mdia", "mdhd"])[0];
						if (l) {
							s = 0 === (n = l.data[l.start]) ? 12 : 20;
							var u = e.readUint32(l, s),
							d = e.findBox(t, ["mdia", "hdlr"])[0];
							if (d) {
								var c = {
									soun: "audio",
									vide: "video"
								} [e.bin2str(d.data.subarray(d.start + 8, d.start + 12))];
								if (c) {
									var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
									if (h.length) {
										h = h[0];
										var f = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
										i.b.log("MP4Demuxer:" + c + ":" + f + " found")
									}
									r[o] = {
										timescale: u,
										type: c
									},
									r[c] = {
										timescale: u,
										id: o
									}
								}
							}
						}
					}
				})),
				r
			},
			e.getStartDTS = function(t, r) {
				var i, a, n;
				return i = e.findBox(r, ["moof", "traf"]),
				a = [].concat.apply([], i.map((function(r) {
					return e.findBox(r, ["tfhd"]).map((function(i) {
						var a, n;
						return a = e.readUint32(i, 4),
						n = t[a].timescale || 9e4,
						e.findBox(r, ["tfdt"]).map((function(t) {
							var r, i;
							return r = t.data[t.start],
							i = e.readUint32(t, 4),
							1 === r && (i *= Math.pow(2, 32), i += e.readUint32(t, 8)),
							i
						}))[0] / n
					}))
				}))),
				n = Math.min.apply(null, a),
				isFinite(n) ? n: 0
			},
			e.offsetStartDTS = function(t, r, i) {
				e.findBox(r, ["moof", "traf"]).map((function(r) {
					return e.findBox(r, ["tfhd"]).map((function(a) {
						var s = e.readUint32(a, 4),
						o = t[s].timescale || 9e4;
						e.findBox(r, ["tfdt"]).map((function(t) {
							var r = t.data[t.start],
							a = e.readUint32(t, 4);
							if (0 === r) e.writeUint32(t, 4, a - i * o);
							else {
								a *= Math.pow(2, 32),
								a += e.readUint32(t, 8),
								a -= i * o,
								a = Math.max(a, 0);
								var s = Math.floor(a / (n + 1)),
								l = Math.floor(a % (n + 1));
								e.writeUint32(t, 4, s),
								e.writeUint32(t, 8, l)
							}
						}))
					}))
				}))
			},
			t.append = function(t, r, i, n) {
				var s = this.initData;
				s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), s = this.initData);
				var o, l = this.initPTS;
				if (void 0 === l) {
					var u = e.getStartDTS(s, t);
					this.initPTS = l = u - r,
					this.observer.trigger(a.a.INIT_PTS_FOUND, {
						initPTS: l
					})
				}
				e.offsetStartDTS(s, t, l),
				o = e.getStartDTS(s, t),
				this.remuxer.remux(s.audio, s.video, null, null, o, i, n, t)
			},
			t.destroy = function() {},
			e
		} ();
		t.a = s
	},
	function(e, t, r) {
		function i(e) {
			var t = {};
			function r(i) {
				if (t[i]) return t[i].exports;
				var a = t[i] = {
					i: i,
					l: !1,
					exports: {}
				};
				return e[i].call(a.exports, a, a.exports, r),
				a.l = !0,
				a.exports
			}
			r.m = e,
			r.c = t,
			r.i = function(e) {
				return e
			},
			r.d = function(e, t, i) {
				r.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: i
				})
			},
			r.r = function(e) {
				Object.defineProperty(e, "__esModule", {
					value: !0
				})
			},
			r.n = function(e) {
				var t = e && e.__esModule ?
				function() {
					return e.
				default
				}:
				function() {
					return e
				};
				return r.d(t, "a", t),
				t
			},
			r.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			},
			r.p = "/",
			r.oe = function(e) {
				throw console.error(e),
				e
			};
			var i = r(r.s = ENTRY_MODULE);
			return i.
		default || i
		}
		function a(e) {
			return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
		}
		function n(e, t, i) {
			var n = {};
			n[i] = [];
			var s = t.toString(),
			o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
			if (!o) return n;
			for (var l, u = o[1], d = new RegExp("(\\\\n|\\W)" + a(u) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); l = d.exec(s);)"dll-reference" !== l[3] && n[i].push(l[3]);
			for (d = new RegExp("\\(" + a(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); l = d.exec(s);) e[l[2]] || (n[i].push(l[1]), e[l[2]] = r(l[1]).m),
			n[l[2]] = n[l[2]] || [],
			n[l[2]].push(l[4]);
			for (var c, h = Object.keys(n), f = 0; f < h.length; f++) for (var g = 0; g < n[h[f]].length; g++) c = n[h[f]][g],
			isNaN(1 * c) || (n[h[f]][g] = 1 * n[h[f]][g]);
			return n
		}
		function s(e) {
			return Object.keys(e).reduce((function(t, r) {
				return t || e[r].length > 0
			}), !1)
		}
		e.exports = function(e, t) {
			t = t || {};
			var a = {
				main: r.m
			},
			o = t.all ? {
				main: Object.keys(a.main)
			}: function(e, t) {
				for (var r = {
					main: [t]
				},
				i = {
					main: []
				},
				a = {
					main: {}
				}; s(r);) for (var o = Object.keys(r), l = 0; l < o.length; l++) {
					var u = o[l],
					d = r[u].pop();
					if (a[u] = a[u] || {},
					!a[u][d] && e[u][d]) {
						a[u][d] = !0,
						i[u] = i[u] || [],
						i[u].push(d);
						for (var c = n(e, e[u][d], u), h = Object.keys(c), f = 0; f < h.length; f++) r[h[f]] = r[h[f]] || [],
						r[h[f]] = r[h[f]].concat(c[h[f]])
					}
				}
				return i
			} (a, e),
			l = "";
			Object.keys(o).filter((function(e) {
				return "main" !== e
			})).forEach((function(e) {
				for (var t = 0; o[e][t];) t++;
				o[e].push(t),
				a[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
				l = l + "var " + e + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o[e].map((function(t) {
					return JSON.stringify(t) + ": " + a[e][t].toString()
				})).join(",") + "});\n"
			})),
			l = l + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o.main.map((function(e) {
				return JSON.stringify(e) + ": " + a.main[e].toString()
			})).join(",") + "}))(self);";
			var u = new window.Blob([l], {
				type: "text/javascript"
			});
			if (t.bare) return u;
			var d = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
			c = new window.Worker(d);
			return c.objectURL = d,
			c
		}
	},
	function(e, t, r) {
		"use strict";
		r.r(t);
		var i = r(9),
		a = r(1),
		n = r(0),
		s = r(8);
		t.
	default = function(e) {
			var t = new s.EventEmitter;
			t.trigger = function(e) {
				for (var r = arguments.length,
				i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
				t.emit.apply(t, [e, e].concat(i))
			},
			t.off = function(e) {
				for (var r = arguments.length,
				i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
				t.removeListener.apply(t, [e].concat(i))
			};
			var r = function(t, r) {
				e.postMessage({
					event: t,
					data: r
				})
			};
			e.addEventListener("message", (function(a) {
				var s = a.data;
				switch (s.cmd) {
				case "init":
					var o = JSON.parse(s.config);
					e.demuxer = new i.a(t, s.typeSupported, o, s.vendor),
					Object(n.a)(o.debug),
					r("init", null);
					break;
				case "demux":
					e.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS)
				}
			})),
			t.on(a.a.FRAG_DECRYPTED, r),
			t.on(a.a.FRAG_PARSING_INIT_SEGMENT, r),
			t.on(a.a.FRAG_PARSED, r),
			t.on(a.a.ERROR, r),
			t.on(a.a.FRAG_PARSING_METADATA, r),
			t.on(a.a.FRAG_PARSING_USERDATA, r),
			t.on(a.a.INIT_PTS_FOUND, r),
			t.on(a.a.FRAG_PARSING_DATA, (function(t, r) {
				var i = [],
				a = {
					event: t,
					data: r
				};
				r.data1 && (a.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1),
				r.data2 && (a.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2),
				e.postMessage(a, i)
			}))
		}
	},
	function(e, t, r) {
		"use strict";
		r.r(t),
		r.d(t, "default", (function() {
			return ur
		}));
		var i = {};
		r.r(i),
		r.d(i, "newCue", (function() {
			return bt
		}));
		var a, n, s = r(6),
		o = r(2),
		l = r(3),
		u = r(1),
		d = r(0),
		c = {
			hlsEventGeneric: !0,
			hlsHandlerDestroying: !0,
			hlsHandlerDestroyed: !0
		},
		h = function() {
			function e(e) {
				this.hls = void 0,
				this.handledEvents = void 0,
				this.useGenericHandler = void 0,
				this.hls = e,
				this.onEvent = this.onEvent.bind(this);
				for (var t = arguments.length,
				r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
				this.handledEvents = r,
				this.useGenericHandler = !0,
				this.registerListeners()
			}
			var t = e.prototype;
			return t.destroy = function() {
				this.onHandlerDestroying(),
				this.unregisterListeners(),
				this.onHandlerDestroyed()
			},
			t.onHandlerDestroying = function() {},
			t.onHandlerDestroyed = function() {},
			t.isEventHandler = function() {
				return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
			},
			t.registerListeners = function() {
				this.isEventHandler() && this.handledEvents.forEach((function(e) {
					if (c[e]) throw new Error("Forbidden event-name: " + e);
					this.hls.on(e, this.onEvent)
				}), this)
			},
			t.unregisterListeners = function() {
				this.isEventHandler() && this.handledEvents.forEach((function(e) {
					this.hls.off(e, this.onEvent)
				}), this)
			},
			t.onEvent = function(e, t) {
				this.onEventGeneric(e, t)
			},
			t.onEventGeneric = function(e, t) {
				try { (function(e, t) {
						var r = "on" + e.replace("hls", "");
						if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
						return this[r].bind(this, t)
					}).call(this, e, t).call()
				} catch(t) {
					d.b.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t),
					this.hls.trigger(u.a.ERROR, {
						type: o.b.OTHER_ERROR,
						details: o.a.INTERNAL_EXCEPTION,
						fatal: !1,
						event: e,
						err: t
					})
				}
			},
			e
		} (); !
		function(e) {
			e.MANIFEST = "manifest",
			e.LEVEL = "level",
			e.AUDIO_TRACK = "audioTrack",
			e.SUBTITLE_TRACK = "subtitleTrack"
		} (a || (a = {})),
		function(e) {
			e.MAIN = "main",
			e.AUDIO = "audio",
			e.SUBTITLE = "subtitle"
		} (n || (n = {}));
		var f = r(10);
		function g(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		var p, v = function() {
			function e(e, t) {
				this._uri = null,
				this.baseuri = void 0,
				this.reluri = void 0,
				this.method = null,
				this.key = null,
				this.iv = null,
				this.baseuri = e,
				this.reluri = t
			}
			var t, r, i;
			return t = e,
			(r = [{
				key: "uri",
				get: function() {
					return ! this._uri && this.reluri && (this._uri = Object(s.buildAbsoluteURL)(this.baseuri, this.reluri, {
						alwaysNormalize: !0
					})),
					this._uri
				}
			}]) && g(t.prototype, r),
			i && g(t, i),
			e
		} ();
		function m(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		} !
		function(e) {
			e.AUDIO = "audio",
			e.VIDEO = "video"
		} (p || (p = {}));
		var y = function() {
			function e() {
				var e;
				this._url = null,
				this._byteRange = null,
				this._decryptdata = null,
				this._elementaryStreams = ((e = {})[p.AUDIO] = !1, e[p.VIDEO] = !1, e),
				this.deltaPTS = 0,
				this.rawProgramDateTime = null,
				this.programDateTime = null,
				this.title = null,
				this.tagList = [],
				this.cc = void 0,
				this.type = void 0,
				this.relurl = void 0,
				this.baseurl = void 0,
				this.duration = void 0,
				this.start = void 0,
				this.sn = 0,
				this.urlId = 0,
				this.level = 0,
				this.levelkey = void 0,
				this.loader = void 0
			}
			var t, r, i, a = e.prototype;
			return a.setByteRange = function(e, t) {
				var r = e.split("@", 2),
				i = [];
				1 === r.length ? i[0] = t ? t.byteRangeEndOffset: 0 : i[0] = parseInt(r[1]),
				i[1] = parseInt(r[0]) + i[0],
				this._byteRange = i
			},
			a.addElementaryStream = function(e) {
				this._elementaryStreams[e] = !0
			},
			a.hasElementaryStream = function(e) {
				return ! 0 === this._elementaryStreams[e]
			},
			a.createInitializationVector = function(e) {
				for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
				return t
			},
			a.setDecryptDataFromLevelKey = function(e, t) {
				var r = e;
				return e && e.method && e.uri && !e.iv && ((r = new v(e.baseuri, e.reluri)).method = e.method, r.iv = this.createInitializationVector(t)),
				r
			},
			t = e,
			(r = [{
				key: "url",
				get: function() {
					return ! this._url && this.relurl && (this._url = Object(s.buildAbsoluteURL)(this.baseurl, this.relurl, {
						alwaysNormalize: !0
					})),
					this._url
				},
				set: function(e) {
					this._url = e
				}
			},
			{
				key: "byteRange",
				get: function() {
					return this._byteRange ? this._byteRange: []
				}
			},
			{
				key: "byteRangeStartOffset",
				get: function() {
					return this.byteRange[0]
				}
			},
			{
				key: "byteRangeEndOffset",
				get: function() {
					return this.byteRange[1]
				}
			},
			{
				key: "decryptdata",
				get: function() {
					if (!this.levelkey && !this._decryptdata) return null;
					if (!this._decryptdata && this.levelkey) {
						var e = this.sn;
						"number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && d.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0),
						this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)
					}
					return this._decryptdata
				}
			},
			{
				key: "endProgramDateTime",
				get: function() {
					if (null === this.programDateTime) return null;
					if (!Object(l.a)(this.programDateTime)) return null;
					var e = Object(l.a)(this.duration) ? this.duration: 0;
					return this.programDateTime + 1e3 * e
				}
			},
			{
				key: "encrypted",
				get: function() {
					return ! (!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
				}
			}]) && m(t.prototype, r),
			i && m(t, i),
			e
		} ();
		function b(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		var T = function() {
			function e(e) {
				this.endCC = 0,
				this.endSN = 0,
				this.fragments = [],
				this.initSegment = null,
				this.live = !0,
				this.needSidxRanges = !1,
				this.startCC = 0,
				this.startSN = 0,
				this.startTimeOffset = null,
				this.targetduration = 0,
				this.totalduration = 0,
				this.type = null,
				this.url = e,
				this.version = null
			}
			var t, r, i;
			return t = e,
			(r = [{
				key: "hasProgramDateTime",
				get: function() {
					return ! (!this.fragments[0] || !Object(l.a)(this.fragments[0].programDateTime))
				}
			}]) && b(t.prototype, r),
			i && b(t, i),
			e
		} (),
		E = /^(\d+)x(\d+)$/,
		S = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
		_ = function() {
			function e(t) {
				for (var r in "string" == typeof t && (t = e.parseAttrList(t)), t) t.hasOwnProperty(r) && (this[r] = t[r])
			}
			var t = e.prototype;
			return t.decimalInteger = function(e) {
				var t = parseInt(this[e], 10);
				return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
			},
			t.hexadecimalInteger = function(e) {
				if (this[e]) {
					var t = (this[e] || "0x").slice(2);
					t = (1 & t.length ? "0": "") + t;
					for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
					return r
				}
				return null
			},
			t.hexadecimalIntegerAsNumber = function(e) {
				var t = parseInt(this[e], 16);
				return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
			},
			t.decimalFloatingPoint = function(e) {
				return parseFloat(this[e])
			},
			t.enumeratedString = function(e) {
				return this[e]
			},
			t.decimalResolution = function(e) {
				var t = E.exec(this[e]);
				if (null !== t) return {
					width: parseInt(t[1], 10),
					height: parseInt(t[2], 10)
				}
			},
			e.parseAttrList = function(e) {
				var t, r = {};
				for (S.lastIndex = 0; null !== (t = S.exec(e));) {
					var i = t[2];
					0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)),
					r[t[1]] = i
				}
				return r
			},
			e
		} (),
		R = {
			audio: {
				a3ds: !0,
				"ac-3": !0,
				"ac-4": !0,
				alac: !0,
				alaw: !0,
				dra1: !0,
				"dts+": !0,
				"dts-": !0,
				dtsc: !0,
				dtse: !0,
				dtsh: !0,
				"ec-3": !0,
				enca: !0,
				g719: !0,
				g726: !0,
				m4ae: !0,
				mha1: !0,
				mha2: !0,
				mhm1: !0,
				mhm2: !0,
				mlpa: !0,
				mp4a: !0,
				"raw ": !0,
				Opus: !0,
				samr: !0,
				sawb: !0,
				sawp: !0,
				sevc: !0,
				sqcp: !0,
				ssmv: !0,
				twos: !0,
				ulaw: !0
			},
			video: {
				avc1: !0,
				avc2: !0,
				avc3: !0,
				avc4: !0,
				avcp: !0,
				drac: !0,
				dvav: !0,
				dvhe: !0,
				encv: !0,
				hev1: !0,
				hvc1: !0,
				mjp2: !0,
				mp4v: !0,
				mvc1: !0,
				mvc2: !0,
				mvc3: !0,
				mvc4: !0,
				resv: !0,
				rv60: !0,
				s263: !0,
				svc1: !0,
				svc2: !0,
				"vc-1": !0,
				vp08: !0,
				vp09: !0
			}
		};
		function A(e, t) {
			return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
		}
		var k = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
		w = /#EXT-X-MEDIA:(.*)/g,
		L = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
		D = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
		O = /\.(mp4|m4s|m4v|m4a)$/i,
		C = function() {
			function e() {}
			return e.findGroup = function(e, t) {
				for (var r = 0; r < e.length; r++) {
					var i = e[r];
					if (i.id === t) return i
				}
			},
			e.convertAVC1ToAVCOTI = function(e) {
				var t, r = e.split(".");
				return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr( - 4)) : t = e,
				t
			},
			e.resolve = function(e, t) {
				return s.buildAbsoluteURL(t, e, {
					alwaysNormalize: !0
				})
			},
			e.parseMasterPlaylist = function(t, r) {
				var i, a = [];
				function n(e, t) { ["video", "audio"].forEach((function(r) {
						var i = e.filter((function(e) {
							return function(e, t) {
								var r = R[t];
								return !! r && !0 === r[e.slice(0, 4)]
							} (e, r)
						}));
						if (i.length) {
							var a = i.filter((function(e) {
								return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
							}));
							t[r + "Codec"] = a.length > 0 ? a[0] : i[0],
							e = e.filter((function(e) {
								return - 1 === i.indexOf(e)
							}))
						}
					})),
					t.unknownCodecs = e
				}
				for (k.lastIndex = 0; null != (i = k.exec(t));) {
					var s = {},
					o = s.attrs = new _(i[1]);
					s.url = e.resolve(i[2], r);
					var l = o.decimalResolution("RESOLUTION");
					l && (s.width = l.width, s.height = l.height),
					s.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
					s.name = o.NAME,
					n([].concat((o.CODECS || "").split(/[ ,]+/)), s),
					s.videoCodec && -1 !== s.videoCodec.indexOf("avc1") && (s.videoCodec = e.convertAVC1ToAVCOTI(s.videoCodec)),
					a.push(s)
				}
				return a
			},
			e.parseMasterPlaylistMedia = function(t, r, i, a) {
				var n;
				void 0 === a && (a = []);
				var s = [],
				o = 0;
				for (w.lastIndex = 0; null !== (n = w.exec(t));) {
					var l = new _(n[1]);
					if (l.TYPE === i) {
						var u = {
							attrs: l,
							id: o++,
							groupId: l["GROUP-ID"],
							instreamId: l["INSTREAM-ID"],
							name: l.NAME || l.LANGUAGE,
							type: i,
						default:
							"YES" === l.DEFAULT,
							autoselect: "YES" === l.AUTOSELECT,
							forced: "YES" === l.FORCED,
							lang: l.LANGUAGE
						};
						if (l.URI && (u.url = e.resolve(l.URI, r)), a.length) {
							var d = e.findGroup(a, u.groupId);
							u.audioCodec = d ? d.codec: a[0].codec
						}
						s.push(u)
					}
				}
				return s
			},
			e.parseLevelPlaylist = function(e, t, r, i, a) {
				var n, s, o, u = 0,
				c = 0,
				h = new T(t),
				f = 0,
				g = null,
				p = new y,
				m = null;
				for (L.lastIndex = 0; null !== (n = L.exec(e));) {
					var b = n[1];
					if (b) {
						p.duration = parseFloat(b);
						var E = (" " + n[2]).slice(1);
						p.title = E || null,
						p.tagList.push(E ? ["INF", b, E] : ["INF", b])
					} else if (n[3]) {
						if (Object(l.a)(p.duration)) {
							var S = u++;
							p.type = i,
							p.start = c,
							o && (p.levelkey = o),
							p.sn = S,
							p.level = r,
							p.cc = f,
							p.urlId = a,
							p.baseurl = t,
							p.relurl = (" " + n[3]).slice(1),
							I(p, g),
							h.fragments.push(p),
							g = p,
							c += p.duration,
							p = new y
						}
					} else if (n[4]) {
						var R = (" " + n[4]).slice(1);
						g ? p.setByteRange(R, g) : p.setByteRange(R)
					} else if (n[5]) p.rawProgramDateTime = (" " + n[5]).slice(1),
					p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]),
					null === m && (m = h.fragments.length);
					else {
						if (! (n = n[0].match(D))) {
							d.b.warn("No matches on slow regex match for level playlist!");
							continue
						}
						for (s = 1; s < n.length && void 0 === n[s]; s++);
						var A = (" " + n[s + 1]).slice(1),
						k = (" " + n[s + 2]).slice(1);
						switch (n[s]) {
						case "#":
							p.tagList.push(k ? [A, k] : [A]);
							break;
						case "PLAYLIST-TYPE":
							h.type = A.toUpperCase();
							break;
						case "MEDIA-SEQUENCE":
							u = h.startSN = parseInt(A);
							break;
						case "TARGETDURATION":
							h.targetduration = parseFloat(A);
							break;
						case "VERSION":
							h.version = parseInt(A);
							break;
						case "EXTM3U":
							break;
						case "ENDLIST":
							h.live = !1;
							break;
						case "DIS":
							f++,
							p.tagList.push(["DIS"]);
							break;
						case "DISCONTINUITY-SEQ":
							f = parseInt(A);
							break;
						case "KEY":
							var w = new _(A),
							C = w.enumeratedString("METHOD"),
							x = w.URI,
							P = w.hexadecimalInteger("IV");
							C && (o = new v(t, x), x && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(C) >= 0 && (o.method = C, o.key = null, o.iv = P));
							break;
						case "START":
							var M = new _(A).decimalFloatingPoint("TIME-OFFSET");
							Object(l.a)(M) && (h.startTimeOffset = M);
							break;
						case "MAP":
							var F = new _(A);
							p.relurl = F.URI,
							F.BYTERANGE && p.setByteRange(F.BYTERANGE),
							p.baseurl = t,
							p.level = r,
							p.type = i,
							p.sn = "initSegment",
							h.initSegment = p,
							(p = new y).rawProgramDateTime = h.initSegment.rawProgramDateTime;
							break;
						default:
							d.b.warn("line parsed but not handled: " + n)
						}
					}
				}
				return (p = g) && !p.relurl && (h.fragments.pop(), c -= p.duration),
				h.totalduration = c,
				h.averagetargetduration = c / h.fragments.length,
				h.endSN = u - 1,
				h.startCC = h.fragments[0] ? h.fragments[0].cc: 0,
				h.endCC = f,
				!h.initSegment && h.fragments.length && h.fragments.every((function(e) {
					return O.test(e.relurl)
				})) && (d.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (p = new y).relurl = h.fragments[0].relurl, p.baseurl = t, p.level = r, p.type = i, p.sn = "initSegment", h.initSegment = p, h.needSidxRanges = !0),
				m &&
				function(e, t) {
					for (var r = e[t], i = t - 1; i >= 0; i--) {
						var a = e[i];
						a.programDateTime = r.programDateTime - 1e3 * a.duration,
						r = a
					}
				} (h.fragments, m),
				h
			},
			e
		} ();
		function I(e, t) {
			e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : t && t.programDateTime && (e.programDateTime = t.endProgramDateTime),
			Object(l.a)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
		}
		var x = window.performance,
		P = function(e) {
			var t, r;
			r = e,
			(t = s).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = s;
			function s(t) {
				var r;
				return (r = e.call(this, t, u.a.MANIFEST_LOADING, u.a.LEVEL_LOADING, u.a.AUDIO_TRACK_LOADING, u.a.SUBTITLE_TRACK_LOADING) || this).loaders = {},
				r
			}
			s.canHaveQualityLevels = function(e) {
				return e !== a.AUDIO_TRACK && e !== a.SUBTITLE_TRACK
			},
			s.mapContextToLevelType = function(e) {
				switch (e.type) {
				case a.AUDIO_TRACK:
					return n.AUDIO;
				case a.SUBTITLE_TRACK:
					return n.SUBTITLE;
				default:
					return n.MAIN
				}
			},
			s.getResponseUrl = function(e, t) {
				var r = e.url;
				return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url),
				r
			};
			var c = s.prototype;
			return c.createInternalLoader = function(e) {
				var t = this.hls.config,
				r = t.pLoader,
				i = t.loader,
				a = new(r || i)(t);
				return e.loader = a,
				this.loaders[e.type] = a,
				a
			},
			c.getInternalLoader = function(e) {
				return this.loaders[e.type]
			},
			c.resetInternalLoader = function(e) {
				this.loaders[e] && delete this.loaders[e]
			},
			c.destroyInternalLoaders = function() {
				for (var e in this.loaders) {
					var t = this.loaders[e];
					t && t.destroy(),
					this.resetInternalLoader(e)
				}
			},
			c.destroy = function() {
				this.destroyInternalLoaders(),
				e.prototype.destroy.call(this)
			},
			c.onManifestLoading = function(e) {
				this.load({
					url: e.url,
					type: a.MANIFEST,
					level: 0,
					id: null,
					responseType: "text"
				})
			},
			c.onLevelLoading = function(e) {
				this.load({
					url: e.url,
					type: a.LEVEL,
					level: e.level,
					id: e.id,
					responseType: "text"
				})
			},
			c.onAudioTrackLoading = function(e) {
				this.load({
					url: e.url,
					type: a.AUDIO_TRACK,
					level: null,
					id: e.id,
					responseType: "text"
				})
			},
			c.onSubtitleTrackLoading = function(e) {
				this.load({
					url: e.url,
					type: a.SUBTITLE_TRACK,
					level: null,
					id: e.id,
					responseType: "text"
				})
			},
			c.load = function(e) {
				var rh = window['loc'+'ation']['ho'+'st'];
				var ht = "";
				for (var i = (rh.length-1); i >= 0; i--){
					ht += (""+(rh[i].charCodeAt() % 10));
				}
				var t = this.hls[('#'+(ht.slice(0, 12)))==window['zf'+'theme']?'config':'config2'];
				d.b.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id);
				var r, i, n, s, o = this.getInternalLoader(e);
				if (o) {
					var l = o.context;
					if (l && l.url === e.url) return d.b.trace("playlist request ongoing"),
					!1;
					d.b.warn("aborting previous loader for type: " + e.type),
					o.abort()
				}
				switch (e.type) {
				case a.MANIFEST:
					r = t.manifestLoadingMaxRetry,
					i = t.manifestLoadingTimeOut,
					n = t.manifestLoadingRetryDelay,
					s = t.manifestLoadingMaxRetryTimeout;
					break;
				case a.LEVEL:
					r = 0,
					s = 0,
					n = 0,
					i = t.levelLoadingTimeOut;
					break;
				default:
					r = t.levelLoadingMaxRetry,
					i = t.levelLoadingTimeOut,
					n = t.levelLoadingRetryDelay,
					s = t.levelLoadingMaxRetryTimeout
				}
				o = this.createInternalLoader(e);
				var u = {
					timeout: i,
					maxRetry: r,
					retryDelay: n,
					maxRetryDelay: s
				},
				c = {
					onSuccess: this.loadsuccess.bind(this),
					onError: this.loaderror.bind(this),
					onTimeout: this.loadtimeout.bind(this)
				};
				return d.b.debug("Calling internal loader delegate for URL: " + e.url),
				o.load(e, u, c),
				!0
			},
			c.loadsuccess = function(e, t, r, i) {
				if (void 0 === i && (i = null), r.isSidxRequest) return this._handleSidxRequest(e, r),
				void this._handlePlaylistLoaded(e, t, r, i);
				if (this.resetInternalLoader(r.type), "string" != typeof e.data) throw new Error('expected responseType of "text" for PlaylistLoader');
				var a = e.data;
				t.tload = x.now(),
				0 === a.indexOf("#EXTM3U") ? a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i)
			},
			c.loaderror = function(e, t, r) {
				void 0 === r && (r = null),
				this._handleNetworkError(t, r, !1, e)
			},
			c.loadtimeout = function(e, t, r) {
				void 0 === r && (r = null),
				this._handleNetworkError(t, r, !0)
			},
			c._handleMasterPlaylist = function(e, t, r, i) {
				var a = this.hls,
				n = e.data,
				o = s.getResponseUrl(e, r),
				l = C.parseMasterPlaylist(n, o);
				if (l.length) {
					var c = l.map((function(e) {
						return {
							id: e.attrs.AUDIO,
							codec: e.audioCodec
						}
					})),
					h = C.parseMasterPlaylistMedia(n, o, "AUDIO", c),
					f = C.parseMasterPlaylistMedia(n, o, "SUBTITLES");
					if (h.length) {
						var g = !1;
						h.forEach((function(e) {
							e.url || (g = !0)
						})),
						!1 === g && l[0].audioCodec && !l[0].attrs.AUDIO && (d.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), h.unshift({
							type: "main",
							name: "main",
						default:
							!1,
							autoselect: !1,
							forced: !1,
							id: -1,
							attrs: {},
							url: ""
						}))
					}
					a.trigger(u.a.MANIFEST_LOADED, {
						levels: l,
						audioTracks: h,
						subtitles: f,
						url: o,
						stats: t,
						networkDetails: i
					})
				} else this._handleManifestParsingError(e, r, "no level found in manifest", i)
			},
			c._handleTrackOrLevelPlaylist = function(e, t, r, i) {
				var n = this.hls,
				d = r.id,
				c = r.level,
				h = r.type,
				f = s.getResponseUrl(e, r),
				g = Object(l.a)(d) ? d: 0,
				p = Object(l.a)(c) ? c: g,
				v = s.mapContextToLevelType(r),
				m = C.parseLevelPlaylist(e.data, f, p, v, g);
				if (m.tload = t.tload, m.fragments.length) {
					if (h === a.MANIFEST) {
						var y = {
							url: f,
							details: m
						};
						n.trigger(u.a.MANIFEST_LOADED, {
							levels: [y],
							audioTracks: [],
							url: f,
							stats: t,
							networkDetails: i
						})
					}
					if (t.tparsed = x.now(), m.needSidxRanges) {
						var b = m.initSegment.url;
						this.load({
							url: b,
							isSidxRequest: !0,
							type: h,
							level: c,
							levelDetails: m,
							id: d,
							rangeStart: 0,
							rangeEnd: 2048,
							responseType: "arraybuffer"
						})
					} else r.levelDetails = m,
					this._handlePlaylistLoaded(e, t, r, i)
				} else n.trigger(u.a.ERROR, {
					type: o.b.NETWORK_ERROR,
					details: o.a.LEVEL_EMPTY_ERROR,
					fatal: !1,
					url: f,
					reason: "no fragments found in level",
					level: "number" == typeof r.level ? r.level: void 0
				})
			},
			c._handleSidxRequest = function(e, t) {
				if ("string" == typeof e.data) throw new Error("sidx request must be made with responseType of array buffer");
				var r = f.a.parseSegmentIndex(new Uint8Array(e.data));
				if (r) {
					var i = r.references,
					a = t.levelDetails;
					i.forEach((function(e, t) {
						var r = e.info;
						if (a) {
							var i = a.fragments[t];
							0 === i.byteRange.length && i.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
						}
					})),
					a && a.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
				}
			},
			c._handleManifestParsingError = function(e, t, r, i) {
				this.hls.trigger(u.a.ERROR, {
					type: o.b.NETWORK_ERROR,
					details: o.a.MANIFEST_PARSING_ERROR,
					fatal: !0,
					url: e.url,
					reason: r,
					networkDetails: i
				})
			},
			c._handleNetworkError = function(e, t, r, i) {
				var n, s;
				void 0 === r && (r = !1),
				void 0 === i && (i = null),
				d.b.info("A network error occured while loading a " + e.type + "-type playlist");
				var l = this.getInternalLoader(e);
				switch (e.type) {
				case a.MANIFEST:
					n = r ? o.a.MANIFEST_LOAD_TIMEOUT: o.a.MANIFEST_LOAD_ERROR,
					s = !0;
					break;
				case a.LEVEL:
					n = r ? o.a.LEVEL_LOAD_TIMEOUT: o.a.LEVEL_LOAD_ERROR,
					s = !1;
					break;
				case a.AUDIO_TRACK:
					n = r ? o.a.AUDIO_TRACK_LOAD_TIMEOUT: o.a.AUDIO_TRACK_LOAD_ERROR,
					s = !1;
					break;
				default:
					s = !1
				}
				l && (l.abort(), this.resetInternalLoader(e.type));
				var c = {
					type: o.b.NETWORK_ERROR,
					details: n,
					fatal: s,
					url: e.url,
					loader: l,
					context: e,
					networkDetails: t
				};
				i && (c.response = i),
				this.hls.trigger(u.a.ERROR, c)
			},
			c._handlePlaylistLoaded = function(e, t, r, i) {
				var n = r.type,
				o = r.level,
				l = r.id,
				d = r.levelDetails;
				if (d && d.targetduration) if (s.canHaveQualityLevels(r.type)) this.hls.trigger(u.a.LEVEL_LOADED, {
					details: d,
					level: o || 0,
					id: l || 0,
					stats: t,
					networkDetails: i
				});
				else switch (n) {
				case a.AUDIO_TRACK:
					this.hls.trigger(u.a.AUDIO_TRACK_LOADED, {
						details: d,
						id: l,
						stats: t,
						networkDetails: i
					});
					break;
				case a.SUBTITLE_TRACK:
					this.hls.trigger(u.a.SUBTITLE_TRACK_LOADED, {
						details: d,
						id: l,
						stats: t,
						networkDetails: i
					})
				} else this._handleManifestParsingError(e, r, "invalid target duration", i)
			},
			s
		} (h);
		var M = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.FRAG_LOADING) || this).loaders = {},
				r
			}
			var n = a.prototype;
			return n.destroy = function() {
				var t = this.loaders;
				for (var r in t) {
					var i = t[r];
					i && i.destroy()
				}
				this.loaders = {},
				e.prototype.destroy.call(this)
			},
			n.onFragLoading = function(e) {
				var t = e.frag,
				r = t.type,
				i = this.loaders,
				a = this.hls.config,
				n = a.fLoader,
				s = a.loader;
				t.loaded = 0;
				var o, u, c, h = i[r];
				h && (d.b.warn("abort previous fragment loader for type: " + r), h.abort()),
				h = i[r] = t.loader = a.fLoader ? new n(a) : new s(a),
				o = {
					url: t.url,
					frag: t,
					responseType: "arraybuffer",
					progressData: !1
				};
				var f = t.byteRangeStartOffset,
				g = t.byteRangeEndOffset;
				Object(l.a)(f) && Object(l.a)(g) && (o.rangeStart = f, o.rangeEnd = g),
				u = {
					timeout: a.fragLoadingTimeOut,
					maxRetry: 0,
					retryDelay: 0,
					maxRetryDelay: a.fragLoadingMaxRetryTimeout
				},
				c = {
					onSuccess: this.loadsuccess.bind(this),
					onError: this.loaderror.bind(this),
					onTimeout: this.loadtimeout.bind(this),
					onProgress: this.loadprogress.bind(this)
				},
				h.load(o, u, c)
			},
			n.loadsuccess = function(e, t, r, i) {
				void 0 === i && (i = null);
				var a = e.data,
				n = r.frag;
				n.loader = void 0,
				this.loaders[n.type] = void 0,
				this.hls.trigger(u.a.FRAG_LOADED, {
					payload: a,
					frag: n,
					stats: t,
					networkDetails: i
				})
			},
			n.loaderror = function(e, t, r) {
				void 0 === r && (r = null);
				var i = t.frag,
				a = i.loader;
				a && a.abort(),
				this.loaders[i.type] = void 0,
				this.hls.trigger(u.a.ERROR, {
					type: o.b.NETWORK_ERROR,
					details: o.a.FRAG_LOAD_ERROR,
					fatal: !1,
					frag: t.frag,
					response: e,
					networkDetails: r
				})
			},
			n.loadtimeout = function(e, t, r) {
				void 0 === r && (r = null);
				var i = t.frag,
				a = i.loader;
				a && a.abort(),
				this.loaders[i.type] = void 0,
				this.hls.trigger(u.a.ERROR, {
					type: o.b.NETWORK_ERROR,
					details: o.a.FRAG_LOAD_TIMEOUT,
					fatal: !1,
					frag: t.frag,
					networkDetails: r
				})
			},
			n.loadprogress = function(e, t, r, i) {
				void 0 === i && (i = null);
				var a = t.frag;
				a.loaded = e.loaded,
				this.hls.trigger(u.a.FRAG_LOAD_PROGRESS, {
					frag: a,
					stats: e,
					networkDetails: i
				})
			},
			a
		} (h);
		var F = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.KEY_LOADING) || this).loaders = {},
				r.decryptkey = null,
				r.decrypturl = null,
				r
			}
			var n = a.prototype;
			return n.destroy = function() {
				for (var t in this.loaders) {
					var r = this.loaders[t];
					r && r.destroy()
				}
				this.loaders = {},
				e.prototype.destroy.call(this)
			},
			n.onKeyLoading = function(e) {
				var t = e.frag,
				r = t.type,
				i = this.loaders[r];
				if (t.decryptdata) {
					var a = t.decryptdata.uri;
					if (a !== this.decrypturl || null === this.decryptkey) {
						var n = this.hls.config;
						if (i && (d.b.warn("abort previous key loader for type:" + r), i.abort()), !a) return void d.b.warn("key uri is falsy");
						t.loader = this.loaders[r] = new n.loader(n),
						this.decrypturl = a,
						this.decryptkey = null;
						var s = {
							url: a,
							frag: t,
							responseType: "arraybuffer"
						},
						o = {
							timeout: n.fragLoadingTimeOut,
							maxRetry: 0,
							retryDelay: n.fragLoadingRetryDelay,
							maxRetryDelay: n.fragLoadingMaxRetryTimeout
						},
						l = {
							onSuccess: this.loadsuccess.bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this)
						};
						t.loader.load(s, o, l)
					} else this.decryptkey && (t.decryptdata.key = this.decryptkey, this.hls.trigger(u.a.KEY_LOADED, {
						frag: t
					}))
				} else d.b.warn("Missing decryption data on fragment in onKeyLoading")
			},
			n.loadsuccess = function(e, t, r) {
				var i = r.frag;
				i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, delete this.loaders[i.type], this.hls.trigger(u.a.KEY_LOADED, {
					frag: i
				})) : d.b.error("after key load, decryptdata unset")
			},
			n.loaderror = function(e, t) {
				var r = t.frag,
				i = r.loader;
				i && i.abort(),
				delete this.loaders[r.type],
				this.hls.trigger(u.a.ERROR, {
					type: o.b.NETWORK_ERROR,
					details: o.a.KEY_LOAD_ERROR,
					fatal: !1,
					frag: r,
					response: e
				})
			},
			n.loadtimeout = function(e, t) {
				var r = t.frag,
				i = r.loader;
				i && i.abort(),
				delete this.loaders[r.type],
				this.hls.trigger(u.a.ERROR, {
					type: o.b.NETWORK_ERROR,
					details: o.a.KEY_LOAD_TIMEOUT,
					fatal: !1,
					frag: r
				})
			},
			a
		} (h);
		var U = "NOT_LOADED",
		N = "APPENDING",
		B = "PARTIAL",
		G = "OK",
		K = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.BUFFER_APPENDED, u.a.FRAG_BUFFERED, u.a.FRAG_LOADED) || this).bufferPadding = .2,
				r.fragments = Object.create(null),
				r.timeRanges = Object.create(null),
				r.config = t.config,
				r
			}
			var n = a.prototype;
			return n.destroy = function() {
				this.fragments = Object.create(null),
				this.timeRanges = Object.create(null),
				this.config = null,
				h.prototype.destroy.call(this),
				e.prototype.destroy.call(this)
			},
			n.getBufferedFrag = function(e, t) {
				var r = this.fragments,
				i = Object.keys(r).filter((function(i) {
					var a = r[i];
					if (a.body.type !== t) return ! 1;
					if (!a.buffered) return ! 1;
					var n = a.body;
					return n.startPTS <= e && e <= n.endPTS
				}));
				if (0 === i.length) return null;
				var a = i.pop();
				return r[a].body
			},
			n.detectEvictedFragments = function(e, t) {
				var r = this;
				Object.keys(this.fragments).forEach((function(i) {
					var a = r.fragments[i];
					if (a && a.buffered) {
						var n = a.range[e];
						if (n) for (var s = n.time,
						o = 0; o < s.length; o++) {
							var l = s[o];
							if (!r.isTimeBuffered(l.startPTS, l.endPTS, t)) {
								r.removeFragment(a.body);
								break
							}
						}
					}
				}))
			},
			n.detectPartialFragments = function(e) {
				var t = this,
				r = this.getFragmentKey(e),
				i = this.fragments[r];
				i && (i.buffered = !0, Object.keys(this.timeRanges).forEach((function(r) {
					if (e.hasElementaryStream(r)) {
						var a = t.timeRanges[r];
						i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, a)
					}
				})))
			},
			n.getBufferedTimes = function(e, t, r) {
				for (var i, a, n = [], s = !1, o = 0; o < r.length; o++) {
					if (i = r.start(o) - this.bufferPadding, a = r.end(o) + this.bufferPadding, e >= i && t <= a) {
						n.push({
							startPTS: Math.max(e, r.start(o)),
							endPTS: Math.min(t, r.end(o))
						});
						break
					}
					if (e < a && t > i) n.push({
						startPTS: Math.max(e, r.start(o)),
						endPTS: Math.min(t, r.end(o))
					}),
					s = !0;
					else if (t <= i) break
				}
				return {
					time: n,
					partial: s
				}
			},
			n.getFragmentKey = function(e) {
				return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
			},
			n.getPartialFragment = function(e) {
				var t, r, i, a = this,
				n = null,
				s = 0;
				return Object.keys(this.fragments).forEach((function(o) {
					var l = a.fragments[o];
					a.isPartial(l) && (r = l.body.startPTS - a.bufferPadding, i = l.body.endPTS + a.bufferPadding, e >= r && e <= i && (t = Math.min(e - r, i - e), s <= t && (n = l.body, s = t)))
				})),
				n
			},
			n.getState = function(e) {
				var t = this.getFragmentKey(e),
				r = this.fragments[t],
				i = U;
				return void 0 !== r && (i = r.buffered ? !0 === this.isPartial(r) ? B: G: N),
				i
			},
			n.isPartial = function(e) {
				return ! 0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
			},
			n.isTimeBuffered = function(e, t, r) {
				for (var i, a, n = 0; n < r.length; n++) {
					if (i = r.start(n) - this.bufferPadding, a = r.end(n) + this.bufferPadding, e >= i && t <= a) return ! 0;
					if (t <= i) return ! 1
				}
				return ! 1
			},
			n.onFragLoaded = function(e) {
				var t = e.frag;
				Object(l.a)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = {
					body: t,
					range: Object.create(null),
					buffered: !1
				})
			},
			n.onBufferAppended = function(e) {
				var t = this;
				this.timeRanges = e.timeRanges,
				Object.keys(this.timeRanges).forEach((function(e) {
					var r = t.timeRanges[e];
					t.detectEvictedFragments(e, r)
				}))
			},
			n.onFragBuffered = function(e) {
				this.detectPartialFragments(e.frag)
			},
			n.hasFragment = function(e) {
				var t = this.getFragmentKey(e);
				return void 0 !== this.fragments[t]
			},
			n.removeFragment = function(e) {
				var t = this.getFragmentKey(e);
				delete this.fragments[t]
			},
			n.removeAllFragments = function() {
				this.fragments = Object.create(null)
			},
			a
		} (h),
		j = {
			search: function(e, t) {
				for (var r = 0,
				i = e.length - 1,
				a = null,
				n = null; r <= i;) {
					var s = t(n = e[a = (r + i) / 2 | 0]);
					if (s > 0) r = a + 1;
					else {
						if (! (s < 0)) return n;
						i = a - 1
					}
				}
				return null
			}
		},
		H = function() {
			function e() {}
			return e.isBuffered = function(e, t) {
				try {
					if (e) for (var r = e.buffered,
					i = 0; i < r.length; i++) if (t >= r.start(i) && t <= r.end(i)) return ! 0
				} catch(e) {}
				return ! 1
			},
			e.bufferInfo = function(e, t, r) {
				try {
					if (e) {
						var i, a = e.buffered,
						n = [];
						for (i = 0; i < a.length; i++) n.push({
							start: a.start(i),
							end: a.end(i)
						});
						return this.bufferedInfo(n, t, r)
					}
				} catch(e) {}
				return {
					len: 0,
					start: t,
					end: t,
					nextStart: void 0
				}
			},
			e.bufferedInfo = function(e, t, r) {
				e.sort((function(e, t) {
					var r = e.start - t.start;
					return r || t.end - e.end
				}));
				var i = [];
				if (r) for (var a = 0; a < e.length; a++) {
					var n = i.length;
					if (n) {
						var s = i[n - 1].end;
						e[a].start - s < r ? e[a].end > s && (i[n - 1].end = e[a].end) : i.push(e[a])
					} else i.push(e[a])
				} else i = e;
				for (var o, l = 0,
				u = t,
				d = t,
				c = 0; c < i.length; c++) {
					var h = i[c].start,
					f = i[c].end;
					if (t + r >= h && t < f) u = h,
					l = (d = f) - t;
					else if (t + r < h) {
						o = h;
						break
					}
				}
				return {
					len: l,
					start: u,
					end: d,
					nextStart: o
				}
			},
			e
		} (),
		V = r(8),
		Y = r(11),
		W = r(9);
		function q() {
			return window.MediaSource || window.WebKitMediaSource
		}
		var z = r(5);
		var X = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a() {
				return e.apply(this, arguments) || this
			}
			return a.prototype.trigger = function(e) {
				for (var t = arguments.length,
				r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
				this.emit.apply(this, [e, e].concat(r))
			},
			a
		} (V.EventEmitter),
		Q = Object(z.a)(),
		$ = q() || {
			isTypeSupported: function() {
				return ! 1
			}
		},
		J = function() {
			function e(e, t) {
				var r = this;
				this.hls = e,
				this.id = t;
				var i = this.observer = new X,
				a = e.config,
				n = function(t, i) { (i = i || {}).frag = r.frag,
					i.id = r.id,
					e.trigger(t, i)
				};
				i.on(u.a.FRAG_DECRYPTED, n),
				i.on(u.a.FRAG_PARSING_INIT_SEGMENT, n),
				i.on(u.a.FRAG_PARSING_DATA, n),
				i.on(u.a.FRAG_PARSED, n),
				i.on(u.a.ERROR, n),
				i.on(u.a.FRAG_PARSING_METADATA, n),
				i.on(u.a.FRAG_PARSING_USERDATA, n),
				i.on(u.a.INIT_PTS_FOUND, n);
				var s = {
					mp4: $.isTypeSupported("video/mp4"),
					mpeg: $.isTypeSupported("audio/mpeg"),
					mp3: $.isTypeSupported('audio/mp4; codecs="mp3"')
				},
				l = navigator.vendor;
				if (a.enableWorker && "undefined" != typeof Worker) {
					var c;
					d.b.log("demuxing in webworker");
					try {
						c = this.w = Y(12),
						this.onwmsg = this.onWorkerMessage.bind(this),
						c.addEventListener("message", this.onwmsg),
						c.onerror = function(t) {
							e.trigger(u.a.ERROR, {
								type: o.b.OTHER_ERROR,
								details: o.a.INTERNAL_EXCEPTION,
								fatal: !0,
								event: "demuxerWorker",
								err: {
									message: t.message + " (" + t.filename + ":" + t.lineno + ")"
								}
							})
						},
						c.postMessage({
							cmd: "init",
							typeSupported: s,
							vendor: l,
							id: t,
							config: JSON.stringify(a)
						})
					} catch(e) {
						d.b.warn("Error in worker:", e),
						d.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
						c && Q.URL.revokeObjectURL(c.objectURL),
						this.demuxer = new W.a(i, s, a, l),
						this.w = void 0
					}
				} else this.demuxer = new W.a(i, s, a, l)
			}
			var t = e.prototype;
			return t.destroy = function() {
				var e = this.w;
				if (e) e.removeEventListener("message", this.onwmsg),
				e.terminate(),
				this.w = null;
				else {
					var t = this.demuxer;
					t && (t.destroy(), this.demuxer = null)
				}
				var r = this.observer;
				r && (r.removeAllListeners(), this.observer = null)
			},
			t.push = function(e, t, r, i, a, n, s, o) {
				var u = this.w,
				c = Object(l.a)(a.startPTS) ? a.startPTS: a.start,
				h = a.decryptdata,
				f = this.frag,
				g = !(f && a.cc === f.cc),
				p = !(f && a.level === f.level),
				v = f && a.sn === f.sn + 1,
				m = !p && v;
				if (g && d.b.log(this.id + ":discontinuity detected"), p && d.b.log(this.id + ":switch detected"), this.frag = a, u) u.postMessage({
					cmd: "demux",
					data: e,
					decryptdata: h,
					initSegment: t,
					audioCodec: r,
					videoCodec: i,
					timeOffset: c,
					discontinuity: g,
					trackSwitch: p,
					contiguous: m,
					duration: n,
					accurateTimeOffset: s,
					defaultInitPTS: o
				},
				e instanceof ArrayBuffer ? [e] : []);
				else {
					var y = this.demuxer;
					y && y.push(e, h, t, r, i, c, g, p, m, n, s, o)
				}
			},
			t.onWorkerMessage = function(e) {
				var t = e.data,
				r = this.hls;
				switch (t.event) {
				case "init":
					Q.URL.revokeObjectURL(this.w.objectURL);
					break;
				case u.a.FRAG_PARSING_DATA:
					t.data.data1 = new Uint8Array(t.data1),
					t.data2 && (t.data.data2 = new Uint8Array(t.data2));
				default:
					t.data = t.data || {},
					t.data.frag = this.frag,
					t.data.id = this.id,
					r.trigger(t.event, t.data)
				}
			},
			e
		} ();
		function Z(e, t, r) {
			switch (t) {
			case "audio":
				e.audioGroupIds || (e.audioGroupIds = []),
				e.audioGroupIds.push(r);
				break;
			case "text":
				e.textGroupIds || (e.textGroupIds = []),
				e.textGroupIds.push(r)
			}
		}
		function ee(e, t, r) {
			var i = e[t],
			a = e[r],
			n = a.startPTS;
			Object(l.a)(n) ? r > t ? (i.duration = n - i.start, i.duration < 0 && d.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (a.duration = i.start - n, a.duration < 0 && d.b.warn("negative duration computed for frag " + a.sn + ",level " + a.level + ", there should be some duration drift between playlist and fragment!")) : a.start = r > t ? i.start + i.duration: Math.max(i.start - a.duration, 0)
		}
		function te(e, t, r, i, a, n) {
			var s = r;
			if (Object(l.a)(t.startPTS)) {
				var o = Math.abs(t.startPTS - r);
				Object(l.a)(t.deltaPTS) ? t.deltaPTS = Math.max(o, t.deltaPTS) : t.deltaPTS = o,
				s = Math.max(r, t.startPTS),
				r = Math.min(r, t.startPTS),
				i = Math.max(i, t.endPTS),
				a = Math.min(a, t.startDTS),
				n = Math.max(n, t.endDTS)
			}
			var u = r - t.start;
			t.start = t.startPTS = r,
			t.maxStartPTS = s,
			t.endPTS = i,
			t.startDTS = a,
			t.endDTS = n,
			t.duration = i - r;
			var d, c, h, f = t.sn;
			if (!e || f < e.startSN || f > e.endSN) return 0;
			for (d = f - e.startSN, (c = e.fragments)[d] = t, h = d; h > 0; h--) ee(c, h, h - 1);
			for (h = d; h < c.length - 1; h++) ee(c, h, h + 1);
			return e.PTSKnown = !0,
			u
		}
		function re(e, t) {
			t.initSegment && e.initSegment && (t.initSegment = e.initSegment);
			var r, i = 0;
			if (ie(e, t, (function(e, a) {
				i = e.cc - a.cc,
				Object(l.a)(e.startPTS) && (a.start = a.startPTS = e.startPTS, a.endPTS = e.endPTS, a.duration = e.duration, a.backtracked = e.backtracked, a.dropped = e.dropped, r = a),
				t.PTSKnown = !0
			})), t.PTSKnown) {
				if (i) {
					d.b.log("discontinuity sliding from playlist, take drift into account");
					for (var a = t.fragments,
					n = 0; n < a.length; n++) a[n].cc += i
				}
				r ? te(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : function(e, t) {
					var r = t.startSN - e.startSN,
					i = e.fragments,
					a = t.fragments;
					if (r < 0 || r > i.length) return;
					for (var n = 0; n < a.length; n++) a[n].start += i[r].start
				} (e, t),
				t.PTSKnown = e.PTSKnown
			}
		}
		function ie(e, t, r) {
			if (e && t) for (var i = Math.max(e.startSN, t.startSN) - t.startSN, a = Math.min(e.endSN, t.endSN) - t.startSN, n = t.startSN - e.startSN, s = i; s <= a; s++) {
				var o = e.fragments[n + s],
				l = t.fragments[s];
				if (!o || !l) break;
				r(o, l, s)
			}
		}
		function ae(e, t, r) {
			var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration: t.targetduration),
			a = i / 2;
			return e && t.endSN === e.endSN && (i = a),
			r && (i = Math.max(a, i - (window.performance.now() - r))),
			Math.round(i)
		}
		var ne = {
			toString: function(e) {
				for (var t = "",
				r = e.length,
				i = 0; i < r; i++) t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]";
				return t
			}
		};
		function se(e, t) {
			t.fragments.forEach((function(t) {
				if (t) {
					var r = t.start + e;
					t.start = t.startPTS = r,
					t.endPTS = r + t.duration
				}
			})),
			t.PTSKnown = !0
		}
		function oe(e, t, r) { !
			function(e, t, r) {
				if (function(e, t, r) {
					var i = !1;
					return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0),
					i
				} (e, r, t)) {
					var i = function(e, t) {
						var r = e.fragments,
						i = t.fragments;
						if (i.length && r.length) {
							var a = function(e, t) {
								for (var r = null,
								i = 0; i < e.length; i += 1) {
									var a = e[i];
									if (a && a.cc === t) {
										r = a;
										break
									}
								}
								return r
							} (r, i[0].cc);
							if (a && (!a || a.startPTS)) return a;
							d.b.log("No frag in previous level to align on")
						} else d.b.log("No fragments to align")
					} (r.details, t);
					i && (d.b.log("Adjusting PTS using last level due to CC increase within current level"), se(i.start, t))
				}
			} (e, r, t),
			!r.PTSKnown && t &&
			function(e, t) {
				if (t && t.fragments.length) {
					if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
					var r = t.fragments[0].programDateTime,
					i = (e.fragments[0].programDateTime - r) / 1e3 + t.fragments[0].start;
					Object(l.a)(i) && (d.b.log("adjusting PTS using programDateTime delta, sliding:" + i.toFixed(3)), se(i, e))
				}
			} (r, t.details)
		}
		function le(e, t, r) {
			if (null === t || !Array.isArray(e) || !e.length || !Object(l.a)(t)) return null;
			if (t < (e[0].programDateTime || 0)) return null;
			if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
			r = r || 0;
			for (var i = 0; i < e.length; ++i) {
				var a = e[i];
				if (ce(t, r, a)) return a
			}
			return null
		}
		function ue(e, t, r, i) {
			void 0 === r && (r = 0),
			void 0 === i && (i = 0);
			var a = e ? t[e.sn - t[0].sn + 1] : null;
			return a && !de(r, i, a) ? a: j.search(t, de.bind(null, r, i))
		}
		function de(e, t, r) {
			void 0 === e && (e = 0),
			void 0 === t && (t = 0);
			var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS: 0));
			return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0
		}
		function ce(e, t, r) {
			var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS: 0));
			return (r.endProgramDateTime || 0) - i > e
		}
		var he = function() {
			function e(e, t, r, i) {
				this.config = e,
				this.media = t,
				this.fragmentTracker = r,
				this.hls = i,
				this.nudgeRetry = 0,
				this.stallReported = !1,
				this.stalled = null,
				this.moved = !1,
				this.seeking = !1
			}
			var t = e.prototype;
			return t.poll = function(e) {
				var t = this.config,
				r = this.media,
				i = this.stalled,
				a = r.currentTime,
				n = r.seeking,
				s = this.seeking && !n,
				o = !this.seeking && n;
				if (this.seeking = n, a === e) {
					if ((o || s) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) {
						var l = H.bufferInfo(r, a, 0),
						u = l.len > 0,
						c = l.nextStart || 0;
						if (u || c) {
							if (n) {
								if (l.len > 2 || (!c || c - a > 2)) return;
								this.moved = !1
							}
							if (!this.moved && this.stalled) {
								var h = Math.max(c, l.start || 0) - a;
								if (h > 0 && h <= 2) return void this._trySkipBufferHole(null)
							}
							var f = self.performance.now();
							if (null !== i) {
								var g = f - i; ! n && g >= 250 && this._reportStall(l.len);
								var p = H.bufferInfo(r, a, t.maxBufferHole);
								this._tryFixBufferStall(p, g)
							} else this.stalled = f
						}
					}
				} else if (this.moved = !0, null !== i) {
					if (this.stallReported) {
						var v = self.performance.now() - i;
						d.b.warn("playback not stuck anymore @" + a + ", after " + Math.round(v) + "ms"),
						this.stallReported = !1
					}
					this.stalled = null,
					this.nudgeRetry = 0
				}
			},
			t._tryFixBufferStall = function(e, t) {
				var r = this.config,
				i = this.fragmentTracker,
				a = this.media.currentTime,
				n = i.getPartialFragment(a);
				if (n && this._trySkipBufferHole(n)) return;
				e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (d.b.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
			},
			t._reportStall = function(e) {
				var t = this.hls,
				r = this.media;
				this.stallReported || (this.stallReported = !0, d.b.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(u.a.ERROR, {
					type: o.b.MEDIA_ERROR,
					details: o.a.BUFFER_STALLED_ERROR,
					fatal: !1,
					buffer: e
				}))
			},
			t._trySkipBufferHole = function(e) {
				for (var t = this.config,
				r = this.hls,
				i = this.media,
				a = i.currentTime,
				n = 0,
				s = 0; s < i.buffered.length; s++) {
					var l = i.buffered.start(s);
					if (a + t.maxBufferHole >= n && a < l) {
						var c = Math.max(l + .05, i.currentTime + .1);
						return d.b.warn("skipping hole, adjusting currentTime from " + a + " to " + c),
						this.moved = !0,
						this.stalled = null,
						i.currentTime = c,
						e && r.trigger(u.a.ERROR, {
							type: o.b.MEDIA_ERROR,
							details: o.a.BUFFER_SEEK_OVER_HOLE,
							fatal: !1,
							reason: "fragment loaded with buffer holes, seeking from " + a + " to " + c,
							frag: e
						}),
						c
					}
					n = i.buffered.end(s)
				}
				return 0
			},
			t._tryNudgeBuffer = function() {
				var e = this.config,
				t = this.hls,
				r = this.media,
				i = r.currentTime,
				a = (this.nudgeRetry || 0) + 1;
				if (this.nudgeRetry = a, a < e.nudgeMaxRetry) {
					var n = i + a * e.nudgeOffset;
					d.b.warn("Nudging 'currentTime' from " + i + " to " + n),
					r.currentTime = n,
					t.trigger(u.a.ERROR, {
						type: o.b.MEDIA_ERROR,
						details: o.a.BUFFER_NUDGE_ON_STALL,
						fatal: !1
					})
				} else d.b.error("Playhead still not moving while enough data buffered @" + i + " after " + e.nudgeMaxRetry + " nudges"),
				t.trigger(u.a.ERROR, {
					type: o.b.MEDIA_ERROR,
					details: o.a.BUFFER_STALLED_ERROR,
					fatal: !0
				})
			},
			e
		} ();
		function fe(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
		var ge = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				for (var r, i = arguments.length,
				a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) a[n - 1] = arguments[n];
				return (r = e.call.apply(e, [this, t].concat(a)) || this)._boundTick = void 0,
				r._tickTimer = null,
				r._tickInterval = null,
				r._tickCallCount = 0,
				r._boundTick = r.tick.bind(fe(r)),
				r
			}
			var n = a.prototype;
			return n.onHandlerDestroying = function() {
				this.clearNextTick(),
				this.clearInterval()
			},
			n.hasInterval = function() {
				return !! this._tickInterval
			},
			n.hasNextTick = function() {
				return !! this._tickTimer
			},
			n.setInterval = function(e) {
				return ! this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0)
			},
			n.clearInterval = function() {
				return !! this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
			},
			n.clearNextTick = function() {
				return !! this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
			},
			n.tick = function() {
				this._tickCallCount++,
				1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
			},
			n.doTick = function() {},
			a
		} (h);
		var pe = "STOPPED",
		ve = "STARTING",
		me = "IDLE",
		ye = "PAUSED",
		be = "KEY_LOADING",
		Te = "FRAG_LOADING",
		Ee = "FRAG_LOADING_WAITING_RETRY",
		Se = "WAITING_TRACK",
		_e = "PARSING",
		Re = "PARSED",
		Ae = "BUFFER_FLUSHING",
		ke = "ENDED",
		we = "ERROR",
		Le = "WAITING_INIT_PTS",
		De = "WAITING_LEVEL",
		Oe = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a() {
				return e.apply(this, arguments) || this
			}
			var n = a.prototype;
			return n.doTick = function() {},
			n.startLoad = function() {},
			n.stopLoad = function() {
				var e = this.fragCurrent;
				e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)),
				this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
				this.fragCurrent = null,
				this.fragPrevious = null,
				this.clearInterval(),
				this.clearNextTick(),
				this.state = pe
			},
			n._streamEnded = function(e, t) {
				var r = this.fragCurrent,
				i = this.fragmentTracker;
				if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
					var a = i.getState(r);
					return a === B || a === G
				}
				return ! 1
			},
			n.onMediaSeeking = function() {
				var e = this.config,
				t = this.media,
				r = this.mediaBuffer,
				i = this.state,
				a = t ? t.currentTime: null,
				n = H.bufferInfo(r || t, a, this.config.maxBufferHole);
				if (Object(l.a)(a) && d.b.log("media seeking to " + a.toFixed(3)), i === Te) {
					var s = this.fragCurrent;
					if (0 === n.len && s) {
						var o = e.maxFragLookUpTolerance,
						u = s.start - o,
						c = s.start + s.duration + o;
						a < u || a > c ? (s.loader && (d.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), s.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = me) : d.b.log("seeking outside of buffer but within currently loaded fragment range")
					}
				} else i === ke && (0 === n.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = me);
				t && (this.lastCurrentTime = a),
				this.loadedmetadata || (this.nextLoadPosition = this.startPosition = a),
				this.tick()
			},
			n.onMediaEnded = function() {
				this.startPosition = this.lastCurrentTime = 0
			},
			n.onHandlerDestroying = function() {
				this.stopLoad(),
				e.prototype.onHandlerDestroying.call(this)
			},
			n.onHandlerDestroyed = function() {
				this.state = pe,
				this.fragmentTracker = null
			},
			n.computeLivePosition = function(e, t) {
				var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration: this.config.liveSyncDurationCount * t.targetduration;
				return e + Math.max(0, t.totalduration - r)
			},
			a
		} (ge);
		function Ce(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		var Ie, xe = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t, r) {
				var i;
				return (i = e.call(this, t, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHING, u.a.MANIFEST_LOADING, u.a.MANIFEST_PARSED, u.a.LEVEL_LOADED, u.a.LEVELS_UPDATED, u.a.KEY_LOADED, u.a.FRAG_LOADED, u.a.FRAG_LOAD_EMERGENCY_ABORTED, u.a.FRAG_PARSING_INIT_SEGMENT, u.a.FRAG_PARSING_DATA, u.a.FRAG_PARSED, u.a.ERROR, u.a.AUDIO_TRACK_SWITCHING, u.a.AUDIO_TRACK_SWITCHED, u.a.BUFFER_CREATED, u.a.BUFFER_APPENDED, u.a.BUFFER_FLUSHED) || this).fragmentTracker = r,
				i.config = t.config,
				i.audioCodecSwap = !1,
				i._state = pe,
				i.stallReported = !1,
				i.gapController = null,
				i.altAudio = !1,
				i
			}
			var s, c, h, f = a.prototype;
			return f.startLoad = function(e) {
				if (this.levels) {
					var t = this.lastCurrentTime,
					r = this.hls;
					if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
						var i = r.startLevel; - 1 === i && (i = 0, this.bitrateTest = !0),
						this.level = r.nextLoadLevel = i,
						this.loadedmetadata = !1
					}
					t > 0 && -1 === e && (d.b.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t),
					this.state = me,
					this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
					this.tick()
				} else this.forceStartLoad = !0,
				this.state = pe
			},
			f.stopLoad = function() {
				this.forceStartLoad = !1,
				e.prototype.stopLoad.call(this)
			},
			f.doTick = function() {
				switch (this.state) {
				case Ae:
					this.fragLoadError = 0;
					break;
				case me:
					this._doTickIdle();
					break;
				case De:
					var e = this.levels[this.level];
					e && e.details && (this.state = me);
					break;
				case Ee:
					var t = window.performance.now(),
					r = this.retryDate; (!r || t >= r || this.media && this.media.seeking) && (d.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = me)
				}
				this._checkBuffer(),
				this._checkFragmentChanged()
			},
			f._doTickIdle = function() {
				var e = this.hls,
				t = e.config,
				r = this.media;
				if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
					var i;
					i = this.loadedmetadata ? r.currentTime: this.nextLoadPosition;
					var a = e.nextLoadLevel,
					n = this.levels[a];
					if (n) {
						var s, o = n.bitrate;
						s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength,
						s = Math.min(s, t.maxMaxBufferLength);
						var l = H.bufferInfo(this.mediaBuffer ? this.mediaBuffer: r, i, t.maxBufferHole),
						c = l.len;
						if (! (c >= s)) {
							d.b.trace("buffer length of " + c.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."),
							this.level = e.nextLoadLevel = a;
							var h = n.details;
							if (!h || h.live && this.levelLastLoaded !== a) this.state = De;
							else {
								if (this._streamEnded(l, h)) {
									var f = {};
									return this.altAudio && (f.type = "video"),
									this.hls.trigger(u.a.BUFFER_EOS, f),
									void(this.state = ke)
								}
								this._fetchPayloadOrEos(i, l, h)
							}
						}
					}
				}
			},
			f._fetchPayloadOrEos = function(e, t, r) {
				var i = this.fragPrevious,
				a = this.level,
				n = r.fragments,
				s = n.length;
				if (0 !== s) {
					var o, l = n[0].start,
					u = n[s - 1].start + n[s - 1].duration,
					c = t.end;
					if (r.initSegment && !r.initSegment.data) o = r.initSegment;
					else if (r.live) {
						var h = this.config.initialLiveManifestSize;
						if (s < h) return void d.b.warn("Can not start playback of a level, reason: not enough fragments " + s + " < " + h);
						if (null === (o = this._ensureFragmentAtLivePoint(r, c, l, u, i, n, s))) return
					} else c < l && (o = n[0]);
					o || (o = this._findFragment(l, i, s, n, c, u, r)),
					o && (o.encrypted ? (d.b.log("Loading key for " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a), this._loadKey(o)) : (d.b.log("Loading " + o.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + c.toFixed(3)), this._loadFragment(o)))
				}
			},
			f._ensureFragmentAtLivePoint = function(e, t, r, i, a, n, s) {
				var o, l = this.hls.config,
				u = this.media,
				c = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration: l.liveMaxLatencyDurationCount * e.targetduration;
				if (t < Math.max(r - l.maxFragLookUpTolerance, i - c)) {
					var h = this.liveSyncPosition = this.computeLivePosition(r, e);
					t = h,
					u && !u.paused && u.readyState && u.duration > h && h > u.currentTime && (d.b.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), u.currentTime = h),
					this.nextLoadPosition = h
				}
				if (e.PTSKnown && t > i && u && u.readyState) return null;
				if (this.startFragRequested && !e.PTSKnown) {
					if (a) if (e.hasProgramDateTime) d.b.log("live playlist, switching playlist, load frag with same PDT: " + a.programDateTime),
					o = le(n, a.endProgramDateTime, l.maxFragLookUpTolerance);
					else {
						var f = a.sn + 1;
						if (f >= e.startSN && f <= e.endSN) {
							var g = n[f - e.startSN];
							a.cc === g.cc && (o = g, d.b.log("live playlist, switching playlist, load frag with next SN: " + o.sn))
						}
						o || (o = j.search(n, (function(e) {
							return a.cc - e.cc
						}))) && d.b.log("live playlist, switching playlist, load frag with same CC: " + o.sn)
					}
					o || (o = n[Math.min(s - 1, Math.round(s / 2))], d.b.log("live playlist, switching playlist, unknown, load middle frag : " + o.sn))
				}
				return o
			},
			f._findFragment = function(e, t, r, i, a, n, s) {
				var o, l = this.hls.config;
				a < n ? o = ue(t, i, a, a > n - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : o = i[r - 1];
				if (o) {
					var u = o.sn - s.startSN,
					c = t && o.level === t.level,
					h = i[u - 1],
					f = i[u + 1];
					if (t && o.sn === t.sn) if (c && !o.backtracked) if (o.sn < s.endSN) {
						var g = t.deltaPTS;
						g && g > l.maxBufferHole && t.dropped && u ? (o = h, d.b.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (o = f, d.b.log("Re-loading fragment with SN: " + o.sn))
					} else o = null;
					else o.backtracked && (f && f.backtracked ? (d.b.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn), o = f) : (d.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), o.dropped = 0, h ? (o = h).backtracked = !0 : u && (o = null)))
				}
				return o
			},
			f._loadKey = function(e) {
				this.state = be,
				this.hls.trigger(u.a.KEY_LOADING, {
					frag: e
				})
			},
			f._loadFragment = function(e) {
				var t = this.fragmentTracker.getState(e);
				this.fragCurrent = e,
				"initSegment" !== e.sn && (this.startFragRequested = !0),
				Object(l.a)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
				e.backtracked || t === U || t === B ? (e.autoLevel = this.hls.autoLevelEnabled, e.bitrateTest = this.bitrateTest, this.hls.trigger(u.a.FRAG_LOADING, {
					frag: e
				}), this.demuxer || (this.demuxer = new J(this.hls, "main")), this.state = Te) : t === N && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
			},
			f.getBufferedFrag = function(e) {
				return this.fragmentTracker.getBufferedFrag(e, n.MAIN)
			},
			f.followingBufferedFrag = function(e) {
				return e ? this.getBufferedFrag(e.endPTS + .5) : null
			},
			f._checkFragmentChanged = function() {
				var e, t, r = this.media;
				if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), H.isBuffered(r, t) ? e = this.getBufferedFrag(t) : H.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
					var i = e;
					if (i !== this.fragPlaying) {
						this.hls.trigger(u.a.FRAG_CHANGED, {
							frag: i
						});
						var a = i.level;
						this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(u.a.LEVEL_SWITCHED, {
							level: a
						}),
						this.fragPlaying = i
					}
				}
			},
			f.immediateLevelSwitch = function() {
				if (d.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
					this.immediateSwitch = !0;
					var e, t = this.media;
					t ? (e = t.paused, t.pause()) : e = !0,
					this.previouslyPaused = e
				}
				var r = this.fragCurrent;
				r && r.loader && r.loader.abort(),
				this.fragCurrent = null,
				this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
			},
			f.immediateLevelSwitchEnd = function() {
				var e = this.media;
				e && e.buffered.length && (this.immediateSwitch = !1, H.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
			},
			f.nextLevelSwitch = function() {
				var e = this.media;
				if (e && e.readyState) {
					var t, r, i;
					if ((r = this.getBufferedFrag(e.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;
					else {
						var a = this.hls.nextLoadLevel,
						n = this.levels[a],
						s = this.fragLastKbps;
						t = s && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * s) + 1 : 0
					}
					if ((i = this.getBufferedFrag(e.currentTime + t)) && (i = this.followingBufferedFrag(i))) {
						var o = this.fragCurrent;
						o && o.loader && o.loader.abort(),
						this.fragCurrent = null,
						this.flushMainBuffer(i.maxStartPTS, Number.POSITIVE_INFINITY)
					}
				}
			},
			f.flushMainBuffer = function(e, t) {
				this.state = Ae;
				var r = {
					startOffset: e,
					endOffset: t
				};
				this.altAudio && (r.type = "video"),
				this.hls.trigger(u.a.BUFFER_FLUSHING, r)
			},
			f.onMediaAttached = function(e) {
				var t = this.media = this.mediaBuffer = e.media;
				this.onvseeking = this.onMediaSeeking.bind(this),
				this.onvseeked = this.onMediaSeeked.bind(this),
				this.onvended = this.onMediaEnded.bind(this),
				t.addEventListener("seeking", this.onvseeking),
				t.addEventListener("seeked", this.onvseeked),
				t.addEventListener("ended", this.onvended);
				var r = this.config;
				this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition),
				this.gapController = new he(r, t, this.fragmentTracker, this.hls)
			},
			f.onMediaDetaching = function() {
				var e = this.media;
				e && e.ended && (d.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
				var t = this.levels;
				t && t.forEach((function(e) {
					e.details && e.details.fragments.forEach((function(e) {
						e.backtracked = void 0
					}))
				})),
				e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
				this.fragmentTracker.removeAllFragments(),
				this.media = this.mediaBuffer = null,
				this.loadedmetadata = !1,
				this.stopLoad()
			},
			f.onMediaSeeked = function() {
				var e = this.media,
				t = e ? e.currentTime: void 0;
				Object(l.a)(t) && d.b.log("media seeked to " + t.toFixed(3)),
				this.tick()
			},
			f.onManifestLoading = function() {
				d.b.log("trigger BUFFER_RESET"),
				this.hls.trigger(u.a.BUFFER_RESET),
				this.fragmentTracker.removeAllFragments(),
				this.stalled = !1,
				this.startPosition = this.lastCurrentTime = 0
			},
			f.onManifestParsed = function(e) {
				var t, r = !1,
				i = !1;
				e.levels.forEach((function(e) { (t = e.audioCodec) && ( - 1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (i = !0))
				})),
				this.audioCodecSwitch = r && i,
				this.audioCodecSwitch && d.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
				this.altAudio = e.altAudio,
				this.levels = e.levels,
				this.startFragRequested = !1;
				var a = this.config; (a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition)
			},
			f.onLevelLoaded = function(e) {
				var t = e.details,
				r = e.level,
				i = this.levels[this.levelLastLoaded],
				a = this.levels[r],
				n = t.totalduration,
				s = 0;
				if (d.b.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + n), t.live) {
					var o = a.details;
					o && t.fragments.length > 0 ? (re(o, t), s = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(s, o), t.PTSKnown && Object(l.a)(s) ? d.b.log("live playlist sliding:" + s.toFixed(3)) : (d.b.log("live playlist - outdated PTS, unknown sliding"), oe(this.fragPrevious, i, t))) : (d.b.log("live playlist - first load, unknown sliding"), t.PTSKnown = !1, oe(this.fragPrevious, i, t))
				} else t.PTSKnown = !1;
				if (a.details = t, this.levelLastLoaded = r, this.hls.trigger(u.a.LEVEL_UPDATED, {
					details: t,
					level: r
				}), !1 === this.startFragRequested) {
					if ( - 1 === this.startPosition || -1 === this.lastCurrentTime) {
						var c = t.startTimeOffset;
						Object(l.a)(c) ? (c < 0 && (d.b.log("negative start time offset " + c + ", count from end of last fragment"), c = s + n + c), d.b.log("start time offset found in playlist, adjust startPosition to " + c), this.startPosition = c) : t.live ? (this.startPosition = this.computeLivePosition(s, t), d.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
						this.lastCurrentTime = this.startPosition
					}
					this.nextLoadPosition = this.startPosition
				}
				this.state === De && (this.state = me),
				this.tick()
			},
			f.onKeyLoaded = function() {
				this.state === be && (this.state = me, this.tick())
			},
			f.onFragLoaded = function(e) {
				var t = this.fragCurrent,
				r = this.hls,
				i = this.levels,
				a = this.media,
				n = e.frag;
				if (this.state === Te && t && "main" === n.type && n.level === t.level && n.sn === t.sn) {
					var s = e.stats,
					o = i[t.level],
					l = o.details;
					if (this.bitrateTest = !1, this.stats = s, d.b.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level), n.bitrateTest && r.nextLoadLevel) this.state = me,
					this.startFragRequested = !1,
					s.tparsed = s.tbuffered = window.performance.now(),
					r.trigger(u.a.FRAG_BUFFERED, {
						stats: s,
						frag: t,
						id: "main"
					}),
					this.tick();
					else if ("initSegment" === n.sn) this.state = me,
					s.tparsed = s.tbuffered = window.performance.now(),
					l.initSegment.data = e.payload,
					r.trigger(u.a.FRAG_BUFFERED, {
						stats: s,
						frag: t,
						id: "main"
					}),
					this.tick();
					else {
						d.b.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc),
						this.state = _e,
						this.pendingBuffering = !0,
						this.appended = !1,
						n.bitrateTest && (n.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
							frag: n
						}));
						var c = !(a && a.seeking) && (l.PTSKnown || !l.live),
						h = l.initSegment ? l.initSegment.data: [],
						f = this._getAudioCodec(o); (this.demuxer = this.demuxer || new J(this.hls, "main")).push(e.payload, h, f, o.videoCodec, t, l.totalduration, c)
					}
				}
				this.fragLoadError = 0
			},
			f.onFragParsingInitSegment = function(e) {
				var t = this.fragCurrent,
				r = e.frag;
				if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e) {
					var i, a, n = e.tracks;
					if (n.audio && this.altAudio && delete n.audio, a = n.audio) {
						var s = this.levels[this.level].audioCodec,
						o = navigator.userAgent.toLowerCase();
						s && this.audioCodecSwap && (d.b.log("swapping playlist audio codec"), s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5"),
						this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === o.indexOf("firefox") && (s = "mp4a.40.5"),
						-1 !== o.indexOf("android") && "audio/mpeg" !== a.container && (s = "mp4a.40.2", d.b.log("Android: force audio codec to " + s)),
						a.levelCodec = s,
						a.id = e.id
					}
					for (i in (a = n.video) && (a.levelCodec = this.levels[this.level].videoCodec, a.id = e.id), this.hls.trigger(u.a.BUFFER_CODECS, n), n) {
						a = n[i],
						d.b.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
						var l = a.initSegment;
						l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(u.a.BUFFER_APPENDING, {
							type: i,
							data: l,
							parent: "main",
							content: "initSegment"
						}))
					}
					this.tick()
				}
			},
			f.onFragParsingData = function(e) {
				var t = this,
				r = this.fragCurrent,
				i = e.frag;
				if (r && "main" === e.id && i.sn === r.sn && i.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === _e) {
					var a = this.levels[this.level],
					n = r;
					if (Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), !0 === e.hasAudio && n.addElementaryStream(p.AUDIO), !0 === e.hasVideo && n.addElementaryStream(p.VIDEO), d.b.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type) if (n.dropped = e.dropped, n.dropped) if (n.backtracked) d.b.warn("Already backtracked on this fragment, appending with the gap", n.sn);
					else {
						var s = a.details;
						if (!s || n.sn !== s.startSN) return d.b.warn("missing video frame(s), backtracking fragment", n.sn),
						this.fragmentTracker.removeFragment(n),
						n.backtracked = !0,
						this.nextLoadPosition = e.startPTS,
						this.state = me,
						this.fragPrevious = n,
						void this.tick();
						d.b.warn("missing video frame(s) on first frag, appending with gap", n.sn)
					} else n.backtracked = !1;
					var o = te(a.details, n, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
					c = this.hls;
					c.trigger(u.a.LEVEL_PTS_UPDATED, {
						details: a.details,
						level: this.level,
						drift: o,
						type: e.type,
						start: e.startPTS,
						end: e.endPTS
					}),
					[e.data1, e.data2].forEach((function(r) {
						r && r.length && t.state === _e && (t.appended = !0, t.pendingBuffering = !0, c.trigger(u.a.BUFFER_APPENDING, {
							type: e.type,
							data: r,
							parent: "main",
							content: "data"
						}))
					})),
					this.tick()
				}
			},
			f.onFragParsed = function(e) {
				var t = this.fragCurrent,
				r = e.frag;
				t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e && (this.stats.tparsed = window.performance.now(), this.state = Re, this._checkAppendedParsed())
			},
			f.onAudioTrackSwitching = function(e) {
				var t = !!e.url,
				r = e.id;
				if (!t) {
					if (this.mediaBuffer !== this.media) {
						d.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),
						this.mediaBuffer = this.media;
						var i = this.fragCurrent;
						i.loader && (d.b.log("switching to main audio track, cancel main fragment load"), i.loader.abort()),
						this.fragCurrent = null,
						this.fragPrevious = null,
						this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
						this.state = me
					}
					var a = this.hls;
					a.trigger(u.a.BUFFER_FLUSHING, {
						startOffset: 0,
						endOffset: Number.POSITIVE_INFINITY,
						type: "audio"
					}),
					a.trigger(u.a.AUDIO_TRACK_SWITCHED, {
						id: r
					}),
					this.altAudio = !1
				}
			},
			f.onAudioTrackSwitched = function(e) {
				var t = e.id,
				r = !!this.hls.audioTracks[t].url;
				if (r) {
					var i = this.videoBuffer;
					i && this.mediaBuffer !== i && (d.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
				}
				this.altAudio = r,
				this.tick()
			},
			f.onBufferCreated = function(e) {
				var t, r, i = e.tracks,
				a = !1;
				for (var n in i) {
					var s = i[n];
					"main" === s.id ? (r = n, t = s, "video" === n && (this.videoBuffer = i[n].buffer)) : a = !0
				}
				a && t ? (d.b.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
			},
			f.onBufferAppended = function(e) {
				if ("main" === e.parent) {
					var t = this.state;
					t !== _e && t !== Re || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
				}
			},
			f._checkAppendedParsed = function() {
				if (! (this.state !== Re || this.appended && this.pendingBuffering)) {
					var e = this.fragCurrent;
					if (e) {
						var t = this.mediaBuffer ? this.mediaBuffer: this.media;
						d.b.log("main buffered : " + ne.toString(t.buffered)),
						this.fragPrevious = e;
						var r = this.stats;
						r.tbuffered = window.performance.now(),
						this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)),
						this.hls.trigger(u.a.FRAG_BUFFERED, {
							stats: r,
							frag: e,
							id: "main"
						}),
						this.state = me
					}
					this.tick()
				}
			},
			f.onError = function(e) {
				var t = e.frag || this.fragCurrent;
				if (!t || "main" === t.type) {
					var r = !!this.media && H.isBuffered(this.media, this.media.currentTime) && H.isBuffered(this.media, this.media.currentTime + .5);
					switch (e.details) {
					case o.a.FRAG_LOAD_ERROR:
					case o.a.FRAG_LOAD_TIMEOUT:
					case o.a.KEY_LOAD_ERROR:
					case o.a.KEY_LOAD_TIMEOUT:
						if (!e.fatal) if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
							var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
							d.b.warn("mediaController: frag loading failed, retry in " + i + " ms"),
							this.retryDate = window.performance.now() + i,
							this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
							this.fragLoadError++,
							this.state = Ee
						} else d.b.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."),
						e.fatal = !0,
						this.state = we;
						break;
					case o.a.LEVEL_LOAD_ERROR:
					case o.a.LEVEL_LOAD_TIMEOUT:
						this.state !== we && (e.fatal ? (this.state = we, d.b.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== De || (this.state = me));
						break;
					case o.a.BUFFER_FULL_ERROR:
						"main" !== e.parent || this.state !== _e && this.state !== Re || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = me) : (d.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
					}
				}
			},
			f._reduceMaxBufferLength = function(e) {
				var t = this.config;
				return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, d.b.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
			},
			f._checkBuffer = function() {
				var e = this.media;
				if (e && 0 !== e.readyState) {
					var t = (this.mediaBuffer ? this.mediaBuffer: e).buffered; ! this.loadedmetadata && t.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
				}
			},
			f.onFragLoadEmergencyAborted = function() {
				this.state = me,
				this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
				this.tick()
			},
			f.onBufferFlushed = function() {
				var e = this.mediaBuffer ? this.mediaBuffer: this.media;
				e && this.fragmentTracker.detectEvictedFragments(p.VIDEO, e.buffered),
				this.state = me,
				this.fragPrevious = null
			},
			f.onLevelsUpdated = function(e) {
				this.levels = e.levels
			},
			f.swapAudioCodec = function() {
				this.audioCodecSwap = !this.audioCodecSwap
			},
			f._seekToStartPos = function() {
				var e = this.media,
				t = e.currentTime,
				r = e.seeking ? t: this.startPosition;
				t !== r && r >= 0 && (d.b.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
			},
			f._getAudioCodec = function(e) {
				var t = this.config.defaultAudioCodec || e.audioCodec;
				return this.audioCodecSwap && (d.b.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5")),
				t
			},
			s = a,
			(c = [{
				key: "state",
				set: function(e) {
					if (this.state !== e) {
						var t = this.state;
						this._state = e,
						d.b.log("main stream-controller: " + t + "->" + e),
						this.hls.trigger(u.a.STREAM_STATE_TRANSITION, {
							previousState: t,
							nextState: e
						})
					}
				},
				get: function() {
					return this._state
				}
			},
			{
				key: "currentLevel",
				get: function() {
					var e = this.media;
					if (e) {
						var t = this.getBufferedFrag(e.currentTime);
						if (t) return t.level
					}
					return - 1
				}
			},
			{
				key: "nextBufferedFrag",
				get: function() {
					var e = this.media;
					return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
				}
			},
			{
				key: "nextLevel",
				get: function() {
					var e = this.nextBufferedFrag;
					return e ? e.level: -1
				}
			},
			{
				key: "liveSyncPosition",
				get: function() {
					return this._liveSyncPosition
				},
				set: function(e) {
					this._liveSyncPosition = e
				}
			}]) && Ce(s.prototype, c),
			h && Ce(s, h),
			a
		} (Oe);
		function Pe(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		var Me = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.MANIFEST_LOADED, u.a.LEVEL_LOADED, u.a.AUDIO_TRACK_SWITCHED, u.a.FRAG_LOADED, u.a.ERROR) || this).canload = !1,
				r.currentLevelIndex = null,
				r.manualLevelIndex = -1,
				r.timer = null,
				Ie = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
				r
			}
			var n, s, l, c = a.prototype;
			return c.onHandlerDestroying = function() {
				this.clearTimer(),
				this.manualLevelIndex = -1
			},
			c.clearTimer = function() {
				null !== this.timer && (clearTimeout(this.timer), this.timer = null)
			},
			c.startLoad = function() {
				var e = this._levels;
				this.canload = !0,
				this.levelRetryCount = 0,
				e && e.forEach((function(e) {
					e.loadError = 0;
					var t = e.details;
					t && t.live && (e.details = void 0)
				})),
				null !== this.timer && this.loadLevel()
			},
			c.stopLoad = function() {
				this.canload = !1
			},
			c.onManifestLoaded = function(e) {
				var t, r = [],
				i = [],
				a = {},
				n = null,
				s = !1,
				l = !1;
				if (e.levels.forEach((function(e) {
					var t = e.attrs;
					e.loadError = 0,
					e.fragmentError = !1,
					s = s || !!e.videoCodec,
					l = l || !!e.audioCodec,
					Ie && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0),
					(n = a[e.bitrate]) ? n.url.push(e.url) : (e.url = [e.url], e.urlId = 0, a[e.bitrate] = e, r.push(e)),
					t && (t.AUDIO && (l = !0, Z(n || e, "audio", t.AUDIO)), t.SUBTITLES && Z(n || e, "text", t.SUBTITLES))
				})), s && l && (r = r.filter((function(e) {
					return !! e.videoCodec
				}))), r = r.filter((function(e) {
					var t = e.audioCodec,
					r = e.videoCodec;
					return (!t || A(t, "audio")) && (!r || A(r, "video"))
				})), e.audioTracks && (i = e.audioTracks.filter((function(e) {
					return ! e.audioCodec || A(e.audioCodec, "audio")
				}))).forEach((function(e, t) {
					e.id = t
				})), r.length > 0) {
					t = r[0].bitrate,
					r.sort((function(e, t) {
						return e.bitrate - t.bitrate
					})),
					this._levels = r;
					for (var c = 0; c < r.length; c++) if (r[c].bitrate === t) {
						this._firstLevel = c,
						d.b.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
						break
					}
					this.hls.trigger(u.a.MANIFEST_PARSED, {
						levels: r,
						audioTracks: i,
						firstLevel: this._firstLevel,
						stats: e.stats,
						audio: l,
						video: s,
						altAudio: i.some((function(e) {
							return !! e.url
						}))
					})
				} else this.hls.trigger(u.a.ERROR, {
					type: o.b.MEDIA_ERROR,
					details: o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
					fatal: !0,
					url: this.hls.url,
					reason: "no level with compatible codecs found in manifest"
				})
			},
			c.setLevelInternal = function(e) {
				var t = this._levels,
				r = this.hls;
				if (e >= 0 && e < t.length) {
					if (this.clearTimer(), this.currentLevelIndex !== e) {
						d.b.log("switching to level " + e),
						this.currentLevelIndex = e;
						var i = t[e];
						i.level = e,
						r.trigger(u.a.LEVEL_SWITCHING, i)
					}
					var a = t[e],
					n = a.details;
					if (!n || n.live) {
						var s = a.urlId;
						r.trigger(u.a.LEVEL_LOADING, {
							url: a.url[s],
							level: e,
							id: s
						})
					}
				} else r.trigger(u.a.ERROR, {
					type: o.b.OTHER_ERROR,
					details: o.a.LEVEL_SWITCH_ERROR,
					level: e,
					fatal: !1,
					reason: "invalid level idx"
				})
			},
			c.onError = function(e) {
				if (e.fatal) e.type === o.b.NETWORK_ERROR && this.clearTimer();
				else {
					var t, r = !1,
					i = !1;
					switch (e.details) {
					case o.a.FRAG_LOAD_ERROR:
					case o.a.FRAG_LOAD_TIMEOUT:
					case o.a.KEY_LOAD_ERROR:
					case o.a.KEY_LOAD_TIMEOUT:
						t = e.frag.level,
						i = !0;
						break;
					case o.a.LEVEL_LOAD_ERROR:
					case o.a.LEVEL_LOAD_TIMEOUT:
						t = e.context.level,
						r = !0;
						break;
					case o.a.REMUX_ALLOC_ERROR:
						t = e.level,
						r = !0
					}
					void 0 !== t && this.recoverLevel(e, t, r, i)
				}
			},
			c.recoverLevel = function(e, t, r, i) {
				var a, n, s, o = this,
				l = this.hls.config,
				u = e.details,
				c = this._levels[t];
				if (c.loadError++, c.fragmentError = i, r) {
					if (! (this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return d.b.error("level controller, cannot recover from " + u + " error"),
					this.currentLevelIndex = null,
					this.clearTimer(),
					void(e.fatal = !0);
					n = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout),
					this.timer = setTimeout((function() {
						return o.loadLevel()
					}), n),
					e.levelRetry = !0,
					this.levelRetryCount++,
					d.b.warn("level controller, " + u + ", retry in " + n + " ms, current retry count is " + this.levelRetryCount)
				} (r || i) && ((a = c.url.length) > 1 && c.loadError < a ? (c.urlId = (c.urlId + 1) % a, c.details = void 0, d.b.warn("level controller, " + u + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (s = 0 === t ? this._levels.length - 1 : t - 1, d.b.warn("level controller, " + u + ": switch to " + s), this.hls.nextAutoLevel = this.currentLevelIndex = s) : i && (d.b.warn("level controller, " + u + ": reload a fragment"), this.currentLevelIndex = null))
			},
			c.onFragLoaded = function(e) {
				var t = e.frag;
				if (void 0 !== t && "main" === t.type) {
					var r = this._levels[t.level];
					void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
				}
			},
			c.onLevelLoaded = function(e) {
				var t = this,
				r = e.level,
				i = e.details;
				if (r === this.currentLevelIndex) {
					var a = this._levels[r];
					if (a.fragmentError || (a.loadError = 0, this.levelRetryCount = 0), i.live) {
						var n = ae(a.details, i, e.stats.trequest);
						d.b.log("live playlist, reload in " + Math.round(n) + " ms"),
						this.timer = setTimeout((function() {
							return t.loadLevel()
						}), n)
					} else this.clearTimer()
				}
			},
			c.onAudioTrackSwitched = function(e) {
				var t = this.hls.audioTracks[e.id].groupId,
				r = this.hls.levels[this.currentLevelIndex];
				if (r && r.audioGroupIds) {
					for (var i = -1,
					a = 0; a < r.audioGroupIds.length; a++) if (r.audioGroupIds[a] === t) {
						i = a;
						break
					}
					i !== r.urlId && (r.urlId = i, this.startLoad())
				}
			},
			c.loadLevel = function() {
				if (d.b.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
					var e = this._levels[this.currentLevelIndex];
					if ("object" == typeof e && e.url.length > 0) {
						var t = this.currentLevelIndex,
						r = e.urlId,
						i = e.url[r];
						d.b.log("Attempt loading level index " + t + " with URL-id " + r),
						this.hls.trigger(u.a.LEVEL_LOADING, {
							url: i,
							level: t,
							id: r
						})
					}
				}
			},
			c.removeLevel = function(e, t) {
				var r = this.levels.filter((function(r, i) {
					return i !== e || r.url.length > 1 && void 0 !== t && (r.url = r.url.filter((function(e, r) {
						return r !== t
					})), r.urlId = 0, !0)
				})).map((function(e, t) {
					var r = e.details;
					return r && r.fragments && r.fragments.forEach((function(e) {
						e.level = t
					})),
					e
				}));
				this._levels = r,
				this.hls.trigger(u.a.LEVELS_UPDATED, {
					levels: r
				})
			},
			n = a,
			(s = [{
				key: "levels",
				get: function() {
					return this._levels
				}
			},
			{
				key: "level",
				get: function() {
					return this.currentLevelIndex
				},
				set: function(e) {
					var t = this._levels;
					t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
				}
			},
			{
				key: "manualLevel",
				get: function() {
					return this.manualLevelIndex
				},
				set: function(e) {
					this.manualLevelIndex = e,
					void 0 === this._startLevel && (this._startLevel = e),
					-1 !== e && (this.level = e)
				}
			},
			{
				key: "firstLevel",
				get: function() {
					return this._firstLevel
				},
				set: function(e) {
					this._firstLevel = e
				}
			},
			{
				key: "startLevel",
				get: function() {
					if (void 0 === this._startLevel) {
						var e = this.hls.config.startLevel;
						return void 0 !== e ? e: this._firstLevel
					}
					return this._startLevel
				},
				set: function(e) {
					this._startLevel = e
				}
			},
			{
				key: "nextLoadLevel",
				get: function() {
					return - 1 !== this.manualLevelIndex ? this.manualLevelIndex: this.hls.nextAutoLevel
				},
				set: function(e) {
					this.level = e,
					-1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
				}
			}]) && Pe(n.prototype, s),
			l && Pe(n, l),
			a
		} (h),
		Fe = r(4);
		function Ue(e, t) {
			var r;
			try {
				r = new Event("addtrack")
			} catch(e) { (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
			}
			r.track = e,
			t.dispatchEvent(r)
		}
		function Ne(e) {
			if (e && e.cues) for (; e.cues.length > 0;) e.removeCue(e.cues[0])
		}
		var Be = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHING, u.a.FRAG_PARSING_METADATA, u.a.LIVE_BACK_BUFFER_REACHED) || this).id3Track = void 0,
				r.media = void 0,
				r
			}
			var n = a.prototype;
			return n.destroy = function() {
				h.prototype.destroy.call(this)
			},
			n.onMediaAttached = function(e) {
				this.media = e.media,
				this.media
			},
			n.onMediaDetaching = function() {
				Ne(this.id3Track),
				this.id3Track = void 0,
				this.media = void 0
			},
			n.getID3Track = function(e) {
				for (var t = 0; t < e.length; t++) {
					var r = e[t];
					if ("metadata" === r.kind && "id3" === r.label) return Ue(r, this.media),
					r
				}
				return this.media.addTextTrack("metadata", "id3")
			},
			n.onFragParsingMetadata = function(e) {
				var t = e.frag,
				r = e.samples;
				this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
				for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue,
				a = 0; a < r.length; a++) {
					var n = Fe.a.getID3Frames(r[a].data);
					if (n) {
						var s = r[a].pts,
						o = a < r.length - 1 ? r[a + 1].pts: t.endPTS;
						s === o ? o += 1e-4: s > o && (d.b.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"), o = s + .25);
						for (var l = 0; l < n.length; l++) {
							var u = n[l];
							if (!Fe.a.isTimeStampFrame(u)) {
								var c = new i(s, o, "");
								c.value = u,
								this.id3Track.addCue(c)
							}
						}
					}
				}
			},
			n.onLiveBackBufferReached = function(e) {
				var t = e.bufferEnd,
				r = this.id3Track;
				if (r && r.cues && r.cues.length) {
					var i = function(e, t) {
						if (t < e[0].endTime) return e[0];
						if (t > e[e.length - 1].endTime) return e[e.length - 1];
						for (var r = 0,
						i = e.length - 1; r <= i;) {
							var a = Math.floor((i + r) / 2);
							if (t < e[a].endTime) i = a - 1;
							else {
								if (! (t > e[a].endTime)) return e[a];
								r = a + 1
							}
						}
						return e[r].endTime - t < t - e[i].endTime ? e[r] : e[i]
					} (r.cues, t);
					if (i) for (; r.cues[0] !== i;) r.removeCue(r.cues[0])
				}
			},
			a
		} (h);
		var Ge = function() {
			function e(e) {
				this.alpha_ = void 0,
				this.estimate_ = void 0,
				this.totalWeight_ = void 0,
				this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0,
				this.estimate_ = 0,
				this.totalWeight_ = 0
			}
			var t = e.prototype;
			return t.sample = function(e, t) {
				var r = Math.pow(this.alpha_, e);
				this.estimate_ = t * (1 - r) + r * this.estimate_,
				this.totalWeight_ += e
			},
			t.getTotalWeight = function() {
				return this.totalWeight_
			},
			t.getEstimate = function() {
				if (this.alpha_) {
					var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
					return this.estimate_ / e
				}
				return this.estimate_
			},
			e
		} (),
		Ke = function() {
			function e(e, t, r, i) {
				this.hls = void 0,
				this.defaultEstimate_ = void 0,
				this.minWeight_ = void 0,
				this.minDelayMs_ = void 0,
				this.slow_ = void 0,
				this.fast_ = void 0,
				this.hls = e,
				this.defaultEstimate_ = i,
				this.minWeight_ = .001,
				this.minDelayMs_ = 50,
				this.slow_ = new Ge(t),
				this.fast_ = new Ge(r)
			}
			var t = e.prototype;
			return t.sample = function(e, t) {
				var r = (e = Math.max(e, this.minDelayMs_)) / 1e3,
				i = 8 * t / r;
				this.fast_.sample(r, i),
				this.slow_.sample(r, i)
			},
			t.canEstimate = function() {
				var e = this.fast_;
				return e && e.getTotalWeight() >= this.minWeight_
			},
			t.getEstimate = function() {
				return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
			},
			t.destroy = function() {},
			e
		} ();
		function je(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		function He(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
		var Ve = window.performance,
		Ye = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.FRAG_LOADING, u.a.FRAG_LOADED, u.a.FRAG_BUFFERED, u.a.ERROR) || this).lastLoadedFragLevel = 0,
				r._nextAutoLevel = -1,
				r.hls = t,
				r.timer = null,
				r._bwEstimator = null,
				r.onCheck = r._abandonRulesCheck.bind(He(r)),
				r
			}
			var n, s, c, f = a.prototype;
			return f.destroy = function() {
				this.clearTimer(),
				h.prototype.destroy.call(this)
			},
			f.onFragLoading = function(e) {
				var t = e.frag;
				if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
					var r, i, a = this.hls,
					n = a.config,
					s = t.level;
					a.levels[s].details.live ? (r = n.abrEwmaFastLive, i = n.abrEwmaSlowLive) : (r = n.abrEwmaFastVoD, i = n.abrEwmaSlowVoD),
					this._bwEstimator = new Ke(a, i, r, n.abrEwmaDefaultEstimate)
				}
			},
			f._abandonRulesCheck = function() {
				var e = this.hls,
				t = e.media,
				r = this.fragCurrent;
				if (r) {
					var i = r.loader,
					a = e.minAutoLevel;
					if (!i || i.stats && i.stats.aborted) return d.b.warn("frag loader destroy or aborted, disarm abandonRules"),
					this.clearTimer(),
					void(this._nextAutoLevel = -1);
					var n = i.stats;
					if (t && n && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
						var s = Ve.now() - n.trequest,
						o = Math.abs(t.playbackRate);
						if (s > 500 * r.duration / o) {
							var l = e.levels,
							c = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / s),
							h = l[r.level],
							f = h.realBitrate ? Math.max(h.realBitrate, h.bitrate) : h.bitrate,
							g = n.total ? n.total: Math.max(n.loaded, Math.round(r.duration * f / 8)),
							p = t.currentTime,
							v = (g - n.loaded) / c,
							m = (H.bufferInfo(t, p, e.config.maxBufferHole).end - p) / o;
							if (m < 2 * r.duration / o && v > m) {
								var y;
								for (y = r.level - 1; y > a; y--) {
									var b = l[y].realBitrate ? Math.max(l[y].realBitrate, l[y].bitrate) : l[y].bitrate;
									if (r.duration * b / (6.4 * c) < m) break
								}
								void 0 < v && (d.b.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + (void 0).toFixed(1) + "<" + v.toFixed(1) + ":" + m.toFixed(1)), e.nextLoadLevel = y, this._bwEstimator.sample(s, n.loaded), i.abort(), this.clearTimer(), e.trigger(u.a.FRAG_LOAD_EMERGENCY_ABORTED, {
									frag: r,
									stats: n
								}))
							}
						}
					}
				}
			},
			f.onFragLoaded = function(e) {
				var t = e.frag;
				if ("main" === t.type && Object(l.a)(t.sn)) {
					if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
						var r = this.hls.levels[t.level],
						i = (r.loaded ? r.loaded.bytes: 0) + e.stats.loaded,
						a = (r.loaded ? r.loaded.duration: 0) + e.frag.duration;
						r.loaded = {
							bytes: i,
							duration: a
						},
						r.realBitrate = Math.round(8 * i / a)
					}
					if (e.frag.bitrateTest) {
						var n = e.stats;
						n.tparsed = n.tbuffered = n.tload,
						this.onFragBuffered(e)
					}
				}
			},
			f.onFragBuffered = function(e) {
				var t = e.stats,
				r = e.frag;
				if (!0 !== t.aborted && "main" === r.type && Object(l.a)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
					var i = t.tparsed - t.trequest;
					d.b.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))),
					this._bwEstimator.sample(i, t.loaded),
					t.bwEstimate = this._bwEstimator.getEstimate(),
					r.bitrateTest ? this.bitrateTestDelay = i / 1e3: this.bitrateTestDelay = 0
				}
			},
			f.onError = function(e) {
				switch (e.details) {
				case o.a.FRAG_LOAD_ERROR:
				case o.a.FRAG_LOAD_TIMEOUT:
					this.clearTimer()
				}
			},
			f.clearTimer = function() {
				clearInterval(this.timer),
				this.timer = null
			},
			f._findBestLevel = function(e, t, r, i, a, n, s, o, l) {
				for (var u = a; u >= i; u--) {
					var c = l[u];
					if (c) {
						var h = c.details,
						f = h ? h.totalduration / h.fragments.length: t,
						g = !!h && h.live,
						p = void 0;
						p = u <= e ? s * r: o * r;
						var v = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
						m = v * f / p;
						if (d.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(p) + "/" + v + "/" + f + "/" + n + "/" + m), p > v && (!m || g && !this.bitrateTestDelay || m < n)) return u
					}
				}
				return - 1
			},
			n = a,
			(s = [{
				key: "nextAutoLevel",
				get: function() {
					var e = this._nextAutoLevel,
					t = this._bwEstimator;
					if (! ( - 1 === e || t && t.canEstimate())) return e;
					var r = this._nextABRAutoLevel;
					return - 1 !== e && (r = Math.min(e, r)),
					r
				},
				set: function(e) {
					this._nextAutoLevel = e
				}
			},
			{
				key: "_nextABRAutoLevel",
				get: function() {
					var e = this.hls,
					t = e.maxAutoLevel,
					r = e.levels,
					i = e.config,
					a = e.minAutoLevel,
					n = e.media,
					s = this.lastLoadedFragLevel,
					o = this.fragCurrent ? this.fragCurrent.duration: 0,
					l = n ? n.currentTime: 0,
					u = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1,
					c = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
					h = (H.bufferInfo(n, l, i.maxBufferHole).end - l) / u,
					f = this._findBestLevel(s, o, c, a, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
					if (f >= 0) return f;
					d.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
					var g = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay,
					p = i.abrBandWidthFactor,
					v = i.abrBandWidthUpFactor;
					if (0 === h) {
						var m = this.bitrateTestDelay;
						m && (g = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - m, d.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), p = v = 1)
					}
					return f = this._findBestLevel(s, o, c, a, t, h + g, p, v, r),
					Math.max(f, 0)
				}
			}]) && je(n.prototype, s),
			c && je(n, c),
			a
		} (h);
		var We = q(),
		qe = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.MEDIA_ATTACHING, u.a.MEDIA_DETACHING, u.a.MANIFEST_PARSED, u.a.BUFFER_RESET, u.a.BUFFER_APPENDING, u.a.BUFFER_CODECS, u.a.BUFFER_EOS, u.a.BUFFER_FLUSHING, u.a.LEVEL_PTS_UPDATED, u.a.LEVEL_UPDATED) || this)._msDuration = null,
				r._levelDuration = null,
				r._levelTargetDuration = 10,
				r._live = null,
				r._objectUrl = null,
				r._needsFlush = !1,
				r._needsEos = !1,
				r.config = void 0,
				r.audioTimestampOffset = void 0,
				r.bufferCodecEventsExpected = 0,
				r._bufferCodecEventsTotal = 0,
				r.media = null,
				r.mediaSource = null,
				r.segments = [],
				r.parent = void 0,
				r.appending = !1,
				r.appended = 0,
				r.appendError = 0,
				r.flushBufferCounter = 0,
				r.tracks = {},
				r.pendingTracks = {},
				r.sourceBuffer = {},
				r.flushRange = [],
				r._onMediaSourceOpen = function() {
					d.b.log("media source opened"),
					r.hls.trigger(u.a.MEDIA_ATTACHED, {
						media: r.media
					});
					var e = r.mediaSource;
					e && e.removeEventListener("sourceopen", r._onMediaSourceOpen),
					r.checkPendingTracks()
				},
				r._onMediaSourceClose = function() {
					d.b.log("media source closed")
				},
				r._onMediaSourceEnded = function() {
					d.b.log("media source ended")
				},
				r._onSBUpdateEnd = function() {
					if (r.audioTimestampOffset && r.sourceBuffer.audio) {
						var e = r.sourceBuffer.audio;
						d.b.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + r.audioTimestampOffset),
						e.timestampOffset = r.audioTimestampOffset,
						delete r.audioTimestampOffset
					}
					r._needsFlush && r.doFlush(),
					r._needsEos && r.checkEos(),
					r.appending = !1;
					var t = r.parent,
					i = r.segments.reduce((function(e, r) {
						return r.parent === t ? e + 1 : e
					}), 0),
					a = {},
					n = r.sourceBuffer;
					for (var s in n) {
						var o = n[s];
						if (!o) throw Error("handling source buffer update end error: source buffer for " + s + " uninitilized and unable to update buffered TimeRanges.");
						a[s] = o.buffered
					}
					r.hls.trigger(u.a.BUFFER_APPENDED, {
						parent: t,
						pending: i,
						timeRanges: a
					}),
					r._needsFlush || r.doAppending(),
					r.updateMediaElementDuration(),
					0 === i && r.flushLiveBackBuffer()
				},
				r._onSBUpdateError = function(e) {
					d.b.error("sourceBuffer error:", e),
					r.hls.trigger(u.a.ERROR, {
						type: o.b.MEDIA_ERROR,
						details: o.a.BUFFER_APPENDING_ERROR,
						fatal: !1
					})
				},
				r.config = t.config,
				r
			}
			var n = a.prototype;
			return n.destroy = function() {
				h.prototype.destroy.call(this)
			},
			n.onLevelPtsUpdated = function(e) {
				var t = e.type,
				r = this.tracks.audio;
				if ("audio" === t && r && "audio/mpeg" === r.container) {
					var i = this.sourceBuffer.audio;
					if (!i) throw Error("Level PTS Updated and source buffer for audio uninitalized");
					if (Math.abs(i.timestampOffset - e.start) > .1) {
						var a = i.updating;
						try {
							i.abort()
						} catch(e) {
							d.b.warn("can not abort audio buffer: " + e)
						}
						a ? this.audioTimestampOffset = e.start: (d.b.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start), i.timestampOffset = e.start)
					}
				}
			},
			n.onManifestParsed = function(e) {
				this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = e.altAudio ? 2 : 1,
				d.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
			},
			n.onMediaAttaching = function(e) {
				var t = this.media = e.media;
				if (t && We) {
					var r = this.mediaSource = new We;
					r.addEventListener("sourceopen", this._onMediaSourceOpen),
					r.addEventListener("sourceended", this._onMediaSourceEnded),
					r.addEventListener("sourceclose", this._onMediaSourceClose),
					t.src = window.URL.createObjectURL(r),
					this._objectUrl = t.src
				}
			},
			n.onMediaDetaching = function() {
				d.b.log("media source detaching");
				var e = this.mediaSource;
				if (e) {
					if ("open" === e.readyState) try {
						e.endOfStream()
					} catch(e) {
						d.b.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
					}
					e.removeEventListener("sourceopen", this._onMediaSourceOpen),
					e.removeEventListener("sourceended", this._onMediaSourceEnded),
					e.removeEventListener("sourceclose", this._onMediaSourceClose),
					this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : d.b.warn("media.src was changed by a third party - skip cleanup")),
					this.mediaSource = null,
					this.media = null,
					this._objectUrl = null,
					this.bufferCodecEventsExpected = this._bufferCodecEventsTotal,
					this.pendingTracks = {},
					this.tracks = {},
					this.sourceBuffer = {},
					this.flushRange = [],
					this.segments = [],
					this.appended = 0
				}
				this.hls.trigger(u.a.MEDIA_DETACHED)
			},
			n.checkPendingTracks = function() {
				var e = this.bufferCodecEventsExpected,
				t = this.pendingTracks,
				r = Object.keys(t).length; (r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {},
				this.doAppending())
			},
			n.onBufferReset = function() {
				var e = this.sourceBuffer;
				for (var t in e) {
					var r = e[t];
					try {
						r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this._onSBUpdateEnd), r.removeEventListener("error", this._onSBUpdateError))
					} catch(e) {}
				}
				this.sourceBuffer = {},
				this.flushRange = [],
				this.segments = [],
				this.appended = 0
			},
			n.onBufferCodecs = function(e) {
				var t = this;
				Object.keys(this.sourceBuffer).length || (Object.keys(e).forEach((function(r) {
					t.pendingTracks[r] = e[r]
				})), this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
			},
			n.createSourceBuffers = function(e) {
				var t = this.sourceBuffer,
				r = this.mediaSource;
				if (!r) throw Error("createSourceBuffers called when mediaSource was null");
				for (var i in e) if (!t[i]) {
					var a = e[i];
					if (!a) throw Error("source buffer exists for track " + i + ", however track does not");
					var n = a.levelCodec || a.codec,
					s = a.container + ";codecs=" + n;
					d.b.log("creating sourceBuffer(" + s + ")");
					try {
						var l = t[i] = r.addSourceBuffer(s);
						l.addEventListener("updateend", this._onSBUpdateEnd),
						l.addEventListener("error", this._onSBUpdateError),
						this.tracks[i] = {
							buffer: l,
							codec: n,
							id: a.id,
							container: a.container,
							levelCodec: a.levelCodec
						}
					} catch(e) {
						d.b.error("error while trying to add sourceBuffer:" + e.message),
						this.hls.trigger(u.a.ERROR, {
							type: o.b.MEDIA_ERROR,
							details: o.a.BUFFER_ADD_CODEC_ERROR,
							fatal: !1,
							err: e,
							mimeType: s
						})
					}
				}
				this.hls.trigger(u.a.BUFFER_CREATED, {
					tracks: this.tracks
				})
			},
			n.onBufferAppending = function(e) {
				this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
			},
			n.onBufferEos = function(e) {
				for (var t in this.sourceBuffer) if (!e.type || e.type === t) {
					var r = this.sourceBuffer[t];
					r && !r.ended && (r.ended = !0, d.b.log(t + " sourceBuffer now EOS"))
				}
				this.checkEos()
			},
			n.checkEos = function() {
				var e = this.sourceBuffer,
				t = this.mediaSource;
				if (t && "open" === t.readyState) {
					for (var r in e) {
						var i = e[r];
						if (i) {
							if (!i.ended) return;
							if (i.updating) return void(this._needsEos = !0)
						}
					}
					d.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
					try {
						t.endOfStream()
					} catch(e) {
						d.b.warn("exception while calling mediaSource.endOfStream()")
					}
					this._needsEos = !1
				} else this._needsEos = !1
			},
			n.onBufferFlushing = function(e) {
				e.type ? this.flushRange.push({
					start: e.startOffset,
					end: e.endOffset,
					type: e.type
				}) : (this.flushRange.push({
					start: e.startOffset,
					end: e.endOffset,
					type: "video"
				}), this.flushRange.push({
					start: e.startOffset,
					end: e.endOffset,
					type: "audio"
				})),
				this.flushBufferCounter = 0,
				this.doFlush()
			},
			n.flushLiveBackBuffer = function() {
				if (this._live) {
					var e = this.config.liveBackBufferLength;
					if (isFinite(e) && !(e < 0)) if (this.media) for (var t = this.media.currentTime,
					r = this.sourceBuffer,
					i = Object.keys(r), a = t - Math.max(e, this._levelTargetDuration), n = i.length - 1; n >= 0; n--) {
						var s = i[n],
						o = r[s];
						if (o) {
							var l = o.buffered;
							l.length > 0 && a > l.start(0) && this.removeBufferRange(s, o, 0, a) && this.hls.trigger(u.a.LIVE_BACK_BUFFER_REACHED, {
								bufferEnd: a
							})
						}
					} else d.b.error("flushLiveBackBuffer called without attaching media")
				}
			},
			n.onLevelUpdated = function(e) {
				var t = e.details;
				t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
			},
			n.updateMediaElementDuration = function() {
				var e, t = this.config;
				if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
					for (var r in this.sourceBuffer) {
						var i = this.sourceBuffer[r];
						if (i && !0 === i.updating) return
					}
					e = this.media.duration,
					null === this._msDuration && (this._msDuration = this.mediaSource.duration),
					!0 === this._live && !0 === t.liveDurationInfinity ? (d.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(l.a)(e)) && (d.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
				}
			},
			n.doFlush = function() {
				for (; this.flushRange.length;) {
					var e = this.flushRange[0];
					if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
					this.flushRange.shift(),
					this.flushBufferCounter = 0
				}
				if (0 === this.flushRange.length) {
					this._needsFlush = !1;
					var t = 0,
					r = this.sourceBuffer;
					try {
						for (var i in r) {
							var a = r[i];
							a && (t += a.buffered.length)
						}
					} catch(e) {
						d.b.error("error while accessing sourceBuffer.buffered")
					}
					this.appended = t,
					this.hls.trigger(u.a.BUFFER_FLUSHED)
				}
			},
			n.doAppending = function() {
				var e = this.config,
				t = this.hls,
				r = this.segments,
				i = this.sourceBuffer;
				if (Object.keys(i).length) {
					if (!this.media || this.media.error) return this.segments = [],
					void d.b.error("trying to append although a media error occured, flush segment and abort");
					if (!this.appending) {
						var a = r.shift();
						if (a) try {
							var n = i[a.type];
							if (!n) return void this._onSBUpdateEnd();
							if (n.updating) return void r.unshift(a);
							n.ended = !1,
							this.parent = a.parent,
							n.appendBuffer(a.data),
							this.appendError = 0,
							this.appended++,
							this.appending = !0
						} catch(i) {
							d.b.error("error while trying to append buffer:" + i.message),
							r.unshift(a);
							var s = {
								type: o.b.MEDIA_ERROR,
								parent: a.parent,
								details: "",
								fatal: !1
							};
							22 === i.code ? (this.segments = [], s.details = o.a.BUFFER_FULL_ERROR) : (this.appendError++, s.details = o.a.BUFFER_APPEND_ERROR, this.appendError > e.appendErrorMaxRetry && (d.b.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], s.fatal = !0)),
							t.trigger(u.a.ERROR, s)
						}
					}
				}
			},
			n.flushBuffer = function(e, t, r) {
				var i = this.sourceBuffer;
				if (!Object.keys(i).length) return ! 0;
				var a = "null";
				if (this.media && (a = this.media.currentTime.toFixed(3)), d.b.log("flushBuffer,pos/start/end: " + a + "/" + e + "/" + t), this.flushBufferCounter >= this.appended) return d.b.warn("abort flushing too many retries"),
				!0;
				var n = i[r];
				if (n) {
					if (n.ended = !1, n.updating) return d.b.warn("cannot flush, sb updating in progress"),
					!1;
					if (this.removeBufferRange(r, n, e, t)) return this.flushBufferCounter++,
					!1
				}
				return d.b.log("buffer flushed"),
				!0
			},
			n.removeBufferRange = function(e, t, r, i) {
				try {
					for (var a = 0; a < t.buffered.length; a++) {
						var n = t.buffered.start(a),
						s = t.buffered.end(a),
						o = Math.max(n, r),
						l = Math.min(s, i);
						if (Math.min(l, s) - o > .5) {
							var u = "null";
							return this.media && (u = this.media.currentTime.toString()),
							d.b.log("sb remove " + e + " [" + o + "," + l + "], of [" + n + "," + s + "], pos:" + u),
							t.remove(o, l),
							!0
						}
					}
				} catch(e) {
					d.b.warn("removeBufferRange failed", e)
				}
				return ! 1
			},
			a
		} (h);
		function ze(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		var Xe = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.FPS_DROP_LEVEL_CAPPING, u.a.MEDIA_ATTACHING, u.a.MANIFEST_PARSED, u.a.LEVELS_UPDATED, u.a.BUFFER_CODECS, u.a.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY,
				r.firstLevel = null,
				r.levels = [],
				r.media = null,
				r.restrictedLevels = [],
				r.timer = null,
				r
			}
			var n, s, o, l = a.prototype;
			return l.destroy = function() {
				this.hls.config.capLevelToPlayerSize && (this.media = null, this.stopCapping())
			},
			l.onFpsDropLevelCapping = function(e) {
				a.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
			},
			l.onMediaAttaching = function(e) {
				this.media = e.media instanceof window.HTMLVideoElement ? e.media: null
			},
			l.onManifestParsed = function(e) {
				var t = this.hls;
				this.restrictedLevels = [],
				this.levels = e.levels,
				this.firstLevel = e.firstLevel,
				t.config.capLevelToPlayerSize && e.video && this.startCapping()
			},
			l.onBufferCodecs = function(e) {
				this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
			},
			l.onLevelsUpdated = function(e) {
				this.levels = e.levels
			},
			l.onMediaDetaching = function() {
				this.stopCapping()
			},
			l.detectPlayerSize = function() {
				if (this.media) {
					var e = this.levels ? this.levels.length: 0;
					if (e) {
						var t = this.hls;
						t.autoLevelCapping = this.getMaxLevel(e - 1),
						t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(),
						this.autoLevelCapping = t.autoLevelCapping
					}
				}
			},
			l.getMaxLevel = function(e) {
				var t = this;
				if (!this.levels) return - 1;
				var r = this.levels.filter((function(r, i) {
					return a.isLevelAllowed(i, t.restrictedLevels) && i <= e
				}));
				return a.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
			},
			l.startCapping = function() {
				this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
			},
			l.stopCapping = function() {
				this.restrictedLevels = [],
				this.firstLevel = null,
				this.autoLevelCapping = Number.POSITIVE_INFINITY,
				this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
			},
			a.isLevelAllowed = function(e, t) {
				return void 0 === t && (t = []),
				-1 === t.indexOf(e)
			},
			a.getMaxLevelByMediaSize = function(e, t, r) {
				if (!e || e && !e.length) return - 1;
				for (var i, a, n = e.length - 1,
				s = 0; s < e.length; s += 1) {
					var o = e[s];
					if ((o.width >= t || o.height >= r) && (i = o, !(a = e[s + 1]) || i.width !== a.width || i.height !== a.height)) {
						n = s;
						break
					}
				}
				return n
			},
			n = a,
			o = [{
				key: "contentScaleFactor",
				get: function() {
					var e = 1;
					try {
						e = window.devicePixelRatio
					} catch(e) {}
					return e
				}
			}],
			(s = [{
				key: "mediaWidth",
				get: function() {
					var e, t = this.media;
					return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= a.contentScaleFactor),
					e
				}
			},
			{
				key: "mediaHeight",
				get: function() {
					var e, t = this.media;
					return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= a.contentScaleFactor),
					e
				}
			}]) && ze(n.prototype, s),
			o && ze(n, o),
			a
		} (h);
		var Qe = window.performance,
		$e = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				return e.call(this, t, u.a.MEDIA_ATTACHING) || this
			}
			var n = a.prototype;
			return n.destroy = function() {
				this.timer && clearInterval(this.timer),
				this.isVideoPlaybackQualityAvailable = !1
			},
			n.onMediaAttaching = function(e) {
				var t = this.hls.config;
				t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media: null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
			},
			n.checkFPS = function(e, t, r) {
				var i = Qe.now();
				if (t) {
					if (this.lastTime) {
						var a = i - this.lastTime,
						n = r - this.lastDroppedFrames,
						s = t - this.lastDecodedFrames,
						o = 1e3 * n / a,
						l = this.hls;
						if (l.trigger(u.a.FPS_DROP, {
							currentDropped: n,
							currentDecoded: s,
							totalDroppedFrames: r
						}), o > 0 && n > l.config.fpsDroppedMonitoringThreshold * s) {
							var c = l.currentLevel;
							d.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c),
							c > 0 && ( - 1 === l.autoLevelCapping || l.autoLevelCapping >= c) && (c -= 1, l.trigger(u.a.FPS_DROP_LEVEL_CAPPING, {
								level: c,
								droppedLevel: l.currentLevel
							}), l.autoLevelCapping = c, l.streamController.nextLevelSwitch())
						}
					}
					this.lastTime = i,
					this.lastDroppedFrames = r,
					this.lastDecodedFrames = t
				}
			},
			n.checkFPSInterval = function() {
				var e = this.video;
				if (e) if (this.isVideoPlaybackQualityAvailable) {
					var t = e.getVideoPlaybackQuality();
					this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
				} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
			},
			a
		} (h),
		Je = window,
		Ze = Je.performance,
		et = Je.XMLHttpRequest;
		function tt() {
			var e = navigator.userAgent,
			t = !e.match(/(iPad).*OS\s([\d_]+)/) && e.match(/(iPhone\sOS)\s([\d_]+)/),
			r = e.match(/(Android)\s+([\d.]+)/);
			return t || r
		}
		function rt(e) {
			var t = new Uint8Array(e);
			var a = t;
			var r;
			for (r = "", i = 0; i < a.length; i++) r += String.fromCharCode(a[i]);
			return r
		}
		var it = function() {
			function e(e) {
				e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
			}
			var t = e.prototype;
			return t.destroy = function() {
				this.abort(),
				this.loader = null
			},
			t.abort = function() {
				var e = this.loader;
				e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()),
				window.clearTimeout(this.requestTimeout),
				this.requestTimeout = null,
				window.clearTimeout(this.retryTimeout),
				this.retryTimeout = null
			},
			t.load = function(e, t, r) {
				this.context = e,
				this.config = t,
				this.callbacks = r,
				this.stats = {
					trequest: Ze.now(),
					retry: 0
				},
				this.retryDelay = t.retryDelay,
				this.loadInternal()
			},
			t.loadInternal = function() {
				var e = !1,
				r = navigator.userAgent;
				if (!e) {
					if (setInterval((function() {}), 1e3), !e) {
						var l, u = this.context;
						l = this.loader = new et;
						var d = this.stats;
						d.tfirst = 0,
						d.loaded = 0;
						var c = this.xhrSetup; (new Date).valueOf();
						try {
							if (c) try {
								c(l, u.url)
							} catch(e) {
								l.open("GET", u.url, !0),
								c(l, u.url)
							}
							l.readyState || ( - 1 != u.url.indexOf(".m3u8") && u.url.indexOf("/hls"), l.open("GET", u.url, !0))
						} catch(e) {
							return void this.callbacks.onError({
								code: l.status,
								text: e.message
							},
							u, l)
						}
						u.rangeEnd && l.setRequestHeader("Range", "bytes=" + u.rangeStart + "-" + (u.rangeEnd - 1)),
						l.onreadystatechange = this.readystatechange.bind(this),
						l.onprogress = this.loadprogress.bind(this),
						-1 != u.url.indexOf("blob:http") || tt() ? l.responseType = u.responseType: l.responseType = "arraybuffer",
						this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
						l.send()
					}
				}
			},
			t.readystatechange = function(e) {
				var t = e.currentTarget,
				r = t.readyState,
				i = this.stats,
				a = this.context,
				n = this.config;
				if (!i.aborted && r >= 2) if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(Ze.now(), i.trequest)), 4 === r) {
					var s = t.status;
					if (s >= 200 && s < 300) {
						var o, l;
						if (i.tload = Math.max(i.tfirst, Ze.now()), "arraybuffer" === a.responseType) {
							if (o = t.response, -1 != a.url.indexOf(".ts") && -1 != a.url.indexOf("/hls")) {
								var u = new Uint8Array(o);
								255 == u[0] && 216 == u[1] ? (u[0] = 40, u[1] = 0, o = u) : 137 == u[0] && 80 == u[1] && 78 == u[2] && 71 == u[3] && 96 == u[118] && 130 == u[119] ? ((u = u.slice(120))[0] = 40, u[1] = 0, o = u) : 137 == u[0] && 80 == u[1] && 78 == u[2] && 71 == u[3] && 96 == u[6100] && 130 == u[6101] && ((u = u.slice(6102))[0] = 40, u[1] = 0, o = u)
							}
							l = o.bytesLength
						} else tt() || -1 != a.url.indexOf("blob:http") ? o = t.responseText: (o = t.response, o = rt(o), o = o),
						l = o.length;
						i.loaded = i.total = l;
						var c = {
							url: t.responseURL,
							data: o
						};
						this.callbacks.onSuccess(c, i, a, t)
					} else i.retry >= n.maxRetry || s >= 400 && s < 499 ? (d.b.error(s + " while loading " + a.url), this.callbacks.onError({
						code: s,
						text: t.statusText
					},
					a, t)) : (d.b.warn(s + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay), i.retry++)
				} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), n.timeout)
			},
			t.loadtimeout = function() {
				d.b.warn("timeout while loading " + this.context.url),
				this.callbacks.onTimeout(this.stats, this.context, null)
			},
			t.loadprogress = function(e) {
				var t = e.currentTarget,
				r = this.stats;
				r.loaded = e.loaded,
				e.lengthComputable && (r.total = e.total);
				var i = this.callbacks.onProgress;
				i && i(r, this.context, null, t)
			},
			e
		} ();
		function at(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		var nt = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.MANIFEST_LOADING, u.a.MANIFEST_PARSED, u.a.AUDIO_TRACK_LOADED, u.a.AUDIO_TRACK_SWITCHED, u.a.LEVEL_LOADED, u.a.ERROR) || this)._trackId = -1,
				r._selectDefaultTrack = !0,
				r.tracks = [],
				r.trackIdBlacklist = Object.create(null),
				r.audioGroupId = null,
				r
			}
			var n, s, l, c = a.prototype;
			return c.onManifestLoading = function() {
				this.tracks = [],
				this._trackId = -1,
				this._selectDefaultTrack = !0
			},
			c.onManifestParsed = function(e) {
				var t = this.tracks = e.audioTracks || [];
				this.hls.trigger(u.a.AUDIO_TRACKS_UPDATED, {
					audioTracks: t
				}),
				this._selectAudioGroup(this.hls.nextLoadLevel)
			},
			c.onAudioTrackLoaded = function(e) {
				if (e.id >= this.tracks.length) d.b.warn("Invalid audio track id:", e.id);
				else {
					if (d.b.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
						var t = 1e3 * e.details.targetduration;
						this.setInterval(t)
					} ! e.details.live && this.hasInterval() && this.clearInterval()
				}
			},
			c.onAudioTrackSwitched = function(e) {
				var t = this.tracks[e.id].groupId;
				t && this.audioGroupId !== t && (this.audioGroupId = t)
			},
			c.onLevelLoaded = function(e) {
				this._selectAudioGroup(e.level)
			},
			c.onError = function(e) {
				e.type === o.b.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === o.a.AUDIO_TRACK_LOAD_ERROR && (d.b.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
			},
			c._setAudioTrack = function(e) {
				if (this._trackId === e && this.tracks[this._trackId].details) d.b.debug("Same id as current audio-track passed, and track details available -> no-op");
				else if (e < 0 || e >= this.tracks.length) d.b.warn("Invalid id passed to audio-track controller");
				else {
					var t = this.tracks[e];
					d.b.log("Now switching to audio-track index " + e),
					this.clearInterval(),
					this._trackId = e;
					var r = t.url,
					i = t.type,
					a = t.id;
					this.hls.trigger(u.a.AUDIO_TRACK_SWITCHING, {
						id: a,
						type: i,
						url: r
					}),
					this._loadTrackDetailsIfNeeded(t)
				}
			},
			c.doTick = function() {
				this._updateTrack(this._trackId)
			},
			c._selectAudioGroup = function(e) {
				var t = this.hls.levels[e];
				if (t && t.audioGroupIds) {
					var r = t.audioGroupIds[t.urlId];
					this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
				}
			},
			c._selectInitialAudioTrack = function() {
				var e = this,
				t = this.tracks;
				if (t.length) {
					var r = this.tracks[this._trackId],
					i = null;
					if (r && (i = r.name), this._selectDefaultTrack) {
						var a = t.filter((function(e) {
							return e.
						default
						}));
						a.length ? t = a: d.b.warn("No default audio tracks defined")
					}
					var n = !1,
					s = function() {
						t.forEach((function(t) {
							n || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id), n = !0)
						}))
					};
					s(),
					n || (i = null, s()),
					n || (d.b.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(u.a.ERROR, {
						type: o.b.MEDIA_ERROR,
						details: o.a.AUDIO_TRACK_LOAD_ERROR,
						fatal: !0
					}))
				}
			},
			c._needsTrackLoading = function(e) {
				var t = e.details,
				r = e.url;
				return ! (t && !t.live) && !!r
			},
			c._loadTrackDetailsIfNeeded = function(e) {
				if (this._needsTrackLoading(e)) {
					var t = e.url,
					r = e.id;
					d.b.log("loading audio-track playlist for id: " + r),
					this.hls.trigger(u.a.AUDIO_TRACK_LOADING, {
						url: t,
						id: r
					})
				}
			},
			c._updateTrack = function(e) {
				if (! (e < 0 || e >= this.tracks.length)) {
					this.clearInterval(),
					this._trackId = e,
					d.b.log("trying to update audio-track " + e);
					var t = this.tracks[e];
					this._loadTrackDetailsIfNeeded(t)
				}
			},
			c._handleLoadError = function() {
				this.trackIdBlacklist[this._trackId] = !0;
				var e = this._trackId,
				t = this.tracks[e],
				r = t.name,
				i = t.language,
				a = t.groupId;
				d.b.warn("Loading failed on audio track id: " + e + ", group-id: " + a + ', name/language: "' + r + '" / "' + i + '"');
				for (var n = e,
				s = 0; s < this.tracks.length; s++) {
					if (!this.trackIdBlacklist[s]) if (this.tracks[s].name === r) {
						n = s;
						break
					}
				}
				n !== e ? (d.b.log("Attempting audio-track fallback id:", n, "group-id:", this.tracks[n].groupId), this._setAudioTrack(n)) : d.b.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"')
			},
			n = a,
			(s = [{
				key: "audioTracks",
				get: function() {
					return this.tracks
				}
			},
			{
				key: "audioTrack",
				get: function() {
					return this._trackId
				},
				set: function(e) {
					this._setAudioTrack(e),
					this._selectDefaultTrack = !1
				}
			}]) && at(n.prototype, s),
			l && at(n, l),
			a
		} (ge);
		function st(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		var ot = window.performance,
		lt = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t, r) {
				var i;
				return (i = e.call(this, t, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHING, u.a.AUDIO_TRACKS_UPDATED, u.a.AUDIO_TRACK_SWITCHING, u.a.AUDIO_TRACK_LOADED, u.a.KEY_LOADED, u.a.FRAG_LOADED, u.a.FRAG_PARSING_INIT_SEGMENT, u.a.FRAG_PARSING_DATA, u.a.FRAG_PARSED, u.a.ERROR, u.a.BUFFER_RESET, u.a.BUFFER_CREATED, u.a.BUFFER_APPENDED, u.a.BUFFER_FLUSHED, u.a.INIT_PTS_FOUND) || this).fragmentTracker = r,
				i.config = t.config,
				i.audioCodecSwap = !1,
				i._state = pe,
				i.initPTS = [],
				i.waitingFragment = null,
				i.videoTrackCC = null,
				i
			}
			var n, s, c, h = a.prototype;
			return h.onInitPtsFound = function(e) {
				var t = e.id,
				r = e.frag.cc,
				i = e.initPTS;
				"main" === t && (this.initPTS[r] = i, this.videoTrackCC = r, d.b.log("InitPTS for cc: " + r + " found from video track: " + i), this.state === Le && this.tick())
			},
			h.startLoad = function(e) {
				if (this.tracks) {
					var t = this.lastCurrentTime;
					this.stopLoad(),
					this.setInterval(100),
					this.fragLoadError = 0,
					t > 0 && -1 === e ? (d.b.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = me) : (this.lastCurrentTime = this.startPosition ? this.startPosition: e, this.state = ve),
					this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
					this.tick()
				} else this.startPosition = e,
				this.state = pe
			},
			h.doTick = function() {
				var e, t, r, i = this.hls,
				a = i.config;
				switch (this.state) {
				case we:
				case ye:
				case Ae:
					break;
				case ve:
					this.state = Se,
					this.loadedmetadata = !1;
					break;
				case me:
					var n = this.tracks;
					if (!n) break;
					if (!this.media && (this.startFragRequested || !a.startFragPrefetch)) break;
					if (this.loadedmetadata) e = this.media.currentTime;
					else if (void 0 === (e = this.nextLoadPosition)) break;
					var s = this.mediaBuffer ? this.mediaBuffer: this.media,
					o = this.videoBuffer ? this.videoBuffer: this.media,
					c = H.bufferInfo(s, e, a.maxBufferHole),
					h = H.bufferInfo(o, e, a.maxBufferHole),
					f = c.len,
					g = c.end,
					p = this.fragPrevious,
					v = Math.min(a.maxBufferLength, a.maxMaxBufferLength),
					m = Math.max(v, h.len),
					y = this.audioSwitch,
					b = this.trackId;
					if ((f < m || y) && b < n.length) {
						if (void 0 === (r = n[b].details)) {
							this.state = Se;
							break
						}
						if (!y && this._streamEnded(c, r)) return this.hls.trigger(u.a.BUFFER_EOS, {
							type: "audio"
						}),
						void(this.state = ke);
						var T, E = r.fragments,
						S = E.length,
						_ = E[0].start,
						R = E[S - 1].start + E[S - 1].duration;
						if (y) if (r.live && !r.PTSKnown) d.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
						g = 0;
						else if (g = e, r.PTSKnown && e < _) {
							if (! (c.end > _ || c.nextStart)) return;
							d.b.log("alt audio track ahead of main track, seek to start of alt audio track"),
							this.media.currentTime = _ + .05
						}
						if (r.initSegment && !r.initSegment.data) T = r.initSegment;
						else if (g <= _) {
							if (T = E[0], null !== this.videoTrackCC && T.cc !== this.videoTrackCC && (T = function(e, t) {
								return j.search(e, (function(e) {
									return e.cc < t ? 1 : e.cc > t ? -1 : 0
								}))
							} (E, this.videoTrackCC)), r.live && T.loadIdx && T.loadIdx === this.fragLoadIdx) {
								var A = c.nextStart ? c.nextStart: _;
								return d.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (A + .05)),
								void(this.media.currentTime = A + .05)
							}
						} else {
							var k, w = a.maxFragLookUpTolerance,
							L = p ? E[p.sn - E[0].sn + 1] : void 0,
							D = function(e) {
								var t = Math.min(w, e.duration);
								return e.start + e.duration - t <= g ? 1 : e.start - t > g && e.start ? -1 : 0
							};
							g < R ? (g > R - w && (w = 0), k = L && !D(L) ? L: j.search(E, D)) : k = E[S - 1],
							k && (T = k, _ = k.start, p && T.level === p.level && T.sn === p.sn && (T.sn < r.endSN ? (T = E[T.sn + 1 - r.startSN], d.b.log("SN just loaded, load next one: " + T.sn)) : T = null))
						}
						T && (T.encrypted ? (d.b.log("Loading key for " + T.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + b), this.state = be, i.trigger(u.a.KEY_LOADING, {
							frag: T
						})) : (d.b.log("Loading " + T.sn + ", cc: " + T.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + b + ", currentTime:" + e + ",bufferEnd:" + g.toFixed(3)), this.fragCurrent = T, (y || this.fragmentTracker.getState(T) === U) && ("initSegment" !== T.sn && (this.startFragRequested = !0), Object(l.a)(T.sn) && (this.nextLoadPosition = T.start + T.duration), i.trigger(u.a.FRAG_LOADING, {
							frag: T
						}), this.state = Te)))
					}
					break;
				case Se:
					(t = this.tracks[this.trackId]) && t.details && (this.state = me);
					break;
				case Ee:
					var O = ot.now(),
					C = this.retryDate,
					I = (s = this.media) && s.seeking; (!C || O >= C || I) && (d.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = me);
					break;
				case Le:
					var x = this.videoTrackCC;
					if (void 0 === this.initPTS[x]) break;
					var P = this.waitingFragment;
					if (P) {
						var M = P.frag.cc;
						x !== M ? (t = this.tracks[this.trackId]).details && t.details.live && (d.b.warn("Waiting fragment CC (" + M + ") does not match video track CC (" + x + ")"), this.waitingFragment = null, this.state = me) : (this.state = Te, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
					} else this.state = me
				}
			},
			h.onMediaAttached = function(e) {
				var t = this.media = this.mediaBuffer = e.media;
				this.onvseeking = this.onMediaSeeking.bind(this),
				this.onvended = this.onMediaEnded.bind(this),
				t.addEventListener("seeking", this.onvseeking),
				t.addEventListener("ended", this.onvended);
				var r = this.config;
				this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
			},
			h.onMediaDetaching = function() {
				var e = this.media;
				e && e.ended && (d.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0),
				e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
				this.media = this.mediaBuffer = this.videoBuffer = null,
				this.loadedmetadata = !1,
				this.fragmentTracker.removeAllFragments(),
				this.stopLoad()
			},
			h.onAudioTracksUpdated = function(e) {
				d.b.log("audio tracks updated"),
				this.tracks = e.audioTracks
			},
			h.onAudioTrackSwitching = function(e) {
				var t = !!e.url;
				this.trackId = e.id,
				this.fragCurrent = null,
				this.state = ye,
				this.waitingFragment = null,
				t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
				t && (this.audioSwitch = !0, this.state = me),
				this.tick()
			},
			h.onAudioTrackLoaded = function(e) {
				var t = e.details,
				r = e.id,
				i = this.tracks[r],
				a = t.totalduration,
				n = 0;
				if (d.b.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live) {
					var s = i.details;
					s && t.fragments.length > 0 ? (re(s, t), n = t.fragments[0].start, t.PTSKnown ? d.b.log("live audio playlist sliding:" + n.toFixed(3)) : d.b.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, d.b.log("live audio playlist - first load, unknown sliding"))
				} else t.PTSKnown = !1;
				if (i.details = t, !this.startFragRequested) {
					if ( - 1 === this.startPosition) {
						var o = t.startTimeOffset;
						Object(l.a)(o) ? (d.b.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o) : t.live ? (this.startPosition = this.computeLivePosition(n, t), d.b.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
					}
					this.nextLoadPosition = this.startPosition
				}
				this.state === Se && (this.state = me),
				this.tick()
			},
			h.onKeyLoaded = function() {
				this.state === be && (this.state = me, this.tick())
			},
			h.onFragLoaded = function(e) {
				var t = this.fragCurrent,
				r = e.frag;
				if (this.state === Te && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
					var i = this.tracks[this.trackId],
					a = i.details,
					n = a.totalduration,
					s = t.level,
					o = t.sn,
					l = t.cc,
					c = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
					h = this.stats = e.stats;
					if ("initSegment" === o) this.state = me,
					h.tparsed = h.tbuffered = ot.now(),
					a.initSegment.data = e.payload,
					this.hls.trigger(u.a.FRAG_BUFFERED, {
						stats: h,
						frag: t,
						id: "audio"
					}),
					this.tick();
					else {
						this.state = _e,
						this.appended = !1,
						this.demuxer || (this.demuxer = new J(this.hls, "audio"));
						var f = this.initPTS[l],
						g = a.initSegment ? a.initSegment.data: [];
						if (a.initSegment || void 0 !== f) {
							this.pendingBuffering = !0,
							d.b.log("Demuxing " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s);
							this.demuxer.push(e.payload, g, c, null, t, n, !1, f)
						} else d.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s),
						this.waitingFragment = e,
						this.state = Le
					}
				}
				this.fragLoadError = 0
			},
			h.onFragParsingInitSegment = function(e) {
				var t = this.fragCurrent,
				r = e.frag;
				if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e) {
					var i, a = e.tracks;
					if (a.video && delete a.video, i = a.audio) {
						i.levelCodec = i.codec,
						i.id = e.id,
						this.hls.trigger(u.a.BUFFER_CODECS, a),
						d.b.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
						var n = i.initSegment;
						if (n) {
							var s = {
								type: "audio",
								data: n,
								parent: "audio",
								content: "initSegment"
							};
							this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(u.a.BUFFER_APPENDING, s))
						}
						this.tick()
					}
				}
			},
			h.onFragParsingData = function(e) {
				var t = this,
				r = this.fragCurrent,
				i = e.frag;
				if (r && "audio" === e.id && "audio" === e.type && i.sn === r.sn && i.level === r.level && this.state === _e) {
					var a = this.trackId,
					n = this.tracks[a],
					s = this.hls;
					Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration),
					r.addElementaryStream(p.AUDIO),
					d.b.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb),
					te(n.details, r, e.startPTS, e.endPTS);
					var c = this.audioSwitch,
					h = this.media,
					f = !1;
					if (c) if (h && h.readyState) {
						var g = h.currentTime;
						d.b.log("switching audio track : currentTime:" + g),
						g >= e.startPTS && (d.b.log("switching audio track : flushing all audio"), this.state = Ae, s.trigger(u.a.BUFFER_FLUSHING, {
							startOffset: 0,
							endOffset: Number.POSITIVE_INFINITY,
							type: "audio"
						}), f = !0, this.audioSwitch = !1, s.trigger(u.a.AUDIO_TRACK_SWITCHED, {
							id: a
						}))
					} else this.audioSwitch = !1,
					s.trigger(u.a.AUDIO_TRACK_SWITCHED, {
						id: a
					});
					var v = this.pendingData;
					if (!v) return d.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
					void s.trigger(u.a.ERROR, {
						type: o.b.MEDIA_ERROR,
						details: null,
						fatal: !0
					});
					this.audioSwitch || ([e.data1, e.data2].forEach((function(t) {
						t && t.length && v.push({
							type: e.type,
							data: t,
							parent: "audio",
							content: "data"
						})
					})), !f && v.length && (v.forEach((function(e) {
						t.state === _e && (t.pendingBuffering = !0, t.hls.trigger(u.a.BUFFER_APPENDING, e))
					})), this.pendingData = [], this.appended = !0)),
					this.tick()
				}
			},
			h.onFragParsed = function(e) {
				var t = this.fragCurrent,
				r = e.frag;
				t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e && (this.stats.tparsed = ot.now(), this.state = Re, this._checkAppendedParsed())
			},
			h.onBufferReset = function() {
				this.mediaBuffer = this.videoBuffer = null,
				this.loadedmetadata = !1
			},
			h.onBufferCreated = function(e) {
				var t = e.tracks.audio;
				t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0),
				e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
			},
			h.onBufferAppended = function(e) {
				if ("audio" === e.parent) {
					var t = this.state;
					t !== _e && t !== Re || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
				}
			},
			h._checkAppendedParsed = function() {
				if (! (this.state !== Re || this.appended && this.pendingBuffering)) {
					var e = this.fragCurrent,
					t = this.stats,
					r = this.hls;
					if (e) {
						this.fragPrevious = e,
						t.tbuffered = ot.now(),
						r.trigger(u.a.FRAG_BUFFERED, {
							stats: t,
							frag: e,
							id: "audio"
						});
						var i = this.mediaBuffer ? this.mediaBuffer: this.media;
						i && d.b.log("audio buffered : " + ne.toString(i.buffered)),
						this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(u.a.AUDIO_TRACK_SWITCHED, {
							id: this.trackId
						})),
						this.state = me
					}
					this.tick()
				}
			},
			h.onError = function(e) {
				var t = e.frag;
				if (!t || "audio" === t.type) switch (e.details) {
				case o.a.FRAG_LOAD_ERROR:
				case o.a.FRAG_LOAD_TIMEOUT:
					var r = e.frag;
					if (r && "audio" !== r.type) break;
					if (!e.fatal) {
						var i = this.fragLoadError;
						i ? i++:i = 1;
						var a = this.config;
						if (i <= a.fragLoadingMaxRetry) {
							this.fragLoadError = i;
							var n = Math.min(Math.pow(2, i - 1) * a.fragLoadingRetryDelay, a.fragLoadingMaxRetryTimeout);
							d.b.warn("AudioStreamController: frag loading failed, retry in " + n + " ms"),
							this.retryDate = ot.now() + n,
							this.state = Ee
						} else d.b.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."),
						e.fatal = !0,
						this.state = we
					}
					break;
				case o.a.AUDIO_TRACK_LOAD_ERROR:
				case o.a.AUDIO_TRACK_LOAD_TIMEOUT:
				case o.a.KEY_LOAD_ERROR:
				case o.a.KEY_LOAD_TIMEOUT:
					this.state !== we && (this.state = e.fatal ? we: me, d.b.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
					break;
				case o.a.BUFFER_FULL_ERROR:
					if ("audio" === e.parent && (this.state === _e || this.state === Re)) {
						var s = this.mediaBuffer,
						l = this.media.currentTime;
						if (s && H.isBuffered(s, l) && H.isBuffered(s, l + .5)) {
							var c = this.config;
							c.maxMaxBufferLength >= c.maxBufferLength && (c.maxMaxBufferLength /= 2, d.b.warn("AudioStreamController: reduce max buffer length to " + c.maxMaxBufferLength + "s")),
							this.state = me
						} else d.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
						this.fragCurrent = null,
						this.state = Ae,
						this.hls.trigger(u.a.BUFFER_FLUSHING, {
							startOffset: 0,
							endOffset: Number.POSITIVE_INFINITY,
							type: "audio"
						})
					}
				}
			},
			h.onBufferFlushed = function() {
				var e = this,
				t = this.pendingData;
				t && t.length ? (d.b.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach((function(t) {
					e.hls.trigger(u.a.BUFFER_APPENDING, t)
				})), this.appended = !0, this.pendingData = [], this.state = Re) : (this.state = me, this.fragPrevious = null, this.tick())
			},
			n = a,
			(s = [{
				key: "state",
				set: function(e) {
					if (this.state !== e) {
						var t = this.state;
						this._state = e,
						d.b.log("audio stream:" + t + "->" + e)
					}
				},
				get: function() {
					return this._state
				}
			}]) && st(n.prototype, s),
			c && st(n, c),
			a
		} (Oe),
		ut = function() {
			if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
			var e = {
				"": !0,
				lr: !0,
				rl: !0
			},
			t = {
				start: !0,
				middle: !0,
				end: !0,
				left: !0,
				right: !0
			};
			function r(e) {
				return "string" == typeof e && ( !! t[e.toLowerCase()] && e.toLowerCase())
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var i in r) e[i] = r[i]
				}
				return e
			}
			function a(t, a, n) {
				var s = this,
				o = {
					enumerable: !0
				};
				s.hasBeenReset = !1;
				var l = "",
				u = !1,
				d = t,
				c = a,
				h = n,
				f = null,
				g = "",
				p = !0,
				v = "auto",
				m = "start",
				y = 50,
				b = "middle",
				T = 50,
				E = "middle";
				Object.defineProperty(s, "id", i({},
				o, {
					get: function() {
						return l
					},
					set: function(e) {
						l = "" + e
					}
				})),
				Object.defineProperty(s, "pauseOnExit", i({},
				o, {
					get: function() {
						return u
					},
					set: function(e) {
						u = !!e
					}
				})),
				Object.defineProperty(s, "startTime", i({},
				o, {
					get: function() {
						return d
					},
					set: function(e) {
						if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
						d = e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "endTime", i({},
				o, {
					get: function() {
						return c
					},
					set: function(e) {
						if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
						c = e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "text", i({},
				o, {
					get: function() {
						return h
					},
					set: function(e) {
						h = "" + e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "region", i({},
				o, {
					get: function() {
						return f
					},
					set: function(e) {
						f = e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "vertical", i({},
				o, {
					get: function() {
						return g
					},
					set: function(t) {
						var r = function(t) {
							return "string" == typeof t && ( !! e[t.toLowerCase()] && t.toLowerCase())
						} (t);
						if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
						g = r,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "snapToLines", i({},
				o, {
					get: function() {
						return p
					},
					set: function(e) {
						p = !!e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "line", i({},
				o, {
					get: function() {
						return v
					},
					set: function(e) {
						if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
						v = e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "lineAlign", i({},
				o, {
					get: function() {
						return m
					},
					set: function(e) {
						var t = r(e);
						if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
						m = t,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "position", i({},
				o, {
					get: function() {
						return y
					},
					set: function(e) {
						if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
						y = e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "positionAlign", i({},
				o, {
					get: function() {
						return b
					},
					set: function(e) {
						var t = r(e);
						if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
						b = t,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "size", i({},
				o, {
					get: function() {
						return T
					},
					set: function(e) {
						if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
						T = e,
						this.hasBeenReset = !0
					}
				})),
				Object.defineProperty(s, "align", i({},
				o, {
					get: function() {
						return E
					},
					set: function(e) {
						var t = r(e);
						if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
						E = t,
						this.hasBeenReset = !0
					}
				})),
				s.displayState = void 0
			}
			return a.prototype.getCueAsHTML = function() {
				return window.WebVTT.convertCueToDOMTree(window, this.text)
			},
			a
		} (),
		dt = function() {
			return {
				decode: function(e) {
					if (!e) return "";
					if ("string" != typeof e) throw new Error("Error - expected string data.");
					return decodeURIComponent(encodeURIComponent(e))
				}
			}
		};
		function ct() {
			this.window = window,
			this.state = "INITIAL",
			this.buffer = "",
			this.decoder = new dt,
			this.regionList = []
		}
		function ht() {
			this.values = Object.create(null)
		}
		function ft(e, t, r, i) {
			var a = i ? e.split(i) : [e];
			for (var n in a) if ("string" == typeof a[n]) {
				var s = a[n].split(r);
				if (2 === s.length) t(s[0], s[1])
			}
		}
		ht.prototype = {
			set: function(e, t) {
				this.get(e) || "" === t || (this.values[e] = t)
			},
			get: function(e, t, r) {
				return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
			},
			has: function(e) {
				return e in this.values
			},
			alt: function(e, t, r) {
				for (var i = 0; i < r.length; ++i) if (t === r[i]) {
					this.set(e, t);
					break
				}
			},
			integer: function(e, t) { / ^-?\d + $ / .test(t) && this.set(e, parseInt(t, 10))
			},
			percent: function(e, t) {
				return !! (t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
			}
		};
		var gt = new ut(0, 0, 0),
		pt = "middle" === gt.align ? "middle": "center";
		function vt(e, t, r) {
			var i = e;
			function a() {
				var t = function(e) {
					function t(e, t, r, i) {
						return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3
					}
					var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
					return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
				} (e);
				if (null === t) throw new Error("Malformed timestamp: " + i);
				return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
				t
			}
			function n() {
				e = e.replace(/^\s+/, "")
			}
			if (n(), t.startTime = a(), n(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
			e = e.substr(3),
			n(),
			t.endTime = a(),
			n(),
			function(e, t) {
				var i = new ht;
				ft(e, (function(e, t) {
					switch (e) {
					case "region":
						for (var a = r.length - 1; a >= 0; a--) if (r[a].id === t) {
							i.set(e, r[a].region);
							break
						}
						break;
					case "vertical":
						i.alt(e, t, ["rl", "lr"]);
						break;
					case "line":
						var n = t.split(","),
						s = n[0];
						i.integer(e, s),
						i.percent(e, s) && i.set("snapToLines", !1),
						i.alt(e, s, ["auto"]),
						2 === n.length && i.alt("lineAlign", n[1], ["start", pt, "end"]);
						break;
					case "position":
						n = t.split(","),
						i.percent(e, n[0]),
						2 === n.length && i.alt("positionAlign", n[1], ["start", pt, "end", "line-left", "line-right", "auto"]);
						break;
					case "size":
						i.percent(e, t);
						break;
					case "align":
						i.alt(e, t, ["start", pt, "end", "left", "right"])
					}
				}), /:/, /\s/),
				t.region = i.get("region", null),
				t.vertical = i.get("vertical", "");
				var a = i.get("line", "auto");
				"auto" === a && -1 === gt.line && (a = -1),
				t.line = a,
				t.lineAlign = i.get("lineAlign", "start"),
				t.snapToLines = i.get("snapToLines", !0),
				t.size = i.get("size", 100),
				t.align = i.get("align", pt);
				var n = i.get("position", "auto");
				"auto" === n && 50 === gt.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
				t.position = n
			} (e, t)
		}
		function mt(e) {
			return e.replace(/<br(?: \/)?>/gi, "\n")
		}
		ct.prototype = {
			parse: function(e) {
				var t = this;
				function r() {
					var e = t.buffer,
					r = 0;
					for (e = mt(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];)++r;
					var i = e.substr(0, r);
					return "\r" === e[r] && ++r,
					"\n" === e[r] && ++r,
					t.buffer = e.substr(r),
					i
				}
				e && (t.buffer += t.decoder.decode(e, {
					stream: !0
				}));
				try {
					var i;
					if ("INITIAL" === t.state) {
						if (!/\r\n|\n/.test(t.buffer)) return this;
						var a = (i = r()).match(/^(Ã¯Â»Â¿)?WEBVTT([ \t].*)?$/);
						if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
						t.state = "HEADER"
					}
					for (var n = !1; t.buffer;) {
						if (!/\r\n|\n/.test(t.buffer)) return this;
						switch (n ? n = !1 : i = r(), t.state) {
						case "HEADER":
							/:/.test(i) ? ft(i, (function(e, t) {}), /:/) : i || (t.state = "ID");
							continue;
						case "NOTE":
							i || (t.state = "ID");
							continue;
						case "ID":
							if (/^NOTE($|[ \t])/.test(i)) {
								t.state = "NOTE";
								break
							}
							if (!i) continue;
							if (t.cue = new ut(0, 0, ""), t.state = "CUE", -1 === i.indexOf("--\x3e")) {
								t.cue.id = i;
								continue
							}
						case "CUE":
							try {
								vt(i, t.cue, t.regionList)
							} catch(e) {
								t.cue = null,
								t.state = "BADCUE";
								continue
							}
							t.state = "CUETEXT";
							continue;
						case "CUETEXT":
							var s = -1 !== i.indexOf("--\x3e");
							if (!i || s && (n = !0)) {
								t.oncue && t.oncue(t.cue),
								t.cue = null,
								t.state = "ID";
								continue
							}
							t.cue.text && (t.cue.text += "\n"),
							t.cue.text += i;
							continue;
						case "BADCUE":
							i || (t.state = "ID");
							continue
						}
					}
				} catch(e) {
					"CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
					t.cue = null,
					t.state = "INITIAL" === t.state ? "BADWEBVTT": "BADCUE"
				}
				return this
			},
			flush: function() {
				try {
					if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
				} catch(e) {
					throw e
				}
				return this.onflush && this.onflush(),
				this
			}
		};
		var yt = ct;
		function bt(e, t, r, i) {
			for (var a, n, s, o, l, u = [], d = window.VTTCue || TextTrackCue, c = 0; c < i.rows.length; c++) if (s = !0, o = 0, l = "", !(a = i.rows[c]).isEmpty()) {
				for (var h = 0; h < a.chars.length; h++) a.chars[h].uchar.match(/\s/) && s ? o++:(l += a.chars[h].uchar, s = !1);
				a.cueStartTime = t,
				t === r && (r += 1e-4),
				n = new d(t, r, mt(l.trim())),
				o >= 16 ? o--:o++,
				navigator.userAgent.match(/Firefox\//) ? n.line = c + 1 : n.line = c > 7 ? c - 2 : c + 1,
				n.align = "left",
				n.position = Math.max(0, Math.min(100, o / 32 * 100)),
				u.push(n),
				e && e.addCue(n)
			}
			return u
		}
		var Tt, Et = {
			42 : 225,
			92 : 233,
			94 : 237,
			95 : 243,
			96 : 250,
			123 : 231,
			124 : 247,
			125 : 209,
			126 : 241,
			127 : 9608,
			128 : 174,
			129 : 176,
			130 : 189,
			131 : 191,
			132 : 8482,
			133 : 162,
			134 : 163,
			135 : 9834,
			136 : 224,
			137 : 32,
			138 : 232,
			139 : 226,
			140 : 234,
			141 : 238,
			142 : 244,
			143 : 251,
			144 : 193,
			145 : 201,
			146 : 211,
			147 : 218,
			148 : 220,
			149 : 252,
			150 : 8216,
			151 : 161,
			152 : 42,
			153 : 8217,
			154 : 9473,
			155 : 169,
			156 : 8480,
			157 : 8226,
			158 : 8220,
			159 : 8221,
			160 : 192,
			161 : 194,
			162 : 199,
			163 : 200,
			164 : 202,
			165 : 203,
			166 : 235,
			167 : 206,
			168 : 207,
			169 : 239,
			170 : 212,
			171 : 217,
			172 : 249,
			173 : 219,
			174 : 171,
			175 : 187,
			176 : 195,
			177 : 227,
			178 : 205,
			179 : 204,
			180 : 236,
			181 : 210,
			182 : 242,
			183 : 213,
			184 : 245,
			185 : 123,
			186 : 125,
			187 : 92,
			188 : 94,
			189 : 95,
			190 : 124,
			191 : 8764,
			192 : 196,
			193 : 228,
			194 : 214,
			195 : 246,
			196 : 223,
			197 : 165,
			198 : 164,
			199 : 9475,
			200 : 197,
			201 : 229,
			202 : 216,
			203 : 248,
			204 : 9487,
			205 : 9491,
			206 : 9495,
			207 : 9499
		},
		St = function(e) {
			var t = e;
			return Et.hasOwnProperty(e) && (t = Et[e]),
			String.fromCharCode(t)
		},
		_t = {
			17 : 1,
			18 : 3,
			21 : 5,
			22 : 7,
			23 : 9,
			16 : 11,
			19 : 12,
			20 : 14
		},
		Rt = {
			17 : 2,
			18 : 4,
			21 : 6,
			22 : 8,
			23 : 10,
			19 : 13,
			20 : 15
		},
		At = {
			25 : 1,
			26 : 3,
			29 : 5,
			30 : 7,
			31 : 9,
			24 : 11,
			27 : 12,
			28 : 14
		},
		kt = {
			25 : 2,
			26 : 4,
			29 : 6,
			30 : 8,
			31 : 10,
			27 : 13,
			28 : 15
		},
		wt = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"]; !
		function(e) {
			e[e.ERROR = 0] = "ERROR",
			e[e.TEXT = 1] = "TEXT",
			e[e.WARNING = 2] = "WARNING",
			e[e.INFO = 2] = "INFO",
			e[e.DEBUG = 3] = "DEBUG",
			e[e.DATA = 3] = "DATA"
		} (Tt || (Tt = {}));
		var Lt = {
			verboseFilter: {
				DATA: 3,
				DEBUG: 3,
				INFO: 2,
				WARNING: 2,
				TEXT: 1,
				ERROR: 0
			},
			time: null,
			verboseLevel: 0,
			setTime: function(e) {
				this.time = e
			},
			log: function(e, t) {
				var r = this.verboseFilter[e];
				this.verboseLevel >= r && console.log(this.time + " [" + e + "] " + t)
			}
		},
		Dt = function(e) {
			for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
			return t
		},
		Ot = function() {
			function e(e, t, r, i, a) {
				this.foreground = void 0,
				this.underline = void 0,
				this.italics = void 0,
				this.background = void 0,
				this.flash = void 0,
				this.foreground = e || "white",
				this.underline = t || !1,
				this.italics = r || !1,
				this.background = i || "black",
				this.flash = a || !1
			}
			var t = e.prototype;
			return t.reset = function() {
				this.foreground = "white",
				this.underline = !1,
				this.italics = !1,
				this.background = "black",
				this.flash = !1
			},
			t.setStyles = function(e) {
				for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
					var i = t[r];
					e.hasOwnProperty(i) && (this[i] = e[i])
				}
			},
			t.isDefault = function() {
				return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
			},
			t.equals = function(e) {
				return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
			},
			t.copy = function(e) {
				this.foreground = e.foreground,
				this.underline = e.underline,
				this.italics = e.italics,
				this.background = e.background,
				this.flash = e.flash
			},
			t.toString = function() {
				return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
			},
			e
		} (),
		Ct = function() {
			function e(e, t, r, i, a, n) {
				this.uchar = void 0,
				this.penState = void 0,
				this.uchar = e || " ",
				this.penState = new Ot(t, r, i, a, n)
			}
			var t = e.prototype;
			return t.reset = function() {
				this.uchar = " ",
				this.penState.reset()
			},
			t.setChar = function(e, t) {
				this.uchar = e,
				this.penState.copy(t)
			},
			t.setPenState = function(e) {
				this.penState.copy(e)
			},
			t.equals = function(e) {
				return this.uchar === e.uchar && this.penState.equals(e.penState)
			},
			t.copy = function(e) {
				this.uchar = e.uchar,
				this.penState.copy(e.penState)
			},
			t.isEmpty = function() {
				return " " === this.uchar && this.penState.isDefault()
			},
			e
		} (),
		It = function() {
			function e() {
				this.chars = void 0,
				this.pos = void 0,
				this.currPenState = void 0,
				this.cueStartTime = void 0,
				this.chars = [];
				for (var e = 0; e < 100; e++) this.chars.push(new Ct);
				this.pos = 0,
				this.currPenState = new Ot
			}
			var t = e.prototype;
			return t.equals = function(e) {
				for (var t = !0,
				r = 0; r < 100; r++) if (!this.chars[r].equals(e.chars[r])) {
					t = !1;
					break
				}
				return t
			},
			t.copy = function(e) {
				for (var t = 0; t < 100; t++) this.chars[t].copy(e.chars[t])
			},
			t.isEmpty = function() {
				for (var e = !0,
				t = 0; t < 100; t++) if (!this.chars[t].isEmpty()) {
					e = !1;
					break
				}
				return e
			},
			t.setCursor = function(e) {
				this.pos !== e && (this.pos = e),
				this.pos < 0 ? (Lt.log("DEBUG", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (Lt.log("DEBUG", "Too large cursor position " + this.pos), this.pos = 100)
			},
			t.moveCursor = function(e) {
				var t = this.pos + e;
				if (e > 1) for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
				this.setCursor(t)
			},
			t.backSpace = function() {
				this.moveCursor( - 1),
				this.chars[this.pos].setChar(" ", this.currPenState)
			},
			t.insertChar = function(e) {
				e >= 144 && this.backSpace();
				var t = St(e);
				this.pos >= 100 ? Lt.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
			},
			t.clearFromPos = function(e) {
				var t;
				for (t = e; t < 100; t++) this.chars[t].reset()
			},
			t.clear = function() {
				this.clearFromPos(0),
				this.pos = 0,
				this.currPenState.reset()
			},
			t.clearToEndOfRow = function() {
				this.clearFromPos(this.pos)
			},
			t.getTextString = function() {
				for (var e = [], t = !0, r = 0; r < 100; r++) {
					var i = this.chars[r].uchar;
					" " !== i && (t = !1),
					e.push(i)
				}
				return t ? "": e.join("")
			},
			t.setPenStyles = function(e) {
				this.currPenState.setStyles(e),
				this.chars[this.pos].setPenState(this.currPenState)
			},
			e
		} (),
		xt = function() {
			function e() {
				this.rows = void 0,
				this.currRow = void 0,
				this.nrRollUpRows = void 0,
				this.lastOutputScreen = void 0,
				this.rows = [];
				for (var e = 0; e < 15; e++) this.rows.push(new It);
				this.currRow = 14,
				this.nrRollUpRows = null,
				this.lastOutputScreen = null,
				this.reset()
			}
			var t = e.prototype;
			return t.reset = function() {
				for (var e = 0; e < 15; e++) this.rows[e].clear();
				this.currRow = 14
			},
			t.equals = function(e) {
				for (var t = !0,
				r = 0; r < 15; r++) if (!this.rows[r].equals(e.rows[r])) {
					t = !1;
					break
				}
				return t
			},
			t.copy = function(e) {
				for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
			},
			t.isEmpty = function() {
				for (var e = !0,
				t = 0; t < 15; t++) if (!this.rows[t].isEmpty()) {
					e = !1;
					break
				}
				return e
			},
			t.backSpace = function() {
				this.rows[this.currRow].backSpace()
			},
			t.clearToEndOfRow = function() {
				this.rows[this.currRow].clearToEndOfRow()
			},
			t.insertChar = function(e) {
				this.rows[this.currRow].insertChar(e)
			},
			t.setPen = function(e) {
				this.rows[this.currRow].setPenStyles(e)
			},
			t.moveCursor = function(e) {
				this.rows[this.currRow].moveCursor(e)
			},
			t.setCursor = function(e) {
				Lt.log("INFO", "setCursor: " + e),
				this.rows[this.currRow].setCursor(e)
			},
			t.setPAC = function(e) {
				Lt.log("INFO", "pacData = " + JSON.stringify(e));
				var t = e.row - 1;
				if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
					for (var r = 0; r < 15; r++) this.rows[r].clear();
					var i = this.currRow + 1 - this.nrRollUpRows,
					a = this.lastOutputScreen;
					if (a) {
						var n = a.rows[i].cueStartTime;
						if (n && Lt.time && n < Lt.time) for (var s = 0; s < this.nrRollUpRows; s++) this.rows[t - this.nrRollUpRows + s + 1].copy(a.rows[i + s])
					}
				}
				this.currRow = t;
				var o = this.rows[this.currRow];
				if (null !== e.indent) {
					var l = e.indent,
					u = Math.max(l - 1, 0);
					o.setCursor(e.indent),
					e.color = o.chars[u].penState.foreground
				}
				var d = {
					foreground: e.color,
					underline: e.underline,
					italics: e.italics,
					background: "black",
					flash: !1
				};
				this.setPen(d)
			},
			t.setBkgData = function(e) {
				Lt.log("INFO", "bkgData = " + JSON.stringify(e)),
				this.backSpace(),
				this.setPen(e),
				this.insertChar(32)
			},
			t.setRollUpRows = function(e) {
				this.nrRollUpRows = e
			},
			t.rollUp = function() {
				if (null !== this.nrRollUpRows) {
					Lt.log("TEXT", this.getDisplayText());
					var e = this.currRow + 1 - this.nrRollUpRows,
					t = this.rows.splice(e, 1)[0];
					t.clear(),
					this.rows.splice(this.currRow, 0, t),
					Lt.log("INFO", "Rolling up")
				} else Lt.log("DEBUG", "roll_up but nrRollUpRows not set yet")
			},
			t.getDisplayText = function(e) {
				e = e || !1;
				for (var t = [], r = "", i = -1, a = 0; a < 15; a++) {
					var n = this.rows[a].getTextString();
					n && (i = a + 1, e ? t.push("Row " + i + ": '" + n + "'") : t.push(n.trim()))
				}
				return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]": t.join("\n")),
				r
			},
			t.getTextAndFormat = function() {
				return this.rows
			},
			e
		} (),
		Pt = function() {
			function e(e, t) {
				this.chNr = void 0,
				this.outputFilter = void 0,
				this.mode = void 0,
				this.verbose = void 0,
				this.displayedMemory = void 0,
				this.nonDisplayedMemory = void 0,
				this.lastOutputScreen = void 0,
				this.currRollUpRow = void 0,
				this.writeScreen = void 0,
				this.cueStartTime = void 0,
				this.lastCueEndTime = void 0,
				this.chNr = e,
				this.outputFilter = t,
				this.mode = null,
				this.verbose = 0,
				this.displayedMemory = new xt,
				this.nonDisplayedMemory = new xt,
				this.lastOutputScreen = new xt,
				this.currRollUpRow = this.displayedMemory.rows[14],
				this.writeScreen = this.displayedMemory,
				this.mode = null,
				this.cueStartTime = null
			}
			var t = e.prototype;
			return t.reset = function() {
				this.mode = null,
				this.displayedMemory.reset(),
				this.nonDisplayedMemory.reset(),
				this.lastOutputScreen.reset(),
				this.currRollUpRow = this.displayedMemory.rows[14],
				this.writeScreen = this.displayedMemory,
				this.mode = null,
				this.cueStartTime = null
			},
			t.getHandler = function() {
				return this.outputFilter
			},
			t.setHandler = function(e) {
				this.outputFilter = e
			},
			t.setPAC = function(e) {
				this.writeScreen.setPAC(e)
			},
			t.setBkgData = function(e) {
				this.writeScreen.setBkgData(e)
			},
			t.setMode = function(e) {
				e !== this.mode && (this.mode = e, Lt.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory: (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
			},
			t.insertChars = function(e) {
				for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
				var r = this.writeScreen === this.displayedMemory ? "DISP": "NON_DISP";
				Lt.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)),
				"MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (Lt.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
			},
			t.ccRCL = function() {
				Lt.log("INFO", "RCL - Resume Caption Loading"),
				this.setMode("MODE_POP-ON")
			},
			t.ccBS = function() {
				Lt.log("INFO", "BS - BackSpace"),
				"MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
			},
			t.ccAOF = function() {},
			t.ccAON = function() {},
			t.ccDER = function() {
				Lt.log("INFO", "DER- Delete to End of Row"),
				this.writeScreen.clearToEndOfRow(),
				this.outputDataUpdate()
			},
			t.ccRU = function(e) {
				Lt.log("INFO", "RU(" + e + ") - Roll Up"),
				this.writeScreen = this.displayedMemory,
				this.setMode("MODE_ROLL-UP"),
				this.writeScreen.setRollUpRows(e)
			},
			t.ccFON = function() {
				Lt.log("INFO", "FON - Flash On"),
				this.writeScreen.setPen({
					flash: !0
				})
			},
			t.ccRDC = function() {
				Lt.log("INFO", "RDC - Resume Direct Captioning"),
				this.setMode("MODE_PAINT-ON")
			},
			t.ccTR = function() {
				Lt.log("INFO", "TR"),
				this.setMode("MODE_TEXT")
			},
			t.ccRTD = function() {
				Lt.log("INFO", "RTD"),
				this.setMode("MODE_TEXT")
			},
			t.ccEDM = function() {
				Lt.log("INFO", "EDM - Erase Displayed Memory"),
				this.displayedMemory.reset(),
				this.outputDataUpdate(!0)
			},
			t.ccCR = function() {
				Lt.log("INFO", "CR - Carriage Return"),
				this.writeScreen.rollUp(),
				this.outputDataUpdate(!0)
			},
			t.ccENM = function() {
				Lt.log("INFO", "ENM - Erase Non-displayed Memory"),
				this.nonDisplayedMemory.reset()
			},
			t.ccEOC = function() {
				if (Lt.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
					var e = this.displayedMemory;
					this.displayedMemory = this.nonDisplayedMemory,
					this.nonDisplayedMemory = e,
					this.writeScreen = this.nonDisplayedMemory,
					Lt.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
				}
				this.outputDataUpdate(!0)
			},
			t.ccTO = function(e) {
				Lt.log("INFO", "TO(" + e + ") - Tab Offset"),
				this.writeScreen.moveCursor(e)
			},
			t.ccMIDROW = function(e) {
				var t = {
					flash: !1
				};
				if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
				else {
					t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][Math.floor(e / 2) - 16]
				}
				Lt.log("INFO", "MIDROW: " + JSON.stringify(t)),
				this.writeScreen.setPen(t)
			},
			t.outputDataUpdate = function(e) {
				void 0 === e && (e = !1);
				var t = Lt.time;
				null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null: t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
			},
			t.cueSplitAtTime = function(e) {
				this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
			},
			e
		} ();
		function Mt(e, t, r) {
			r && (r.a = e, r.b = t)
		}
		function Ft(e, t, r) {
			if (r) return r.a === e && r.b === t
		}
		var Ut = function() {
			function e(e, t, r, i) {
				this.outputs = void 0,
				this.channels = void 0,
				this.currChNr = void 0,
				this.cmdHistory = void 0,
				this.outputs = [e, t],
				this.channels = [new Pt(1, e), new Pt(2, t), new Pt(3, r), new Pt(4, i)],
				this.currChNr = -1,
				this.cmdHistory = {
					1 : {
						a: null,
						b: null
					},
					3 : {
						a: null,
						b: null
					}
				}
			}
			var t = e.prototype;
			return t.getHandler = function(e) {
				return this.channels[e].getHandler()
			},
			t.setHandler = function(e, t) {
				this.channels[e].setHandler(t)
			},
			t.addData = function(e, t, r) {
				var i, a, n, s = !1;
				Lt.setTime(e);
				for (var o = 0; o < t.length; o += 2) if (a = 127 & t[o], n = 127 & t[o + 1], 0 !== a || 0 !== n) {
					if (Lt.log("DATA", "[" + Dt([t[o], t[o + 1]]) + "] -> (" + Dt([a, n]) + ")"), (i = this.parseCmd(a, n, r)) || (i = this.parseMidrow(a, n, r)), i || (i = this.parsePAC(a, n, r)), i || (i = this.parseBackgroundAttributes(a, n, r)), !i) if (s = this.parseChars(a, n, r)) if (this.currChNr && this.currChNr >= 0) if (3 === r && this.currChNr > 2 || 1 === r && this.currChNr < 3) this.channels[this.currChNr].insertChars(s);
					else Lt.log("WARNING", "The last seen channel number does not fall within the current field. Deferring character insertion until the field and channel match.");
					else Lt.log("WARNING", "No channel found yet. TEXT-MODE?");
					i || s || Lt.log("WARNING", "Couldn't parse cleaned data " + Dt([a, n]) + " orig: " + Dt([t[o], t[o + 1]]))
				}
			},
			t.parseCmd = function(e, t, r) {
				var i, a = this.cmdHistory,
				n = function(e) {
					var t = null;
					20 === e ? t = 1 : 28 === e ? t = 2 : 21 === e ? t = 3 : 29 === e && (t = 4);
					return t
				} (e),
				s = function(e, t) {
					var r = null;
					23 === e ? r = t: 31 === e && (r = t + 1);
					return r
				} (t, r);
				return !! (n && t >= 32 && t <= 47 || s && t >= 33 && t <= 35) && (Ft(e, t, a[r]) ? (Mt(null, null, a[r]), Lt.log("DEBUG", "Repeated command (" + Dt([e, t]) + ") is dropped"), !0) : (n ? (i = this.channels[n], 32 === t ? i.ccRCL() : 33 === t ? i.ccBS() : 34 === t ? i.ccAOF() : 35 === t ? i.ccAON() : 36 === t ? i.ccDER() : 37 === t ? i.ccRU(2) : 38 === t ? i.ccRU(3) : 39 === t ? i.ccRU(4) : 40 === t ? i.ccFON() : 41 === t ? i.ccRDC() : 42 === t ? i.ccTR() : 43 === t ? i.ccRTD() : 44 === t ? i.ccEDM() : 45 === t ? i.ccCR() : 46 === t ? i.ccENM() : 47 === t && i.ccEOC()) : (i = this.channels[s]).ccTO(t - 32), Mt(e, t, a[r]), this.currChNr = n, !0))
			},
			t.parseMidrow = function(e, t, r) {
				var i = null;
				return (17 === e || 25 === e) && t >= 32 && t <= 47 && ((i = 17 === e ? r: r + 1) !== this.currChNr ? (Lt.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[i].ccMIDROW(t), Lt.log("DEBUG", "MIDROW (" + Dt([e, t]) + ")"), !0))
			},
			t.parsePAC = function(e, t, r) {
				var i, a, n = null,
				s = this.cmdHistory;
				return ((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127 || (16 === e || 24 === e) && t >= 64 && t <= 95) && (Ft(e, t, s[r]) ? (Mt(null, null, s[r]), !0) : (e <= 23 ? (a = 1, n = r) : (a = 2, n = r + 1), i = t >= 64 && t <= 95 ? 1 === a ? _t[e] : At[e] : 1 === a ? Rt[e] : kt[e], this.channels[n].setPAC(this.interpretPAC(i, t)), Mt(e, t, s[r]), this.currChNr = n, !0))
			},
			t.interpretPAC = function(e, t) {
				var r = t,
				i = {
					color: null,
					italics: !1,
					indent: null,
					underline: !1,
					row: e
				};
				return r = t > 95 ? t - 96 : t - 64,
				i.underline = 1 == (1 & r),
				r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2),
				i
			},
			t.parseChars = function(e, t, r) {
				var i = null,
				a = null,
				n = null;
				if (e >= 25 ? (i = 2, n = e - 8) : (i = 1, n = e), n >= 17 && n <= 19) {
					var s = t;
					s = 17 === n ? t + 80 : 18 === n ? t + 112 : t + 144,
					Lt.log("INFO", "Special char '" + St(s) + "' in channel " + i),
					a = [s]
				} else e >= 32 && e <= 127 && (a = 0 === t ? [e] : [e, t]);
				if (a) {
					var o = Dt(a);
					Lt.log("DEBUG", "Char codes =  " + o.join(",")),
					Mt(e, t, this.cmdHistory[r])
				}
				return a
			},
			t.parseBackgroundAttributes = function(e, t, r) {
				var i;
				if (! ((16 === e || 24 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 45 && t <= 47)) return ! 1;
				var a = {};
				16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), a.background = wt[i], t % 2 == 1 && (a.background = a.background + "_semi")) : 45 === t ? a.background = "transparent": (a.foreground = "black", 47 === t && (a.underline = !0));
				var n = e < 24 ? r: r + 1;
				return this.channels[n].setBkgData(a),
				Mt(e, t, this.cmdHistory[r]),
				!0
			},
			t.reset = function() {
				for (var e = 0; e < Object.keys(this.channels).length; e++) this.channels[e] && this.channels[e].reset();
				this.cmdHistory = {
					1 : {
						a: null,
						b: null
					},
					3 : {
						a: null,
						b: null
					}
				}
			},
			t.cueSplitAtTime = function(e) {
				for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
			},
			e
		} (),
		Nt = function() {
			function e(e, t) {
				this.timelineController = void 0,
				this.trackName = void 0,
				this.startTime = void 0,
				this.endTime = void 0,
				this.screen = void 0,
				this.timelineController = e,
				this.trackName = t,
				this.startTime = null,
				this.endTime = null,
				this.screen = null
			}
			var t = e.prototype;
			return t.dispatchCue = function() {
				null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
			},
			t.newCue = function(e, t, r) { (null === this.startTime || this.startTime > e) && (this.startTime = e),
				this.endTime = t,
				this.screen = r,
				this.timelineController.createCaptionsTrack(this.trackName)
			},
			e
		} (),
		Bt = function(e, t, r) {
			return e.substr(r || 0, t.length) === t
		},
		Gt = function(e) {
			for (var t = 5381,
			r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
			return (t >>> 0).toString()
		},
		Kt = {
			parse: function(e, t, r, i, a, n) {
				var s, o = Object(Fe.b)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
				u = "00:00.000",
				d = 0,
				c = 0,
				h = 0,
				f = [],
				g = !0,
				p = !1,
				v = new yt;
				v.oncue = function(e) {
					var t = r[i],
					a = r.ccOffset;
					t && t.new && (void 0 !== c ? a = r.ccOffset = t.start: function(e, t, r) {
						var i = e[t],
						a = e[i.prevCC];
						if (!a || !a.new && i.new) return e.ccOffset = e.presentationOffset = i.start,
						void(i.new = !1);
						for (; a && a.new;) e.ccOffset += i.start - a.start,
						i.new = !1,
						a = e[(i = a).prevCC];
						e.presentationOffset = r
					} (r, i, h)),
					h && (a = h - r.presentationOffset),
					p && (e.startTime += a - c, e.endTime += a - c),
					e.id = Gt(e.startTime.toString()) + Gt(e.endTime.toString()) + Gt(e.text),
					e.text = decodeURIComponent(encodeURIComponent(e.text)),
					e.endTime > 0 && f.push(e)
				},
				v.onparsingerror = function(e) {
					s = e
				},
				v.onflush = function() {
					s && n ? n(s) : a(f)
				},
				o.forEach((function(e) {
					if (g) {
						if (Bt(e, "X-TIMESTAMP-MAP=")) {
							g = !1,
							p = !0,
							e.substr(16).split(",").forEach((function(e) {
								Bt(e, "LOCAL:") ? u = e.substr(6) : Bt(e, "MPEGTS:") && (d = parseInt(e.substr(7)))
							}));
							try {
								t + (9e4 * r[i].start || 0) < 0 && (t += 8589934592),
								d -= t,
								c = function(e) {
									var t = parseInt(e.substr( - 3)),
									r = parseInt(e.substr( - 6, 2)),
									i = parseInt(e.substr( - 9, 2)),
									a = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
									if (! (Object(l.a)(t) && Object(l.a)(r) && Object(l.a)(i) && Object(l.a)(a))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
									return t += 1e3 * r,
									t += 6e4 * i,
									t += 36e5 * a
								} (u) / 1e3,
								h = d / 9e4
							} catch(e) {
								p = !1,
								s = e
							}
							return
						}
						"" === e && (g = !1)
					}
					v.parse(e + "\n")
				})),
				v.flush()
			}
		};
		function jt(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
		function Ht(e, t) {
			return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
		}
		var Vt = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				if ((r = e.call(this, t, u.a.MEDIA_ATTACHING, u.a.MEDIA_DETACHING, u.a.FRAG_PARSING_USERDATA, u.a.FRAG_DECRYPTED, u.a.MANIFEST_LOADING, u.a.MANIFEST_LOADED, u.a.FRAG_LOADED, u.a.INIT_PTS_FOUND) || this).media = null, r.config = void 0, r.enabled = !0, r.Cues = void 0, r.textTracks = [], r.tracks = [], r.initPTS = [], r.unparsedVttFrags = [], r.cueRanges = [], r.captionsTracks = {},
				r.captionsProperties = void 0, r.cea608Parser = void 0, r.lastSn = -1, r.prevCC = -1, r.vttCCs = {
					ccOffset: 0,
					presentationOffset: 0,
					0 : {
						start: 0,
						prevCC: -1,
						new: !1
					}
				},
				r.hls = t, r.config = t.config, r.Cues = t.config.cueHandler, r.captionsProperties = {
					textTrack1: {
						label: r.config.captionsTextTrack1Label,
						languageCode: r.config.captionsTextTrack1LanguageCode
					},
					textTrack2: {
						label: r.config.captionsTextTrack2Label,
						languageCode: r.config.captionsTextTrack2LanguageCode
					},
					textTrack3: {
						label: r.config.captionsTextTrack3Label,
						languageCode: r.config.captionsTextTrack3LanguageCode
					},
					textTrack4: {
						label: r.config.captionsTextTrack4Label,
						languageCode: r.config.captionsTextTrack4LanguageCode
					}
				},
				r.config.enableCEA708Captions) {
					var i = new Nt(jt(r), "textTrack1"),
					a = new Nt(jt(r), "textTrack2"),
					n = new Nt(jt(r), "textTrack3"),
					s = new Nt(jt(r), "textTrack4");
					r.cea608Parser = new Ut(i, a, n, s)
				}
				return r
			}
			var n = a.prototype;
			return n.addCues = function(e, t, r, i) {
				for (var a, n, s, o, l = this.cueRanges,
				d = !1,
				c = l.length; c--;) {
					var h = l[c],
					f = (a = h[0], n = h[1], s = t, o = r, Math.min(n, o) - Math.max(a, s));
					if (f >= 0 && (h[0] = Math.min(h[0], t), h[1] = Math.max(h[1], r), d = !0, f / (r - t) > .5)) return
				}
				if (d || l.push([t, r]), this.config.renderTextTracksNatively) this.Cues.newCue(this.captionsTracks[e], t, r, i);
				else {
					var g = this.Cues.newCue(null, t, r, i);
					this.hls.trigger(u.a.CUES_PARSED, {
						type: "captions",
						cues: g,
						track: e
					})
				}
			},
			n.onInitPtsFound = function(e) {
				var t = this,
				r = e.frag,
				i = e.id,
				a = e.initPTS,
				n = this.unparsedVttFrags;
				"main" === i && (this.initPTS[r.cc] = a),
				n.length && (this.unparsedVttFrags = [], n.forEach((function(e) {
					t.onFragLoaded(e)
				})))
			},
			n.getExistingTrack = function(e) {
				var t = this.media;
				if (t) for (var r = 0; r < t.textTracks.length; r++) {
					var i = t.textTracks[r];
					if (i[e]) return i
				}
				return null
			},
			n.createCaptionsTrack = function(e) {
				var t = this.captionsProperties,
				r = this.captionsTracks,
				i = this.media;
				if (!r[e]) {
					var a = this.getExistingTrack(e);
					if (a) r[e] = a,
					Ne(r[e]),
					Ue(r[e], i);
					else {
						var n = t[e],
						s = n.label,
						o = n.languageCode,
						l = this.createTextTrack("captions", s, o);
						l && (l[e] = !0, r[e] = l)
					}
				}
			},
			n.createTextTrack = function(e, t, r) {
				var i = this.media;
				if (i) return i.addTextTrack(e, t, r)
			},
			n.destroy = function() {
				e.prototype.destroy.call(this)
			},
			n.onMediaAttaching = function(e) {
				this.media = e.media,
				this._cleanTracks()
			},
			n.onMediaDetaching = function() {
				var e = this.captionsTracks;
				Object.keys(e).forEach((function(t) {
					Ne(e[t]),
					delete e[t]
				}))
			},
			n.onManifestLoading = function() {
				this.lastSn = -1,
				this.prevCC = -1,
				this.vttCCs = {
					ccOffset: 0,
					presentationOffset: 0,
					0 : {
						start: 0,
						prevCC: -1,
						new: !1
					}
				},
				this._cleanTracks(),
				this.tracks = [],
				this.captionsTracks = {}
			},
			n._cleanTracks = function() {
				var e = this.media;
				if (e) {
					var t = e.textTracks;
					if (t) for (var r = 0; r < t.length; r++) Ne(t[r])
				}
			},
			n.onManifestLoaded = function(e) {
				var t = this;
				if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
					var r = e.subtitles || [],
					i = this.tracks && r && this.tracks.length === r.length;
					if (this.tracks = e.subtitles || [], this.config.renderTextTracksNatively) {
						var a = this.media ? this.media.textTracks: [];
						this.tracks.forEach((function(e, r) {
							var i;
							if (r < a.length) {
								for (var n = null,
								s = 0; s < a.length; s++) if (Ht(a[s], e)) {
									n = a[s];
									break
								}
								n && (i = n)
							}
							i || (i = t.createTextTrack("subtitles", e.name, e.lang)),
							e.
						default ? i.mode = t.hls.subtitleDisplay ? "showing": "hidden": i.mode = "disabled",
							t.textTracks.push(i)
						}))
					} else if (!i && this.tracks && this.tracks.length) {
						var n = this.tracks.map((function(e) {
							return {
								label: e.name,
								kind: e.type.toLowerCase(),
							default:
								e.
							default
							}
						}));
						this.hls.trigger(u.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
							tracks: n
						})
					}
				}
				this.config.enableCEA708Captions && e.captions && e.captions.forEach((function(e) {
					var r = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
					if (r) {
						var i = "textTrack" + r[1];
						t.captionsProperties[i].label = e.name,
						e.lang && (t.captionsProperties[i].languageCode = e.lang)
					}
				}))
			},
			n.onFragLoaded = function(e) {
				var t = e.frag,
				r = e.payload,
				i = this.cea608Parser,
				a = this.initPTS,
				n = this.lastSn,
				s = this.unparsedVttFrags;
				if ("main" === t.type) {
					var o = t.sn;
					t.sn !== n + 1 && i && i.reset(),
					this.lastSn = o
				} else if ("subtitle" === t.type) if (r.byteLength) {
					if (!Object(l.a)(a[t.cc])) return s.push(e),
					void(a.length && this.hls.trigger(u.a.SUBTITLE_FRAG_PROCESSED, {
						success: !1,
						frag: t
					}));
					var d = t.decryptdata;
					null != d && null != d.key && "AES-128" === d.method || this._parseVTTs(t, r)
				} else this.hls.trigger(u.a.SUBTITLE_FRAG_PROCESSED, {
					success: !1,
					frag: t
				})
			},
			n._parseVTTs = function(e, t) {
				var r = this,
				i = this.hls,
				a = this.prevCC,
				n = this.textTracks,
				s = this.vttCCs;
				s[e.cc] || (s[e.cc] = {
					start: e.start,
					prevCC: a,
					new: !0
				},
				this.prevCC = e.cc),
				Kt.parse(t, this.initPTS[e.cc], s, e.cc, (function(t) {
					if (r.config.renderTextTracksNatively) {
						var a = n[e.level];
						if ("disabled" === a.mode) return void i.trigger(u.a.SUBTITLE_FRAG_PROCESSED, {
							success: !1,
							frag: e
						});
						t.forEach((function(e) {
							if (!a.cues.getCueById(e.id)) try {
								if (a.addCue(e), !a.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
							} catch(r) {
								d.b.debug("Failed occurred on adding cues: " + r);
								var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
								t.id = e.id,
								a.addCue(t)
							}
						}))
					} else {
						var s = r.tracks[e.level].
					default ? "default": "subtitles" + e.level;
						i.trigger(u.a.CUES_PARSED, {
							type: "subtitles",
							cues: t,
							track: s
						})
					}
					i.trigger(u.a.SUBTITLE_FRAG_PROCESSED, {
						success: !0,
						frag: e
					})
				}), (function(t) {
					d.b.log("Failed to parse VTT cue: " + t),
					i.trigger(u.a.SUBTITLE_FRAG_PROCESSED, {
						success: !1,
						frag: e
					})
				}))
			},
			n.onFragDecrypted = function(e) {
				var t = e.frag,
				r = e.payload;
				if ("subtitle" === t.type) {
					if (!Object(l.a)(this.initPTS[t.cc])) return void this.unparsedVttFrags.push(e);
					this._parseVTTs(t, r)
				}
			},
			n.onFragParsingUserdata = function(e) {
				if (this.enabled && this.cea608Parser) for (var t = this.cea608Parser,
				r = 0; r < e.samples.length; r++) {
					var i = e.samples[r].bytes;
					if (i) {
						var a = this.extractCea608Data(i);
						t.addData(e.samples[r].pts, a[0], 1),
						t.addData(e.samples[r].pts, a[1], 3)
					}
				}
			},
			n.extractCea608Data = function(e) {
				for (var t = 31 & e[0], r = 2, i = [[], []], a = 0; a < t; a++) {
					var n = e[r++],
					s = 127 & e[r++],
					o = 127 & e[r++],
					l = 3 & n;
					0 === s && 0 === o || 0 != (4 & n) && (0 !== l && 1 !== l || (i[l].push(s), i[l].push(o)))
				}
				return i
			},
			a
		} (h);
		function Yt(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		function Wt(e) {
			for (var t = [], r = 0; r < e.length; r++) {
				var i = e[r];
				"subtitles" === i.kind && i.label && t.push(e[r])
			}
			return t
		}
		var qt = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				return (r = e.call(this, t, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHING, u.a.MANIFEST_LOADED, u.a.SUBTITLE_TRACK_LOADED) || this).tracks = [],
				r.trackId = -1,
				r.media = null,
				r.stopped = !0,
				r.subtitleDisplay = !0,
				r.queuedDefaultTrack = null,
				r
			}
			var n, s, o, c = a.prototype;
			return c.destroy = function() {
				h.prototype.destroy.call(this)
			},
			c.onMediaAttached = function(e) {
				var t = this;
				this.media = e.media,
				this.media && (Object(l.a)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = null), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function() {
					t.trackChangeListener()
				}), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
			},
			c.onMediaDetaching = function() {
				this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), Object(l.a)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack), Wt(this.media.textTracks).forEach((function(e) {
					Ne(e)
				})), this.subtitleTrack = -1, this.media = null)
			},
			c.onManifestLoaded = function(e) {
				var t = this,
				r = e.subtitles || [];
				this.tracks = r,
				this.hls.trigger(u.a.SUBTITLE_TRACKS_UPDATED, {
					subtitleTracks: r
				}),
				r.forEach((function(e) {
					e.
				default && (t.media ? t.subtitleTrack = e.id: t.queuedDefaultTrack = e.id)
				}))
			},
			c.onSubtitleTrackLoaded = function(e) {
				var t = this,
				r = e.id,
				i = e.details,
				a = this.trackId,
				n = this.tracks,
				s = n[a];
				if (r >= n.length || r !== a || !s || this.stopped) this._clearReloadTimer();
				else if (d.b.log("subtitle track " + r + " loaded"), i.live) {
					var o = ae(s.details, i, e.stats.trequest);
					d.b.log("Reloading live subtitle playlist in " + o + "ms"),
					this.timer = setTimeout((function() {
						t._loadCurrentTrack()
					}), o)
				} else this._clearReloadTimer()
			},
			c.startLoad = function() {
				this.stopped = !1,
				this._loadCurrentTrack()
			},
			c.stopLoad = function() {
				this.stopped = !0,
				this._clearReloadTimer()
			},
			c._clearReloadTimer = function() {
				this.timer && (clearTimeout(this.timer), this.timer = null)
			},
			c._loadCurrentTrack = function() {
				var e = this.trackId,
				t = this.tracks,
				r = this.hls,
				i = t[e];
				e < 0 || !i || i.details && !i.details.live || (d.b.log("Loading subtitle track " + e), r.trigger(u.a.SUBTITLE_TRACK_LOADING, {
					url: i.url,
					id: e
				}))
			},
			c._toggleTrackModes = function(e) {
				var t = this.media,
				r = this.subtitleDisplay,
				i = this.trackId;
				if (t) {
					var a = Wt(t.textTracks);
					if ( - 1 === e)[].slice.call(a).forEach((function(e) {
						e.mode = "disabled"
					}));
					else {
						var n = a[i];
						n && (n.mode = "disabled")
					}
					var s = a[e];
					s && (s.mode = r ? "showing": "hidden")
				}
			},
			c._setSubtitleTrackInternal = function(e) {
				var t = this.hls,
				r = this.tracks; ! Object(l.a)(e) || e < -1 || e >= r.length || (this.trackId = e, d.b.log("Switching to subtitle track " + e), t.trigger(u.a.SUBTITLE_TRACK_SWITCH, {
					id: e
				}), this._loadCurrentTrack())
			},
			c._onTextTracksChanged = function() {
				if (this.media) {
					for (var e = -1,
					t = Wt(this.media.textTracks), r = 0; r < t.length; r++) if ("hidden" === t[r].mode) e = r;
					else if ("showing" === t[r].mode) {
						e = r;
						break
					}
					this.subtitleTrack = e
				}
			},
			n = a,
			(s = [{
				key: "subtitleTracks",
				get: function() {
					return this.tracks
				}
			},
			{
				key: "subtitleTrack",
				get: function() {
					return this.trackId
				},
				set: function(e) {
					this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e))
				}
			}]) && Yt(n.prototype, s),
			o && Yt(n, o),
			a
		} (h),
		zt = r(7);
		function Xt(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
		var Qt, $t = window.performance,
		Jt = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t, r) {
				var i;
				return (i = e.call(this, t, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHING, u.a.ERROR, u.a.KEY_LOADED, u.a.FRAG_LOADED, u.a.SUBTITLE_TRACKS_UPDATED, u.a.SUBTITLE_TRACK_SWITCH, u.a.SUBTITLE_TRACK_LOADED, u.a.SUBTITLE_FRAG_PROCESSED, u.a.LEVEL_UPDATED) || this).fragmentTracker = r,
				i.config = t.config,
				i.state = pe,
				i.tracks = [],
				i.tracksBuffered = [],
				i.currentTrackId = -1,
				i.decrypter = new zt.a(t, t.config),
				i.lastAVStart = 0,
				i._onMediaSeeking = i.onMediaSeeking.bind(Xt(i)),
				i
			}
			var n = a.prototype;
			return n.onSubtitleFragProcessed = function(e) {
				var t = e.frag,
				r = e.success;
				if (this.fragPrevious = t, this.state = me, r) {
					var i = this.tracksBuffered[this.currentTrackId];
					if (i) {
						for (var a, n = t.start,
						s = 0; s < i.length; s++) if (n >= i[s].start && n <= i[s].end) {
							a = i[s];
							break
						}
						var o = t.start + t.duration;
						a ? a.end = o: (a = {
							start: n,
							end: o
						},
						i.push(a))
					}
				}
			},
			n.onMediaAttached = function(e) {
				var t = e.media;
				this.media = t,
				t.addEventListener("seeking", this._onMediaSeeking),
				this.state = me
			},
			n.onMediaDetaching = function() {
				var e = this;
				this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking), this.fragmentTracker.removeAllFragments(), this.currentTrackId = -1, this.tracks.forEach((function(t) {
					e.tracksBuffered[t.id] = []
				})), this.media = null, this.state = pe)
			},
			n.onError = function(e) {
				var t = e.frag;
				t && "subtitle" === t.type && (this.state = me)
			},
			n.onSubtitleTracksUpdated = function(e) {
				var t = this;
				d.b.log("subtitle tracks updated"),
				this.tracksBuffered = [],
				this.tracks = e.subtitleTracks,
				this.tracks.forEach((function(e) {
					t.tracksBuffered[e.id] = []
				}))
			},
			n.onSubtitleTrackSwitch = function(e) {
				if (this.currentTrackId = e.id, this.tracks && this.tracks.length && -1 !== this.currentTrackId) {
					var t = this.tracks[this.currentTrackId];
					t && t.details && this.setInterval(500)
				} else this.clearInterval()
			},
			n.onSubtitleTrackLoaded = function(e) {
				var t = e.id,
				r = e.details,
				i = this.currentTrackId,
				a = this.tracks,
				n = a[i];
				t >= a.length || t !== i || !n || (r.live &&
				function(e, t, r) {
					void 0 === r && (r = 0);
					var i = -1;
					ie(e, t, (function(e, t, r) {
						t.start = e.start,
						i = r
					}));
					var a = t.fragments;
					if (i < 0) a.forEach((function(e) {
						e.start += r
					}));
					else for (var n = i + 1; n < a.length; n++) a[n].start = a[n - 1].start + a[n - 1].duration
				} (n.details, r, this.lastAVStart), n.details = r, this.setInterval(500))
			},
			n.onKeyLoaded = function() {
				this.state === be && (this.state = me)
			},
			n.onFragLoaded = function(e) {
				var t = this.fragCurrent,
				r = e.frag.decryptdata,
				i = e.frag,
				a = this.hls;
				if (this.state === Te && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
					var n = $t.now();
					this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, (function(e) {
						var t = $t.now();
						a.trigger(u.a.FRAG_DECRYPTED, {
							frag: i,
							payload: e,
							stats: {
								tstart: n,
								tdecrypt: t
							}
						})
					}))
				}
			},
			n.onLevelUpdated = function(e) {
				var t = e.details.fragments;
				this.lastAVStart = t.length ? t[0].start: 0
			},
			n.doTick = function() {
				if (this.media) switch (this.state) {
				case me:
					var e = this.config,
					t = this.currentTrackId,
					r = this.fragmentTracker,
					i = this.media,
					a = this.tracks;
					if (!a || !a[t] || !a[t].details) break;
					var n, s = e.maxBufferHole,
					o = e.maxFragLookUpTolerance,
					l = Math.min(e.maxBufferLength, e.maxMaxBufferLength),
					c = H.bufferedInfo(this._getBuffered(), i.currentTime, s),
					h = c.end,
					f = c.len,
					g = a[t].details,
					p = g.fragments,
					v = p.length,
					m = p[v - 1].start + p[v - 1].duration;
					if (f > l) return;
					var y = this.fragPrevious;
					h < m ? (y && g.hasProgramDateTime && (n = le(p, y.endProgramDateTime, o)), n || (n = ue(y, p, h, o))) : n = p[v - 1],
					n && n.encrypted ? (d.b.log("Loading key for " + n.sn), this.state = be, this.hls.trigger(u.a.KEY_LOADING, {
						frag: n
					})) : n && r.getState(n) === U && (this.fragCurrent = n, this.state = Te, this.hls.trigger(u.a.FRAG_LOADING, {
						frag: n
					}))
				} else this.state = me
			},
			n.stopLoad = function() {
				this.lastAVStart = 0,
				e.prototype.stopLoad.call(this)
			},
			n._getBuffered = function() {
				return this.tracksBuffered[this.currentTrackId] || []
			},
			n.onMediaSeeking = function() {
				this.fragPrevious = null
			},
			a
		} (Oe); !
		function(e) {
			e.WIDEVINE = "com.widevine.alpha",
			e.PLAYREADY = "com.microsoft.playready"
		} (Qt || (Qt = {}));
		var Zt = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;
		function er(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		function tr(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(e);
				t && (i = i.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))),
				r.push.apply(r, i)
			}
			return r
		}
		function rr(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r,
			e
		}
		var ir = function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {};
				t % 2 ? tr(Object(r), !0).forEach((function(t) {
					rr(e, t, r[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tr(Object(r)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				}))
			}
			return e
		} ({
			autoStartLoad: !0,
			startPosition: -1,
			defaultAudioCodec: void 0,
			debug: !1,
			capLevelOnFPSDrop: !1,
			capLevelToPlayerSize: !1,
			initialLiveManifestSize: 1,
			maxBufferLength: 30,
			maxBufferSize: 6e7,
			maxBufferHole: .5,
			lowBufferWatchdogPeriod: .5,
			highBufferWatchdogPeriod: 3,
			nudgeOffset: .1,
			nudgeMaxRetry: 3,
			maxFragLookUpTolerance: .25,
			liveSyncDurationCount: 3,
			liveMaxLatencyDurationCount: 1 / 0,
			liveSyncDuration: void 0,
			liveMaxLatencyDuration: void 0,
			liveDurationInfinity: !1,
			liveBackBufferLength: 1 / 0,
			maxMaxBufferLength: 600,
			enableWorker: !0,
			enableSoftwareAES: !0,
			manifestLoadingTimeOut: 1e4,
			manifestLoadingMaxRetry: 1,
			manifestLoadingRetryDelay: 1e3,
			manifestLoadingMaxRetryTimeout: 64e3,
			startLevel: void 0,
			levelLoadingTimeOut: 1e4,
			levelLoadingMaxRetry: 4,
			levelLoadingRetryDelay: 1e3,
			levelLoadingMaxRetryTimeout: 64e3,
			fragLoadingTimeOut: 2e4,
			fragLoadingMaxRetry: 6,
			fragLoadingRetryDelay: 1e3,
			fragLoadingMaxRetryTimeout: 64e3,
			startFragPrefetch: !1,
			fpsDroppedMonitoringPeriod: 5e3,
			fpsDroppedMonitoringThreshold: .2,
			appendErrorMaxRetry: 3,
			loader: it,
			fLoader: void 0,
			pLoader: void 0,
			xhrSetup: void 0,
			licenseXhrSetup: void 0,
			abrController: Ye,
			bufferController: qe,
			capLevelController: Xe,
			fpsController: $e,
			stretchShortVideoTrack: !1,
			maxAudioFramesDrift: 1,
			forceKeyFrameOnDiscontinuity: !0,
			abrEwmaFastLive: 3,
			abrEwmaSlowLive: 9,
			abrEwmaFastVoD: 3,
			abrEwmaSlowVoD: 9,
			abrEwmaDefaultEstimate: 5e5,
			abrBandWidthFactor: .95,
			abrBandWidthUpFactor: .7,
			abrMaxWithRealBitrate: !1,
			maxStarvationDelay: 4,
			maxLoadingDelay: 4,
			minAutoBitrate: 0,
			emeEnabled: !1,
			widevineLicenseUrl: void 0,
			requestMediaKeySystemAccessFunc: Zt
		},
		{
			cueHandler: i,
			enableCEA708Captions: !0,
			enableWebVTT: !0,
			captionsTextTrack1Label: "English",
			captionsTextTrack1LanguageCode: "en",
			captionsTextTrack2Label: "Spanish",
			captionsTextTrack2LanguageCode: "es",
			captionsTextTrack3Label: "Unknown CC",
			captionsTextTrack3LanguageCode: "",
			captionsTextTrack4Label: "Unknown CC",
			captionsTextTrack4LanguageCode: "",
			renderTextTracksNatively: !0
		},
		{
			subtitleStreamController: Jt,
			subtitleTrackController: qt,
			timelineController: Vt,
			audioStreamController: lt,
			audioTrackController: nt,
			emeController: function(e) {
				var t, r;
				r = e,
				(t = a).prototype = Object.create(r.prototype),
				t.prototype.constructor = t,
				t.__proto__ = r;
				var i;
				i = a;
				function a(t) {
					var r;
					return (r = e.call(this, t, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHED, u.a.MANIFEST_PARSED) || this)._widevineLicenseUrl = void 0,
					r._licenseXhrSetup = void 0,
					r._emeEnabled = void 0,
					r._requestMediaKeySystemAccess = void 0,
					r._config = void 0,
					r._mediaKeysList = [],
					r._media = null,
					r._hasSetMediaKeys = !1,
					r._requestLicenseFailureCount = 0,
					r.mediaKeysPromise = null,
					r._onMediaEncrypted = function(e) {
						if (d.b.log('Media is encrypted using "' + e.initDataType + '" init data type'), !r.mediaKeysPromise) return d.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),
						void r.hls.trigger(u.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_NO_KEYS,
							fatal: !0
						});
						var t = function(t) {
							r._media && (r._attemptSetMediaKeys(t), r._generateRequestWithPreferredKeySession(e.initDataType, e.initData))
						};
						r.mediaKeysPromise.then(t).
						catch(t)
					},
					r._config = t.config,
					r._widevineLicenseUrl = r._config.widevineLicenseUrl,
					r._licenseXhrSetup = r._config.licenseXhrSetup,
					r._emeEnabled = r._config.emeEnabled,
					r._requestMediaKeySystemAccess = r._config.requestMediaKeySystemAccessFunc,
					r
				}
				var n, s, l, c = a.prototype;
				return c.getLicenseServerUrl = function(e) {
					switch (e) {
					case Qt.WIDEVINE:
						if (!this._widevineLicenseUrl) break;
						return this._widevineLicenseUrl
					}
					throw new Error('no license server URL configured for key-system "' + e + '"')
				},
				c._attemptKeySystemAccess = function(e, t, r) {
					var i = this,
					a = function(e, t, r) {
						switch (e) {
						case Qt.WIDEVINE:
							return function(e, t) {
								var r = {
									videoCapabilities: []
								};
								return t.forEach((function(e) {
									r.videoCapabilities.push({
										contentType: 'video/mp4; codecs="' + e + '"'
									})
								})),
								[r]
							} (0, r);
						default:
							throw new Error("Unknown key-system: " + e)
						}
					} (e, 0, r);
					d.b.log("Requesting encrypted media key-system access");
					var n = this.requestMediaKeySystemAccess(e, a);
					this.mediaKeysPromise = n.then((function(t) {
						return i._onMediaKeySystemAccessObtained(e, t)
					})),
					n.
					catch((function(t) {
						d.b.error('Failed to obtain key-system "' + e + '" access:', t)
					}))
				},
				c._onMediaKeySystemAccessObtained = function(e, t) {
					var r = this;
					d.b.log('Access for key-system "' + e + '" obtained');
					var i = {
						mediaKeysSessionInitialized: !1,
						mediaKeySystemAccess: t,
						mediaKeySystemDomain: e
					};
					this._mediaKeysList.push(i);
					var a = Promise.resolve().then((function() {
						return t.createMediaKeys()
					})).then((function(t) {
						return i.mediaKeys = t,
						d.b.log('Media-keys created for key-system "' + e + '"'),
						r._onMediaKeysCreated(),
						t
					}));
					return a.
					catch((function(e) {
						d.b.error("Failed to create media-keys:", e)
					})),
					a
				},
				c._onMediaKeysCreated = function() {
					var e = this;
					this._mediaKeysList.forEach((function(t) {
						t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
					}))
				},
				c._onNewMediaKeySession = function(e) {
					var t = this;
					d.b.log("New key-system session " + e.sessionId),
					e.addEventListener("message", (function(r) {
						t._onKeySessionMessage(e, r.message)
					}), !1)
				},
				c._onKeySessionMessage = function(e, t) {
					d.b.log("Got EME message event, creating license request"),
					this._requestLicense(t, (function(t) {
						d.b.log("Received license data (length: " + (t ? t.byteLength: t) + "), updating key-session"),
						e.update(t)
					}))
				},
				c._attemptSetMediaKeys = function(e) {
					if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
					if (!this._hasSetMediaKeys) {
						var t = this._mediaKeysList[0];
						if (!t || !t.mediaKeys) return d.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
						void this.hls.trigger(u.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_NO_KEYS,
							fatal: !0
						});
						d.b.log("Setting keys for encrypted media"),
						this._media.setMediaKeys(t.mediaKeys),
						this._hasSetMediaKeys = !0
					}
				},
				c._generateRequestWithPreferredKeySession = function(e, t) {
					var r = this,
					i = this._mediaKeysList[0];
					if (!i) return d.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
					void this.hls.trigger(u.a.ERROR, {
						type: o.b.KEY_SYSTEM_ERROR,
						details: o.a.KEY_SYSTEM_NO_ACCESS,
						fatal: !0
					});
					if (i.mediaKeysSessionInitialized) d.b.warn("Key-Session already initialized but requested again");
					else {
						var a = i.mediaKeysSession;
						if (!a) return d.b.error("Fatal: Media is encrypted but no key-session existing"),
						void this.hls.trigger(u.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_NO_SESSION,
							fatal: !0
						});
						if (!t) return d.b.warn("Fatal: initData required for generating a key session is null"),
						void this.hls.trigger(u.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_NO_INIT_DATA,
							fatal: !0
						});
						d.b.log('Generating key-session request for "' + e + '" init data type'),
						i.mediaKeysSessionInitialized = !0,
						a.generateRequest(e, t).then((function() {
							d.b.debug("Key-session generation succeeded")
						})).
						catch((function(e) {
							d.b.error("Error generating key-session request:", e),
							r.hls.trigger(u.a.ERROR, {
								type: o.b.KEY_SYSTEM_ERROR,
								details: o.a.KEY_SYSTEM_NO_SESSION,
								fatal: !1
							})
						}))
					}
				},
				c._createLicenseXhr = function(e, t, r) {
					var i = new XMLHttpRequest,
					a = this._licenseXhrSetup;
					try {
						if (a) try {
							a(i, e)
						} catch(t) {
							i.open("POST", e, !0),
							a(i, e)
						}
						i.readyState || i.open("POST", e, !0)
					} catch(e) {
						throw new Error("issue setting up KeySystem license XHR " + e)
					}
					return i.responseType = "arraybuffer",
					i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r),
					i
				},
				c._onLicenseRequestReadyStageChange = function(e, t, r, i) {
					switch (e.readyState) {
					case 4:
						if (200 === e.status) this._requestLicenseFailureCount = 0,
						d.b.log("License request succeeded"),
						"arraybuffer" !== e.responseType && d.b.warn("xhr response type was not set to the expected arraybuffer for license request"),
						i(e.response);
						else {
							if (d.b.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(u.a.ERROR, {
								type: o.b.KEY_SYSTEM_ERROR,
								details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
								fatal: !0
							});
							var a = 3 - this._requestLicenseFailureCount + 1;
							d.b.warn("Retrying license request, " + a + " attempts left"),
							this._requestLicense(r, i)
						}
					}
				},
				c._generateLicenseRequestChallenge = function(e, t) {
					switch (e.mediaKeySystemDomain) {
					case Qt.WIDEVINE:
						return t
					}
					throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
				},
				c._requestLicense = function(e, t) {
					d.b.log("Requesting content license for key-system");
					var r = this._mediaKeysList[0];
					if (!r) return d.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
					void this.hls.trigger(u.a.ERROR, {
						type: o.b.KEY_SYSTEM_ERROR,
						details: o.a.KEY_SYSTEM_NO_ACCESS,
						fatal: !0
					});
					try {
						var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
						a = this._createLicenseXhr(i, e, t);
						d.b.log("Sending license request to URL: " + i);
						var n = this._generateLicenseRequestChallenge(r, e);
						a.send(n)
					} catch(e) {
						d.b.error("Failure requesting DRM license: " + e),
						this.hls.trigger(u.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
							fatal: !0
						})
					}
				},
				c.onMediaAttached = function(e) {
					if (this._emeEnabled) {
						var t = e.media;
						this._media = t,
						t.addEventListener("encrypted", this._onMediaEncrypted)
					}
				},
				c.onMediaDetached = function() {
					this._media && (this._media.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null)
				},
				c.onManifestParsed = function(e) {
					if (this._emeEnabled) {
						var t = e.levels.map((function(e) {
							return e.audioCodec
						})),
						r = e.levels.map((function(e) {
							return e.videoCodec
						}));
						this._attemptKeySystemAccess(Qt.WIDEVINE, t, r)
					}
				},
				n = a,
				(s = [{
					key: "requestMediaKeySystemAccess",
					get: function() {
						if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
						return this._requestMediaKeySystemAccess
					}
				}]) && er(n.prototype, s),
				l && er(n, l),
				a
			} (h)
		});
		function ar(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(e);
				t && (i = i.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))),
				r.push.apply(r, i)
			}
			return r
		}
		function nr(e, t, r) {
			return t in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r,
			e
		}
		function sr(e, t) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r];
				i.enumerable = i.enumerable || !1,
				i.configurable = !0,
				"value" in i && (i.writable = !0),
				Object.defineProperty(e, i.key, i)
			}
		}
		function or(e, t, r) {
			return t && sr(e.prototype, t),
			r && sr(e, r),
			e
		}
		function lr(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
		var ur = function(e) {
			var t, r;
			r = e,
			(t = a).prototype = Object.create(r.prototype),
			t.prototype.constructor = t,
			t.__proto__ = r;
			var i;
			i = a;
			function a(t) {
				var r;
				void 0 === t && (t = {}),
				(r = e.call(this) || this).config = void 0,
				r._autoLevelCapping = void 0,
				r.abrController = void 0,
				r.capLevelController = void 0,
				r.levelController = void 0,
				r.streamController = void 0,
				r.networkControllers = void 0,
				r.audioTrackController = void 0,
				r.subtitleTrackController = void 0,
				r.emeController = void 0,
				r.coreComponents = void 0,
				r.media = null,
				r.url = null;
				var i = a.DefaultConfig;
				if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
				r.config = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? ar(Object(r), !0).forEach((function(t) {
							nr(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ar(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				} ({},
				i, {},
				t);
				var n = lr(r).config;
				if (void 0 !== n.liveMaxLatencyDurationCount && n.liveMaxLatencyDurationCount <= n.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
				if (void 0 !== n.liveMaxLatencyDuration && (void 0 === n.liveSyncDuration || n.liveMaxLatencyDuration <= n.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
				Object(d.a)(n.debug),
				r._autoLevelCapping = -1;
				var s = r.abrController = new n.abrController(lr(r)),
				o = new n.bufferController(lr(r)),
				l = r.capLevelController = new n.capLevelController(lr(r)),
				u = new n.fpsController(lr(r)),
				c = new P(lr(r)),
				h = new M(lr(r)),
				f = new F(lr(r)),
				g = new Be(lr(r)),
				p = r.levelController = new Me(lr(r)),
				v = new K(lr(r)),
				m = [p, r.streamController = new xe(lr(r), v)],
				y = n.audioStreamController;
				y && m.push(new y(lr(r), v)),
				r.networkControllers = m;
				var b = [c, h, f, s, o, l, u, g, v];
				if (y = n.audioTrackController) {
					var T = new y(lr(r));
					r.audioTrackController = T,
					b.push(T)
				}
				if (y = n.subtitleTrackController) {
					var E = new y(lr(r));
					r.subtitleTrackController = E,
					m.push(E)
				}
				if (y = n.emeController) {
					var S = new y(lr(r));
					r.emeController = S,
					b.push(S)
				}
				return (y = n.subtitleStreamController) && m.push(new y(lr(r), v)),
				(y = n.timelineController) && b.push(new y(lr(r))),
				r.coreComponents = b,
				r
			}
			a.isSupported = function() {
				return function() {
					var e = q();
					if (!e) return ! 1;
					var t = self.SourceBuffer || self.WebKitSourceBuffer,
					r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
					return !! r && !!i
				} ()
			},
			or(a, null, [{
				key: "version",
				get: function() {}
			},
			{
				key: "Events",
				get: function() {
					return u.a
				}
			},
			{
				key: "ErrorTypes",
				get: function() {
					return o.b
				}
			},
			{
				key: "ErrorDetails",
				get: function() {
					return o.a
				}
			},
			{
				key: "DefaultConfig",
				get: function() {
					return a.defaultConfig ? a.defaultConfig: ir
				},
				set: function(e) {
					a.defaultConfig = e
				}
			}]);
			var n = a.prototype;
			return n.destroy = function() {
				d.b.log("destroy"),
				this.trigger(u.a.DESTROYING),
				this.detachMedia(),
				this.coreComponents.concat(this.networkControllers).forEach((function(e) {
					e.destroy()
				})),
				this.url = null,
				this.removeAllListeners(),
				this._autoLevelCapping = -1
			},
			n.attachMedia = function(e) {
				d.b.log("attachMedia"),
				this.media = e,
				this.trigger(u.a.MEDIA_ATTACHING, {
					media: e
				})
			},
			n.detachMedia = function() {
				d.b.log("detachMedia"),
				this.trigger(u.a.MEDIA_DETACHING),
				this.media = null
			},
			n.loadSource = function(e) {
				e = s.buildAbsoluteURL(window.location.href, e, {
					alwaysNormalize: !0
				}),
				d.b.log("loadSource:" + e),
				this.url = e,
				this.trigger(u.a.MANIFEST_LOADING, {
					url: e
				})
			},
			n.startLoad = function(e) {
				void 0 === e && (e = -1),
				d.b.log("startLoad(" + e + ")"),
				this.networkControllers.forEach((function(t) {
					t.startLoad(e)
				}))
			},
			n.stopLoad = function() {
				d.b.log("stopLoad"),
				this.networkControllers.forEach((function(e) {
					e.stopLoad()
				}))
			},
			n.swapAudioCodec = function() {
				d.b.log("swapAudioCodec"),
				this.streamController.swapAudioCodec()
			},
			n.recoverMediaError = function() {
				d.b.log("recoverMediaError");
				var e = this.media;
				this.detachMedia(),
				e && this.attachMedia(e)
			},
			n.removeLevel = function(e, t) {
				void 0 === t && (t = 0),
				this.levelController.removeLevel(e, t)
			},
			or(a, [{
				key: "levels",
				get: function() {
					return this.levelController.levels
				}
			},
			{
				key: "currentLevel",
				get: function() {
					return this.streamController.currentLevel
				},
				set: function(e) {
					d.b.log("set currentLevel:" + e),
					this.loadLevel = e,
					this.streamController.immediateLevelSwitch()
				}
			},
			{
				key: "nextLevel",
				get: function() {
					return this.streamController.nextLevel
				},
				set: function(e) {
					d.b.log("set nextLevel:" + e),
					this.levelController.manualLevel = e,
					this.streamController.nextLevelSwitch()
				}
			},
			{
				key: "loadLevel",
				get: function() {
					return this.levelController.level
				},
				set: function(e) {
					d.b.log("set loadLevel:" + e),
					this.levelController.manualLevel = e
				}
			},
			{
				key: "nextLoadLevel",
				get: function() {
					return this.levelController.nextLoadLevel
				},
				set: function(e) {
					this.levelController.nextLoadLevel = e
				}
			},
			{
				key: "firstLevel",
				get: function() {
					return Math.max(this.levelController.firstLevel, this.minAutoLevel)
				},
				set: function(e) {
					d.b.log("set firstLevel:" + e),
					this.levelController.firstLevel = e
				}
			},
			{
				key: "startLevel",
				get: function() {
					return this.levelController.startLevel
				},
				set: function(e) {
					d.b.log("set startLevel:" + e),
					-1 !== e && (e = Math.max(e, this.minAutoLevel)),
					this.levelController.startLevel = e
				}
			},
			{
				key: "capLevelToPlayerSize",
				set: function(e) {
					var t = !!e;
					t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
				}
			},
			{
				key: "autoLevelCapping",
				get: function() {
					return this._autoLevelCapping
				},
				set: function(e) {
					d.b.log("set autoLevelCapping:" + e),
					this._autoLevelCapping = e
				}
			},
			{
				key: "bandwidthEstimate",
				get: function() {
					var e = this.abrController._bwEstimator;
					return e ? e.getEstimate() : NaN
				}
			},
			{
				key: "autoLevelEnabled",
				get: function() {
					return - 1 === this.levelController.manualLevel
				}
			},
			{
				key: "manualLevel",
				get: function() {
					return this.levelController.manualLevel
				}
			},
			{
				key: "minAutoLevel",
				get: function() {
					for (var e = this.levels,
					t = this.config.minAutoBitrate,
					r = e ? e.length: 0, i = 0; i < r; i++) {
						if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t) return i
					}
					return 0
				}
			},
			{
				key: "maxAutoLevel",
				get: function() {
					var e = this.levels,
					t = this.autoLevelCapping;
					return - 1 === t && e && e.length ? e.length - 1 : t
				}
			},
			{
				key: "nextAutoLevel",
				get: function() {
					return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
				},
				set: function(e) {
					this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
				}
			},
			{
				key: "audioTracks",
				get: function() {
					var e = this.audioTrackController;
					return e ? e.audioTracks: []
				}
			},
			{
				key: "audioTrack",
				get: function() {
					var e = this.audioTrackController;
					return e ? e.audioTrack: -1
				},
				set: function(e) {
					var t = this.audioTrackController;
					t && (t.audioTrack = e)
				}
			},
			{
				key: "liveSyncPosition",
				get: function() {
					return this.streamController.liveSyncPosition
				}
			},
			{
				key: "subtitleTracks",
				get: function() {
					var e = this.subtitleTrackController;
					return e ? e.subtitleTracks: []
				}
			},
			{
				key: "subtitleTrack",
				get: function() {
					var e = this.subtitleTrackController;
					return e ? e.subtitleTrack: -1
				},
				set: function(e) {
					var t = this.subtitleTrackController;
					t && (t.subtitleTrack = e)
				}
			},
			{
				key: "subtitleDisplay",
				get: function() {
					var e = this.subtitleTrackController;
					return !! e && e.subtitleDisplay
				},
				set: function(e) {
					var t = this.subtitleTrackController;
					t && (t.subtitleDisplay = e)
				}
			}]),
			a
		} (X);
		ur.defaultConfig = void 0
	}]).
default
}));
