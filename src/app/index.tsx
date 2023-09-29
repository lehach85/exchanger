import './index.css'
import {Router} from "@/pages";
import {ErrorBoundary} from "@/shared/ErrorBoundary";

function Index() {
  return (
      <ErrorBoundary>
        <Router/>
      </ErrorBoundary>
  )
}

export default Index
