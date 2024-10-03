import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();
  return Promise.all([photo, user])
    .then(([p, u]) => {
      console.log(p.body, u.firstName, u.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
