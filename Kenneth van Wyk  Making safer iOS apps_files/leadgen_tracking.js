LeadGen = window.LeadGen || {};
LeadGen.Tracking = LeadGen.Tracking || {};
LeadGen.Tracking = function() {
	//?source={BU Site Name}_{Referring Domain}_{Taxonomy}_{Page Type}_{Article Type}_{Content ID}_{Story Source}_{Author}_{Module}
	var emptyStr = 'na';
	var dlm = '_';
	var internal_links = new RegExp ("(computerworld.com)|(cwcxo.com)","i");
    return {
    	bu_name: 'ctwsite',
		domain: jQuery.cookie('idglg_ref_domain'),
		taxonomy: "General",
		pageType: emptyStr,
		articleType: emptyStr,
		contentid: emptyStr,
		story_source: emptyStr,
		author_name: emptyStr,
		getRootDomain:function(){
			return document.domain.substring(document.domain.indexOf('.'));
		},
		parseDomain:function(referrer){
			var urlpattern = new RegExp("(http|https)://(.*?)/.*$");
			var parsedurl = referrer.match(urlpattern);
			if(parsedurl[2] && parsedurl[2].indexOf('www.') > -1) return parsedurl[2].substring(4);
			return parsedurl[2];
		},
		setDomain: function(){
			if(this.domain == null){
				if(document.referrer != ""){
					this.domain = LeadGen.Tracking.parseDomain(document.referrer);
					jQuery.cookie('idglg_ref_domain', this.domain, {path: '/', domain: LeadGen.Tracking.getRootDomain()});
				}
				else{
					this.domain = emptyStr;
					jQuery.cookie('idglg_ref_domain', emptyStr, {path: '/', domain: LeadGen.Tracking.getRootDomain()});
				}
			}
			if(this.domain == null || this.domain == "") this.domain = this.emptyStr;
		},
		addSourceCode:function(_siteCode, _moduleCode, _element){
			if(_element && _element.href){
				var moduleName = emptyStr;
				if(_moduleCode != null && _moduleCode != "") moduleName = _moduleCode;
				var idglg = "idglg=" + escape(LeadGen.Tracking.appendModuleName(moduleName));
				var href_with_idglg = LeadGen.Tracking.addTrackingCode(_element.href,idglg);
				window.location = href_with_idglg;
				return false;
			}
		},
		idglg_params:function(){
			return [this.bu_name, this.domain, this.taxonomy, this.pageType, this.articleType, this.contentid, this.story_source, this.author_name].join(dlm);
		},
		appendModuleName:function(moduleName){
			return LeadGen.Tracking.idglg_params() + dlm + moduleName;
		},
		addTrackingCode:function(href,code){
			if(href == null || href == "") return;
			split_url = href.split("?");
			for(i=0;i<split_url.length;i++){
				if(internal_links.test(split_url[i])){
					if(i < split_url.length-1) split_url[i+1] += "&" + code; 
					else split_url[i] += "?" + code; 
				}
			}
			return split_url.join("?");
		},
    	init:function(){
			LeadGen.Tracking.setDomain();  
			if(typeof(s.prop2) != "undefined"  && s.prop2 != null  && s.prop2 != "")  this.taxonomy = s.prop2; 
			if(typeof(s.prop14) != "undefined"  && s.prop14 != null  && s.prop14 != "")  this.pageType = s.prop14; 
			if(typeof(s.prop5) != "undefined" && s.prop5 != null && s.prop5 != "") this.articleType = s.prop5; 
			if(typeof(s.prop8) != "undefined" && s.prop8 != null && s.prop8 != "") this.contentid = s.prop8; 
			if(typeof(s.prop3) != "undefined" && s.prop3 != null && s.prop3 != "") this.story_source = s.prop3; 
			if(typeof(s.prop4) != "undefined" && s.prop4 != null && s.prop4 != "") this.author_name = s.prop4; 
			if(typeof(console) != "undefined"){
				console.log('LeadGen.Tracking.init(): ' + escape(LeadGen.Tracking.idglg_params()));
			}
	    }      	
    }
}();
LeadGen.Tracking.init();