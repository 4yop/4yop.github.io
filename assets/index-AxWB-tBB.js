import{A as se,c as o,d as l,F as _,r as C,h as p,l as A,i as S,e as m,t as a,v as ae,j as q,m as oe,p as i,s as re,a as r,n as j}from"./index-DhFDkrwQ.js";const ie={class:"max-w-4xl mx-auto px-4 py-6"},ue={class:"flex flex-col gap-8"},de={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ce=["onClick"],pe={class:"text-2xl mb-2"},me={class:"text-base font-semibold text-gray-800 mb-1"},be={class:"text-sm text-gray-600"},ve={class:"mb-4 flex gap-4"},ge={class:"flex items-center gap-2 cursor-pointer"},fe={class:"flex items-center gap-2 cursor-pointer"},xe={key:0},ye={class:"mb-3"},he={key:1},$e={class:"flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-blue-400 transition-colors"},_e={key:0,class:"mt-2 text-sm text-green-600"},Ce={key:0,class:"text-center"},Te=["disabled"],we={key:1},Ee={key:0,class:"p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4"},Re={class:"text-gray-800 mb-3 text-base"},Le=["value"],ke={class:"flex gap-8 mb-4 p-3 bg-gray-50 rounded-lg"},Ne={class:"flex items-center gap-2"},qe={class:"text-gray-600"},Me={class:"flex items-center gap-2"},Ue={class:"text-gray-600"},Ie={class:"overflow-x-auto mb-4"},Ae={class:"w-full border border-gray-200 rounded-md text-sm"},Se={class:"px-3 py-2 font-mono"},je={class:"px-3 py-2 text-blue-600"},Fe={class:"px-3 py-2"},Oe={class:"px-3 py-2"},Pe={class:"px-3 py-2 text-gray-500"},De={key:2},Be={class:"flex flex-wrap gap-4 mb-4"},He=["value"],Ve={class:"flex flex-wrap gap-5"},Qe={class:"flex items-center gap-2 cursor-pointer"},Je={class:"flex items-center gap-2 cursor-pointer"},Ye={class:"flex items-center gap-2 cursor-pointer"},ze={key:3,class:"text-center"},Ge=["disabled"],We={key:4},Ke={class:"flex flex-wrap gap-2 mb-4"},Xe=["onClick"],Ze={class:"border rounded overflow-hidden mb-4"},et={class:"flex justify-between items-center p-2 bg-gray-50 border-b"},tt={class:"font-semibold text-gray-800"},lt={class:"p-4 bg-gray-50 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap break-words text-left"},at=se({__name:"index",setup(nt){const T=i("laravel"),h=i("manual"),F=i(""),g=i(""),w=i(""),E=i(!1),R=i(!1),b=i([]),L=i(0),f=i(["model","controller"]),M=i(!0),k=i(!1),U=i(!0),u=i([]),$=i(0),O=[{id:"laravel",name:"Laravel",icon:"🐘",description:"Eloquent ORM + 资源控制器"},{id:"thinkphp",name:"ThinkPHP",icon:"⚡",description:"ThinkPHP模型 + 控制器"}],P=[{value:"model",label:"Model模型"},{value:"controller",label:"Controller控制器"},{value:"migration",label:"数据库迁移"},{value:"request",label:"表单验证"}],d=re(()=>b.value[L.value]||{name:"",fields:[]});function D(n){T.value=n,u.value=[]}function B(n){var s;const e=(s=n.target.files)==null?void 0:s[0];if(!e)return;const t=new FileReader;t.onload=v=>{var c;w.value=(c=v.target)==null?void 0:c.result,g.value=w.value},t.readAsText(e)}async function H(){E.value=!0;try{await new Promise(e=>setTimeout(e,500));const n=g.value||w.value;b.value=V(n),L.value=0}finally{E.value=!1}}function V(n){var v;const e=[],t=/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?\s*\(([\s\S]*?)\)\s*(?:ENGINE\s*=\s*\w+)?[^;]*;/gi;let s;for(;(s=t.exec(n))!==null;){const c=Q(s[2]);c.length>0&&e.push({name:s[1],fields:c})}if(e.length===0){const c=((v=n.match(/CREATE\s+TABLE\s+`?(\w+)`?/i))==null?void 0:v[1])||F.value||"example_table",x=J(n);e.push({name:c,fields:x.length>0?x:Y()})}return e}function Q(n){var t,s,v;const e=[];for(const c of n.split(`
`)){const x=c.trim();if(!x||x.startsWith("--")||/^(PRIMARY|KEY|INDEX|UNIQUE|FOREIGN|CONSTRAINT)/i.test(x))continue;const y=x.match(/^`?(\w+)`?\s+(\w+(?:\(\d+(?:,\d+)?\))?)\s*(.*?)(?:,\s*)?$/i);y&&e.push({name:y[1],type:y[2].toLowerCase(),nullable:!y[3].toUpperCase().includes("NOT NULL"),autoIncrement:y[3].toUpperCase().includes("AUTO_INCREMENT"),default:((s=(t=y[3].match(/DEFAULT\s+([^,\s]+)/i))==null?void 0:t[1])==null?void 0:s.replace(/['"]/g,""))||"",comment:((v=y[3].match(/COMMENT\s+['"](.*?)['"]/i))==null?void 0:v[1])||""})}return e}function J(n){return n.split(`
`).filter(e=>e.trim().startsWith("`")).map(e=>{const t=e.trim().match(/`(\w+)`\s+(\w+(?:\(\d+\))?)\s*(.*)/);return t?{name:t[1],type:t[2],nullable:!t[3].includes("NOT NULL"),default:"",comment:""}:null}).filter(Boolean)}function Y(){return[{name:"id",type:"int(11)",nullable:!1,default:"",comment:"主键ID"},{name:"name",type:"varchar(255)",nullable:!1,default:"",comment:"名称"},{name:"created_at",type:"timestamp",nullable:!0,default:"NULL",comment:"创建时间"}]}function N(n){return n.replace(/(^|_)([a-z])/g,(e,t,s)=>s.toUpperCase())}function z(n){const e=N(n);return e.charAt(0).toLowerCase()+e.slice(1)}function G(n){return n.includes("int")?"int":n.includes("varchar")||n.includes("text")?"string":n.includes("decimal")||n.includes("float")?"float":"mixed"}function W(n){return n.type.includes("int")?`'${n.name}' => 'integer'`:n.type.includes("decimal")||n.type.includes("float")?`'${n.name}' => 'float'`:n.type.includes("json")?`'${n.name}' => 'array'`:n.type.includes("timestamp")||n.type.includes("datetime")?`'${n.name}' => 'datetime'`:null}function I(n){var s;const e=[];n.nullable||e.push("required");const t=(s=n.type.match(/varchar\((\d+)\)/))==null?void 0:s[1];return t&&e.push(`max:${t}`),n.name.includes("email")&&e.push("email"),n.type.includes("int")&&e.push("integer"),e.join("|")||"nullable"}function K(){const n=N(d.value.name),e=d.value.name,t=d.value.fields;return T.value==="laravel"?{filename:`${n}.php`,content:`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;
${k.value?`use Illuminate\\Database\\Eloquent\\SoftDeletes;
`:""}
/**
 * ${n} 模型
${t.map(s=>` * @property ${G(s.type)} $${s.name} ${s.comment}`).join(`
`)}
 */
class ${n} extends Model
{
    use HasFactory${k.value?", SoftDeletes":""};

    protected $table = '${e}';

    protected $fillable = [
${t.filter(s=>!["id","created_at","updated_at"].includes(s.name)).map(s=>`        '${s.name}',`).join(`
`)}
    ];

    protected $casts = [
${t.map(s=>W(s)).filter(Boolean).map(s=>`        ${s},`).join(`
`)}
    ];
}`}:{filename:`${n}.php`,content:`<?php

namespace app\\model;

use think\\Model;

class ${n} extends Model
{
    protected $name = '${e}';
    protected $autoWriteTimestamp = ${M.value?"true":"false"};
}`}}function X(){const n=N(d.value.name),e=z(d.value.name),t=d.value.fields.filter(s=>!["id","created_at","updated_at"].includes(s.name));return T.value==="laravel"?{filename:`${n}Controller.php`,content:`<?php

namespace App\\Http\\Controllers;

use App\\Models\\${n};
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;

class ${n}Controller extends Controller
{
    public function index(): JsonResponse
    {
        $list = ${n}::paginate(15);
        return response()->json(['code' => 200, 'data' => $list]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([${t.map(s=>`
            '${s.name}' => '${I(s)}',`).join("")}
        ]);
        $item = ${n}::create($data);
        return response()->json(['code' => 201, 'data' => $item]);
    }

    public function show(${n} $${e}): JsonResponse
    {
        return response()->json(['code' => 200, 'data' => $${e}]);
    }

    public function update(Request $request, ${n} $${e}): JsonResponse
    {
        $${e}->update($request->all());
        return response()->json(['code' => 200, 'data' => $${e}]);
    }

    public function destroy(${n} $${e}): JsonResponse
    {
        $${e}->delete();
        return response()->json(['code' => 200, 'message' => '删除成功']);
    }
}`}:{filename:`${n}.php`,content:`<?php

namespace app\\controller;

use app\\model\\${n};
use think\\Request;

class ${n}
{
    public function index()
    {
        return json(['code' => 200, 'data' => ${n}::paginate(15)]);
    }

    public function save(Request $request)
    {
        $item = ${n}::create($request->post());
        return json(['code' => 201, 'data' => $item]);
    }

    public function read($id)
    {
        return json(['code' => 200, 'data' => ${n}::find($id)]);
    }

    public function update(Request $request, $id)
    {
        ${n}::where('id', $id)->update($request->put());
        return json(['code' => 200]);
    }

    public function delete($id)
    {
        ${n}::destroy($id);
        return json(['code' => 200]);
    }
}`}}function Z(){const n=d.value.name,e=d.value.fields;return{filename:`create_${n}_table.php`,content:`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('${n}', function (Blueprint $table) {
${e.map(t=>t.name==="id"?"            $table->id();":["created_at","updated_at"].includes(t.name)?null:t.type.includes("varchar")?`            $table->string('${t.name}')${t.nullable?"->nullable()":""}${t.comment?`->comment('${t.comment}')`:""};`:t.type.includes("int")?`            $table->integer('${t.name}')${t.nullable?"->nullable()":""};`:`            $table->string('${t.name}')${t.nullable?"->nullable()":""};`).filter(Boolean).join(`
`)}
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('${n}');
    }
};`}}function ee(){const n=N(d.value.name),e=d.value.fields.filter(t=>!["id","created_at","updated_at"].includes(t.name));return{filename:`${n}Request.php`,content:`<?php

namespace App\\Http\\Requests;

use Illuminate\\Foundation\\Http\\FormRequest;

class ${n}Request extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
${e.map(t=>`            '${t.name}' => '${I(t)}',`).join(`
`)}
        ];
    }

    public function attributes(): array
    {
        return [
${e.map(t=>`            '${t.name}' => '${t.comment||t.name}',`).join(`
`)}
        ];
    }
}`}}async function te(){R.value=!0;try{await new Promise(n=>setTimeout(n,800)),u.value=[],f.value.includes("model")&&u.value.push(K()),f.value.includes("controller")&&u.value.push(X()),f.value.includes("migration")&&u.value.push(Z()),f.value.includes("request")&&u.value.push(ee()),$.value=0}finally{R.value=!1}}async function le(n){try{await navigator.clipboard.writeText(u.value[n].content),alert(`${u.value[n].filename} 已复制到剪贴板`)}catch{alert("复制失败，请手动复制")}}function ne(){u.value.forEach(n=>{const e=new Blob([n.content],{type:"text/plain"}),t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=n.filename,s.click(),URL.revokeObjectURL(t)})}return(n,e)=>(r(),o("div",ie,[e[27]||(e[27]=l("div",{class:"page-header mb-6"},[l("h1",{class:"text-2xl font-bold mb-2 text-gray-800"},"增删改查生成器"),l("p",{class:"text-gray-600"},"根据MySQL表结构生成PHP框架的Model和Controller代码")],-1)),l("div",ue,[l("div",null,[e[10]||(e[10]=l("h3",{class:"text-gray-800 mb-4 text-lg"},"选择PHP框架",-1)),l("div",de,[(r(),o(_,null,C(O,t=>l("div",{key:t.id,class:j(["p-5 border-2 rounded-lg cursor-pointer transition-all duration-300 text-center bg-white",T.value===t.id?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-blue-500 hover:-translate-y-1 hover:shadow-md"]),onClick:s=>D(t.id)},[l("div",pe,a(t.icon),1),l("div",me,a(t.name),1),l("div",be,a(t.description),1)],10,ce)),64))])]),l("div",null,[e[16]||(e[16]=l("h3",{class:"text-gray-800 mb-4 text-lg"},"输入表结构",-1)),l("div",ve,[l("label",ge,[p(l("input",{type:"radio","onUpdate:modelValue":e[0]||(e[0]=t=>h.value=t),value:"manual"},null,512),[[A,h.value]]),e[11]||(e[11]=l("span",null,"手动输入",-1))]),l("label",fe,[p(l("input",{type:"radio","onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t),value:"upload"},null,512),[[A,h.value]]),e[12]||(e[12]=l("span",null,"上传SQL文件",-1))])]),h.value==="manual"?(r(),o("div",xe,[l("div",ye,[p(l("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>g.value=t),type:"text",placeholder:"请输入表名，如：users（可选，会从SQL中自动解析）",class:"w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"},null,512),[[S,g.value]])]),p(l("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>g.value=t),rows:"12",class:"w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-mono focus:outline-none focus:border-blue-500",placeholder:"请输入CREATE TABLE语句，例如：\r\nCREATE TABLE `users` (\r\n  `id` int(11) NOT NULL AUTO_INCREMENT,\r\n  `name` varchar(255) NOT NULL COMMENT '用户名',\r\n  `email` varchar(255) NOT NULL COMMENT '邮箱',\r\n  `created_at` timestamp NULL DEFAULT NULL,\r\n  PRIMARY KEY (`id`)\r\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"},null,512),[[S,g.value]])])):m("",!0),h.value==="upload"?(r(),o("div",he,[l("label",$e,[e[13]||(e[13]=l("span",{class:"text-3xl mb-2"},"📁",-1)),e[14]||(e[14]=l("span",{class:"text-gray-600"},"点击选择或拖拽SQL文件到此处",-1)),e[15]||(e[15]=l("span",{class:"text-sm text-gray-400 mt-1"},"支持 .sql .txt 文件",-1)),l("input",{type:"file",accept:".sql,.txt",class:"hidden",onChange:B},null,32)]),w.value?(r(),o("div",_e,"✅ 文件已加载，内容已填充到输入框")):m("",!0)])):m("",!0)]),g.value.trim()?(r(),o("div",Ce,[l("button",{onClick:H,disabled:E.value,class:"px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 transition-colors"},a(E.value?"解析中...":"解析表结构"),9,Te)])):m("",!0),b.value.length>0?(r(),o("div",we,[e[20]||(e[20]=l("h3",{class:"text-gray-800 mb-4 text-lg"},"解析结果",-1)),b.value.length>1?(r(),o("div",Ee,[l("h4",Re,"检测到多个表（共 "+a(b.value.length)+" 个），请选择：",1),p(l("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>L.value=t),class:"px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"},[(r(!0),o(_,null,C(b.value,(t,s)=>(r(),o("option",{key:s,value:s},a(t.name)+"（"+a(t.fields.length)+" 个字段） ",9,Le))),128))],512),[[ae,L.value]])])):m("",!0),l("div",ke,[l("div",Ne,[e[17]||(e[17]=l("span",{class:"font-semibold text-gray-800"},"表名:",-1)),l("span",qe,a(d.value.name),1)]),l("div",Me,[e[18]||(e[18]=l("span",{class:"font-semibold text-gray-800"},"字段数:",-1)),l("span",Ue,a(d.value.fields.length),1)])]),l("div",Ie,[l("table",Ae,[e[19]||(e[19]=l("thead",{class:"bg-gray-50"},[l("tr",null,[l("th",{class:"px-3 py-2 text-left border-b border-gray-200"},"字段名"),l("th",{class:"px-3 py-2 text-left border-b border-gray-200"},"类型"),l("th",{class:"px-3 py-2 text-left border-b border-gray-200"},"可空"),l("th",{class:"px-3 py-2 text-left border-b border-gray-200"},"默认值"),l("th",{class:"px-3 py-2 text-left border-b border-gray-200"},"注释")])],-1)),l("tbody",null,[(r(!0),o(_,null,C(d.value.fields,t=>(r(),o("tr",{key:t.name,class:"border-b border-gray-100 hover:bg-gray-50"},[l("td",Se,a(t.name),1),l("td",je,a(t.type),1),l("td",Fe,a(t.nullable?"是":"否"),1),l("td",Oe,a(t.default),1),l("td",Pe,a(t.comment),1)]))),128))])])])])):m("",!0),b.value.length>0?(r(),o("div",De,[e[24]||(e[24]=l("h3",{class:"text-gray-800 mb-4 text-lg"},"生成选项",-1)),l("div",Be,[(r(),o(_,null,C(P,t=>l("label",{key:t.value,class:"flex items-center gap-2 cursor-pointer"},[p(l("input",{type:"checkbox",value:t.value,"onUpdate:modelValue":e[5]||(e[5]=s=>f.value=s)},null,8,He),[[q,f.value]]),l("span",null,a(t.label),1)])),64))]),l("div",Ve,[l("label",Qe,[p(l("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=t=>M.value=t)},null,512),[[q,M.value]]),e[21]||(e[21]=l("span",null,"包含时间戳字段",-1))]),l("label",Je,[p(l("input",{type:"checkbox","onUpdate:modelValue":e[7]||(e[7]=t=>k.value=t)},null,512),[[q,k.value]]),e[22]||(e[22]=l("span",null,"包含软删除",-1))]),l("label",Ye,[p(l("input",{type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=t=>U.value=t)},null,512),[[q,U.value]]),e[23]||(e[23]=l("span",null,"生成详细注释",-1))])])])):m("",!0),b.value.length>0&&f.value.length>0?(r(),o("div",ze,[l("button",{onClick:te,disabled:R.value,class:"px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 text-base transition-colors"},a(R.value?"生成中...":"生成代码"),9,Ge)])):m("",!0),u.value.length>0?(r(),o("div",We,[e[25]||(e[25]=l("h3",{class:"text-gray-800 mb-4 text-lg"},"生成的代码",-1)),l("div",Ke,[(r(!0),o(_,null,C(u.value,(t,s)=>(r(),o("button",{key:s,class:j(["px-3 py-2 rounded cursor-pointer transition-all duration-300 text-sm border",$.value===s?"bg-blue-500 text-white border-blue-500":"bg-gray-50 border-gray-200 hover:bg-gray-100"]),onClick:v=>$.value=s},a(t.filename),11,Xe))),128))]),l("div",Ze,[l("div",et,[l("span",tt,a(u.value[$.value].filename),1),l("button",{onClick:e[9]||(e[9]=t=>le($.value)),class:"px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50"}," 📋 复制代码 ")]),l("pre",lt,[l("code",null,a(u.value[$.value].content),1)])]),l("div",{class:"text-center"},[l("button",{onClick:ne,class:"px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"}," ⬇️ 下载所有文件 ")])])):m("",!0),e[26]||(e[26]=oe('<div class="p-4 bg-gray-50 rounded-lg"><h3 class="text-gray-800 mb-4 text-lg">使用说明</h3><div class="mb-4"><h4 class="font-semibold text-gray-800 mb-2">支持的框架</h4><ul class="ml-5 space-y-1 text-gray-600 text-sm list-disc"><li><strong>Laravel</strong>：生成Eloquent模型和资源控制器</li><li><strong>ThinkPHP</strong>：生成模型和控制器代码</li></ul></div><div><h4 class="font-semibold text-gray-800 mb-2">使用步骤</h4><ol class="ml-5 space-y-1 text-gray-600 text-sm list-decimal"><li>选择要使用的PHP框架</li><li>输入MySQL表结构或上传SQL文件</li><li>点击&quot;解析表结构&quot;分析字段信息</li><li>选择要生成的代码类型</li><li>点击&quot;生成代码&quot;获取结果</li></ol></div></div>',1))])]))}});export{at as default};
