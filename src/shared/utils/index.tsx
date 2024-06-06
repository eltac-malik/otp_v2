import { Chip } from "@nextui-org/react";

export const statusChip = (e: string, t: any) => {
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
          {t("statuses.guest")}
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
          {t("statuses.employee")}
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
          {t("statuses.paid")}
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
          {t("statuses.tenant")}
        </Chip>
      );
    case "Free":
      return (
        <Chip
          variant="bordered"
          size="lg"
          color="warning"
          classNames={{
            base: `w-[100px] min-w-[100px]`,
            content: `flex iitems-center justify-center`,
          }}
        >
          {t("statuses.free")}
        </Chip>
      );
  }
};

export const tripodType = (e: string, t: any) => {
  switch (e) {
    case "Old town tripod-1-In":
      return <Chip className="bg-blue-500 text-white">{t("tripType.1")}</Chip>;
    case "Old town tripod-3-In":
      return <Chip className="bg-blue-500 text-white">{t("tripType.3")}</Chip>;
    case "Old town tripod-2-Out":
      return <Chip className="bg-red-500 text-white">{t("tripType.2")}</Chip>;
    case "Old town tripod-4-Out":
      return <Chip className="bg-red-500 text-white">{t("tripType.4")}</Chip>;
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
