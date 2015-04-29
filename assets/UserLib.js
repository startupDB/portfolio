$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true;

        var comp_comp1 = new PgComponentType('comp1', 'flexrow center-v-h / Section');
        comp_comp1.code = '<div class="pg-empty-placeholder section grey flexrow flexcenter">\
    <div class="flexrow flexcenter flexmiddle" data-pg-collapsed>\
        <div class="col s12 m4 l4">\
            <h3>Column Header</h3>\
        </div>\
    </div>\
</div>';
        comp_comp1.parent_selector = 'body';
        f.addComponentType(comp_comp1);

    });
});
