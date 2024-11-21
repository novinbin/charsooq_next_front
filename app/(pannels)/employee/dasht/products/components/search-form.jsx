"use client";

import { Input } from "@/components/ui/input";
import useMount from "@/hooks/use-mount";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/submit-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import qs from "query-string";
import { useRouter } from "next/navigation";

const SearchForm = ({ limit, offset, orderBy }) => {
  const mount = useMount();

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      limit: limit || "10",
      offset: offset || "0",
      orderBy: orderBy || "Title",
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
 

    for (var propName in values) {
      if (
        values[propName] === null ||
        values[propName] === undefined ||
        values[propName] === ""
      ) {
        delete values[propName];
      }
    }

    const query = {
      ["limit"]: values.limit || null,
      ["offset"]: values.offset || null,
      ["orderBy"]: values.orderBy || null,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  if (!mount) {
    return null;
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={control}
              name="limit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تعداد</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="75">75</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="orderBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>مرتب سازی</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Title">عنوان</SelectItem>
                      <SelectItem value="Barcode">بارکد</SelectItem>
                      <SelectItem value="Code">کد</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="offset"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>offset</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      autoComplete="off"
                      placeholder="عدد وارد کنید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SubmitButton className="my-2" loading={isSubmitting}>
            جستجو
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default SearchForm;
