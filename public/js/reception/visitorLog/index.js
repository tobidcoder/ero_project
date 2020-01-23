(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{RcAk:function(t,e,i){"use strict";i.r(e);var s={components:{visitorLogForm:i("awYS").a},data:function(){return{visitor_logs:{total:0,data:[]},filter:{sort_by:"entry_time",order:"desc",type:"",student_id:[],employee_id:[],visiting_purpose_id:[],date_of_visit_start_date:"",date_of_visit_end_date:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"entry_time",translation:i18n.reception.entry_time},{value:"created_at",translation:i18n.general.created_at}],types:[{text:i18n.reception.visitor_type_parent,value:"parent"},{text:i18n.reception.visitor_type_other,value:"other"}],showFilterPanel:!1,showCreatePanel:!1,students:[],selected_students:null,employees:[],selected_employees:null,visiting_purposes:[],selected_visiting_purposes:null,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.hasPermission("list-visitor-log")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getVisitorLogs(),helper.showDemoNotification(["reception"])},methods:{hasPermission:function(t){return helper.hasPermission(t)},showAction:function(t){this.showUuid=t.uuid,this.showModal=!0},getStudentName:function(t){return helper.getStudentName(t)},getEmployeeName:function(t){return helper.getEmployeeName(t)},getVisitorLogs:function(t){var e=this,i=this.$loading.show();"number"!=typeof t&&(t=1);var s=helper.getFilterURL(this.filter);axios.get("/api/visitor/log?page="+t+s).then((function(t){e.visitor_logs=t.visitor_logs,e.students=t.filters.students,e.employees=t.filters.employees,e.visiting_purposes=t.filters.visiting_purposes,i.hide()})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))},editVisitorLog:function(t){this.$router.push("/reception/visitor/log/"+t.uuid+"/edit")},confirmDelete:function(t){var e=this;return function(i){return e.deleteVisitorLog(t)}},deleteVisitorLog:function(t){var e=this,i=this.$loading.show();axios.delete("/api/visitor/log/"+t.uuid).then((function(t){toastr.success(t.message),e.getVisitorLogs(),i.hide()})).catch((function(t){i.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/visitor/log/print",{filter:this.filter}).then((function(e){var i=window.open("/print");t.hide(),i.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/visitor/log/pdf",{filter:this.filter}).then((function(i){e.hide(),window.open("/download/report/"+i+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onStudentSelect:function(t){this.filter.student_id.push(t.id)},onStudentRemove:function(t){this.filter.student_id.splice(this.filter.student_id.indexOf(t.id),1)},onEmployeeSelect:function(t){this.filter.employee_id.push(t.id)},onEmployeeRemove:function(t){this.filter.employee_id.splice(this.filter.employee_id.indexOf(t.id),1)},onVisitingPurposeSelect:function(t){this.filter.visiting_purpose_id.push(t.id)},onVisitingPurposeRemove:function(t){this.filter.visiting_purpose_id.splice(this.filter.visiting_purpose_id.indexOf(t.id),1)},getEmployeeDesignationOnDate:function(t,e){return helper.getEmployeeDesignationOnDate(t,e)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)},momentTime:function(t){return helper.formatTime(t)}},watch:{"filter.sort_by":function(t){this.getVisitorLogs()},"filter.order":function(t){this.getVisitorLogs()},"filter.page_length":function(t){this.getVisitorLogs()}},computed:{authToken:function(){return helper.getAuthToken()}}},o=i("KHd+"),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-titles"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("reception.visitor_log"))+" \n                    "),t.visitor_logs.total?i("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.visitor_logs.total,from:t.visitor_logs.from,to:t.visitor_logs.to})))]):i("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("div",{staticClass:"action-buttons pull-right"},[t.visitor_logs.total&&!t.showCreatePanel&&t.hasPermission("create-visitor-log")?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[i("i",{staticClass:"fas fa-plus"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("reception.add_new_visitor_log")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():i("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[i("i",{staticClass:"fas fa-filter"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),i("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),i("div",{staticClass:"btn-group"},[i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),i("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),i("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[i("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),i("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[i("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),i("help-button",{on:{clicked:function(e){t.help_topic="reception.visitor-log"}}})],1)])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("transition",{attrs:{name:"fade"}},[t.showFilterPanel?i("div",{staticClass:"card card-form"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_type")))]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.type,expression:"filter.type"}],staticClass:"custom-select col-12",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filter,"type",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"null",selected:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.types,(function(e){return i("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])}))],2)])]),t._v(" "),"parent"==t.filter.type?i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.student")))]),t._v(" "),i("v-select",{attrs:{label:"name","track-by":"id",name:"student_id",id:"student_id",options:t.students,placeholder:t.trans("student.select_student"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_students},on:{select:t.onStudentSelect,remove:t.onStudentRemove},model:{value:t.selected_students,callback:function(e){t.selected_students=e},expression:"selected_students"}},[t.students.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]):t._e(),t._v(" "),"other"==t.filter.type?i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.employee")))]),t._v(" "),i("v-select",{attrs:{label:"name","track-by":"id",name:"employee_id",id:"employee_id",options:t.employees,placeholder:t.trans("employee.select_employee"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_employees},on:{select:t.onEmployeeSelect,remove:t.onEmployeeRemove},model:{value:t.selected_employees,callback:function(e){t.selected_employees=e},expression:"selected_employees"}},[t.employees.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]):t._e(),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visiting_purpose")))]),t._v(" "),i("v-select",{attrs:{label:"name","track-by":"id",name:"visiting_purpose_id",id:"visiting_purpose_id",options:t.visiting_purposes,placeholder:t.trans("reception.select_visiting_purpose"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_visiting_purposes},on:{select:t.onVisitingPurposeSelect,remove:t.onVisitingPurposeRemove},model:{value:t.selected_visiting_purposes,callback:function(e){t.selected_visiting_purposes=e},expression:"selected_visiting_purposes"}},[t.visiting_purposes.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-6"},[i("date-range-picker",{attrs:{"start-date":t.filter.date_of_visit_start_date,"end-date":t.filter.date_of_visit_end_date,label:t.trans("general.date_between")},on:{"update:startDate":function(e){return t.$set(t.filter,"date_of_visit_start_date",e)},"update:start-date":function(e){return t.$set(t.filter,"date_of_visit_start_date",e)},"update:endDate":function(e){return t.$set(t.filter,"date_of_visit_end_date",e)},"update:end-date":function(e){return t.$set(t.filter,"date_of_visit_end_date",e)}}})],1)]),t._v(" "),i("div",{staticClass:"card-footer text-right"},[i("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),i("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getVisitorLogs}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),t.hasPermission("create-visitor-log")?i("transition",{attrs:{name:"fade"}},[t.showCreatePanel?i("div",{staticClass:"card card-form"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("reception.add_new_visitor_log")))]),t._v(" "),i("visitor-log-form",{on:{completed:t.getVisitorLogs,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]):t._e(),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[t.visitor_logs.total?i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-sm"},[i("thead",[i("tr",[i("th",[t._v("#")]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.visiting_purpose")))]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.visitor_detail")))]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.visitor_count")))]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.date_of_visit")))]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.entry_time")))]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.exit_time")))]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.whom_to_meet")))]),t._v(" "),i("th",[t._v(t._s(t.trans("reception.visitor_remarks")))]),t._v(" "),i("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),i("tbody",t._l(t.visitor_logs.data,(function(e){return i("tr",[i("td",{domProps:{textContent:t._s(e.id)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.visiting_purpose.name)}}),t._v(" "),i("td",["parent"==e.type?[e.name?[t._v(t._s(t.trans("reception.visitor_name")+": "+e.name)+" "),i("br")]:t._e(),t._v(" "),e.relation_with_student?[t._v(t._s(t.trans("reception.relation_with_student")+": "+e.relation_with_student)+" "),i("br")]:t._e(),t._v("\n                                        "+t._s(t.trans("student.name")+": "+t.getStudentName(e.student))+" "),i("br"),t._v("\n                                        "+t._s(t.trans("student.first_guardian_name")+": "+e.student.parent.first_guardian_name)+" "),i("br"),t._v("\n                                        "+t._s(t.trans("student.mother_name")+": "+e.student.parent.mother_name)+" "),i("br"),t._v("\n                                        "+t._s(t.trans("student.contact_number")+": "+e.student.contact_number)+" "),i("br")]:[t._v("\n                                        "+t._s(t.trans("reception.visitor_name")+": "+e.name)+" "),i("br"),t._v("\n                                        "+t._s(t.trans("reception.visitor_company_name")+": "+e.company_name)+" "),i("br"),t._v("\n                                        "+t._s(t.trans("reception.visitor_contact_number")+": "+e.contact_number)+" "),i("br"),t._v("\n                                        "+t._s(t.trans("reception.visitor_address")+": "+e.address)+"\n                                    ")]],2),t._v(" "),i("td",{domProps:{textContent:t._s(e.visitor_count)}}),t._v(" "),i("td",[t._v(t._s(t._f("moment")(e.date_of_visit)))]),t._v(" "),i("td",[t._v(t._s(t._f("momentTime")(e.entry_time)))]),t._v(" "),i("td",[t._v(t._s(t._f("momentTime")(e.exit_time)))]),t._v(" "),i("td",[e.employee_id?i("span",[t._v("\n                                        "+t._s(t.getEmployeeName(e.employee))+" "),i("br"),t._v("\n                                        "+t._s(t.getEmployeeDesignationOnDate(e.employee,e.date_of_visit))+"\n                                    ")]):i("span",[t._v("\n                                        -\n                                    ")])]),t._v(" "),i("td",[t._v("\n                                    "+t._s(e.remarks)+"\n                                ")]),t._v(" "),i("td",{staticClass:"table-option"},[i("div",{staticClass:"btn-group"},[i("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.print"),expression:"trans('general.print')"}],staticClass:"btn btn-success btn-sm",attrs:{href:"/reception/visitor/pass/"+e.uuid+"/print?token="+t.authToken,target:"_blank"}},[i("i",{staticClass:"fas fa-print"})]),t._v(" "),t.hasPermission("edit-visitor-log")?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("reception.edit_visitor_log"),expression:"trans('reception.edit_visitor_log')"}],staticClass:"btn btn-info btn-sm",on:{click:function(i){return i.preventDefault(),t.editVisitorLog(e)}}},[i("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),t.hasPermission("delete-visitor-log")?i("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(visitor_log)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("reception.delete_visitor_log"),expression:"trans('reception.delete_visitor_log')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[i("i",{staticClass:"fas fa-trash"})]):t._e()])])])})),0)])]):t._e(),t._v(" "),t.visitor_logs.total?t._e():i("module-info",{attrs:{module:"reception",title:"visitor_log_module_title",description:"visitor_log_module_description",icon:"list"}},[i("div",{attrs:{slot:"btn"},slot:"btn"},[!t.showCreatePanel&&t.hasPermission("create-visitor-log")?i("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[i("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))]):t._e()])]),t._v(" "),i("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.visitor_logs},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getVisitorLogs}})],1)])],1),t._v(" "),i("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=r.exports},awYS:function(t,e,i){"use strict";var s={components:{},data:function(){return{visitorLogForm:new Form({name:"",company_name:"",relation_with_student:"",contact_number:"",address:"",type:"parent",student_id:"",visiting_purpose_id:"",employee_id:"",visitor_count:1,date_of_visit:"",entry_time:"",exit_time:"",remarks:""}),loaded:!1,entry_time:{hour:"",minute:"",meridiem:"am"},exit_time:{hour:"",minute:"",meridiem:""},visiting_purposes:[],selected_visiting_purpose:null,students:[],selected_student:null,employees:[],selected_employee:null}},props:["uuid"],mounted:function(){helper.hasPermission("create-visitor-log")||helper.hasPermission("edit-visitor-log")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid&&this.get(),this.getPreRequisite()},methods:{timePadding:function(t){return helper.formatWithPadding(t,2)},proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/visitor/log/pre-requisite").then((function(i){t.visiting_purposes=i.visiting_purposes,t.students=i.students,t.employees=i.employees,t.visitorLogForm.date_of_visit=helper.today(),t.uuid||(t.loaded=!0),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},store:function(){var t=this;this.visitorLogForm.entry_time=this.entry_time.hour&&this.entry_time.minute?helper.formatWithPadding(this.entry_time.hour,2)+":"+helper.formatWithPadding(this.entry_time.minute,2)+" "+this.entry_time.meridiem:"";var e=this.$loading.show();this.visitorLogForm.post("/api/visitor/log").then((function(i){toastr.success(i.message),t.selected_visiting_purpose=null,t.selected_student=null,t.selected_employee=null,t.entry_time.hour="",t.entry_time.minute="",t.entry_time.meridiem="am",t.visitorLogForm.type="parent",t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/visitor/log/"+this.uuid).then((function(i){t.visitorLogForm.type=i.visitor_log.type,t.visitorLogForm.name=i.visitor_log.name,t.visitorLogForm.company_name=i.visitor_log.company_name,t.visitorLogForm.contact_number=i.visitor_log.contact_number,t.visitorLogForm.address=i.visitor_log.address,t.visitorLogForm.student_id=i.visitor_log.student_id,t.selected_student=i.selected_student,t.visitorLogForm.relation_with_student=i.visitor_log.relation_with_student,t.visitorLogForm.visiting_purpose_id=i.visitor_log.visiting_purpose_id,t.selected_visiting_purpose=i.selected_visiting_purpose,t.visitorLogForm.employee_id=i.visitor_log.employee_id,t.selected_employee=i.selected_employee,t.visitorLogForm.remarks=i.visitor_log.remarks,t.visitorLogForm.date_of_visit=i.visitor_log.date_of_visit,t.entry_time.hour=i.entry_time.hour,t.entry_time.minute=i.entry_time.minute,t.entry_time.meridiem=i.entry_time.meridiem,i.visitor_log.exit_time&&(t.exit_time.hour=i.exit_time.hour,t.exit_time.minute=i.exit_time.minute,t.exit_time.meridiem=i.exit_time.meridiem),t.loaded=!0,e.hide()})).catch((function(i){e.hide(),helper.showErrorMsg(i),t.$router.push("/reception/visitor/log")}))},update:function(){var t=this;this.visitorLogForm.entry_time=this.entry_time.hour&&this.entry_time.minute?helper.formatWithPadding(this.entry_time.hour,2)+":"+helper.formatWithPadding(this.entry_time.minute,2)+" "+this.entry_time.meridiem:"",this.visitorLogForm.exit_time=this.exit_time.hour&&this.exit_time.minute?helper.formatWithPadding(this.exit_time.hour,2)+":"+helper.formatWithPadding(this.exit_time.minute,2)+" "+this.exit_time.meridiem:"";var e=this.$loading.show();this.visitorLogForm.patch("/api/visitor/log/"+this.uuid).then((function(i){toastr.success(i.message),e.hide(),t.$router.push("/reception/visitor/log")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onVisitingPurposeSelect:function(t){return this.visitorLogForm.visiting_purpose_id=t.id},onStudentSelect:function(t){return this.visitorLogForm.student_id=t.id},onEmployeeSelect:function(t){return this.visitorLogForm.employee_id=t.id}}},o=i("KHd+"),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.visitorLogForm.errors.clear(e.target.name)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_name")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.name,expression:"visitorLogForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("reception.visitor_name")},domProps:{value:t.visitorLogForm.name},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"name",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"name"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("div",{staticClass:"radio radio-success m-t-20"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.type,expression:"visitorLogForm.type"}],attrs:{type:"radio",value:"parent",id:"type_parent",name:"type"},domProps:{checked:"parent"==t.visitorLogForm.type,checked:t._q(t.visitorLogForm.type,"parent")},on:{click:function(e){return t.visitorLogForm.errors.clear("type")},change:function(e){return t.$set(t.visitorLogForm,"type","parent")}}}),t._v(" "),i("label",{attrs:{for:"type_parent"}},[t._v(t._s(t.trans("reception.visitor_type_parent")))])]),t._v(" "),i("div",{staticClass:"col-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.type,expression:"visitorLogForm.type"}],attrs:{type:"radio",value:"other",id:"type_other",name:"type"},domProps:{checked:"other"==t.visitorLogForm.type,checked:t._q(t.visitorLogForm.type,"other")},on:{click:function(e){return t.visitorLogForm.errors.clear("type")},change:function(e){return t.$set(t.visitorLogForm,"type","other")}}}),t._v(" "),i("label",{attrs:{for:"type_other"}},[t._v(t._s(t.trans("reception.visitor_type_other")))])])])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"type"}})],1)]),t._v(" "),"parent"==t.visitorLogForm.type?[i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.student")))]),t._v(" "),i("v-select",{attrs:{label:"name",name:"student_id",id:"student_id",options:t.students,placeholder:t.trans("student.select_student")},on:{select:t.onStudentSelect,close:function(e){return t.visitorLogForm.errors.clear("student_id")},remove:function(e){t.visitorLogForm.student_id=""}},model:{value:t.selected_student,callback:function(e){t.selected_student=e},expression:"selected_student"}},[t.students.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                "+t._s(t.trans("general.no_option_found"))+"\n                            ")])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"student_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.relation_with_student")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.relation_with_student,expression:"visitorLogForm.relation_with_student"}],staticClass:"form-control",attrs:{type:"text",name:"relation_with_student",placeholder:t.trans("reception.relation_with_student")},domProps:{value:t.visitorLogForm.relation_with_student},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"relation_with_student",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"relation_with_student"}})],1)])]:t._e(),t._v(" "),"other"==t.visitorLogForm.type?[i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_company_name")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.company_name,expression:"visitorLogForm.company_name"}],staticClass:"form-control",attrs:{type:"text",name:"company_name",placeholder:t.trans("reception.visitor_company_name")},domProps:{value:t.visitorLogForm.company_name},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"company_name",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"company_name"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_contact_number")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.contact_number,expression:"visitorLogForm.contact_number"}],staticClass:"form-control",attrs:{type:"text",name:"contact_number",placeholder:t.trans("reception.visitor_contact_number")},domProps:{value:t.visitorLogForm.contact_number},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"contact_number",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"contact_number"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_address")))]),t._v(" "),i("autosize-textarea",{attrs:{rows:"1",name:"addres",placeholder:t.trans("reception.visitor_address")},model:{value:t.visitorLogForm.address,callback:function(e){t.$set(t.visitorLogForm,"address",e)},expression:"visitorLogForm.address"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"address"}})],1)])]:t._e(),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_count")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.visitorLogForm.visitor_count,expression:"visitorLogForm.visitor_count"}],staticClass:"form-control",attrs:{type:"text",name:"visitor_count",placeholder:t.trans("reception.visitor_count")},domProps:{value:t.visitorLogForm.visitor_count},on:{input:function(e){e.target.composing||t.$set(t.visitorLogForm,"visitor_count",e.target.value)}}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"visitor_count"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visiting_purpose")))]),t._v(" "),i("v-select",{attrs:{label:"name",name:"visiting_purpose_id",id:"visiting_purpose_id",options:t.visiting_purposes,placeholder:t.trans("reception.select_visiting_purpose")},on:{select:t.onVisitingPurposeSelect,close:function(e){return t.visitorLogForm.errors.clear("visiting_purpose_id")},remove:function(e){t.visitorLogForm.visiting_purpose_id=""}},model:{value:t.selected_visiting_purpose,callback:function(e){t.selected_visiting_purpose=e},expression:"selected_visiting_purpose"}},[t.visiting_purposes.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"visiting_purpose_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.whom_to_meet")))]),t._v(" "),i("v-select",{attrs:{label:"name",name:"employee_id",id:"employee_id",options:t.employees,placeholder:t.trans("employee.select_employee")},on:{select:t.onEmployeeSelect,close:function(e){return t.visitorLogForm.errors.clear("employee_id")},remove:function(e){t.visitorLogForm.employee_id=""}},model:{value:t.selected_employee,callback:function(e){t.selected_employee=e},expression:"selected_employee"}},[t.employees.length?t._e():i("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"employee_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.date_of_visit")))]),t._v(" "),i("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("reception.date_of_visit")},on:{selected:function(e){return t.visitorLogForm.errors.clear("date_of_visit")}},model:{value:t.visitorLogForm.date_of_visit,callback:function(e){t.$set(t.visitorLogForm,"date_of_visit",e)},expression:"visitorLogForm.date_of_visit"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"date_of_visit"}})],1)]),t._v(" "),t.loaded?i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.entry_time")))]),t._v(" "),i("timepicker",{attrs:{hour:t.entry_time.hour,minute:t.entry_time.minute,meridiem:t.entry_time.meridiem},on:{"update:hour":function(e){return t.$set(t.entry_time,"hour",e)},"update:minute":function(e){return t.$set(t.entry_time,"minute",e)},"update:meridiem":function(e){return t.$set(t.entry_time,"meridiem",e)}}})],1)]):t._e(),t._v(" "),t.uuid?i("div",{staticClass:"col-12 col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.exit_time")))]),t._v(" "),i("timepicker",{attrs:{hour:t.exit_time.hour,minute:t.exit_time.minute,meridiem:t.exit_time.meridiem},on:{"update:hour":function(e){return t.$set(t.exit_time,"hour",e)},"update:minute":function(e){return t.$set(t.exit_time,"minute",e)},"update:meridiem":function(e){return t.$set(t.exit_time,"meridiem",e)}}})],1)]):t._e(),t._v(" "),i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.visitor_remarks")))]),t._v(" "),i("autosize-textarea",{attrs:{rows:"1",name:"remarks",placeholder:t.trans("reception.visitor_remarks")},model:{value:t.visitorLogForm.remarks,callback:function(e){t.$set(t.visitorLogForm,"remarks",e)},expression:"visitorLogForm.remarks"}}),t._v(" "),i("show-error",{attrs:{"form-name":t.visitorLogForm,"prop-name":"remarks"}})],1)])],2),t._v(" "),i("div",{staticClass:"card-footer text-right"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/reception/visitor/log"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.uuid?t._e():i("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),i("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?i("span",[t._v(t._s(t.trans("general.update")))]):i("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=index.js.map?id=e1af375acef31fcf59fb