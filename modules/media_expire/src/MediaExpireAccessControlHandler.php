<?php

namespace Drupal\media_expire;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\media\MediaAccessControlHandler;

/**
 * Defines the access control handler for the media entity type.
 *
 * @see \Drupal\media\Entity\Media
 */
class MediaExpireAccessControlHandler extends MediaAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {

    switch ($operation) {
      case 'view':

        /** @var \Drupal\media\MediaTypeInterface $bundle */
        $bundle = \Drupal::entityTypeManager()
          ->getStorage('media_type')
          ->load($entity->bundle());

        if ($bundle->getThirdPartySetting('media_expire', 'enable_expiring')) {
          return AccessResult::allowedIf($account->hasPermission('view media') && $bundle->getThirdPartySetting('media_expire', 'fallback_media'));
        }
        else {
          return parent::checkAccess($entity, $operation, $account);
        }

      default:
        return parent::checkAccess($entity, $operation, $account);

    }
  }

}
