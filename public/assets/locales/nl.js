Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),n=t.length>>>0;if(0===n)return-1;var r=0;if(arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&1/0!==r&&r!==-1/0&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=n)return-1;for(var i=r>=0?r:Math.max(n-Math.abs(r),0);n>i;i++)if(i in t&&t[i]===e)return i;return-1});var I18n=I18n||{};I18n.defaultLocale="en",I18n.fallbacks=!1,I18n.defaultSeparator=".",I18n.locale=null,I18n.PLACEHOLDER=/(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,I18n.fallbackRules={},I18n.pluralizationRules={en:function(e){return 0==e?["zero","none","other"]:1==e?"one":"other"}},I18n.getFallbacks=function(e){if(e===I18n.defaultLocale)return[];if(!I18n.fallbackRules[e]){for(var t=[],n=e.split("-"),r=1;n.length>r;r++)t.push(n.slice(0,r).join("-"));t.push(I18n.defaultLocale),I18n.fallbackRules[e]=t}return I18n.fallbackRules[e]},I18n.isValidNode=function(e,t,n){return null!==e[t]&&e[t]!==n},I18n.lookup=function(e,t){var n,t=t||{},r=e,i=this.prepareOptions(I18n.translations),s=t.locale||I18n.currentLocale(),a=i[s]||{},t=this.prepareOptions(t);for("object"==typeof e&&(e=e.join(this.defaultSeparator)),t.scope&&(e=t.scope.toString()+this.defaultSeparator+e),e=e.split(this.defaultSeparator);a&&e.length>0;)n=e.shift(),a=a[n];if(!a){if(I18n.fallbacks)for(var o=this.getFallbacks(s),l=0;o.length>l&&!(a=I18n.lookup(r,this.prepareOptions({locale:o[l]},t)));o++);!a&&this.isValidNode(t,"defaultValue")&&(a=t.defaultValue)}return a},I18n.prepareOptions=function(){for(var e,t={},n=arguments.length,r=0;n>r;r++)if(e=arguments[r])for(var i in e)this.isValidNode(t,i)||(t[i]=e[i]);return t},I18n.interpolate=function(e,t){t=this.prepareOptions(t);var n,r,i,s=e.match(this.PLACEHOLDER);if(!s)return e;for(var a=0;n=s[a];a++)i=n.replace(this.PLACEHOLDER,"$1"),r=t[i],this.isValidNode(t,i)||(r="[missing "+n+" value]"),regex=new RegExp(n.replace(/\{/gm,"\\{").replace(/\}/gm,"\\}")),e=e.replace(regex,r);return e},I18n.translate=function(e,t){t=this.prepareOptions(t);var n=this.lookup(e,t);try{return"object"==typeof n?"number"==typeof t.count?this.pluralize(t.count,e,t):n:this.interpolate(n,t)}catch(r){return this.missingTranslation(e)}},I18n.localize=function(e,t){switch(e){case"currency":return this.toCurrency(t);case"number":return e=this.lookup("number.format"),this.toNumber(t,e);case"percentage":return this.toPercentage(t);default:return e.match(/^(date|time)/)?this.toTime(e,t):t.toString()}},I18n.parseDate=function(e){var t,n;if("object"==typeof e)return e;if(t=e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2}))?(Z|\+0000)?/)){for(var r=1;6>=r;r++)t[r]=parseInt(t[r],10)||0;t[2]-=1,n=t[7]?new Date(Date.UTC(t[1],t[2],t[3],t[4],t[5],t[6])):new Date(t[1],t[2],t[3],t[4],t[5],t[6])}else"number"==typeof e?(n=new Date,n.setTime(e)):e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/)?(n=new Date,n.setTime(Date.parse(e))):(n=new Date,n.setTime(Date.parse(e)));return n},I18n.toTime=function(e,t){var n=this.parseDate(t),r=this.lookup(e);return n.toString().match(/invalid/i)?n.toString():r?this.strftime(n,r):n.toString()},I18n.strftime=function(e,t){var n=this.lookup("date");if(!n)return e.toString();n.meridian=n.meridian||["AM","PM"];var r=e.getDay(),i=e.getDate(),s=e.getFullYear(),a=e.getMonth()+1,o=e.getHours(),l=o,u=o>11?1:0,c=e.getSeconds(),h=e.getMinutes(),p=e.getTimezoneOffset(),d=Math.floor(Math.abs(p/60)),f=Math.abs(p)-60*d,m=(p>0?"-":"+")+(2>d.toString().length?"0"+d:d)+(2>f.toString().length?"0"+f:f);l>12?l-=12:0===l&&(l=12);var g=function(e){var t="0"+e.toString();return t.substr(t.length-2)},b=t;return b=b.replace("%a",n.abbr_day_names[r]),b=b.replace("%A",n.day_names[r]),b=b.replace("%b",n.abbr_month_names[a]),b=b.replace("%B",n.month_names[a]),b=b.replace("%d",g(i)),b=b.replace("%e",i),b=b.replace("%-d",i),b=b.replace("%H",g(o)),b=b.replace("%-H",o),b=b.replace("%I",g(l)),b=b.replace("%-I",l),b=b.replace("%m",g(a)),b=b.replace("%-m",a),b=b.replace("%M",g(h)),b=b.replace("%-M",h),b=b.replace("%p",n.meridian[u]),b=b.replace("%S",g(c)),b=b.replace("%-S",c),b=b.replace("%w",r),b=b.replace("%y",g(s)),b=b.replace("%-y",g(s).replace(/^0+/,"")),b=b.replace("%Y",s),b=b.replace("%z",m)},I18n.toNumber=function(e,t){t=this.prepareOptions(t,this.lookup("number.format"),{precision:3,separator:".",delimiter:",",strip_insignificant_zeros:!1});var n,r,i=0>e,s=Math.abs(e).toFixed(t.precision).toString(),a=s.split("."),o=[];for(e=a[0],n=a[1];e.length>0;)o.unshift(e.substr(Math.max(0,e.length-3),3)),e=e.substr(0,e.length-3);if(r=o.join(t.delimiter),t.precision>0&&(r+=t.separator+a[1]),i&&(r="-"+r),t.strip_insignificant_zeros){var l={separator:new RegExp(t.separator.replace(/\./,"\\.")+"$"),zeros:/0+$/};r=r.replace(l.zeros,"").replace(l.separator,"")}return r},I18n.toCurrency=function(e,t){return t=this.prepareOptions(t,this.lookup("number.currency.format"),this.lookup("number.format"),{unit:"$",precision:2,format:"%u%n",delimiter:",",separator:"."}),e=this.toNumber(e,t),e=t.format.replace("%u",t.unit).replace("%n",e)},I18n.toHumanSize=function(e,t){for(var n,r,i=1024,s=e,a=0;s>=i&&4>a;)s/=i,a+=1;return 0===a?(n=this.t("number.human.storage_units.units.byte",{count:s}),r=0):(n=this.t("number.human.storage_units.units."+[null,"kb","mb","gb","tb"][a]),r=0===s-Math.floor(s)?0:1),t=this.prepareOptions(t,{precision:r,format:"%n%u",delimiter:""}),e=this.toNumber(s,t),e=t.format.replace("%u",n).replace("%n",e)},I18n.toPercentage=function(e,t){return t=this.prepareOptions(t,this.lookup("number.percentage.format"),this.lookup("number.format"),{precision:3,separator:".",delimiter:""}),e=this.toNumber(e,t),e+"%"},I18n.pluralizer=function(e){return pluralizer=this.pluralizationRules[e],void 0!==pluralizer?pluralizer:this.pluralizationRules.en},I18n.findAndTranslateValidNode=function(e,t){for(i=0;e.length>i;i++)if(key=e[i],this.isValidNode(t,key))return t[key];return null},I18n.pluralize=function(e,t,n){var r;try{r=this.lookup(t,n)}catch(i){}if(!r)return this.missingTranslation(t);var s;return n=this.prepareOptions(n),n.count=e.toString(),pluralizer=this.pluralizer(this.currentLocale()),key=pluralizer(Math.abs(e)),keys="object"==typeof key&&key instanceof Array?key:[key],s=this.findAndTranslateValidNode(keys,r),null==s&&(s=this.missingTranslation(t,keys[0])),this.interpolate(s,n)},I18n.missingTranslation=function(){for(var e='[missing "'+this.currentLocale(),t=arguments.length,n=0;t>n;n++)e+="."+arguments[n];return e+='" translation]'},I18n.currentLocale=function(){return I18n.locale||I18n.defaultLocale},I18n.t=I18n.translate,I18n.l=I18n.localize,I18n.p=I18n.pluralize,I18n.translations={nl:{js:{share:{topic:"deel een link naar dit topic",post:"deel een link naar deze post"},edit:"bewerk de titel en categorie van dit topic",not_implemented:"Deze functie is helaas nog niet beschikbaar, sorry!",no_value:"Nee",yes_value:"Ja",of_value:"van",generic_error:"Sorry, deze onverwachte fout hadden wij niet verwacht!",log_in:"Log In",age:"Leeftijd",last_post:"Laatste post",admin_title:"Beheer",flags_title:"Meldingen",show_more:"meer...",links:"Links",faq:"FAQ",you:"Jij",suggested_topics:{title:"Aanbevolen Topics"},bookmarks:{not_logged_in:"Sorry, maar je moet ingelogd zijn om deze post aan je bladwijzer toe te voegen.",created:"Je hebt deze post aan je bladwijzer toegevoegd.",not_bookmarked:"Je hebt deze post gelezen; klik om deze aan je bladwijzer toe te voegen.",last_read:"Dit is de laatste post die je gelezen hebt."},new_topics_inserted:"{{count}} nieuwe topics.",show_new_topics:"Klik om te laten zien.",preview:"voorbeeld",cancel:"annuleer",save:"Bewaar veranderingen",saving:"Aan het opslaan...",saved:"Opgeslagen!",user_action_descriptions:{6:"reacties"},user:{information:"Gebruikersinformatie",profile:"Profiel",title:"Gebruiker",mute:"Demp",edit:"Bewerk Voorkeuren",download_archive:"download een archief van mijn posts",private_message:"Privé-berichten",private_messages:"Berichten",activity_stream:"Activiteit",preferences:"Voorkeuren",bio:"Over mij",change_password:"wijzig",invited_by:"Uitgenodigd door",trust_level:"Vertrouwensniveau",change_username:{action:"wijzig",title:"Wijzig Gebruikersnaam",confirm:"Er kunnen consequenties zijn als je je gebruikersnaam wijzigt. Weet je zeker dat je dit wilt doen?",taken:"Sorry maar die gebruikersnaam is al in gebruik.",error:"Er was een fout bij het wijzigen van je gebruikersnaam.",invalid:"Die gebruikersnaam is ongeldig. Het mag alleen nummers en letters bevatten"},change_email:{action:"wijzig",title:"Wijzig E-mail",taken:"Sorry dat e-mailadres is niet beschikbaar.",error:"Er was een fout bij het wijzigen van je e-mailadres. Wellicht is deze al in gebruik?",success:"We hebben je een mail gestuurd naar dat adres. Volg de bijgeleverde bevestigingsinstructies."},email:{title:"E-mail",instructions:"Je e-mail adres zal nooit openbaar zichtbaar zijn.",ok:"Dat ziet er goed uit! We zullen je een e-mail sturen ter bevestiging.",invalid:"Vul a.u.b. een geldig e-mailadres in.",authenticated:"Je e-mail is goedgekeurd bij {{provider}}.",frequency:"We zullen je alleen maar mailen als we je een tijd niet gezien hebben, en als je toevallig hetgeen waarover we je mailen nog niet hebt gezien op onze site."},name:{title:"Naam",instructions:"De langere versie van je naam; dit hoeft niet uniek te zijn.",too_short:"Je naam is te kort.",ok:"Wat een mooie naam!"},username:{title:"Gebruikersnaam",instructions:"Mensen kunnen naar je verwijzen als @{{username}}.",available:"Je gebruikersnaam is beschikbaar.",global_match:"Je e-mailadres komt overeen met je geregistreerde gebruikersnaam.",global_mismatch:"Al geregistreerd. Probeer {{suggestion}}?",not_available:"Niet beschikbaar. Try {{suggestion}}?",too_short:"Je gebruikersnaam is te kort.",too_long:"Je gebruikersnaam is te lang.",checking:"Beschikbaarheid controleren...",enter_email:"Gebruikersnaam gevonden. Vul het gekoppelde e-mailadres in."},last_posted:"Laatste Post",last_emailed:"Laatst Gemailed",last_seen:"Laatst Gezien",created:"Gemaakt Op",log_out:"Log Uit",website:"Website",email_settings:"E-mail",email_digests:{title:"Wanneer ik de site niet bezoek, stuur me een mail met de laatste updates",daily:"dagelijks",weekly:"wekelijks",bi_weekly:"elke twee weken"},email_direct:"Ontvang een mail wanneer iemand je quote, reageert op je post of je @gebruikersnaam noemt.",email_private_messages:"Ontvang een mail wanneer iemand je een privé-bericht heeft gestuurd.",other_settings:"Overige",new_topic_duration:{label:"Beschouw topics als nieuw wanneer",not_viewed:"ik ze nog heb niet bekeken",last_here:"ze gepost waren sinds ik hier voor het laast was",after_n_days:{one:"ze in de afgelopen dag gepost zijn",other:"ze de afgelopen {{count}} dagen gepost zijn"},after_n_weeks:{one:"ze in de afgelopen week gepost zijn",other:"ze in de laaste {{count}} weken gepost zijn"}},auto_track_topics:"Houd automatisch topics bij die ik bezoek",auto_track_options:{never:"nooit",always:"altijd",after_n_seconds:{one:"na 1 seconde",other:"na {{count}} seconden"},after_n_minutes:{one:"na 1 minuut",other:"na {{count}} minuten"}},invited:{title:"Uitnodigingen",user:"Uitgenodigde Gebruiker",none:"{{username}} heeft nog geen mensen uitgenodigd voor deze site.",redeemed:"Verbruikte Uitnodigingen",redeemed_at:"Verbruikt op",pending:"Uitnodigingen in Afwachting",topics_entered:"Topics Bezocht",posts_read_count:"Posts Gelezen",rescind:"Verwijder Uitnodiging",rescinded:"Uitnodiging Verwijderd",time_read:"Tijd Gelezen",days_visited:"Dagen Bezocht",account_age_days:"accountleeftijd in dagen"},password:{title:"Wachtwoord",too_short:"Je wachtwoord is te kort.",ok:"Je wachtwoord ziet er goed uit."},ip_address:{title:"Laatste IP-adres"},avatar:{title:"Avatar",instructions:"Wij gebruiken <a href='https://gravatar.com' target='_blank'>Gravatar</a> voor Avatars die op je e-mailadres gebaseerd zijn"},filters:{all:"Alle"}},loading:"Laden...",close:"Sluit",learn_more:"leer meer...",year:"jaar",year_desc:"topics die in de afgelopen 365 dagen gepost zijn",month:"maand",month_desc:"topics die in de afgelopen 30 dagen gepost zijn",week:"week",week_desc:"topics die in de afgelopen 7 dagen gepost zijn",first_post:"Eerste post",mute:"Demp",unmute:"Ont-demp",best_of:{title:"Beste Van",description:"Er zijn <b>{{count}}</b> posts in dit topic. Dat zijn een hoop! Zou je tijd willen besparen door je weergave aan te passen zodat deze alleen de posts laat zien met de meeste interactie en reacties?",button:'Verander naar "Beste Van"-weergave'},private_message_info:{title:"Privéconversatie",invite:"Nodig Anderen Uit..."},email:"E-mail",username:"Gebruikersnaam",last_seen:"Laatst Gezien",created:"Gemaakt Op",trust_level:"Vertrouwensniveau",create_account:{title:"Maak Een Account",action:"Maak er direct een!",invite:"Heb je nog geen account?",failed:'Er ging iets mis, wellicht is het e-mailadres al geregistreerd. Probeer de "Wachtwoord Vergeten"-link'},forgot_password:{title:"Wachtwoord Vergeten",action:"Ik ben mijn wachtwoord vergeten",invite:"Vul je gebruikersnaam of e-mailadres in, en we sturen je een wachtwoord-herstel mail.",reset:"Herstel Wachtwoord",complete:"Je zou binnenkort een mail moeten ontvangen met instructies hoe je je wachtwoord kan herstellen."},login:{title:"Log In",username:"Gebruikersnaam",password:"Wachtwoord",email_placeholder:"e-mailadres of gebruikersnaam",error:"Er is een onbekende fout opgetreden!",reset_password:"Herstel wachtwoord",logging_in:"Aan het Inloggen...",or:"Of",authenticating:"Authenticatie...",awaiting_confirmation:'Je account moet momenteel nog geactiveerd worden. Gebruik de "Wachtwoord Vergeten"-link om een nieuwe activatie-mail te versturen.',awaiting_approval:"Je account is nog niet goedgekeurd door een moderator. Je krijgt van ons een mail wanneer deze is goedgekeurd.",google:{title:"Log In met Google",message:"Authenticatie met Google (zorg ervoor dat je pop up blocker uitstaat)"},twitter:{title:"Log In met Twitter",message:"Authenticatie with Twitter (zorg ervoor dat je pop up blocker uitstaat)"},facebook:{title:"Log In met Facebook",message:"Authenticatie met Facebook (zorg ervoor dat je pop up blocker uitstaat)"},yahoo:{title:"Log In met Yahoo",message:"Authenticatie met Yahoo (zorg ervoor dat je pop up blocker uitstaat)"}},composer:{saving_draft_tip:"aan het opslaan",saved_draft_tip:"opgeslagen",saved_local_draft_tip:"lokaal opgeslagen",save_edit:"Bewaar Wijziging",reply:"Reageer",create_topic:"Maak Topic",create_pm:"Maak Privé-bericht",users_placeholder:"Voeg een gebruiker toe",title_placeholder:"Typ hier je title. Beschrijf binnen één zin waar deze discussie over gaat.",reply_placeholder:"Typ hier je reactie. Gebruik Markdown of BBCode voor de tekstopmaak. Sleep of plak een afbeelding hierin om deze te uploaden.",view_new_post:"Bekijk je nieuwe post.",saving:"Aan het Opslaan...",saved:"Opgeslagen!",saved_draft:"Je hebt nog een concept-post openstaan. Klik in dit veld om verder te gaan met bewerken.",uploading:"Aan het Uploaden...",show_preview:"laat voorbeeld zien &raquo;",hide_preview:"&laquo; verberg voorbeeld"},notifications:{title:"notificaties van @naam vermeldingen, reacties op je posts en topics, privé-berichten etc",none:"Je hebt momenteel geen notificaties.",more:"bekijk oudere notificaties",mentioned:"{{username}} heeft je genoemd in in {{link}}",quoted:"{{username}} heeft je gequote in {{link}}",replied:"{{username}} reageerde op je in {{link}}",posted:"{{username}} reageerde op {{link}}",edited:"{{username}} heeft je post bewerkt {{link}}",liked:"{{username}} waardeerde je post {{link}}",private_message:"{{username}} heeft je een privé-bericht gestuurd: {{link}}",invited_to_private_message:"{{username}} heeft je uitgenodigd voor een privé-bericht: {{link}}",invitee_accepted:"{{username}} heeft je uitnodiging geaccepteerd en heeft zich ingeschreven om deel te nemen.",moved_post:"{{username}} heeft je post verplaast naar {{link}}"},image_selector:{from_my_computer:"Vanaf Mijn Apparaat",from_the_web:"Vanaf Het Web",add_image:"Voeg Afbeelding Toe",remote_tip:"vul een internet-adres in van een afbeelding in de vorm: http://example.com/image.jpg",local_tip:"klik om een afbeelding vanaf je apparaat te selecteren.",upload:"Upload"},search:{title:"zoek naar topics, posts, gebruikers of categoriëen",placeholder:"typ je zoekterm hier",no_results:"Geen resultaten gevonden.",searching:"Zoeken ..."},site_map:"ga naar een andere topic-lijst of categorie",go_back:"ga terug",current_user:"ga naar je gebruikerspagina",favorite:{title:"Favoriet",help:"voeg dit topic toe aan je favorietenlisjt"},topics:{no_favorited:"Je hebt nog geen topics tussen je Favorieten staan. Om een topic toe te wijzen aan je Favorieten, klik of druk op de ster naast de topictitel..",no_unread:"Je hebt geen ongelezen topics om te lezen.",no_new:"Je hebt geen nieuwe topics om te lezen.",no_read:"Je hebt nog geen topics gelezen.",no_posted:"Je hebt nog niet in een topic gepost.",no_latest:"Er zijn geen populaire topics. Dat is best wel sneu."},topic:{create_in:"Maak een {{categoryName}} Topic",create:"Maak Topic",create_long:"Maak een Nieuw Topic",private_message:"Start een privé-gesprek",list:"Topics","new":"nieuw topic",title:"Topic",loading_more:"Meer Topics Aan Het Laden...",loading:"Bezig Met Laden Van topic...",missing:"Topic Niet Gevonden",not_found:{title:"Topic Niet Gevonden",description:"Sorry, we konden dat topic niet vinden. Wellicht is het verwijderd?"},unread_posts:"je hebt {{unread}} ongelezen posts in dit topic",new_posts:"er zijn {{new_posts}} nieuwe posts in dit topic sinds je dit voor het laatst gelezen hebt",likes:"er zijn {{likes}} waarderingen in dit topic",back_to_list:"Terug Naar Topic-lijst",options:"Topic Opties",show_links:"laat links binnen dit topic zien",toggle_information:"Zet topic details Aan/Uit",read_more_in_category:"Wil je meer lezen? Kijk dan voor andere topics in {{catLink}} of {{latestLink}}.",read_more:"Wil je meer lezen? {{catLink}} of {{latestLink}}.",browse_all_categories:"Bekijk alle categorieën",view_latest_topics:"bekijk populaire topics",progress:{title:"topic voortgang",jump_top:"spring naar eerst post",jump_bottom:"spring naar laatste post",total:"totaal aantal posts",current:"huidige post"},notifications:{title:"",reasons:{"3_2":"Je ontvangt een notificatie omdat je dit topic aan het bekijken bent.","3_1":"Je ontvangt een notificatie omdat je dit topic gemaakt hebt.","2_4":"Je ontvangt een notificatie omdat je een reactie aan dit topic hebt gegeven.","2_2":"Je ontvangt een notificatie omdat je dit topic volgt.",2:'Je ontvangt een notificatie omdat je <a href="/users/{{username}}/preferences">dit topic hebt gelezen</a>.',1:"Je krijgt alleen een notificiatie als iemand je @naam noemt of reageert op je post.","1_2":"Je krijgt alleen een notificiatie als iemand je @naam noemt of reageert op je post.",0:"Je negeert alle notificaties in dit topic.","0_2":"Je negeert alle notificaties in dit topic."},watching:{title:"Bekijken",description:"je zal alle ongelezen en nieuwe post aantallen zien, plus de notificaties van @naam vermeldingen en alle nieuwe posts in dit topic."},tracking:{title:"Volgen",description:'description: "je zal alle ongelezen en nieuwe post aantallen zien, plus de notificaties van @naam vermeldingen en alle reacties op jouw posts.'},regular:{title:"Normaal",description:"Je zal alleen een notificatie krijgen als iemand je @naam vermeldt of een reactie geeft op je post."},muted:{title:"Gedempt",description:"je zal geen notificaties krijgen voor dit topic, en het zal ook niet verschijnen in je 'ongelezen'-tab."}},actions:{"delete":"Verwijder Topic",open:"Open Topic",close:"Sluit Topic",unpin:"Ont-Pin Topic",pin:"Pin Topic",unarchive:"De-archiveer Topic",archive:"Archiveer Topic",invisible:"Maak Onzichtbaar",visible:"Maak Zichtbaar",reset_read:"Herstel Gelezen Data",multi_select:"Zet Multi-Select Aan/Uit",convert_to_topic:"Zet om naar Normaal Topic"},reply:{title:"Reageer",help:"begin met het opzetten van een reactie op dit topic"},share:{title:"Deel",help:"Deel een link naar dit topic"},inviting:"Aan Het Uitnodigen...",invite_private:{title:"Uitnodiging voor Privé-gesprek",email_or_username:"E-mail of Gebruikersnaam Uitgenodigde Gebruiker",email_or_username_placeholder:"e-mailadres of gebruikersnaam",action:"Nodig Uit!",success:"Bedankt! We hebben deze gebruiker uitgenodigd om deel te nemen aan dit Privé-gesprek.",error:"Sorry, er is iets misgegaan bij het uitnodigen van deze gebruiker"},invite_reply:{title:"Nodig Vrienden Uit Om Te Reageren",help:"verstuur uitnodigingen naar vrienden zodat zij met één klik kunnen reageren op dit topic",email:"We zullen je vrienden een korte e-mail sturen waardoor zij op dit topic kunnen reageren door op een link te klikken.",email_placeholder:"e-mailadres",success:'Bedankt! We hebben een uitnodiging verstuurd naar <b>{{email}}</b>. We laten je direct weten wanneer ze je uitnodiging hebben geaccepteerd. Check de "Uitnodigingen"-tab op je gebruikerspagina om bij te houden wie je hebt uitgenodigd.',error:"Sorry, we kunnen deze persoon niet uitnodigen. Wellicht is deze al een gebruiker op onze site?"},login_reply:"Log In om te Reageren",filters:{user:"Je ziet momenteel alleen posts van specifieke gebruiker(s).",best_of:"Je ziet momenteel aleen de 'Beste Van' posts.",cancel:"Laat alle posts in dit topic zien."},move_selected:{title:"Verplaats Geslecteerde Posts",topic_name:"Nieuwe Topicnaam:",error:"Sorry, er is iets misgegaan bij het verplaatsen van deze posts.",instructions:{one:"Je staat op het punt een nieuw topic aan te maken en het te vullen met de post die je geselecteerd hebt.",other:"Je staat op het punt een nieuw topic aan te maken en het te vullen met de <b>{{count}}</b> posts die je geselecteerd hebt."}},multi_select:{select:"selecteer",selected:"geselecteerd ({{count}})","delete":"verwijder geselecteerde",cancel:"annuleer geselecteerde",move:"verplaats geselecteerde",description:{one:"Je hebt <b>1</b> post geselecteerd.",other:"Je hebt <b>{{count}}</b> posts geselecteerd."}}},post:{reply:"Je reageerd nu op {{link}} door {{replyAvatar}} {{username}}",reply_topic:"Reageer op {{link}}",edit:"Bewerk {{link}}",in_reply_to:"in reactie op",reply_as_new_topic:"Reageer als Nieuw Topic",continue_discussion:"Voortzetting van de discussie op {{postLink}}:",follow_quote:"ga naar de gequote post post",deleted_by_author:"(post verwijderd door de auteur)",has_replies:{one:"Reactie",other:"Reacties"},errors:{create:"Sorry, er is iets misgegaan bij het maken van je post. Probeer a.u.b. opnieuw.",edit:"Sorry, er is iets misgegaan bij het bewerken van je post. Probeer a.u.b. opnieuw.",upload:"Sorry, er is iets misgegaan bij het uploaden van je bestand. Probeer a.u.b. opnieuw."},abandon:"Weet je zeker dat je deze post wilt verlaten?",archetypes:{save:"Bewaar Instellingen"},controls:{reply:"begin met het maken van een reactie op deze post",like:"waardeer deze post",edit:"bewerk deze post",flag:"meld deze post voor moderator-aandacht","delete":"verwijder deze post",undelete:"on-verwijder deze post",share:"deel een link naar deze post",bookmark:"voeg deze post toe aan je bladwijzers op je gebruikerspagina",more:"Meer"},actions:{flag:"Meld",clear_flags:{one:"Wis melding",other:"Wis meldingen"},it_too:"{{alsoName}} het ook",undo:"Draai {{alsoName}} terug",by_you_and_others:{zero:"Jij {{long_form}}",one:"Jij en 1 ander persoon {{long_form}}",other:"Jij en {{count}} andere personen {{long_form}}"},by_others:{one:"1 persoon {{long_form}}",other:"{{count}} mensen {{long_form}}"}},edits:{one:"1 berwerking",other:"{{count}} bewerkingen",zero:"geen bewerkingen"},"delete":{confirm:{one:"Weet je zeker dat je deze post wilt verwijderen?",other:"Weet je zeker dat je al deze posts wilt verwijderen?"}}},category:{none:"(geen categorie)",edit:"bewerk",view:"Bekijk Topics in Categorie","delete":"Verwijder Category",create:"Maak Category",more_posts:"bekijk alle {{posts}}...",name:"Categorie Naam",description:"Beschrijving",topic:"categorie onderwerp",color:"Kleur",name_placeholder:"Moet kort en duidelijk zijn.",color_placeholder:"Elke web-kleur dan ook.",delete_confirm:"Weet je zeker dat je deze categorie wilt verwijderen?",list:"Laat Categoriën Zien"},flagging:{title:"Waarom meld je deze post voor moderatie?",action:"Meld Post",cant:"Sorry, Je kan deze post momenteel niet melden.",custom_placeholder:"Waarom heeft deze post moderator-aandacht nodig? Laat ons specifiek weten waar je je zorgen om maakt, en stuur relevante links mee waar mogelijk.",custom_message:{at_least:"vul op zijn minst {{n}} karakters in",more:"{{n}} te gaan...",left:"{{n}} resterend"}},topic_summary:{title:"Topic Samenvatting",links_shown:"laat alle {{totalLinks}} links zien..."},topic_statuses:{locked:{help:"dit topic is gesloten; nieuwe reacties worden niet langer geaccepteerd"},pinned:{help:"dit topic is gepind; het zal bovenaan de lijst van topics in zijn categorie staan."},archived:{help:"dit topic is gearchiveerd; het is bevroren en kan niet meer veranderd worden"},invisible:{help:"dit topic is onzichtbaar; het zal niet worden weergegeven in topiclijsten, en kan alleen via een directe link worden bezocht"}},posts:"Posts",posts_long:"{{number}} posts in dit topic",original_post:"Originele Post",views:"Bekeken",replies:"Reacties",views_long:"dit topic is {{number}} keer bekeken",activity:"Activiteit",likes:"Waarderingen",top_contributors:"Deelnemers",category_title:"Categorie",categories_list:"Categorie-lijst",filters:{latest:{title:"Populair",help:"de meest populaire recente topics"},favorited:{title:"Favorieten",help:"topics die je als Favoriet hebt ingesteld"},read:{title:"Gelezen",help:"topics die je hebt gelezen"},categories:{title:"Categorieën",title_in:"Categorie - {{categoryName}}",help:"alle topics gesorteerd op categorie"},unread:{title:{zero:"Ongelezen",one:"Ongelezen (1)",other:"Ongelezen ({{count}})"},help:"gevolgde topics met ongelezen posts"},"new":{title:{zero:"Nieuw",one:"Nieuw (1)",other:"Nieuw ({{count}})"},help:"nieuwe topics sinds je laatse bezoek, en gevolgde topics met nieuwe posts"},posted:{title:"Mijn Posts",help:"topics waarin je een post hebt geplaatst"},category:{title:{zero:"{{categoryName}}",one:"{{categoryName}} (1)",other:"{{categoryName}} ({{count}})"},help:"populaire topics in de {{categoryName}} categorie"}},type_to_filter:"typ om te filteren...",admin:{title:"Discourse Beheer",dashboard:{title:"Beheer Dashboard"},flags:{title:"Meldingen",old:"Oud",active:"Actief",clear:"Wis Meldingen",clear_title:"verwijder alle meldingen van deze post (laat verborgen posts weer zien)","delete":"Verwijder Post",delete_title:"verwijder post (als het de eerste post is van een topic, verwijdert dit het topic)"},customize:{title:"Aanpassingen",header:"Header",css:"Stylesheet",override_default:"Overschrijf standaard?",enabled:"Ingeschakeld?",preview:"voorbeeld",undo_preview:"sluit voorbeeld",save:"Opslaan","delete":"Verwijderen",delete_confirm:"Verwijder deze aanpassing?"},email_logs:{title:"E-mail Logs",sent_at:"Verzonden Op",email_type:"E-mail Type",to_address:"Aan: Adres",test_email_address:"e-mailadres om te testen",send_test:"verstuur test e-mail",sent_test:"Verzonden!"},impersonate:{title:"Imiteer gebruiker",username_or_email:"Gebruikersnaam of E-mailadres van gebruiker",help:"Gebruik dit hulpmiddel om een gebruiker te imiteren voor debug-doeleinden.",not_found:"Die gebruiker kan niet gevonden worden.",invalid:"Sorry, maar deze gebruiker mag je niet imiteren."},users:{title:"Gebruikers",create:"Voeg Beheerder Toe",last_emailed:"laaste mail verstuurd naar",not_found:"Sorry, deze gebruikersnaam bestaat niet in ons systeem.","new":"Nieuw",active:"Actief",pending:"Onder beoordeling",approved:"Goedgekeurd?",approved_selected:{one:"keur gebruiker goed",other:"keur gebruikers goed ({{count}})"}},user:{ban_failed:"Er ging iets fout met het blokkeren van deze gebruiker {{error}}",unban_failed:"Er ging iets fout bij het deblokkeren van deze gebruiker {{error}}",ban_duration:"Hoe lang zou je deze gebruiker willen blokkeren? (dagen)",delete_all_posts:"Verwijder alle posts",ban:"Blokkeer",unban:"Deblokkeer",banned:"Geblokkeerd?",moderator:"Moderator?",admin:"Beheerder?",show_admin_profile:"Beheerder",refresh_browsers:"Forceer browser refresh",show_public_profile:"Laat Openbaar Profiel Zien",impersonate:"Imiteer",revoke_admin:"Ontneem Beheerdersrechten",grant_admin:"Geef Beheerdersrechten",basics:"Algemeen",reputation:"Reputatie",permissions:"Toestemmingen",activity:"Activiteit",like_count:"Ontvangen Waarderingen",private_topics_count:"Aantal Privé Topics",posts_read_count:"Posts Gelezen",post_count:"Posts Gemaakt",topics_entered:"Topics binnengegaan",flags_given_count:"Meldingen Gegeven",flags_received_count:"Meldigen Ontvangen",approve:"Keur Goed",approved_by:"Goedgekeurd door",time_read:"Tijd Gelezen"},site_settings:{show_overriden:"Toon overschreven",title:"Site Instellingen",reset:"herstel standaardinstellingen"}}}}},I18n.locale="nl";