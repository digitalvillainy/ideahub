<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit08c655667aeb73cd10826393dc2d68c6
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'Neoan3\\Apps\\' => 12,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Neoan3\\Apps\\' => 
        array (
            0 => __DIR__ . '/..' . '/neoan3-apps/db',
            1 => __DIR__ . '/..' . '/neoan3-apps/jwt',
            2 => __DIR__ . '/..' . '/neoan3-apps/ops',
            3 => __DIR__ . '/..' . '/neoan3-apps/stateless',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'C' => 
        array (
            'Composer\\CustomDirectoryInstaller' => 
            array (
                0 => __DIR__ . '/..' . '/mnsami/composer-custom-directory-installer/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit08c655667aeb73cd10826393dc2d68c6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit08c655667aeb73cd10826393dc2d68c6::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit08c655667aeb73cd10826393dc2d68c6::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
