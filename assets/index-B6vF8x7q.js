import{I as Ie,c as m,b as i,F as E,p as A,q,y as v,A as j,t as y,m as k,d as Ee,B as T,a as Ae,j as h,D as qe,v as _,f as Me,o as p,z as Ne,_ as Oe}from"./index-BDgmTDOw.js";const Fe={class:"crud-generator"},Ue={class:"main-layout"},Ve={class:"config-panel"},Be={class:"config-section"},ze={class:"framework-grid"},Ge=["onClick"],He={class:"fw-icon"},Je={class:"fw-name"},Ke={class:"config-section"},Ye={class:"template-chips"},Xe=["onClick"],Ze={class:"config-section"},Qe={class:"form-row"},We={class:"field-group"},et={class:"field-group"},tt={key:0,class:"form-row"},at={class:"field-group"},nt=["placeholder"],lt={key:1,class:"form-row"},st={class:"field-group"},it=["placeholder"],ot={class:"config-section"},rt={class:"section-header-row"},ut={class:"mode-toggle"},ct={key:0,class:"sql-input-area"},dt={class:"sql-actions"},mt={class:"file-upload-label"},pt=["disabled"],$t={key:1,class:"visual-editor"},ft={class:"fields-list"},gt=["onUpdate:modelValue"],vt=["onUpdate:modelValue"],yt=["value"],bt=["onUpdate:modelValue"],ht={class:"fld fld-check"},_t=["onUpdate:modelValue"],kt={key:0,class:"fld fld-check"},Dt=["onUpdate:modelValue"],Tt=["onClick"],wt={class:"config-section"},Pt={class:"gen-options"},jt=["value"],xt={class:"config-section"},Ct={class:"adv-options"},St={key:0,class:"chk-item"},Rt={key:1,class:"chk-item"},Lt={key:2,class:"chk-item"},It={class:"chk-item"},Et={key:3,class:"chk-item"},At=["disabled"],qt={key:0,class:"result-panel"},Mt={class:"stats-bar"},Nt={class:"stat-item"},Ot={class:"stat-num"},Ft={class:"stat-item"},Ut={class:"stat-num"},Vt={class:"stat-item"},Bt={class:"stat-num"},zt={class:"file-tabs"},Gt=["onClick"],Ht={class:"code-viewer"},Jt={class:"code-header"},Kt={class:"code-filename"},Yt={class:"code-content"},Xt={key:1,class:"result-empty"},Zt={class:"empty-hint"},Qt="-- 在此粘贴 CREATE TABLE 语句，例如：\nCREATE TABLE `users` (\n  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',\n  `username` varchar(50) NOT NULL COMMENT '用户名',\n  `email` varchar(100) NOT NULL COMMENT '邮箱',\n  `phone` varchar(20) DEFAULT NULL COMMENT '手机号',\n  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态',\n  `created_at` timestamp NULL DEFAULT NULL,\n  `updated_at` timestamp NULL DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';",Wt=Ie({__name:"index",setup(ea){const B=h("laravel"),x=h("sql"),C=h(""),M=h(""),K=h(""),Y=h(""),N=h(""),z=h(!1),G=h(!1),f=h([]),O=h(["model","controller"]),S=h(0),g=h([]),R=h(""),r=qe({timestamps:!0,softDelete:!1,pagination:!0,comments:!0,swagger:!1}),F=[{id:"laravel",name:"Laravel",icon:"🐘",hasNamespace:!0,namespaceLabel:"命名空间",defaultNamespace:"App\\Models",hasTimestamps:!0,hasSoftDelete:!0,hasPagination:!0,hasSwagger:!1,codeTypes:[{value:"model",label:"Model 模型"},{value:"controller",label:"Controller 控制器"},{value:"service",label:"Service 服务层"},{value:"request",label:"Request 验证器"},{value:"migration",label:"Migration 迁移"},{value:"route",label:"Route 路由"},{value:"factory",label:"Factory 工厂"},{value:"resource",label:"Resource 资源类"},{value:"vue",label:"Vue 列表页面"},{value:"api-doc",label:"API 文档"}]},{id:"thinkphp",name:"ThinkPHP",icon:"⚡",hasNamespace:!0,namespaceLabel:"命名空间",defaultNamespace:"app\\model",hasTimestamps:!0,hasSoftDelete:!0,hasPagination:!0,hasSwagger:!1,codeTypes:[{value:"model",label:"Model 模型"},{value:"controller",label:"Controller 控制器"},{value:"validate",label:"Validate 验证器"},{value:"route",label:"Route 路由定义"},{value:"vue",label:"Vue 列表页面"}]},{id:"springboot",name:"Spring Boot",icon:"☕",hasNamespace:!1,hasPackageName:!0,defaultPackage:"com.example.demo",hasTimestamps:!0,hasSoftDelete:!0,hasPagination:!0,hasSwagger:!0,codeTypes:[{value:"entity",label:"Entity 实体类"},{value:"dto",label:"DTO 数据传输对象"},{value:"vo",label:"VO 视图对象"},{value:"mapper",label:"Mapper 接口"},{value:"mapperXml",label:"Mapper XML"},{value:"service",label:"Service 服务层"},{value:"serviceImpl",label:"ServiceImpl 实现"},{value:"controller",label:"Controller 控制器"}]},{id:"django",name:"Django",icon:"🐍",hasNamespace:!1,hasTimestamps:!0,hasSoftDelete:!0,hasPagination:!0,hasSwagger:!1,codeTypes:[{value:"model",label:"Model 模型"},{value:"serializer",label:"Serializer 序列化器"},{value:"viewset",label:"ViewSet 视图集"},{value:"url",label:"URL 路由"},{value:"admin",label:"Admin 后台注册"},{value:"test",label:"Test 测试用例"},{value:"factory",label:"Factory 测试工厂"}]},{id:"express",name:"Express + Sequelize",icon:"🟢",hasNamespace:!1,hasTimestamps:!0,hasSoftDelete:!0,hasPagination:!0,hasSwagger:!0,codeTypes:[{value:"model",label:"Sequelize Model"},{value:"controller",label:"Controller 控制器"},{value:"router",label:"Router 路由"},{value:"service",label:"Service 服务层"},{value:"dto",label:"DTO 校验"},{value:"middleware",label:"Middleware 中间件"}]},{id:"gin",name:"Go Gin",icon:"🔵",hasNamespace:!1,hasPackageName:!0,defaultPackage:"github.com/example/demo",hasTimestamps:!0,hasSoftDelete:!1,hasPagination:!0,hasSwagger:!0,codeTypes:[{value:"model",label:"Model 结构体"},{value:"handler",label:"Handler 处理器"},{value:"router",label:"Router 路由"},{value:"service",label:"Service 服务层"},{value:"dto",label:"DTO 请求结构"},{value:"response",label:"Response 响应结构"}]}],b=_(()=>F.find(e=>e.id===B.value)||F[0]),te=_(()=>b.value.codeTypes),ae=_(()=>{const e=new Set;return F.forEach(t=>t.codeTypes.forEach(s=>e.add(s.value))),e.size}),ne=[{id:"user",name:"用户管理",tableName:"users",fields:[{name:"id",type:"int(11)",comment:"主键ID",nullable:!1,isPk:!0},{name:"username",type:"varchar(50)",comment:"用户名",nullable:!1,isPk:!1},{name:"email",type:"varchar(100)",comment:"邮箱地址",nullable:!1,isPk:!1},{name:"phone",type:"varchar(20)",comment:"手机号",nullable:!0,isPk:!1},{name:"avatar",type:"varchar(255)",comment:"头像URL",nullable:!0,isPk:!1},{name:"status",type:"tinyint(1)",comment:"状态 0禁用 1正常",nullable:!1,isPk:!1,default:"1"},{name:"created_at",type:"timestamp",comment:"创建时间",nullable:!0,isPk:!1},{name:"updated_at",type:"timestamp",comment:"更新时间",nullable:!0,isPk:!1}]},{id:"article",name:"博客文章",tableName:"articles",fields:[{name:"id",type:"int(11)",comment:"主键ID",nullable:!1,isPk:!0},{name:"title",type:"varchar(200)",comment:"文章标题",nullable:!1,isPk:!1},{name:"slug",type:"varchar(200)",comment:"URL别名",nullable:!0,isPk:!1},{name:"content",type:"longtext",comment:"文章内容",nullable:!1,isPk:!1},{name:"excerpt",type:"text",comment:"摘要",nullable:!0,isPk:!1},{name:"cover_image",type:"varchar(255)",comment:"封面图",nullable:!0,isPk:!1},{name:"category_id",type:"int(11)",comment:"分类ID",nullable:!0,isPk:!1},{name:"author_id",type:"int(11)",comment:"作者ID",nullable:!1,isPk:!1},{name:"view_count",type:"int(11) unsigned",comment:"阅读量",nullable:!1,isPk:!1,default:"0"},{name:"status",type:"tinyint(1)",comment:"0草稿 1发布 2下架",nullable:!1,isPk:!1,default:"0"},{name:"published_at",type:"timestamp",comment:"发布时间",nullable:!0,isPk:!1},{name:"created_at",type:"timestamp",comment:"创建时间",nullable:!0,isPk:!1},{name:"updated_at",type:"timestamp",comment:"更新时间",nullable:!0,isPk:!1}]},{id:"product",name:"商品管理",tableName:"products",fields:[{name:"id",type:"int(11)",comment:"主键ID",nullable:!1,isPk:!0},{name:"name",type:"varchar(200)",comment:"商品名称",nullable:!1,isPk:!1},{name:"sku",type:"varchar(80)",comment:"商品编码",nullable:!1,isPk:!1},{name:"description",type:"text",comment:"商品描述",nullable:!0,isPk:!1},{name:"price",type:"decimal(10,2)",comment:"销售价格",nullable:!1,isPk:!1},{name:"original_price",type:"decimal(10,2)",comment:"原价",nullable:!0,isPk:!1},{name:"stock",type:"int(11) unsigned",comment:"库存数量",nullable:!1,isPk:!1,default:"0"},{name:"category_id",type:"int(11)",comment:"分类ID",nullable:!0,isPk:!1},{name:"main_image",type:"varchar(255)",comment:"主图",nullable:!0,isPk:!1},{name:"is_on_sale",type:"tinyint(1)",comment:"是否上架",nullable:!1,isPk:!1,default:"1"},{name:"sort_order",type:"int(11)",comment:"排序权重",nullable:!1,isPk:!1,default:"0"},{name:"created_at",type:"timestamp",comment:"创建时间",nullable:!0,isPk:!1},{name:"updated_at",type:"timestamp",comment:"更新时间",nullable:!0,isPk:!1}]},{id:"order",name:"订单系统",tableName:"orders",fields:[{name:"id",type:"bigint(20)",comment:"主键ID",nullable:!1,isPk:!0},{name:"order_no",type:"varchar(64)",comment:"订单编号",nullable:!1,isPk:!1},{name:"user_id",type:"int(11)",comment:"用户ID",nullable:!1,isPk:!1},{name:"total_amount",type:"decimal(12,2)",comment:"订单总金额",nullable:!1,isPk:!1},{name:"discount_amount",type:"decimal(10,2)",comment:"优惠金额",nullable:!1,isPk:!1,default:"0.00"},{name:"pay_amount",type:"decimal(12,2)",comment:"实付金额",nullable:!1,isPk:!1},{name:"status",type:"tinyint(2)",comment:"0待支付 1已支付 2已发货 3已完成 4已取消",nullable:!1,isPk:!1,default:"0"},{name:"pay_method",type:"varchar(20)",comment:"支付方式",nullable:!0,isPk:!1},{name:"pay_time",type:"timestamp",comment:"支付时间",nullable:!0,isPk:!1},{name:"receiver_name",type:"varchar(50)",comment:"收货人",nullable:!1,isPk:!1},{name:"receiver_phone",type:"varchar(20)",comment:"收货电话",nullable:!1,isPk:!1},{name:"receiver_address",type:"varchar(500)",comment:"收货地址",nullable:!1,isPk:!1},{name:"remark",type:"varchar(500)",comment:"订单备注",nullable:!0,isPk:!1},{name:"created_at",type:"timestamp",comment:"创建时间",nullable:!0,isPk:!1},{name:"updated_at",type:"timestamp",comment:"更新时间",nullable:!0,isPk:!1}]}],le=["int(11)","bigint(20)","tinyint(1)","smallint(6)","varchar(50)","varchar(100)","varchar(200)","varchar(500)","varchar(1000)","text","longtext","decimal(10,2)","float","double","date","time","datetime","timestamp","json","boolean","enum"],se=_(()=>g.value.reduce((e,t)=>e+t.content.split(`
`).length,0)),w=_(()=>C.value.trim()||(R.value?"":"my_table")),P=_(()=>M.value.trim()?M.value.trim():U(w.value.replace(/[^a-zA-Z0-9_]/g,""))),Z=_(()=>K.value.trim()||b.value.defaultNamespace||""),Q=_(()=>Y.value.trim()||b.value.defaultPackage||""),L=_(()=>f.value.filter(e=>!["id","created_at","updated_at","deleted_at"].includes(e.name))),ie=_(()=>f.value.find(e=>e.isPk)||{name:"id",type:"int(11)"});function U(e){return e.replace(/(^|[_\-])([a-z])/g,(t,s,u)=>u.toUpperCase())}function D(e){const t=U(e);return t.charAt(0).toLowerCase()+t.slice(1)}function oe(e){return e.replace(/[A-Z]/g,t=>`_${t.toLowerCase()}`)}function $(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function re(e){const t=e.toLowerCase();return t.includes("int")||t.includes("bigint")?"int":t.includes("varchar")||t.includes("text")?"string":t.includes("decimal")||t.includes("float")||t.includes("double")?"float":t.includes("json")?"array":t.includes("bool")?"bool":"mixed"}function X(e){const t=e.toLowerCase();return t.includes("int")&&!t.includes("bigint")?"Integer":t.includes("bigint")?"Long":t.includes("varchar")||t.includes("text")?"String":t.includes("decimal")||t.includes("float")||t.includes("double")?"BigDecimal":t.includes("json")?"String":t.includes("date")||t.includes("datetime")||t.includes("timestamp")?"LocalDateTime":t.includes("time")?"LocalTime":t.includes("bool")||t.includes("tinyint(1)")?"Boolean":"Object"}function ue(e){const t=e.toLowerCase();return t.includes("int")||t.includes("bigint")?"models.IntegerField":t.includes("varchar")||t.includes("text")||t.includes("longtext")?"models.CharField":t.includes("decimal")||t.includes("float")||t.includes("double")?"models.DecimalField":t.includes("json")?"models.JSONField":t.includes("date")?"models.DateField":t.includes("datetime")||t.includes("timestamp")?"models.DateTimeField":t.includes("bool")||t.includes("tinyint(1)")?"models.BooleanField":t.includes("text")||t.includes("longtext")?"models.TextField":"models.CharField"}function ce(e){const t=e.toLowerCase();return t.includes("int")||t.includes("bigint")||t.includes("decimal")||t.includes("float")||t.includes("double")?"DataTypes.INTEGER":t.includes("varchar(50)")?"DataTypes.STRING(50)":t.includes("varchar(100)")?"DataTypes.STRING(100)":t.includes("varchar(200)")?"DataTypes.STRING(200)":t.includes("varchar(500)")?"DataTypes.STRING(500)":t.includes("varchar(1000)")?"DataTypes.STRING(1000)":t.includes("varchar")?"DataTypes.STRING(255)":t.includes("text")||t.includes("longtext")?"DataTypes.TEXT":t.includes("date")||t.includes("datetime")||t.includes("timestamp")?"DataTypes.DATE":t.includes("bool")||t.includes("tinyint(1)")?"DataTypes.BOOLEAN":t.includes("json")?"DataTypes.JSON":"DataTypes.STRING(255)"}function W(e){const t=e.toLowerCase();return t.includes("int")&&!t.includes("bigint")?"int32":t.includes("bigint")?"int64":t.includes("varchar")||t.includes("text")||t.includes("longtext")?"string":t.includes("decimal")||t.includes("float")||t.includes("double")?"float64":t.includes("date")||t.includes("datetime")||t.includes("timestamp")?"time.Time":t.includes("bool")||t.includes("tinyint(1)")?"bool":t.includes("json")?"json.RawMessage":"string"}function I(e){var u;const t=[];!e.nullable&&e.name!=="id"&&t.push("required");const s=(u=e.type.match(/varchar\((\d+)\)/))==null?void 0:u[1];return s&&t.push(`max:${s}`),e.name.toLowerCase().includes("email")&&t.push("email"),e.type.includes("int")&&!e.type.includes("bigint")&&e.name!=="id"&&t.push("integer"),t.join("|")||"nullable"}function de(e){const t=e.type.toLowerCase();return t.includes("int")&&!t.includes("bigint")?`'${e.name}' => 'integer'`:t.includes("bigint")?`'${e.name}' => 'integer'`:t.includes("decimal")?`'${e.name}' => 'decimal:2'`:t.includes("float")||t.includes("double")?`'${e.name}' => 'float'`:t.includes("json")?`'${e.name}' => 'array'`:t.includes("date")||t.includes("datetime")||t.includes("timestamp")?`'${e.name}' => 'datetime'`:t.includes("bool")||t.includes("tinyint(1)")?`'${e.name}' => 'boolean'`:null}function me(e){B.value=e,O.value=b.value.codeTypes.slice(0,2).map(t=>t.value),g.value=[]}function pe(e){R.value=e.id,C.value=e.tableName,M.value="",f.value=e.fields.map(t=>({...t})),N.value="",g.value=[]}function $e(){R.value="custom"}function fe(){f.value.push({name:"",type:"varchar(100)",comment:"",nullable:!0,isPk:!1})}function ge(e){f.value.splice(e,1)}function ve(e){var u;const t=(u=e.target.files)==null?void 0:u[0];if(!t)return;const s=new FileReader;s.onload=n=>{var o;N.value=((o=n.target)==null?void 0:o.result)||"",ee()},s.readAsText(t)}function ee(){z.value=!0,setTimeout(()=>{try{const e=N.value.trim();if(!e)return;const t=ye(e);t.length>0&&(C.value=t[0].name,f.value=t[0].fields,R.value="",t.length>1&&console.log(`检测到 ${t.length} 个表，默认使用第一个：${t[0].name}`))}finally{z.value=!1}},400)}function ye(e){const t=[],s=/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?\s*\(([\s\S]*?)\)\s*(?:ENGINE\s*=\s*\w+)?[^;]*;/gi;let u;for(;(u=s.exec(e))!==null;){const n=be(u[2]);n.length>0&&t.push({name:u[1],fields:n})}if(t.length===0){const n=e.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?/i),o=(n==null?void 0:n[1])||C.value||"my_table",l=he(e);l.length>0&&t.push({name:o,fields:l})}return t}function be(e){var s,u,n,o;const t=[];for(const l of e.split(`
`)){const a=l.trim();if(!a||a.startsWith("--")||/^(PRIMARY|KEY|INDEX|UNIQUE|FOREIGN|CONSTRAINT|FULLTEXT)/i.test(a))continue;const c=a.match(/^`?(\w+)`?\s+(\w+(?:\([^)]+\))?)\s*(.*?)(?:,\s*)?$/i);if(c){const d=c[3]||"";t.push({name:c[1],type:c[2].toLowerCase(),comment:((s=d.match(/COMMENT\s+['"`](.*?)['"`]/i))==null?void 0:s[1])||"",nullable:!/NOT\s+NULL/i.test(d),isPk:!1,default:((n=(u=d.match(/DEFAULT\s+([^,\s]+(?:\s*ON\s+UPDATE[^,\s]*)?)/i))==null?void 0:u[1])==null?void 0:n.replace(/['"`]/g,""))||""})}}for(const l of e.split(`
`))if(/PRIMARY\s+KEY\s*\(`?(\w+)`?\)/i.test(l.trim())){const a=(o=l.match(/PRIMARY\s+KEY\s*\(`?(\w+)`?\)/i))==null?void 0:o[1];if(a){const c=t.find(d=>d.name===a);c&&(c.isPk=!0)}}return t}function he(e){return e.split(`
`).filter(t=>t.trim().startsWith("`")).map(t=>{const s=t.trim().match(/`(\w+)`\s+(\w+(?:\([^)]+\))?)\s*(.*)/);return s?{name:s[1],type:s[2],comment:"",nullable:!s[3].includes("NOT NULL"),isPk:!1}:null}).filter(t=>t!==null)}async function _e(){var e;if(f.value.length!==0){G.value=!0;try{await new Promise(u=>setTimeout(u,600)),g.value=[];const t={laravel:ke,thinkphp:we,springboot:Pe,django:je,express:xe,gin:Ce},s=((e=t[B.value])==null?void 0:e.call(t))||[];g.value=s.filter(u=>{const n={model:"model",controller:"controller",service:"service",request:"request",migration:"migration",route:"route",factory:"factory",resource:"resource",vue:"vue",apiDoc:"api-doc",validate:"validate",entity:"entity",dto:"dto",vo:"vo",mapper:"mapper",mapperXml:"mapperXml",serviceImpl:"serviceImpl",serializer:"serializer",viewset:"viewset",url:"url",admin:"admin",test:"test",router:"router",middleware:"middleware",handler:"handler",response:"response"};return O.value.includes(n[u.filename]||u.filename)}),S.value=0}finally{G.value=!1}}}function ke(){const e=P.value,t=w.value,s=D(t),u=Z.value,n=f.value,o=L.value,l=[];return r.comments&&l.push({filename:"model",language:"php",filenameDisplay:`${e}.php`,content:`<?php

declare(strict_types=1);

namespace ${u.replace("\\Models","\\Models")};

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;
${r.softDelete?"\\nuse Illuminate\\Database\\Eloquent\\SoftDeletes;":""}
${n.map(a=>` * @property ${re(a.type)} $${a.name} ${a.comment}`).join("\\n")}
 */
class ${e} extends Model
{
    use HasFactory${r.softDelete?", SoftDeletes":""};

    protected $table = '${t}';

    protected $fillable = [
${o.map(a=>`        '${a.name}',`).join("\\n")}    ];

    protected $casts = [
${n.map(a=>de(a)).filter(Boolean).map(a=>`        ${a},`).join("\\n")}    ];

${r.timestamps?`    public $timestamps = true;

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';
`:`    public $timestamps = false;
`}
}`}),l.push({filename:"controller",language:"php",filenameDisplay:`${e}Controller.php`,content:`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use ${u}\\${e};
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Http\\Request;

class ${e}Controller extends Controller
{
    /**
     * 获取列表${r.pagination?"(分页)":""}
     */
    public function index(Request $request): JsonResponse
    {
        $query = ${e}::query();
${r.pagination?`        $perPage = $request->integer('per_page', 15);
        $list = $query->paginate($perPage);`:"        $list = $query->get();"}
        return response()->json(['code' => 200, 'data' => $list]);
    }

    /**
     * 创建记录
     */
    public function store(Request $request): JsonResponse
    {
${o.length>0?`        $validated = $request->validate([
${o.map(a=>`            '${a.name}' => '${I(a)}',`).join("\\n")}        ]);`:"        $validated = $request->all();"}
        $item = ${e}::create($validated);
        return response()->json(['code' => 201, 'data' => $item], 201);
    }

    /**
     * 详情
     */
    public function show(${e} $${s}): JsonResponse
    {
        return response()->json(['code' => 200, 'data' => $${s}]);
    }

    /**
     * 更新
     */
    public function update(Request $request, ${e} $${s}): JsonResponse
    {
${o.length>0?`        $validated = $request->validate([
${o.map(a=>`            '${a.name}' => '${I(a)}',`).join("\\n")}        ]);`:"        $validated = $request->all();"}
        $${s}->update($validated);
        return response()->json(['code' => 200, 'data' => $${s}]);
    }

    /**
     * 删除
     */
    public function destroy(${e} $${s}): JsonResponse
    {
        $${s}->delete();
        return response()->json(['code' => 200, 'message' => '删除成功']);
    }
}`}),l.push({filename:"service",language:"php",filenameDisplay:`${e}Service.php`,content:`<?php

declare(strict_types=1);

namespace App\\Services;

use ${u}\\${e};
use Illuminate\\Pagination\\LengthAwarePaginator;

class ${e}Service
{
    public function getList(array $filters = [], int $perPage = 15): LengthAwarePaginator|array
    {
        $query = ${e}::query();
        foreach ($filters as $key => $value) {
            if ($value !== null && $value !== '') {
                $query->where($key, 'like', "%{$value}%");
            }
        }
${r.pagination?"        return $query->paginate($perPage);":"        return $query->get()->toArray();"}
    }

    public function getById(int $id): ?${e}
    {
        return ${e}::find($id);
    }

    public function create(array $data): ${e}
    {
        return ${e}::create($data);
    }

    public function update(${e} $${s}, array $data): bool
    {
        return $${s}->update($data);
    }

    public function delete(${e} $${s}): bool
    {
        return $${s}->delete();
    }
}`}),l.push({filename:"request",language:"php",filenameDisplay:`${e}Request.php`,content:`<?php

declare(strict_types=1);

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class ${e}Request extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
${o.map(a=>`            '${a.name}' => '${I(a)}',`).join("\\n")}        ];
    }

    public function attributes(): array
    {
        return [
${o.map(a=>`            '${a.name}' => '${a.comment||a.name}',`).join("\\n")}        ];
    }
}`}),l.push({filename:"migration",language:"php",filenameDisplay:`xxxx_xx_xx_xxxxxx_create_${t}_table.php`,content:`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('${t}', function (Blueprint $table) {
${n.map(a=>a.isPk&&a.type.includes("int")?"            $table->id();":a.name==="created_at"||a.name==="updated_at"?null:De(a)).filter(Boolean).join("\\n")}
${r.timestamps?"            $table->timestamps();":""}
${r.softDelete?"            $table->softDeletes();":""}
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('${t}');
    }
};`}),l.push({filename:"route",language:"php",filenameDisplay:"api.php (片段)",content:`// ${e} 路由定义
use App\\Http\\Controllers\\${e}Controller;
use Illuminate\\Support\\Facades\\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/${$(t)}', [${e}Controller::class, 'index']);
    Route::post('/${$(t)}', [${e}Controller::class, 'store']);
    Route::get('/${$(t)}/{${s}}', [${e}Controller::class, 'show']);
    Route::put('/${$(t)}/${s}', [${e}Controller::class, 'update']);
    Route::delete('/${$(t)}/{${s}}', [${e}Controller::class, 'destroy']);
});`}),l.push({filename:"factory",language:"php",filenameDisplay:`${e}Factory.php`,content:`<?php

namespace Database\\Factories;

use ${u}\\${e};
use Illuminate\\Database\\Eloquent\\Factories\\Factory;

class ${e}Factory extends Factory
{
    protected $model = ${e}::class;

    public function definition(): array
    {
        return [
${o.map(a=>{const c=Te(a.type,a.name);return`            '${a.name}' => ${c},`}).join("\\n")}        ];
    }
}`}),l.push({filename:"resource",language:"php",filenameDisplay:`${e}Resource.php`,content:`<?php

declare(strict_types=1);

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class ${e}Resource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
${o.map(a=>`            '${a.name}' => $this->whenHas('${a.name}'),`).join("\\n")}            'created_at' => $this->created_at?->toIso8601String(),
            'updated_at' => $this->updated_at?->toIso8601String(),
        ];
    }
}`}),l.push({filename:"vue",language:"html",filenameDisplay:`${U(t)}.vue`,content:`<template>
  <div class="\${toKebabCase(tbl)}-container">
    <div class="toolbar">
      <el-button type="primary" @click="handleAdd">新增</el-button>
      <el-input v-model="searchKeyword" placeholder="搜索..." style="width:240px;margin-left:auto" clearable />
    </div>
    <el-table :data="tableData" v-loading="loading" stripe border>
${n.filter(a=>!["created_at","updated_at","deleted_at"].includes(a.name)).slice(0,7).map(a=>`      <el-table-column prop="${a.name}" label="${a.comment||a.name}" />`).join("\\n")}
      <el-table-column label="操作" width="180" fixed="right">
        \` + '<' + 'template #default="{ row }">' + \`
          <el-button link type="primary" @click="handleEdit(row)">编辑</el-button>
          <el-popconfirm title="确认删除？" @confirm="handleDelete(row.id)">
            \` + '<' + 'template #reference><el-button link type="danger">删除</el-button></' + 'template>' + \`
          </el-popconfirm>
        \` + '</' + 'template>' + \`
      </el-table-column>
    </el-table>
${r.pagination?`    <el-pagination
      style="margin-top:16px;justify-content:flex-end"
      :total="total"
      :current-page="page"
      :page-size="pageSize"
      layout="total,sizes,prev,pager,next"
      @size-change="(s)=>{pageSize=s;fetchData()}"
      @current-change="(p)=>{page=p;fetchData()}"
    />`:""}
  </div>
\` + '</' + 'template>' + \`

\` + '<' + \`script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'

const loading = ref(false)
const tableData = ref<any[]>([])
const searchKeyword = ref('')
${r.pagination?`const page = ref(1)
const pageSize = ref(15)
const total = ref(0)`:""}

async function fetchData() {
  loading.value = true
  try {
${r.pagination?`    const { data } = await axios.get('/api/${$(t)}/', {
      params: { page: page.value, per_page: pageSize.value, keyword: searchKeyword.value }
    })`:`    const { data } = await axios.get('/api/${$(t)}/')`}
    tableData.data = data.data${r.pagination?".data":""}
${r.pagination?"    total.value = data.data.total || 0":""}
  } finally { loading.value = false }
}

function handleAdd() { /* 打开弹窗 */ }
function handleEdit(row: any) { /* 打开弹窗并回填 */ }
async function handleDelete(id: number) {
  await axios.delete(\`/api/${$(t)}/\${id}\`)
  ElMessage.success('删除成功')
  fetchData()
}

onMounted(fetchData)
<' + '/script>'`}),l.push({filename:"apiDoc",language:"markdown",filenameDisplay:`${e}_API.md`,content:`# ${e} API 文档

基础路径: \`/api/${$(t)}\`

## 接口列表

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | /${$(t)} | 获取列表${r.pagination?"(支持分页)":""} |
| POST | /${$(t)} | 创建记录 |
| GET | /${$(t)}/{id} | 获取详情 |
| PUT | /${$(t)}/{id} | 更新记录 |
| DELETE | /${$(t)}/{id} | 删除记录 |

## 请求参数

### 创建 POST /${$(t)}

\`\`\`json
{
${o.map(a=>`  "${a.name}": ${H(a.type)}`).join(",\\n")}}
\`\`\`

### 更新 PUT /${$(t)}/{id}

同创建参数（均可选）

## 响应格式

### 成功
\`\`\`json
{ "code": 200, "data": { ... } }
\`\`\`

### 错误
\`\`\`json
{ "code": 422, "message": "验证失败", "errors": { ... } }
\`\`\`
`}),l}function De(e){var u,n;if(e.name==="id")return"            $table->id();";if(e.name==="created_at"||e.name==="updated_at")return null;const t=e.type.toLowerCase();let s="";if(t.includes("varchar")||t.includes("char")){const o=((u=t.match(/\((\d+)\)/))==null?void 0:u[1])||"255";s=`$table->string('${e.name}', ${o})`}else if(t.includes("int")||t.includes("bigint"))s=`$table->integer('${e.name}')`;else if(t.includes("text")||t.includes("longtext"))s=`$table->text('${e.name}')`;else if(t.includes("decimal")){const o=((n=t.match(/\((\d+),(\d+)\)/))==null?void 0:n.slice(1).join(", "))||"10, 2";s=`$table->decimal('${e.name}', ${o})`}else t.includes("date")||t.includes("datetime")||t.includes("timestamp")?s=`$table->timestamp('${e.name}')`:t.includes("json")?s=`$table->json('${e.name}')`:t.includes("bool")||t.includes("tinyint(1)")?s=`$table->boolean('${e.name}')`:s=`$table->string('${e.name}')`;return e.nullable&&(s+="->nullable()"),e.default!==void 0&&e.default!==""&&(s+=`->default(${e.default==="NULL"?"null":`'${e.default}'`})`),e.comment&&(s+=`->comment('${e.comment}')`),s?`            ${s};`:null}function Te(e,t){const s=e.toLowerCase();return t.includes("name")||t.includes("title")?"$this->faker->name()":t.includes("email")?"$this->faker->safeEmail()":t.includes("phone")||t.includes("mobile")?"$this->faker->phoneNumber()":t.includes("avatar")||t.includes("image")||t.includes("cover")?"$this->faker->imageUrl()":t.includes("address")?"$this->faker->address()":s.includes("int")&&!s.includes("bigint")?"$this->faker->numberBetween(1, 1000)":s.includes("decimal")?"$this->randomFloat(2, 1, 9999)":s.includes("text")||s.includes("longtext")?"$this->faker->paragraph()":s.includes("date")||s.includes("datetime")||s.includes("timestamp")?"$this->faker->dateTimeThisYear()":s.includes("bool")||s.includes("tinyint(1)")?"$this->faker->boolean()":"$this->faker->word()"}function H(e){const t=e.toLowerCase();return t.includes("varchar")||t.includes("text")||t.includes("char")?'"示例文本"':t.includes("int")||t.includes("bigint")?"123":t.includes("decimal")||t.includes("float")||t.includes("double")?"99.99":t.includes("bool")||t.includes("tinyint(1)")?"true":t.includes("date")||t.includes("datetime")||t.includes("timestamp")?'"2025-01-01 00:00:00"':"null"}function we(){const e=P.value,t=w.value,s=Z.value,u=f.value,n=L.value,o=[];return o.push({filename:"model",language:"php",filenameDisplay:`${e}.php`,content:`<?php
declare(strict_types=1);

namespace ${s};

use think\\Model;

class ${e} extends Model
{
    protected $name = '${t}';
    protected $autoWriteTimestamp = ${r.timestamps?"true":"false"};
${r.softDelete?"    protected $deleteTime = 'deleted_at';":""}

    public function searchableAttrs(): array
    {
        return ['${n.slice(0,5).map(l=>l.name).join("', '")}'];
    }
}`}),o.push({filename:"controller",language:"php",filenameDisplay:`${e}Controller.php`,content:`<?php
declare(strict_types=1);

namespace app\\controller;

use app\\model\\${e};
use think\\Request;
use think\\Response;

class ${e}Controller
{
    public function index(Request $request): Response
    {
${r.pagination?`        $page = $request->param('page', 1);
        $limit = $request->param('limit', 15);
        $list = ${e}::paginate(['page' => $page, 'list_rows' => $limit]);`:`        $list = ${e}::select();`}
        return json(['code' => 200, 'data' => $list]);
    }

    public function save(Request $request): Response
    {
        $item = ${e}::create($request->post());
        return json(['code' => 201, 'data' => $item], 201);
    }

    public function read($id): Response
    {
        return json(['code' => 200, 'data' => ${e}::find($id)]);
    }

    public function update(Request $request, $id): Response
    {
        ${e}::where('id', $id)->update($request->put());
        return json(['code' => 200]);
    }

    public function delete($id): Response
    {
        ${e}::destroy($id);
        return json(['code' => 200, 'message' => '删除成功']);
    }
}`}),o.push({filename:"validate",language:"php",filenameDisplay:`${e}Validate.php`,content:`<?php
declare(strict_types=1);

namespace app\\validate;

use think\\Validate;

class ${e}Validate extends Validate
{
    protected $rule = [
${n.map(l=>`        '${l.name}' => '${I(l)}',`).join("\\n")}    ];

    protected $message = [
${n.map(l=>`        '${l.name}.${I(l).split("|")[0]}' => '${l.comment||l.name}验证失败',`).join("\\n")}    ];
}`}),o.push({filename:"route",language:"php",filenameDisplay:"route (片段)",content:`// ${e} 路由 - route/app.php
use app\\controller\\${e}Controller;

Route::group('${t}', function () {
    Route::get('list', '${e}Controller@index');
    Route::post('save', '${e}Controller@save');
    Route::get('read/:id', '${e}Controller@read');
    Route::put('update/:id', '${e}Controller@update');
    Route::delete('delete/:id', '${e}Controller@delete');
});`}),o.push({filename:"vue",language:"html",filenameDisplay:`${e}List.vue`,content:`<<template>
  <div class="page-container">
    <div class="toolbar">
      <el-button type="primary" @click="showDialog()">新增</el-button>
      <el-input v-model="keyword" placeholder="搜索" style="width:220px;margin-left:auto" clearable />
    </div>
    <el-table :data="tableData" v-loading="loading" stripe>
${u.filter(l=>!["created_at","updated_at","deleted_at"].includes(l.name)).slice(0,6).map(l=>`      <el-table-column prop="${l.name}" label="${l.comment||l.name}" />`).join("\\n")}
      <el-table-column label="操作" width="160" fixed="right">
        \` + '<' + 'template #default="{ row }">' + \`
          <el-button link @click="showDialog(row)">编辑</el-button>
          <el-button link type="danger" @click="handleDelete(row.id)">删除</el-button>
        \` + '</' + 'template>' + \`
      </el-table-column>
    </el-table>
  </div>
\` + '</' + 'template>' + \`

\` + '<' + \`' + \`script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const loading = ref(false)
const tableData = ref<any[]>([])
const keyword = ref('')

async function fetchList() {
  loading.value = true
  try {
    const res = await fetch(\`/${$(t)}/list?keyword=\${keyword.value}\`)
    const json = await res.json()
    tableData.value = json.data
  } finally { loading.value = false }
}

function showDialog(row?: any) {}
async function handleDelete(id: number) {
  await ElMessageBox.confirm('确认删除？')
  await fetch(\`/${$(t)}/delete/\${id}\`, { method: 'DELETE' })
  ElMessage.success('已删除')
  fetchList()
}

onMounted(fetchList)
<' + '/script>'`}),o}function Pe(){const e=P.value,t=w.value,s=Q.value,u=f.value,n=L.value,o=e.charAt(0).toLowerCase()+e.slice(1),l=[];return l.push({filename:"entity",language:"java",filenameDisplay:`${e}.java`,content:`package ${s}.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("${t}")
public class ${e} implements Serializable {
    private static final long serialVersionUID = 1L;

${u.map(a=>{const c=X(a.type);let d=`    /** ${a.comment} */
`;return a.isPk&&(d+=`    @TableId(type = IdType.AUTO)
`),d+=`    private ${c} ${D(a.name)};`,d}).join(`

`)}
}`}),l.push({filename:"dto",language:"java",filenameDisplay:`${e}DTO.java`,content:`package ${s}.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@ApiModel("${e}数据传输对象")
public class ${e}DTO {
${n.map(a=>{const c=X(a.type);let d=`    @ApiModelProperty("${a.comment}")
`;return a.nullable||(c==="String"?d+='    @NotBlank(message = "'+a.comment+`不能为空")
`:d+='    @NotNull(message = "'+a.comment+`不能为空")
`),a.type.includes("varchar")&&a.type.match(/\((\d+)\)/)&&(d+=`    @Size(max = ${a.type.match(/\((\d+)\)/)[1]})
`),d+=`    private ${c} ${D(a.name)};`,d}).join(`

`)}
}`}),l.push({filename:"vo",language:"java",filenameDisplay:`${e}VO.java`,content:`package ${s}.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@ApiModel("${e}视图对象")
public class ${e}VO {
${u.map(a=>`    @ApiModelProperty("${a.comment}")
    private ${X(a.type)} ${D(a.name)};`).join(`

`)}
}`}),l.push({filename:"mapper",language:"java",filenameDisplay:`${e}Mapper.java`,content:`package ${s}.mapper;

import ${s}.entity.${e};
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ${e}Mapper extends BaseMapper<${e}> {
}`}),l.push({filename:"mapperXml",language:"xml",filenameDisplay:`${e}Mapper.xml`,content:`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="${s}.mapper.${e}Mapper">

    <resultMap id="BaseResultMap" type="${s}.entity.${e}">
${u.map(a=>`        <result column="${a.name}" property="${D(a.name)}"/>`).join(`
`)}    </resultMap>

</mapper>`}),l.push({filename:"service",language:"java",filenameDisplay:`I${e}Service.java`,content:`package ${s}.service;

import com.baomidou.mybatisplus.extension.service.IService;
import ${s}.entity.${e};
import ${s}.dto.${e}DTO;
import ${s}.vo.${e}VO;

public interface I${e}Service extends IService<${e}> {
    Object getPage(long current, long size);
    ${e}VO getById(Long id);
    ${e}VO create(${e}DTO dto);
    ${e}VO update(Long id, ${e}DTO dto);
    void delete(Long id);
}`}),l.push({filename:"serviceImpl",language:"java",filenameDisplay:`${e}ServiceImpl.java`,content:`package ${s}.service.impl;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import ${s}.entity.${e};
import ${s}.mapper.${e}Mapper;
import ${s}.service.I${e}Service;
import ${s}.dto.${e}DTO;
import ${s}.vo.${e}VO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ${e}ServiceImpl extends ServiceImpl<${e}Mapper, ${e}> implements I${e}Service {

    @Override
    public Object getPage(long current, long size) {
        Page<${e}> page = this.page(new Page<>(current, size));
        return page;
    }

    @Override
    public ${e}VO getById(Long id) {
        ${e} entity = this.getById(id);
        return entityToVo(entity);
    }

    @Override
    public ${e}VO create(${e}DTO dto) {
        ${e} entity = new ${e}();
        BeanUtils.copyProperties(dto, entity);
        this.save(entity);
        return entityToVo(entity);
    }

    @Override
    public ${e}VO update(Long id, ${e}DTO dto) {
        ${e} entity = this.getById(id);
        BeanUtils.copyProperties(dto, entity);
        this.updateById(entity);
        return entityToVo(entity);
    }

    @Override
    public void delete(Long id) {
        this.removeById(id);
    }

    private ${e}VO entityToVo(${e} entity) {
        ${e}VO vo = new ${e}VO();
        BeanUtils.copyProperties(entity, vo);
        return vo;
    }
}`}),l.push({filename:"controller",language:"java",filenameDisplay:`${e}Controller.java`,content:`package ${s}.controller;

import ${s}.service.I${e}Service;
import ${s}.dto.${e}DTO;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
${r.swagger?"import io.swagger.annotations.Api;":""}

@RestController
@RequestMapping("/api/${$(t)}")
@RequiredArgsConstructor
${r.swagger?`@Api(tags = "${e}管理")`:""}
public class ${e}Controller {

    private final I${e}Service ${o}Service;

    @GetMapping
${r.swagger?`    @ApiOperation("获取${e}列表")`:""}
    public Object list(
            @RequestParam(defaultValue = "1") long current,
            @RequestParam(defaultValue = "15") long size
    ) {
        return ${o}Service.getPage(current, size);
    }

    @PostMapping
${r.swagger?`    @ApiOperation("创建${e}")`:""}
    public Object create(@RequestBody ${e}DTO dto) {
        return ${o}Service.create(dto);
    }

    @GetMapping("/{id}")
${r.swagger?`    @ApiOperation("获取${e}详情")`:""}
    public Object detail(@PathVariable Long id) {
        return ${o}Service.getById(id);
    }

    @PutMapping("/{id}")
${r.swagger?`    @ApiOperation("更新${e}")`:""}
    public Object update(@PathVariable Long id, @RequestBody ${e}DTO dto) {
        return ${o}Service.update(id, dto);
    }

    @DeleteMapping("/{id}")
${r.swagger?`    @ApiOperation("删除${e}")`:""}
    public Object delete(@PathVariable Long id) {
        ${o}Service.delete(id);
        return "ok";
    }
}`}),l}function je(){var l;const e=P.value,t=w.value,s=f.value,u=L.value;e.charAt(0).toLowerCase()+e.slice(1);const n=[];let o=`from django.db import models
${r.softDelete?"from django.utils import timezone\\n":""}
class ${e}(models.Model):
${s.map(a=>{var V;const c=ue(a.type);let d="";if(c.includes("CharField"))d=`max_length=${((V=a.type.match(/varchar\((\d+)\)/))==null?void 0:V[1])||"255"}`;else if(c.includes("IntegerField"))d="";else if(c.includes("DecimalField")){const J=a.type.match(/decimal\((\d+),(\d+)\)/);d=J?`max_digits=${J[1]}, decimal_places=${J[2]}`:"max_digits=10, decimal_places=2"}else c.includes("TextField")?d="":c.includes("BooleanField")?d=a.default==="1"?"default=True":a.default==="0"?"default=False":"":c.includes("DateTimeField")?d=a.nullable?"null=True, blank=True":"auto_now_add=True":c.includes("DateField")?d=a.nullable?"null=True, blank=True":"auto_now=True":c.includes("JSONField")||c.includes("json")?d="null=True, blank=True":d=a.nullable?"null=True, blank=True":"max_length=255";return a.isPk&&(d+=", primary_key=True"),`    ${a.name} = ${c}(${d})  # ${a.comment}`}).join(`
`)}
${r.timestamps?`
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')
`:""}
${r.softDelete?`    deleted_at = models.DateTimeField(null=True, blank=True, default=None)

    def delete(self, using=None, keep_parents=False):
        self.deleted_at = timezone.now()
        self.save()

    class Objects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(deleted_at__isnull=True)

    objects = Objects()
`:""}

    class Meta:
        db_table = '${t}'
        verbose_name = '${t}'
        verbose_name_plural = verbose_name

    def __str__(self):
        return str(self.${((l=u[0])==null?void 0:l.name)||"id"})
`;return n.push({filename:"model",language:"python",filenameDisplay:`${e}/models.py`,content:o}),n.push({filename:"serializer",language:"python",filenameDisplay:`${e}/serializers.py`,content:`from rest_framework import serializers
from .models import ${e}

class ${e}Serializer(serializers.ModelSerializer):
    class Meta:
        model = ${e}
        fields = '__all__'
${r.comments?`
        read_only_fields = ['id', 'created_at', 'updated_at']
`:""}`}),n.push({filename:"viewset",language:"python",filenameDisplay:`${e}/views.py`,content:`from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import ${e}
from .serializers import ${e}Serializer

class ${e}ViewSet(viewsets.ModelViewSet):
    queryset = ${e}.objects.all()
    serializer_class = ${e}Serializer
    permission_classes = [IsAuthenticated]
${r.pagination?"    pagination_class = None  # 使用全局分页设置":""}
`}),n.push({filename:"url",language:"python",filenameDisplay:`${e}/urls.py`,content:`from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ${e}ViewSet

router = DefaultRouter()
router.register(r'${t}', ${e}ViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
`}),n.push({filename:"admin",language:"python",filenameDisplay:`${e}/admin.py`,content:`from django.contrib import admin
from .models import ${e}

@admin.register(${e})
class ${e}Admin(admin.ModelAdmin):
    list_display = (${s.slice(0,6).map(a=>`'${a.name}'`).join(", ")})
    search_fields = (${u.slice(0,3).map(a=>`'${a.name}'`).join(", ")})
    list_filter = (${s.filter(a=>a.type.includes("tinyint")||a.type.includes("int")).slice(0,3).map(a=>`'${a.name}'`).join(", ")})
    ordering = ['-id']
`}),n.push({filename:"test",language:"python",filenameDisplay:`tests/test_${oe(e)}.py`,content:`import pytest
from django.test import TestCase
from rest_framework.test import APIClient
from django.urls import reverse
from ..models import ${e}

class ${e}APITestCase(APIClient):

    def setUp(self):
        self.client = APIClient()
        self.item = ${e}.objects.create(
${u.slice(0,3).map(a=>`            ${a.name}=${H(a.type)}`).join(",\\n")}
        )

    def test_list(self):
        resp = self.client.get('/api/${t}/')
        assert resp.status_code == 200

    def test_detail(self):
        resp = self.client.get(f'/api/{tbl}/{self.item.id}/')
        assert resp.status_code == 200

    def test_create(self):
        data = {
${u.slice(0,3).map(a=>`            '${a.name}': ${H(a.type)},`).join("\\n")}        }
        resp = self.client.post('/api/${t}/', data, format='json')
        assert resp.status_code == 201

    def test_delete(self):
        resp = self.client.delete(f'/api/{tbl}/{self.item.id}/')
        assert resp.status_code == 204
`}),n.push({filename:"factory",language:"python",filenameDisplay:`${e}/factories.py`,content:`import factory
from .models import ${e}

class ${e}Factory(factory.django.DjangoModelFactory):
    class Meta:
        model = ${e}

${u.map(a=>{const c=H(a.type);return`    ${a.name} = factory.LambdaFunction(lambda n: ${c})`}).join(`
`)}
`}),n}function xe(){const e=P.value,t=w.value;e.charAt(0).toLowerCase()+e.slice(1);const s=f.value,u=L.value,n=[];let o=s.map(l=>{const a=ce(l.type);let c=`    ${D(l.name)}: {
        type: ${a},`;return l.nullable&&(c+=`
        allowNull: true,`),l.default!==void 0&&l.default!==""&&l.default!=="NULL"&&(c+=`
        defaultValue: ${l.default},`),l.isPk&&l.type.includes("int")&&(c+=`
        primaryKey: true,
        autoIncrement: true,`),l.comment&&(c+=`
        comment: '${l.comment}',`),c+=`
    },`,c}).join(`
`);return n.push({filename:"model",language:"javascript",filenameDisplay:`${e}.js (Sequelize Model)`,content:`module.exports = (sequelize, DataTypes) => {
    const ${e} = sequelize.define('${t}', {
${o}
    }, {
        tableName: '${t}',
        timestamps: ${r.timestamps},
        createdAt: 'created_at',
        updatedAt: 'updated_at',
${r.softDelete?`        deletedAt: 'deleted_at',
        paranoid: true,`:""}
        indexes: [
            { fields: ['${ie.value.name||"id"}'] }
        ]
    });

    ${e}.associate = function(models) {
        // 定义关联关系
    };

    return ${e};
};`}),n.push({filename:"controller",language:"javascript",filenameDisplay:`${e}Controller.js`,content:`const { ${e} } = require('../models');

${r.comments?`/**
 * 获取列表
 */`:""}exports.list = async (req, res) => {
    try {
${r.pagination?`        const { page = 1, limit = 15 } = req.query;
        const offset = (parseInt(page) - 1) * parseInt(limit);
        const { count, rows } = await ${e}.findAndCountAll({
            offset,
            limit: parseInt(limit),
            order: [['id', 'DESC']],
        });
        res.json({ code: 200, data: rows, total: count });`:`        const list = await ${e}.findAll({ order: [['id', 'DESC']] });
        res.json({ code: 200, data: list });`}
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

${r.comments?`/**
 * 创建
 */`:""}exports.create = async (req, res) => {
    try {
        const item = await ${e}.create(req.body);
        res.status(201).json({ code: 201, data: item });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

${r.comments?`/**
 * 详情
 */`:""}exports.detail = async (req, res) => {
    try {
        const item = await ${e}.findByPk(req.params.id);
        if (!item) return res.status(404).json({ code: 404, message: '未找到' });
        res.json({ code: 200, data: item });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

${r.comments?`/**
 * 更新
 */`:""}exports.update = async (req, res) => {
    try {
        const item = await ${e}.findByPk(req.params.id);
        if (!item) return res.status(404).json({ code: 404, message: '未找到' });
        await item.update(req.body);
        res.json({ code: 200, data: item });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};

${r.comments?`/**
 * 删除
 */`:""}exports.destroy = async (req, res) => {
    try {
        const item = await ${e}.findByPk(req.params.id);
        if (!item) return res.status(404).json({ code: 404, message: '未找到' });
        await item.destroy();
        res.json({ code: 200, message: '删除成功' });
    } catch (error) {
        res.status(500).json({ code: 500, message: error.message });
    }
};`}),n.push({filename:"router",language:"javascript",filenameDisplay:`${e}Routes.js`,content:`const express = require('express');
const router = express.Router();
const controller = require('./controllers/${e}Controller');

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.detail);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;`}),n.push({filename:"service",language:"javascript",filenameDisplay:`${e}Service.js`,content:`const { ${e} } = require('../models');

class ${e}Service {
    static async findAll(options = {}) {
        return await ${e}.findAll({ ...options, order: [['id', 'DESC']] });
    }

    static async findById(id) {
        return await ${e}.findByPk(id);
    }

    static async create(data) {
        return await ${e}.create(data);
    }

    static async update(id, data) {
        const item = await this.findById(id);
        if (!item) throw new Error('未找到');
        return item.update(data);
    }

    static async delete(id) {
        const item = await this.findById(id);
        if (!item) throw new Error('未找到');
        return item.destroy();
    }
}

module.exports = ${e}Service;`}),n.push({filename:"dto",language:"javascript",filenameDisplay:`${e}Validator.js`,content:`const { body, param, validationResult } = require('express-validator');

exports.createRules = [
${u.map(l=>{var d;const a=I(l),c=[];if(a.includes("required")&&c.push(`body('${l.name}').notEmpty().withMessage('${l.comment||l.name}不能为空')`),a.includes("max:")){const V=(d=a.match(/max:(\d+)/))==null?void 0:d[1];V&&c.push(`body('${l.name}').isLength({ max: ${V} })`)}return`    ${c.length>0?c.join(".\\n    "):`body('${l.name}').optional()`}`}).join(",\\n")}
];

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ code: 422, errors: errors.array() });
    }
    next();
};`}),n.push({filename:"middleware",language:"javascript",filenameDisplay:`${e}Middleware.js`,content:`const ${e}Service = require('../services/${e}Service');

const errorHandler = (err, req, res, next) => {
    console.error('[${e}]', err.message);
    res.status(err.status || 500).json({
        code: err.status || 500,
        message: process.env.NODE_ENV === 'development' ? err.message : '服务器内部错误'
    });
};

const notFoundHandler = (req, res) => {
    res.status(404).json({ code: 404, message: '资源不存在' });
};

module.exports = { errorHandler, notFoundHandler };`}),n}function Ce(){const e=P.value,t=w.value,s=Q.value,u=f.value,n=L.value,o=[];return o.push({filename:"model",language:"go",filenameDisplay:`${e}.go`,content:`package model

import (
	"time"
)

type ${e} struct {
${u.map(l=>{const a=W(l.type);return`	${U(l.name)} \`${a} \`json:"${D(l.name)}"\`gorm:"column:${l.name}"\``}).join(`
`)}
}

func (${e}) TableName() string {
	return "${t}"
}
`}),o.push({filename:"handler",language:"go",filenameDisplay:`${e}Handler.go`,content:`package handler

import (
	"net/http"
	"strconv"

	"${s}/model"
	"${s}/service"
	"github.com/gin-gonic/gin"
)

func List${e}(c *gin.Context) {
${r.pagination?`	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "15"))
	list, total := service.List${e}(page, limit)`:`	list := service.GetAll${e}()`}
	c.JSON(http.StatusOK, gin.H{"code": 200, "data": list${r.pagination?', "total": total':""}})
}

func Get${e}(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)
	item := service.Get${e}(uint(id))
	if item.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{"code": 404, "message": "未找到"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"code": 200, "data": item})
}

func Create${e}(c *gin.Context) {
	var item model.${e}
	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"code": 400, "message": err.Error()})
		return
	}
	service.Create${e}(&item)
	c.JSON(http.StatusCreated, gin.H{"code": 201, "data": item})
}

func Update${e}(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)
	var item model.${e}
	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"code": 400, "message": err.Error()})
		return
	}
	service.Update${e}(uint(id), &item)
	c.JSON(http.StatusOK, gin.H{"code": 200, "message": "更新成功"})
}

func Delete${e}(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)
	service.Delete${e}(uint(id))
	c.JSON(http.StatusOK, gin.H{"code": 200, "message": "删除成功"})
}`}),o.push({filename:"router",language:"go",filenameDisplay:`${e}Router.go`,content:`package router

import (
	"${s}/handler"

	"github.com/gin-gonic/gin"
)

func Setup${e}Routes(rg *gin.RouterGroup) {
	rg := rg.Group("/${$(t)}")
	{
		rg.GET("", handler.List${e})
		rg.POST("", handler.Create${e})
		rg.GET("/:id", handler.Get${e})
		rg.PUT("/:id", handler.Update${e})
		rg.DELETE("/:id", handler.Delete${e})
	}
}`}),o.push({filename:"service",language:"go",filenameDisplay:`${e}Service.go`,content:`package service

import (
	"${s}/model"

	"gorm.io/gorm"
)

func List${e}(page, limit int) ([]model.${e}, int64) {
	var list []model.${e}
	var total int64
	db.Offset((page - 1) * limit).Limit(limit).Find(&list).Count(-&total)
	return list, total
}

func GetAll${e}() []model.${e} {
	var list []model.${e}
	db.Find(&list)
	return list
}

func Get${e}(id uint) model.${e} {
	var item model.${e}
	db.First(&item, id)
	return item
}

func Create${e}(item *model.${e}) {
	db.Create(item)
}

func Update${e}(id uint, item *model.${e}) {
	db.Model(&model.${e}{ID: id}).Updates(item)
}

func Delete${e}(id uint) {
	db.Delete(&model.${e}{ID: id})
}`}),o.push({filename:"dto",language:"go",filenameDisplay:`${e}Request.go`,content:`package dto

type ${e}Request struct {
${n.map(l=>{const a=W(l.type);return`	${U(l.name)} ${a} \`json:"${D(l.name)}" binding:"${l.nullable?"omitempty,":""}${l.name.includes("email")?"email":""}"\``}).join(`
`)}
}`}),o.push({filename:"response",language:"go",filenameDisplay:`${e}Response.go`,content:`package response

type ApiResponse struct {
	Code   int         \`json:"code"\`
	Message string     \`json:"message,omitempty"\`
	Data   interface{} \`json:"data,omitempty"\`
	Total  int64       \`json:"total,omitempty"\`
}

func Success(data interface{}) ApiResponse {
	return ApiResponse{Code: 200, Data: data}
}

func SuccessList(data interface{}, total int64) ApiResponse {
	return ApiResponse{Code: 200, Data: data, Total: total}
}

func Error(code int, msg string) ApiResponse {
	return ApiResponse{Code: code, Message: msg}
}`}),o}async function Se(e){try{await navigator.clipboard.writeText(g.value[e].content),alert(`${g.value[e].filenameDisplay||g.value[e].filename} 已复制到剪贴板`)}catch{alert("复制失败，请手动选择复制")}}async function Re(){const e=g.value.map(t=>`// ========== ${t.filenameDisplay||t.filename} ==========
${t.content}`).join(`

`);try{await navigator.clipboard.writeText(e),alert(`已复制全部 ${g.value.length} 个文件到剪贴板`)}catch{alert("复制失败，请手动操作")}}async function Le(){const e=(await Me(async()=>{const{default:l}=await import("https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js");return{default:l}},[])).default,t=new e,s=b.value.name.toLowerCase().replace(/\s+/g,"-");g.value.forEach(l=>{const a=l.filenameDisplay||l.filename;t.file(`${s}/${a}`,l.content)});const u=await t.generateAsync({type:"blob"}),n=URL.createObjectURL(u),o=document.createElement("a");o.href=n,o.download=`${P.value}_${window.location.hostname.replace(/\./g,"")}_${Date.now()}.zip`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}return(e,t)=>{var s,u;return p(),m("div",Fe,[t[36]||(t[36]=i("div",{class:"page-header"},[i("h1",{class:"page-title"},"CRUD 代码生成器"),i("p",{class:"page-desc"},"根据数据库表结构自动生成全栈增删改查代码，支持多框架、多语言")],-1)),i("div",Ue,[i("div",Ve,[i("section",Be,[t[14]||(t[14]=i("h3",{class:"section-title"},"目标框架",-1)),i("div",ze,[(p(),m(E,null,A(F,n=>i("div",{key:n.id,class:q(["framework-card",{active:B.value===n.id}]),onClick:o=>me(n.id)},[i("span",He,y(n.icon),1),i("span",Je,y(n.name),1)],10,Ge)),64))])]),i("section",Ke,[t[15]||(t[15]=i("h3",{class:"section-title"},"快速模板",-1)),i("div",Ye,[(p(),m(E,null,A(ne,n=>i("button",{key:n.id,class:q(["chip-btn",{active:R.value===n.id}]),onClick:o=>pe(n)},y(n.name),11,Xe)),64)),i("button",{class:q(["chip-btn",{active:R.value==="custom"}]),onClick:$e},"自定义",2)])]),i("section",Ze,[t[19]||(t[19]=i("h3",{class:"section-title"},"基础配置",-1)),i("div",Qe,[i("div",We,[t[16]||(t[16]=i("label",null,"表名",-1)),v(i("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>C.value=n),type:"text",placeholder:"如：users"},null,512),[[j,C.value]])]),i("div",et,[t[17]||(t[17]=i("label",null,"模型名（可选）",-1)),v(i("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>M.value=n),type:"text",placeholder:"自动从表名推导"},null,512),[[j,M.value]])])]),b.value.hasNamespace?(p(),m("div",tt,[i("div",at,[i("label",null,y(b.value.namespaceLabel||"命名空间"),1),v(i("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>K.value=n),type:"text",placeholder:b.value.defaultNamespace},null,8,nt),[[j,K.value]])])])):k("",!0),b.value.hasPackageName?(p(),m("div",lt,[i("div",st,[t[18]||(t[18]=i("label",null,"包名",-1)),v(i("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>Y.value=n),type:"text",placeholder:b.value.defaultPackage||"com.example"},null,8,it),[[j,Y.value]])])])):k("",!0)]),i("section",ot,[i("div",rt,[t[20]||(t[20]=i("h3",{class:"section-title"},"字段定义",-1)),i("div",ut,[i("button",{class:q({active:x.value==="sql"}),onClick:t[4]||(t[4]=n=>x.value="sql")},"SQL输入",2),i("button",{class:q({active:x.value==="visual"}),onClick:t[5]||(t[5]=n=>x.value="visual")},"可视化编辑",2)])]),x.value==="sql"?(p(),m("div",ct,[v(i("textarea",{"onUpdate:modelValue":t[6]||(t[6]=n=>N.value=n),rows:"8",placeholder:Qt,class:"sql-textarea"},null,512),[[j,N.value]]),i("div",dt,[i("label",mt,[i("input",{type:"file",accept:".sql,.txt",onChange:ve},null,32),t[21]||(t[21]=Ee(" 📂 上传SQL文件 ",-1))]),i("button",{class:"btn-parse",onClick:ee,disabled:z.value},y(z.value?"解析中...":"解析表结构"),9,pt)])])):k("",!0),x.value==="visual"?(p(),m("div",$t,[i("div",ft,[(p(!0),m(E,null,A(f.value,(n,o)=>(p(),m("div",{key:o,class:"field-row"},[v(i("input",{"onUpdate:modelValue":l=>n.name=l,placeholder:"字段名",class:"fld fld-name"},null,8,gt),[[j,n.name]]),v(i("select",{"onUpdate:modelValue":l=>n.type=l,class:"fld fld-type"},[(p(),m(E,null,A(le,l=>i("option",{key:l,value:l},y(l),9,yt)),64))],8,vt),[[Ne,n.type]]),v(i("input",{"onUpdate:modelValue":l=>n.comment=l,placeholder:"注释",class:"fld fld-comment"},null,8,bt),[[j,n.comment]]),i("label",ht,[v(i("input",{type:"checkbox","onUpdate:modelValue":l=>n.nullable=l},null,8,_t),[[T,n.nullable]]),t[22]||(t[22]=i("span",null,"可空",-1))]),["id","created_at","updated_at","deleted_at"].includes(n.name)?k("",!0):(p(),m("label",kt,[v(i("input",{type:"checkbox","onUpdate:modelValue":l=>n.isPk=l},null,8,Dt),[[T,n.isPk]]),t[23]||(t[23]=i("span",null,"主键",-1))])),i("button",{class:"btn-rm-fld",onClick:l=>ge(o),title:"删除"},"×",8,Tt)]))),128))]),i("button",{class:"btn-add-fld",onClick:fe},"＋ 添加字段")])):k("",!0)]),i("section",wt,[t[24]||(t[24]=i("h3",{class:"section-title"},"生成内容",-1)),i("div",Pt,[(p(!0),m(E,null,A(te.value,n=>(p(),m("label",{key:n.value,class:"chk-item"},[v(i("input",{type:"checkbox",value:n.value,"onUpdate:modelValue":t[7]||(t[7]=o=>O.value=o)},null,8,jt),[[T,O.value]]),i("span",null,y(n.label),1)]))),128))])]),i("section",xt,[t[30]||(t[30]=i("h3",{class:"section-title"},"高级选项",-1)),i("div",Ct,[b.value.hasTimestamps?(p(),m("label",St,[v(i("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=n=>r.timestamps=n)},null,512),[[T,r.timestamps]]),t[25]||(t[25]=i("span",null,"时间戳字段",-1))])):k("",!0),b.value.hasSoftDelete?(p(),m("label",Rt,[v(i("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=n=>r.softDelete=n)},null,512),[[T,r.softDelete]]),t[26]||(t[26]=i("span",null,"软删除",-1))])):k("",!0),b.value.hasPagination?(p(),m("label",Lt,[v(i("input",{type:"checkbox","onUpdate:modelValue":t[10]||(t[10]=n=>r.pagination=n)},null,512),[[T,r.pagination]]),t[27]||(t[27]=i("span",null,"分页查询",-1))])):k("",!0),i("label",It,[v(i("input",{type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=n=>r.comments=n)},null,512),[[T,r.comments]]),t[28]||(t[28]=i("span",null,"详细注释",-1))]),b.value.hasSwagger?(p(),m("label",Et,[v(i("input",{type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=n=>r.swagger=n)},null,512),[[T,r.swagger]]),t[29]||(t[29]=i("span",null,"API文档注解",-1))])):k("",!0)])]),i("button",{class:"btn-generate",onClick:_e,disabled:G.value||f.value.length===0||O.value.length===0},y(G.value?"⏳ 生成中...":"✨ 生成代码"),9,At)]),g.value.length>0?(p(),m("div",qt,[i("div",Mt,[i("div",Nt,[i("span",Ot,y(g.value.length),1),t[31]||(t[31]=i("span",{class:"stat-label"},"文件数",-1))]),i("div",Ft,[i("span",Ut,y(se.value),1),t[32]||(t[32]=i("span",{class:"stat-label"},"总行数",-1))]),i("div",Vt,[i("span",Bt,y(f.value.length),1),t[33]||(t[33]=i("span",{class:"stat-label"},"字段数",-1))]),i("div",{class:"stat-actions"},[i("button",{class:"btn-dl-zip",onClick:Le},"📦 下载ZIP"),i("button",{class:"btn-copy-all",onClick:Re},"📋 复制全部")])]),i("div",zt,[(p(!0),m(E,null,A(g.value,(n,o)=>(p(),m("button",{key:o,class:q(["file-tab",{active:S.value===o}]),onClick:l=>S.value=o},y(n.filename),11,Gt))),128))]),i("div",Ht,[i("div",Jt,[i("span",Kt,y((s=g.value[S.value])==null?void 0:s.filename),1),i("button",{class:"btn-copy-one",onClick:t[13]||(t[13]=n=>Se(S.value))},"复制")]),i("pre",Yt,[i("code",null,y((u=g.value[S.value])==null?void 0:u.content),1)])])])):(p(),m("div",Xt,[t[34]||(t[34]=i("div",{class:"empty-icon"},"⚡",-1)),t[35]||(t[35]=i("p",null,"配置完成后点击「生成代码」",-1)),i("p",Zt,"支持 "+y(F.length)+" 种框架 · "+y(ae.value)+" 种代码类型",1)]))]),t[37]||(t[37]=Ae('<div class="usage-guide" data-v-44e90611><h3 data-v-44e90611>使用说明</h3><div class="guide-grid" data-v-44e90611><div class="guide-item" data-v-44e90611><strong data-v-44e90611>支持框架</strong><p data-v-44e90611>Laravel、ThinkPHP、SpringBoot、Django、Express+Sequelize、Go Gin</p></div><div class="guide-item" data-v-44e90611><strong data-v-44e90611>生成内容</strong><p data-v-44e90611>Model、Controller、Service、Repository、Migration、验证规则、路由、API文档等</p></div><div class="guide-item" data-v-44e90611><strong data-v-44e90611>快速开始</strong><p data-v-44e90611>选框架 → 选模板或粘贴SQL → 配置选项 → 一键生成 → 下载ZIP</p></div></div></div>',1))])}}}),aa=Oe(Wt,[["__scopeId","data-v-44e90611"]]);export{aa as default};
