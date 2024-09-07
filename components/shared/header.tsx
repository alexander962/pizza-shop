import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <div className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-base text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
