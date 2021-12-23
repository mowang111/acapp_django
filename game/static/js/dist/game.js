class AcGameMenu {
    constructor(root){
        this.root=root;
        this.$menu=$(`
<div class="ac_game_menu">
    <div class="ac_game_menu_field">
        <div class="ac_game_menu_field_item ac_game_menu_field_item_single_mode">
            单人模式
        </div>
        <br>
        <div class="ac_game_menu_field_item ac_game_menu_field_item_multi_mode">
            多人模式
        </div>
        <br>
        <div class="ac_game_menu_field_item ac_game_menu_field_item_settings_mode">
            设置
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode=this.$menu.find(".ac_game_menu_field_item_single_mode");
        this.$multi_mode=this.$menu.find(".ac_game_menu_field_item_multi_mode");
        this.$settings_mode=this.$menu.find(".ac_game_menu_field_item_settings_mode");

        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events(){
        let outer=this;
        this.$single_mode.click(function(){
            console.log("click single mode");

            outer.hide();
            outer.root.playground.show();
        });
        
        this.$multi_mode.click(function(){
            console.log("click multi mode");
        });
        
        this.$settings_mode.click(function(){
            console.log("click settings mode");
        });
    }
    
    show(){//show menu
        this.$menu.show();
    }

    hide(){
        this.$menu.hide();
    }

}
class AcGamePlayground {
    constructor(root){
        this.root=root;
        this.$playground=$(`
<div class="ac_game_playground">
游戏界面
</div>
`);
        this.hide();
        this.root.$ac_game.append(this.$playground);
        this.start();
    }

    start(){

    }

    update(){

    }

    show() {
        this.$playground.show();
    }

    hide() {
        this.$playground.hide();
    }
}
class AcGame {
    constructor(id){
        this.id=id;
        this.$ac_game=$('#'+id);
        this.menu=new AcGameMenu(this);
        this.playground=new AcGamePlayground(this);

        this.start();
    }

    start(){

    }
}
