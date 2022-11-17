import {Button, LinkOverlay, ButtonProps, LinkOverlayProps} from '@chakra-ui/react';

export const LinkedButton = (text: string, linkProps: LinkOverlayProps, buttonProps:ButtonProps) => (
    <LinkOverlay {...linkProps}>
        <Button {...buttonProps}>
            {text}
        </Button>
    </LinkOverlay>
)