function LoaderScripts(src, cb, ordered){
    var tmp;
    var ref = document.getElementsByTagName( "script" )[ 0 ];
    var script = document.createElement( "script" );

    if (typeof(cb) === 'boolean') {
        tmp = ordered;
        ordered = cb;
        cb = tmp;
    }

    script.src = src;
    script.async = !ordered;
    ref.parentNode.insertBefore( script, ref );

    if (cb && typeof(cb) === "function") {
        script.onload = cb;
    }
    return script;
}


// VENDORS
LoaderScripts("./assets/vendor/modernizr/modernizr.js", true);
LoaderScripts("./assets/vendor/jquery/jquery.js", true);
LoaderScripts("./assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js", true);
LoaderScripts("./assets/vendor/bootstrap/js/bootstrap.js", true);
LoaderScripts("./assets/vendor/nanoscroller/nanoscroller.js", true);
LoaderScripts("./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js", true);
LoaderScripts("./assets/vendor/magnific-popup/magnific-popup.js", true);
LoaderScripts("./assets/vendor/jquery-placeholder/jquery.placeholder.js", true);
LoaderScripts("./assets/vendor/raphael/raphael.js", true);
LoaderScripts("./assets/vendor/morris/morris.js", true);
LoaderScripts("./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js", true);
LoaderScripts("./assets/vendor/jquery-maskedinput/jquery.maskedinput.js", true);
LoaderScripts("./assets/vendor/select2/select2.js", true);
LoaderScripts("./assets/vendor/bootstrap-fileupload/bootstrap-fileupload.min.js", true);
LoaderScripts("./assets/vendor/lity/lity.min.js", true);
LoaderScripts("./assets/vendor/vanilla-back-to-top/vanilla-back-to-top.min.js", true);
LoaderScripts("./assets/vendor/xzoom/xzoom.min.js", true);
// LoaderScripts("./", true);
// LoaderScripts("./", true);
// LoaderScripts("./", true);
// LoaderScripts("./", true);


LoaderScripts("./assets/javascripts/theme.js", true);
LoaderScripts("./assets/javascripts/theme.custom.js", true);
LoaderScripts("./assets/javascripts/theme.init.js", true);
// LoaderScripts("./", true);
// LoaderScripts("./", true);

LoaderScripts("assets/javascripts/theme.init.js", function() {
    
    
    // profile basic
    if (document.querySelector('#chartBasic')) {
        var chartBasicData = [
            {
                label: "New",
                value: 5749
            }
        ];
        Morris.Donut({
            resize: true,
            element: 'chartBasic',
            data: chartBasicData,
            colors: ['#5bc0de']
        });
    }

    // profile 3rz
    if (document.querySelector('#chart3RZ')) {
        var chart3RZData = [
            {
                label: "New",
                value: 32
            },
            {
                label: "Pending",
                value: 1
            },
            {
                label: "Approved",
                value: 1
            }
        ];
        Morris.Donut({
            resize: true,
            element: 'chart3RZ',
            data: chart3RZData,
            colors: ['#5bc0de', '#ed9c28', '#47a447']
        });
    }

    // profile level1
    if (document.querySelector('#chartLevel1')) {
        var chartLevel1Data = [
            {
                label: "New",
                value: 4
            }, 
            {
                label: "Pending",
                value: 4
            }, 
            {
                label: "Reproved",
                value: 1
            },
            {
                label: "Aproved",
                value: 15
            }
        ];
        Morris.Donut({
            resize: true,
            element: 'chartLevel1',
            data: chartLevel1Data,
            colors: ['#5bc0de', '#ed9c28', '#d2322d', '#47a447']
        });
    }

    // profile stellar
    if (document.querySelector('#chartStellar')) {
        var chartStellarData = [
            {
                label: "New",
                value: 6
            }, 
            {
                label: "Aproved",
                value: 1
            }
        ];
        Morris.Donut({
            resize: true,
            element: 'chartStellar',
            data: chartStellarData,
            colors: ['#5bc0de', '#47a447']
        });
    }

    // profile paxful
    if (document.querySelector('#chartPaxful')) {
        var chartPaxfulData = [
            {
                label: "Customers",
                value: 0
            }
        ];
        Morris.Donut({
            resize: true,
            element: 'chartPaxful',
            data: chartPaxfulData,
            colors: ['#5bc0de']
        });
    }

    // profile operator
    if (document.querySelector('#chartOperator')) {
        var chartOperatorData = [
            {
                label: "New",
                value: 8
            }
        ];
        Morris.Donut({
            resize: true,
            element: 'chartOperator',
            data: chartOperatorData,
            colors: ['#5bc0de']
        });
    }

    // profile sumsub
    if (document.querySelector('#chartSumsub')) {
        var chartSumsubData = [
            {
                label: "New",
                value: 2
            }, 
            {
                label: "Pending",
                value: 4
            }, 
            {
                label: "Reproved",
                value: 1
            },
            {
                label: "Aproved",
                value: 1
            }
        ];
        Morris.Donut({
            resize: true,
            element: 'chartSumsub',
            data: chartSumsubData,
            colors: ['#5bc0de', '#ed9c28', '#d2322d', '#47a447']
        });
    }


    addBackToTop({
        diameter: 42,
        backgroundColor: '#3938F1',
        textColor: '#fff'
    });

    $(".xzoom").each(function() {
        $(this).xzoom({
            tint: '#333', 
            Xoffset: 15,
            zoomWidth: 500,
            zoomHeight: 350
        });
    });


}, true);