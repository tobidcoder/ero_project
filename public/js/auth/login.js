(window.webpackJsonp = window.webpackJsonp || []).push([[27], {
    "7xKR": function (t, e, o) {
        "use strict";
        o.r(e);
        var s = {
            data: function () {
                return {
                    loginForm: new Form({email_or_username: "", password: "", mobile: "", otp: ""}, !1),
                    login_with_otp: !1,
                    otp_generated: !1
                }
            }, components: {guestFooter: o("ZuF2").a}, mounted: function () {
                helper.showDemoNotification(["login", "login_with_different_role"])
            }, methods: {
                otpLogin: function (t) {
                    this.login_with_otp = t
                }, process: function () {
                    this.login_with_otp ? this.otp_generated ? this.processOTP() : this.submitOTP() : this.submit()
                }, submitOTP: function () {
                    var t = this, e = this.$loading.show();
                    this.loginForm.post("/api/auth/login/otp").then((function (o) {
                        t.otp_generated = !0, toastr.success(o.message), e.hide()
                    })).catch((function (t) {
                        e.hide(), helper.showErrorMsg(t)
                    }))
                }, processOTP: function () {
                    var t = this, e = this.$loading.show();
                    this.loginForm.post("/api/auth/login/otp").then((function (o) {
                        t.$cookie.set("auth_token", o.token, 1), axios.defaults.headers.common.Authorization = "Bearer " + o.token, t.$store.dispatch("setConfig", o.config), t.$store.dispatch("setAuthUserDetail", {
                            id: o.user.id,
                            email: o.user.email,
                            username: o.user.username,
                            roles: o.user.user_roles,
                            permissions: o.user.user_permissions,
                            two_factor_code: o.user.two_factor_code,
                            color_theme: o.user.user_preference.color_theme || t.getConfig("color_theme"),
                            locale: o.user.user_preference.locale || t.getConfig("locale"),
                            direction: o.user.user_preference.direction || t.getConfig("direction"),
                            sidebar: o.user.user_preference.sidebar || t.getConfig("sidebar")
                        }), t.$store.dispatch("setAcademicSession", o.academic_sessions), t.$store.dispatch("setDefaultAcademicSession", o.default_academic_session), toastr.success(o.message);
                        var s = o.reload ? "/dashboard?reload=1" : "/dashboard";
                        o.user.roles.find((function (t) {
                            return "admin" == t.name
                        })) && helper.getConfig("setup_wizard") && (s = "/setup"), t.$router.push(s), e.hide()
                    })).catch((function (t) {
                        e.hide(), helper.showErrorMsg(t)
                    }))
                }, submit: function () {
                    var t = this, e = this.$loading.show();
                    this.loginForm.post("/api/auth/login").then((function (o) {
                        if (t.$cookie.set("auth_token", o.token, 1), axios.defaults.headers.common.Authorization = "Bearer " + o.token, t.$store.dispatch("setConfig", o.config), t.$store.dispatch("setAuthUserDetail", {
                            id: o.user.id,
                            email: o.user.email,
                            username: o.user.username,
                            roles: o.user.user_roles,
                            permissions: o.user.user_permissions,
                            two_factor_code: o.user.two_factor_code,
                            color_theme: o.user.user_preference.color_theme || t.getConfig("color_theme"),
                            locale: o.user.user_preference.locale || t.getConfig("locale"),
                            direction: o.user.user_preference.direction || t.getConfig("direction"),
                            sidebar: o.user.user_preference.sidebar || t.getConfig("sidebar")
                        }), t.$store.dispatch("setAcademicSession", o.academic_sessions), t.$store.dispatch("setDefaultAcademicSession", o.default_academic_session), toastr.success(o.message), helper.getConfig("two_factor_security")) t.$router.push("/auth/security"); else {
                            var s = o.reload ? "/dashboard?reload=1" : "/dashboard";
                            o.user.roles.find((function (t) {
                                return "admin" == t.name
                            })) && helper.getConfig("setup_wizard") && (s = "/setup"), t.$store.dispatch("resetTwoFactorCode"), t.$router.push(s)
                        }
                        e.hide()
                    })).catch((function (t) {
                        e.hide(), helper.showErrorMsg(t)
                    }))
                }, loginAs: function (t) {
                    this.loginForm.email_or_username = t + "@" + t + ".com", this.loginForm.password = "password", this.submit()
                }, getConfig: function (t) {
                    return helper.getConfig(t)
                }
            }, computed: {
                getLogo: function () {
                    return helper.getLogo()
                }
            }
        }, r = o("KHd+"), n = Object(r.a)(s, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("section", {attrs: {id: "wrapper"}}, [o("div", {staticClass: "login-register guest-page"}, [o("div", {staticClass: "login-box card guest-box"}, [o("div", {staticClass: "card-body p-4"}, [o("img", {
                staticClass: "org-logo",
                attrs: {src: t.getLogo}
            }), t._v(" "), o("form", {
                staticClass: "form-horizontal form-material",
                attrs: {id: "loginform"},
                on: {
                    submit: function (e) {
                        return e.preventDefault(), t.process(e)
                    }, keydown: function (e) {
                        return t.loginForm.errors.clear(e.target.name)
                    }
                }
            }, [o("h3", {staticClass: "box-title m-t-20 m-b-10"}, [t._v(t._s(t.trans("auth.login")))]), t._v(" "), t.login_with_otp ? o("div", [o("div", {staticClass: "form-group"}, [t.otp_generated ? t._e() : o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.loginForm.mobile,
                    expression: "loginForm.mobile"
                }],
                staticClass: "form-control",
                attrs: {type: "text", name: "mobile", placeholder: t.trans("auth.mobile")},
                domProps: {value: t.loginForm.mobile},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.loginForm, "mobile", e.target.value)
                    }
                }
            }), t._v(" "), t.otp_generated ? o("label", [t._v(t._s(t.loginForm.mobile))]) : t._e(), t._v(" "), o("show-error", {
                attrs: {
                    "form-name": t.loginForm,
                    "prop-name": "mobile"
                }
            })], 1), t._v(" "), t.otp_generated ? o("div", {staticClass: "form-group"}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.loginForm.otp,
                    expression: "loginForm.otp"
                }],
                staticClass: "form-control",
                attrs: {type: "text", name: "otp", placeholder: t.trans("auth.otp")},
                domProps: {value: t.loginForm.otp},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.loginForm, "otp", e.target.value)
                    }
                }
            }), t._v(" "), o("show-error", {
                attrs: {
                    "form-name": t.loginForm,
                    "prop-name": "otp"
                }
            })], 1) : t._e()]) : o("div", [o("div", {staticClass: "form-group "}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.loginForm.email_or_username,
                    expression: "loginForm.email_or_username"
                }],
                staticClass: "form-control",
                attrs: {type: "text", name: "email_or_username", placeholder: t.trans("auth.email_or_username")},
                domProps: {value: t.loginForm.email_or_username},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.loginForm, "email_or_username", e.target.value)
                    }
                }
            }), t._v(" "), o("show-error", {
                attrs: {
                    "form-name": t.loginForm,
                    "prop-name": "email_or_username"
                }
            })], 1), t._v(" "), o("div", {staticClass: "form-group"}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.loginForm.password,
                    expression: "loginForm.password"
                }],
                staticClass: "form-control",
                attrs: {type: "password", name: "password", placeholder: t.trans("auth.password")},
                domProps: {value: t.loginForm.password},
                on: {
                    input: function (e) {
                        e.target.composing || t.$set(t.loginForm, "password", e.target.value)
                    }
                }
            }), t._v(" "), o("show-error", {
                attrs: {
                    "form-name": t.loginForm,
                    "prop-name": "password"
                }
            })], 1)]), t._v(" "), t.getConfig("recaptcha") && t.getConfig("login_recaptcha") ? o("div", {
                staticClass: "g-recaptcha",
                attrs: {"data-sitekey": t.getConfig("recaptcha_key")}
            }) : t._e(), t._v(" "), o("div", {staticClass: "form-group text-center m-t-20"}, [o("button", {
                staticClass: "btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light",
                attrs: {type: "submit"}
            }, [t._v(t._s(t.trans("auth.sign_in")))])]), t._v(" "), o("div", {staticClass: "form-group m-b-0"}, [o("div", {staticClass: "col-sm-12 text-center"}, [t.getConfig("reset_password") ? o("p", [t._v(t._s(t.trans("auth.forgot_your_password?")) + " "), o("router-link", {
                staticClass: "text-info m-l-5",
                attrs: {to: "/password"}
            }, [o("b", [t._v(t._s(t.trans("auth.reset_here!")))])])], 1) : t._e()]), t._v(" "), t.getConfig("login_with_otp") ? [t.login_with_otp ? t._e() : o("div", {staticClass: "col-sm-12 text-center"}, [o("p", [o("a", {
                attrs: {href: "#"},
                on: {
                    click: function (e) {
                        return t.otpLogin(!0)
                    }
                }
            }, [t._v(t._s(t.trans("auth.login_with_otp")))])])]), t._v(" "), t.login_with_otp ? o("div", {staticClass: "col-sm-12 text-center"}, [o("p", [o("a", {
                attrs: {href: "#"},
                on: {
                    click: function (e) {
                        return t.otpLogin(!1)
                    }
                }
            }, [t._v(t._s(t.trans("auth.login_with_password")))])])]) : t._e()] : t._e()], 2), t._v(" "), t.getConfig("mode") ? t._e() : o("div", {staticClass: "row m-t-10 justify-content-center"}, [o("div", {staticClass: "col-6 text-center"}, [t._m(0), t._v(" "), o("div", {
                class: ["dropdown-menu", "ltr" == t.getConfig("direction") ? "dropdown-menu-right" : ""],
                attrs: {"aria-labelledby": "loginAs"}
            }, [o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("admin")
                    }
                }
            }, [t._v("\n                                    Admin Role\n                                ")]), t._v(" "), o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("manager")
                    }
                }
            }, [t._v("\n                                    Manager Role\n                                ")]), t._v(" "), o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("principal")
                    }
                }
            }, [t._v("\n                                    Principal Role\n                                ")]), t._v(" "), o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("staff")
                    }
                }
            }, [t._v("\n                                    Staff Role\n                                ")]), t._v(" "), o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("accountant")
                    }
                }
            }, [t._v("\n                                    Accountant Role\n                                ")]), t._v(" "), o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("librarian")
                    }
                }
            }, [t._v("\n                                    Librarian Role\n                                ")]), t._v(" "), o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("student")
                    }
                }
            }, [t._v("\n                                    Student Role\n                                ")]), t._v(" "), o("button", {
                staticClass: "dropdown-item",
                staticStyle: {cursor: "pointer"},
                attrs: {type: "button"},
                on: {
                    click: function (e) {
                        return t.loginAs("parent")
                    }
                }
            }, [t._v("\n                                    Parent Role\n                                ")])])])])])]), t._v(" "), o("guest-footer")], 1)])])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("button", {
                staticClass: "btn btn-success text-uppercase btn-block dropup",
                attrs: {
                    type: "button",
                    href: "#",
                    role: "button",
                    id: "loginAs",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                }
            }, [this._v("\n                                Auto Login As "), e("i", {staticClass: "fas fa-chevron-up m-l-5"})])
        }], !1, null, null, null);
        e.default = n.exports
    }, ZuF2: function (t, e, o) {
        "use strict";
        var s = {
            methods: {
                getConfig: function (t) {
                    return helper.getConfig(t)
                }
            }
        }, r = o("KHd+"), n = Object(r.a)(s, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", [e("p", {staticClass: "text-center"}, [e("small", [this._v(this._s(this.getConfig("footer_credit")) + " " + this._s(this.trans("general.version") + " " + this.getConfig("v")))])])])
        }), [], !1, null, null, null);
        e.a = n.exports
    }
}]);
//# sourceMappingURL=login.js.map?id=875d230122e73777b487
