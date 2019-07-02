<?php
namespace Neoan3\Components;
use Neoan3\Core\Unicore;

class Demo extends Unicore{
    private $components = ['demo'];
    function init(){
        $this->uni('ideahub')
            ->callback($this,'setup')
            ->hook('main','demo')
            ->output();
    }

    function setup($frame){
        foreach ($this->components as $component){
            $frame->vueComponent($component);
        }
    }
}
