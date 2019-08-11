<?php
/* Generated by neoan3-cli */

namespace Neoan3\Components;

use Neoan3\Apps\Db;
use Neoan3\Apps\DbException;
use Neoan3\Apps\Stateless;
use Neoan3\Core\RouteException;
use Neoan3\Frame\Ideahub;
use Neoan3\Model\UserModel;
use Neoan3\Apps\Session;


/**
 * Class Login
 * @package Neoan3\Components
 */
class Login extends Ideahub {
    private $input = [];

    /**
     * @param $credentials
     *
     * @return array
     * @throws DbException
     * @throws RouteException
     */
    function postLogin($credentials) {
        $existingUser = UserModel::find(['email' => $credentials['email']]);
        $foundUser = $existingUser[0];
        $password = Db::easy('user_password.password', ['user_password.user_id' => '$' . $foundUser['id']]);
        if (!isset($credentials['email']) || !isset($credentials['password'])) {
            throw new RouteException('missing values', 401);
        }
        if (empty($existingUser)) {
            throw new RouteException('unauthorized', 401);
        }
        if (empty($password)) {
            throw new RouteException('unauthorized', 401);
        }
        if (password_verify($credentials['password'], $password[0]['password']) == $credentials['password']) {
            $jwt = Stateless::assign($foundUser['id'], 'user',['exp'=>time()+(2*60*60)]);
            return ['token' => $jwt];
        }
        throw new RouteException('unauthorized', 401);
    }

    /**
     * @throws RouteException
     */
    function deleteLogin(){
        $jwt = Stateless::restrict();
        Session::logout();
    }

}
