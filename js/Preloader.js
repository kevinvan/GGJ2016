var preload = function(game){
};
 
preload.prototype = {
    preload: function(){
        this.game.load.image('mic', 'assets/images/mic_profile_icon.png');
        this.game.load.image('jen', 'assets/images/jen_profile_icon.png');
        this.game.load.image('mvd', 'assets/images/mvd_profile_icon.png');
    },
    create: function(){
        this.game.state.start("StartMenu");
    },
    update: function(){
    },
    shutdown: function(){
    }
}