<?php
/**
 * Created by PhpStorm.
 * User: sroehrl
 * Date: 2/4/2019
 * Time: 1:36 PM
 */

namespace Neoan3\Frame;
use Neoan3\Core\Serve;

class Ideahub extends Serve{
    function vueComponent($element, $params = []) {
        $params['base'] = base;
        $path = path . '/component/' . $element . '/' . $element . '.ce.';
        if(file_exists($path . $this->viewExt)) {
            $this->footer .= '<template id="' . $element . '">' . $this->fileContent($path . $this->viewExt, $params) .
                             '</template>';
        }
        if(file_exists($path . $this->styleExt)) {
            $this->style .= $this->fileContent($path . $this->styleExt, $params);
        }
        if(file_exists($path . 'js')) {
            $this->js .= $this->fileContent($path . 'js', $params);
        }
        return $this;
    }

    function constants(){
        return [
            'base'=>[base],
            'link'=>[
                [
                    'sizes'=>'32x32',
                    'type'=>'image/png',
                    'rel'=>'icon',
                    'href'=>'asset/neoan-favicon.png'
                ]
            ],
            'meta'       => [
                ['name' => 'viewport', 'content' => 'width=device-width, initial-scale=1']
            ],
            'js'         => [
                ['src' => base . 'node_modules/vue/dist/vue.js'],
                ['src' => base . 'node_modules/axios/dist/axios.min.js'],
                ['src' => base . 'node_modules/lodash/lodash.min.js'],
                ['src' => base . 'node_modules/crypto-js/crypto-js.js'],
            ],
            'stylesheet'=>[
            ''.base.'node_modules/bulma/css/bulma.css',
            ]
        ];
    }
}
