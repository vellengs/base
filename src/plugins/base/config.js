"use strict";
angular
    .module("app.config")
    .constant(
    "base.config",
    {
        defaults: {
            list: {
                operations: {
                    'search': {
                        name: 'search',
                        action: function (scope) {
                            scope.load();
                        }
                    }
                }
            },
            form: {
                operations: {
                    reject: {
                        name: '退回',
                        action: function () {
                        }
                    },
                    save: true
                },
                template: 'detail.html',
                tabs: {
                    paper: {
                        icon: "fa fa-credit-card red",
                        name: " 稿　纸",
                        page: "d.paper"
                    },
                    content: {
                        icon: "fa yellow fa-flag",
                        name: " 正　文",
                        page: "d.content"
                    },
                    flows: {
                        icon: "fa pink fa-rocket",
                        name: " 流　程",
                        page: "d.flows"
                    },
                    countersign: {
                        icon: "fa blue fa-check",
                        name: " 会　签",
                        page: "d.countersign"
                    },
                    checked: {
                        icon: "fa purple fa-edit",
                        name: " 签　阅",
                        page: "d.checked"
                    },
                    relevance: {
                        icon: "fa green fa-exchange",
                        name: " 关　联",
                        page: "d.relevance"
                    },
                    interface: {
                        icon: "fa green fa-exchange",
                        name: " 接　口",
                        page: "d.interface"
                    }
                }
            }
        },
        account: {
            title: "帐号管理",
            operation: {
                add: true,
                del: true
            },
            list: {
                wrap: "default",
                headers: {
                    "name": {
                        displayName: "名称",
                        minWidth: 100
                    },
                    "mail": {
                        displayName: "电子邮箱",
                        minWidth: 150
                    },
                    "lastLogin": {
                        displayName: "最后登入时间",
                        width: 130
                    },
                    "enable": {
                        displayName: "已启用",
                        width: 70
                    },
                    "parent": {
                        displayName: "主帐号",
                        width: 100
                    },
                    "matrixNo": {
                        displayName: "关联编号",
                        width: 100
                    },
                    "aid": {
                        displayName: "帐号",
                        width: 70
                    },
                    "type": {
                        displayName: "类型",
                        width: 70
                    },
                    "password": {
                        displayName: "密码",
                        width: 120,
                        visible: false
                    },
                    "master": {
                        displayName: "是否主帐号",
                        width: 120
                    },
                    "mobile": {
                        displayName: "手机号码",
                        minWidth: 150
                    }
                },
                filters: [{
                    type: "select",
                    name: "type$eq",
                    label: "帐号类型",
                    titleMap: [{
                        value: "admin",
                        name: "管理员"
                    }, {
                        value: "user",
                        name: "用户"
                    }]
                }, {
                    type: "input",
                    name: "mail$match",
                    label: "电子邮箱"
                }, {
                    type: "select",
                    name: "enable$eq",
                    label: "状态",
                    titleMap: [{
                        value: '1',
                        name: "已启用"
                    }, {
                        value: '0',
                        name: "未启用"
                    }]
                }, {
                    type: "input",
                    name: "mobile$eq",
                    label: "手机号码"
                }, {
                    type: "datePicker",
                    name: "date$eq",
                    label: "日期"
                }, {
                    type: "dateTimePicker",
                    name: "time$eq",
                    label: "时间"
                }, {
                    type: "dateRangePicker",
                    name: "dateRange",
                    from: "dateStart",
                    to: "dateEnd",
                    label: "日期范围"
                }]
            },
            form: {
                schema: {
                    type: "object",
                    properties: {
                        mail: {
                            title: "电子邮箱",
                            type: "string"
                        },
                        lastLogin: {
                            title: "最后登入时间",
                            type: "string"
                        },
                        lastLogin2: {
                            title: "最终时刻",
                            type: "string"
                        },
                        lastLogin3: {
                            title: "预言范围",
                            type: "string"
                        },
                        name: {
                            title: "名称",
                            type: "string",
                            required: true
                        },
                        enable: {
                            title: "已启用",
                            type: "boolean"
                        },
                        parent: {
                            title: "主帐号",
                            type: "string"
                        },
                        matrixNo: {
                            title: "关联编号",
                            type: "string"
                        },
                        aid: {
                            title: "帐号",
                            type: "string",
                            required: true
                        },
                        type: {
                            title: "类型",
                            type: "string",
                            required: true
                        },
                        password: {
                            title: "密码",
                            type: "string",
                            required: true
                        },
                        master: {
                            title: "是否主帐号",
                            type: "boolean"
                        },
                        mobile: {
                            title: "手机号码",
                            type: "string"
                        },
                        picture: {
                            title: "头像",
                            type: "string"
                        },
                        photos: {
                            title: "图片夹",
                            type: "string"
                        },
                        "tname": {
                            "type": "string",
                            "title": "名称",
                            required: true
                        },
                        "match": {
                            "type": "string",
                            "title": "内容匹配"
                        },
                        lastLogin4: {
                            title: "最后登入时间",
                            type: "string"
                        },
                        lastLogin5: {
                            title: "最终时刻",
                            type: "string"
                        },
                        lastLogin6: {
                            title: "预言范围",
                            type: "string"
                        }

                    }
                },
                form: [
                    {
                        type: "group",
                        title: "主要信息",
                        items: [
                            {
                                key: 'aid',
                                placeholder: "请输入帐号"
                            }, {
                                key: 'name',
                                placeholder: "请输入名称"
                            },
                            'mail',
                            {
                                key: 'lastLogin',
                                type: "datePicker"
                            }, {
                                key: 'lastLogin2',
                                type: "dateTimePicker"
                            }, {
                                key: 'lastLogin3',
                                from: 'lastLogin3_start',
                                to: 'lastLogin3_end',
                                type: "dateRangePicker"
                            },
                            'parent',
                            'matrixNo',
                            {
                                key: 'type',
                                type: "select",
                                titleMap: [{
                                    value: "admin",
                                    name: "admin"
                                }, {
                                    value: "user",
                                    name: "user"
                                }]
                            },
                            {
                                key: "password",
                                type: "password"
                            },
                            'mobile',
                            {
                                key: "picture",
                                type: "uploader",
                                options: {
                                    multiple: 10,
                                    maxMB: 10
                                }
                            },
                            {
                                key: "photos",
                                type: "gallery",
                                singleLine: true,
                                options: {
                                    multiple: 10
                                }
                            }
                        ]
                    },
                    {
                        type: "group",
                        title: "其他信息",
                        items: ['master', 'enable']
                    },
                    {
                        "type": "list",
                        "title": "配置详情",
                        "items": [
                            {
                                key: "tname",
                                placeholder: "请输入名称"
                            },
                            {
                                key: "match"
                            },
                            {
                                key: 'lastLogin4',
                                type: "datePicker"
                            },
                            {
                                key: 'lastLogin5',
                                type: "dateTimePicker"
                            },
                            {
                                key: 'lastLogin6',
                                from: 'lastLogin6_start',
                                to: 'lastLogin6_end',
                                type: "dateRangePicker"
                            }
                        ]
                    }
                ]/*,
                 resolves: [
                 function (utils, oPath) {
                 var context = this;
                 context.scope.events.on('detailLoad', function (entity) {
                 console.log("detailLoad");
                 if (entity && entity.pid) {
                 utils.async('get', '/sms/policydetail/?pid$eq=' + entity.pid, null).then(function (res) {
                 var model = oPath.get(context, 'scope.form.model', {});
                 model.values = res.body.items;
                 });
                 }
                 });
                 context.scope.events.on('beforeSave', function (form) {
                 console.log("beforeSave");
                 /!*var policyDetail = form.model.values;
                 var policy = form.model;
                 delete policy.values;
                 form.model = {
                 "policyDetail": policyDetail,
                 "policy": policy
                 };*!/
                 });
                 }]*/
            }

        },
        log: {
            title: "系统日志",
            operations: {
                add: false,
                remove: true,
                edit: false
            },
            list: {
                wrap: "default",
                headers: {
                    "updated": {
                        displayName: "操作时间",
                        width: 150
                    },
                    "moduleId": {
                        displayName: "模块编号",
                        width: 100
                    },
                    "eventId": {
                        displayName: "事件编号",
                        width: 160
                    },
                    "remoteIp": {
                        displayName: "远程Ip",
                        width: 100
                    },
                    "remote": {
                        displayName: "远程记录",
                        width: 80
                    },
                    "user": {
                        displayName: "操作用户",
                        width: 80
                    },
                    "info": {
                        displayName: "事件信息",
                        minWidth: 200
                    },
                    "localIp": {
                        displayName: "本地Ip",
                        width: 120
                    }
                },
                filters: [{
                    type: "select",
                    name: "user$eq",
                    label: "帐号类型",
                    titleMap: [{
                        value: "admin",
                        name: "管理员"
                    }, {
                        value: "user",
                        name: "用户"
                    }]
                }, {
                    type: "input",
                    name: "moduleId$eq",
                    label: "模块编号"
                }, {
                    type: "input",
                    name: "user$eq",
                    label: "操作用户"
                }, {
                    type: "input",
                    name: "remoteIp$match",
                    label: "远程Ip"
                }, {
                    type: "input",
                    name: "localIp$match",
                    label: "本地IP"
                }, {
                    type: "datetime",
                    name: "updated$gte",
                    label: "操作时间起"
                }, {
                    type: "datetime",
                    name: "updated$lte",
                    label: "操作时间止"
                }]
            },
            form: {}
        },
        role: {
            title: "角色权限",
            operation: {
                add: true,
                del: true
            },
            list: {
                headers: {
                    "created": {
                        displayName: "创建日期",
                        width: 150
                    },
                    "updated": {
                        displayName: "更新日期",
                        width: 150
                    },
                    "rid": {
                        displayName: "主帐号",
                        width: 150
                    },
                    "name": {
                        displayName: "名称",
                        width: 150
                    },
                    "describe": {
                        displayName: "描述",
                        minWidth: 250
                    }
                },
                filters: [{
                    type: "input",
                    name: "rid$eq",
                    label: "主帐号"
                }, {
                    type: "input",
                    name: "name$match",
                    label: "名称"
                }, {
                    type: "input",
                    name: "describe$match",
                    label: "描述"
                }]
            },
            form: {
                schema: {
                    type: "object",
                    properties: {
                        rid: {
                            title: "编号",
                            type: "string",
                            required: true,

                        },
                        describe: {
                            title: "描述",
                            type: "string",
                            placeholder: "请填写描述"
                        },
                        name: {
                            title: "名称",
                            type: "string",
                            placeholder: "请填写名称"
                        }
                    }
                },
                form: [{
                    type: "group",
                    title: "基本信息",
                    items: [{
                        key: 'rid',
                        placeholder: "请填写编号"
                    }, 'describe', 'name']
                }

                ],
                model: {}
            }
        },
        mqueue: {
            title: "消息队列",
            operation: {
                del: true
            },
            list: {
                headers: {
                    state: {
                        displayName: "状态",
                        width: 70
                    },
                    data: {
                        displayName: "消息内容"
                    },
                    seq: {
                        displayName: "消息序列",
                        width: 80
                    },
                    qid: {
                        displayName: "队列编号",
                        width: 100
                    },
                    lastMessage: {
                        displayName: "最后调度信息"
                    },
                    errorCount: {
                        displayName: "已经失败次数",
                        width: 100
                    },
                    attachments: {
                        displayName: "附件"
                    },
                    lastScheduler: {
                        displayName: "最后调度时间"
                    },
                    ipAddress: {
                        displayName: "消息原地址"
                    }
                },
                filters: [{
                    type: "input",
                    label: "队列编号",
                    name: "qid$eq"
                }, {
                    type: "input",
                    name: "data$match",
                    label: "消息内容"
                }, {
                    type: "input",
                    name: "seq$eq",
                    label: "消息序列"
                }, {
                    type: "input",
                    name: "errorCount$eq",
                    label: "失败次数"
                }, {
                    type: "datetime",
                    name: "lastScheduler$gte",
                    label: "最后调度"
                }]
            }
        },
        menu: {
            title: "菜单配置",
            operation: {},
            list: {
                headers: {
                    "name": {
                        displayName: "名称"
                    },
                    icon: {
                        displayName: "图标"
                    },
                    "home": {
                        displayName: "首页链接",
                        width: 80
                    },
                    "blank": {
                        displayName: "新窗口开启",
                        width: 100
                    },
                    "memo": {
                        displayName: "备注",
                        visible: false
                    },
                    "tag": {
                        displayName: "标签",
                        visible: false
                    },
                    "enable": {
                        displayName: "已启用",
                        width: 70
                    },
                    "pid": {
                        displayName: "上级编号",
                        width: 90
                    },
                    "expanded": {
                        displayName: "自动展开",
                        visible: false
                    },
                    "type": {
                        displayName: "类别",
                        width: 70
                    },
                    "url": {
                        displayName: "URL 地址"
                    },
                    "order": {
                        displayName: "顺序号",
                        width: 80
                    },
                    "color": {
                        displayName: "颜色",
                        width: 90
                    },

                    "mid": {
                        displayName: "编号"
                    }
                },
                filters: [{
                    type: "input",
                    name: "name$match",
                    label: "名称"
                }, {
                    type: "input",
                    name: "type$eq",
                    label: "类别"
                }, {
                    type: "input",
                    name: "mid$eq",
                    label: "编号"
                }, {
                    type: "input",
                    name: "pid$eq",
                    label: "上级编号"
                }]
            },
            form: {
                schema: {
                    type: "object",
                    properties: {
                        icon: {
                            type: "string",
                            title: "图标",
                        },
                        home: {
                            type: "boolean",
                            title: "首页链接"
                        },
                        blank: {
                            type: "boolean",
                            title: "新窗口开启"
                        },
                        enable: {
                            type: "boolean",
                            title: "已启用"
                        },
                        pid: {
                            type: "string",
                            title: "上级编号"
                        },
                        type: {
                            type: "string",
                            title: "类别"
                        },
                        tip: {
                            type: "string",
                            title: "提示"
                        },
                        order: {
                            type: "number",
                            title: "顺序号"
                        },
                        color: {
                            type: "string",
                            title: "颜色"
                        },
                        name: {
                            type: "string",
                            title: "名称",
                            required: true
                        },
                        mid: {
                            type: "string",
                            title: "编号",
                            required: true
                        },
                        expanded: {
                            type: "boolean",
                            title: "自动展开"
                        },
                        url: {
                            type: "string",
                            title: "URL地址"
                        }
                    }
                },
                form: [
                    {
                        type: "group",
                        title: "基本配置",
                        items: ['name', 'mid', 'icon',
                            'type', 'order', 'color',
                            'pid', 'url', 'tip']
                    },
                    {
                        type: "group",
                        title: "其他配置",
                        items: ['enable', 'blank', 'home',
                            'expanded']
                    }]
            }
        },
        mqueuecfg: {
            title: "队列配置",
            list: {
                headers: {
                    "moduleId": {
                        displayName: "模块编号",
                        width: 75
                    },
                    "storageDay": {
                        displayName: "保存天数",
                        width: 75
                    },
                    "qid": {
                        displayName: "队列编号",
                        width: 100
                    },
                    "enable": {
                        displayName: "已启动",
                        width: 70
                    },
                    "type": {
                        displayName: "类型",
                        width: 70
                    },
                    "lastScheduler": {
                        displayName: "最后调度时间"
                    },
                    "category": {
                        displayName: "分类",
                        visible: false
                    },
                    "name": {
                        displayName: "名称"
                    },
                    "lastMessage": {
                        displayName: "最后调度信息"
                    },
                    "config": {
                        displayName: "配置参数",
                        visible: false
                    },
                    "lastState": {
                        displayName: "最后调度状态",
                        width: 100
                    },
                    "ipAddress": {
                        displayName: "IP地址"
                    },
                    "storage": {
                        displayName: "存储库",
                        width: 90
                    }
                },
                filters: [{
                    type: "input",
                    name: "qid$eq",
                    label: "队列编号"
                }, {
                    type: "input",
                    name: "name$match",
                    label: "名称"
                }, {
                    type: "input",
                    name: "type$eq",
                    label: "类型"
                }, {
                    type: "select",
                    name: "enable$eq",
                    label: "是否启动",
                    titleMap: [{
                        value: '1',
                        name: "已启动"
                    }, {
                        value: '0',
                        name: "未启动"
                    }]
                }, {
                    type: "datetime",
                    name: "lastScheduler$gte",
                    label: "最后调度起"
                }, {
                    type: "datetime",
                    name: "lastScheduler$lte",
                    label: "最后调度止"
                }, {
                    type: "input",
                    name: "ipAddress",
                    label: "IP地址"
                }]
            },
            form: {
                schema: {
                    type: "object",
                    properties: {
                        moduleId: {
                            title: "模块编号",
                            type: "string"
                        },
                        storageDay: {
                            title: "保存天数",
                            type: "number"
                        },
                        qid: {
                            title: "队列编号",
                            type: "string"
                        },
                        enable: {
                            title: "已启动",
                            type: "boolean"
                        },
                        type: {
                            title: "类型",
                            type: "number"
                        },
                        lastScheduler: {
                            title: "最后调度时间",
                            type: "string"
                        },
                        category: {
                            title: "分类",
                            type: "string"
                        },
                        name: {
                            title: "名称",
                            type: "string"
                        },
                        lastMessage: {
                            title: "最后调度信息",
                            type: "string"
                        },
                        config: {
                            title: "配置参数",
                            type: "string"
                        },
                        lastState: {
                            title: "最后调度状态",
                            type: "string"
                        },
                        ipAddress: {
                            title: "IP地址",
                            type: "string"
                        },
                        storage: {
                            title: "存储库",
                            type: "string"
                        }
                    }
                },
                form: [
                    {
                        type: "group",
                        title: "主要配置",
                        items: ['name', 'moduleId',
                            'storageDay', 'type', {
                                key: "lastScheduler",
                                type: "datetimepicker"
                            }, 'category', 'config',
                            'lastState', 'ipAddress',
                            'storage']
                    }, {
                        type: "group",
                        title: "其他配置",
                        items: ['enable']
                    }]
            }
        },
        logmodule: {
            title: "日志配置",
            list: {
                headers: {
                    mId: {
                        displayName: "模块编号",
                        width: 150
                    },
                    memo: {
                        displayName: "描述"
                    },
                    storageDay: {
                        displayName: "保存天数",
                        width: 150
                    },
                    name: {
                        displayName: "名称",
                        width: 200
                    },
                    enable: {
                        displayName: "已启动",
                        width: 150
                    }
                },
                filters: [{
                    type: "select",
                    name: "mId$eq",
                    label: "模块编号"
                }, {
                    type: "input",
                    name: "name$match",
                    label: "名称"
                }],
                resolves: [function (utils, oPath) {
                    var context = this;
                    var config = oPath.find(context, ['list',
                        'filters', '[name:mId$eq]'], {});
                    utils
                        .async('get', '/base/logmodule', null)
                        .then(
                        function (res) {
                            config.titleMap = res.body.items
                                .map(function (entry) {
                                    return {
                                        value: entry.uid,
                                        name: entry.uid
                                    };
                                });
                        });
                }]
            },
            form: {
                schema: {
                    type: "object",
                    properties: {
                        mId: {
                            title: "模块编号",
                            type: "string"
                        },
                        storageDay: {
                            title: "保存天数",
                            type: "number"
                        },
                        name: {
                            title: "名称",
                            type: "string"
                        },
                        enable: {
                            title: "已启动",
                            type: "boolean"
                        }
                    }

                },
                form: [{
                    type: "group",
                    title: "主要配置",
                    items: ["mId", 'storageDay', 'name']
                }, {
                    type: "group",
                    title: "其他配置",
                    items: ['enable']
                }]
            }
        }
    });