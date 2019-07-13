<?php
/**
 * Created by PhpStorm.
 * User: sroehrl
 * Date: 2/4/2019
 * Time: 1:36 PM
 */

namespace Neoan3\Frame;
use Neoan3\Apps\Db;
use Neoan3\Apps\DbException;
use Neoan3\Apps\DbEnvironment;
use Neoan3\Apps\Stateless;
use Neoan3\Core\Serve;

/**
 * Class Ideahub
 *
 * @package Neoan3\Frame
 */
class Ideahub extends Serve{

    /**
     * Ideahub constructor.
     *
     * @throws \Neoan3\Apps\DbException
     */
    function __construct() {
        Db::setEnvironment([
            'assumes_uuid'=>true,
            'name'=>'ideahub'
                           ]);
        Stateless::setSecret('123456');
        parent::__construct();
    }

    /**
     * @param       $element
     * @param array $params
     *
     * @return $this
     */
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

    /**
     * @return array
     */
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
                ['src' => base . 'node_modules/axios/dist/axios.js'],
                ['src' => path . '/frame/ideahub/axios-wrapper.js', 'data' => ['base' => base]],
                ['src' => base . 'node_modules/crypto-js/crypto-js.js'],
                ['src' => base . 'asset/fontawesome/js/all.min.js'],
            ],
            'stylesheet'=>[
            ''.base.'frame/ideahub/ideahub.css',
            ]
        ];
    }
}
