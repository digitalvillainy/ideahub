<?php
/* Generated by neoan3-cli */
namespace Neoan3\Model;
use Neoan3\Apps\Db;
use Neoan3\Apps\DbException;
use Neoan3\Apps\Ops;
class ImageModel extends IndexModel {
    static function byId($id){
        return IndexModel::first(Db::easy('image.*',['id'=>'$'.$id]));
    }
    static function undeletedById($id){
        $img = IndexModel::first(Db::easy('image.*',['id'=>'$'.$id,'^delete_date']));
        return $img;
    }
    static function saveFromBase64($b64String,$userId){
        try{
            preg_match('/data:([a-z\/]+);base64,/',$b64String,$matches);
            $newImageRaw = substr($b64String,strlen($matches[0]));
            if(!is_dir(path.'/asset/upload/')){
                mkdir(path.'/asset/upload/',0755);
            }
            $directory = path.'/asset/upload/'.$userId;
            $fileType = explode('/',$matches[1]);
            if(!is_dir($directory)){
                mkdir($directory,0755);
            }
            $path = '/'.Ops::hash(22).'.'.end($fileType);
            file_put_contents($directory.$path,base64_decode($newImageRaw));
            $newId = Db::uuid()->uuid;
            $newImage = [
                'id'=>'$'.$newId,
                'format'=>$matches[1],
                'path'=>'/asset/upload/'.$userId.$path,
                'inserter_user_id'=>'$'.$userId
            ];
            Db::image($newImage);
        } catch(DbException $e){
            return false;
        }
        return $newId;
    }
}
