import { Chip } from "@nextui-org/react";

export const statusChip = (e: string) => {
  switch (e) {
    case "Guest":
      return (
        <Chip
          variant="bordered"
          size="lg"
          color="primary"
          classNames={{
            base: `w-[100px] min-w-[100px]`,
            content: `flex iitems-center justify-center`,
          }}
        >
          Qonaq
        </Chip>
      );
    case "Employee":
      return (
        <Chip
          variant="bordered"
          size="lg"
          color="secondary"
          classNames={{
            base: `w-[100px] min-w-[100px]`,
            content: `flex iitems-center justify-center`,
          }}
        >
          İşçi
        </Chip>
      );
    case "Paid":
      return (
        <Chip
          variant="bordered"
          size="lg"
          color="success"
          classNames={{
            base: `w-[100px] min-w-[100px]`,
            content: `flex iitems-center justify-center`,
          }}
        >
          Ödənişli
        </Chip>
      );
    case "Tenant":
      return (
        <Chip
          variant="bordered"
          size="lg"
          color="danger"
          classNames={{
            base: `w-[100px] min-w-[100px]`,
            content: `flex iitems-center justify-center`,
          }}
        >
          Ödənişli
        </Chip>
      );
    case "Free":
      return (
        <Chip
          variant="bordered"
          size="lg"
          color="warning"
          classNames={{ base: `w-[100px] min-w-[100px]` }}
        >
          Pulsuz
        </Chip>
      );
  }
};

export const tripodType = (e: string) => {
  switch (e) {
    case "Old town tripod-1-In":
      return <Chip color="primary">Giriş</Chip>;
    case "Old town tripod-3-In":
      return <Chip color="primary">Giriş</Chip>;
    case "Old town tripod-2-Out":
      return <Chip color="danger">Çıxış</Chip>;
    case "Old town tripod-4-Out":
      return <Chip color="danger">Çıxış</Chip>;
  }
};

export const tripodTextType = (e: string) => {
  switch (e) {
    case "Old town tripod-1-In":
      return "TRIPOD:1";
    case "Old town tripod-3-In":
      return "TRIPOD:3";
    case "Old town tripod-2-Out":
      return "TRIPOD:2";
    case "Old town tripod-4-Out":
      return "TRIPOD:4";
  }
};
