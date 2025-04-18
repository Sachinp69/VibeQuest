import EventForm from "@/components/shared/EventForm"
import GoogleMapsWrapper from "@/components/shared/GoogleMapsWrapper";
import { auth } from "@clerk/nextjs/server";

const CreateEvent = async () => {
  const getUserId = async () => {
    const { sessionClaims } = await auth();
    return sessionClaims?.userId as string;
  };

  const userId = await getUserId();

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <GoogleMapsWrapper>
          <EventForm userId={userId} type="Create" />
        </GoogleMapsWrapper >
      </div>
    </>
  )
}

export default CreateEvent