import {
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetDescription
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function MenuSidebar(): JSX.Element {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>List of menu links</SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
