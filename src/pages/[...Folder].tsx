import React from "react";
import { useRouter } from "next/router";
import UploadFiles from "@/components/UploadFiles";
import ShowFiles from "@/components/ShowFiles";
import Topbar from "@/components/Topbar";
import { useFetchSession } from "@/hooks/useSession";

export default function Folder() {
  const router = useRouter();
  // How to get folder ID
  // console.log(router?.query?.id);
  let { session } = useFetchSession();
  let parentId = router?.query?.id;

  return (
    <div>
      <Topbar />
      {session && (
        <>
          <UploadFiles parentId={parentId as string} />
          <ShowFiles parentId={parentId as string} />
        </>
      )}
    </div>
  );
}
