var s = new AppMeasurement();
var heartbeatContext = ",contextData.a.media.friendlyName,contextData.a.media.length,contextData.a.media.name,contextData.a.contentType,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.media.view,contextData.a.media.ad.friendlyName,contextData.a.media.ad.length,contextData.a.media.ad.name,contextData.a.media.ad.podFriendlyName,contextData.a.media.ad.podSecond,contextData.a.media.ad.pod,contextData.a.media.ad.podPosition,contextData.a.media.ad.playerName,contextData.a.media.ad.view,contextData.a.media.show,contextData.a.media.season,contextData.a.media.episode,contextData.a.media.asset,contextData.a.media.genre,contextData.a.media.airDate,contextData.a.media.digitalDate,contextData.a.media.rating,contextData.a.media.originator,contextData.a.media.network,contextData.a.media.type,contextData.a.media.adLoad,contextData.a.media.pass.mvpd,contextData.a.media.pass.auth,contextData.a.media.dayPart,contextData.a.media.feed,contextData.a.media.format,contextData.a.media.ad.advertiser,contextData.a.media.ad.campaign,contextData.a.media.ad.creative,contextData.a.media.ad.placement,contextData.a.media.ad.site,contextData.a.media.ad.creativeURL,contextData.referenceID,contextData.contentTags,contextData.pubDate,contextData.siteContent,contextData.prodCenter,contextData.market,contextData.program,contextData.focusArea,contextData.cty,contextData.owner,contextData.externalInternal,contextData.playerType";
s.linkTrackVars = s.linkTrackVars + heartbeatContext;

function cfCheckRSID(cvURL) {
  var cvHostName = cfUtility(cvURL, 'server');
  switch (cvHostName) {
    case "www.mathworks.com":
    case "au.mathworks.com":
    case "ch.mathworks.com":
    case "www.mathworks.cn":
    case "ww2.mathworks.cn":
    case "cn.mathworks.com":
    case "de.mathworks.com":
    case "es.mathworks.com":
    case "fr.mathworks.com":
    case "in.mathworks.com":
    case "it.mathworks.com":
    case "jp.mathworks.com":
    case "kr.mathworks.com":
    case "nl.mathworks.com":
    case "se.mathworks.com":
    case "uk.mathworks.com":
    case "la.mathworks.com":
    case "makerzone.mathworks.com":
    case "www.go.mathworks.com":
    case "go.mathworks.com":
    case "www.go2.mathworks.com":
    case "go2.mathworks.com":
    case "www.mathworksservicerequest.force.com":
    case "mathworksservicerequest.force.com":
    case "blogs.mathworks.com":
    case "matlabacademy.mathworks.com":
    case "trainingenrollment.mathworks.com":
    case "matlab.mathworks.com":
    case "learntocode.mathworks.com":
    case "status.mathworks.com":
    case "grader.mathworks.com":
    case "coursework.mathworks.com":
      ReportSuiteID = "mathwgbl";
      break;
    default:
      ReportSuiteID = "mathglobaltest";
      break;
  }
  try {
    var DTMLibraryStaging = localStorage.getItem('sdsat_stagingLibrary');
    if (DTMLibraryStaging == "true") {
      ReportSuiteID = "mathglobaltest";
    }
  } catch (e) {}
  ReportSuiteID = ReportSuiteID.toLowerCase();
  return ReportSuiteID;
}

function cfUtility(cvURL, cvAction) {
  cvURL = unescape(cvURL.toLowerCase());
  cvURL = cvURL.replace("searchresults?", "searchresults/?");
  switch (cvAction) {
    case "server":
      var a = cvURL.split(/\/+/g)[1];
      if (typeof(a) !== 'undefined') {
        var b = a.split(".");
        if (b.length == 2) {
          var c = "www." + a;
        } else {
          c = a;
        }
        TheResult = c;
      } else {
        TheResult = "";
      }
      break;
    case "domain":
      var a = cfUtility(cvURL, "server");
      if (typeof(a) !== 'undefined') {
        var b = a.split(".");
        b_len = b.length;
        var TheResult = String(b[b_len - 2] + '.' + b[b_len - 1]);
      } else {
        TheResult = "";
      }
      break;
    case "filename":
      var a = cvURL.split(/#|;jsessionid=|\?/gi)[0];
      var b = a.substring(a.lastIndexOf("/") + 1);
      TheResult = b;
      break;
    case "pagename":
      var a = cvURL.split(/#|;jsessionid=|\?/gi)[0];
      a = a.replace("http://", "");
      a = a.replace("https://", "");
      a = a.replace(cfUtility(cvURL, "server"), "");
      var b = a.substring(a.lastIndexOf("/") + 1);
      a = a.replace(b, "");
      a = a + cfUtility(cvURL, "filename");
      if ((cfUtility(cvURL, "filename") == "") || (!cfUtility(cvURL, "filename"))) {
        if (cvURL.search("searchresults/?") < 0 && cvURL.search("/company/jobs/") < 0 && cvURL.search("/matlabcentral/") < 0 && cvURL.search("/downloads/web_downloads/") < 0 && cvURL.search("/support/bugreports/") < 0 && cvURL.search("/training-schedule/") < 0 && cvURL.search("blogs.mathworks.") < 0) {
          a = a + "index.html";
        }
      }
      if (cvURL.search("go.mathworks.com") != -1 || cvURL.search("go2.mathworks.com") != -1) {
        a = cfUtility(cvURL, "filename");
        a = "elq::" + a;
      }
      TheResult = a;
      break;
    case "channel":
      var a = cvURL.split(/#|;jsessionid=|\?/gi)[0];
      a = a.replace("http://", "");
      a = a.replace("https://", "");
      a = a.replace(cfUtility(cvURL, "server"), "");
      if (a.indexOf("index.html") > -1 || (a.lastIndexOf("/") + 1 == a.length)) {
        var b = a.substring(a.lastIndexOf("/") + 1);
      } else {
        var b = a.substring(a.lastIndexOf("."));
      }
      if (a !== "/downloads" && a.indexOf("/matlabcentral/") < 0 && a.indexOf("/examples") !== 0) {
        a = a.replace(b, "");
      }
      if (cvURL.search("go.mathworks.com") !== -1 || cvURL.search("go2.mathworks.com") !== -1 || cvURL.search("force.com") !== -1) {
        a = cfUtility(cvURL, "server");
      }
      TheResult = a;
      break;
    case "filenameparameters":
      var cvParamPos = cvURL.indexOf("?");
      if (cvParamPos != -1) {
        var cvParam = cvURL.substring(cvParamPos);
      } else {
        var cvParam = "";
      }
      TheResult = cfUtility(cvURL, "filename") + cvParam;
      break;
    case "se":
      var cvReferrer_Server = cvURL.split(/\/+/g)[1];
      var cvReferrer_Server_Splitted = cvReferrer_Server.split(".");
      cvReferrer_Server_Splitted_Length = cvReferrer_Server_Splitted.length;
      var TheResult = String('.' + cvReferrer_Server_Splitted[cvReferrer_Server_Splitted_Length - 2] + '.');
      break;
    case "ext":
      var TheResult = cvURL.substring(cvURL.lastIndexOf("/") + 1, cvURL.length).substring(cvURL.substring(cvURL.lastIndexOf("/") + 1, cvURL.length).lastIndexOf(".") + 1, cvURL.substring(cvURL.lastIndexOf("/") + 1, cvURL.length).length);
      break;
    default:
      var TheResult = "";
  }
  return TheResult;
}

function undorewrite(origurl) {
  omniurl = unescape(origurl.toLowerCase());
  domain = cfUtility(omniurl, 'server');
    if (domain.indexOf("mathworks.de") > -1 || domain.indexOf("mathworks.in") > -1 || domain.indexOf("mathworks.co.jp") > -1 || domain.indexOf("mathworks.co.uk") > -1 || domain.indexOf("mathworks.fr") > -1 || domain.indexOf("mathworks.cn") > -1 || domain.indexOf("mathworks.nl") > -1 || domain.indexOf("mathworks.se") > -1 || domain.indexOf("mathworks.it") > -1 || domain.indexOf("mathworks.com.au") > -1 || domain.indexOf("mathworks.co.kr") > -1 || domain.indexOf("mathworks.es") > -1 || domain.indexOf("mathworks.ch") > -1) {
        if (omniurl.indexOf("mathworks.de/de/") > -1 || omniurl.indexOf("mathworks.in/in/") > -1 || omniurl.indexOf("mathworks.co.uk/uk/") > -1 || omniurl.indexOf("mathworks.co.jp/jp/") > -1 || omniurl.indexOf("mathworks.fr/fr/") > -1 || omniurl.indexOf("mathworks.cn/cn/") > -1 || omniurl.indexOf("mathworks.nl/nl/") > -1 || omniurl.indexOf("mathworks.se/se/") > -1 || omniurl.indexOf("mathworks.it/it/") > -1 || omniurl.indexOf("mathworks.com.au/au/") > -1 || omniurl.indexOf("mathworks.co.kr/kr/") > -1 || omniurl.indexOf("mathworks.es/es/") > -1 || omniurl.indexOf("mathworks.ch/ch/") > -1) {
      channel = cfUtility(omniurl, 'channel');
          foldersplit = channel.split("/");
          omniurl = omniurl.replace("/" + foldersplit[1] + "/", "/");
        }
    }
    return omniurl;
}

function cfGetQParam(a, b) {  // Custom Function to Get Query Parameters
  var c = a.indexOf('?'); var d = a.indexOf('#');
  if (c < 0) { return ""; }
  var e = a.substr(c + 1);
  if (d > 0) { e = a.substring(c + 1, d); }
  var f = e.split('&');
  for (var i = 0; i < f.length; i++) {
    var g = f[i].split('=');
    g[0] = unescape(g[0]);
    if (g[0] == b) {
      g[1] = unescape(g[1]);
      if (g[1].indexOf('"') > -1) {
        var h = /"/g;
        g[1] = g[1].replace(h, '\\"')
      }
      if (g[1].indexOf('+') > -1) {
        var j = /\+/g;
        g[1] = g[1].replace(j, ' ')
      }
      return g[1]
    }
  }
  return ""
}

function cfLeft(str, n){
  if (n <= 0) { return ""; } else if (n > String(str).length) { return str; } else { return String(str).substring(0,n); }
}

function cfRight(str, n){
    if (n <= 0) { return ""; } else if (n > String(str).length) { return str; } else { var iLen = String(str).length; return String(str).substring(iLen, iLen - n); }
}

function cfClean(cvURL) {
  if (cvURL) {
    cvURL = cvURL.replace("http://","/");
    cvURL = cvURL.replace("https://","/");
  }
  return cvURL;
}

function removeHTMLTags(strInputCode) {
  if (strInputCode) {
    strInputCode = strInputCode.replace(/&(lt|gt);/g, function (strMatch, p1) {
      return (p1 == "lt") ? "<" : ">";
    });
    var strTagStrippedText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
    return strTagStrippedText;
  }
}

function chnlshrink(chnl) {
  chan=chnl.toLowerCase();
  switch (chan) {
    case "paid search":
      chanl = "ppc";
      break;
    case "paid social ad":
      chanl = "psb";
      break;
    case "paid social media":
      chanl = "psm";
      break;
    case "external promotion":
      chanl = "pep";
      break;
    case "partner promotion":
      chanl = "prp";
      break;
    case "direct load":
      chanl = "dl";
      break;
    case "email":
      chanl = "eml";
      break;
    case "paid non-search":
      chanl = "pns";
      break;
    case "natural search":
      chanl = "nats";
      break;
    case "referrers":
      chanl = "ref";
      break;
    default:
    chanl = "unk";
      break;
  }
  return chanl;
}

function prodassign(type){
  if (type=='urly' && s.prop4){
    if (s.prop4.indexOf('products/curvefitting/')>-1 || s.prop4.indexOf('/help/curvefit/')>-1 || s.prop4.indexOf('/help/toolbox/curvefit/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/curvefit/')>-1)) {prod="Curve Fitting Toolbox";}
    else if (s.prop4.indexOf('products/communications/')>-1 || s.prop4.indexOf('/help/ja_JP/comm/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/comm/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/comm/')>-1)) {prod="Communications System Toolbox";}
    else if (s.prop4.indexOf('products/communications/')>-1 || s.prop4.indexOf('/help/comm/')>-1 || s.prop4.indexOf('/help/toolbox/comm/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/comm/')>-1)) {prod="Communications System Toolbox";}
    else if (s.prop4.indexOf('products/compiler/')>-1 || s.prop4.indexOf('/help/ja_JP/compiler/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/compiler/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/compiler/')>-1)) {prod="MATLAB Compiler";}
    else if (s.prop4.indexOf('products/compiler/')>-1 || s.prop4.indexOf('/help/compiler/')>-1 || s.prop4.indexOf('/help/toolbox/compiler/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/compiler/')>-1)) {prod="MATLAB Compiler";}
    else if (s.prop4.indexOf('products/control/')>-1 || s.prop4.indexOf('/help/ja_JP/control/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/control/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/control/')>-1)) {prod="Control System Toolbox";}
    else if (s.prop4.indexOf('products/control/')>-1 || s.prop4.indexOf('/help/control/')>-1 || s.prop4.indexOf('/help/toolbox/control/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/control/')>-1)) {prod="Control System Toolbox";}
    else if (s.prop4.indexOf('products/daq/')>-1 || s.prop4.indexOf('/help/daq/')>-1 || s.prop4.indexOf('/help/toolbox/daq/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/daq/')>-1)) {prod="Data Acquisition Toolbox";}
    else if (s.prop4.indexOf('products/database/')>-1 || s.prop4.indexOf('/help/database/')>-1 || s.prop4.indexOf('/help/toolbox/database/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/database/')>-1)) {prod="Database Toolbox";}
    else if (s.prop4.indexOf('products/derivatives/')>-1 || s.prop4.indexOf('/help/finderiv/')>-1 || s.prop4.indexOf('/help/toolbox/finderiv/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/finderiv/')>-1)) {prod="Financial Derivatives Toolbox";}
    else if (s.prop4.indexOf('products/datafeed/')>-1 || s.prop4.indexOf('/help/datafeed/')>-1 || s.prop4.indexOf('/help/toolbox/datafeed/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/datafeed/')>-1)) {prod="Datafeed Toolbox";}
    else if (s.prop4.indexOf('products/gauges/')>-1 || s.prop4.indexOf('/help/gauges/')>-1 || s.prop4.indexOf('/help/toolbox/gauges/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/gauges/')>-1)) {prod="Gauges Blockset";}
    else if (s.prop4.indexOf('products/dsp-system/')>-1 || s.prop4.indexOf('/help/dsp/')>-1 || s.prop4.indexOf('/help/toolbox/dsp/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/dsp/')>-1)) {prod="DSP System Toolbox";}
    else if (s.prop4.indexOf('products/embedded-coder/')>-1 || s.prop4.indexOf('/help/ecoder/')>-1 || s.prop4.indexOf('/help/toolbox/ecoder/')>-1 || (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ecoder/')>-1)) {prod="Embedded Coder";}
    else if (s.prop4.indexOf('products/excellink/')>-1 || s.prop4.indexOf('/help/exlink/')>-1 || s.prop4.indexOf('/help/toolbox/exlink/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/exlink/')>-1)) {prod="Spreadsheet Link EX";}
    else if (s.prop4.indexOf('products/finance/')>-1 || s.prop4.indexOf('/help/finance/')>-1 || s.prop4.indexOf('/help/toolbox/finance/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/finance/')>-1)) {prod="Financial Toolbox";}
    else if (s.prop4.indexOf('products/fuzzy-logic/')>-1 || s.prop4.indexOf('/help/fuzzy/')>-1 || s.prop4.indexOf('/help/toolbox/fuzzy/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/fuzzy/')>-1)) {prod="Fuzzy Logic Toolbox";}
    else if (s.prop4.indexOf('products/instrument/')>-1 || s.prop4.indexOf('/help/instrument/')>-1 || s.prop4.indexOf('/help/toolbox/instrument/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/instrument/')>-1)) {prod="Instrument Control Toolbox";}
    else if (s.prop4.indexOf('products/sysid/')>-1 || s.prop4.indexOf('/help/ident/')>-1 || s.prop4.indexOf('/help/toolbox/ident/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ident/')>-1)) {prod="System Identification Toolbox";}
    else if (s.prop4.indexOf('products/image/')>-1 || s.prop4.indexOf('/access/helpdesk/help/images/')>-1 || s.prop4.indexOf('/access/helpdesk/help/toolbox/images/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/helpdesk/help/images/')>-1)) {prod="Image Processing Toolbox";}
    else if (s.prop4.indexOf('products/image/')>-1 || s.prop4.indexOf('/help/ja_JP/images/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/images/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/images/')>-1)) {prod="Image Processing Toolbox";}
    else if (s.prop4.indexOf('products/mapping/')>-1 || s.prop4.indexOf('/help/map/')>-1 || s.prop4.indexOf('/help/toolbox/map/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/map/')>-1)) {prod="Mapping Toolbox";}
    else if (s.prop4.indexOf('products/mpc/')>-1 || s.prop4.indexOf('/help/mpc/')>-1 || s.prop4.indexOf('/help/toolbox/mpc/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/mpc/')>-1)) {prod="Model Predictive Control Toolbox";}
    else if (s.prop4.indexOf('products/ML_reportgenerator/')>-1 || s.prop4.indexOf('/help/rptgen/')>-1 || s.prop4.indexOf('/help/toolbox/rptgen/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/rptgen/')>-1)) {prod="MATLAB Report Generator";}
    else if (s.prop4.indexOf('products/neural-network/')>-1 || s.prop4.indexOf('/help/nnet/')>-1 || s.prop4.indexOf('/help/toolbox/nnet/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/nnet/')>-1)) {prod="Neural Network Toolbox";}
    else if (s.prop4.indexOf('products/optimization/')>-1 || s.prop4.indexOf('/help/ja_JP/optim/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/optim/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/optim/')>-1)) {prod="Optimization Toolbox";}
    else if (s.prop4.indexOf('products/optimization/')>-1 || s.prop4.indexOf('/help/optim/')>-1 || s.prop4.indexOf('/help/toolbox/optim/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/optim/')>-1)) {prod="Optimization Toolbox";}
    else if (s.prop4.indexOf('products/pde/')>-1 || s.prop4.indexOf('/help/pde/')>-1 || s.prop4.indexOf('/help/toolbox/pde/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/pde/')>-1)) {prod="Partial Differential Equation Toolbox";}
    else if (s.prop4.indexOf('products/simpower/')>-1 || s.prop4.indexOf('/help/ja_JP/physmod/powersys/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/physmod/powersys/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/physmod/powersys/')>-1)) {prod="SimPowerSystems";}
    else if (s.prop4.indexOf('products/simpower/')>-1 || s.prop4.indexOf('/help/physmod/powersys/')>-1 || s.prop4.indexOf('/help/toolbox/physmod/powersys/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/physmod/powersys/')>-1)) {prod="SimPowerSystems";}
    else if (s.prop4.indexOf('products/robust/')>-1 || s.prop4.indexOf('/help/robust/')>-1 || s.prop4.indexOf('/help/toolbox/robust/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/robust/')>-1)) {prod="Robust Control Toolbox";}
    else if (s.prop4.indexOf('products/simulink-coder/')>-1 || s.prop4.indexOf('/help/ja_JP/rtw/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/rtw/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/rtw/')>-1)) {prod="Simulink Coder";}
    else if (s.prop4.indexOf('products/simulink-coder/')>-1 || s.prop4.indexOf('/help/rtw/')>-1 || s.prop4.indexOf('/help/toolbox/rtw/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/rtw/')>-1)) {prod="Simulink Coder";}
    else if (s.prop4.indexOf('products/stateflow/')>-1 || s.prop4.indexOf('/help/ja_JP/stateflow/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/stateflow/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/stateflow/')>-1)) {prod="Stateflow";}
    else if (s.prop4.indexOf('products/stateflow/')>-1 || s.prop4.indexOf('/help/stateflow/')>-1 || s.prop4.indexOf('/help/toolbox/stateflow/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/stateflow/')>-1)) {prod="Stateflow";}
    else if (s.prop4.indexOf('products/signal/')>-1 || s.prop4.indexOf('/help/ja_JP/signal/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/signal/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/signal/')>-1)) {prod="Signal Processing Toolbox";}
    else if (s.prop4.indexOf('products/signal/')>-1 || s.prop4.indexOf('/help/signal/')>-1 || s.prop4.indexOf('/help/toolbox/signal/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/signal/')>-1)) {prod="Signal Processing Toolbox";}
    else if (s.prop4.indexOf('products/simulink/')>-1 || s.prop4.indexOf('/help/ja_JP/simulink/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/simulink/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/simulink/')>-1)) {prod="Simulink";}
    else if (s.prop4.indexOf('products/simulink/')>-1 || s.prop4.indexOf('/help/simulink/')>-1 || s.prop4.indexOf('/help/toolbox/simulink/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/simulink/')>-1)) {prod="Simulink";}
    else if (s.prop4.indexOf('products/symbolic/')>-1 || s.prop4.indexOf('/help/ja_JP/symbolic/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/symbolic/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/symbolic/')>-1)) {prod="Symbolic Math Toolbox";}
    else if (s.prop4.indexOf('products/symbolic/')>-1 || s.prop4.indexOf('/help/symbolic/')>-1 || s.prop4.indexOf('/help/toolbox/symbolic/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/symbolic/')>-1)) {prod="Symbolic Math Toolbox";}
    else if (s.prop4.indexOf('products/SL_reportgenerator/')>-1 || s.prop4.indexOf('/help/rptgenext/')>-1 || s.prop4.indexOf('/help/toolbox/rptgenext/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/rptgenext/')>-1)) {prod="Simulink Report Generator";}
    else if (s.prop4.indexOf('products/statistics/')>-1 || s.prop4.indexOf('/help/ja_JP/stats/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/stats/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/stats/')>-1)) {prod="Statistics Toolbox";}
    else if (s.prop4.indexOf('products/statistics/')>-1 || s.prop4.indexOf('/help/stats/')>-1 || s.prop4.indexOf('/help/toolbox/stats/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/stats/')>-1)) {prod="Statistics Toolbox";}
    else if (s.prop4.indexOf('products/3d-animation/')>-1 || s.prop4.indexOf('/help/sl3d/')>-1 || s.prop4.indexOf('/help/toolbox/sl3d/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/sl3d/')>-1)) {prod="Simulink 3D Animation";}
    else if (s.prop4.indexOf('products/wavelet/')>-1 || s.prop4.indexOf('/help/wavelet/')>-1 || s.prop4.indexOf('/help/toolbox/wavelet/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/wavelet/')>-1)) {prod="Wavelet Toolbox";}
    else if (s.prop4.indexOf('products/rtwt/')>-1 || s.prop4.indexOf('/help/rtwin/')>-1 || s.prop4.indexOf('/help/toolbox/rtwin/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/rtwin/')>-1)) {prod="Real-Time Windows Target";}
    else if (s.prop4.indexOf('products/xpcembedded/')>-1 || s.prop4.indexOf('/help/xpc/')>-1 || s.prop4.indexOf('/help/toolbox/xpc/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/xpc/')>-1)) {prod="xPC Target Embedded Option";}
    else if (s.prop4.indexOf('products/xpctarget/')>-1 || s.prop4.indexOf('/help/xpc/')>-1 || s.prop4.indexOf('/help/toolbox/xpc/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/xpc/')>-1)) {prod="xPC Target";}
    else if (s.prop4.indexOf('products/aeroblks/')>-1 || s.prop4.indexOf('/help/aeroblks/')>-1 || s.prop4.indexOf('/help/toolbox/aeroblks/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/aeroblks/')>-1)) {prod="Aerospace Blockset";}
    else if (s.prop4.indexOf('products/matlabxl/')>-1 || s.prop4.indexOf('/help/matlabxl/')>-1 || s.prop4.indexOf('/help/toolbox/matlabxl/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/matlabxl/')>-1)) {prod="MATLAB Builder EX";}
    else if (s.prop4.indexOf('products/simmechanics/')>-1 || s.prop4.indexOf('/help/physmod/sm/')>-1 || s.prop4.indexOf('/help/toolbox/physmod/sm/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/physmod/sm/')>-1)) {prod="SimMechanics";}
    else if (s.prop4.indexOf('products/mbc/')>-1 || s.prop4.indexOf('/help/mbc/')>-1 || s.prop4.indexOf('/help/toolbox/mbc/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/mbc/')>-1)) {prod="Model-Based Calibration Toolbox";}
    else if (s.prop4.indexOf('products/imaq/')>-1 || s.prop4.indexOf('/help/imaq/')>-1 || s.prop4.indexOf('/help/toolbox/imaq/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/imaq/')>-1)) {prod="Image Acquisition Toolbox";}
    else if (s.prop4.indexOf('products/fixedincome/')>-1 || s.prop4.indexOf('/help/finfixed/')>-1 || s.prop4.indexOf('/help/toolbox/finfixed/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/finfixed/')>-1)) {prod="Fixed-Income Toolbox";}
    else if (s.prop4.indexOf('products/bioinfo/')>-1 || s.prop4.indexOf('/help/bioinfo/')>-1 || s.prop4.indexOf('/help/toolbox/bioinfo/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/bioinfo/')>-1)) {prod="Bioinformatics Toolbox";}
    else if (s.prop4.indexOf('products/filterhdl/')>-1 || s.prop4.indexOf('/help/hdlfilter/')>-1 || s.prop4.indexOf('/help/toolbox/hdlfilter/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/hdlfilter/')>-1)) {prod="Filter Design HDL Coder";}
    else if (s.prop4.indexOf('products/fixed/')>-1 || s.prop4.indexOf('/help/ja_JP/fixedpoint/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/fixedpoint/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/fixedpoint/')>-1)) {prod="Fixed-Point Toolbox";}
    else if (s.prop4.indexOf('products/fixed/')>-1 || s.prop4.indexOf('/help/fixedpoint/')>-1 || s.prop4.indexOf('/help/toolbox/fixedpoint/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/fixedpoint/')>-1)) {prod="Fixed-Point Toolbox";}
    else if (s.prop4.indexOf('products/simfixed/')>-1 || s.prop4.indexOf('/help/ja_JP/fixpoint/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/fixpoint/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/fixpoint/')>-1)) {prod="Simulink Fixed Point";}
    else if (s.prop4.indexOf('products/simfixed/')>-1 || s.prop4.indexOf('/help/fixpoint/')>-1 || s.prop4.indexOf('/help/toolbox/fixpoint/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/fixpoint/')>-1)) {prod="Simulink Fixed Point";}
    else if (s.prop4.indexOf('products/simverification/')>-1 || s.prop4.indexOf('/help/slvnv/')>-1 || s.prop4.indexOf('/help/toolbox/slvnv/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/slvnv/')>-1)) {prod="Simulink Verification and Validation";}
    else if (s.prop4.indexOf('products/simcontrol/')>-1 || s.prop4.indexOf('/help/ja_JP/slcontrol/')>-1 || s.prop4.indexOf('/help/ja_JP/toolbox/slcontrol/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/slcontrol/')>-1)) {prod="Simulink Control Design";}
    else if (s.prop4.indexOf('products/simcontrol/')>-1 || s.prop4.indexOf('/help/slcontrol/')>-1 || s.prop4.indexOf('/help/toolbox/slcontrol/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/slcontrol/')>-1)) {prod="Simulink Control Design";}
    else if (s.prop4.indexOf('products/opc/')>-1 || s.prop4.indexOf('/help/opc/')>-1 || s.prop4.indexOf('/help/toolbox/opc/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/opc/')>-1)) {prod="OPC Toolbox";}
    else if (s.prop4.indexOf('products/simrf/')>-1 || s.prop4.indexOf('/help/simrf/')>-1 || s.prop4.indexOf('/help/toolbox/simrf/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/simrf/')>-1)) {prod="SimRF";}
    else if (s.prop4.indexOf('products/rftoolbox/')>-1 || s.prop4.indexOf('/help/rf/')>-1 || s.prop4.indexOf('/help/toolbox/rf/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/rf/')>-1)) {prod="RF Toolbox";}
    else if (s.prop4.indexOf('products/computer-vision/')>-1 || s.prop4.indexOf('/help/vision/')>-1 || s.prop4.indexOf('/help/toolbox/vision/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/vision/')>-1)) {prod="Computer Vision System Toolbox";}
    else if (s.prop4.indexOf('products/simdrive/')>-1 || s.prop4.indexOf('/help/physmod/sdl/')>-1 || s.prop4.indexOf('/help/toolbox/physmod/sdl/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/physmod/sdl/')>-1)) {prod="SimDriveline";}
    else if (s.prop4.indexOf('products/parallel-computing/')>-1 || s.prop4.indexOf('/help/distcomp/')>-1 || s.prop4.indexOf('/help/toolbox/distcomp/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/distcomp/')>-1)) {prod="Parallel Computing Toolbox";}
    else if (s.prop4.indexOf('products/distriben/')>-1 || s.prop4.indexOf('/help/mdce/')>-1 || s.prop4.indexOf('/help/toolbox/mdce/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/mdce/')>-1)) {prod="MATLAB Distributed Computing Server";}
    else if (s.prop4.indexOf('products/simbiology/')>-1 || s.prop4.indexOf('/help/simbio/')>-1 || s.prop4.indexOf('/help/toolbox/simbio/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/simbio/')>-1)) {prod="SimBiology";}
    else if (s.prop4.indexOf('products/systemtest/')>-1 || s.prop4.indexOf('/help/systemtest/')>-1 || s.prop4.indexOf('/help/toolbox/systemtest/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/systemtest/')>-1)) {prod="SystemTest";}
    else if (s.prop4.indexOf('products/simevents/')>-1 || s.prop4.indexOf('/help/simevents/')>-1 || s.prop4.indexOf('/help/toolbox/simevents/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/simevents/')>-1)) {prod="SimEvents";}
    else if (s.prop4.indexOf('products/netbuilder/')>-1 || s.prop4.indexOf('/help/dotnetbuilder/')>-1 || s.prop4.indexOf('/help/toolbox/dotnetbuilder/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/dotnetbuilder/')>-1)) {prod="MATLAB Builder NE";}
    else if (s.prop4.indexOf('products/simhydraulics/')>-1 || s.prop4.indexOf('/help/physmod/hydro/')>-1 || s.prop4.indexOf('/help/toolbox/physmod/hydro/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/physmod/hydro/')>-1)) {prod="SimHydraulics";}
    else if (s.prop4.indexOf('products/aerotb/')>-1 || s.prop4.indexOf('/help/aerotbx/')>-1 || s.prop4.indexOf('/help/toolbox/aerotbx/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/aerotbx/')>-1)) {prod="Aerospace Toolbox";}
    else if (s.prop4.indexOf('products/javabuilder/')>-1 || s.prop4.indexOf('/help/javabuilder/')>-1 || s.prop4.indexOf('/help/toolbox/javabuilder/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/javabuilder/')>-1)) {prod="MATLAB Builder JA";}
    else if (s.prop4.indexOf('products/hdl-coder/')>-1 || s.prop4.indexOf('/help/hdlcoder/')>-1 || s.prop4.indexOf('/help/toolbox/hdlcoder/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/hdlcoder/')>-1)) {prod="HDL Coder";}
    else if (s.prop4.indexOf('products/simscape/')>-1 || s.prop4.indexOf('/access/helpdesk/help/physmod/simscape/')>-1 || s.prop4.indexOf('/access/helpdesk/help/toolbox/physmod/simscape/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/helpdesk/help/physmod/simscape/')>-1)) {prod="Simscape";}
    else if (s.prop4.indexOf('products/sldesignverifier/')>-1 || s.prop4.indexOf('/help/sldv/')>-1 || s.prop4.indexOf('/help/toolbox/sldv/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/sldv/')>-1)) {prod="Simulink Design Verifier";}
    else if (s.prop4.indexOf('products/polyspaceclientc/')>-1 || s.prop4.indexOf('/help/polyspace/')>-1 || s.prop4.indexOf('/help/toolbox/polyspace/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/polyspace/')>-1)) {prod="Polyspace Client for C/C++";}
    else if (s.prop4.indexOf('products/polyspaceclientada/')>-1 || s.prop4.indexOf('/help/polyspace/')>-1 || s.prop4.indexOf('/help/toolbox/polyspace/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/polyspace/')>-1)) {prod="Polyspace Client for Ada";}
    else if (s.prop4.indexOf('products/polyspaceserverc/')>-1 || s.prop4.indexOf('/help/polyspace/')>-1 || s.prop4.indexOf('/help/toolbox/polyspace/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/polyspace/')>-1)) {prod="Polyspace Server for C/C++";}
    else if (s.prop4.indexOf('products/polyspaceserverada/')>-1 || s.prop4.indexOf('/help/polyspace/')>-1 || s.prop4.indexOf('/help/toolbox/polyspace/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/polyspace/')>-1)) {prod="Polyspace Server for Ada";}
    else if (s.prop4.indexOf('products/polyspacemodelsl/')>-1 || s.prop4.indexOf('/help/polyspace/')>-1 || s.prop4.indexOf('/help/toolbox/polyspace/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/polyspace/')>-1)) {prod="Polyspace Model Link SL";}
    else if (s.prop4.indexOf('products/polyspacemodeltl/')>-1 || s.prop4.indexOf('/help/polyspace/')>-1 || s.prop4.indexOf('/help/toolbox/polyspace/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/polyspace/')>-1)) {prod="Polyspace Model Link TL";}
    else if (s.prop4.indexOf('products/polyspaceumlrh/')>-1 || s.prop4.indexOf('/help/polyspace/')>-1 || s.prop4.indexOf('/help/toolbox/polyspace/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/polyspace/')>-1)) {prod="Polyspace UML Link RH";}
    else if (s.prop4.indexOf('products/simelectronics/')>-1 || s.prop4.indexOf('/help/physmod/elec/')>-1 || s.prop4.indexOf('/help/toolbox/physmod/elec/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/physmod/elec/')>-1)) {prod="SimElectronics";}
    else if (s.prop4.indexOf('products/econometrics/')>-1 || s.prop4.indexOf('/help/econ/')>-1 || s.prop4.indexOf('/help/toolbox/econ/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/econ/')>-1)) {prod="Econometrics Toolbox";}
    else if (s.prop4.indexOf('products/vehicle-network/')>-1 || s.prop4.indexOf('/help/vnt/')>-1 || s.prop4.indexOf('/help/toolbox/vnt/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/vnt/')>-1)) {prod="Vehicle Network Toolbox";}
    else if (s.prop4.indexOf('products/sl-design-optimization/')>-1 || s.prop4.indexOf('/help/sldo/')>-1 || s.prop4.indexOf('/help/toolbox/sldo/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/sldo/')>-1)) {prod="Simulink Design Optimization";}
    else if (s.prop4.indexOf('products/do-178/')>-1 || s.prop4.indexOf('/help/qualkitdo/')>-1 || s.prop4.indexOf('/help/toolbox/qualkitdo/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/qualkitdo/')>-1)) {prod="DO Qualification Kit";}
    else if (s.prop4.indexOf('products/iec-61508/')>-1 || s.prop4.indexOf('/help/certkitiec/')>-1 || s.prop4.indexOf('/help/toolbox/certkitiec/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/certkitiec/')>-1)) {prod="IEC Certification Kit";}
    else if (s.prop4.indexOf('products/hdl-verifier/')>-1 || s.prop4.indexOf('/help/edalink/')>-1 || s.prop4.indexOf('/help/toolbox/edalink/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/edalink/')>-1)) {prod="HDL Verifier";}
    else if (s.prop4.indexOf('products/matlab/')>-1 || s.prop4.indexOf('/help/ja_JP/techdoc/')>-1 || s.prop4.indexOf('/help/ja_JP/techdoc/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/ja_JP/techdoc/')>-1)) {prod="MATLAB";}
    else if (s.prop4.indexOf('products/matlab/')>-1 || s.prop4.indexOf('/help/matlab/')>-1 || s.prop4.indexOf('/help/techdoc/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/techdoc/')>-1)) {prod="MATLAB";}
    else if (s.prop4.indexOf('products/sl-plc-coder/')>-1 || s.prop4.indexOf('/help/plccoder/')>-1 || s.prop4.indexOf('/help/toolbox/plccoder/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/plccoder/')>-1)) {prod="Simulink PLC Coder";}
    else if (s.prop4.indexOf('products/global-optimization/')>-1 || s.prop4.indexOf('/help/gads/')>-1 || s.prop4.indexOf('/help/toolbox/gads/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/gads/')>-1)) {prod="Global Optimization Toolbox";}
    else if (s.prop4.indexOf('products/matlab-coder/')>-1 || s.prop4.indexOf('/help/coder/')>-1 || s.prop4.indexOf('/help/toolbox/coder/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/coder/')>-1)) {prod="MATLAB Coder";}
    else if (s.prop4.indexOf('products/phased-array/')>-1 || s.prop4.indexOf('/help/phased/')>-1 || s.prop4.indexOf('/help/toolbox/phased/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/phased/')>-1)) {prod="Phased Array System Toolbox";}
    else if (s.prop4.indexOf('products/simulink-code-inspector/')>-1 || s.prop4.indexOf('/help/slci')>-1 || s.prop4.indexOf('/help/toolbox/slci')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/slci/')>-1)) {prod="Simulink Code Inspector";}

//100113 CG: Added last OR statement above to account for changes in the URL of previous doc version & below 6 lines for new products. updated queryval and prodgroup for new products as well.
    else if (s.prop4.indexOf('products/polyspace-code-prover/')>-1 || s.prop4.indexOf('help/codeprover/')>-1 || s.prop4.indexOf('/help/toolbox/codeprover/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/codeprover/')>-1)) {prod="Polyspace Code Prover";}
    else if (s.prop4.indexOf('products/polyspace-bug-finder/')>-1 || s.prop4.indexOf('/help/bugfinder/')>-1 || s.prop4.indexOf('/help/toolbox/bugfinder/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/bugfinder/')>-1)) {prod="Polyspace Bug Finder";}
    else if (s.prop4.indexOf('products/financial-instruments/')>-1 || s.prop4.indexOf('/help/fininst/')>-1 || s.prop4.indexOf('/help/toolbox/fininst/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/fininst/')>-1)) {prod="Financial Instruments Toolbox";}
    else if (s.prop4.indexOf('products/trading/')>-1 || s.prop4.indexOf('help/trading/')>-1 || s.prop4.indexOf('/help/toolbox/trading/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/trading/')>-1)) {prod="Trading Toolbox";}
    else if (s.prop4.indexOf('products/fixed-point-designer/')>-1 || s.prop4.indexOf('/help/fixedpoint/')>-1 || s.prop4.indexOf('/help/toolbox/fixedpoint/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/fixedpoint/')>-1)) {prod="Fixed-Point Designer";} /*doc shares same URL as old FP tb*/
    else if (s.prop4.indexOf('products/matlab-production-server/')>-1 || s.prop4.indexOf('help/mts/')>-1 || s.prop4.indexOf('/help/toolbox/mts/')>-1|| (s.prop4.indexOf('/help/releases/')>-1 && s.prop4.indexOf('/mts/')>-1)) {prod="MATLAB Production Server"}
    else prod = "unknown";

    prod = prod.toLowerCase();
    return prod;
  }
  else {
    queryval=s.getQueryParam(type);
    queryval=queryval.toLowerCase();
    switch (queryval) {
    case "cm": prod = "communications system toolbox"; break;
    case "ct": prod = "control system toolbox"; break;
    case "db": prod = "database toolbox"; break;
    case "ds": prod = "dsp system toolbox"; break;
    case "el": prod = "spreadsheet link ex"; break;
    case "fi": prod = "financial toolbox"; break;
    case "fp": prod = "fixed point designer"; break;
    case "fl": prod = "fuzzy logic toolbox"; break;
    case "ip": prod = "image processing toolbox"; break;
    case "mg": prod = "mapping toolbox"; break;
    case "ml": prod = "matlab"; break;
    case "co": prod = "matlab compiler"; break;
    case "mp": prod = "model predictive control toolbox"; break;
    case "nn": prod = "neural network toolbox"; break;
    case "op": prod = "optimization toolbox"; break;
    case "pd": prod = "partial differential equation toolbox"; break;
    case "ps": prod = "simpowersystems"; break;
    case "rt": prod = "simulink coder"; break;
    case "rc": prod = "robust control toolbox"; break;
    case "sg": prod = "signal processing toolbox"; break;
    case "sl": prod = "simulink"; break;
    case "sf": prod = "stateflow"; break;
    case "st": prod = "statistics toolbox"; break;
    case "sm": prod = "symbolic math toolbox"; break;
    case "id": prod = "system identification toolbox"; break;
    case "wa": prod = "wavelet toolbox"; break;
    case "da": prod = "data acquisition toolbox"; break;
    case "dg": prod = "gauges blockset"; break;
    case "mr": prod = "matlab report generator"; break;
    case "sr": prod = "simulink report generator"; break;
    case "wt": prod = "real-time windows target"; break;
    case "sv": prod = "matlab & simulink student version"; break;
    case "df": prod = "datafeed toolbox"; break;
    case "xp": prod = "xpc target"; break;
    case "xe": prod = "xpc target embedded option"; break;
    case "cf": prod = "curve fitting toolbox"; break;
    case "ic": prod = "instrument control toolbox"; break;
    case "de": prod = "financial derivatives toolbox"; break;
    case "ec": prod = "embedded coder"; break;
    case "vr": prod = "simulink 3d animation"; break;
    case "eb": prod = "matlab builder ex"; break;
    case "mb": prod = "model-based calibration toolbox"; break;
    case "ms": prod = "simmechanics"; break;
    case "ae": prod = "aerospace blockset"; break;
    case "ia": prod = "image acquisition toolbox"; break;
    case "fx": prod = "fixed-income toolbox"; break;
    case "sd": prod = "simulink control design"; break;
    case "bi": prod = "bioinformatics toolbox"; break;
    case "gd": prod = "global optimization toolbox"; break;
    case "vv": prod = "simulink verification and validation"; break;
    case "rf": prod = "rf toolbox"; break;
    case "rb": prod = "simrf"; break;
    case "fh": prod = "filter design hdl coder"; break;
    case "ot": prod = "opc toolbox"; break;
    case "po": prod = "fixed-point toolbox"; break;
    case "sb": prod = "simbiology"; break;
    case "vp": prod = "computer vision system toolbox"; break;
    case "ld": prod = "simdriveline"; break;
    case "dm": prod = "parallel computing toolbox"; break;
    case "dw": prod = "matlab distributed computing server"; break;
    case "se": prod = "simevents"; break;
    case "mn": prod = "matlab builder ne"; break;
    case "sh": prod = "simhydraulics"; break;
    case "sy": prod = "systemtest"; break;
    case "hd": prod = "hdl coder"; break;
    case "mj": prod = "matlab builder ja"; break;
    case "at": prod = "aerospace toolbox"; break;
    case "dv": prod = "simulink design verifier"; break;
    case "ss": prod = "simscape"; break;
    case "pf": prod = "polyspace server for ada"; break;
    case "pg": prod = "polyspace model link sl"; break;
    case "pc": prod = "polyspace client for c/c++"; break;
    case "ph": prod = "polyspace model link tl"; break;
    case "pi": prod = "polyspace uml link rh"; break;
    case "pa": prod = "polyspace client for ada"; break;
    case "pb": prod = "polyspace code prover"; break;
    case "aa": prod = "al's toolbox"; break;
    case "bx": prod = "bryans toolbox"; break;
    case "sn": prod = "simelectronics"; break;
    case "et": prod = "econometrics toolbox"; break;
    case "vn": prod = "vehicle network toolbox"; break;
    case "so": prod = "simulink design optimization"; break;
    case "ar": prod = "phased array system toolbox"; break;
    case "do": prod = "do qualification kit"; break;
    case "ie": prod = "iec certification kit"; break;
    case "es": prod = "hdl verifier"; break;
    case "pl": prod = "simulink plc coder"; break;
    case "ci": prod = "simulink code inspector"; break;
    case "me": prod = "matlab coder"; break;
    case "hm": prod = "simulink hmi design"; break;
    case "it": prod = "financial instruments toolbox"; break;
    case "pr": prod = "matlab production server"; break;
    case "TR": prod = "trading toolbox"; break;
    case "BF": prod = "polyspace bug finder"; break;

    default:
      prod = "unknown";
      break;
    }
    prod = prod.toLowerCase();
    return prod;

  }
}

function prodgroup (prod){
    prod = prod.toLowerCase();
    switch (prod) {
    case "aerospace blockset": prodgrp="v1 control systems"; break;
    case "aerospace toolbox": prodgrp="v1 control systems"; break;
    case "al's toolbox": prodgrp="unknown"; break;
    case "bioinformatics toolbox": prodgrp="v5 computational biology"; break;
    case "bryans toolbox": prodgrp="unknown"; break;
    case "communications system toolbox": prodgrp="v2 signal processing and communications"; break;
    case "computer vision system toolbox": prodgrp="v3 image processing and computer vision"; break;
    case "control system toolbox": prodgrp="v1 control systems"; break;
    case "curve fitting toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "data acquisition toolbox": prodgrp="v4 test and measurement"; break;
    case "database toolbox": prodgrp="v6 computational finance"; break;
    case "datafeed toolbox": prodgrp="v6 computational finance"; break;
    case "do qualification kit": prodgrp="s6 embedded code generation"; break;
    case "dsp system toolbox": prodgrp="v2 signal processing and communications"; break;
    case "econometrics toolbox": prodgrp="v6 computational finance"; break;
    case "embedded coder": prodgrp="s6 embedded code generation"; break;
    case "filter design hdl coder": prodgrp="s7 hdl code generation and verification"; break;
    case "financial derivatives toolbox": prodgrp="v6 computational finance"; break;
    case "financial instruments toolbox": prodgrp="unknown"; break;
    case "financial toolbox": prodgrp="v6 computational finance"; break;
    case "fixed-income toolbox": prodgrp="v6 computational finance"; break;
    case "fixed-point toolbox": prodgrp="s6 embedded code generation"; break;
    case "fuzzy logic toolbox": prodgrp="v1 control systems"; break;
    case "gauges blockset": prodgrp="s1 simulink and stateflow"; break;
    case "global optimization toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "hdl coder": prodgrp="s7 hdl code generation and verification"; break;
    case "hdl verifier": prodgrp="s7 hdl code generation and verification"; break;
    case "iec certification kit": prodgrp="s6 embedded code generation"; break;
    case "image acquisition toolbox": prodgrp="v3 image processing and computer vision"; break;
    case "image processing toolbox": prodgrp="v3 image processing and computer vision"; break;
    case "instrument control toolbox": prodgrp="v4 test and measurement"; break;
    case "mapping toolbox": prodgrp="v3 image processing and computer vision"; break;
    case "matlab": prodgrp="m1 matlab"; break;
    case "matlab & simulink student version": prodgrp="e1 edu"; break;
    case "matlab builder ex": prodgrp="m3 application deployment"; break;
    case "matlab builder ja": prodgrp="m3 application deployment"; break;
    case "matlab builder ne": prodgrp="m3 application deployment"; break;
    case "matlab coder": prodgrp="s6 embedded code generation"; break;
    case "matlab compiler": prodgrp="m3 application deployment"; break;
    case "matlab distributed computing server": prodgrp="m4 parallel computing"; break;
    case "matlab production server": prodgrp="unknown"; break;
    case "matlab report generator": prodgrp="s1 simulink and stateflow"; break;
    case "model predictive control toolbox": prodgrp="v1 control systems"; break;
    case "model-based calibration toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "neural network toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "opc toolbox": prodgrp="v4 test and measurement"; break;
    case "optimization toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "parallel computing toolbox": prodgrp="m4 parallel computing"; break;
    case "partial differential equation toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "phased array system toolbox": prodgrp="v2 signal processing and communications"; break;
    case "polyspace client for ada": prodgrp="p1 polyspace embedded code verification"; break;
    case "polyspace client for c/c++": prodgrp="p1 polyspace embedded code verification"; break;
    case "polyspace model link sl": prodgrp="p1 polyspace embedded code verification"; break;
    case "polyspace model link tl": prodgrp="p1 polyspace embedded code verification"; break;
    case "polyspace server for ada": prodgrp="p1 polyspace embedded code verification"; break;
    case "polyspace server for c/c++": prodgrp="p1 polyspace embedded code verification"; break;
    case "polyspace uml link rh": prodgrp="p1 polyspace embedded code verification"; break;
    case "real-time windows target": prodgrp="s4 rapid prototyping and hil simulation"; break;
    case "rf toolbox": prodgrp="v2 signal processing and communications"; break;
    case "robust control toolbox": prodgrp="v1 control systems"; break;
    case "signal processing toolbox": prodgrp="v2 signal processing and communications"; break;
    case "simbiology": prodgrp="v5 computational biology"; break;
    case "simdriveline": prodgrp="s3 physical modeling"; break;
    case "simelectronics": prodgrp="s3 physical modeling"; break;
    case "simevents": prodgrp="s2 discrete event simulation"; break;
    case "simhydraulics": prodgrp="s3 physical modeling"; break;
    case "simmechanics": prodgrp="s3 physical modeling"; break;
    case "simpowersystems": prodgrp="s3 physical modeling"; break;
    case "simrf": prodgrp="v2 signal processing and communications"; break;
    case "simscape": prodgrp="s3 physical modeling"; break;
    case "simulink": prodgrp="s1 simulink and stateflow"; break;
    case "simulink 3d animation": prodgrp="s1 simulink and stateflow"; break;
    case "simulink code inspector": prodgrp="s6 embedded code generation"; break;
    case "simulink coder": prodgrp="s6 embedded code generation"; break;
    case "simulink control design": prodgrp="v1 control systems"; break;
    case "simulink design optimization": prodgrp="v1 control systems"; break;
    case "simulink design verifier": prodgrp="s5 model verification and validation"; break;
    case "simulink fixed point": prodgrp="s6 embedded code generation"; break;
    case "simulink hmi design": prodgrp="s1 simulink and stateflow"; break;
    case "simulink plc coder": prodgrp="s6 embedded code generation"; break;
    case "simulink report generator": prodgrp="s1 simulink and stateflow"; break;
    case "simulink verification and validation": prodgrp="s5 model verification and validation"; break;
    case "spreadsheet link ex": prodgrp="v6 computational finance"; break;
    case "stateflow": prodgrp="s1 simulink and stateflow"; break;
    case "statistics toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "symbolic math toolbox": prodgrp="m2 math, statistics, and optimization"; break;
    case "system identification toolbox": prodgrp="v1 control systems"; break;
    case "systemtest": prodgrp="s5 model verification and validation"; break;
    case "unknown tmw": prodgrp="z2 obsolete"; break;
    case "vehicle network toolbox": prodgrp="v4 test and measurement"; break;
    case "wavelet toolbox": prodgrp="v2 signal processing and communications"; break;
    case "xpc target": prodgrp="s4 rapid prototyping and hil simulation"; break;
    case "xpc target embedded option": prodgrp="s4 rapid prototyping and hil simulation"; break;
    case "trading toolbox": prodgrp="v6 computational finance"; break;
    case "polyspace bug finder": prodgrp="p1 polyspace embedded code verification"; break;

    default:
      prodgrp = "unknown";
      break;
    }
    prodgrp = prodgrp.toLowerCase();
    return prodgrp;
  }

var cvURL = unescape(document.URL);
cvURL = cvURL.toLowerCase();
cvURL = undorewrite(cvURL);

var refURL = unescape(document.referrer);
refURL = refURL.toLowerCase();
refURL = undorewrite(refURL);
/* Set report suite ID dynamically based on domain */

ReportSuiteID = cfCheckRSID(cvURL);
var s_account = ReportSuiteID ;

// s= new AppMeasurement();
 s=s_gi(s_account);

// Function to return s_account for Flash Video tracking
s.bcAccount = function(){
  return s_account;
}
s.bcInfo = function(){
  var s=this;
  return "prop24|"+s.pageName+"^prop27|"+s.pageURL+"^prop25|"+document.referrer.toString();
}

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/*Adding for the visitorID service - 082515 CG*/
s.visitor = Visitor.getInstance("B1441C8B533095C00A490D4D@AdobeOrg");
s.charSet="UTF-8";
/* Conversion Config */
s.currencyCode="USD";
/* Link Tracking Config */
s.trackDownloadLinks  = true;
s.trackExternalLinks  = true;
s.trackInlineStats    = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,dmg,bin,msg,m";
s.linkInternalFilters = "javascript:,mathworks.,force.com";
s.linkLeaveQueryString  = false;
//s.linkTrackVars     = "None";
s.linkTrackEvents   = "None";
s.visitorNamespace    = "mathworks";
s.mobile        = "true"; //100113 CG: added this line to use the mobile suscriber ID to track mobile visits

/* Channel Manager Plugin Config */
/*Left out -'Internal Banner Ad' then 'IBA_ Remove adw_ in production*/
s._channelPattern="Paid Search|ppc_>Paid Social Ad|psb_>Paid Social Media|psm_>External Promotion|pep_>Partner Promotion|prp_>Paid Search|adw_"
s._channelParameter="Email|elqaid,s_v1"
s._channelDomain="Social Media|facebook.com,linkedin.com,twitter.com,orkut.com,friendster.com,livejournal.com,blogspot.com,wordpress.com,friendfeed.com,myspace.com,digg.com,reddit.com,stumbleupon.com,twine.com,yelp.com,mixx.com,delicious.com,tumblr.com,disqus.com,intensedebate.com,plurk.com,slideshare.net,backtype.com,netvibes.com,mister-wong.com,diigo.com,flixster.com,youtube.com,vimeo.com,12seconds.tv,zooomr.com,identi.ca,jaiku.com,flickr.com,imeem.com,dailymotion.com,photobucket.com,fotolog.com,smugmug.com,classmates.com,myyearbook.com,mylife.com,tagged.com,brightkite.com,ning.com,bebo.com,hi5.com,yuku.com,cafemom.com,xanga.com"

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
// FPC Migration
s.trackingServer="metrics.mathworks.com"
s.trackingServerSecure="smetrics.mathworks.com"
s.visitorMigrationKey="51AA1C7A"
s.visitorMigrationServer="mathworks.com.ssl.sc.omtrdc.net"
s.visitorMigrationServerSecure="mathworks.com.ssl.d1.sc.omtrdc.net"

/*setting cookie domain variable - added 12/28/2012 - CG*/
s.fpCookieDomainPeriods="2"
var d=window.location.hostname
if(d.indexOf('.co.uk')>-1||d.indexOf('.co.jp')>-1||d.indexOf('.co.kr')>-1||d.indexOf('.com.au')>-1)
  s.fpCookieDomainPeriods="3";


/************************** CONFIG SECTION END **************************/


s.usePlugins  = true;
function s_doPlugins(s)
{
  /*  Set PageName  */
   if ((!s.pageType) && (s.pageName== "" || s.pageName==null))  {
    s.pageName=cfUtility(cvURL,'pagename');
   }

  /*  Set Channel */
  s.channel=cfUtility(cvURL,'channel');

  /*  Set Server  */
  s.server=cfUtility(cvURL,'server');

  if ((cvURL.indexOf('blogs.mathworks.')>-1) && (s.channel=="/"))
  {
    s.channel="blogs index page";
    if (!s.pageType){
      s.pageName="blogs index page";
    }
    s.prop32="blogs";

  }
  else if (s.channel=="/") //&& (cvURL.indexOf('/downloads') ==-1))
  {
    s.channel="homepage";
    if (!s.pageType){
      s.pageName="homepage";
    }
  }

  /* Set URL Page Name */
  if (s.channel=="homepage" || s.channel=="blogs index page"){
    s.prop4 = s.server;
  }
  else {
    s.prop4 = s.server+ cfUtility(cvURL,'pagename');
  }

  /* Some exceptions when file= query string param is present */
  if (s.getQueryParam('file') != "")
  {
    if (!window.s.pageType){
      s.pageName=cfUtility(cvURL,'pagename')+"?file="+s.getQueryParam('file');
    }
  s.prop4 = s.server+s.channel+"?file="+s.getQueryParam('file');
  }

  String.prototype.replaceAll = function(str1, str2, ignore){
      return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function(c){return "\\" + c;}), "g"+(ignore?"i":"")), str2);
  };

  /* setting prop33 for WSM URL Pagename*/
  s.prop33=s.prop4.replaceAll("/","::");

  /*setting blank prop17 for WSM lead generator type*/
  s.prop17="BLANK";

  /*  Set Site Section, Sub Sections */
  cvSplit = s.channel.split("/");
  if ((s.prop5 == null || s.prop5 == "") && cvSplit[1] != null && cvSplit[1] != "") s.prop5 = cvSplit[1];
  if (cvURL.indexOf('makerzone.mathworks')>-1 && (cvSplit[1] == null || cvSplit[1] == "")) s.prop5 = "mz::" + s.channel; // 01013 CG added this line to indentify MAL for MZ homepage
  if ((s.prop5 == null || s.prop5 == "") && (cvSplit[1] == null || cvSplit[1] == "")) s.prop5 = s.channel; // 01013 CG added this line to indentify MAL for homepage & blogs
  if (cvURL.indexOf('makerzone.mathworks')>-1 && (cvSplit[1] != null && cvSplit[1] != "") ) s.prop5 ="mz::" + cvSplit[1]; // 01013 CG added this line to indentify makerzone MALs
  if (cvSplit[2] != null && cvSplit[2] != "") s.prop6 = s.prop5 + "/" + cvSplit[2];
  if (cvSplit[3] != null && cvSplit[3] != "") s.prop7 = s.prop6 + "/" + cvSplit[3];


  /* Get new and legacy campaign parameters from URL */
  if (s.getQueryParam('s_eid') != "") {
    s.campaign = s.eVar13=s.getValOnce(s.getQueryParam('s_eid')); // wrap getValonce plugin
  }
    else if (s.getQueryParam('s_v1') != "") {
    var tmpv1 = s.getQueryParam('s_v1');
    if(tmpv1.indexOf('_') > 0) {
          s.campaign=tmpv1.substring(0,tmpv1.indexOf('_'));
    }
        else {
          s.campaign=tmpv1;
        }
    //Email opened - prop56
    s.prop56=s.getQueryParam('s_v1');
        // de-duplicate campaign variable to keep from inflating values
        s.campaign=s.getValOnce(s.campaign,'s_campaign',0);
    //s.eVar1=s.campaign;
    s.eVar1='D=v0';
    //s.campaign = s.eVar1=s.getValOnce(s.getQueryParam('s_v1'));
        if (s.getQueryParam('elqem') != ""){
            s.eVar73 = s.getQueryParam('elqem');
        }
  } 
    else if (s.getQueryParam('elqaid') != "") {
    var tmpv1 = s.getQueryParam('elqaid');
    if(tmpv1.indexOf('_') > 0) {
          s.campaign=tmpv1.substring(0,tmpv1.indexOf('_'));
    }
        else {
          s.campaign=tmpv1;
        }
    //Email opened - prop56
    s.prop56=s.getQueryParam('elqaid');
        // de-duplicate campaign variable to keep from inflating values
        s.campaign=s.getValOnce(s.campaign,'s_campaign',0);
    //s.eVar1=s.campaign;
    s.eVar1='D=v0';
    //s.campaign = s.eVar1=s.getValOnce(s.getQueryParam('s_v1'));
  }    


  if (s.getQueryParam('s_tid') != "") {
    s.eVar14 = s.getValOnce(s.getQueryParam('s_tid'));
    //s.prop22=s.eVar14;
    s.prop22='D=v14';
  }
  if (s.getQueryParam('s_iid') != "") {
    s.eVar15 = s.getValOnce(s.getQueryParam('s_iid'));
    //s.prop23=s.eVar15;
    s.prop23='D=v15';
  }
  if (s.getQueryParam('s_cid') != "") {
    s.eVar35 = s.getValOnce(s.getQueryParam('s_cid'));
  }

  if (s.campaign != '') {
    s.prop1=s.getAndPersistValue(s.campaign,'s_cmp_pages',0);
  }
  if (s.prop1 != '') {
    if (!window.s.pageType){
      //s.prop2=s.prop1 +"||"+ s.pageName;
      s.prop2='D=c1+"||"+pageName';
    }
  }

  if (s.eVar1 != '') {
    s.prop12=s.getAndPersistValue(s.eVar1,'s_email_pages',0);
  }
  if (s.prop12 != '') {
    if (!window.s.pageType){
      //s.prop13=s.prop12 +"||"+ s.pageName;
      s.prop13='D=c12+"||"+pageName';
    }
  }

  if (s.eVar35 != '') {s.prop8=s.getAndPersistValue(s.eVar35,'s_old_pages',0); }
  if (s.prop8 != '') {
    if (!window.s.pageType){
      //s.prop9=s.prop8 +"||"+ s.pageName;
      s.prop9='D=c8+"||"+pageName';
    }
  }

  if(s.getQueryParam('elq_cid') != "") {
    s.eVar59 = s.getValOnce(s.getQueryParam('elq_cid'));
    }



  /*  Set Page Title and Full URL*/
  s.prop35=document.title.toLowerCase();

  if (cvURL.search(/[a-zA-Z0-9]+(@|%40|%2540)[a-zA-Z0-9]+\.[a-zA-Z]+/) == -1) {
    s.prop34="D=g";
  }

  /*  Capturing referrer and previous page information  */
  if (cfUtility(refURL,'server').search("mathworks.") != -1){
    s.prop10= cfUtility(refURL,'server');
    s.prop28= s.getPreviousValue(s.prop35,'c_c35','');
    refSplit = cfUtility(refURL,'channel').split("/");
    if ((s.prop19 == null || s.prop19 == "") && refSplit[1] != null && refSplit[1] != "") s.prop19 = refSplit[1];
    if ((s.prop19 == null || s.prop19 == "") && (refSplit[1] == null || refSplit[1] == "")) s.prop19 = 'D=c40' ; // 01013 CG added this line to indentify previous MAL for homepage and blogs
    if (refURL.indexOf('makerzone.mathworks')>-1 && (refSplit[1] != null && refSplit[1] != "") ) s.prop19 ="mz::" + refSplit[1]; /// 01013 CG added this line to indentify makerzone MALs
    if (refSplit[2] != null && refSplit[2] != "") s.prop20 = s.prop19 + "/" + refSplit[2];
    if (refSplit[3] != null && refSplit[3] != "") s.prop21 = s.prop20 + "/" + refSplit[3];
    s.prop42="D=r";
    //s.prop42=decodeURI(refURL); 091813 CG: commented out to reduce image request size, using dynamic variable above
    s.prop29=cfUtility(refURL,'server')+cfUtility(refURL,'channel')+cfUtility(refURL,'filename');
    /* Get previous value of product name, group, artifact type and lead generator. Copied from old s_code  */
    s.prop38= s.getPreviousValue(s.prop30,'c_c30','');
    s.prop39= s.getPreviousValue(s.prop31,'c_c31','');
    s.prop40= s.getPreviousValue(s.prop32,'c_c32','');
    //s.prop41= s.getPreviousValue(s.prop33,'c_c33','');
    /* Capturing CTA location */
    if (s.prop29 && s.getQueryParam('s_iid') != ""){
      //s.eVar28=s.prop29;
      s.eVar28='D=c29';
      s.eVar54='D=c40';
    }
  }


  /* Set Internal Search Phrase */
  if (s.getQueryParam('q') != '') {
    s.eVar3=s.getQueryParam('q');
    s.prop3=s.getQueryParam('q');
  }
  if (s.getQueryParam('qdoc') != '') {
    s.eVar3=s.getQueryParam('qdoc')+':: lucene';
    s.prop3=s.getQueryParam('qdoc')+':: lucene';
  }

  /* New or Repeat Visit and Days Since Last Visit*/
  s.eVar6=s.getNewRepeat();
  s.eVar9=s.getDaysSinceLastVisit();

  /*  Identify first page of visit  */
  var tmp = s.getVisitStart('c_vs');
  if (tmp == 1) {
    s.prop15 = 'Yes';
    s.eVar29= Math.floor(Math.random()*1000000); // Random number
    //s.eVar25=s.prop35;
    s.eVar25='D=c35';
    if (!window.s.pageType){
      //s.eVar26=s.pageName;
      s.eVar26='D=pageName';
    }
    //s.eVar27=s.server;
    s.eVar27='D=server';
    var ts = Math.round((new Date()).getTime() / 1000);
    s.eVar34=s.eVar29+'::'+ts; // Random number+Unix time stamp
  }

  if (s.eVar29 != '') {
    s.prop26=s.getAndPersistValue(s.eVar29,'c_rand',0);
  }
  if (s.eVar34 != '') {
    s.prop14=s.getAndPersistValue(s.eVar34,'c_sess',0);
  }

  /*  Last Seminar Viewed */
  if (s.prop4.search("/company/events/seminars/seminar") != -1) {
    //s.eVar12 = s.prop35;
    s.eVar12='D=c35';
  }

  /*  Recruiting source */
  if (s.prop4.search("/company/jobs/") != -1 && s.getQueryParam('src') != '') {
    s.eVar19 =s.getQueryParam('src');
  }

  /* Setting MW Lead Submit ID on confirmation pages */
  if (s.getQueryParam('wfsid') != ''){
    s.prop53 = s.getQueryParam('wfsid');
  }

  if (s.getQueryParam('elqsid')!= ''){
    s.prop53= s.getQueryParam('elqsid');
  }

    /* Setting contact potential use on confirmation pages */
  if (s.getQueryParam('potential_use') != ''){
    s.prop18 =s.getQueryParam('potential_use');
    s.eVar63 =s.getQueryParam('potential_use');
  }

  /*  Code to get Google referrer information */
  s.getGoogleRank('event18','event19','eVar17','eVar18');
  if(s.events){
    if((s.events+',').indexOf('event18,')>-1){
      if (!window.s.pageType){
        s.hier1=s.eVar17+"|"+s.pageName+"|"+s.eVar18;
        s.hier2=s.pageName+"|"+s.eVar18+"|"+s.eVar17+"|";
      }
    }
  }


// 100113 CG: added below line to set referrer sub-domain
  s.eVar55 = s.getFullReferringDomains();

  /* Channel Manager v2.4 */
    s.channelManager('s_eid,elqaid,s_v1',':','c_cm','','s_dl',0);
    if (s._channel != "" || s._channel != undefined){
      s.eVar37=s._referringDomain;
      s.eVar38=s._partner;
      //s.campaign=s._campaignID;
      s.eVar39=s.campaign;
      s.eVar2=s._keywords;
      s.eVar40=s._channel;
      s.eVar36=s._referrer;
    }


  if (s.eVar2 != '') {
    s.prop11=s.getAndPersistValue(s.eVar2,'c_srch',0);
  }

  /*Setting the Campaign Touches counter*/
    if(s.eVar39){
      s.eVar41='+1'; s.eVar42='+1'; s.eVar43='+1'; s.eVar44='+1';
      s.events=s.apl(s.events,'event5',',',2);
    }

  if(s.events){
    if(s.eVar39){s.eVar45=s.eVar46=s.eVar47=s.eVar48='start';}
    if(s.events.indexOf('event1:')>-1){s.eVar45='stop';}
    if(s.events.indexOf('event2:')>-1){s.eVar46='stop';}
    if(s.events.indexOf('event3:')>-1){s.eVar47='stop';}
    if(s.events.indexOf('event4:')>-1){s.eVar48='stop';}
  }

  s.eVar45=s.getTimeToComplete(s.eVar45,'ttc45',0);
  s.eVar46=s.getTimeToComplete2(s.eVar46,'ttc46',0);
  s.eVar47=s.getTimeToComplete3(s.eVar47,'ttc47',0);
  s.eVar48=s.getTimeToComplete4(s.eVar48,'ttc48',0);


  /* The following functions set product name into propN(30) and product group into propN(31) */
  s.prop30= prodassign('urly');
  if ((!s.prop30 || s.prop30=="unknown")&& s.getQueryParam('ref') != '' ){
    s.prop30=prodassign('ref');
  }
  else if ((!s.prop30 || s.prop30=="unknown") && s.getQueryParam('product') != ''){
    s.prop30=prodassign('product');
  }
  if (s.prop30){
    s.prop31=prodgroup(s.prop30);
  }

  /*  Additional product name, group, artifact type assignment  */
  if(s.prop5 == 'solutions'){
    s.prop30 = 'unknown';
    s.prop31 = 'unknown';
    s.prop32 = 'solution';
  }
  else if(s.prop5 == 'data-acquisition' || s.prop5== 'data-analysis' || s.prop5 == 'mathematical-modeling' || s.prop5 == 'algorithm-development' || s.prop5 == 'parallel-computing' || s.prop5 == 'desktop-web-deployment'){
    s.prop30 = 'unknown';
    s.prop31 = 'unknown';
    s.prop32 = 'solution-capabilities';
  }
  else if(s.prop5=='system-design-simulation'||s.prop5=='physical-modeling'||s.prop5=='discrete-event-simulation'||s.prop5=='rapid-prototyping'||s.prop5=='embedded-code-generation'||s.prop5=='hdl-code-generation-verification'||s.prop5=='verification-validation'){
    s.prop30 = 'unknown';
    s.prop31 = 'unknown';
    s.prop32 = 'solution-capabilities';
  }
  else if(s.prop5=='embedded-systems'||s.prop5=='control-systems'||s.prop5=='dsp'||s.prop5=='communications-systems'||s.prop5=='image-video-processing'||s.prop5=='fpga-design'||s.prop5=='mechatronics'||s.prop5=='test-measurement'||s.prop5=='computational-biology'||s.prop5=='computational-finance'){
    s.prop30 = 'unknown';
    s.prop31 = 'unknown';
    s.prop32='solution-application';
  }
  else if(s.prop5=='aerospace-defense'||s.prop5=='automotive'||s.prop5=='biotech-pharmaceutical'||s.prop5=='communications'||s.prop5=='electronics-semiconductors'||s.prop5=='energy-production'||s.prop5=='financial-services'||s.prop5=='industry-automation-machinery'){
    s.prop30 = 'unknown';
    s.prop31 = 'unknown';
    s.prop32 = 'solution-industry';
  }
  else if(s.prop5=='industries' && s.prop6 == 'other'){
    s.prop30 = 'unknown';
    s.prop31 = 'unknown';
    s.prop32 = 'solution-industry';
  }
  else if (s.prop5 == 'matlabcentral'){
    s.prop30 = 'unknown';
    s.prop31 = 'unknown';
    s.prop32 = 'matlabcentral';

  }

  else if(s.prop5=='company'){
    if (s.prop7){
      if (s.prop7 == 'company/aboutus/contact_us' || s.prop7== 'company/events/webinars' || s.prop7 == 'company/events/seminars' ){
        if (s.prop38 != 'no value'){
          s.prop30=s.prop38;
          s.prop31=s.prop39;
        }
        else {
          s.prop30 = 'unknown';
          s.prop31 = 'unknown';
        }
        s.prop32= cvSplit[3];
      }
      else if (s.prop6== 'company/events'){
        if (s.prop38 != 'no value'){
          s.prop30=s.prop38;
          s.prop31=s.prop39;
        }
        else {
          s.prop30 = 'unknown';
          s.prop31 = 'unknown';
        }
        s.prop32= cvSplit[2];
      }
      else {
      s.prop30 = 'unknown';
      s.prop31 = 'unknown';
      s.prop32=cvSplit[1];
      }
    }
/*    else if (s.prop6){
      var filename=cfUtility(cvURL,'filename');
      if (filename.indexOf('.')!=-1){
        s.prop30=filename.substring(0,filename.indexOf('.'));
      }
      else {
        s.prop30=cvSplit[2];
      }
      s.prop31=cvSplit[2];
      s.prop32=cvSplit[1];
    }*/
    else {
      s.prop30=s.prop31='unknown';
      s.prop32='company';
    }

  }

  else if (s.prop5=='programs'){
    if (s.prop6 == 'programs/techkits' || s.prop6 == 'programs/trial' || s.prop6 == 'programs/trials'){
      if (!s.prop30){
        if (s.prop38 != 'no value'){
          s.prop30 =  s.prop38;
          s.prop31 =  s.prop39;
        }
        else {
          s.prop30=s.prop31='unknown';
        }
      }
      s.prop32 = cvSplit[2];
    }
  }


  else if (s.channel=="homepage") {
      s.prop30=s.prop31='unknown';
      s.prop32='homepage';
  }


  else if (s.prop30 && s.prop5=='products') {
    var filename=cfUtility(cvURL,'filename');
    if(filename.search('description') > -1){
      s.prop32="product_info";
    }

  else if ((filename == 'index.html') || (filename == '')){
      if(s.prop6){
        s.prop32='product_main';
      }
      else {
        s.prop32='product';
      }
    }
    else {
      if (filename.indexOf('.')!=-1){
      //s.prop32='product_'+filename.substring(0,filename.indexOf('.'));
      s.prop32='product_other';
      }
    }
  }
  else if (s.prop5 == 'products'){
    if (cfUtility(cvURL,'filename')=='login_pricing.html'){
      if (s.prop38 != 'no value'){
          s.prop30=s.prop38;
          s.prop31=s.prop39;
        }
        else {
          s.prop30=s.prop31='unknown';
        }
        s.prop32= 'Get Pricing';

    }
  }
  else if (s.prop5 == 'store'){
    if (cfUtility(cvURL,'filename')=='productindexsubmit.do'){
        if (s.prop38 != 'no value'){
          s.prop30=s.prop38;
          s.prop31=s.prop39;
        }
        else {
          s.prop30=s.prop31='unknown';
        }
        s.prop32= 'Store - Get Pricing';
    }
    else if (cfUtility(cvURL,'filename')=='productindexlink.do'){
        if (s.prop38 != 'no value'){
          s.prop30=s.prop38;
          s.prop31=s.prop39;
        }
        else {
          s.prop30=s.prop31='unknown';
        }
        s.prop32= 'Store - Buy Now';
    }

  }

  else if (cvURL.indexOf('blogs.mathworks.')>-1){
    s.prop30=s.prop31='unknown';
    s.prop32='blogs';
  }

  if (!s.prop30){
    s.prop30='unknown';
  }
  if (!s.prop31){
    s.prop31='unknown';
  }

  if (!s.prop32){
    if (s.prop5){
        s.prop32=s.prop5;
    }
    else {
      s.prop32='unknown';
    }
  }

//s.detectRIA('s_ria','eVar56','eVar57','','','1');
s.tnt=s.trackTNT();
}

  /*  Copy product name, product grp and artifact type props into eVars */
  if(s.prop30) {s.eVar30=s.prop30;}
  if(s.prop31) {s.eVar31=s.prop31;}
  if(s.prop32) {s.eVar32=s.prop32;}


  //Extra page title prop for WSM reporting
  if (s.prop35) {s.prop55 = s.prop35;}
  //Extra artifact type prop for reporting as eVar32 has been used by videos
  if (s.eVar32) {s.eVar33=s.eVar32;}



 /* Added on 4/15/13 to track internal search widget - CG */
// Application-set search properties
// - prop49: application identifier
// - prop50: search term minus facets
// - prop51: search results page
// - prop52: search facets
(function(search) {
  if (!search) { return; }

  if (search.app)                            { s.prop49 = search.app; }
  if (search.term && search.term !== '')     { s.prop50 = search.term; }
  if (search.page)                           { s.prop51 = search.page; }
  if (search.facets && search.facets !== '') { s.prop52 = search.facets; }
  if (search.typeahead && search.typeahead !== '') { s.prop63 = search.typeahead; }
})(window.SearchTracking);

/*added on 6/14/13 to track use for the doc TOC - CG */

(function(toc) {
  if (!toc) { return; }

  if (toc.open) {
        s.prop60="TOC open"; //record the property for setting that the toc was open on page load.
  }
  if (toc.clicked) {
    s.prop61=cfUtility(cvURL,'pagename'); // record that the current page resulted as a click on the TOC.
    s.prop62=cfUtility(refURL,'channel')+cfUtility(refURL,'filename');  // records the previous (referrer) page the user was on.
 }


})(window.TocTracking);

if (typeof _satellite.readCookie("s_pers") !== "undefined" && _satellite.readCookie("s_pers") !== "") {
    document.cookie = 's_pers=; Domain=.mathworks.com; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/************************** PLUGINS SECTION - START *************************/
s.doPlugins=s_doPlugins;
/*
 * Get Full Referring Domains 100113 CG: Added to capture the referring sub-domain
 */
s.getFullReferringDomains=new Function(""
+"var s=this,dr=window.document.referrer,n=s.linkInternalFilters.spli"
+"t(',');if(dr){var r=dr.split('/')[2],l=n.length;for(i=0;i<=l;i++){i"
+"f(r.indexOf(n[i])!=-1){r='';i=l+1;}}return r}");

/*
 * Utility: AppMeasurement Compatibility v1.1
 * Define deprecated H-code s properties and methods used by legacy plugins
 */
s.wd=window;
s.n=navigator;
s.fl=new Function("x","l",""
+"return x?(''+x).substring(0,l):x");
s.pt=new Function("x","d","f","a",""
+"var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l"
+"]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.subs"
+"tring(z,x[l]);t=z<x[l]?t:''}return''");
s.rep=new Function("x","o","n",""
+"var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for("
+"i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){"
+"j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i"
+">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi"
+"n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x");
s.ape=new Function("x",""
+"var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y"
+"='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComp"
+"onent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf("
+"n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}"
+"else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.sub"
+"string(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e="
+"h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='"
+"+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2"
+"B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0)"
+"{i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.subst"
+"ring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.subst"
+"ring(i);i=x.indexOf('%',i)}}}return x");
s.epa=new Function("x",""
+"var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu"
+"nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape"
+"(x)}return y');return tcf(x)}else return unescape(x)}return y");
s.parseUri=new Function("u",""
+"if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')"
+"==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.cr"
+"eateElement('a'),l=['href','protocol','host','hostname','port','pat"
+"hname','search','hash'],p,r={href:u,toString:function(){return this"
+".href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p"
+"]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathnam"
+"e='/'+p;return r");
s.gtfs=new Function(""
+"var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot"
+"ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?"
+"d.referrer:d.location;return{location:s.parseUri(u)}");

/*
plugin:  getQueryParam 2.4
*/
s.getQueryParam=new Function("p","d","u","h",""
+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u","h",""
+"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
+"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v"); s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return''");



/*
 * s.join: 1.0 - Joins an array into a string
 */
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
 * Plugin: getVisitStart v2.0 - returns 1 on first page of visit
 * otherwise 0
 */
s.getVisitStart=new Function("c",""
+"var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c"
+")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");


/*
 * Plugin: getNewRepeat 1.0 - Return whether user is new or repeat
 */
s.getNewRepeat=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"
+"(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("
+"'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"
+".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"
+"al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"
+"n 'Repeat';");

s.getDaysSinceLastVisit=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),c='s_lastvisit',day=24*"
+"60*60*1000;e.setTime(ct+3*365*day);cval=s.c_r(c);if(!cval){s.c_w(c,"
+"ct,e);return 'First page view or cookies not supported';}else{var d"
+"=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);return 'More t"
+"han 30 days';}if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);return 'More "
+"than 7 days';}if(d<7*day+1 && d>day){s.c_w(c,ct,e);return 'Less tha"
+"n 7 days';}if(d<day+1){s.c_w(c,ct,e);return 'Less than 1 day';}}els"
+"e return '';}");

/*
 * Plugin: getValOnce_v1.0
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");

/*
 * Plugin Utility: Append to List v1.2
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo"
+"r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe"
+"rCase()));}}if(!m)l=l?l+d+v:v;return l;");

/*
 * Plugin: getTimeToComplete 0.4 - return the time from start to stop
 */
s.getTimeToComplete=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
s.getTimeToComplete2=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr2){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr2=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
s.getTimeToComplete3=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr3){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr3=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
s.getTimeToComplete4=new Function("v","cn","e",""
+"var s=this,d=new Date,x=d,k;if(!s.ttcr4){e=e?e:0;if(v=='start'||v=='"
+"stop')s.ttcr4=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
+"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
+".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
+"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
+"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
+"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");

/*
 *  Plug-in: crossVisitParticipation v1.6 - stacks values from
 *  specified variable in cookie and returns value
 */
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!='')arry=eval(c);var e=new Date();e.setFullYear(e.getFullY"
+"ear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[ar"
+"ry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new"
+" Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var "
+"td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.roun"
+"d((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arr"
+"y[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{deli"
+"m:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join"
+"(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");

/*
 * channelManager v2.4 - Tracking External Traffic
 */
s.channelManager = new Function("a", "b", "c", "d", "e", "f", "var s=this,A,B,g,l,m,M,p,q,P,h,k,u,S,i,O,T,j,r,t,D,E,F,G,H,N,U,v=0,X,Y,W,n=new Date;n.setTime(n.getTime()+1800000);if(e){v=1;if(s.c_r(e))v=0;if(!s.c_w(e,1,n))s.c_w(e,1,0);if(!s.c_r(e))v=0;}g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();if(!g)h=1;i=g.indexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){B=j.indexOf(k[m])==-1?'':g;if(B)O=B;}if(!O&&!h){p=g;U=g.indexOf('//');q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;t=g.substring(q,r);t=t.toLowerCase();u=t;P='Referrers';S=s.seList+'>'+s._extraSearchEngines;if(d==1){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g=s.repl(g,'as_q','*');}A=s.split(S,'>');T=A.length;for(i=0;i<A.length;i++){D=A[i];D=s.split(D,'|');E=s.split(D[0],',');for(G=0;G<E.length;G++){H=j.indexOf(E[G]);if(H>-1){if(D[2])N=u=D[2];else N=t;if(d==1){N=s.repl(N,'#',' - ');g=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle');}i=s.split(D[1],',');for(k=0;k<i.length;k++){M=s.getQueryParam(i[k],'',g).toLowerCase();if(M)break;}}}}}if(!O||f!='1'){O=s.getQueryParam(a,b);if(O){u=O;if(M)P='Paid Search';else P='Paid Non-Search';}if(!O&&N){u=N;P='Natural Search'}}if(h==1&&!O&&v==1)u=P=t=p='Direct Load';X=M+u+t;c=c?c:'c_m';if(c!='0'){X=s.getValOnce(X,c,0);}g=s._channelDomain;if(g&&X){k=s.split(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i=j.indexOf(Y);if(i>-1)P=q[0];}}}g=s._channelParameter;if(g&&X){k=s.split(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){U=s.getQueryParam(r[T]);if(U)P=q[0]}}}g=s._channelPattern;if(g&&X){k=s.split(g,'>');l=k.length;for(m=0;m<l;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[T];Y=Y.toLowerCase();i=O.toLowerCase();H=i.indexOf(Y);if(H==0)P=q[0];}}}if(X)M=M?M:N?'Keyword Unavailable':'n/a';p=X&&p?p:'';t=X&&t?t:'';N=X&&N?N:'';O=X&&O?O:'';u=X&&u?u:'';M=X&&M?M:'';P=X&&P?P:'';s._referrer=p;s._referringDomain=t;s._partner=N;s._campaignID=O;s._campaign=u;s._keywords=M;s._channel=P;");

/* Top 130 Search Engines (used by Channel Manager) */
s.seList="altavista.co|q,r|AltaVista>aol.co.uk,search.aol.co.uk|query"
+"|AOL - United Kingdom>search.aol.com,search.aol.ca|query,q|AOL.com "
+"Search>ask.com,ask.co.uk|ask,q|Ask Jeeves>www.baidu.com|wd|Baidu>da"
+"um.net,search.daum.net|q|Daum>google.co,googlesyndication.com|q,as_"
+"q|Google>google.com.ar|q,as_q|Google - Argentina>google.com.au|q,as"
+"_q|Google - Australia>google.at|q,as_q|Google - Austria>google.com."
+"bh|q,as_q|Google - Bahrain>google.com.bd|q,as_q|Google - Bangladesh"
+">google.be|q,as_q|Google - Belgium>google.com.bo|q,as_q|Google - Bo"
+"livia>google.ba|q,as_q|Google - Bosnia-Hercegovina>google.com.br|q,"
+"as_q|Google - Brasil>google.bg|q,as_q|Google - Bulgaria>google.ca|q"
+",as_q|Google - Canada>google.cl|q,as_q|Google - Chile>google.cn|q,a"
+"s_q|Google - China>google.com.co|q,as_q|Google - Colombia>google.co"
+".cr|q,as_q|Google - Costa Rica>google.hr|q,as_q|Google - Croatia>go"
+"ogle.cz|q,as_q|Google - Czech Republic>google.dk|q,as_q|Google - De"
+"nmark>google.com.do|q,as_q|Google - Dominican Republic>google.com.e"
+"c|q,as_q|Google - Ecuador>google.com.eg|q,as_q|Google - Egypt>googl"
+"e.com.sv|q,as_q|Google - El Salvador>google.ee|q,as_q|Google - Esto"
+"nia>google.fi|q,as_q|Google - Finland>google.fr|q,as_q|Google - Fra"
+"nce>google.de|q,as_q|Google - Germany>google.gr|q,as_q|Google - Gre"
+"ece>google.com.gt|q,as_q|Google - Guatemala>google.hn|q,as_q|Google"
+" - Honduras>google.com.hk|q,as_q|Google - Hong Kong>google.hu|q,as_"
+"q|Google - Hungary>google.co.in|q,as_q|Google - India>google.co.id|"
+"q,as_q|Google - Indonesia>google.ie|q,as_q|Google - Ireland>google."
+"is|q,as_q|Google - Island>google.co.il|q,as_q|Google - Israel>googl"
+"e.it|q,as_q|Google - Italy>google.com.jm|q,as_q|Google - Jamaica>go"
+"ogle.co.jp|q,as_q|Google - Japan>google.jo|q,as_q|Google - Jordan>g"
+"oogle.co.ke|q,as_q|Google - Kenya>google.co.kr|q,as_q|Google - Kore"
+"a>google.lv|q,as_q|Google - Latvia>google.lt|q,as_q|Google - Lithua"
+"nia>google.com.my|q,as_q|Google - Malaysia>google.com.mt|q,as_q|Goo"
+"gle - Malta>google.mu|q,as_q|Google - Mauritius>google.com.mx|q,as_"
+"q|Google - Mexico>google.co.ma|q,as_q|Google - Morocco>google.nl|q,"
+"as_q|Google - Netherlands>google.co.nz|q,as_q|Google - New Zealand>"
+"google.com.ni|q,as_q|Google - Nicaragua>google.com.ng|q,as_q|Google"
+" - Nigeria>google.no|q,as_q|Google - Norway>google.com.pk|q,as_q|Go"
+"ogle - Pakistan>google.com.py|q,as_q|Google - Paraguay>google.com.p"
+"e|q,as_q|Google - Peru>google.com.ph|q,as_q|Google - Philippines>go"
+"ogle.pl|q,as_q|Google - Poland>google.pt|q,as_q|Google - Portugal>g"
+"oogle.com.pr|q,as_q|Google - Puerto Rico>google.com.qa|q,as_q|Googl"
+"e - Qatar>google.ro|q,as_q|Google - Romania>google.ru|q,as_q|Google"
+" - Russia>google.st|q,as_q|Google - Sao Tome and Principe>google.co"
+"m.sa|q,as_q|Google - Saudi Arabia>google.com.sg|q,as_q|Google - Sin"
+"gapore>google.sk|q,as_q|Google - Slovakia>google.si|q,as_q|Google -"
+" Slovenia>google.co.za|q,as_q|Google - South Africa>google.es|q,as_"
+"q|Google - Spain>google.lk|q,as_q|Google - Sri Lanka>google.se|q,as"
+"_q|Google - Sweden>google.ch|q,as_q|Google - Switzerland>google.com"
+".tw|q,as_q|Google - Taiwan>google.co.th|q,as_q|Google - Thailand>go"
+"ogle.bs|q,as_q|Google - The Bahamas>google.tt|q,as_q|Google - Trini"
+"dad and Tobago>google.com.tr|q,as_q|Google - Turkey>google.com.ua|q"
+",as_q|Google - Ukraine>google.ae|q,as_q|Google - United Arab Emirat"
+"es>google.co.uk|q,as_q|Google - United Kingdom>google.com.uy|q,as_q"
+"|Google - Uruguay>google.co.ve|q,as_q|Google - Venezuela>google.com"
+".vn|q,as_q|Google - Viet Nam>google.co.vi|q,as_q|Google - Virgin Is"
+"lands>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor"
+"|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|quer"
+"y,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Sez"
+"nam.cz>abcsok.no|q|Startsiden>tiscali.it|key|Tiscali>virgilio.it|qs"
+"|Virgilio>yahoo.com,search.yahoo.com|p|Yahoo!>ar.yahoo.com,ar.searc"
+"h.yahoo.com|p|Yahoo! - Argentina>au.yahoo.com,au.search.yahoo.com|p"
+"|Yahoo! - Australia>ca.yahoo.com,ca.search.yahoo.com|p|Yahoo! - Can"
+"ada>fr.yahoo.com,fr.search.yahoo.com|p|Yahoo! - France>de.yahoo.com"
+",de.search.yahoo.com|p|Yahoo! - Germany>hk.yahoo.com,hk.search.yaho"
+"o.com|p|Yahoo! - Hong Kong>in.yahoo.com,in.search.yahoo.com|p|Yahoo"
+"! - India>yahoo.co.jp,search.yahoo.co.jp|p,va|Yahoo! - Japan>kr.yah"
+"oo.com,kr.search.yahoo.com|p|Yahoo! - Korea>mx.yahoo.com,mx.search."
+"yahoo.com|p|Yahoo! - Mexico>ph.yahoo.com,ph.search.yahoo.com|p|Yaho"
+"o! - Philippines>sg.yahoo.com,sg.search.yahoo.com|p|Yahoo! - Singap"
+"ore>es.yahoo.com,es.search.yahoo.com|p|Yahoo! - Spain>telemundo.yah"
+"oo.com,espanol.search.yahoo.com|p|Yahoo! - Spanish (US : Telemundo)"
+">tw.yahoo.com,tw.search.yahoo.com|p|Yahoo! - Taiwan>uk.yahoo.com,uk"
+".search.yahoo.com|p|Yahoo! - UK and Ireland>yandex|text|Yandex.ru>s"
+"earch.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink"
+" Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRu"
+"nner Search>optimum.net|q|Optimum Search";

s.getGoogleRank=new Function("ce,ie,ev1,ev2,dn",""
+"var s=this,dr,rd,p,pa,kr,kw,dn=dn||'';qp='resnum,cd';dr=s.referrer|"
+"|typeof s.referrer!='undefined'?s.referrer:document.referrer;if(!dr"
+"||!ce||!ie)return;rd=s.split(dr,'/');if(rd[2].substring(0,11)!='www"
+".google.')return;kw=s.getQueryParam('q,as_q',' ',dr);if(!kw)return;"
+"if(ev1)s[ev1]=kw;kr=rd[3].substring(0,4)=='url?'?s.getQueryParam(qp"
+",'|',dr):'';if(kr.indexOf('|')>-1)kr=kr.substring(0,kr.indexOf('|')"
+");if(!kr||kr=='0'){if(ev2)s[ev2]='no rank available';return;}if(ev2"
+")s[ev2]=kr;p=s.products;pa=s.split(p,',');pa[0]=s.split(pa[0],';');"
+"pa[0][0]=pa[0][0]||'';pa[0][1]=pa[0][1]||dn;pa[0][2]=pa[0][2]||'';p"
+"a[0][3]=pa[0][3]||'';pa[0][4]=s.apl(pa[0][4],ie+'='+kr,'|',2);pa[0]"
+"=s.join(pa[0],{delim:';'});pa=s.join(pa,{delim:','});s.events=s.apl"
+"(s.events,ce,',',2);s.events=s.apl(s.events,ie,',',2);s.products=pa"
+";return;");

/*
* TNT Integration Plugin v1.0
*/
s.trackTNT =new Function("v","p","b",""
+"var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s."
+"getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v"
+"]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");


/*
 * Plugin: detectRIA v0.1 - detect and set Flash, Silverlight versions
 */
s.detectRIA=new Function("cn", "fp", "sp", "mfv", "msv", "sf", ""
+"cn=cn?cn:'s_ria';msv=msv?msv:2;mfv=mfv?mfv:10;var s=this,sv='',fv=-"
+"1,dwi=0,fr='',sr='',w,mt=s.n.mimeTypes,uk=s.c_r(cn),k=s.c_w('s_cc',"
+"'true',0)?'Y':'N';fk=uk.substring(0,uk.indexOf('|'));sk=uk.substrin"
+"g(uk.indexOf('|')+1,uk.length);if(k=='Y'&&s.p_fo('detectRIA')){if(u"
+"k&&!sf){if(fp){s[fp]=fk;}if(sp){s[sp]=sk;}return false;}if(!fk&&fp)"
+"{if(s.pl&&s.pl.length){if(s.pl['Shockwave Flash 2.0'])fv=2;x=s.pl['"
+"Shockwave Flash'];if(x){fv=0;z=x.description;if(z)fv=z.substring(16"
+",z.indexOf('.'));}}else if(navigator.plugins&&navigator.plugins.len"
+"gth){x=navigator.plugins['Shockwave Flash'];if(x){fv=0;z=x.descript"
+"ion;if(z)fv=z.substring(16,z.indexOf('.'));}}else if(mt&&mt.length)"
+"{x=mt['application/x-shockwave-flash'];if(x&&x.enabledPlugin)fv=0;}"
+"if(fv<=0)dwi=1;w=s.u.indexOf('Win')!=-1?1:0;if(dwi&&s.isie&&w&&exec"
+"Script){result=false;for(var i=mfv;i>=3&&result!=true;i--){execScri"
+"pt('on error resume next: result = IsObject(CreateObject(\"Shockwav"
+"eFlash.ShockwaveFlash.'+i+'\"))','VBScript');fv=i;}}fr=fv==-1?'flas"
+"h not detected':fv==0?'flash enabled (no version)':'flash '+fv;}if("
+"!sk&&sp&&s.apv>=4.1){var tc='try{x=new ActiveXObject(\"AgControl.A'"
+"+'gControl\");for(var i=msv;i>0;i--){for(var j=9;j>=0;j--){if(x.is'"
+"+'VersionSupported(i+\".\"+j)){sv=i+\".\"+j;break;}}if(sv){break;}'"
+"+'}}catch(e){try{x=navigator.plugins[\"Silverlight Plug-In\"];sv=x'"
+"+'.description.substring(0,x.description.indexOf(\".\")+2);}catch('"
+"+'e){}}';eval(tc);sr=sv==''?'silverlight not detected':'silverlight"
+" '+sv;}if((fr&&fp)||(sr&&sp)){s.c_w(cn,fr+'|'+sr,0);if(fr)s[fp]=fr;"
+"if(sr)s[sp]=sr;}}");
s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,m;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(m=0;m<b.length&&(c=b[m++]);)if(-1<a.indexOf(c))return null;n=1;return a}function p(a,d,b,c,e){var g,k;if(a.dataset&&(k=a.dataset[d]))g=k;else if(a.getAttribute)if(k=a.getAttribute("data-"+b))g=k;else if(k=a.getAttribute(b))g=k;if(!g&&f.useForcedLinkTracking&&e){var h;a=a.onclick?""+a.onclick:"";varValue="";if(c&&a&&(d=a.indexOf(c),0<=d)){for(d+=c.length;d<a.length;)if(b=a.charAt(d++),
0<="'\"".indexOf(b)){h=b;break}for(k=!1;d<a.length&&h;){b=a.charAt(d);if(!k&&b===h)break;"\\"===b?k=!0:(varValue+=b,k=!1);d++}}(h=varValue)&&(f.w[c]=h)}return g||e&&f.w[c]}function q(a,d,b){var c;return(c=e[d](a,b))&&(n?(n=0,c):g(h(c),e[d+"Exclusions"]))}function r(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&s[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==
(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)r(c[a],d,b)}function h(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}",
"mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var l=window;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);e._il=l.s_c_il;e._in=l.s_c_in;e._il[e._in]=e;l.s_c_in++;e._c="s_m";e.c={};var n=0,s={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=q(e,"link",f.linkName))&&(b=q(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,
127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(h(d),e.linkExclusions);else if((b=a)&&!(b=p(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(h(a.innerText||a.textContent),e.linkExclusions))||(r(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(h(c.join(""))))||(f=g(h(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(h(a.value)):"IMAGE"==c&&a.src&&(f=g(h(a.src)))));b=f}return b};
e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=p(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.12.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.12.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.ac;q||(q=null);var p=k,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!=""+s&&p.location&&""+m.location!=""+p.location&&m.location.host==s.host;)p=m,m=p.parent}catch(u){}a.D=function(a){try{console.log(a)}catch(b){}};a.Pa=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Ib=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ha&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ha=0<d?c.substring(d):c}return a.Ha};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Ib(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.Fb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.tb(a,function(){}))};a.tb=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};
a.M=[];a.fa=function(c,b,d){if(a.Ia)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ga)for(a.ga=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ga=0,a.delayReady())});f=1;e=0}else d||a.o("_d")&&(f=1);f&&(a.M.push({m:c,a:b,t:e}),a.ga||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.o("_d")?b=1:a.za();0<a.M.length;){d=a.M.shift();if(b&&!d.t&&d.t>c){a.M.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ia=1;a[d.m].apply(a,d.a);a.Ia=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.fa("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.Q,(h=a.lightTrackVars)&&(h=","+h+","+a.ka.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Zb,f=a[e].Yb));h&&(h=","+h+","+a.G.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.q=function(c,
b,d,f,e){var g="",h,l,k,n,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.q(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),n=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Pa(n)&&("prop"==k?h="c"+n:"eVar"==k?h="v"+n:"list"==k?h="l"+n:"hier"==k&&(h="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Lb=function(){var c="",b,d,f,e,g,h,l,k,n="",m="",p=e="",r=a.V();if(a.lightProfileID)b=a.Q,(n=a.lightTrackVars)&&(n=","+n+","+a.ka.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Zb,m=a[e].Yb));n&&(n=","+n+","+a.G.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&a.xa()&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.q("cid",e))}a.AudienceManagement&&
a.AudienceManagement.isReady()&&(c+=a.q("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.X("ECID")&&(g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.q("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.q("mts",a[e],n,e));g="";break;default:a.Pa(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==
f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ja&&(c+="&lrt="+a.ja,a.ja=null);return c};a.C=function(a){var b=a.tagName;if("undefined"!=""+a.ec||"undefined"!=""+a.Ub&&"HTML"!=(""+a.Ub).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.La=function(a){var b=k.location,
d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.N=function(c){var b=a.C(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+
f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.La(c),e)?{id:e.substring(0,100),type:g}:0};a.bc=function(c){for(var b=a.C(c),d=a.N(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.C(c),d=a.N(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Tb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,h;a.la=1;d||(a.la=0,d=a.clickObject);if(d){c=a.C(d);for(b=a.N(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.C(d),b=a.N(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.la=1;!e&&d&&(e=a.La(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(p=g[h])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Oa(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=
0;h<g.length;h++)p=g[h],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Mb=function(){var c=a.la,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Pb()){var b={},d=0,e=a.ob(),g=e?e.split("&"):0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");a.e=a.q("c",h)+
(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),
h--);a.ub(e)}}}return c};a.ob=function(){if(a.useLinkTrackSessionStorage){if(a.Ca())return k.sessionStorage.getItem(a.R)}else return a.cookieRead(a.R)};a.Ca=function(){return k.sessionStorage?!0:!1};a.ub=function(c){a.useLinkTrackSessionStorage?a.Ca()&&k.sessionStorage.setItem(a.R,c):a.cookieWrite(a.R,c)};a.Nb=function(){if(!a.Xb){var c=new Date,b=p.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l=
"1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.cc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),
q=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=q;a.homepage=m;a.Xb=1}};a.S={};a.loadModule=function(c,b){var d=a.S[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.S[c]=a[c]=d;d.jb=function(){return d.rb};d.vb=function(b){if(d.rb=b)a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",
{get:d.jb,set:d.vb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d))};a.o=function(c){var b,d;for(b in a.S)if(!Object.prototype[b]&&(d=a.S[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Pb=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Qb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);
if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.T=function(c,b){var d,f,e,g,h,k;for(d=0;2>d;d++)for(f=0<d?a.Da:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])h[k]||(h[k]=a[g][k]);a[g]=h}};a.Za=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Da:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.Hb=function(a){var b,d,f,e,g,h=0,k,m="",n="";if(a&&
255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+
e:n+=(n?"&":"")+e;m&&n?k=m+"&"+n:n=""}d=253-(k.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.cb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ca=!1;a.J=!1;a.xb=function(){a.J=!0;a.H()};a.K=!1;a.U=!1;a.yb=function(c){a.marketingCloudVisitorID=
c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.K=!1;a.U=!0;a.H()};a.bb=function(c){a.maxDelay||(a.maxDelay=250);return a.o("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.aa=!1;a.I=!1;a.za=function(){a.I=!0;a.H()};a.isReadyToTrack=function(){var c=!0;if(!a.nb()||!a.mb())return!1;a.xa()||(c=!1);a.qb()||(c=!1);return c};a.nb=function(){a.ca||a.J||(a.cb(a.xb)?a.J=!0:a.ca=!0);return a.ca&&!a.J?!1:!0};
a.mb=function(){var c=a.va();if(c)if(a.ta||a.ba)if(a.ta){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.sb,!0),a.ba=!0,!1;return!0};a.X=function(c){var b=a.va();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.va=function(){return k.adobe&&k.adobe.optIn?k.adobe.optIn:null};a.xa=function(){var c=a.V();return c&&c.getVisitorValues&&(a.K||a.U||(a.K=!0,c.getVisitorValues(a.yb)),a.K&&!a.U)?!1:!0};a.V=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);
return c};a.qb=function(){a.aa||a.I||(a.bb(a.za)?a.I=!0:a.aa=!0);return a.aa&&!a.I?!1:!0};a.ba=!1;a.sb=function(){a.ba=!1;a.ta=!0};a.l=q;a.r=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Cb=c;f.Bb=b;f.zb=d;a.l==q&&(a.l=[]);a.l.push(f);0==a.r&&(a.r=setInterval(a.H,100))};a.H=function(){var c;if(a.isReadyToTrack()&&(a.wb(),a.l!=q))for(;0<a.l.length;)c=a.l.shift(),c.Bb.apply(c.Cb,c.zb)};a.wb=function(){a.r&&(clearInterval(a.r),a.r=0)};a.lb=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=
[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Za(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.Jb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/
108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset()),h=a.V();a.o("_s");a.lb(c)||(b&&a.T(b),c&&(d={},a.Za(d,0),a.T(c)),a.Qb()&&!a.visitorOptedOut&&(a.wa()||(a.fid=a.Jb()),a.Tb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||
(a.pageURL=f.href?f.href:f),a.referrer||a.$a||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:p.document.referrer),a.$a=1,a.referrer=a.Hb(a.referrer),a.o("_g")),a.Mb()&&!a.abort&&(h&&a.X("TARGET")&&!a.supplementalDataID&&h.getSupplementalDataID&&(a.supplementalDataID=h.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.X("AAM")||(a.contextData["cm.ssf"]=1),a.Nb(),g+=a.Lb(),a.pb(e,g),a.o("_t"),a.referrer=""))),c&&a.T(d,1));
a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.Ba=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ba.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPreTrackCallback")};a.gb=function(c){a.ua(a.Ba,c)};a.Aa=[];a.registerPostTrackCallback=function(c){for(var b=[],d=
1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Aa.push([c,b]):a.debugTracking&&a.D("DEBUG: Non function type passed to registerPostTrackCallback")};a.fb=function(c){a.ua(a.Aa,c)};a.ua=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.D(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.k=c,a.v=e);return a.track(f)};
a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.pb=function(c,b){var d=a.hb()+
"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.ya()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.gb(d);a.eb(d);a.W()};a.hb=function(){var c=a.ib();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.ya()?"10":"1")+"/JS-"+a.version+(a.Wb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.ya=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};a.ib=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&
(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.kb()+"."+c+".2o7.net");return b};a.kb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Ya=/{(%?)(.*?)(%?)}/;a.$b=RegExp(a.Ya.source,"g");a.Gb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.$b),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Ya),
k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.Kb());d.c=d.c.replace(g,a.escape(k))}}};a.Kb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.j(4,c.getFullYear())+"-"+a.j(2,c.getMonth()+1)+"-"+a.j(2,c.getDate())+"T"+a.j(2,c.getHours())+":"+a.j(2,c.getMinutes())+":"+a.j(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.j(2,b.getUTCHours())+":"+a.j(2,b.getUTCMinutes())};a.j=function(a,b){return(Array(a+
1).join(0)+b).slice(-a)};a.pa={};a.doPostbacks=function(c){if("object"==typeof c)if(a.Gb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.pa[d.id]=new Image,
a.pa[d.id].alt="",a.pa[d.id].src=d.c)}};a.eb=function(c){a.i||a.Ob();a.i.push(c);a.ia=a.B();a.Wa()};a.Ob=function(){a.i=a.Rb();a.i||(a.i=[])};a.Rb=function(){var c,b;if(a.oa()){try{(b=k.localStorage.getItem(a.ma()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.oa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ma=function(){var c=0;a.i&&(c=a.i.length);a.p&&c++;return c};a.W=function(){if(a.p&&(a.A&&a.A.complete&&a.A.F&&a.A.ra(),a.p))return;a.Na=q;if(a.na)a.ia>
a.P&&a.Ua(a.i),a.qa(500);else{var c=a.Ab();if(0<c)a.qa(c);else if(c=a.Ja())a.p=1,a.Sb(c),a.Vb(c)}};a.qa=function(c){a.Na||(c||(c=0),a.Na=setTimeout(a.W,c))};a.Ab=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.B()-a.Sa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ja=function(){if(0<a.i.length)return a.i.shift()};a.Sb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.D(b)}};
a.wa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Z=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.Z=!0,a.Y=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.Y=function(a){return k.$.parseJSON(a)},a.Z=!0):a.Y=function(){return null};a.Vb=function(c){var b,d,f;a.wa()&&2047<c.length&&(a.ab()&&(d=1,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Z?b.Ea=!0:b=0));!b&&a.Xa&&(c=c.substring(0,2047));
!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=2):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.Ta=Date.now();b.Ga=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ra=function(){b.Ta&&(a.ja=Date.now()-
b.Ta);a.fb(c);b.Ga();a.Eb();a.da();a.p=0;a.W();if(b.Ea){b.Ea=!1;try{a.doPostbacks(a.Y(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ka=function(){b.Ga();(a.trackOffline||a.na)&&a.p&&a.i.unshift(a.Db);a.p=0;a.ia>a.P&&a.Ua(a.i);a.da();a.qa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.ra():b.Ka())};a.Sa=a.B();if(1==d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);
else if(b.src=c,2==d){if(a.Qa)try{f.removeChild(a.Qa)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Qa=a.A}b.F=setTimeout(function(){b.F&&(b.complete?b.ra():(a.trackOffline&&b.abort&&b.abort(),b.Ka()))},5E3);a.Db=c;a.A=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.L||a.v)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ea=setTimeout(a.da,a.forcedLinkTrackingTimeout)};a.ab=function(){return"undefined"!==typeof XMLHttpRequest&&"withCredentials"in
new XMLHttpRequest?!0:!1};a.Eb=function(){if(a.oa()&&!(a.Ra>a.P))try{k.localStorage.removeItem(a.ma()),a.Ra=a.B()}catch(c){}};a.Ua=function(c){if(a.oa()){a.Wa();try{k.localStorage.setItem(a.ma(),k.JSON.stringify(c)),a.P=a.B()}catch(b){}}};a.Wa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ja()}};a.forceOffline=function(){a.na=!0};a.forceOnline=function(){a.na=!1};a.ma=function(){return a.offlineFilename+"-"+a.visitorNamespace+
a.account};a.B=function(){return(new Date).getTime()};a.Oa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Wb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.T(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||
0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=
d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};
a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ka="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.Q=a.ka.slice(0);a.Da="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.Q.push("prop"+m)),a.g.push("eVar"+m),a.Q.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.G=a.G.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.R="s_sq";a.Sa=0;a.ia=0;a.P=0;a.Ra=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Xa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Xa=!0}}catch(x){}a.da=function(){a.ea&&(k.clearTimeout(a.ea),a.ea=q);a.k&&a.L&&a.k.dispatchEvent(a.L);a.v&&("function"==typeof a.v?
a.v():a.k&&a.k.href&&(a.d.location=a.k.href));a.k=a.L=a.v=0};a.Va=function(){a.b=a.d.body;a.b?(a.u=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Fa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.u,!1);else{a.b.removeEventListener("click",a.u,!0);a.Fa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.O&&a.O==a.clickObject||!(a.clickObject.tagName||
a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var h=a.O=a.clickObject;a.ha&&(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.O==h&&(a.O=0)},1E4);f=a.Ma();a.track();if(f<a.Ma()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Oa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.k=c.target,a.L=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.u):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.Fa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.u,!0)),a.b.addEventListener("click",a.u,!1))):setTimeout(a.Va,30)};a.Fb();a.fc||(r?a.setAccount(r):a.D("Error, missing Report Suite ID in AppMeasurement initialization"),a.Va(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,k=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(k)for(q=0;!t&&q<k.length;){a=k[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,q,p;if(a)for(k=0;k<a.length;k++)q=a[k],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();